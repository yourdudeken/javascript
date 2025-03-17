const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('monthYear');
let currentYear, currentMonth;

function initCalendar() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    renderCalendar(currentYear, currentMonth);
}

function renderCalendar(year, month) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarBody.innerHTML = '';
    monthYear.textContent = `${today.toLocaleString('default', { month: 'long' })} ${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.innerHTML = '';
            } else if (date > daysInMonth) {
                break;
            } else {
                cell.innerHTML = date;
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.style.backgroundColor = '#0056b3';
                    cell.style.color = 'white';
                }
                date++;
            }
            row.appendChild(cell);
        }

        calendarBody.appendChild(row);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentYear, currentMonth);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentYear, currentMonth);
}

initCalendar();