const today = new Date();
const API_KEY = 'AIzaSyDpllO5R79dXtxGpDPplkoxsG3S64X9Z2M';
const URL = `https://www.googleapis.com/calendar/v3/calendars/l43ijjmq28vt97abnijs443mhc%40group.calendar.google.com/events?timeMin=2020-09-01T10%3A00%3A00-07%3A00&key=${API_KEY}`;

jQuery(document).ready(function($) {
    $.get(URL, function(data, status){
        const events = data.items;
        let calendar_block = document.getElementById('calendarContainer');
        for(eventId in events){
            const name = events[eventId].summary;
            const desc = events[eventId].description;
            console.log(name);
            console.log(desc);
            var wrapper = document.createElement("div");
            var image = document.createElement("img");
            image.setAttribute("src","images/exec/generic_profile_pic.jpg");
            var wrapper2 = document.createElement("div");
            var wrapper3 = document.createElement("div");
            wrapper.setAttribute('class','team-member col-md-2 col-sm-4');
            wrapper2.setAttribute('class', "member-thumb");
            wrapper3.setAttribute('class', "calendar-overlay text-center");
            wrapper2.appendChild(image);
            wrapper2.appendChild(wrapper3);
            wrapper.appendChild(wrapper2);
            wrapper3.innerHTML = "<h3>" + name + "</h3>";
            calendar_block.appendChild(wrapper);
        }
       console.log(`${data}`);
    });
});
