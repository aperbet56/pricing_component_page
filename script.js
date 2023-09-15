// Récupération des différents éléments
const annuallyLink = document.querySelector(".nav__link--annually");
const monthlyLink = document.querySelector(".nav__link--monthly");
const prices = document.querySelectorAll(".card__section__price");

// Ecoute de l'événement "click" sur le lien Annually
annuallyLink.addEventListener("click", () => {
  prices[0].innerHTML = `<span>$</span>${199.99}`;
  prices[1].innerHTML = `<span>$</span>${249.99}`;
  prices[2].innerHTML = `<span>$</span>${399.99}`;
});

// Ecoute de l'événement "click" sur le lien Monthly
monthlyLink.addEventListener("click", () => {
  prices[0].innerHTML = `<span>$</span>${19.99}`;
  prices[1].innerHTML = `<span>$</span>${24.99}`;
  prices[2].innerHTML = `<span>$</span>${39.99}`;
});
