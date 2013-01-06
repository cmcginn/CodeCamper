define('mock/mock.generator',
    ['jquery', 'moment'],
    function ($, moment) {
        var init = function () {
            $.mockJSON.random = true;
            $.mockJSON.log = false;
            $.mockJSON.data.SPEAKER_FIRST_NAME = ['John', 'Dan', 'Scott', 'Hans', 'Ward', 'Jim', 'Ryan', 'Steve', 'Ella', 'Landon', 'Haley', 'Madelyn'];
            $.mockJSON.data.SPEAKER_LAST_NAME = ['Papa', 'Wahlin', 'Guthrie', 'Fjällemark', 'Bell', 'Cowart', 'Niemeyer', 'Sanderson'];
            $.mockJSON.data.IMAGE_SOURCE = ['john_papa.jpg', 'dan_wahlin.jpg', 'scott_guthrie.jpg', 'hans_fjallemark.jpg', 'ward_bell.jpg', 'jim_cowart.jpg', 'ryan_niemeyer.jpg', 'steve_sanderson.jpg'];
            $.mockJSON.data.DATE_TODAY = [moment().format('MMMM DD YYYY')];
            $.mockJSON.data.DATE_FULL = [new Date()];
            $.mockJSON.data.TAG = ['JavaScript', 'Knockout', 'MVVM', 'HTML5', 'Keynote', 'SQL', 'CSS', 'Metro', 'UX'];
            $.mockJSON.data.TRACK = ['Windows 8', 'JavaScript', 'ASP.NET', '.NET', 'Data', 'Mobile', 'Cloud', 'Practices', 'Design'];
            $.mockJSON.data.TITLE = [
                'Building HTML/JavaScript Apps with Knockout and MVVM',
                'JsRender Fundamentals',
                'Introduction to Building Windows 8 Metro Applications',
                'Building ASP.NET MVC Apps with EF Code First, HTML5, and jQuery',
                'jQuery Fundamentals',
                'jQuery Tips and Tricks',
                'JavaScript for .NET Developers',
                'jQuery Mobile',
                'Bootstrap',
                'Responsive Web Design',
                'Structuring JavaScript Code',
                'Keynote'
            ];
            $.mockJSON.data.LEVEL = ["Beginner", "Intermediate", "Advanced"];
            $.mockJSON.data.TWITTER = ['john_papa', 'danwahlin', 'ifthenelse', 'scottgu', 'wardbell'];
            $.mockJSON.data.URL = ['http://www.johnpapa.net', 'http://www.pluralsight.com'];
            $.mockJSON.data.GENDER = ['F', 'M'];
            $.mockJSON.data.RATING = [1, 2, 3, 4, 5];
            $.mockJSON.data.COUNTRIES = ['United States', 'Canada', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bangladesh', 'Belarus', 'Belgium', 'Belize', 'Bermuda', 'Bolivia', 'Bosnia and Herzegowina', 'Brazil', 'Bulgaria', 'Cayman Islands', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia (local Name: Hrvatska)', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'Finland', 'France', 'Georgia', 'Germany', 'Gibraltar', 'Greece', 'Guatemala', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Korea, Democratic People\'s Republic of', 'Kuwait', 'Malaysia', 'Mexico', 'Netherlands', 'New Zealand', 'Norway', 'Pakistan', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore', 'Slovakia (Slovak Republic)', 'Slovenia', 'South Africa', 'Spain', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States minor outlying islands', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Serbia', 'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Bahrain', 'Barbados', 'Benin', 'Bhutan', 'Botswana', 'Bouvet Island', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Central African Republic', 'Chad', 'Christmas Island', 'Cocos (Keeling) Islands', 'Comoros', 'Congo', 'Cook Islands', 'Cote D\'Ivoire', 'Djibouti', 'Dominica', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Ghana', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guinea', 'Guinea-bissau', 'Guyana', 'Haiti', 'Heard and Mc Donald Islands', 'Honduras', 'Iceland', 'Iran (Islamic Republic of)', 'Iraq', 'Kenya', 'Kiribati', 'Korea', 'Kyrgyzstan', 'Lao People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands Antilles', 'New Caledonia', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Oman', 'Palau', 'Panama', 'Papua New Guinea', 'Pitcairn', 'Reunion', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Solomon Islands', 'Somalia', 'South Georgia & South Sandwich Islands', 'Sri Lanka', 'St. Helena', 'St. Pierre and Miquelon', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen Islands', 'Swaziland', 'Syrian Arab Republic', 'Tajikistan', 'Tanzania', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Vanuatu', 'Vatican City State (Holy See)', 'Viet Nam', 'Virgin Islands (British)', 'Virgin Islands (U.S.)', 'Wallis and Futuna Islands', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
            $.mockJSON.data.STATEPROVINCES = ['AA (Armed Forces Americas)', 'AE (Armed Forces Europe)', 'Alabama', 'Alaska', 'American Samoa', 'AP (Armed Forces Pacific)', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        },
            generateAttendance = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'attendance|8-16': [{
                        'personId': 1,
                        'sessionId|+1': 1,
                        rating: '@RATING',
                        text: '@LOREM_IPSUM'
                    }]
                });
                // Hard code first one to SPA
                data.attendance[0].personId = 3;
                data.attendance[0].sessionId = 1;
                return data;
            },
            generateRooms = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'rooms|10-20': [{
                        'id|+1': 1,
                        name: '@LOREM'
                    }]
                });
                return data;
            },
            generateSessions = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'sessions|100-120': [{
                        'id|+1': 1,
                        title: '@TITLE',
                        code: '@LOREM',
                        'speakerId|1-50': 1,
                        'trackId|1-10': 1,
                        'timeSlotId|1-15': 1,
                        'roomId|1-10': 1,
                        level: '@LEVEL',
                        'tags|1-5': '@TAG ,',
                        description: '@LOREM_IPSUM'
                    }]
                });
                // Hard code first one to SPA
                data.sessions[0].id = 1;
                data.sessions[0].title = 'Single Page Apps';
                data.sessions[0].speakerId = 3;
                return data;
            },
            generatePersons = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'persons|50-60': [{
                        'id|+1': 1,
                        firstName: '@SPEAKER_FIRST_NAME',
                        lastName: '@SPEAKER_LAST_NAME',
                        email: '@EMAIL',
                        blog: '@URL',
                        twitter: 'http://twitter.com/@' + '@TWITTER',
                        gender: '@GENDER',
                        imageSource: '@IMAGE_SOURCE',
                        bio: '@LOREM_IPSUM'
                    }]
                });
                // Hard code 3rd one to John Papa
                data.persons[2].id = 3;
                data.persons[2].firstName = 'John';
                data.persons[2].lastName = 'Papa';
                data.persons[2].email = 'john@constoso.com';
                return data;
            },
            generateTimeslots = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'timeslots|15-20': [{
                        'id|+1': 1,
                        start: '@DATE_FULL',
                        duration: 60
                    }]
                });
                return data;
            },
            generateTracks = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'tracks|10-15': [{
                        'id|+1': 1,
                        name: '@LOREM'
                    }]
                });
                return data;
            },
            generateBookings = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'bookings|100-150': [{
                        'id|+1': 1,
                        name: '@LOREM'
                    }]
                });
                return data;
            },
            generateLocations = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'locations|236-236': [{
                        'id|+1': 1,
                        name: '@COUNTRIES'
                    }]
                });
                return data;
            },
            generateSubLocations = function () {
                var data = $.mockJSON.generateFromTemplate({
                    'locations|62-62': [{
                        'id|+1': Math.floor(Math.random() * 11000),
                        name: '@STATEPROVINCES'
                    }]
                });
                return data;
            };

        init();

        return {
            model: {
                generateAttendance: generateAttendance,
                generateRooms: generateRooms,
                generateSessions: generateSessions,
                generatePersons: generatePersons,
                generateTimeslots: generateTimeslots,
                generateTracks: generateTracks,
                generateBookings: generateBookings,
                generateLocations: generateLocations,
                generateSubLocations:generateSubLocations
            }
        };
    });
