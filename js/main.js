$(document).ready(function () {
  "use strict";

  $(".header_block_content_search_btn").click(function() {
    $(".header_block_content_search_form").toggleClass("active");
  });

  $(".header_block_content_search_form_close").click(function() {
    $(".header_block_content_search_form").removeClass("active");
  });

  $(".modal_back").click(function() {
    $(this).removeClass("active");
    $(".modal_registration").removeClass("active");
    $(".modal_login").removeClass("active");
  });

  $(".header_block_content_login").click(function() {
    $(".modal_back").addClass('active');
    $(".modal_registration").addClass("active");
  });

  $(".modal_registration_footer_btn").click(function() {
    $(".modal_back").addClass('active');
    $(".modal_registration").removeClass("active");
    $(".modal_login").addClass("active");
  });

  $(".modal_login_footer_btn").click(function() {
    $(".modal_back").addClass('active');
    $(".modal_registration").addClass("active");
    $(".modal_login").removeClass("active");
  });

  $('.home_content_block_slider').slick({
      centerMode: true,
      centerPadding: '0px',
      swipe: false,
      slidesToShow: 3,
      dots: false,
      prevArrow: $('.home_content_block_prev'),
      nextArrow: $('.home_content_block_next'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            fade: true,
            swipe: true,
            arrows: true,
            slidesToShow: 1
          }
        }
      ]
  });

  $('.product_block_slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.product_block_slider_nav'
  });

  $('.product_block_slider_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product_block_slider_for',
    dots: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });
  
  $(".information_title_block ul li").click(function() {
    $(".information_title_block ul li").removeClass("active");
    $(this).addClass("active");
    var attr = $(this).attr("data-target");
    $(".information_content_item").removeClass("active");
    $(`.information_content_item_${attr}`).addClass("active");
  });

  $(".shop_block_title_btn").click(function() {
    $(".shop_block_modal").toggleClass("active");
  });

  $('.main_slider_block_slider').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    dots: false,
  });

  var countAllSlide = $(".main_slider_block_slider_item").length;
  $(".main_slider_block_inner_all").html("0" + countAllSlide);

  var $slider = $('.main_slider_block_slider');
  var $progressBar = $('.main_slider_block_progress');
  var $progressBarLabel = $('.slider__label');
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    $progressBarLabel.text( calc + '% completed' );
  });

  $slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    var textStart = '0' + i;
    $(".main_slider_block_inner_now").html(textStart);
  });

});