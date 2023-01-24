module.exports = function toReadable (number) {
    const numberOnes = ['zero', 'one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen']
    const ones = ['one', 'two', 'three', 'four', 'five','six', 'seven', 'eight', 'nine']
    const numberTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    if (number < 20) {
        for (let i = 0; i < numberOnes.length; i++) {
            i = number
            return numberOnes[i]
        }
    } else if (number === 20) {
        return numberTens[0]
    } else if (number > 20 && number < 30) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[0] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 21) {
                return newArr[0]    
            } else if (number === 22) {
                return newArr[1]
            } else if (number === 23) {
                return newArr[2]
            }  else if (number === 24) {
                return newArr[3]
            } else if (number === 25) {
                return newArr[4]
            } else if (number === 26) {
                return newArr[5]
            } else if (number === 27) {
                return newArr[6]
            } else if (number === 28) {
                return newArr[7]
            } else if (number === 29) {
                return newArr[8]
            }
            
        }
    } else if (number === 30) {
        return numberTens[1]
    } else if (number > 30 && number < 40) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[1] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 31) {
                return newArr[0]    
            } else if (number === 32) {
                return newArr[1]
            } else if (number === 33) {
                return newArr[2]
            }  else if (number === 34) {
                return newArr[3]
            } else if (number === 35) {
                return newArr[4]
            } else if (number === 36) {
                return newArr[5]
            } else if (number === 37) {
                return newArr[6]
            } else if (number === 38) {
                return newArr[7]
            } else if (number === 39) {
                return newArr[8]
            }
            
        }
    } else if (number === 40) {
        return numberTens[2]
    } else if (number > 40 && number < 50) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[2] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 41) {
                return newArr[0]    
            } else if (number === 42) {
                return newArr[1]
            } else if (number === 43) {
                return newArr[2]
            }  else if (number === 44) {
                return newArr[3]
            } else if (number === 45) {
                return newArr[4]
            } else if (number === 46) {
                return newArr[5]
            } else if (number === 47) {
                return newArr[6]
            } else if (number === 48) {
                return newArr[7]
            } else if (number === 49) {
                return newArr[8]
            }
            
        }
    } else if (number === 50) {
        return numberTens[3]
    } else if (number > 50 && number < 60) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[3] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 51) {
                return newArr[0]    
            } else if (number === 52) {
                return newArr[1]
            } else if (number === 53) {
                return newArr[2]
            }  else if (number === 54) {
                return newArr[3]
            } else if (number === 55) {
                return newArr[4]
            } else if (number === 56) {
                return newArr[5]
            } else if (number === 57) {
                return newArr[6]
            } else if (number === 58) {
                return newArr[7]
            } else if (number === 59) {
                return newArr[8]
            }
            
        }
    } else if (number === 60) {
        return numberTens[4]
    } else if (number > 60 && number < 70) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[4] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 61) {
                return newArr[0]    
            } else if (number === 62) {
                return newArr[1]
            } else if (number === 63) {
                return newArr[2]
            }  else if (number === 64) {
                return newArr[3]
            } else if (number === 65) {
                return newArr[4]
            } else if (number === 66) {
                return newArr[5]
            } else if (number === 67) {
                return newArr[6]
            } else if (number === 68) {
                return newArr[7]
            } else if (number === 69) {
                return newArr[8]
            }
            
        }
    } else if (number === 70) {
        return numberTens[5]
    } else if (number > 70 && number < 80) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[5] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 71) {
                return newArr[0]    
            } else if (number === 72) {
                return newArr[1]
            } else if (number === 73) {
                return newArr[2]
            }  else if (number === 74) {
                return newArr[3]
            } else if (number === 75) {
                return newArr[4]
            } else if (number === 76) {
                return newArr[5]
            } else if (number === 77) {
                return newArr[6]
            } else if (number === 78) {
                return newArr[7]
            } else if (number === 79) {
                return newArr[8]
            }
            
        }
    } else if (number === 80) {
        return numberTens[6]
    } else if (number > 80 && number < 90) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[6] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 81) {
                return newArr[0]    
            } else if (number === 82) {
                return newArr[1]
            } else if (number === 83) {
                return newArr[2]
            }  else if (number === 84) {
                return newArr[3]
            } else if (number === 85) {
                return newArr[4]
            } else if (number === 86) {
                return newArr[5]
            } else if (number === 87) {
                return newArr[6]
            } else if (number === 88) {
                return newArr[7]
            } else if (number === 89) {
                return newArr[8]
            }
            
        }
    } else if (number === 90) {
        return numberTens[7]
    } else if (number > 90 && number < 100) {
        let newArr = []
        for (let i = 0; i < ones.length; i++) {
            newArr.push(numberTens[7] + ' ' + ones.slice([i], [i+1]))
        }
        for (let i = 0; i < newArr.length; i++) {
            if (number === 91) {
                return newArr[0]    
            } else if (number === 92) {
                return newArr[1]
            } else if (number === 93) {
                return newArr[2]
            }  else if (number === 94) {
                return newArr[3]
            } else if (number === 95) {
                return newArr[4]
            } else if (number === 96) {
                return newArr[5]
            } else if (number === 97) {
                return newArr[6]
            } else if (number === 98) {
                return newArr[7]
            } else if (number === 99) {
                return newArr[8]
            }
            
        }
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
