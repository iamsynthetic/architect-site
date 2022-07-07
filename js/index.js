/// variables ///
var totalimages = 12;
var widthofeachimage = 616;
var buttonfunctional = true;
var fullwidthofallimages = widthofeachimage*totalimages
var next = document.getElementById('btn-next');
var prev = document.getElementById('btn-prev');
const body = document.body;
let lastScroll = 0;
let s5FirstTime = 0;

/// variables for elements on the page that will be animated once in view port ///

const box = document.querySelector('.box');
const message = document.querySelector('#message');

//section 1
const s1column1 = document.querySelector('.s1-column1');
const s1img1 = document.querySelector('.s1-img1');
const s1img2 = document.querySelector('.s1-img2');
const s1title1 = document.querySelector('.s1-title1');
const s1title2 = document.querySelector('.s1-title2');
const s1paragraph1 = document.querySelector('.s1-paragraph1');
const s1paragraph2 = document.querySelector('.s1-paragraph2');

//section 2
const s2column1 = document.querySelector('.s2-column1');
const s2title = document.querySelector('.s2-title');
const s2paragraph = document.querySelector('.s2-paragraph');
const s2img1 = document.querySelector('.s2-img1');
const s2img2 = document.querySelector('.s2-img2');

//section 3
const s3row2 = document.querySelector('.s3-title');
const s3img1 = document.querySelector('.s3-img1');
const s3img2 = document.querySelector('.s3-img2');
const s3img3 = document.querySelector('.s3-img3');
const s3title = document.querySelector('.s3-title');
const s3t1 = document.querySelector('.s3t1');
const s3t2 = document.querySelector('.s3t2');
const s3t3 = document.querySelector('.s3t3');

/// set all animation elements to their start position ///

let bool = 0;
let mmitems = document.querySelectorAll('.mobile-menu-item');

mmitems.forEach(mmitem => {

    mmitem.addEventListener('click', function(event){

        let str = String(event.target.id)

        if(bool == 0){
            gsap.to('.nav-menu', {duration:.3, x:0, y:0, backgroundColor:"#191F24", ease: Quad.easeOut, onComplete:changeBool, onCompleteParams:[1]});
        }
        else{ 
            gsap.to('.nav-menu', {duration:.3, x:0, y:-619, backgroundColor:"#191F24", ease:Quad.easeOut, onComplete:changeBool, onCompleteParams:[0]})
        }
    })
});


document.querySelector('.burger-box').addEventListener('click', function(){
    if(bool == 0){
        gsap.to('.nav-menu', {duration:.3, x:0, y:0, backgroundColor:"#191F24", ease: Quad.easeOut, onComplete:changeBool, onCompleteParams:[1]});
    }
    else{ 
        gsap.to('.nav-menu', {duration:.3, x:0, y:-619, backgroundColor:"#191F24", ease:Quad.easeOut, onComplete:changeBool, onCompleteParams:[0]})
    }
});

function changeBool(thebool){
    bool = thebool;
}


window.addEventListener("resize", () => {
});

if(window.innerWidth <= 599){
}
else{
    //section 1
    gsap.set(s1img1, {x: -300,  opacity: 0});
    gsap.set(s1img2, {x: -300, opacity: 0});
    gsap.set(s1title1, {x: 200, opacity: 0});
    gsap.set(s1title2, {x: 200, opacity: 0});
    gsap.set(s1paragraph1, {x: 200, opacity: 0});
    gsap.set(s1paragraph2, {x: 200, opacity: 0});

    //section 2
    gsap.set(s2img1, {x: 300,  opacity: 0});
    gsap.set(s2img2, {x: 300, opacity: 0});
    gsap.set(s2title, {x: -200, opacity: 0});
    gsap.set(s2paragraph, {x: -200, opacity: 0});

    //section 3
    gsap.set(s3img1, {y:200, opacity:0});
    gsap.set(s3img2, {y:200, opacity:0});
    gsap.set(s3img3, {y:200, opacity:0});
    gsap.set(s3title, {opacity:0});
    gsap.set(s3t1, {opacity:0});
    gsap.set(s3t2, {opacity:0});
    gsap.set(s3t3, {opacity:0});
}



/// scrolling menu functionality ///
window.addEventListener('scroll', () => {
    
    const currentScroll = window.pageYOffset

    if(window.innerWidth <= 619){

    }
    else{
        if(currentScroll <= 0) {
            body.classList.remove('scroll-up')
            body.classList.add('remove-bg')
            body.classList.remove('add-bg')
        }

        if(currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-up')
            body.classList.add('scroll-down')
            body.classList.add('add-bg')
            body.classList.remove('remove-bg')
        }

        if(currentScroll < lastScroll && body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-down')
            body.classList.add('scroll-up')
            body.classList.add('add-bg')
            body.classList.remove('remove-bg')
        }
    }
    lastScroll = currentScroll;

    switch(true){
        case isInViewport(s1column1):
            animateElem(s1img1, 1, 0.05)
            animateElem(s1img2, 1, 0)
            animateElem(s1title1, 1, 0)
            animateElem(s1title2, 1, 0)
            animateElem(s1paragraph1, 1, 0.03)
            animateElem(s1paragraph2, 1, 0.03)
        break;
        case isInViewport(s2column1):
            animateElem(s2img1, 1, 0.05)
            animateElem(s2img2, 1, 0)
            animateElem(s2title, 1, 0)
            animateElem(s2paragraph, 1, 0.03)
        break;
        case isInViewport(s3row2):
            animateElem(s3title, 1.2, 0)
            animateElem(s3img1, 1.2, .2)
            animateElem(s3t1, 1.2, .4)
            animateElem(s3img2, 1.2, .3)
            animateElem(s3t2, 1.2, .5)
            animateElem(s3img3, 1.2, .4)
            animateElem(s3t3, 1.2, .6)
        break;
        
    }
})



/// animating elements once they are in viewport ///

function animateElem(element, durationamount, delayamount){
    gsap.to(element, {duration:1.3, delay:delayamount, x:0, y:0, opacity:1, ease: Elastic.easeOut.config(1, 0.5)});
}



///check if element is in viewport///

function isInViewport(el){
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}



/// this loops through the buttons in section 5 so that each can have a click and change the content ///

let buttons = document.querySelectorAll('.section5-link-span');
let sections = document.querySelectorAll('.s5-link-content');


buttons.forEach(button => {
  
    button.addEventListener('click', function (event) {
        
        let str = String(event.target.id)
        let num = str.slice(-1);

        //make all sections disappear
        gsap.to(sections, {duration:.5, opacity:0, onComplete:makeAppear})
        
        function makeAppear(){

            // this just makes all the sections (s5-link-content) to have the hide class, 
            // and removes the 'show' class from any that have it.
            const boxes = Array.from(document.getElementsByClassName('s5-link-content'));

            boxes.forEach(box => {
                if(box.classList.contains('show')){
                    box.classList.add('hide');
                    box.classList.remove('show');
                }
            });

            //this adds the 'show' class to the section that is to be shown
            document.getElementById('link'+num+'-section').classList.add('show')
            document.getElementById('link'+num+'-section').classList.remove('hide')

            //this makes the section that corresponds to the button that was clicked to animate in    
            gsap.to(document.getElementById('link'+num+'-section'), {duration:1, opacity:1, delay:0})
            
        }
    });

});



function section5Sections(){
    const boxes = Array.from(document.getElementsByClassName('s5-link-content'));

        boxes.forEach(box => {
            if(box.classList.contains('show')){
                box.className += ' hide'
                gsap.to(document.getElementsByClassName('show'), {duration:.5, opacity:0, onComplete:showHide, onCompleteParams:document.getElementsByClassName('show')})
            }
        });
}



// make sure prev and next buttons can't be clicked before animation is complete ///

function resumeClick(bool){
    console.log('bool is: ' + bool)
    buttonfunctional = bool;
    console.log('resumeClick - buttonfunctional is: ' + buttonfunctional)
}



/// button click for next in the gallery section ///

next.onclick = function(){
    
    if(buttonfunctional == false){

    }
    else{
        console.log('next');
        var elem = document.querySelector('.all-media');
        var rect = elem.getBoundingClientRect();
        resumeClick(false);
        if(rect.left <= (Number(Number(fullwidthofallimages - 616) - window.innerWidth) * -1)){
            console.log('its less than')
            resumeClick(true);  
        }
        else{
            gsap.to('.all-media', {duration: .5, x:"-=600", ease: Sine.easeInOut, onComplete: resumeClick, onCompleteParams: ['true']});
        }
    } 
};



/// button click for prev in the gallery section ///

prev.onclick = function () {
    console.log('next.onclick buttonfunctional is: ' + buttonfunctional)
    if(buttonfunctional == false){

    }
    else{
        var elem = document.querySelector('.all-media');
        var rect = elem.getBoundingClientRect();
        resumeClick(false);
        console.log(rect.left)
        console.log('image container position is: ' + (Number(Number(fullwidthofallimages - 616) - window.innerWidth) * -1))
    
        if(rect.left >= 16){
            resumeClick(true);
        }
        else{
            gsap.to('.all-media', {duration: .5, x:"+=600",  ease: Sine.easeInOut, onComplete: resumeClick, onCompleteParams: ['true']});
        }
    }
};