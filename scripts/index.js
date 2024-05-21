const popupProfile = document.querySelector("#popup-profile");
const profileButton = document.querySelector(".profile__bottom");
const formProfile = document.querySelector("#form.profile");
const inputName = document.querySelector("#input-name");
const profileName = document.querySelector(".profile__name");

function handleOpenProfilePopup() {
  popupProfile.classList.add("popup_show");
}
function handleCloseProfilePopup() {
  popupProfile.classList.remove("popup_show");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent - inputName.value;
  handleCloseProfilePopup();
}

profileButton.addEventListener("click", handleOpenProfilePopup);

formProfile.addEventListener("submit", handleProfileFormSubmit);
