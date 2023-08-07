document.addEventListener("DOMContentLoaded", function () {
    const calendarBody = document.getElementById("calendar-body");

    function createCalendar(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDayOfWeek = firstDay.getDay();

        let date = 1;
        let calendarHTML = "";

        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";

            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < startDayOfWeek) {
                    calendarHTML += "<td></td>";
                } else if (date > daysInMonth) {
                    break;
                } else {
                    calendarHTML += "<td>" + date + "</td>";
                    date++;
                }
            }

            calendarHTML += "</tr>";
            if (date > daysInMonth) {
                break;
            }
        }

        calendarBody.innerHTML = calendarHTML;
    }

    // 當頁面載入時，顯示當前的月曆
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    createCalendar(currentYear, currentMonth);
});






