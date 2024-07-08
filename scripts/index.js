const popupProfile = document.querySelector("#popup-profile");
const popupAddCard = document.querySelector("#popup-add");
const profileButton = document.querySelector(".profile__bottom");
const closeProfilePopupButton = document.querySelector("#close-profile-form");
const formProfile = document.querySelector("#form-profile");
const inputName = document.querySelector("#input-name");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const inputAbout = document.querySelector("#input-about");
const profileButtonAdd = document.querySelector(".profile__bottom-add");
const closeProfilePopupButtonAdd = document.querySelector(
  "#close-profile-form-add"
);
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

function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_show");
}

function handleCloseProfilePopup() {
  popupProfile.classlist.remove("popup_show");
}

function handleCloseProfilePopup() {
  popupAddCard.classlist.add("popup_show");
}

function handleCloseProfilePopup() {
  popupAddCard.classList.remove("popup_show");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
  handleCloseProfilePopup();
}

profileButton.addEventListener("click", handleOpenProfilePopup);
profileButtonAdd.addEventListener("click", handleOpenProfilePopup);
closeProfilePopupButton.addEventListener("click", handleCloseProfilePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
