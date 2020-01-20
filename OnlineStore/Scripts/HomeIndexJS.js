$(document).ready(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    $('#slide-dot-1').click(function () {
        if (slideIndex != 1) {
            showSlides(slideIndex = 1);
            clearInterval(automaticSlideshowRotation);
        }
    });
    $('#slide-dot-2').click(function () {
        if (slideIndex != 2) {
            showSlides(slideIndex = 2);
            clearInterval(automaticSlideshowRotation);
        }
    });
    $('#slide-dot-3').click(function () {
        if (slideIndex != 3) {
            showSlides(slideIndex = 3);
            clearInterval(automaticSlideshowRotation);
        }
    });
    $('#slide-dot-4').click(function () {
        if (slideIndex != 4) {
            showSlides(slideIndex = 4);
            clearInterval(automaticSlideshowRotation);
        }
    });

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('slideshow-slide');
        var dots = document.getElementsByClassName('dot');

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active-dot', '');
        }
        $('#slideshow-slide-' + (slideIndex - 1).toString()).fadeIn(1500);
        dots[slideIndex - 1].className += ' active-dot';
    }

    var automaticSlideshowRotation = setInterval(function () {
        plusSlides(1);
    }, 5000);

    $('#slideshow-next-button').click(function () {
        plusSlides(1);
        clearInterval(automaticSlideshowRotation);
    });

    $('#slideshow-prev-button').click(function () {
        plusSlides(-1);
        clearInterval(automaticSlideshowRotation);
    });
});