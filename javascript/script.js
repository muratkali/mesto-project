const container = document.querySelector('.content');
const popupEdit = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');

const formElement = document.querySelector('.form__edit-profile-bio');

const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subheading');

const profileNameInput = document.querySelector('.form_input_name');
const profileSubtitleInput = document.querySelector('.form_input_job');

// console.log(form_input_name);
console.log(formElement);


// открытие попапа редактирования профиля
function openPopup() {
    popupEdit.classList.add('popup_opened');
    profileNameInput.value = profileName.innerText;
    profileSubtitleInput.value = profileSubtitle.innerText;
  }

// закрытие попапа редактирования профиля

function closePopup() {
    popupEdit.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// функция изменения био профиля

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.innerText = profileNameInput.value;
    console.log(profileNameInput.value);
    profileSubtitle.innerText = profileSubtitleInput.value;
    closePopup();
}

formElement.addEventListener('sumbit', handleFormSubmit)




// let likeElement = document.querySelectorAll('.elements__like-button');
// function likeElement() {
//     likeElementButton.classList.add('elements__like-button_clicked');
// }
  
// likeElementButton.addEventListener('click', likeElement);

//   editButton.addEventListener('click', function () {
//     openPopup(popup);
//   });


// function openPopup() {
//     editButton.querySelector('.popup').addEventListener('click', function (evt) {
//         evt.target.classList.add('popup_opened');
//     })
// }