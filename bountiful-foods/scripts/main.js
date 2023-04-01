// Fresh Page
let url = 'https://andejuli.github.io/wdd230/fruit.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);

    let fname = document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let special = document.getElementById('special').value;
    let fruit1 = document.getElementById('fruit1');
    let fruit2 = document.getElementById('fruit2');
    let fruit3 = document.getElementById('fruit3');

    let carbs = 0;
    let protein = 0;
    let fat = 0;
    let sugar = 0;
    let calories = 0;
    
    if (fruit1.checked) {
        carbs += data[22].nutritions.carbohydrates;
        protein += data[22].nutritions.protein;
        fat += data[22].nutritions.fat;
        sugar += data[22].nutritions.sugar;
        calories += data[22].nutritions.calories;
    }

    if (fruit2.checked) {
        carbs += data[28].nutritions.carbohydrates;
        protein += data[28].nutritions.protein;
        fat += data[28].nutritions.fat;
        sugar += data[28].nutritions.sugar;
        calories += data[28].nutritions.calories;
    }
    
    if (fruit3.checked) {
        carbs += data[36].nutritions.carbohydrates;
        protein += data[36].nutritions.protein;
        fat += data[36].nutritions.fat;
        sugar += data[36].nutritions.sugar;
        calories += data[36].nutritions.calories;
    }
    
    let order = [fname, email, phone, special, fruit1.checked, fruit2.checked, fruit3.checked, carbs.toFixed(1), protein.toFixed(1), fat.toFixed(1), sugar.toFixed(1), calories.toFixed(1)];

    document.querySelector('form').reset();
    document.getElementById('facts').textContent = "";

    buildFacts(order);

    if (!localStorage.getItem("numDrinks")) {
        localStorage.setItem("numDrinks", 1);
    } else {
        let numDrinks = parseInt(localStorage.getItem("numDrinks")) + 1;
        localStorage.setItem("numDrinks", numDrinks);
    }
    console.log(localStorage.getItem("numDrinks"));
}

function buildFacts(array) {
    let output = document.getElementById('facts');
    let fname = document.createElement('p');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    let special = document.createElement('p');
    let fruits = document.createElement('p');
    let nutrition = document.createElement('ul');
    let carbs = document.createElement('li');
    let protein = document.createElement('li');
    let fat = document.createElement('li');
    let sugar = document.createElement('li');
    let calories = document.createElement('li');

    fname.textContent = array[0];
    email.textContent = array[1];
    phone.textContent = array[2];
    special.textContent = array[3];
    carbs.textContent = "Carbs: " + array[7] + "g";
    protein.textContent = "Protein: " + array[8] + "g";
    fat.textContent = "Fat: " + array[9] + "g";
    sugar.textContent = "Sugar: " + array[10] + "g";
    calories.textContent = "Calories: " + array[11];

    nutrition.appendChild(carbs);
    nutrition.appendChild(protein);
    nutrition.appendChild(fat);
    nutrition.appendChild(sugar);
    nutrition.appendChild(calories);

    fruits.textContent = "";
    
    if (array[4]) {
        fruits.textContent += "Mango, ";
    }
    
    if (array[5]) {
        fruits.textContent += "Peach, ";
    }
    
    if (array[6]) {
        fruits.textContent += "Strawberry";
    }

    output.appendChild(fname);
    output.appendChild(email);
    output.appendChild(phone);
    output.appendChild(fruits);
    output.appendChild(special);
    output.appendChild(nutrition);
}