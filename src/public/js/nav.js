const toggle = document.getElementById('id-toggle');
const toggleMenu = document.getElementById('id-toggle-menu');

//menu.style.visibility = 'hidden';

toggle.onclick = function() {
    
    if (toggleMenu.style.opacity == 0)
        toggleMenu.style.opacity = 1;
    else
        toggleMenu.style.opacity = 0;
    
    console.log('toggle clicked');
}

