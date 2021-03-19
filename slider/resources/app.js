// JavaScript app for slider

const infiniteSlide = document.querySelector('.upper-container');
const slideImages = document.querySelectorAll('.upper-container img');

const infiniteSlideLower = document.querySelector('.lower-container');
const slideImagesLower = document.querySelectorAll('.lower-container img');

let translateValue = 320; // set to initial translate value
let translateValueLower = 500; //set to initial translate value for lower container

let transitionRunning = false; // while transition is running - true  

//Next & Prev buttons 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//Counters
let i = 2;
let j = 2; //for lower slider

//variables for width of images
let sizeImgFocus = slideImages[i].clientWidth + 10; //size of img in focus + margin
let sizeImgOutOfFocus = slideImages[i - 1].clientWidth + 10; // size of img right to img in focus + margin

let sizeImgFocusLower = slideImagesLower[j].clientWidth + 10; //size of img in focus + margin for lower container
let sizeImgOutOfFocusLower = slideImagesLower[j - 1].clientWidth + 10; //size of img right to img in focus + margin

// set variable transitionRunning
infiniteSlide.addEventListener('transitionstart', () => {  //set to true when transition starts
    transitionRunning = true;
    console.log(transitionRunning);
})

infiniteSlide.addEventListener('transitionend', () => {  //set to false when transition ends
    transitionRunning = false;
    console.log(transitionRunning);
})

// functions for sliders
const upperNext = () => {
    if (transitionRunning === true) return;  
    infiniteSlide.style.transition = 'transform 0.4s ease';
    i++;
    
    translateValue = translateValue + (sizeImgFocus)
    infiniteSlide.style.transform = 'translateX('+ (translateValue) + 'px)';
    
    sizeImgFocus = slideImages[i].clientWidth + 10; //updates size of picture in focus
    sizeImgOutOfFocus = slideImages[i - 1].clientWidth + 10; //updates size of picture out of 
    
    infiniteSlide.addEventListener('transitionend', () => {
        if(i >= 6){
            infiniteSlide.style.transition = 'none';  //removes animation so user doesn't see transition
            i = 1;
            translateValue = 130;
            infiniteSlide.style.transform = 'translateX('+ (translateValue) + 'px)';
            sizeImgFocus = slideImages[i].clientWidth + 10; //updates size of picture in focus
            sizeImgOutOfFocus = slideImages[i - 1].clientWidth + 10; //updates size of picture out of focus
        }
    })
}

const upperPrev = () => {
    if (transitionRunning === true) return;
    infiniteSlide.style.transition = 'transform 0.4s ease-in-out';
    i--;
    
    translateValue = translateValue - (sizeImgOutOfFocus)
    infiniteSlide.style.transform = 'translateX('+ (translateValue) +'px)';  
    
    sizeImgFocus = slideImages[i].clientWidth + 10; //updates size of picture in focus
    sizeImgOutOfFocus = slideImages[i - 1].clientWidth + 10; //updates size of picture out of focus
    
    infiniteSlide.addEventListener('transitionend', () => {
        if(i <= 0){
            infiniteSlide.style.transition = 'none';  //removes animation so user doesn't see transition
            i = 5;
            translateValue = 1010;
            infiniteSlide.style.transform = 'translateX('+ (translateValue) + 'px)';
            sizeImgFocus = slideImages[i].clientWidth + 10; //updates size of picture in focus
            sizeImgOutOfFocus = slideImages[i - 1].clientWidth + 10; //updates size of picture out of focus
        }
    })
}

const lowerNext = () => { 
    if (transitionRunning === true) return;
    infiniteSlideLower.style.transition = 'transform 0.4s ease';
    j++;
    
    translateValueLower = translateValueLower + (sizeImgFocusLower)
    infiniteSlideLower.style.transform = 'translateX('+ (translateValueLower) + 'px)';
    
    sizeImgFocusLower = slideImagesLower[j].clientWidth + 10; //updates size of picture in focus
    sizeImgOutOfFocusLower = slideImagesLower[j - 1].clientWidth + 10; //updates size of picture out of focus
    
    infiniteSlideLower.addEventListener('transitionend', () => {
        if (j >= 6) {
            infiniteSlideLower.style.transition = 'none';  //removes animation so user doesn't see transition
            j = 2;
            translateValueLower = 500;
            infiniteSlideLower.style.transform = 'translateX('+ (translateValueLower) + 'px)';
            sizeImgFocusLower = slideImagesLower[j].clientWidth + 10; //updates size of picture in focus
            sizeImgOutOfFocusLower = slideImagesLower[j - 1].clientWidth + 10; //updates size of picture out of focus
        }
    })
}

const lowerPrev = () => {
    if (transitionRunning === true) return;
    infiniteSlideLower.style.transition = 'transform 0.4s ease-in-out';
    j--;

    translateValueLower = translateValueLower - (sizeImgOutOfFocusLower)
    infiniteSlideLower.style.transform = 'translateX('+ (translateValueLower) +'px)';  
    
    sizeImgFocusLower = slideImagesLower[j].clientWidth + 10; //updates size of picture in focus
    sizeImgOutOfFocusLower = slideImagesLower[j - 1].clientWidth + 10; //updates size of picture out of focus
    
    infiniteSlideLower.addEventListener('transitionend', () => {
        if(j <= 0){
            infiniteSlideLower.style.transition = 'none';  //removes animation so user doesn't see transition
            j = 4;
            translateValueLower = 820;
            infiniteSlideLower.style.transform = 'translateX('+ (translateValueLower) + 'px)';
            sizeImgFocusLower = slideImagesLower[j].clientWidth + 10; //updates size of picture in focus
            sizeImgOutOfFocusLower = slideImagesLower[j - 1].clientWidth + 10; //updates size of picture out of focus
        }
    })
}

// prev BTN listener
prevBtn.addEventListener('click', lowerPrev);
prevBtn.addEventListener('click', upperPrev);

// next BTN listener
nextBtn.addEventListener('click', upperNext);
nextBtn.addEventListener('click', lowerNext);

