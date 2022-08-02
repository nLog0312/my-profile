// Animations Text
let headerText = document.querySelector('.header--text')


let texts = "Never Stop Learning Because Life Never Stop Teachingg"

for (const text of texts){
    let span = document.createElement('span');
    span.textContent = text;
    span.style.fontSize = '0px';
    headerText.appendChild(span);
}

let listSpan = document.querySelectorAll('.header--text span')
let index = 0;
setInterval(() => {
    listSpan[index].style.fontSize = '40px';
    index++;
    if (index == listSpan.length){
        index = 0;
        resetFontSize();
    }
}, 250)

const resetFontSize = () => {
    listSpan.forEach((span) => {
        span.style.fontSize = '0px';
    })
}

// Listen Click Button
let btnMenu = document.querySelectorAll('.right--menu .link .item')
let phoTos = document.querySelector('.list--photos')
let viDeos = document.querySelector('.list--videos')
let aBout = document.querySelector('.list--about')

for (const btn of btnMenu){
    btn.addEventListener('click', () => {
        if (btn == btnMenu[0]){
            phoTos.classList.add('open');
            viDeos.classList.remove('open');
            aBout.classList.remove('open');


            btn.classList.add('btn--click');
            btn.classList.remove('btn--click--remove');

            btnMenu[1].classList.add('btn--click--remove');
            btnMenu[2].classList.add('btn--click--remove');
        }

        else if (btn == btnMenu[1]){
            phoTos.classList.remove('open');
            viDeos.classList.add('open');
            aBout.classList.remove('open');


            btn.classList.add('btn--click');
            btn.classList.remove('btn--click--remove');
            
            // btn residual
            btnMenu[0].classList.remove('btn--click');
            btnMenu[0].classList.add('btn--click--remove');
            btnMenu[2].classList.remove('btn--click');
            btnMenu[2].classList.add('btn--click--remove');
        }

        else if (btn == btnMenu[2]){
            phoTos.classList.remove('open');
            viDeos.classList.remove('open');
            aBout.classList.add('open');


            btn.classList.add('btn--click');
            btn.classList.remove('btn--click--remove');


            // btn residual
            btnMenu[0].classList.remove('btn--click');
            btnMenu[0].classList.add('btn--click--remove');
            btnMenu[1].classList.remove('btn--click');
            btnMenu[1].classList.add('btn--click--remove');
        }
    });
}

// Listen Width Screen
let widthScreen = window.innerWidth

if (widthScreen < 1500){
    alert("Sorry, I haven't \"responsive\" my site for tablets and phones yet. Please access the website using a computer. Thank you!");
}
