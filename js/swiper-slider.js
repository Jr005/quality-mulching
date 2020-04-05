

// SWIPER CODE EDIT




var mySwiper = new Swiper('.swiper-container', {
  // SPEED
  speed: 4000,
  spaceBetween: 100,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    loop: true,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
  },

  parallax: {
    boolean: true,
  },

  // updateOnWindowResize: {
  //   boolean: true,
  // }


  calculateHeight: {
    boolean: true,
  }



})



// CHINA MAN TUTOR CODE

//This function is to add animation classes to text.
// function getActiveSlide() {
//   var elemen = document.getElementsByClassName("swiper-slide-active");
//   var sub_div = elemen[0].getElementsByTagName("div");
//   console.log(elemen[0].getElementsByTagName("div"));
//   sub_div[0].classList.add('animated', 'fadeInUp', 'ease-out-circ', 'd-1', 'a-2');
//   // Removes Classes after 1 second
//   setTimeout(function () {
//     sub_div[0].classList.remove('animated', 'fadeInUp', 'ease-out-circ', 'd-1', 'a-2');
//   }, 2000);
// }



  //Slide swiping is calling every 4 seconds. This part will add animation classs every 4 seconds.
  // setInterval(function () { getActiveSlide(); }, 4000);




