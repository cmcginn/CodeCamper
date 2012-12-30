define('dataservice',
    [
        'dataservice.attendance',
        'dataservice.lookup',
        'dataservice.person',
        'dataservice.session',
        'dataservice.booking',
        'dataservice.location'
    ],
    function (attendance, lookup, person, session,booking,location) {
        return {
            attendance: attendance,
            lookup: lookup,
            person: person,
            session: session,
            booking: booking,
            location:location
        };
    });