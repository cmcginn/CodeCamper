using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CodeCamper.Web.Controllers
{
    public class BookingsController : ApiController
    {
        //mock structure
        public class Booking
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public DateTime Date { get; set; }
        }

        List<Booking> GetMockBookings()
        {
            var result = new List<Booking>
                {
                    new Booking{ Date=System.DateTime.Now.AddDays(-5), Id = 1, Name = "First Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(-4), Id = 2, Name = "Second Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(-3), Id = 3, Name = "Third Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(-2), Id = 4, Name = "Fourth Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(-1), Id = 5, Name = "Fifth Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(0), Id = 6, Name = "Sixth Booking"},
                    new Booking{ Date=System.DateTime.Now.AddDays(1), Id = 7, Name = "Seventh Booking"},
                };
            return result;
        } 
        // GET api/bookings
        public List<Booking> Get()
        {
            return GetMockBookings();
        }

        // GET api/bookings/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/bookings
        public void Post([FromBody]string value)
        {
        }

        // PUT api/bookings/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/bookings/5
        public void Delete(int id)
        {
        }
    }
}
