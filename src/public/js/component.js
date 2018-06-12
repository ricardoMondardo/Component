function mOver(obj) {        
    obj.querySelector('.c-card__section-main').classList.add('c-card__section-main--animated');
    obj.querySelector('.c-card__button').classList.add('c-card__button--animated');
    obj.querySelector('.c-shadow-background').classList.add('c-card__shadow--animated');
    obj.querySelector('.c-card__message').classList.add('c-card__message--animated');       
}
    
function mOut(obj) {
    obj.querySelector('.c-card__section-main').classList.remove('c-card__section-main--animated');
    obj.querySelector('.c-card__button').classList.remove('c-card__button--animated');;
    obj.querySelector('.c-shadow-background').classList.remove('c-card__shadow--animated');;
    obj.querySelector('.c-card__message').classList.remove('c-card__message--animated');    
}

