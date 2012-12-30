define('mock/mock.dataservice.booking', ['amplify'], function(amplify) {
    var defineApi = function(model) {
        amplify.request.define('bookings', function(settings) {
            settings.success(model.generateBookings().bookings);
        });
    };
    return {
        defineApi: defineApi
    };
});