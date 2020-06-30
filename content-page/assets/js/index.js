const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
    card.addEventListener("click", () => {
        const cardId = card.getAttribute("id")
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe")
          .src = `https://rocketseat.com.br/${cardId}`;
    })
}

document.querySelector(".close-modal")
  .addEventListener("click", () => {
      modalOverlay.classList.remove("active")
      modalOverlay.querySelector("iframe").src = ""
  })

const modal = document.querySelector(".modal");
const btnMaximize = document.querySelector(".maximize-modal");

btnMaximize.addEventListener("click", () => {
  modal.classList.toggle("maximize")
})