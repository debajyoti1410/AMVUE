
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    if ($(this).scrollTop() > 50) {
      document.getElementById("navbar").style.background = "white";
  } else {
      document.getElementById("navbar").style.background = "transparent";
  }
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
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

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".prev",
    prevEl: ".next",
  },
});