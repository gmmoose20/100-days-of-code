let display = document.getElementById('display');
let buttons = document.getElementsByClassName('btn');
let operation = '';

// Gett all the buttons
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
  
    button.addEventListener('click', function() {
        // check if button is an operator or not
        switch (button.classList.contains('action')) {
        case true:
            if (button.classList.contains('operator')) {
                concatOperation(button);
            } else {
                callAction(button);
            }
            break;
        case false:
            concatOperation(button);
            break;
        }
    });
}
// concatinating strings for display
const concatOperation = (button) => {
    if (button.classList.contains('operator')) {
        if(!operation) {
            return;
        } 
    }
    operation += button.dataset.value;

    display.innerHTML = operation;

};

// calling the operator and evaluate
const callAction = (button) => {
    switch (button.dataset.value) {
    case 'calculate':
        display.innerHTML = operation;
        operation = eval(operation).toString();
        break;
    case 'backspace':
        operation = operation.slice(0,-1);
        display.innerHTML = operation;
        break;
    case 'clear':
        operation ='';
        display.innerHTML = '';
        break;
    }
};