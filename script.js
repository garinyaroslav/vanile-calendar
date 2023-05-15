function createCalendar(elem, year, mounth) {
    let date = new Date(year, mounth - 1);

    let table = "<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr>";
    for (let i = 0; i < getDay(date); i++) {
        table += "<td></td>";
    }

    while (date.getMonth() == mounth - 1) {
        table += "<td>" + date.getDate() + "</td>";
        if (getDay(date) % 7 == 6) {
            table += "<tr></tr>";
        }
        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
            table += "<td></td>";
        }
    }

    table += "</tr></table>";
    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, new Date().getFullYear(), new Date().getMonth() + 1);