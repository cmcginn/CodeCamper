define('dataservice.location', ['amplify'], function (amplify) {
    var init = function() {
        amplify.request.define('locations', 'ajax', {
            url: '/api/locations',
            dataType: 'json',
            type: 'GET'
        });
        amplify.request.define('sublocations', 'ajax', {
            url: '/api/locations/{id}',
            dataType: 'json',
            type: 'GET'
        });
      
    };
    getSubLocations= function (callbacks, id) {
        return amplify.request({
            resourceId: 'sublocations',
            data: { id: id },
            success: callbacks.success,
            error: callbacks.error
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
        getLocations: getLocations,
        getSubLocations: getSubLocations
    };
});