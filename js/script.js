"use strict";

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
