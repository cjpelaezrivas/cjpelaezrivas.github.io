document.onselectstart = function() {return false;}
document.onmousedown = function() {return false;}

function calculateTime(d1, d2, lang) {
    var d1S = d1.split('/');
    d1 = Date.UTC(d1S[1], d1S[0]-1, '01');

    if(d2 === null) {
        d2 = new Date();
    } else {
        var d2S = d2.split('/');
        d2 = Date.UTC(d2S[1], d2S[0]-1, '01');
    }

    var dif = d2 - d1;
    dif /= 1000 * 60 * 60 * 24 * 365;

    var years = Math.floor(dif);
    var months =  Math.floor((dif - years) * 12);

    var result = '';
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

    return result;
}
