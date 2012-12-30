define('mock/mock.dataservice.location', ['amplify'], function(amplify) {
    var defineApi = function(model) {
        amplify.request.define('locations', function(settings) {
            settings.success(model.generateLocations().locations);
        });
        amplify.request.define('sublocations', function (settings) {
            settings.success(model.generateSubLocations().locations);
        });
    };
    return {
        defineApi: defineApi
    };

});