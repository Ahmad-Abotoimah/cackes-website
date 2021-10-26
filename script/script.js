$(document).ready(show_cupcakes);

var cup_cakes = [
    { "name": "Chocolate", "calories": "high", "weight": "200gm" },
    { "name": "Carrot", "calories": "medium", "weight": "150gm" },
    { "name": "Banana", "calories": "high", "weight": "200gm" },
    { "name": "Strawberry", "calories": "low", "weight": "160gm" },
    { "name": "Peanut", "calories": "medium", "weight": "200gm" }
];


function show_cupcakes() {
    //write code that shows the cupcakes in the table as per the instructions
}





// function validate(){
//write code that validates the form
//customer valid:
const customerInput = document.getElementById('customer-Input');
const CustomerHelp = document.getElementById('customer-Help');
const customerFormat = /^[a-zA-Z]{5,16}$/;
// customerInput.onkeyup = function () {
//     if (customerInput.value === "") {
//         CustomerHelp.innerHTML = "you should fill this field";
//         CustomerHelp.style.color = "red";
//         console.log('ahmad')
//     } else {
//         if (customerFormat.value.match(customerFormat)) {
//             CustomerHelp.innerHTML = "";
//             CustomerHelp.style.color = "green";
//         } else {
//             CustomerHelp.innerHTML = "Customer Name not valid";
//             CustomerHelp.style.color = "red";
//         }
//     }
// };
const customerValid = function () {
    if (customerInput.value === "") {
        CustomerHelp.innerHTML = "you should fill this field";
        CustomerHelp.style.color = "red";
    } else {
        if (customerInput.value.match(customerFormat)) {
            CustomerHelp.innerHTML = "";
            CustomerHelp.style.color = "green";
        } else {
            CustomerHelp.innerHTML = "Customer Name is not valid";
            CustomerHelp.style.color = "red";
        }
    }
};
customerInput.addEventListener('keyup', customerValid);

//count valid:
const countInput = document.getElementById('count-Input');
const countHelp = document.getElementById('count-Help');
const countFormat = /^[0-9\.]{1,15}$/;
const countValid = function () {
    if (countInput.value === "") {
        countHelp.innerHTML = "you should fill this field";
        countHelp.style.color = "red";
    } else {
        if (countInput.value.match(countFormat)) {
            countHelp.innerHTML = " ";
            countHelp.style.color = "green";
        } else {
            countHelp.innerHTML = "count longer than needs";
            countHelp.style.color = "red";
        }
    }
};
countInput.addEventListener('keyup', countValid);

//type:
const typeInput = document.getElementById('type-input');
const typeValid = function () {
    console.log(typeInput.value);
    if (typeInput.value === 'none') {
        document.getElementById('type-help').style.color = 'red';
        document.getElementById('type-help').style.marginTop = '-15px';
        document.getElementById('type-help').innerText = 'you cant choose None ';
    }
};
typeInput.addEventListener('change', typeValid);

//delivery:
const dileveryInput = document.getElementById('delivery-input');
const dileveryValid = function () {
    console.log(dileveryInput.value);
    if (dileveryInput.value === 'none') {
        document.getElementById('dilevery-help').style.color = 'red';
        document.getElementById('dilevery-help').style.marginTop = '-15px';
        document.getElementById('dilevery-help').innerText = 'you cant choose None ';
    }
};
dileveryInput.addEventListener('change', dileveryValid);

// }

function show_storage() {
    //write code that shows the name from local storage
}


