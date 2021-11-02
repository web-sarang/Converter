let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}


// Burger-menu

const burgerMenu = document.querySelector('.burger__menu-button');
const bodyMenu = document.querySelector('.menu');

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        // burgerMenu.classList.toggle('button--open');
        bodyMenu.classList.toggle('menu--open');
    });
}