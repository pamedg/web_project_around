import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
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
      },
      (cardId, handleRemoveCardElement) => {
        popupConfirmation.open(cardId, handleRemoveCardElement);
      }
    );
    return instanciaDeCard.generateCard();
  }).renderer();
});

api.getUserInformation().then((result) => {
  console.log(result.avatar);
  userInfo.setUserInfo({
    name: result.name,
    job: result.about,
  });

  userInfo.setUserAvatar({ link: result.avatar });
});

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__occupation",
  ".profile__avatar"
);

const popupFormProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  openCardForm.textContent = "Guardando...";
  api
    .updateUserInformation({ name: inputValues.name, about: inputValues.job })
    .then((result) => {
      openCardForm.textContent = "Guardar";
      userInfo.setUserInfo({ name: inputValues.name, job: inputValues.job });
    });
});

const popupAvatarProfile = new PopupWithForm("#popup-avatar", (inputValues) => {
  api.Avatar(inputValues.link).then(() => {
    userInfo.setUserAvatar({ link: inputValues.link });
  });
});

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

const popupImage = new PopupWithImage("#popup-image");

const popupConfirmation = new PopupWithConfirmation(
  "#popup-confirmation",
  (cardId, deleteCard) => {
    api.DeleteCard(cardId).then(() => {
      popupConfirmation.close();
      deleteCard();
    });
  }
);

//card__bottom-trash//

popupFormProfile.setEventListeners();
popupFormCards.setEventListeners();
popupImage.setEventListener();
popupAvatarProfile.setEventListeners();
popupConfirmation.setEventListeners();
//popupConfirmation.open();

profileButton.addEventListener("click", () => popupFormProfile.open());

profileButtonAdd.addEventListener("click", () => {
  popupFormCards.open();
});

const pencilButton = document.querySelector(".profile__edit-pencil");
pencilButton.addEventListener("click", () => popupAvatarProfile.open());

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

/*const avatarFormValidation = new Validator(formAvatar, {
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
});
*/

profileFormValidation.enableValidation();

cardsFormValidation.enableValidation();

/*avatarFormValidation.enableValidation();*/
