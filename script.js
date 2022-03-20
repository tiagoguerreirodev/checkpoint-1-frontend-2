const form = document.querySelector("form");
const cardsDiv = document.querySelector(".cards");
const submitButton = document.querySelector("#submit");

const inputTitle = document.querySelector("#name");
const inputDescr = document.querySelector("#descr");
const inputURL = document.querySelector("#url");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const cardObj = {
    title: inputTitle.value,
    description: inputDescr.value,
    url: inputURL.value,
  };

  const hasEmptyField = Object.entries(cardObj).some((field) => field[1] == "");

  if (!hasEmptyField) {
    const card = `
  <div class="card">
    <div class="image" style="background-image:url(${cardObj.url})"></div>
    <h2>${cardObj.title}</h2>
    <p>${cardObj.description}</p>
  </div>
  `;

    cardsDiv.innerHTML += card;
  }
});
