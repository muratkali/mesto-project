// переменные
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subheading');
const profileNameInput = document.querySelector('.form_input_name');
const profileSubtitleInput = document.querySelector('.form_input_job');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileForm = document.querySelector('.form__edit-profile-bio');

// кнопки
const editProfileInfoButton = document.querySelector('.profile__edit-button');
const closeProfileInfoButton = document.querySelector('.popup__close-button');

// открытие попапа редактирования профиля
function openPopup(item) {
    item.classList.add("popup_opened");
};

function openPopupEditProfileForm() {
    popupEditProfile.classList.add('popup_opened');
    profileNameInput.value = profileName.innerText;
    profileSubtitleInput.value = profileSubtitle.innerText;
  }

// закрытие попапа, закрытие редактирования профиля

function closePopup(item) {
    item.classList.remove("popup_opened");
  };

function closePopupEditProfileForm() {
    popupEditProfile.classList.remove('popup_opened');
}

// функция изменения био профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopupEditProfileForm();
}

// обработчики событий и функций
editProfileInfoButton.addEventListener('click', openPopupEditProfileForm);
closeProfileInfoButton.addEventListener('click', closePopupEditProfileForm);
popupEditProfileForm.addEventListener('submit', handleFormSubmit)

