
       $(document).ready(function(){
         $(".link-image1").hover(function(){
           $('.first').show();
           $('.third').hide();
           $('.second').hide();
           $('.fourth').hide();
         });



         $(".link-image2").hover(function(){
           $('.second').show();
           $('.third').hide();
           $('.first').hide();
           $('.fourth').hide();
         });


         $(".link-image3").hover(function(){
           $('.third').show();
           $('.second').hide();
           $('.first').hide();
           $('.fourth').hide();
         });
         $(".link-image4").hover(function(){
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

		            items: 3,
		            margin: 20,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
            
		            responsive: {
                  0: {
                    items: 1
                  },
                  600: {
		                items: 1,
                    center: true,
                   margin: 30

		              },
		              768: {
		                items: 1,
                    margin: 50,
                     autoWidth: true

		              },
		              1170: {
		                items: 2,

                    margin: 20
		              }
		            }
		        });
        	});

          $(document).ready(function(){
        $(".link-image1").hover(function(){
            $(".first-hover h3").toggleClass("hover-change");
        });

        $(".link-image2").hover(function(){
            $(".second-hover h3").toggleClass("hover-change");
        });

        $(".link-image3").hover(function(){
            $(".third-hover h3").toggleClass("hover-change");
        });

        $(".link-image4").hover(function(){
            $(".fourth-hover h3").toggleClass("hover-change");
        });
    });
