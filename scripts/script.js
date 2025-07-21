"use strict";
/* HAMBURGER MENU
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-controls", "menu");
  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  const menuLinks = menu.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}

function openMenu() {
  menu.classList.add("show");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.classList.add("open");
}

function closeMenu() {
  menu.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.classList.remove("open");
}

/* ADD ACTIVE CLASS TO THE MENU
–––––––––––––––––––––––––––––––––––––––––––––––––– */

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    menuLinks.forEach(link => {
      link.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});


/* SHRINK NAVIGATION BAR SIZE WHEN SCROLLING DOWN
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const scrollMenu = document.getElementById("scrollMenu");
window.addEventListener("scroll", function (e) {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollMenu.classList.add("scrolled");
  } else {
    scrollMenu.classList.remove("scrolled");
  }
});

/* ADD BORDER TO HERO IMAGE AFTER SCROLLING DOWN
–––––––––––––––––––––––––––––––––––––––––––––––––– */
const heroImage = document.getElementById("heroImage");
window.addEventListener("scroll", function (e) {
  if (
    document.body.scrollTop > 1 ||
    document.documentElement.scrollTop > 1
  ) {
    heroImage.classList.add("add_borderRadius_heroImage");
  } else {
    heroImage.classList.remove("add_borderRadius_heroImage");
  }
});
