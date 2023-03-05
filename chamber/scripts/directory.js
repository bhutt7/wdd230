const url = "https://bhutt7.github.io/wdd230/chamber/json/data.json"

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);  // note that we reference the prophet array of the data object given the structure of the json file
    businessCards(data.businesses);
    businessList(data.businesses);
}

function businessCards(businesses) {
    const cards = document.querySelector('.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        logo.setAttribute('src', business.logo);
        logo.setAttribute('alt', `Logo for ${business.name}`);
        logo.setAttribute('loading', 'lazy');

        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = business.website;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    })
}

function businessList(businesses) {
    const list = document.querySelector('.list');

    businesses.forEach((business) => {
        let tr = document.createElement('tr');
        let name = document.createElement('td');
        let address = document.createElement('td');
        let phone = document.createElement('td');
        let website = document.createElement('td');

        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = business.website;

        tr.appendChild(name);
        tr.appendChild(address);
        tr.appendChild(phone);
        tr.appendChild(website);

        list.appendChild(tr);
    })
}

getBusinessData();

document.querySelector('.list').classList.add('notInView');

document.querySelector('#viewCards').addEventListener('click', () => {
    let newView = document.querySelector('.cards');
    let oldView = document.querySelector('.list');
    if ('notInView' in newView.classList) {
        return;
    } else {
        oldView.classList.add('notInView');
        newView.classList.remove('notInView');
    }
})

document.querySelector('#viewList').addEventListener('click', () => {
    let newView = document.querySelector('.list');
    let oldView = document.querySelector('.cards');
    if ('notInView' in newView.classList) {
        return;
    } else {
        oldView.classList.add('notInView');
        newView.classList.remove('notInView');
    }
})