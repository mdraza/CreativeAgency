/*=====  Sticky Navbar  ====*/
$(document).ready(function () {
    $(window).on("scroll", function () {
        var t = $(".navbar");
        $(window).scrollTop() >= t.height() ? t.addClass("stickyNav") : t.removeClass("stickyNav");
    });
});

/*=====  Magnific Popup  ====*/
$('.view-img').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300,
        easing: 'ease-in-out'
    }
});

/*=====  Isotop Filter  ====*/
$('#container').imagesLoaded(function () {
    $('.portfolio-filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });


    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
    });
});

/*=====  Smooth Scrolling ====*/
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            console.log(target);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                console.log(target.offset());
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 700);
            }
        }
    });

/*=====  Go to Top  ====*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

/*=====  WOW JS  ====*/
new WOW().init();


/*=====  PRELOADER JS  ====*/
var prealoaderOption = $(window);
prealoaderOption.on("load", function () {
    var preloader = jQuery('.spinner');
    var preloaderArea = jQuery('.preloader-area');
    preloader.fadeOut();
    preloaderArea.delay(350).fadeOut('slow');
});