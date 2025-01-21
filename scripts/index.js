import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Validator from "../components/Validator.js";
import dayjs from "dayjs";
import {
  initialCards,
  popupAddCard,
  profileButton,
  openCardForm,
  formProfile,
  inputName,
  profileName,
  profileOccupation,
  inputAbout,
  profileButtonAdd,
  cardArea,
  formCards,
} from "./utils.js";

const today = new Date();

console.log(dayjs(today).format("YYYY"));

initialCards.forEach(function (item) {
  const instanciaDeCard = new Card(item.name, item.link, () => {
    popupImage.open(item.name, item.link);
  });
  const cardElement = instanciaDeCard.generateCard();

  cardArea.append(cardElement);
});

const popupFormProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  console.log(inputValues);
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
});
popupFormProfile.setEventListeners();

const popupFormCards = new PopupWithForm("#popup-add", (inputValues) => {
  const instanciaDeCard = new Card(inputValues.title, inputValues.link, () => {
    popupImage.open(inputValues.title, inputValues.link);
  });
  const cardElement = instanciaDeCard.generateCard();

  cardArea.prepend(cardElement);
  popupFormCards.close();
});
popupFormCards.setEventListeners();

const popupImage = new PopupWithImage("#popup-image");

popupImage.setEventListener();

console.log(popupFormProfile);

profileButton.addEventListener("click", () => popupFormProfile.open());

profileButtonAdd.addEventListener("click", () => {
  popupFormCards.open();
});

openCardForm.addEventListener("click", function () {
  popupAddCard.classList.add(".popup_show");
});

const profileFormValidation = new Validator(formProfile, {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
});

const cardsFormValidation = new Validator(formCards, {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
});

profileFormValidation.enableValidation();

cardsFormValidation.enableValidation();
