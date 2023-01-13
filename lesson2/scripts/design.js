let date = new Date();
let year = date.getFullYear();
let currentdate = document.lastModified;

document.querySelector('footer').querySelector('div').innerHTML = `&copy ${year} :|: W. Braden Huttash :|: Last Updated: ${currentdate}`;