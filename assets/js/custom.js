

let mybutton = document.getElementById("myBtn");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";

    if ($(this).scrollTop() > 50) {
      document.getElementById("navbar").style.background = "white";
    } else {
      document.getElementById("navbar").style.background = "transparent";
    }
  } else {
    document.getElementById("navbar").style.top = "-100px";
    mybutton.style.display = "block";
  }
  prevScrollpos = currentScrollPos;
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$('.containers').animatedHeadline({
  animationType: "slide",
  animationDelay: 2500,
  barAnimationDelay: 3800,
  barWaiting: 800,
  lettersDelay: 50,
  typeLettersDelay: 150,
  selectionDuration: 500,
  typeAnimationDelay: 1300,
  revealDuration: 600,
  revealAnimationDelay: 1500
});

function textHover(name, background) {
  $("." + name).mouseenter(function () {
    $(".capabilities-section").css("background-image", background);
  }
  )
};

textHover('branding', 'url("https://rno1.com/media/pages/capabilities/branding-identity/349589516d-1646240653/capabilities-branding-r-1920x994.jpg")');
textHover('website', 'url("https://rno1.com/media/pages/capabilities/websites-digital-platforms/161a12a9b0-1646240653/capabilities-web-r-1920x994.jpg")');
textHover('ecommerce', 'url("https://rno1.com/media/pages/capabilities/web3-experience-design/d375fbf443-1649850640/capabilities-web3-r-1920x994.jpg")');
textHover('print', 'url("https://rno1.com/media/pages/capabilities/ecommerce-experiences/7bec86d4d2-1646240653/capabilities-e-comm-r-1920x994.jpg")');
textHover('android', 'url("https://rno1.com/media/pages/capabilities/vr-ar-environments/8a744b05a5-1646240653/capabilities-vr-r-1920x994.jpg")');

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  // slidesPerGroupSkip: 1,
  // grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$('.humberger-menu-icon').click(function () {

  /* -------------humberger-menu----------- */

  $('.menu-icon').toggleClass('change');
  $('.nav-text-close').toggleClass('show');
  $('.nav-text-menu').toggleClass('hide');


});