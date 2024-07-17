const popupProfile = document.querySelector("#popup-profile");
const popupAddCard = document.querySelector("#popup-add");
const profileButton = document.querySelector(".profile__bottom");
const openCardForm = document.querySelector("#profile-form-button");
const closeProfilePopupButton = document.querySelector("#close-profile-form");
const formProfile = document.querySelector("#form-profile");
const formCards = document.querySelector("#form-addcard");
const inputName = document.querySelector("#input-name");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const inputAbout = document.querySelector("#input-about");
const profileButtonAdd = document.querySelector(".profile__bottom-add");
const closeProfilePopupButtonAdd = document.querySelector(
  "#close-profile-form-add"
);
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".card__grid");

const initialCards = [
  {
    name: "San Francisco, USA",
    link: "./images/Sanfrancisco.png",
  },
  {
    name: "Oaxaca, México",
    link: "./images/Oaxacamexico.png",
  },
  {
    name: "Andalucia, España",
    link: "./images/AndaluciaEspaña.png",
  },
  {
    name: "New York, USA",
    link: "./images/newyork.png",
  },
  {
    name: "Venezia, Italia",
    link: "./images/Veneziaitalia.png",
  },
  {
    name: "Paris, Francia",
    link: "./images/Parisfrance.png",
  },
];

function cardGenerator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__footer");
  const btnDelete = card.querySelector(".card__bottom-trash");
  btnDelete.addEventListener("click", function () {
    card.remove();
  });
  const btnLike = card.querySelector(".card__bottom-like");
  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("card__bottom-like_active");
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;
  return card;
}

initialCards.forEach(function (item) {
  const newCard = cardGenerator(item.name, item.link);
  cardArea.append(newCard);
});

function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_show");
}

function handleCloseProfilePopup() {
  popupProfile.classList.remove("popup_show");
}

function handleOpenCardPopup() {
  popupAddCard.classList.add("popup_show");
}

function handleCloseCardPopup() {
  popupAddCard.classList.remove("popup_show");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
  handleCloseProfilePopup();
}

profileButton.addEventListener("click", handleOpenProfilePopup);
profileButtonAdd.addEventListener("click", handleOpenCardPopup);
closeProfilePopupButton.addEventListener("click", handleCloseProfilePopup);
closeProfilePopupButtonAdd.addEventListener("click", handleCloseCardPopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
openCardForm.addEventListener("click", function () {
  popupCards.classList.add(".popup_show");
});

const formCardsAdd = document.querySelector("#form-add");

formCardsAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator();
  cardArea.prepend(cardToAdd);
  handleCloseCardPopup();
  popupCards.remove("popup_show");
});
