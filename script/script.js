// Cards Photo
const banner = document.querySelector('#banner');

// Container left:
const containerLeft = document.querySelector('#container-left');

// Photos
const photo01 = document.querySelector('#photo-01');
const photo02 = document.querySelector('#photo-02');
const photo03 = document.querySelector('#photo-03');

// Documento
const body = document.body;

// Descrição
const description = document.querySelector('#description');




containerLeft.addEventListener('mouseout', () => {
    description.classList.add('description-on');
});
containerLeft.addEventListener('mouseleave', () => {
    description.classList.add('description-off');
});


console.log(photo01)

photo01.addEventListener('click', () => {
    openCard01();
});
photo02.addEventListener('click', () => {
    openCard02();
});
photo03.addEventListener('click', () => {
    openCard03();
});




function openCard01(){
    photo01.classList.add('js-photo01');

    bgImage = () => {
        banner.src = "./Images/carameloDrake.png";
    };
    setTimeout(bgImage, 810);

    bgColor = () => {
        body.style.background = "var(--bg-color-secound)";
    };
    setTimeout(bgColor, 810);

    photoActive01 = () => {
        photo01.style.order = '3';
        photo01.style.display = "flex";
    }
    setTimeout(photoActive01, 810);
}
function openCard02(){
    photo02.classList.add('js-photo02');

    bgImage = () => {
        banner.src = "./Images/carameloFilhote.jpg";
    }
    setTimeout(bgImage, 810);

    bgColor = () => {
        body.style.background = "var(--bg-color-secound)";
    };
    setTimeout(bgColor, 810);
}
function openCard03(){
    photo03.classList.add('js-photo03');

    bgImage = () => {
        banner.src = "./Images/carmeloCampana.jpg"
    }
    setTimeout(bgImage, 810);

    bgColor = () => {
        body.style.background = "var(--bg-color-secound)";
    };
    setTimeout(bgColor, 810);
}