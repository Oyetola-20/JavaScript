'use strict';
const modalWindow = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModalBtns = document.querySelectorAll('.show-modal');
console.log(showModalBtns)
const showModal = function(){
    overlay.classList.remove('hidden');
    modalWindow.classList.remove('hidden');
}
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', showModal );
}

const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
