const API_KEY = 'AIzaSyDpllO5R79dXtxGpDPplkoxsG3S64X9Z2M';
const MONTHS = {1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August",
9: "September", 10: "October", 11:"November", 12: "December"};

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
            const dateTime = events[eventId].start.dateTime; //2020-11-19T21:00:00-05:00 format
            // const time = dateTime.substring(11,13) + ":" + dateTime.substring(14,16);
            const date = new Date(Date.UTC(parseInt(dateTime.substring(0,4)), parseInt(dateTime.substring(5,7)),
                parseInt(dateTime.substring(8,10)), parseInt(dateTime.substring(11,13)), parseInt(dateTime.substring(14,16)), 0));
            console.log(parseInt(dateTime.substring(5,7)));
            const startString = date.toLocaleDateString('en-US');
            console.log(startString);
            // const startString = `${MONTHS[dateTime.substring(5,7)]} ${dateTime.substring(8,10)}, ${dateTime.substring(0,4)}` + " at " + time + "EST/EDT";
            let wrapper = document.createElement("div");
            let overlay = document.createElement("div");
            let final = document.createElement("div");
            let image = document.createElement("img");
            let linkArrow = document.createElement("a");
            let arrow = document.createElement("i");
            linkArrow.setAttribute("href", link);
            linkArrow.setAttribute("class", "expand");
            arrow.setAttribute("class", "fa fa-external-link-square-alt");
            final.setAttribute('class', 'portfolio-item');
            image.setAttribute("src","images/exec/generic_profile_pic.jpg");
            image.setAttribute('class', "portfolio-thumb");
            wrapper.setAttribute('class', 'calendar-event portfolio-thumb');
            overlay.setAttribute('class', "text-center portfolio-overlay");
            overlay.innerHTML = "<h3>" + name + "</h3>" + "<p>" + startString +"</p>";
            linkArrow.appendChild(arrow);
            overlay.appendChild(linkArrow);
            wrapper.appendChild(image);
            wrapper.appendChild(overlay);
            final.appendChild(wrapper);
            calendar_block.appendChild(final);
        }
    });
});
