const spoilerWrapper = document.querySelector(".spoiler-wrapper");
const spoilerItems = document.querySelectorAll(".spoiler-item");
const spoilerTexts = document.querySelectorAll(".spoiler-item__text");


function showIt (event) {
    let index =  +event.target.closest(('[data-id]')).getAttribute('data-id');
    let target = event.target.closest('[data-id]');

    if(target.classList.contains('active')){
        target.classList.remove('active');
        target.children[0].style = "";
        spoilerTexts[index - 1].classList.add('hide');
    } else {
        
        spoilerItems.forEach((item) => {
            if(item.classList.contains('active')) {
                item.classList.remove('active');
                item.children[0].style = "";
                item.children[1].classList.add('hide');
            }
        })
            target.classList.add('active');
            target.children[0].style="color : #02818A"
            spoilerTexts[index - 1].classList.remove('hide');
    };
};

spoilerWrapper.addEventListener('click', showIt)
