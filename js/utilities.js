function calculateArea(first, last){
            const firstValue = getInputValues(first);
            const secondValue = getInputValues(last);
            const area = multiply(firstValue, secondValue);
            return area;
 
            
}

function multiply(x, y){
    return (x * y).toFixed(2);
}

function getInputValues(id){
    const getInputField = document.getElementById(id);
    const getInputNumber = parseFloat(getInputField.value);
    return getInputNumber;
}

function getText(id){
    const getTextField = document.getElementById(id);
    const getInnerText = getTextField.innerText;
    return getInnerText;
}


function makeEmptyField(first, last){
    document.getElementById(first).value = '';
    document.getElementById(last).value = '';
}