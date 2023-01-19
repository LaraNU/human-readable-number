module.exports = function toReadable (number) {
    const numberOnes = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen']
    const ones = ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine']
    const numberTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 20) {
        for (let i = 0; i < numberOnes.length; i++) {
            i = number
            console.log(numberOnes[i])
            return numberOnes[i]
        }
    } else if (number === 20) {
        return numberTens[0]
    } else if (number > 20 && number < 30) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[0] + ' ' + ones.slice([i], [i+1]))
            //console.log(newArr)
            
        }
        newArr.forEach(el => console.log(el))
        //console.log(newArr[i])
    }
}

/* module.exports = function toReadable (number) {
    const numberOnes = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine'
    }
    const numberUnic = {
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
    }
    const numberTens = {
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
        '100': 'hundred'
    }
    console.log(Object.values(numberOnes))
    for (const prop in numberOnes) {
        if (String(number) === prop) {
            return numberOnes[prop]
        } else if (String(number) !== prop) {
            for (const prop in numberUnic) {
                if (String(number) === prop) {
                    return numberUnic[prop]
                }
            }
            for (const prop in numberTens) {
                if (String(number) === prop) {
                    return numberTens[prop]
                }
            }
        }
    }
    if (String(number) !== prop && String(number).length === 2) {
        for (const prop in numberTens) {
            console.log(numberTens[prop] + ' ' + Object.values(numberOnes))
        }
    }
    /* for (const prop in numberUnic) {
        if (String(number) === prop) {
            return numberUnic[prop]
        }
    } */
    /* for (const prop in numberTens) {
        if (String(number) === prop) {
            return numberTens[prop]
        }
    }
} */
