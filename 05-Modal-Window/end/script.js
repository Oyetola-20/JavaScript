'use strict';
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttons = document.querySelectorAll('.show-modal')

const showModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  
}
const closeModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}
for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', showModal);
}
closeModalButton.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)


