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


// OUR PROJECTS SLIDER
var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
// END OUR PROJECTS SLIDER

  