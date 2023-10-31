document.onselectstart = function() {return false;}
document.onmousedown = function() {return false;}

const traductions = new Map()
.set('es', {
    year: ' año',
    time_separator: ' y ',
    month: ' mes',
    month_plural: 'es',
    separator: ', ',
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
})
.set('en', {
    year: ' year',
    time_separator: ' and ',
    month: ' month',
    month_plural: 's',
    separator: ', ',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
});

function calculateTime(myStart, myEnd, lang, options='ym') {
    let start = monthYearToDate(myStart);
    let end = !!myEnd ? monthYearToDate(myEnd) : new Date();
    
    let diff = new Date(end - start);
    let years = Math.abs(diff.getUTCFullYear() - 1970);
    let months = diff.getUTCMonth();

    let result = '';
    if(options.includes('y')) {
        if(years > 0) {
            result += years + traductions.get(lang).year;
        }

        if(years > 1) {
            result += 's';
        }
    }

    if(options.includes('m')) {
        if(months > 0) {
            if(years > 0) {
                result += traductions.get(lang).time_separator;
            }

            result += months + traductions.get(lang).month;
        }

        if(months > 1) {
            result += traductions.get(lang).month_plural;
        }
    } else {
        if(months >= 1) {
            result = '+' + result;
        }
    }

    return result;
}

function monthYearToDate(monthYeah) {
    let pattern = /(\d{2}).(\d{4})/;
    return new Date(monthYeah.replace(pattern,'$2-$1-01'));
}

function currentMonthYear(lang) {
    let date = new Date();

    let result = traductions.get(lang).months[date.getUTCMonth()];
    result += traductions.get(lang).separator;
    result += date.getUTCFullYear();

    return result;
}
