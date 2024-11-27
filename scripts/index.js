import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Validator from "../components/Validator.js";
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

const closeProfileForm = document.querySelector("#close-profile-form");

initialCards.forEach(function (item) {
  const instanciaDeCard = new Card(item.name, item.link);
  const cardElement = instanciaDeCard.generateCard();

  cardArea.append(cardElement);
});

const popupFormProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  console.log(inputValues);
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
});
popupFormProfile.setEventListeners();
console.log(popupFormProfile);

function handleOpenProfilePopup() {
  popupFormProfile.open();
  document.addEventListener("keydown", handleCloseOnEsc);
}

function handleOpenCardPopup() {
  popupAddCard.classList.add("popup_show");
  document.addEventListener("keydown", handleCloseOnEsc);
}

profileButton.addEventListener("click", () => popupFormProfile.open());
profileButtonAdd.addEventListener("click", handleOpenCardPopup);

openCardForm.addEventListener("click", function () {
  popupAddCard.classList.add(".popup_show");
});

const formCardsAdd = document.querySelector("#form-add");

formCardsAdd.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = newCard(
    cardInputName.value,
    cardInputLink.value
  ).generateCard();
  cardArea.prepend(cardToAdd);

  popupAddCard.classList.remove("popup_show");
  popupProfile.close();
});

const profileFormValidation = new Validator(formProfile, {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
});

profileFormValidation.enableValidation();
