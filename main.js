// --------------------------------------------
//   COUNTER --------------------
var start = 85854552;
var speed = 200;
$(document).ready(function () {
    go();
    setInterval(function () {
        go();
    }, speed);
});
function go() {
    $(".card-footer").html(start.toFixed(0));
    start += 2535;
}


// --------------------------------------------
//  service slider (swiper)
var swiper = new Swiper(".slider-project", {
    loop: true,
    // slidesPerView: 2,
    // centeredSlides: true,
    // spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1900: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 50,
            // centeredSlides: true,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        }
    }
});

// --------------------------------------------
// testimonial slider -------------
$(document).ready(function () {
    $('.person-testimonial').click(function () {
        var tab = $(this).attr('class');
        $(".person-testimonial").removeClass("active-testimonial");
        $(this).addClass("active-testimonial");

        // img change --------
        $(".person-testimonial").find('.coma').attr('src', 'photos/test.png');
        $(this).find('.coma').attr('src', 'photos/white-coma.png');
    })
})
var swiper = new Swiper(".review-slider", {
    // slidesPerView: 4,
    // spaceBetween: 500,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1900: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 140,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 190,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 200,
        }
    }
});

// --------------------------------------------
// navbar active link ----------------
$(document).ready(function () {
    $('li').click(function () {
        $("li").removeClass("active-nav");
        $(this).addClass("active-nav");
    })
})

// navbar in manu button--------------------
$(document).ready(function () {
    $(".bar-icon").click(function () {
        $(".bottom-navbar").animate({
            width: "toggle"
        });
        $('.close-button').css("display", "block");
        $('.bar-icon').css("display", "none")
    });
    $('.close-button').click(function () {
        $('.bottom-navbar').animate({
            width: "toggle"
        });
        // $('.bottom-navbar').hide()
        $('.bar-icon').css("display", "block");
        $('.close-button').css("display", "none")
    });
});

// --------------------------------------------
// fancybox:- portfolio 
Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["slideshow", "thumbs", "close"],
        },

    },
    Slideshow: {
        playOnStart: true,
    },
})

// portfolio Tabbing -------------------
$(document).ready(function () {
    $('.btn').click(function () {
        var tab = $(this).attr('data-id');
        $(".btn").removeClass("active");
        $(this).addClass("active");
    })
    $(".btn").click(function () {
        $(".img-section").hide();
        var tab = $(this).attr("data-id");
        $(".img-section").addClass("active-data");
        $("#" + tab).show();
        // $(".img-section").removeClass("active-data");
        $(".img-section").css("style", "grid")
    });
});

// DROPDOWN (portfolio) -------------
$(function () {
    $('.dropdown-button').click(function () {
        $('.dropdown').slideToggle();
        $('i').toggle()
    });
});

// --------------------------------------------
//  SEARCH BAR in navbar --------------
$('.search-button').click(function () {
    $('.search-input').toggle();
});

//  SEARCH BAR in manu button --------------
$('.btn-search').click(function () {
    $('.bot-nav-input').toggle();
});


//ANimation -------------------
AOS.init();
