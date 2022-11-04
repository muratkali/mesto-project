const container = document.querySelector('.content');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');


function openPopup() {
    popup.classList.add('popup_opened');
  }

function closePopup() {
    popup.classList.remove('popup_opened');
}
  
editButton.addEventListener ('click', openPopup);
closeButton.addEventListener ('click', closePopup);

//   editButton.addEventListener('click', function () {
//     openPopup(popup);
//   });


// function openPopup() {
//     editButton.querySelector('.popup').addEventListener('click', function (evt) {
//         evt.target.classList.add('popup_opened');
//     })
// }