// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     slidesPerColumn: 2,
//     loop: true,
//     autoplay: {delay: 3000},
//     slidesPerView: 'auto',
//     centeredSlides: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });


// number counter
// $(function(){
//     let start = 0;
//     let end = $(".numup-1").html();
//     let speed = 10;

//     setInterval(function(){
//     if(start<end){
//         start++
//     }
//     $(".numup-1").html(start);
// }, speed);
// });
// $(function(){
//     let start = 0;
//     let end = $(".numup-2").html();
//     let speed = 90;

//     setInterval(function(){
//     if(start<end){
//         start++
//     }
//     $(".numup-2").html(start);
// }, speed);
// });
// $(function(){
//     let start = 2500;
//     let end = $(".numup-3").html();
//     let speed = 1;

//     setInterval(function(){
//     if(start<end){
//         start++
//     }
//     $(".numup-3").html(start);
// }, speed);
// });
// $(function(){
//     let start = 0;
//     let end = $(".numup-4").html();
//     let speed = 8;

//     setInterval(function(){
//     if(start<end){
//         start++
//     }
//     $(".numup-4").html(start);
// }, speed);
// });

// data-aos Animation

AOS.init({
    offset: 50,
    duration: 500,
    delay: 50,
});

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});

// swal({
//     title: '',
//     text: 'Одоогоор хөгжүүлэлт хийгдэж байна',
//     icon: 'warning',
//     // icon: "warning", "error", "success" and "info".
//     button: 'ok'
// });
