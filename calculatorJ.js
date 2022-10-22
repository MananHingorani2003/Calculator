const displayText = document.querySelector ("#texting");
const cancel = document.querySelector ("#ce");
const equals = document.querySelector ("#equal");
const gayab = document.querySelector ("#cancel");
// displayText.innerHTML = "0";

function display (value) {
    if (displayText.innerHTML === '0' || displayText.innerHTML == "Infinity" || displayText.innerHTML == "ERROR") {
        displayText.innerHTML = value;
    }
    else {
        displayText.innerHTML += value;
    }
}

cancel.addEventListener ("click", () => {
    displayText.innerHTML = "0";
})

equals.addEventListener ("click", ()=> {
    if (displayText.innerHTML [0] == '/' || displayText.innerHTML [0] == '*' || displayText.innerHTML [0] == '+' || displayText.innerHTML [0] == '-') {
        displayText.innerHTML = "ERROR";
    }

    const answer = displayText.innerHTML;
    displayText.innerHTML = eval (answer);
})

gayab.addEventListener ("click", ()=> {
    const length = displayText.innerHTML.length;
    displayText.innerHTML = displayText.innerHTML.slice (0, length-1);
})







