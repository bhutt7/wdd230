const url = "https://bhutt7.github.io/wdd230/chamber/json/data.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    businessCards(data.businesses);
    businessList(data.businesses);
}

function businessCards(businesses) {
    const cards = document.getElementById('cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo for ${business.name}`);
        portrait.setAttribute('loading', 'lazy');

        address.textContent = business.address;
    })
}

function businessList(business) {

}

getBusinessData();