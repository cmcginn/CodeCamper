define('mock/mock',
    [
    'mock/mock.generator',
    'mock/mock.dataservice.attendance',
    'mock/mock.dataservice.lookup',
    'mock/mock.dataservice.person',
    'mock/mock.dataservice.session',
    'mock/mock.dataservice.booking',
    'mock/mock.dataservice.location'
    ],
    function (generator, attendance, lookup, person, session,booking,location) {
        var
            model = generator.model,
            
            dataserviceInit = function () {
                lookup.defineApi(model);
                person.defineApi(model);
                session.defineApi(model);
                attendance.defineApi(model);
                booking.defineApi(model);
                location.defineApi(model);
            };

    return {
        dataserviceInit: dataserviceInit    
    };
});