﻿define('vm.session',
    ['ko', 'datacontext', 'config', 'router', 'messenger', 'sort'],
    function (ko, datacontext, config, router, messenger, sort) {

        var
            currentSessionId = ko.observable(),
            logger = config.logger,
            rooms = ko.observableArray(),
            session = ko.observable(),
            timeslots = ko.observableArray(),
            tracks = ko.observableArray(),
            //validationErrors = ko.observableArray([]),

            validationErrors = ko.computed(function () {
                // We don;t have a session early on. So we return an empty [].
                // Once we get a session, we want to point to its validation errors.
                var valArray = session() ? ko.validation.group(session())() : [];
                return valArray;
            }),

            canEditSession = ko.computed(function () {
                return session() && config.currentUser() && config.currentUser().id() === session().speakerId();
            }),

            canEditEval = ko.computed(function () {
                return session() && config.currentUser() && config.currentUser().id() !== session().speakerId();
            }),

            isDirty = ko.computed(function () {
                if (canEditSession()) {
                    return session().dirtyFlag().isDirty();
                }
                if (canEditEval()) {
                    if (session() && session().attendance && session().attendance()) {
                        return session().attendance().dirtyFlag().isDirty();
                    }
                }
                return false;
            }),

            isValid = ko.computed(function () {
                return (canEditEval() || canEditSession()) ? validationErrors().length === 0 : true;
            }),

            activate = function (routeData, callback) {
                messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
                currentSessionId(routeData.id);
                getRooms();
                getTimeslots();
                getTracks();
                getSession(callback);
            },

            cancelCmd = ko.asyncCommand({
                execute: function (complete) {
                    var callback = function () {
                        complete();
                        logger.success(config.toasts.retreivedData);
                    };
                    canEditSession() ? getSession(callback, true) : getAttendance(callback, true);
                },
                canExecute: function (isExecuting) {
                    return !isExecuting && isDirty();
                }
            }),

            goBackCmd = ko.asyncCommand({
                execute: function (complete) {
                    router.navigateBack();
                    complete();
                },
                canExecute: function (isExecuting) {
                    return !isExecuting && !isDirty();
                }
            }),

            canLeave = function () {
                return !isDirty() && isValid();
            },

            getSession = function (completeCallback, forceRefresh) {
                var callback = function() {
                    if (completeCallback) { completeCallback(); }
                };

                datacontext.sessions.getFullSessionById(
                    currentSessionId(), {
                        success: function(s) {
                            session(s);
                            callback();
                        },
                        error: callback
                    },
                    forceRefresh
                );
            },

            getAttendance = function (completeCallback, forceRefresh) {
                // Refresh the attendance in the datacontext
                var callback = completeCallback || function() {
                };

                datacontext.attendance.getSessionFavorite(
                    session().attendance().sessionId(),
                    {
                        success: function() { callback(); },
                        error: function() { callback(); }
                    },
                    forceRefresh
                );
            },

            getRooms = function () {
                if (!rooms().length) {
                    datacontext.rooms.getData({
                        results: rooms,
                        sortFunction: sort.roomSort
                    });
                }
            },

            getTimeslots = function () {
                if (!timeslots().length) {
                    datacontext.timeslots.getData({
                        results: timeslots,
                        sortFunction: sort.timeslotSort
                    });
                }
            },

            getTracks = function () {
                if (!tracks().length) {
                    datacontext.tracks.getData({
                        results: tracks,
                        sortFunction: sort.trackSort
                    });
                }
            },

            saveCmd = ko.asyncCommand({
                execute: function (complete) {
                    if (canEditSession()) {
                        $.when(datacontext.sessions.updateData(session()))
                            .always(complete);
                        return;
                    }
                    if (canEditEval()) {
                        $.when(datacontext.attendance.updateData(session()))
                            .always(complete);
                        return;
                    }
                },
                canExecute: function (isExecuting) {
                    return !isExecuting && isDirty() && isValid();
                }
            }),

            saveFavoriteCmd = ko.asyncCommand({
                execute: function(complete) {
                    var
                        wrapper = function () { saveFavoriteDone(complete); },

                        cudMethod = session().isFavorite()
                            ? datacontext.attendance.deleteData
                            : datacontext.attendance.addData;

                    cudMethod(session(),
                        {
                            success: wrapper,
                            error: wrapper
                        });
                },
                canExecute: function(isExecuting) {
                    return !isExecuting && session() && session().isUnlocked();
                }
            }),

            saveFavoriteDone = function (complete) {
                session.valueHasMutated(); // Trigger re-evaluation of isDirty
                complete();
            },

            tmplName = function () {
                return canEditSession() ? 'session.edit' : 'session.view';
            };

        return {
            activate: activate,
            cancelCmd: cancelCmd,
            canEditSession: canEditSession,
            canEditEval: canEditEval,
            canLeave: canLeave,
            goBackCmd: goBackCmd,
            isDirty: isDirty,
            isValid: isValid,
            rooms: rooms,
            session: session,
            saveCmd: saveCmd,
            saveFavoriteCmd: saveFavoriteCmd,
            timeslots: timeslots,
            tmplName: tmplName,
            tracks: tracks
        };
    });