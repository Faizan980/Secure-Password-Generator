let upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
let strongPassword = upperCaseLetters.concat(lowerCaseLetters, numbers, symbols)
let upperCaseLetterRandomArray = upperCaseLetters.concat(strongPassword)
let lowerCaseLetterRandomArray = lowerCaseLetters.concat(strongPassword)
let numberRandomArray = numbers.concat(symbols)

let symbolsRandomArray = symbols.concat(upperCaseLetters, lowerCaseLetters, symbols)
const checkBoxUpper = document.getElementById('check-box-upper')
const checkLetter = document.getElementById('check-letter')
const checkNumber = document.getElementById('check-number')
const checkSymbols = document.getElementById('check-symbols')

const getPasswordLength = document.getElementById('get-password-length')
const resetBtn = document.getElementById('reset-btn')

const btn = document.getElementById('btn')
const textBox = document.getElementById('text-box')


resetBtn.addEventListener("click", function() {
    window.location = window.location
})

function reset() {
    location.reload()
}

function copyText() {
    textBox.select()
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value)

    const tooltip = document.getElementById("myToolTip")
    tooltip.innerHTML = "Copied: " + textBox.value
}

function outfunc() {
    const tooltip = document.getElementById("myToolTip")
    tooltip.innerHTML = "Copy to clipboard";
}

function generateRandomPassword() {
    let result = ''
    const n = 12
    const shuffleArray = strongPassword.sort(() => 0.5 - Math.random())
    result = (shuffleArray.slice(0, n)).join('')
    return result
}
function checkedBoxesPassword() {
    if (checkBoxUpper.checked) {
        let result = ''
        const n = 6
        const shuffleArray = upperCaseLetters.sort(() => 0.5 - Math.random())
        const n1 = 6
        const shuffleArray1 = strongPassword.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('') + (shuffleArray1.slice(0, n1)).join('')
        return result
    } else if (checkLetter.checked) {
        let result = ''
        const n = 6
        const shuffleArray = lowerCaseLetters.sort(() => 0.5 - Math.random())
        const n1 = 6
        const shuffleArray1 = strongPassword.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('') + (shuffleArray1.slice(0, n1)).join('')
        return result
    } else if (checkNumber.checked) {
        let result = ''
        const n = 6
        const shuffleArray = numbers.sort(() => 0.5 - Math.random())
        const n1 = 6
        const shuffleArray1 = strongPassword.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('') + (shuffleArray1.slice(0, n1)).join('')
        return result
    } else if (checkSymbols.checked) {
        let result = ''
        const n = 6
        const shuffleArray = symbols.sort(() => 0.5 - Math.random())
        const n1 = 6
        const shuffleArray1 = strongPassword.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('') + (shuffleArray1.slice(0, n1)).join('')
        return result
    }
}
checkedBoxesPassword()

function generatePasswordWithLength() {
    if ((getPasswordLength.value) && !(checkBoxUpper.checked || checkLetter.checked || checkNumber.checked || checkSymbols.checked)) {
        let result = ''
        const n = getPasswordLength.value
        const shuffleArray = strongPassword.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('')
        return result
    }
}
generatePasswordWithLength()

function generatePasswordWithItsLength() {

    if ((getPasswordLength.value) && (checkBoxUpper.checked)) {
        let result = ''
        const n = getPasswordLength.value
        const shuffleArray = upperCaseLetterRandomArray.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('')
        return result
    } else if ((getPasswordLength.value) && (checkLetter.checked)) {
        let result = ''
        const n = getPasswordLength.value
        const shuffleArray = lowerCaseLetterRandomArray.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('')
        return result
    } else if ((getPasswordLength.value) && (checkNumber.checked)) {
        let result = ''
        const n = getPasswordLength.value
        const shuffleArray = numberRandomArray.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('')
        return result
    } else if ((getPasswordLength.value) && (checkSymbols.checked)) {
        let result = ''
        const n = getPasswordLength.value
        const shuffleArray = symbolsRandomArray.sort(() => 0.5 - Math.random())
        result = (shuffleArray.slice(0, n)).join('')
        return result
    }
}
generatePasswordWithItsLength()

function uncheckSelectedCheckbox(id) {
    const checkBoxOptions = document.getElementsByName('checkbox')
    Array.prototype.forEach.call(checkBoxOptions, function(el) {
        
        el.checked = true
        
    })
        id.checked = false
}

function selectOnlyChecked(id) {
    const checkBoxOptions = document.getElementsByName('checkbox')
    Array.prototype.forEach.call(checkBoxOptions, function(el) {
        
        el.checked = false
         
    })
        id.checked = true
}



function render() {
    btn.addEventListener('click', function() {
        let password = ''

        if (getPasswordLength.value == '') {
            password = generateRandomPassword()
        } else if (getPasswordLength.value) {
            password = generatePasswordWithLength()
        } 
        
        if ((checkBoxUpper.checked || checkLetter.checked || checkNumber.checked || checkSymbols.checked)) {
            password = checkedBoxesPassword()
        }
        
        if ((getPasswordLength.value) && (checkBoxUpper.checked) || (getPasswordLength.value) && (checkLetter.checked) || (getPasswordLength.value) && (checkNumber.checked) || (getPasswordLength.value) && (checkSymbols.checked)){
            password = generatePasswordWithItsLength()
        }
        textBox.textContent = password
    })
}
render()