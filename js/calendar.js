const API_KEY = 'AIzaSyDpllO5R79dXtxGpDPplkoxsG3S64X9Z2M';

jQuery(document).ready(function($) {
    const today = new Date();
    const timeMin = today.getFullYear() + '-' + String(today.getMonth() + 1).padStart(2, '0') + '-' + String(today.getDate()).padStart(2, '0');
    const URL = `https://www.googleapis.com/calendar/v3/calendars/l43ijjmq28vt97abnijs443mhc%40group.calendar.google.com/events?timeMin=${timeMin}T10%3A00%3A00-07%3A00&key=${API_KEY}`;

    $.get(URL, function(data, status){
        const events = data.items;
        let calendar_block = document.getElementById('calendarContainer');
        for(eventId in events){
            const name = events[eventId].summary;
            const desc = events[eventId].description;
            const link = events[eventId].htmlLink;
            console.log(name);
            let wrapper = document.createElement("div");
            let wrapper2 = document.createElement("div");
            let image = document.createElement("img");
            image.setAttribute("src","images/exec/generic_profile_pic.jpg");
            image.setAttribute('class', "calendar-event-img portfolio-thumb");
            wrapper.setAttribute('class', 'calendar-event');
            wrapper2.setAttribute('class', "calendar-event text-center portfolio-overlay");
            wrapper2.innerHTML = "<h3>" + name + "</h3>" + "<p>" + desc + "</p>";
            wrapper.appendChild(image);
            wrapper.appendChild(wrapper2);
            calendar_block.appendChild(wrapper);
        }
       console.log(`${data}`);
    });
});
