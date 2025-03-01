import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Validator from "../components/Validator.js";
import { api } from "../components/Api.js";

import {
  initialCards,
  popupAddCard,
  profileButton,
  openCardForm,
  formProfile,
  profileButtonAdd,
  cardArea,
  formCards,
} from "./utils.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

api.getInitialCards().then((initialCards) => {
  new Section(initialCards, (item) => {
    const instanciaDeCard = new Card(
      item,
      () => {
        popupImage.open(item.name, item.link);
      },
      () => {
        api.Likes(item._id);
      },
      () => {
        api.Dislike(item._id);
      }
    );
    return instanciaDeCard.generateCard();
  }).renderer();
});

api.getUserInformation().then((result) => {
  userInfo.setUserInfo({
    name: result.name,
    job: result.about,
    link: result.avatar,
  });
});

const userInfo = new UserInfo(".profile__name", ".profile__occupation");

const popupFormProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  console.log(inputValues);
  api
    .updateUserInformation({ name: inputValues.name, about: inputValues.job })
    .then((result) => {
      userInfo.setUserInfo({ name: inputValues.name, job: inputValues.job });
    });
});
popupFormProfile.setEventListeners();

const popupFormCards = new PopupWithForm("#popup-add", (inputValues) => {
  api.createCard(inputValues.title, inputValues.link).then((result) => {
    const instanciaDeCard = new Card(
      result,
      () => {
        popupImage.open(inputValues.title, inputValues.link);
      },
      () => {
        api.Likes().then(() => {});
      },
      () => {
        api.Dislike(item._id);
      }
    );
    const cardElement = instanciaDeCard.generateCard();

    cardArea.prepend(cardElement);
    /*popupFormCards.close();*/
  });
});

popupFormCards.setEventListeners();

const popupImage = new PopupWithImage("#popup-image");

popupImage.setEventListener();

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
