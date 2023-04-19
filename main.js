//DOM: INPUT : PORRAMAT
const priceInput = document.getElementById('product-price');
const quantityInput = document.getElementById('product-quantity');
const shippingInput = document.getElementById('product-shipping');

const errorBox = document.getElementById('error');
const resultBox = document.getElementById('result');


const totalBtn = document.getElementById('total-btn')

const parseInput = (...inputs) => {
    return inputs.map((str) => Number(str));
}

// let r = parseInput('500','2','100')
console.log(priceInput);
console.log(quantityInput)
console.log(shippingInput)
console.log(errorBox)
console.log(resultBox)
console.log(totalBtn)

// 1,5,Nan => false
// 1,5,20 => true

const validateInputs = (...inputs) => {
  return  inputs.every((el)=>typeof el === 'number' && !isNaN(el));
}

// let r = validateInputs(1,5,'5')
// console.log(r)

// HideError

const hideError = () => {
    errorBox.classList.add('invisible');
};
hideError()

const showError = () => {
    errorBox.classList.remove('invisible');
}

// Custom-Message
//inputs = ['200','2400','200']
// numbers = [200,2400,Nan]
const showErrorMessage = (inputs, number) => {
    const fullErrorMsg = inputs.reduce((msg, str, index) => {
        if (validateInputs(number[index])) {
            msg += '';
        } else {
            msg += `${str} is not a number. `;
        }
        return msg;
    }, '');

    console.log(fullErrorMsg);
    errorBox.innerText = fullErrorMsg;
    showError();
};
// Create Order
const calTotal = () => {
    hideError()

    // Parse Input
    const inputs = [priceInput.value,quantityInput.value,shippingInput.value];
    const numbers = parseInput(...inputs);
    console.log(numbers);

    // Validate Input
    const valid = validateInputs(...numbers);

    // pass : caltotal
    // fail : show Error
    if(valid){
        const [price,quantity,shipping] = numbers;
        const totalPrice = price * quantity + shipping;
        resultBox.innerText = totalPrice;
    }else{
        // showError()
        showErrorMessage(inputs, numbers);
    }
    
};
totalBtn.addEventListener('click',calTotal);