const screen = document.getElementById('screenCalc');

const calculator_Buttons = document.querySelectorAll('button');

for(let calculator_Button of calculator_Buttons) {

    calculator_Button.addEventListener('click', function() {

        switch(this.innerHTML) {
            case 'Ac': clearScreen()
            break
            case 'Del': deleteLast()
            break
            case 'X<sup>2</sup>' : squared_number(screen.innerHTML)
            break
            case 'X<sup>3</sup>' : cubed_number(screen.innerHTML)
            break
            case '=' : evaluate()
            break
            default: 
                screen.innerHTML += this.textContent 
        }

    })

}

// clear calculator screen
function clearScreen() {
    screen.innerHTML = ''
}

// delete last which added
function deleteLast() {
    let value = screen.innerHTML
    screen.innerHTML = value.slice(0,-1)
    return screen.innerHTML
}

// squared number x ** 2
function squared_number(num) {
    screen.innerHTML = num ** 2 
}


// cubed number x ** 3
function cubed_number(num) {
    screen.innerHTML = num ** 3 
}

// this function to find the result of screen calculator....
function evaluate() {
    try {
        let result = math.evaluate(screen.textContent)
        screen.innerHTML = result  

        switch (screen.innerHTML) {
            case "undefined" : 
                screen.innerHTML = '<span>invalid input</span>'
            break;
            case "NaN" : 
                screen.innerHTML = `<span style="font-weight:bold;font-size: 16px;color:navy">invalid</span>`
            break;
            case "Infinity" :
                screen.innerHTML = `<span style="font-weight:bold;font-size: 16px;color:navy">you can't divide by zero</span>`
            break;
            default :
                screen.innerHTML = result
        }
    } catch (error) {

        error = `<span style="color:darkblue; font-size: 19px">.....Invalid.....</span>`

        screen.innerHTML = error
    }
}