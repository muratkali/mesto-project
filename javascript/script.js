// дефолтные изображения и названия в количестве 6 штук с UNSPLASH

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  

// переменные

// формы
const popupEditProfileForm = document.querySelector('.form__edit-profile-bio');

//попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddItem = document.querySelector('.popup_type_add-item');

//
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subheading');
const profileNameInput = document.querySelector('.form_input_name');
const profileSubtitleInput = document.querySelector('.form_input_job');


// кнопки
const editProfileInfoButton = document.querySelector('.profile__edit-button');
const closeProfileInfoButton = document.querySelector('.popup__close-button');
const openItemAddButton = document.querySelector('.profile__add-button');
const closePopupAddItemFormButton = document.querySelector('.popup__close-button-card');

console.log(closePopupAddItemFormButton);

// картинки
const popupItemImage = document.querySelector('.popup__fullscreen-image')

// templates for the cards
const elementsTemplate = document.querySelector('.template').content.querySelector(".elements__item");
const elementsList = document.querySelector('.elements__list');

// открытие попапа ??
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

// открытие и закрытие попапа добавления карточки

function openPopupAddItemForm() {
    popupAddItem.classList.add('popup_opened');
  }

function closePopupAddItemForm() {
    popupAddItem.classList.remove('popup_opened');
}


// функция изменения био профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopupEditProfileForm();
}

// геренация фото добавление стрелочной функции 
    const addNewItem = (itemInfo) => {
    const templateItem = elementsTemplate.cloneNode(true);
    const templateItemTitle = templateItem.querySelector('.elements__title');
    const templateItemImg = templateItem.querySelector(".elements__image");
    const templateItemLike = templateItem.querySelector(".elements__like-button");
    const templateItemRemove = templateItem.querySelector(".elements__remove-button")

    templateItemImg.src = itemInfo.link;
    templateItemTitle.textContent = itemInfo.name;
    
    return templateItem;
    };

    const renderElements = (itemInfo) => {
        elementsList.prepend(addNewItem(itemInfo));
    };

    initialCards.forEach((itemInfo) => {
        renderElements(itemInfo);
    });
    

// обработчики событий и функций
editProfileInfoButton.addEventListener('click', openPopupEditProfileForm);
closeProfileInfoButton.addEventListener('click', closePopupEditProfileForm);
popupEditProfileForm.addEventListener('submit', handleFormSubmit);
openItemAddButton.addEventListener('click', openPopupAddItemForm);
closePopupAddItemFormButton.addEventListener('click', closePopupAddItemForm);

    

