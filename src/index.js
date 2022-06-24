module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }
    number = String(number).split('').reverse();
    let finalResult = [];
    let result = '';
    for (let i = 0; i < number.length; i++) {
        if (number[i] == '1') {
            result += 'one';
        } else if (number[i] == '2') {
            result += 'two';
        } else if (number[i] == '3') {
            result += 'three';
        } else if (number[i] == '4') {
            result += 'four';
        } else if (number[i] == '5') {
            result += 'five';
        } else if (number[i] == '6') {
            result += 'six';
        } else if (number[i] == '7') {
            result += 'seven';
        } else if (number[i] == '8') {
            result += 'eight';
        } else if (number[i] == '9') {
            result += 'nine';
        }
        if (i == 1) {
            if (number[i] == '8') { result += 'y'; } else if (number[i] == '5') { result = 'fifty'; } else if (number[i] == '4') { result = 'forty'; } else if (number[i] == '3') { result = 'thirty'; } else if (number[i] == '2') { result = 'twenty'; } else if (number[i] != '0') { result += 'ty'; }
        } else if (i == 2) {
            result += ' hundred';
        }
        if (result != '') { finalResult.push(result); }

        result = ''
    }
    finalNumber = finalResult.reverse().join(' ').trim();
    if (finalNumber.includes('onety')) {
        pos = finalNumber.indexOf('onety');
        spacePos = finalNumber.lastIndexOf(' ')
        if (number[0] == '1') {
            finalNumber = finalNumber.slice(0, pos) + 'eleven'
        } else if (number[0] == '2') {
            finalNumber = finalNumber.slice(0, pos) + 'twelve'
        } else if (number[0] == '3') {
            finalNumber = finalNumber.slice(0, pos) + 'thirteen'
        } else if (number[0] == '5') {
            finalNumber = finalNumber.slice(0, pos) + 'fifteen'
        } else if (number[0] == '8') {
            finalNumber = finalNumber.slice(0, pos) + 'eighteen'
        } else if (number[0] == '0') {
            finalNumber = finalNumber.slice(0, pos) + 'ten'
        } else {
            finalNumber = finalNumber.slice(0, pos) + finalNumber.slice(spacePos + 1) + 'teen';
        }
    }
    return finalNumber;

}