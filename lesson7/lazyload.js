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