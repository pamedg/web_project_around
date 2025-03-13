export const initialCards = [
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
/*como crear nombres de  mis variables----a quien afecta + tipo de elemento */
export const popupProfile = document.querySelector("#popup-profile");
export const popupAddCard = document.querySelector("#popup-add");
export const profileButton = document.querySelector(".profile__bottom");
export const openCardForm = document.querySelector(
  "#profile-form-button"
); /*es un boton, OJO si se llega a corregir */
export const closeProfilePopupButton = document.querySelector(
  "#close-profile-form"
);
export const formProfile = document.querySelector("#form-profile");
export const formCards = document.querySelector("#form-add");
export const inputName = document.querySelector("#input-name");
export const profileName = document.querySelector(".profile__name");
export const profileOccupation = document.querySelector(".profile__occupation");
export const inputAbout = document.querySelector("#input-about");
export const profileButtonAdd = document.querySelector(".profile__bottom-add");
export const closeProfilePopupButtonAdd = document.querySelector(
  "#close-profile-form-add"
);
export const template = document.querySelector(".template-card");
export const cardArea = document.querySelector(".card-grid");
export const popupImage = document.querySelector("#popup-image");
export const popupImageTag = document.querySelector(".popup__image");
export const popupTitleTag = document.querySelector(".popup__title");
export const cardInputName = document.querySelector("#input-place");
export const cardInputLink = document.querySelector("#input-image");
export const closePopupImage = document.querySelector(".popup__close");
