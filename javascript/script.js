

// переменные

// формы
const popupEditProfileForm = document.querySelector('.form__edit-profile-bio');
const formAddCard = document.querySelector('.form__add-item');

//попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddItem = document.querySelector('.popup_type_add-item');
const popupFullscreenItem = document.querySelector('.popup_type_fullscreen');

//инпуты для формы 
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subheading');
const profileNameInput = document.querySelector('.form_input_name');
const profileSubtitleInput = document.querySelector('.form_input_job');

// кнопки
const editProfileInfoButton = document.querySelector('.profile__edit-button');
const closeProfileInfoButton = document.querySelector('.popup__close-button');
const openItemAddButton = document.querySelector('.profile__add-button');
const closePopupAddItemFormButton = document.querySelector('.popup__close-button-card');
const closeFullscreenButton = document.querySelector('.popup__close-button-fullscreen');

const addItemNameInput = document.querySelector('.form_input_image_name');
const addItemLinkInput = document.querySelector('.form_input_image_link');

// картинки
const popupItemImage = document.querySelector('.popup__fullscreen-image')
const popupItemTitle = document.querySelector('.popup__fullscreen-title');

// templates for the cards
const elementsTemplate = document.querySelector('.template').content.querySelector(".elements__item");
const elementsList = document.querySelector('.elements__list');

// открытие любого попапа 
function openPopup(item) {
    item.classList.add("popup_opened");
};

function openPopupEditProfileForm() {
    openPopup(popupEditProfile);
    profileNameInput.value = profileName.innerText;
    profileSubtitleInput.value = profileSubtitle.innerText;
  }

// закрытие попапа, закрытие редактирования профиля

function closePopup(item) {
    item.classList.remove("popup_opened");
  };

function closePopupEditProfileForm() {
  closePopup(popupEditProfile);
}

// открытие и закрытие попапа добавления карточки

function openPopupAddItemForm() {
    openPopup(popupAddItem);
  }

function closePopupAddItemForm() {
    closePopup(popupAddItem);
}

// открытие и закрытие фулксрин картинки

function openFullscreenItem() {
    openPopup(popupFullscreenItem);
  }

function closeFullscreenItem() {
    closePopup(popupFullscreenItem);
}

// функция изменения био профиля
function handleEditProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopup(popupEditProfile);
    // closePopupEditProfileForm();
}

// геренация фото добавление стрелочной функции 
function createCard(itemInfo) {
  const templateItem = elementsTemplate.cloneNode(true);
  const templateItemImg = templateItem.querySelector(".elements__image");
  const templateItemTitle = templateItem.querySelector('.elements__title');
  const templateItemLike = templateItem.querySelector(".elements__like-button");
  const templateItemRemove = templateItem.querySelector(".elements__remove-button");
  templateItemLike.addEventListener('click', likeItem);

  
  templateItemTitle.textContent = itemInfo.name;
  templateItemImg.alt = itemInfo.name;
  templateItemImg.src = itemInfo.link;
  
  templateItemLike.addEventListener('click', likeItem);
  templateItemRemove.addEventListener('click', deleteItem);

  function openFullscreenPopup() {
      popupItemImage.src = templateItemImg.src;
      popupItemImage.alt = templateItemImg.alt;
      popupItemTitle.textContent = templateItemTitle.textContent;
      openFullscreenItem();
  }
  
  templateItemImg.addEventListener('click', openFullscreenPopup);
  
  return templateItem;
    
  };

function deleteItem(event) {
    event.target.closest('.elements__item').remove();
}

function submitNewItem(event) {
    event.preventDefault();
    renderElements({ 
        name: addItemNameInput.value,
        link: addItemLinkInput.value,
    });
    event.target.reset();
    closePopupAddItemForm();
}

function renderElements(itemInfo) {
    elementsList.prepend(createCard(itemInfo));
};

initialCards.forEach((itemInfo) => {
    renderElements(itemInfo);
});

// поставить сердечко

function likeItem(event) {
    event.target.classList.toggle('elements__like-button_active');
}
// обработчики событий и функций
editProfileInfoButton.addEventListener('click', openPopupEditProfileForm);
closeProfileInfoButton.addEventListener('click', closePopupEditProfileForm);
openItemAddButton.addEventListener('click', openPopupAddItemForm);
closePopupAddItemFormButton.addEventListener('click', closePopupAddItemForm);
closeFullscreenButton.addEventListener('click', closeFullscreenItem);

formAddCard.addEventListener("submit", submitNewItem);
popupEditProfileForm.addEventListener('submit', handleEditProfileFormSubmit);

openItemAddButton.addEventListener('click', openPopupAddItemForm);