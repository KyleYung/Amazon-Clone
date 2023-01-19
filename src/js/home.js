/* function for 1st product slider */
const rightButton = document.querySelector(".right-button");
const leftButton = document.querySelector(".left-button");
const slide = document.querySelector(".banner-frame");

rightButton.addEventListener("click", function(event) {
    console.log("do0ne");
    slide.scrollLeft += 1200;
    event.preventDefault();
});

leftButton.addEventListener("click", function(event) {
  console.log("do0ne");
  slide.scrollLeft -= 1200;
  event.preventDefault();
});

/* function for 2nd product slider */

const rightButton2 = document.querySelector(".right-button2");
const leftButton2 = document.querySelector(".left-button2");

rightButton2.addEventListener("click", function(event) {
    console.log("do0ne");
    const slide = document.querySelector(".banner-frame2");
    slide.scrollLeft += 1200;
    event.preventDefault();
});

leftButton2.addEventListener("click", function(event) {
  console.log("do0ne");
  const slide = document.querySelector(".banner-frame2");
  slide.scrollLeft -= 1200;
  event.preventDefault();
});

/* function for 3rd product slider */

const rightButton3 = document.querySelector(".right-button3");
const leftButton3 = document.querySelector(".left-button3");

rightButton3.addEventListener("click", function(event) {
    console.log("do0ne");
    const slide = document.querySelector(".banner-frame3");
    slide.scrollLeft += 1200;
    event.preventDefault();
});

leftButton3.addEventListener("click", function(event) {
  console.log("do0ne");
  const slide = document.querySelector(".banner-frame3");
  slide.scrollLeft -= 1200;
  event.preventDefault();
});

/* back to top function */
let topbutton = document.getElementsByClassName("back-to-top");

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* sidebar function*/
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".fa-xmark");
const filter = document.querySelector(".filter");
const openSidebar = document.querySelector(".navbar-all");
const body = document.querySelector("body");

openSidebar.addEventListener("click", function() {
  sidebar.classList.add("active");
  closeSidebar.classList.add("active");
  filter.classList.add("active");
  body.style.height="100%";
  body.style.overflow="hidden";
})

closeSidebar.addEventListener("click", function() {
  sidebar.classList.remove("active");
  closeSidebar.classList.remove("active");
  filter.classList.remove("active");
  body.style.height="auto";
  body.style.overflow="auto";
})

/* sign in hidden menu */
const triangle = document.querySelector(".triangle");
const signinMenu = document.querySelector(".sign-in-hidden");
const openSigninMenu = document.querySelector(".sign-in");

openSigninMenu.addEventListener("mouseover", () => {
  triangle.classList.toggle("active");
  signinMenu.classList.toggle("active");
  filter.classList.add("active2");
})

openSigninMenu.addEventListener("mouseout", () => {
  triangle.classList.remove("active");
  signinMenu.classList.remove("active");
  filter.classList.remove("active2");
})

signinMenu.addEventListener("mouseover", () => {
  triangle.classList.toggle("active");
  signinMenu.classList.toggle("active");
  filter.classList.add("active2");
})

signinMenu.addEventListener("mouseout", () => {
  triangle.classList.remove("active");
  signinMenu.classList.remove("active");
  filter.classList.remove("active2");
})

/* language hidden menu */
const triangle2 = document.querySelector(".triangle2");
const langMenu = document.querySelector(".lang-hidden");
const openLangMenu = document.querySelector(".language");

openLangMenu.addEventListener("mouseover", () => {
  triangle2.classList.toggle("active");
  langMenu.classList.toggle("active");
  filter.classList.add("active2");
})

openLangMenu.addEventListener("mouseout", () => {
  triangle2.classList.remove("active");
  langMenu.classList.remove("active");
  filter.classList.remove("active2");
})

langMenu.addEventListener("mouseover", () => {
  triangle2.classList.toggle("active");
  langMenu.classList.toggle("active");
  filter.classList.add("active2");
})

langMenu.addEventListener("mouseout", () => {
  triangle2.classList.remove("active");
  langMenu.classList.remove("active");
  filter.classList.remove("active2");
})

/* language hidden menu in footer section*/
const langMenu2 = document.querySelector(".lang-hidden2");
const openLangMenu2 = document.querySelector(".footer2-lang");

openLangMenu2.addEventListener("mouseover", () => {
  langMenu2.classList.toggle("active");
})

openLangMenu2.addEventListener("mouseout", () => {
  langMenu2.classList.remove("active");
})

langMenu2.addEventListener("mouseover", () => {
  langMenu2.classList.toggle("active");
})

langMenu2.addEventListener("mouseout", () => {
  langMenu2.classList.remove("active");
})