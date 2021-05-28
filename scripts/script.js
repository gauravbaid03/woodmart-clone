/* eslint-disable no-undef */
const home = document.querySelector('.home-link');

const homeNavbarPopup = document.querySelector('.home-menu');

const shop = document.querySelector('.shop-link');

const shopNavbarPopup = document.querySelector('.shop-menu');

const blog = document.querySelector('.blog-link');

const blogNavbarPopup = document.querySelector('.blog-menu');

const loginbutton = document.querySelector('.nav-register-login');

const closebutton = document.querySelector('.login-page-close');

const form = document.querySelector('.form');
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('sticky', window.scrollY > 0);
});
function showNavbarHomePopup() {
  homeNavbarPopup.classList.add('navbar-section-hover');
}

function hideNavbarHomePopup() {
  homeNavbarPopup.classList.remove('navbar-section-hover');
}
function showNavbarShopPopup() {
  shopNavbarPopup.classList.add('navbar-section-hover');
}
function hideNavbarShopPopup() {
  shopNavbarPopup.classList.remove('navbar-section-hover');
}
function showNavbarBlogPopup() {
  blogNavbarPopup.classList.add('navbar-section-hover');
}
function hideNavbarBlogPopup() {
  blogNavbarPopup.classList.remove('navbar-section-hover');
}
function loginBox() {
  document.querySelector('.login-box').classList.add('navbar-section-hover');
}

function hideLoginBox() {
  document.querySelector('.login-box').classList.remove('navbar-section-hover');
}

home.addEventListener('mouseover', showNavbarHomePopup);
home.addEventListener('mouseout', hideNavbarHomePopup);

homeNavbarPopup.addEventListener('mouseover', showNavbarHomePopup);
homeNavbarPopup.addEventListener('mouseout', hideNavbarHomePopup);

shop.addEventListener('mouseover', showNavbarShopPopup);
shop.addEventListener('mouseout', hideNavbarShopPopup);

shopNavbarPopup.addEventListener('mouseover', showNavbarShopPopup);
shopNavbarPopup.addEventListener('mouseout', hideNavbarShopPopup);

blog.addEventListener('mouseover', showNavbarBlogPopup);
blog.addEventListener('mouseout', hideNavbarBlogPopup);

blogNavbarPopup.addEventListener('mouseover', showNavbarBlogPopup);
blogNavbarPopup.addEventListener('mouseout', hideNavbarBlogPopup);

loginbutton.addEventListener('click', loginBox);

closebutton.addEventListener('click', hideLoginBox);

form.addEventListener('submit', (e) => {
  const username = document.getElementById('user-input').value;
  localStorage.setItem('firstname', username);
  const storedname = localStorage.getItem('firstname');
  document.querySelector('.nav-register-login').innerHTML = `Hi ${storedname}`;
  e.preventDefault();
  document.querySelector('.login-box').classList.remove('navbar-section-hover');
});

const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach((counter) => {
  const counterTracker = counter;
  const updateCount = () => {
    const target = +counterTracker.getAttribute('data-target');
    const count = +counterTracker.innerText;
    const increase = target / speed;

    counterTracker.innerText = count < target
      ? (Math.round(count + increase), setTimeout(updateCount, 1))
      : Math.round(target);
  };
  updateCount();
});
function showMap(position) {
  // Get location data

  const lat = position.coords.latitude;

  const long = position.coords.longitude;

  const latlong = new google.maps.LatLng(lat, long);

  const myOptions = {

    center: latlong,

    zoom: 16,

    mapTypeControl: true,

    navigationControlOptions: {

      style: google.maps.NavigationControlStyle.SMALL,

    },

  };

  const map = new google.maps.Map(document.getElementById('embedMap'), myOptions);

  // eslint-disable-next-line no-unused-vars
  const marker = new google.maps.Marker({

    position: latlong,

    map,

    title: 'You are here!',

  });
}

// Define callback function for failed attempt

function showPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap);
  } else {
    // eslint-disable-next-line no-alert
    alert('Sorry, your browser does not support HTML5 geolocation.');
  }
}
document.getElementById('getlocation').addEventListener('click', showPosition);
