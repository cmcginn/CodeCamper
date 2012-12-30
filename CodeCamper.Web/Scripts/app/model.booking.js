define('model.booking', ['ko'], function (ko) {
    var Booking = function() {
        var self = this;
        self.id = ko.observable();
        self.date = ko.observable();
        self.name = ko.observable();
        self.isNullo = false;
        return self;
    };
    Booking.Nullo = new Booking().id(0).name('Not Booked');
    Booking.Nullo.isNullo = true;

    return Booking;
});