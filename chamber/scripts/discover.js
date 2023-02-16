// Lazy load
const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src = source;
}

const io = new IntersectionObserver (
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
            console.log(entries);
        })
    }, 
    {threshold: .5}
);

images.forEach(img => {
    io.observe(img);
})

//Calculate days since last visit

// Local Storage
if (!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', Date.now());
    document.getElementById('lastVisit').textContent = 'Welcome to the Discover page!';
} else {
    let currentDate = Date.now();
    let lastDate = localStorage.getItem('lastVisit');
    let daysSince = (currentDate - lastDate) / 1000 / 60 / 60 / 24;
    document.getElementById('days').textContent = Math.floor(daysSince);
    localStorage.setItem('lastVisit', currentDate);
}