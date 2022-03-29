var navber = document.getElementById("navber");
// var back_to_top = document.querySelector(".back_to_top");
var back_to_top = document.querySelector(".back_to_top");


window.addEventListener("scroll",function(){
    // back_to_top.classList.toggle("btot",window.scrollY > 200)
    navber.classList.toggle("sticky",window.scrollY > 1)
    back_to_top.classList.toggle("btot",window.scrollY > 1)
});

var mixer = mixitup('.mxtup');
new VenoBox();
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
$('.p_slider_item').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-right prev_Arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-left next_Arrow"></i>',
    centerMode: true,
    centerPadding: '0',
    responsive: [
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
  });
  // preloader
var preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
    preloader.classList.add("preloader_hide")
});
var sing_in = document.querySelector(".sing_in");
var sing_in_btn = document.querySelector(".nav_btn a");
sing_in_btn.addEventListener("click",function(){
  sing_in.classList.toggle("sing_btn_show");
});

  