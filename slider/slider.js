'use strict';
 {
    //slide elements
    const carouselSlider = document.querySelector('#slider ul');
    const carouselImages = document.querySelectorAll('.slider-image');

    //counter
    let counter = 1;
    carouselSlider.style.transform = 'translateX(-100%)';

    //button
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    // flag
    let isActive = false;

    nextBtn.addEventListener('click', function () {

        if(!isActive) {
            function slideImage() {
                counter++;
                carouselSlider.style.transition = "transform .5s ease-out";
                carouselSlider.style.transform = 'translateX(-' + 100 * counter + '%)';
                setTimeout(slideImage, 2500);
            }
    
            let timer = setTimeout(slideImage, 2500);
    
            carouselSlider.addEventListener('transitionend', function() {
                if(carouselImages[counter].id === 'firstClone'){
                    carouselSlider.style.transition = "none";
                    counter = carouselImages.length - counter;
                    carouselSlider.style.transform = 'translateX(-' + 100 * counter + '%)';
                };
            });

            isActive = true;

        }else {
            return;
        }
    });

    let timer;

    prevBtn.addEventListener('click', function () {


        if(!isActive) {
            function slideImage() {
                counter--;
                carouselSlider.style.transition = "transform .5s ease-out";
                carouselSlider.style.transform = 'translateX(-' + 100 * counter + '%)';
                timer = setTimeout(slideImage, 2500);
            }
    
            setTimeout(slideImage, 2500);
    
            carouselSlider.addEventListener('transitionend', function() {
                if(carouselImages[counter].id === 'lastClone'){

                    carouselSlider.style.transition = "none";
                    counter = carouselImages.length - 2;
                    carouselSlider.style.transform = 'translateX(-'+ 100 * counter + '%)';
                };
            });

            isActive = true;

        }else {
            clearTimeout(timer);
            isActive = false;
            return;
        }
    });




    // function slideImage() {
    //     counter++;
    //     carouselSlider.style.transition = "transform .5s ease-out";
    //     carouselSlider.style.transform = 'translateX(-' + 100 * counter + '%)';
    //     setTimeout(slideImage, 2500);
    // }

    // let timer = setTimeout(slideImage, 2500);

    // carouselSlider.addEventListener('transitionend', function() {
    //     if(carouselImages[counter].id === 'firstClone'){
    //         carouselSlider.style.transition = "none";
    //         counter = carouselImages.length - counter;
    //         carouselSlider.style.transform = 'translateX(-' + 100 * counter + '%)';
    //     };
    // });


 }