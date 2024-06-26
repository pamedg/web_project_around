const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__bottom");
const closeProfilePopupButton = document.querySelector("#close-profile-form");
const formProfile = document.querySelector("#form-profile");
const inputName = document.querySelector("#input-name");
const profileName = document.querySelector(".profile__name");
const profileOccupation = document.querySelector(".profile__occupation");
const inputAbout = document.querySelector("#input-about");

function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_show");
}
function handleCloseProfilePopup() {
  popupProfile.classList.remove("popup_show");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputAbout.value;
  handleCloseProfilePopup();
}

profileButton.addEventListener("click", handleOpenProfilePopup);
closeProfilePopupButton.addEventListener("click", handleCloseProfilePopup);
formProfile.addEventListener("submit", handleProfileFormSubmit);
