define('vm',
[
        'vm.favorites',
        'vm.session',
        'vm.sessions',
        'vm.shell',
        'vm.speaker',
        'vm.speakers',
        'vm.bookings',
        'vm.locations'
],
    function (favorites, session, sessions, shell, speaker, speakers,bookings,locations) {
        return {
            favorites: favorites,
            session: session,
            sessions: sessions,
            shell: shell,
            speaker: speaker,
            speakers: speakers,
            bookings: bookings,
            locations:locations
    };
});