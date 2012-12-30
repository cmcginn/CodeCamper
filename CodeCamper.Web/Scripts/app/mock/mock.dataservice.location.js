define('mock/mock.dataservice.location', ['amplify'], function(amplify) {
    var defineApi = function(model) {
        amplify.request.define('locations', function(settings) {
            settings.success(model.generateLocations().locations);
        });
    };
    return {
        defineApi: defineApi
    };

});