// $('.mobile-custom--carousel__inner-container').slick();

$(document).ready(function(){
  $('.mobile-custom--carousel__inner-container').slick({
    arrows: true,
    dots: true
  });
});

$(document).ready(function(){
  $('.test--slick__container--holder').slick({
    // arrows: true,
    dots: true
  });
});

// iframe title start
const iFrame = document.querySelector("div.video-wrapper iframe");
iFrame.title = "SIRX How To Video";
// iframe title end

const addAriaAtt = document.querySelector("div#slickSlide10.home-testimonials__content.slick-slide.slick-current.slick-active");
