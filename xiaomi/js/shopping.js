
// var mySwiper = new Swiper('.swiper-container',{
// slidesPerView : 3,
// centeredSlides : true,
// slidesOffsetBefore : 100,

//  autoplay: {
//     delay: 1000,//1秒切换一次
//   },
//   // autoplay:true,

//  effect : 'coverflow',
//   slidesPerView: 3,
//   centeredSlides: true,
//   coverflowEffect: {
//     rotate: 30,
//     stretch: 10,
//     depth: 60,
//     modifier: 2,
//     slideShadows : true
//   },
// })

var mySwiper = new Swiper('.swiper-container',{
// slidesPerView : 5,
// spaceBetween : 20,
//spaceBetween : '10%',按container的百分比

  effect : 'coverflow',
  slidesPerView: 5,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 60,
    modifier: 2,
    slideShadows : true
  },

 autoplay: {
    delay: 1000,//1秒切换一次
  },
})