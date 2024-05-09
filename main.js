import { eventsStore } from "./js/data.js";
import { createEventElement } from "./js/util.js";

const secondFlexContainer = document.querySelector(".second_flex");
const typeSelect = document.getElementById("type-id");
const distanceSelect = document.getElementById("distance-id");
const categoriesSelect = document.getElementById("categories-id");

let filteredEvents = [];

function filterElements() {
  let distanceValue = parseInt(distanceSelect.value);

  let typeValue = typeSelect.value;

  let categoryValue = categoriesSelect.value;

  if (isNaN(distanceValue)) {
    distanceValue = 0;
  }

  filteredEvents = eventsStore.filter((event) => {
    const isDistanceValid =
      distanceValue === 0 || event.distance <= distanceValue;

    const isTypeValid = typeValue === "Any type" || event.type === typeValue;

    const isCategoryValid =
      categoryValue === "Any categories" || event.category === categoryValue;

    return isDistanceValid && isTypeValid && isCategoryValid;
  });

  renderEvents();
}

function renderEvents() {
  secondFlexContainer.innerHTML = "";

  const maxVisibleItems = window.innerWidth <= 430 ? 3 : filteredEvents.length;

  for (let i = 0; i < maxVisibleItems; i++) {
    const event = filteredEvents[i];
    const eventElement = createEventElement(event);
    secondFlexContainer.appendChild(eventElement);
  }
}

typeSelect.addEventListener("change", filterElements);
distanceSelect.addEventListener("change", filterElements);
categoriesSelect.addEventListener("change", filterElements);

filterElements();

const closeButton = document.querySelector(".second-right-close-btn");
const containerToClose = document.querySelector(".second-right-img");
const openButton = document.querySelector(".second-right_js-btn");

closeButton.addEventListener("click", () => {
  containerToClose.style.display = "none";
  openButton.style.display = "block";
});

openButton.addEventListener("click", () => {
  containerToClose.style.display = "block";
  openButton.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.querySelector(".btn");
  const signUpContainer = document.querySelector(".container-signup");
  const overlay = document.getElementById("overlay");

  signUpButton.addEventListener("click", function () {
    overlay.style.display = "block";
    signUpContainer.style.display = "block";
  });

  const loginTrigger = document.querySelector(".header_right-link a");

  loginTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    overlay.style.display = "block";
  });
});

const mapButton = document.querySelector(".second-right-btn");
const mapIframe = document.querySelector(".second-right_ifame");

mapButton.addEventListener("click", () => {
  mapIframe.style.filter = "none";
  mapButton.style.display = "none";
});

// const signInForm = document.querySelector("#sign-in");
// const loginForm = document.querySelector("#login");

// const users = JSON.parse(localStorage.getItem("users")) || [];
// const errorBox = document.querySelector(".error");
// const successBox = document.querySelector(".success");

// signInForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const userData = {
//     name: e.target.elements.signInName.value.trim(),
//     phone: e.target.elements.signInPhone.value.trim(),
//     email: e.target.elements.signInEmail.value.trim(),
//     password: e.target.elements.signInPassword.value.trim(),
//   };

//   if (
//     !userData.name ||
//     !userData.phone ||
//     !userData.email ||
//     !userData.password
//   ) {
//     errorBox.style.display = "block";
//     errorBox.textContent = "Все поля обязательны";
//   } else if (userData.name.length < 2 || userData.name.length > 24) {
//     errorBox.style.display = "block";
//     errorBox.textContent = "Имя должно содержать от 2 до 24 символов";
//   } else if (!/^[a-zA-Z]+$/.test(userData.name)) {
//     errorBox.style.display = "block";
//     errorBox.textContent = "Имя должно содержать только буквы";
//   } else if (!userData.email.includes("@") || userData.email.length < 7) {
//     errorBox.style.display = "block";
//     errorBox.textContent = "Введите корректный email";
//   } else if (
//     !userData.phone.startsWith("+") ||
//     !/^\+\d{8,12}$/.test(userData.phone)
//   ) {
//     errorBox.style.display = "block";
//     errorBox.textContent =
//       'Введите корректный номер телефона (начиная с "+", от 8 до 12 цифр)';
//   } else if (userData.password.length < 5 || userData.password.length > 26) {
//     errorBox.style.display = "block";
//     errorBox.textContent = "Пароль должен содержать от 5 до 26 символов";
//   } else {
//     errorBox.style.display = "none";
//     users.push(userData);
//     localStorage.setItem("users", JSON.stringify(users));
//     e.target.reset();
//   }
// });

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const userData = {
//     email: e.target.elements.loginEmail.value.trim(),
//     password: e.target.elements.loginPassword.value.trim(),
//   };

//   const activeUser = users.find((user) => {
//     return user.email === userData.email && user.password === userData.password;
//   });

//   if (activeUser) {
//     errorBox.style.display = "none";
//     successBox.style.display = "block";
//     successBox.textContent = "Вход успешен";
//     e.target.reset();
//   } else {
//     successBox.style.display = "none";
//     errorBox.style.display = "block";
//     errorBox.textContent = "Ввели неправильный email или пароль";
//   }
// });
