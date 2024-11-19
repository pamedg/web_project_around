import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  initialCards,
  popupProfile,
  popupAddCard,
  profileButton,
  openCardForm,
  closeProfilePopupButton,
  formProfile,
  formCards,
  inputName,
  profileName,
  profileOccupation,
  inputAbout,
  profileButtonAdd,
  closeProfilePopupButtonAdd,
  template,
  cardArea,
  popupImage,
  popupImageTag,
  popupTitleTag,
  cardInputName,
  cardInputLink,
  closePopupImage,
} from "./utils.js";

function openPopup(name, link) {
  popupImageTag.src = link;
  popupTitleTag.textContent = name;
  popupImage.classList.add("popup_show");
  document.addEventListener("keydown", handleCloseOnEsc);
}

new Card("Venezia, Italia", "./images/Veneziaitalia.png");

/*function generateCard(name, link) {
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
}*/

const closeProfileForm = document.querySelector("#close-profile-form");
initialCards.forEach(function (item) {
  /*const newCard = generateCard(item.name, item.link).generateCard();*/
  const instanciaDeCard = new Card(item.name, item.link);
  const cardElement = instanciaDeCard.generateCard();

  cardArea.append(cardElement);
});

const popupProfile = new PopupWithForm("#popup-profile", () => {});

/*function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_show");
  document.addEventListener("keydown", handleCloseOnEsc);
}

function handleCloseProfilePopup() {
  popupProfile.classList.remove("popup_show");
  document.removeEventListener("keydown", handleCloseOnEsc);
}*/

function handleOpenCardPopup() {
  popupAddCard.classList.add("popup_show");
  document.addEventListener("keydown", handleCloseOnEsc);
}

function handleCloseCardPopup() {
  popupAddCard.classList.remove("popup_show");
  document.removeEventListener("keydown", handleCloseOnEsc);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
  handleCloseProfilePopup();
}

function handleClosePopupImage() {
  popupImage.classList.remove("popup_show");
  document.removeEventListener("keydown", handleCloseOnEsc);
}

profileButton.addEventListener("click", () => popupProfile.open);
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
  const cardToAdd = newCard(
    cardInputName.value,
    cardInputLink.value
  ).generateCard();
  cardArea.prepend(cardToAdd);
  handleCloseCardPopup();
  popupAddCard.classList.remove("popup_show");
  popupProfile.close();
});

function handleCloseOnEsc(evt) {
  if (evt.key === "Escape") {
    handleCloseCardPopup();
    handleClosePopupImage();
    handleCloseProfilePopup();
  }
}

function handleClickOutside(evt) {
  if (evt.target.classList.contains("popup_show")) {
    handleCloseCardPopup();
    handleClosePopupImage();
    handleCloseProfilePopup();
  }
}

popupProfile.addEventListener("click", handleClickOutside);
popupAddCard.addEventListener("click", handleClickOutside);
popupImage.addEventListener("click", handleClickOutside);

closeProfileForm.addEventListener("click", () => {
  popupProfile.close();
});