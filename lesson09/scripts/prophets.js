const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bday = document.createElement('h3');
        let birthplace = document.createElement('h3');
        let portrait = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the h3 content to show the prophet's date of birth and birthplace
        bday.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
    
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(bday);
        card.appendChild(birthplace);
        card.appendChild(portrait);
    
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
    // displayTable(data.prophets);
}
  
getProphetData();

function displayTable(prophets) {
    prophets.forEach((prophet) => {
        let tr = document.createElement('tr');
        let td_name = document.createElement('td');
        let td_birthdate = document.createElement('td');
        let td_birthplace = document.createElement('td');

        td_name.textContent = `${prophet.name} ${prophet.lastname}`;
        td_birthdate.textContent = prophet.birthdate;
        td_birthplace.textContent = prophet.birthplace;

        tr.appendChild(td_name);
        tr.appendChild(td_birthdate);
        tr.appendChild(td_birthplace);

        document.querySelector('table').appendChild(tr);
    })
}