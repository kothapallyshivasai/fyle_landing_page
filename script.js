$(document).ready(function() {
    const slider = $('.slider');
    const dots = $('.dot');
    let currentIndex = 0;
    const slidesToShow = 4;
    const slideWidth = 25;
    let isDown = false;

    dots.eq(0).addClass('active');

    dots.on('click', function() {
        const dotIndex = $(this).data('index');
        currentIndex = dotIndex * slidesToShow;
        updateSlider();
        updateActiveDot(dotIndex);
    });

    function updateSlider() {
        const offset = currentIndex * slideWidth;
        slider.css('transform', `translateX(-${offset}%)`);
    }

    function updateActiveDot(dotIndex) {
        dots.removeClass('active');
        dots.eq(dotIndex).addClass('active');
    }

    slider.on('mousedown', function(e) {
        isDown = true;
        $(this).addClass('active');
        startX = e.pageX;
        scrollLeft = currentIndex * slideWidth;
        $(this).css('cursor', 'grabbing');
    });

    slider.on('mouseleave', function() {
        if (isDown) {
            isDown = false;
            $(this).removeClass('active');
            $(this).css('cursor', 'grab');
            snapToNearestSlide();
        }
    });

    $(document).on('mouseup', function() {
        if (isDown) {
            isDown = false;
            slider.removeClass('active');
            slider.css('cursor', 'grab');
            snapToNearestSlide();
        }
    });

    slider.on('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) / 10;
        const maxIndex = $('.slide').length - slidesToShow;
        const offset = Math.max(0, Math.min(scrollLeft - walk, maxIndex * slideWidth));
        currentIndex = Math.round(offset / slideWidth);
        slider.css('transform', `translateX(-${currentIndex * slideWidth}%)`);
        updateActiveDot(Math.round(currentIndex / slidesToShow));
    });

    function snapToNearestSlide() {
        const currentOffset = currentIndex * slideWidth;
        const slideIndex = Math.round(currentOffset / slideWidth);
        const newOffset = slideIndex * slideWidth;
        slider.css('transform', `translateX(-${newOffset}%)`);
        currentIndex = slideIndex;
        updateActiveDot(Math.round(currentIndex / slidesToShow));
    }
});

$(document).ready(function() {
    $('.card-main').on('click', function() {
        var cardId = $(this).attr('id');
        var imageId = 'image' + cardId.slice(-1);
        $('.img-fluid1').hide();
        $('#' + imageId).show();
        $('.card-main').css('background-color', 'rgb(253, 240, 240)');
        $('.card-main').css('color', 'black');
        $(this).css('background-color', 'rgb(235, 68, 68)');
        $(this).css('color', 'white');
    });
});