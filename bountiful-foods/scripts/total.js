// Total Drinks
if (!localStorage.getItem("numDrinks")) {
    document.getElementById('drinks').textContent = 0;
} else {
    document.getElementById('drinks').textContent = localStorage.getItem("numDrinks");
}