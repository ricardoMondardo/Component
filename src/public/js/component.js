const card = document.querySelector('.js-animated');
const title = document.querySelector('.c-title');
const shadow = document.querySelector('c-card__shadow');

if(card) {
    card.addEventListener("mouseenter", ()=>{
        fnShowDetail();
    });
    
    card.addEventListener("mouseleave", ()=>{
        fnShowClose();
    });
    
    var fnShowDetail = () => {
        title.classList.add('c-card__title-one--animated');    
    
        console.log(shadow);
    
        console.log("show details");
    }
    
    var fnShowClose = () => {
        title.classList.remove('c-card__title-one--animated');
        console.log("close details");
    }
}
