$(window).on('load', function () {
      $("body").css("overflow", "hidden");
      $('.preloader').delay(350).fadeOut();
      $("body").css("overflow", "");
})

$(document).ready(function () {
      $(this).scrollTop(0);
});

// NAV BAR

$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on('scroll', function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
      }

      else {
            $('nav').removeClass('black');
      }
})

// Navbar hide on scroll down
$(document).ready(function () {
      var prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                  document.getElementById("navbar").style.top = "0";
            } else {
                  document.getElementById("navbar").style.top = "-68px";
            }
            prevScrollpos = currentScrollPos;
      }
});

$(document).ready(function () {
      var owl = $('.owl-carousel');

      owl.owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true
      });
});

(function () {
      "use strict";

      var carousels = function () {
            $(".owl-carousel1").owlCarousel({
                  loop: true,
                  center: true,
                  margin: 30,
                  dots: false,
                  responsiveClass: true,
                  nav: false,
                  autoplay: true,
                  autoplayTimeout: 6000,
                  autoplayHoverPause: true,
                  responsive: {
                        0: {
                              items: 1,
                              nav: false
                        },
                        680: {
                              items: 2,
                              nav: false,
                              loop: false
                        },
                        1000: {
                              items: 3,
                              nav: true
                        }
                  }
            });
      };

      (function ($) {
            carousels();
      })(jQuery);
})();





