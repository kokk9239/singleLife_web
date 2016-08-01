        // loader
      $(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
      })

        // Sticky Header
        $(window).scroll(function() {

            if ($(window).scrollTop() > 100) {
                $('.main_header').addClass('sticky');
            } else {
                $('.main_header').removeClass('sticky');
            }
        });

        // Mobile Navigation
        $('.mobile-toggle').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.main_header').removeClass('open-nav');
            } else {
                $('.main_header').addClass('open-nav');
            }
        });

        $('.main_header li a').click(function() {
            if ($('.main_header').hasClass('open-nav')) {
                $('.navigation').removeClass('open-nav');
                $('.main_header').removeClass('open-nav');
            }
        });

        // navigation scroll lijepo radi materem
        $('nav a').click(function(event) {
            event.preventDefault();
            var id = $(this).attr("href");
            var offset = 50;
            var target = $(id).offset().top-offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);

        });


/*        // 메뉴단 위치 추가
        $("#homeBtn").on("click",function(obj){
/!*            var id = $(this).attr("href");
            var position = $(id).offset();
            $("html, body").animate({scrollTop: position.top},500);*!/

            var id = $(this).attr("href");
            var offset = 100;
            var target = $(id).offset().top-offset;
            $('html, body').animate({
                scrollTop: target
            }, 500);
            event.preventDefault();
        });*/

        // wow js

    new WOW().init();

        // nice scroll

      $(document).ready(

        function() {

          $("html").niceScroll({cursorwidth:"8",cursorborderradius:"none",cursorborder:"none",cursorcolor:"#3498db",mousescrollstep:"60"});

        }

      );

      // portfolio filter
        $(function () {

            var filterList = {

                init: function () {

                    // MixItUp plugin
                    // http://mixitup.io
                    $('#portfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterList.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#portfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterList.init();
        });


        // portfolio filter
        $(function () {

            var filterListGS = {

                init: function () {


                    // MixItUp plugin
                    // http://mixitup.io
                    $('#gsportfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterListGS.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#gsportfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterListGS.init();
        });
        $(function () {

            var filterListCU = {

                init: function () {


                    // MixItUp plugin
                    // http://mixitup.io
                    $('#cuportfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterListCU.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#cuportfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterListCU.init();
        });
        $(function () {

            var filterListSEVEN = {

                init: function () {


                    // MixItUp plugin
                    // http://mixitup.io
                    $('#sevenportfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterListSEVEN.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#sevenportfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterListSEVEN.init();
        });
        $(function () {

            var filterListNaver = {

                init: function () {


                    // MixItUp plugin
                    // http://mixitup.io
                    $('#naver_portfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterListNaver.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#naver_portfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterListNaver.init();
        });
        $(function () {

            var filterListDaum = {

                init: function () {


                    // MixItUp plugin
                    // http://mixitup.io
                    $('#daum_portfoliolist').mixitup({
                        targetSelector: '.portfolio',
                        filterSelector: '.filter',
                        effects: ['fade'],
                        easing: 'snap',
                        // call the hover effect
                        onMixEnd: filterListDaum.hoverEffect()
                    });

                },

                hoverEffect: function () {

                    // Simple parallax effect
                    $('#daum_portfoliolist .portfolio').hover(
                        function () {
                            $(this).find('.label').stop().animate({bottom: 0}, 200, 'easeOutQuad');
                            $(this).find('img').stop().animate({top: -30}, 500, 'easeOutQuad');
                        },
                        function () {
                            $(this).find('.label').stop().animate({bottom: -40}, 200, 'easeInQuad');
                            $(this).find('img').stop().animate({top: 0}, 300, 'easeOutQuad');
                        }
                    );
                }
            };

            // Run the show!
            filterListDaum.init();
        });


      // Skillset js



        // Owl carousel

      $(document).ready(function() {

      $("#testimonial_carosule").owlCarousel({

                    slideSpeed : 300,
                    paginationSpeed : 400,
                    singleItem:true,
                    autoPlay : true,
                    transitionStyle : "backSlide",
                    // "singleItem:true" is a shortcut for:
                    // items : 1,
                    // itemsDesktop : false,
                    // itemsDesktopSmall : false,
                    // itemsTablet: false,
                    // itemsMobile : false

                });

      });

      // Up to top js

      $(document).ready(function() {

        $().UItoTop({ easingType: 'easeOutQuart' });

      });



/* ==========================================================================
   CONTACT FORM JS
   ========================================================================== */

  $(document).ready(function() {
      $("#submit_btn").click(function() {
          //get input field values
          var user_name       = $('input[name=name]').val();
          var user_email      = $('input[name=email]').val();
          var user_phone      = $('input[name=phone]').val();
          var user_message    = $('textarea[name=message]').val();

          //simple validation at client's end
          //we simply change border color to red if empty field using .css()
          var proceed = true;
          if(user_name==""){
              $('input[name=name]').css('border-color','red');
              proceed = false;
          }
          if(user_email==""){
              $('input[name=email]').css('border-color','red');
              proceed = false;
          }
          if(user_phone=="") {
              $('input[name=phone]').css('border-color','red');
              proceed = false;
          }
          if(user_message=="") {
              $('textarea[name=message]').css('border-color','red');
              proceed = false;
          }

          //everything looks good! proceed...
          if(proceed)
          {
              //data to be sent to server
              post_data = {'userName':user_name, 'userEmail':user_email, 'userPhone':user_phone, 'userMessage':user_message};

              //Ajax post data to server
              $.post('contact_me.php', post_data, function(response){

                  //load json data from server and output message
                  if(response.type == 'error')
                  {
                      output = '<div class="error">'+response.text+'</div>';
                  }else{

                      output = '<div class="success">'+response.text+'</div>';

                      //reset values in all input fields
                      $('#contact_form input').val('');
                      $('#contact_form textarea').val('');
                  }

                  $("#result").hide().html(output).slideDown();
              }, 'json');

          }
      });

      //reset previously set border colors and hide all message on .keyup()
      $("#contact_form input, #contact_form textarea").keyup(function() {
          $("#contact_form input, #contact_form textarea").css('border-color','');
          $("#result").slideUp();
      });

  });

 //추가추가했어
        $(document).ready(function ($) {
            $("#owl-example").owlCarousel();
            $("#owl-menu").owlCarousel();
        });
        $("body").data("page", "frontpage");

        $(".btn-hero").on("click",function(obj){
            var position = $(".service_area").offset();
            $("html, body").animate({scrollTop: position.top},500);
        });
        //Date picker
        $('#datepicker').datepicker({
            autoclose:true
        });
