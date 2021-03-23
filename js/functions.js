document.onselectstart = function() {return false;}
document.onmousedown = function() {return false;}

var months_es = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var months_en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayInMs = 1000 * 60 * 60 * 24;
const yearInMs = 1000 * 60 * 60 * 24 * 365;

function calculateTime(d1, d2, lang, options='ym') {
    var d1S = d1.split('/');
    d1 = Date.UTC(d1S[1], d1S[0]-1, '01');

    if(d2 === null) {
        d2 = new Date();
    } else {
        var d2S = d2.split('/');
        d2 = Date.UTC(d2S[1], d2S[0], '01');
        d2 -= dayInMs;
    }

    var dif = d2 - d1;
    dif /= yearInMs; //years

    var years = Math.floor(dif);

    var result = '';

    if(options === 'y' || options === 'ym') {
        if(years > 0) {
            if(lang == 'es') {
                result += years + ' año';
            } else if(lang == 'en'){
                result += years + ' year';
            }
        }

        if(years > 1) {
            result += 's';
        }
    }

    if(options === 'ym') {
        var months =  Math.floor((dif - years) * 12);
        if(months > 0) {
            if(years > 0) {
                if(lang == 'es') {
                    result += ' y ';
                } else if(lang == 'en'){
                    result += ' and ';
                }
            }
            if(lang == 'es') {
                result += months + ' mes';
            } else if(lang == 'en'){
                result += months + ' month';
            }
        }

        if(months > 1) {
            if(lang == 'es') {
                result += 'es';
            } else if(lang == 'en'){
                result += 's';
            }
        }
    }

    return result;
}

function currentMonthYear(lang) {
    var d = new Date();

    var result = '';
    if(lang == 'es') {
        result += months_es[d.getUTCMonth()]
        result += ' de '
    } else if(lang == 'en'){
        result += months_en[d.getUTCMonth()]
        result += ' '
    }

    result += d.getUTCFullYear();

    return result;
}
