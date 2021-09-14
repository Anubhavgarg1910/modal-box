'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// function to show the modal box

const showModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

// function to remove the modal box

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener("click", showModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function(x) {
    // console.log(x.key);
    if(x.key === "r" && !modal.classList.contains("hidden")) {
        closeModal();
    }
})