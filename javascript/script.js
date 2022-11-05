
const initialCards = [
    {
      name: 'Finally Rich (2012)',
      link: 'https://www.udiscovermusic.com/wp-content/uploads/2022/07/aChiefKe_Finally_CoverAr_3000DPI300RGB1000132005.jpg'
    },
    {
      name: 'Back from the Dead 2',
      link: 'https://m.media-amazon.com/images/I/71FjT-7fSOS._AC_SL1200_.jpg'
    },
    {
      name: '4NEM',
      link: 'https://media.pitchfork.com/photos/61b8f491517e91d45ad2f88f/3:2/w_1500,h_1000,c_limit/Chief-Keef-4Nem.jpeg'
    },
    {
      name: 'Almighty So',
      link: 'https://pbs.twimg.com/media/EMXyLcbUEAIjRqr.jpg'
    },
    {
      name: 'GloFiles, Pt.3',
      link: 'https://images.genius.com/33f6a00f3af54eb069fa52876fbb35b3.1000x1000x1.png'
    },
    {
      name: 'GloToven',
      link: 'https://cdn.albumoftheyear.org/album/144222-glotoven.jpg'
    }
  ]; 
  

// переменные

// формы
const popupEditProfileForm = document.querySelector('.form__edit-profile-bio');
const addItemForm = document.querySelector('.form__add-item');

//попапы
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddItem = document.querySelector('.popup_type_add-item');
const popupFullscreenItem = document.querySelector('.popup_type_fullscreen');

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
const closeFullscreenButton = document.querySelector('.popup__close-button-fullscreen');

const addItemNameInput = document.querySelector('.form_input_image_name');
const addItemLinkInput = document.querySelector('.form_input_image_link');

// картинки
const popupItemImage = document.querySelector('.popup__fullscreen-image')
const popupItemTitle = document.querySelector('.popup__fullscreen-title');

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

// открытие и закрытие фулксрин картинки

function openFullscreenItem() {
    popupFullscreenItem.classList.add('popup_opened');
  }

function closeFullscreenItem() {
    popupFullscreenItem.classList.remove('popup_opened');
}



// функция изменения био профиля
function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileSubtitle.textContent = profileSubtitleInput.value;
    closePopupEditProfileForm();
}

// геренация фото добавление стрелочной функции 
    function addNewItem(itemInfo) {
    const templateItem = elementsTemplate.cloneNode(true);
    const templateItemImg = templateItem.querySelector(".elements__image");
    const templateItemTitle = templateItem.querySelector('.elements__title');
    const templateItemLike = templateItem.querySelector(".elements__like-button");
    const templateItemRemove = templateItem.querySelector(".elements__remove-button");
    templateItemLike.addEventListener('click', likeItem);

    
    templateItemTitle.textContent = itemInfo.name;
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
        closePopupAddItemForm;
    }

    function renderElements(itemInfo) {
        elementsList.prepend(addNewItem(itemInfo));
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

addItemForm.addEventListener("submit", submitNewItem);
popupEditProfileForm.addEventListener('submit', handleFormSubmit);

openItemAddButton.addEventListener('click', openPopupAddItemForm);



