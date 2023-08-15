$(document).ready(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#img-group li').length
    
    for(let i = 0; i < imgCount; i++){
        $('#change-Button').append(`<li></li>`)
    }
    $('#change-Button li:first').addClass('clicked')

    $('#img-group li').width(divWidth)   // li 的寬度
    $('#img-group').width(divWidth * imgCount)   // ul 的寬度

    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $(`#change-Button li`).click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('#img-group').animate({
            left: index * divWidth * -1
        })

        $(this).addClass('clicked')
        $(`#change-Button li`).not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext(){
        if(index < imgCount - 1){
            index++            
        }else{
            index = 0
        }

        $('#img-group').animate({
            left: index * divWidth * -1
        })

        $(`#change-Button li:eq(${index})`).addClass('clicked')
        $(`#change-Button li`).not(`:eq(${index})`).removeClass('clicked')
    }
});



//月曆
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






