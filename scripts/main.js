let date = new Date();
let year = date.getFullYear();

document.querySelector('footer').querySelector('h1').innerHTML = `&copy ${year} :|: W. Braden Huttash :|: Idaho`;

let currentdate = document.lastModified;

document.querySelector('footer').querySelector('h2').textContent = `Last Updated: ${currentdate}`;