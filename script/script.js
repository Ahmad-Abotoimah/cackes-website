
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
const btn = document.getElementById('btn');
const form = document.querySelector('form');
//customer valid:
const customerInput = document.getElementById('customer-Input');
const CustomerHelp = document.getElementById('customer-Help');
const customerFormat = /^[a-zA-Z]{5,16}$/;

const customerValid = function (e) {
    if (customerInput.value === "") {
        CustomerHelp.innerHTML = "you should fill this field";
        CustomerHelp.style.color = "red";
        e.preventDefault();
        if (customerInput.value.match(customerFormat)) {
            CustomerHelp.innerHTML = "";
            CustomerHelp.style.color = "green";

        } else {
            CustomerHelp.innerHTML = "Customer Name is not valid";
            CustomerHelp.style.color = "red";
        }
    }
};
btn.addEventListener('click', customerValid);

//count valid:
const countInput = document.getElementById('count-Input');
const countHelp = document.getElementById('count-Help');
const countFormat = /^[0-9\.]{1,15}$/;
const countValid = function (e) {
    if (countInput.value === "") {
        countHelp.innerHTML = "you should fill this field";
        countHelp.style.color = "red";
        e.preventDefault();
    } else {
        if (countInput.value.match(countFormat)) {
            countHelp.innerHTML = " ";
            countHelp.style.color = "green";
        } else {
            countHelp.innerHTML = "count longer than needs";
            countHelp.style.color = "red";
            e.preventDefault();
        }
    }
};
btn.addEventListener('click', countValid);

//type:
const typeInput = document.getElementById('type-input');
const typeValid = function (e) {
    console.log(typeInput.value);
    if (typeInput.value === 'none') {
        typeInput.style.border = 'solid 2px red';
        document.getElementById('type-help').style.color = 'red';
        document.getElementById('type-help').style.marginTop = '-15px';
        document.getElementById('type-help').style.fontWeight = 'bold';
        document.getElementById('type-help').innerText = 'you cant choose None ';
        e.preventDefault();
    } else {
        typeInput.style.border = 'solid 2px green';
        document.getElementById('type-help').innerText = '';
    }
};
btn.addEventListener('click', typeValid);

//delivery:
const dileveryInput = document.getElementById('delivery-input');
const dileveryValid = function (e) {
    if (dileveryInput.value === 'none') {
        dileveryInput.style.border = 'solid 2px red';
        document.getElementById('dilevery-help').style.color = 'red';
        document.getElementById('dilevery-help').style.marginTop = '-15px';
        document.getElementById('dilevery-help').style.fontWeight = 'bold';
        document.getElementById('dilevery-help').innerText = 'you cant choose None ';
        e.preventDefault();
    } else {
        dileveryInput.style.border = 'solid 2px green';
        document.getElementById('dilevery-help').innerText = '';
    }
    if (dileveryInput.value == '4' && typeInput.value == 'chocolate') {
        dileveryInput.style.border = 'solid 2px red';
        typeInput.style.border = 'solid 2px red';
        document.getElementById('type-help').style.color = 'red';
        document.getElementById('type-help').style.marginTop = '-20px';
        document.getElementById('type-help').style.fontWeight = 'bold';
        document.getElementById('type-help').innerText = 'This type of cake cannot be delivered at 4 PM';
        e.preventDefault();
    }
};
btn.addEventListener('click', dileveryValid);

//conditions of free:
const algInput = document.getElementById('allergies-input');

const freeCheck = function (e) {
    if (typeInput.value == 'chocolate' && algInput.value == 'dairy') {
        typeInput.style.border = 'solid 2px red';
        algInput.style.border = 'solid 2px red';
        document.getElementById('free').style.color = 'red';
        document.getElementById('free').style.fontWeight = 'bold';
        document.getElementById('free').style.marginTop = '-18';
        document.getElementById('free').innerText = 'Chocolate is not Dairy free';
        e.preventDefault();

    } else {
        document.getElementById('free').innerHTML = '';
    }
    if (typeInput.value == 'pecan' && algInput.value == 'nut') {
        typeInput.style.border = ' solid 2px red';
        algInput.style.border = 'solid 2px red';
        document.getElementById('free').style.color = 'red';
        document.getElementById('free').style.fontWeight = 'bold';
        document.getElementById('free').style.marginTop = '-18';
        document.getElementById('free').innerText = 'Pecan is not  Nut free';
        e.preventDefault();

    } else {
        {
            document.getElementById('free').innerText = '';
        }
    }
};
btn.addEventListener('click', freeCheck);





//table 
document.getElementsByTagName('td')[0].innerHTML = `${cup_cakes[0].name}`;
document.getElementsByTagName('td')[1].innerHTML = `${cup_cakes[0].calories}`;
document.getElementsByTagName('td')[2].innerHTML = `${cup_cakes[0].weight}`;
document.getElementsByTagName('td')[3].innerHTML = `${cup_cakes[1].name}`;
document.getElementsByTagName('td')[4].innerHTML = `${cup_cakes[1].calories}`;
document.getElementsByTagName('td')[5].innerHTML = `${cup_cakes[1].weight}`;
document.getElementsByTagName('td')[6].innerHTML = `${cup_cakes[2].name}`;
document.getElementsByTagName('td')[7].innerHTML = `${cup_cakes[2].calories}`;
document.getElementsByTagName('td')[8].innerHTML = `${cup_cakes[2].weight}`;
document.getElementsByTagName('td')[9].innerHTML = `${cup_cakes[3].name}`;
document.getElementsByTagName('td')[10].innerHTML = `${cup_cakes[3].calories}`;
document.getElementsByTagName('td')[11].innerHTML = `${cup_cakes[3].weight}`;
document.getElementsByTagName('td')[12].innerHTML = `${cup_cakes[4].name}`;
document.getElementsByTagName('td')[13].innerHTML = `${cup_cakes[4].calories}`;
document.getElementsByTagName('td')[14].innerHTML = `${cup_cakes[4].weight}`;

for (i = 0; i < 15; i++) {
    if (document.getElementsByTagName('td')[i].innerText == 'high') {
        document.getElementsByTagName('td')[i].style.backgroundColor = 'red';
    } else if (document.getElementsByTagName('td')[i].innerText == 'medium') {
        document.getElementsByTagName('td')[i].style.backgroundColor = 'orange';
    } else if (document.getElementsByTagName('td')[i].innerText == 'low') {
        document.getElementsByTagName('td')[i].style.backgroundColor = 'green';
    }
}
function show_storage() {
    //write code that shows the name from local storage
}
const welcome = document.getElementById('welcome');
const welcomeuser = function () {
    localStorage.setItem('userName', customerInput.value);

};


form.addEventListener('submit', welcomeuser, welcome.innerHTML = `${localStorage.getItem('userName')}`);
if (welcome.innerHTML = `${localStorage.getItem('userName')}` === null) {
    welcome.innerHTML = 'Welcome';
}





