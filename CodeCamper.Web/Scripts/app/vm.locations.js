define('vm.locations', ['jquery', 'messenger', 'ko', 'datacontext'], function ($, messenger, ko, datacontext) {
    var locations = ko.observableArray();
    var init = function () {
    };
    activate = function(routeData, callback) {
        messenger.publish.viewModelActivated({ canleaveCallback: canLeave });
       
        //call data
        getLocations();
    };
    tmplName = function () {
        return 'locations.view';
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