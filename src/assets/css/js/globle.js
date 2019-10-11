$(function () {
  backToTop();
  accordionIcon();
  faqSearch();
  getUploadedFileName();
  googleSearch();
  stockRates();

  scrollMenu();
  menuHoverColorChange();


  // Code Block 1
  jQuery('#testimonial_slide').flexslider({
    animation: "slide",
    directionNav: false,
    animationLoop: true
  });

  
 



  // browser title Code Block 3
  var title = jQuery('.page-heading .page-heading-txt h1').text();
  document.title =  title ? 'Shrowsing - ' + title : 'Shrowsing ' + title;

  // // Code Block 4
  // jQuery('.selectpicker').selectpicker();
  // // Menu
  // jQuery('.main-nav .primary-menu>ul .mega-menu .products-services-tab a.conventional-link').click(function () {
  //   jQuery(this).addClass('active');
  //   jQuery('.main-nav .primary-menu>ul .mega-menu .products-services-tab a.takaful-link').removeClass('active');
  //   jQuery('#conventional').show();
  //   jQuery('#takaful').hide();
  // });
  // jQuery('.main-nav .primary-menu>ul .mega-menu .products-services-tab a.takaful-link').click(function () {
  //   jQuery(this).addClass('active');
  //   jQuery('.main-nav .primary-menu>ul .mega-menu .products-services-tab a.conventional-link').removeClass('active');
  //   jQuery('#takaful').show();
  //   jQuery('#conventional').hide();
  // });

  // Code Block 5
  // Mobile Menu Toggle
  jQuery('.responisve-menu-btn').click(function () {
    jQuery(this).toggleClass('mobile_menu_close');
    jQuery('body').toggleClass('opened_menu');
    jQuery('.primary-menu').toggleClass("primary-active");
  });
  jQuery('.main-nav .primary-menu>ul>li .menu-open-btn').click(function () {
    if (jQuery(this).parent().hasClass('mob_active')) {
      jQuery(this).parent().removeClass('mob_active');
    } else {
      jQuery(this).parent().addClass('mob_active').siblings().removeClass('mob_active');
    }
  });


  // Side Menu 
  jQuery('.side-menu>ul>li>a').click(function () {
    if (jQuery(this).parent().hasClass('active-side-menu')) {
      jQuery(this).parent().removeClass('active-side-menu');
    } else {
      jQuery(this).parent().addClass('active-side-menu').siblings().removeClass('active-side-menu');
    }
  });
  jQuery('.side-menu>ul>li>ul>li>a').click(function () {
    if (jQuery(this).parent().hasClass('active-side-menu')) {
      jQuery(this).parent().removeClass('active-side-menu');
    } else {
      jQuery(this).parent().addClass('active-side-menu').siblings().removeClass('active-side-menu');
    }
  });
  jQuery('.side-menu>ul>li>ul>li>ul>li>a').click(function () {
    if (jQuery(this).parent().hasClass('active-side-menu')) {
      jQuery(this).parent().removeClass('active-side-menu');
    } else {
      jQuery(this).parent().addClass('active-side-menu').siblings().removeClass('active-side-menu');
    }
  });
  jQuery('.side-menu>ul>li>ul>li>ul>li>ul>li>a').click(function () {
    if (jQuery(this).parent().hasClass('active-side-menu')) {
      jQuery(this).parent().removeClass('active-side-menu');
    } else {
      jQuery(this).parent().addClass('active-side-menu').siblings().removeClass('active-side-menu');
    }
  });


  jQuery('.home_company_tabs .nav-tabs-mobile').click(function () {
    jQuery(this).toggleClass('active');
    jQuery('.home_company_tabs ul.nav-tabs').toggleClass('active');
  });
  jQuery('.home_company_tabs ul.nav-tabs li a').click(function () {
    var tax_tab = jQuery(this).text();
    jQuery('.nav-tabs-mobile span').text(tax_tab);
    jQuery('.nav-tabs-mobile').removeClass('active');
    jQuery('.home_company_tabs ul.nav-tabs').removeClass('active');
  });

  jQuery('.inner-detail-tab .nav-tabs-mobile').click(function () {
    jQuery(this).toggleClass('active');
    jQuery('.inner-detail-tab ul.nav-tabs').toggleClass('active');
  });
  jQuery('.inner-detail-tab ul.nav-tabs li a').click(function () {
    var tax_tab = jQuery(this).text();
    jQuery('.nav-tabs-mobile span').text(tax_tab);
    jQuery('.nav-tabs-mobile').removeClass('active');
    jQuery('.inner-detail-tab ul.nav-tabs').removeClass('active');
  });

  jQuery('.efu_side_bar_link').click(function () {
    jQuery(this).toggleClass('active');
    jQuery('.efu_side_bar_box').toggleClass('active');
  });



  // finanical
  jQuery('body').on('#profitability .nav-tabs-mobile', 'click', function () {
    jQuery(this).toggleClass('active');
    jQuery('#profitability ul.nav-tabs').toggleClass('active');
  });
  jQuery('body').on('#profitability ul.nav-tabs li a', 'click', function () {
    var tax_tab = jQuery(this).text();
    jQuery('.nav-tabs-mobile span').text(tax_tab);
    jQuery('.nav-tabs-mobile').removeClass('active');
    jQuery('#profitability ul.nav-tabs').removeClass('active');
  });


  jQuery('body').on('#return-share-holders .nav-tabs-mobile', 'click', function () {
    jQuery(this).toggleClass('active');
    jQuery('#return-share-holders ul.nav-tabs').toggleClass('active');
  });
  jQuery('body').on('#return-share-holders ul.nav-tabs li a', 'click', function () {
    var tax_tab = jQuery(this).text();
    jQuery('.nav-tabs-mobile span').text(tax_tab);
    jQuery('.nav-tabs-mobile').removeClass('active');
    jQuery('#return-share-holders ul.nav-tabs').removeClass('active');
  });



  // Code Block 6


  // Code Block 7
  // Accordian
  jQuery('.accordion-faqs .accordion-faqs-box h4').click(function () {
    jQuery(this).parent().parent('.accordion-faqs').find('.accordion-faqs-box').removeClass('active');
    jQuery(this).parent().toggleClass('active');
  });

  var owl = jQuery("#might_interested");
  owl.owlCarousel({
    pagination: false,
    navigation: true,
    itemsCustom: [
      [320, 1],
      [450, 1],
      [600, 1],
      [700, 2],
      [1000, 2],
      [1200, 3],
      [1400, 3],
      [1600, 3]
    ],
  });
  jQuery('a#loadmore_btn').click(function (e) {
    jQuery(this).addClass('loading-progress');
    var timeout = setTimeout(function () {
      jQuery('a#loadmore_btn').hide();
      jQuery('#loadmore_section').show();
      clearTimeout(timeout);
    }, 2000);
  });

  // Tooltip
  jQuery('[data-toggle="tooltip"]').tooltip();

  // Code Block 8
  jQuery('.timeline-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '40px',
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });

  jQuery('.timeline-slider-nav')
    .on('init', function (event, slick) {
      jQuery('.timeline-slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      centerMode: false,
      dots: false,
      focusOnSelect: false,
      infinite: true,
      variableWidth: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }]
    });

  jQuery('.timeline-slider').on('afterChange', function (event, slick, currentSlide) {
    jQuery('.timeline-slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.timeline-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    jQuery('.timeline-slider-nav .slick-slide.is-active').removeClass('is-active');
    jQuery(currrentNavSlideElem).addClass('is-active');
  });

  jQuery('.timeline-slider-nav').on('click', '.slick-slide', function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    jQuery('.timeline-slider').slick('slickGoTo', goToSingleSlide);
  });

  jQuery(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });

  $(window).load(function () {
    $("img").each(function () {
      $(this).attr("src", $(this).attr("data-src"));
    });
    $(".loadSlideImage").each(function () {
      $(this).css("background-image", $(this).attr("data-background"));
    });

    jQuery('#home_slider_carousel').flexslider({
      animation: "fade",
      directionNav: false,
      pauseOnAction: false,
      animationLoop: true
    });

  });

});

function googleSearch() {
  var cx = '014086470092987493160:vf71c_kdozm';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);

}

window.onload = function () {
  document.getElementById('gsc-i-id1').placeholder = 'Search';
};

jQuery(window).scroll(function () {
  var scroll = jQuery(window).scrollTop();
  if (scroll >= 50) {
    jQuery("body").addClass("ntier-fixedheader");
  } else {
    jQuery("body").removeClass("ntier-fixedheader");
  }
});

jQuery(window).scroll(function () {
  if (jQuery(window).width() > 767) {
    var scroll2 = jQuery(window).scrollTop();
    if (scroll2 >= 750) {
      jQuery("body").addClass("tab-fixedheader");
    } else {
      jQuery("body").removeClass("tab-fixedheader");
    }
  }
});

function backToTop() {
  if (jQuery(window).width() > 1024) {
    jQuery('.toTop').click(function () {
      jQuery("html, body").animate({
        scrollTop: 0
      }, "slow");
    });
    jQuery(window).on('scroll', function () {
      if (jQuery('*').hasClass('home_slider')) {
        if (jQuery(this).scrollTop() >= jQuery('.home_slider').height()) {
          jQuery('.toTop').fadeIn('slow');
        } else {
          jQuery('.toTop').fadeOut('fast');
        }
      }
      if (jQuery('*').hasClass('page-heading')) {
        if (jQuery(this).scrollTop() >= jQuery('.page-heading').outerHeight()) {
          jQuery('.toTop').fadeIn('slow');
        } else {
          jQuery('.toTop').fadeOut('fase');
        }
      }
    });
  }
}

function accordionIcon() {
  $('.accordionHead').on('click', function () {
    if ($(this).hasClass('collapsed')) {
      $('.fa-minus', this).show();
      $('.fa-plus', this).hide();
    } else {
      $('.fa-plus', this).show();
      $('.fa-minus', this).hide();
    }

  });
}

function faqSearch() {

  $(".search-faqs input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    if ($(this).val() == "") {
      console.log('done');
      $('.faqBox').hide();
    } else {


      $(".faqQuestion").filter(function () {
        $(this).parent().toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    }

  });

  // FAQ's Accortion
  $(".faqQuestion").click(function () {
    $('.faqBox').addClass('hide').removeClass('show');
    if ($('.faqAnswer').is(':visible')) {
      $(".faqAnswer").slideUp(300);
      $(this).parent('.faqBox').addClass('hide').removeClass('show');
    }
    if ($(this).next(".faqAnswer").is(':visible')) {
      $(this).next(".faqAnswer").slideUp(300);
      $(this).parent('.faqBox').addClass('hide').removeClass('show');
    } else {
      $(this).next(".faqAnswer").slideDown(300);
      $(this).parent('.faqBox').addClass('show').removeClass('hide');
    }
  });
}

function getUploadedFileName() {
  $('.uploadCV').change(function (e) {
    var fileName = e.target.files[0].name;
    $(this).next().text(fileName);
  });
}

function stockRates() {
  $.ajax({
    url: 'https://www.quandl.com/api/v3/datasets/PSX/EFUG?api_key=oGvViiXyzYvWq4tyfKGn',
    datatype: "json",
    success: function (record) {
      var dataHead;
      var dataRow;
      dataHead += '<tr>';
      for (var s = 0; s < record.dataset.column_names.length; s++) {

        dataHead += '<th>' + record.dataset.column_names[s] + '</th>';

      }
      dataHead += '</tr>'
      for (var i = 0; i < 3; i++) {
        dataRow += '<tr>';
        for (var j = 0; j < record.dataset.data[i].length; j++) {


          dataRow += '<td>' + record.dataset.data[i][j] + '</td>';

        }
        dataRow += '</tr>';
      }
      $('.stock_info_table_box table').append(dataHead);
      $('.stock_info_table_box table').append(dataRow);

    }
  });

}

function scrollMenu() {
  var lastScrollTop = 0;

  if ($(window).width() > 1024) {
    $(window).scroll(function (event) {

      if ($('*').hasClass('home_slider')) {
        if ($(this).scrollTop() > $('.home_slider').height()) {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            $('.header').css('padding-top', '0');
          } else {
            $('.header').addClass('scrollMenu');
            $('.header').css('padding-top', '72px');
          }
          lastScrollTop = st;
        }
        if ($(this).scrollTop() < 100) {
          $('.header').removeClass('scrollMenu');
          $('.header').css('padding-top', '0');
        }
      }
      if ($('*').hasClass('page-heading')) {
        if ($(this).scrollTop() > $('.home_slider').height()) {
          var st = $(this).scrollTop();
          if (st > lastScrollTop) {
            $('.header').css('padding-top', '0');
          } else {
            $('.header').addClass('scrollMenu');
            $('.header').css('padding-top', '72px');
          }
          lastScrollTop = st;
        }
        if ($(this).scrollTop() < 100) {
          $('.header').removeClass('scrollMenu');
          $('.header').css('padding-top', '0');
        }
      }

    });
  }

}

function menuHoverColorChange() {
  if ($(window).width() > 1024) {
    $('.main-nav .primary-menu > ul > li > a').hover(function () {
      $('.primary-menu ul li a').css('color', '#a4c5e9');
      $(this).css('color', '#e44a33');
    });

    $('.main-nav .primary-menu').mouseout(function () {
      if (!$('.main-nav .primary-menu > ul .mega-menu').is(':visible')) {
        $('.primary-menu ul li a').css('color', '#34393f');
      }
    });
  }
}

$(window).on('load', function () {
  $("img").each(function () {
    $(this).attr("src", $(this).attr("data-src"));
  });
});
