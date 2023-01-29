// Date in header
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = weekdays[date.getDay()];
let num = date.getDate();
let month = months[date.getMonth()];
let year = date.getFullYear();

document.querySelector('#date').textContent = `${day}, ${num} ${month} ${year}`;

// Hamburger Button
const mainnav = document.querySelector('nav');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive');
})

// Footer info
let moddate = document.lastModified;

document.querySelector('#bottom').innerHTML = `&copy ${year} | Braden Huttash | WDD 230 Project | Last Modification: ${moddate}`;