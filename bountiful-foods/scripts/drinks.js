let url = 'https://andejuli.github.io/wdd230/fruit.json';

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data);
    let fruits = new Array(data.length);
    
    for (i = 0; i , data.length; i++) {
        fruits[i] = data[i];
    }
    // let fname = document.getElementById('fname').value;
    // let email = document.getElementById('email').value;
    // let phone = document.getElementById('phone').value;

    // let carbs = 0;
    // let protein = 0;
    // let fat = 0;
    // let sugar = 0;
    // let calories = 0;

    // for (let i = 1; i <= 3; i++) {
    //     let fruit = "fruit" + i;
    //     if (fruit.checked) {
    //         if (i == 1) {
    //             carbs += data[22].carbohydrates;
    //             protein += data[22].protein;
    //         }
    //     }
    // }
    return fruits;
}

let fruits = getFruitData();

document.getElementById('create').addEventListener('click', getFruitData);

