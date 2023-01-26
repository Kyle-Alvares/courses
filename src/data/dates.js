const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

const weekAbbr = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat'
]

const formatTime = (time) => {
    const [hour, min] = time.split(':');
    const intHour = parseInt(hour);
    if (intHour < 12)
        return `${hour}:${min} AM`;
    else if (intHour === 12)
    return `12:${min} PM`;
    else
        return `${intHour - 12}:${min} PM`;
}

const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return months[parseInt(month) - 1].substring(0,3) + " " + parseInt(day);
}

export { 
    months,
    week,
    weekAbbr,
    formatTime,
    formatDate 
};