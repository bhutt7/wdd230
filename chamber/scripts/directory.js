const url = "https://bhutt7.github.io/wdd230/chamber/json/data.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    businessCards(data.businesses);
    businessList(data.businesses);
}

function businessCards(business) {
    let card = document.createElement('section');
    let logo = document.createElement('img');
    let name = document.createElement('h2');
    let bday = document.createElement('h3');
    let birthplace = document.createElement('h3');
}

function businessList(business) {

}

getBusinessData();