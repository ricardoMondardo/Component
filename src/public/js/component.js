const card = document.querySelector('.js-animated');

if(card) {

    const title = document.querySelector('.c-card__section-main');
    const button = document.querySelector('.c-card__button');
    const shadow = document.querySelector('.c-shadow-background');
    const message = document.querySelector('.c-card__message');

    card.addEventListener("mouseenter", ()=>{
        fnShowDetail();
    });
    
    card.addEventListener("mouseleave", ()=>{
        fnShowClose();
    });
    
    var fnShowDetail = () => {
        title.classList.add('c-card__section-main--animated');
        button.classList.add('c-card__button--animated');
        shadow.classList.add('c-card__shadow--animated');
        message.classList.add('c-card__message--animated');       
        console.log("show details");
    }
    
    var fnShowClose = () => {
        title.classList.remove('c-card__section-main--animated');
        button.classList.remove('c-card__button--animated');
        shadow.classList.remove('c-card__shadow--animated');                
        message.classList.remove('c-card__message--animated');
        console.log("close details");
    }
}
