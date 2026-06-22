console.log("Aerospace Foresight loaded.");

const cards = document.querySelectorAll(".card");

console.log(cards);

cards.forEach(card => {
    card.addEventListener("click", () => {
        console.log("clicked");
        card.classList.toggle("active");
    });
});
