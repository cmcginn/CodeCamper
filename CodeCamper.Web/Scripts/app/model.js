define('model',
    [
        'model.attendance',
        'model.person',
        'model.room',
        'model.session',
        'model.timeslot',
        'model.track',
        'model.booking',
        'model.location'
    ],
    function (attendance, person, room, session, timeslot, track,booking,location) {
        var
            model = {
                Attendance: attendance,
                Person: person,
                Room: room,
                Session: session,
                TimeSlot: timeslot,
                Track: track,
                Booking: booking,
                Location:location
            };

        model.setDataContext = function (dc) {
            // Model's that have navigation properties 
            // need a reference to the datacontext.
            model.Attendance.datacontext(dc);
            model.Person.datacontext(dc);
            model.Session.datacontext(dc);
            model.Location.datacontext(dc);
        };

        return model;
    });