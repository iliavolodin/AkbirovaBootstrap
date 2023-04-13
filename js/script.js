"use strict";
//variables
const nav = document.querySelector(".navbar");
const header = document.getElementsByTagName("header");
const navHeight = nav.getBoundingClientRect().height;
const btnLinkToTelegram = document.querySelector("#tg__link");
const btnContactsLinkToTelegram = document.querySelector("#small__linkTg");

console.log(header);
console.log(navHeight);

// Sticky navigation: Intersection Observer API
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

// scrolling nav-links with events delegation
document.querySelector(".navbar").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  //Mathcing strategy. Посолько событие может происходить и на родительском блоке (у него нету href ссылок), то нужно проверить этот момень (нас интересуют только элементы со ссылками)
  if (e.target.classList.contains("nav-link")) {
    console.log("LINK");
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//links to tg, whatsapp, instagram
//const url = "https://tlgg.ru/@r_abdulina";
btnLinkToTelegram.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(btnLinkToTelegram);
  window.open("https://tlgg.ru/@r_abdulina", "Tab");
});

btnContactsLinkToTelegram.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(btnContactsLinkToTelegram);
  window.open("https://tlgg.ru/@r_abdulina", "Tab");
});
