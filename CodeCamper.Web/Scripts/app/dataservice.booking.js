define('dataservice.booking', ['amplify'],
    function (amplify) {
        var init = function () {
            amplify.request.define('bookings', 'ajax', {
                url: '/api/bookings',
                dataType: 'json',
                type: 'GET'
            });
        },
            getBookings = function (callbacks) {
                return amplify.request({
                    resourceId: 'bookings',
                    success: callbacks.success,
                    error:callbacks.error
                });
            };
        init();
        return {
          getBookings:getBookings  
        };

    });
