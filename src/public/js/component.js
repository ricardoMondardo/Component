const card = document.querySelector('.js-animated');

if(card) {

    const title = document.querySelector('.c-card__section-main');
    const button = document.querySelector('.c-card__button');
    const shadow = document.querySelector('.c-card__shadow');

    card.addEventListener("mouseenter", ()=>{
        fnShowDetail();
    });
    
    card.addEventListener("mouseleave", ()=>{
        fnShowClose();
    });
    
    var fnShowDetail = () => {
        title.classList.add('c-card--animated-section-main');
        button.classList.add('c-card--animated-button');
       
        console.log("show details");
    }
    
    var fnShowClose = () => {
        title.classList.remove('c-card--animated-section-main');
        button.classList.remove('c-card--animated-button');

        console.log("close details");
    }
}
