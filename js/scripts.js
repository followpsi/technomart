let contactLink = document.querySelector(".main-info-contacts-contact");
let contactPopup = document.querySelector(".modal-contact");
let contactClose = contactPopup.querySelector(".modal-content-close");

let addressLink = document.querySelector(".main-header-info-contact-address");
let mapLink = document.querySelector(".main-info-contacts-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-content-close");

contactLink.addEventListener("click", function(event) {
  event.preventDefault();
  contactPopup.classList.add("modal-content-show");
});

contactClose.addEventListener("click", function(event) {
  event.preventDefault();
  contactPopup.classList.remove("modal-content-show");
});

addressLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});
