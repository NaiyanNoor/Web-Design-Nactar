let sec = 0;
        let min = 0;
        let hour = 0;

        let displaySec = 0;
        let displayMin = 0;
        let displayHour = 0;

        let status = "Stop";
        let intervel = '';

        const watch = () => {
            sec++;

            if (sec / 60 == 1) {
                sec = 0;
                min++;

                if (min / 60 == 1) {
                    min = 0;
                    hour++;
                }
            }

            if (sec < 10) {
                displaySec = '0' + sec.toString();
            }
            else {
                displaySec = sec;
            }

            if (min < 10) {
                displayMin = '0' + min.toString();
            }
            else {
                displayMin = min;
            }

            if (hour < 10) {
                displayHour = '0' + hour.toString();
            }

            document.querySelector("#display").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;
        }

        const startStop = () => {
            if (status == "Stop") {
                intervel = setInterval(watch, 1000);
                document.querySelector("#handler").innerHTML = "Stop";
                status = "Start";
            }
            else if (status == "Start") {
                clearInterval(intervel);
                document.querySelector("#handler").innerHTML = "Start";
                status = "Stop";
            }
        }

        const reset = () => {
            sec = 0;
            min = 0;
            hour = 0;
            clearInterval(intervel);
            document.querySelector("#display").innerHTML = "00:00:00";
            document.querySelector("#handler").innerHTML = "Start";
            status = "Stop";
        }