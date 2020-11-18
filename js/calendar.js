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
            let wrapper = document.createElement("div");
            let overlay = document.createElement("div");
            let final = document.createElement("div");
            let image = document.createElement("img");
            let linkArrow = document.createElement("a");
            let arrow = document.createElement("i");
            linkArrow.setAttribute("src", link);
            arrow.setAttribute("class", "fa fa-external-link-square-alt");
            final.setAttribute('class', 'portfolio-item');
            image.setAttribute("src","images/exec/generic_profile_pic.jpg");
            image.setAttribute('class', "portfolio-thumb");
            wrapper.setAttribute('class', 'calendar-event portfolio-thumb');
            overlay.setAttribute('class', "text-center portfolio-overlay");
            overlay.innerHTML = "<h3>" + name + "</h3>";
            wrapper.appendChild(image);
            wrapper.appendChild(overlay);
            final.appendChild(wrapper);
            calendar_block.appendChild(final);
        }
       console.log(`${data}`);
    });
});
