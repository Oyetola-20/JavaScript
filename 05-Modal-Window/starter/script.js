'use strict';
let openModal = document.querySelectorAll('.show-modal');
let modal1 = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let overLay = document.querySelector('.overlay');

let openModalbtn = function (){
  modal1.classList.remove('hidden');
  overLay.classList.remove('hidden');
}
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openModalbtn);
}

let modalclose = function (){
  modal1.classList.add('hidden');
  overLay.classList.add('hidden');
}

closeModal.addEventListener('click', modalclose);
overLay.addEventListener('click', modalclose);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal1.classList.contains('hidden')) {
    modalclose();
  }
})