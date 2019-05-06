
 var mySwiper = new Swiper ('.swiper-container1', {
    // direction: 'horizontal', // 垂直切换选项
    // loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      waitForTransition: false,
    },
  })        

 var swiper2 = new Swiper('.swiper-container2', {
  //  pagination: {
  //   el: '.swiper-pagination',
  // },
      speed: 700,
      slidesPerView: 'auto',
      centeredSlides: true,
      on: {
        init: function() {
          this.slides.removeClass('init');
        },
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next', 
      },

    });
    swiper.$el.parent('.apple-retail')[0].onmouseover = function() {
      swiper.$el.addClass('mouse-hover');
    };
    swiper.$el.parent('.apple-retail')[0].onmouseout = function() {
      swiper.$el.removeClass('mouse-hover');

    };