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
            console.log(name);
            console.log(desc);
            let wrapper = document.createElement("div");
            // var image = document.createElement("img");
            // image.setAttribute("src","images/exec/generic_profile_pic.jpg");
            wrapper.setAttribute('class', "calendar-overlay text-center");
            wrapper.innerHTML = "<h3>" + name + "</h3>";
            calendar_block.appendChild(wrapper);
        }
       console.log(`${data}`);
    });
});
