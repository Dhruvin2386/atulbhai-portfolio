// pre-loader start
$(document).ready(function () {
    $('#loader').delay(2000).fadeOut('slow', function () {
        $('#preloader').fadeOut('slow');
    });
});
// pre-loader ends
// bg-hi-text
$(document).ready(function() {
    setTimeout(function() {
        $('.intro-text text').removeClass('hidden-text').addClass('visible-text');
    }, 15000); // 5 seconds delay
});

// scroll effect start
$(document).ready(function () {
    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 550;

    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });

    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
});
// scroll effect end
// service start
function service_animation() {
    var active_bg = $(".services-widget .active-bg");
    var element = $(".services-widget .current");
    $(".services-widget .service-item").on("mouseenter", function () {
        var e = $(this);
        activeService(active_bg, e);
    });
    $(".services-widget").on("mouseleave", function () {
        element = $(".services-widget .current");
        activeService(active_bg, element);
        element.closest(".service-item").siblings().removeClass("mleave");
    });
    activeService(active_bg, element);
}
service_animation();

function activeService(active_bg, e) {
    if (!e.length) {
        return false;
    }
    var topOff = e.offset().top;
    var height = e.outerHeight();
    var menuTop = $(".services-widget").offset().top;
    e.closest(".service-item").removeClass("mleave");
    e.closest(".service-item").siblings().addClass("mleave");
    active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
}

$(".services-widget .service-item").on("click", function () {
    $(".services-widget .service-item").removeClass("current");
    $(this).addClass("current");
});