const toggle = document.getElementById('id-toggle');
const toggleMenu = document.getElementById('id-toggle-menu');
const toggleMenuIcon = document.getElementById('id-button-menu-hamburger');

toggle.onclick = function() {    
    toggleMenu.classList.toggle('c-nav__menu--on')    
}

toggleMenu.onclick = function() {
    menuHamburgerClick(toggleMenuIcon);    
}


