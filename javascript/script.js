const container = document.querySelector('.content');
const editButton = container.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');


function openPopup() {
    popup.classList.add('popup_opened');
  }
  
editButton.addEventListener('click', openPopup);

//   editButton.addEventListener('click', function () {
//     openPopup(popup);
//   });


// function openPopup() {
//     editButton.querySelector('.popup').addEventListener('click', function (evt) {
//         evt.target.classList.add('popup_opened');
//     })
// }