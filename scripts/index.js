/*como crear nombres de  mis variables----a quien afecta + tipo de elemento */
const popupProfile = document.querySelector("#popup-profile");
const popupAddCard = document.querySelector("#popup-add");
const profileButton = document.querySelector(".profile__bottom");
const openCardForm = document.querySelector(
  "#profile-form-button"
); /*es un boton, OJO si se llega a corregir */
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
const cardArea = document.querySelector(".card-grid");
const popupImage = document.querySelector("#popup-image");
const popupImageTag = document.querySelector(".popup__image");
const popupTitleTag = document.querySelector(".popup__title");
const cardInputName = document.querySelector("#input-place");
const cardInputLink = document.querySelector("#input-image");
const closePopupImage = document.querySelector(".popup__close");
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

function openPopup(name, link) {
  popupImageTag.src = link;
  popupTitleTag.textContent = name;
  popupImage.classList.add("popup_show");
}

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
  cardImage.addEventListener("click", function () {
    openPopup(name, link);
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

function handleClosePopupImage() {
  popupImage.classList.remove("popup_show");
}

profileButton.addEventListener("click", handleOpenProfilePopup);
profileButtonAdd.addEventListener("click", handleOpenCardPopup);
closeProfilePopupButton.addEventListener("click", handleCloseProfilePopup);
closeProfilePopupButtonAdd.addEventListener("click", handleCloseCardPopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
openCardForm.addEventListener("click", function () {
  popupAddCard.classList.add(".popup_show");
});
closePopupImage.addEventListener("click", handleClosePopupImage);

const formCardsAdd = document.querySelector("#form-add");

formCardsAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardGenerator(cardInputName.value, cardInputLink.value);
  cardArea.prepend(cardToAdd);
  handleCloseCardPopup();
  popupAddCard.classList.remove("popup_show");
});
