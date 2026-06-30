const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(otherCard => {
            if(otherCard !== card){
                otherCard.classList.remove("active");
            }
        });

        card.classList.toggle("active");
    });
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});
