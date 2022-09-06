    // variable that is displaying the time of the day
    var objDay = new Date();
    var objHour = objDay.getHours();
    if (objHour == 1) {
        document.write("Hi it is 1AM!");
    }
    if (objHour == 2) {
        document.write("Hi it is 2AM!");
    }
    if (objHour == 3) {
        document.write("Hi it is 3AM!");
    }
    if (objHour == 4) {
        document.write("Hi it is 4AM!");
    }
    if (objHour == 5) {
        document.write("Hi it is 5AM!");
    }
    if (objHour == 6) {
        document.write("Hi it is 6AM!");
    }
    if ((objHour == 6) || (objHour == 7) || (objHour == 8) || (objHour == 9) || (objHour == 10)) {
        document.write("Hi have a good day!");
    }
    if (objHour == 11) {
        document.write("Hi it is 11AM!");
    }
    if (objHour == 12) {
        document.write("Good afternoon!");
    }
    if (objHour == 14) {
        document.write("Hi it is 2PM!");
    }
    if ((objHour == 15) || (objHour == 16) || (objHour == 13)) {
        document.write("Have been working still take a break!");
    }
    if ((objHour == 17) || (objHour == 18) || (objHour == 19) || (objHour == 20) || (objHour == 21) ||
        (objHour == 22)) {
        document.write("Internet time");
    }
    if (objHour == 23) {
        document.write("Good night!");
    }
    if (objHour == 0) {
        document.write("Bye Bye sleep time!");
    }

    // switch statement
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Hello Student";
            break;
        case 1:
            day = "Hello Rasmussen Student";
            break;
        case 2:
            day = "How is your day Rasmussen Student";
    }
    document.getElementById("random").innerHTML = "Today is " + day;