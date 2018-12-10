

   $(document).ready(function() {
       $(".first-hover h3").addClass("hover-change");
         $(".first-hover").hover(function(){

                $(".first-hover h3").addClass("hover-change");
                $(".second-hover h3").removeClass("hover-change");
                   $(".third-hover h3").removeClass("hover-change");
                      $(".fourth-hover h3").removeClass("hover-change");

           $('.first').show();
           $('.third').hide();
           $('.second').hide();
           $('.fourth').hide();

         });



         $(".second-hover").hover(function(){
              $("img").removeClass("active");

             $(".first-hover h3").removeClass("hover-change");
              $(".second-hover h3").addClass("hover-change");
             $(".third-hover h3").removeClass("hover-change");
             $(".fourth-hover h3").removeClass("hover-change");

           $('.second').show();
           $('.third').hide();
           $('.first').hide();
           $('.fourth').hide();

         });


         $(".third-hover").hover(function(){
             $("img").removeClass("active");
                 $(".first-hover h3").removeClass("hover-change");
                 $(".second-hover h3").removeClass("hover-change");
                 $(".third-hover h3").addClass("hover-change");
             $(".fourth-hover h3").removeClass("hover-change");
           $('.third').show();
           $('.second').hide();
           $('.first').hide();
           $('.fourth').hide();
         });
         $(".fourth-hover").hover(function(){
            $("img").removeClass("active");
                 $(".first-hover h3").removeClass("hover-change");
                    $(".second-hover h3").removeClass("hover-change");
                       $(".third-hover h3").removeClass("hover-change");
             $(".fourth-hover h3").addClass("hover-change");
           $('.fourth').show();
           $('.third').hide();
           $('.first').hide();
           $('.second').hide();
         });
});






jQuery(document).ready(function($) {
        		"use strict";

		        $('#customers-testimonials').owlCarousel({
		            loop: true,

		            items: 4,
                margin: 20,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,

		            responsive: {
                  0: {
                    items: 1
                  },
                  480: {
		                items: 1,
		              },
		              768: {
		                items: 1,
                    margin: 20,
                    center: true,
                    autoWidth: true,
                    touchDrag: false
              },
		              1199: {
		                items: 2,
                    margin: 20,

		              }

		            }
		        });
        	});

          /*
          No use bootstrap js library
          */
          $(document).ready(function() {
            $(".dropdown-toggle").dropdown();
          });
