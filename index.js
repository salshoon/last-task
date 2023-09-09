const imageContainer = document.querySelector(".image-container");
const mainImage = document.querySelector(".main-image");
const mainTitle = document.querySelector(".section__info--title");
const mainText = document.querySelector(".section__info--text_content");
const source = document.querySelector(".section__info--text_source");
const rotation = document.querySelector(".rotation_text");
const revolution = document.querySelector(".revolution_text");
const radius = document.querySelector(".radius_text");
const temperature = document.querySelector(".temperature_text");
const headerButtons = document.querySelectorAll(".nav__link");
const navList = document.querySelector(".nav__list");
const menuButton = document.querySelector(".hamburger_menu");
const sectionInfoButtons = document.querySelectorAll(".section-button");
const sectionInfoButtonsText = document.querySelectorAll(".button_text");
const rootStyles = getComputedStyle(document.documentElement);
const planetGeology = document.querySelector('.geology');
let currentWidth = window.innerWidth;
let data = null;
let activePlanet = 'Mercury'

const PLANETS_API = 'https://planets-api.vercel.app/api/v1/planets';

menuButton.addEventListener("click", function () {
    navList.classList.toggle("nav__list-active");
    menuButton.classList.toggle("hamburger_menu-opacity");
  });

  const url = "https://planets-api.vercel.app/api/v1/planets";