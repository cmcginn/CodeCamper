define('dataservice.location', ['amplify'], function (amplify) {
    var init = function() {
        amplify.request.define('locations', 'ajax', {
            url: '/api/locations',
            dataType: 'json',
            type: 'GET'
        });
    };
    getLocations = function(callbacks) {
        return amplify.request({
            resourceId: 'locations',
            success: callbacks.success,
            error: callbacks.error
        });
    };
    init();
    return {
       getLocations:getLocations 
    };
});