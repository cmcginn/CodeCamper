define('vm.bookings', ['jquery','messenger','ko','datacontext'], function($,messenger,ko,datacontext) {
    var bookings = ko.observableArray(),
        bookingsTemplate = 'bookings.view';
    var init = function () {
        // Bind jQuery delegated events
        //eventDelegates.sessionsListItem(gotoDetails);
        //eventDelegates.sessionsFavorite(saveFavorite);

        //// Subscribe to specific changes of observables
        //addFilterSubscriptions();
    };
    activate = function (routeData, callback) {
        messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
        getBookings();
    },
    canLeave = function() {
        return true;
    },
     tmplName = function () {
         return bookingsTemplate;
     };
    getBookings = function () {
       
        if (!bookings().length) {
            datacontext.bookings.getData({
               results:bookings 
            });
        }
    };
    init();
    return {
    activate: activate,
    canLeave: canLeave,
    bookings: bookings,
    bookingsTemplate: bookingsTemplate,
    //clearFilter: clearFilter,
    //forceRefreshCmd: forceRefreshCmd,
    //gotoDetails: gotoDetails,
    //speakerFilter: speakerFilter,
    //speakers: speakers,
    tmplName: tmplName
};
});