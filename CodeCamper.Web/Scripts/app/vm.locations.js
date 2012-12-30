define('vm.locations', ['jquery', 'messenger', 'ko', 'datacontext', 'event.delegates'], function ($, messenger, ko, datacontext,eventDelegates) {
    var locations = ko.observableArray();
   
    var init = function () {
        //Bind jQuery Delegated Events
        eventDelegates.countriesSelect(onCountrySelected);
    };
    activate = function(routeData, callback) {
        messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
       
        //call data
        getLocations();
    };
    onCountrySelected = function(){
        getSubLocations(arguments[0]);
    },
    tmplName = function () {
        return 'locations.view';
    };
    getSubLocations = function (location) {
        if (!location.locations()) {
            $.when(datacontext.locations.getSubLocations(location));
            //$.when(datacontext.locations.getSubLocations(1, {
            //    success: function (data) {
            //        location.stateProvinces(data);
            //        console.log(location.stateProvinces());
            //    }
            //}));
        }
    };
    getLocations = function () {

        if (!locations().length) {
            datacontext.locations.getData({
                results: locations
            });
        }
    };
    
    getStateProvincesCommand = ko.asyncCommand({
        execute:function(complete) {
            console.log('arses11222');
        },
        canExecute:function(isExecuting) {
            return true;
        }
    });
       
   
    init();
    return {
        activate: activate,
        locations: locations,
        tmpName: tmplName,
        getStateProvincesCommand: getStateProvincesCommand
    };

});