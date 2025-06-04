
function LoadReadyResize()
{
	'use strict';
	
	
	
	
	
}


/*=============================================================================================*/
/* Load Function START Here*/
jQuery(window).on("load",function() {
	'use strict';
    jQuery(".flt_links").mCustomScrollbar();
});
/* Load Function END Here*/
/*=============================================================================================*/

/*=============================================================================================*/
/* Ready Function START Here*/
jQuery(document).ready(function() {
	'use strict';
	
	/* Loadready Function */
	LoadReadyResize();
	/* Loadready Function */
	
	jQuery(".right_nav .rr_box .iconlinks.search_icon a").on("click", function(e){
		e.preventDefault();
		jQuery("body").toggleClass("show_searchpop overflow-hidden");
	});
	jQuery(".search_pop_wrap .close_btn a").on("click", function(e){
		e.preventDefault();
		jQuery("body").removeClass("show_searchpop overflow-hidden");
	});

	jQuery(".heading .filter_menu .flt-btn").on("click", function(e){
		e.preventDefault();
		jQuery("body").addClass("show_mobile_filter");
	});
	jQuery(".filters_bar .mobile_title .close-btn").on("click", function(e){
		e.preventDefault();
		jQuery("body").removeClass("show_mobile_filter");
	});
	

	jQuery('.nav_main ul li.has_submenu').hover(function(){
		jQuery("body").addClass("showmegamenu");
	},function(){
		jQuery("body").removeClass("showmegamenu");
	});

	jQuery(".hamburgermenu a").on("click", function(e){
		e.preventDefault();
		jQuery("body").addClass("show_mobile_menu");
	});
	jQuery(".close_menu a").on("click", function(e){
		e.preventDefault();
		jQuery("body").removeClass("show_mobile_menu");
	});
	
	jQuery(".nav_main ul li.has_submenu").each(function( index ) {
		var ancherbtn = jQuery(this).find(" > a");
		var mnblk = jQuery(this).find(".megamenu_wrap");
		var mnblkheight = 0;
		var mnheight = jQuery(this).find(".left_megamenu").outerHeight();
		//console.log(mnheight);
		jQuery(ancherbtn).on("click", function(e){
			e.preventDefault();
			if (!jQuery(mnblk).hasClass("showed")) {
				jQuery(mnblk).css("max-height",mnheight);
				jQuery(mnblk).addClass("showed");
				jQuery(this).addClass("active");
				jQuery(this).parents("li.has_submenu").siblings(".has_submenu").find(".megamenu_wrap").css("max-height",mnblkheight).removeClass("showed");
			} else {
				jQuery(mnblk).css("max-height",mnblkheight);
				jQuery(mnblk).removeClass("showed");
				jQuery(this).removeClass("active");
			}
			
		});
	});

	//.right_nav .rr_box .iconlinks cart_icon

	jQuery(".iconlinks.cart_icon a").on("click", function(e){
		e.preventDefault();
		jQuery("body").addClass("overflow-hidden has-cart-open");
	});
	jQuery(document).on("click", "a.mini_cart_close", function(e){
		e.preventDefault();
		jQuery("body").removeClass("overflow-hidden has-cart-open");
	});

	jQuery('.form-group select').niceSelect();
	jQuery('.sort_by select').niceSelect();

	jQuery(".flt_title a").on('click',function(e){
    	jQuery(this).parent().toggleClass('up');
    	jQuery(this).parent().next(".flt_links",".flt_boxes").slideToggle();
        e.preventDefault();
    });

    jQuery(".flt_title a").on('click',function(e){
	    jQuery(this).parent().next(".flt_boxes").slideToggle();
	    e.preventDefault();
    });
	/*=====================================*/
	/* Homepage Footer Flag Slider : Start */
	jQuery('#flagslider').owlCarousel({
		loop:true,
		margin:15,
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:15
			}
		}
	});
	/* Homepage Footer Flag Slider : End */
	/*=====================================*/
	
	
	/*=====================================*/
	/* Homepage Footer Flag Slider : Start */
	var shopbysl = jQuery('.shopby_slider');
	shopbysl.owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		navContainer: '#shopbyNav',
		dots:false,
		smartSpeed: 700,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828"><path id="Path" d="M0,0-6-6l-6,6" transform="translate(7 1.414) rotate(-90)" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828"><path id="Path" d="M0,0,6-6l6,6" transform="translate(1.414 1.414) rotate(90)" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>'
		],
		responsive:{
			0:{
				items:1,
				margin:16,
			},
			600:{
				items:2,
				margin:20,
			},
			768:{
				items:3,
				margin:20,
			},
			1000:{
				items:4
			}
		}
	});
	/*jQuery('.shopby_next').click(function() {
		shopbysl.trigger('next.owl.carousel');
	})
	jQuery('.shopby_prev').click(function() {
		shopbysl.trigger('prev.owl.carousel');
	})*/

	/* Homepage Footer Flag Slider : End */
	/*=====================================*/

	//insta_slider
	var instasl = jQuery('.insta_slider');
	instasl.owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		navContainer: '#instaNav',
		dots:false,
		smartSpeed: 700,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828"><path id="Path" d="M0,0-6-6l-6,6" transform="translate(7 1.414) rotate(-90)" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" width="8.414" height="14.828" viewBox="0 0 8.414 14.828"><path id="Path" d="M0,0,6-6l6,6" transform="translate(1.414 1.414) rotate(90)" fill="none" stroke="#111111" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></svg>'
		],
		responsive:{
			0:{
				items:2,
				margin:11,
			},
			600:{
				items:2
			},
			768:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	/*jQuery('.shopby_next').click(function() {
		instasl.trigger('next.owl.carousel');
	})
	jQuery('.shopby_prev').click(function() {
		instasl.trigger('prev.owl.carousel');
	})*/
	
	stickysidebar();

});
/* Ready Function END Here*/
/*=============================================================================================*/


/*=============================================================================================*/
/* Resize Function START Here*/
jQuery(window).resize(function() {
	'use strict';

	stickysidebar();
	LoadReadyResize();
	
});
/* Resize Function END Here*/
/*=============================================================================================*/


/*=====================================*/
/* Event Sidebar sticky Start */


var winscroll = 0;



function stickysidebar() {
	winscroll =  jQuery(window).scrollTop();
	
}

jQuery(window).scroll(function() {
	
	var winscroll =  jQuery(window).scrollTop();
	if( winscroll > 0) {
		jQuery("#header").addClass("sticky_header");
	} else {
		jQuery("#header").removeClass("sticky_header");
	}
	
});
/* Event Sidebar sticky End */
/*=====================================*/

jQuery('.acc_header').click(function(){
	jQuery(this).next().slideToggle('medium');
	jQuery(this).parent().toggleClass('open');
	return false
});




/* FAQ Scroll to section Start */

// Cache selectors
var lastId,
    topMenu = jQuery(".side_links"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = jQuery(jQuery(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = jQuery(this).attr("href"),
      offsetTop = href === "#" ? 0 : jQuery(href).offset().top-topMenuHeight+1;
  jQuery('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
jQuery(window).scroll(function(){
   // Get container scroll position
   var fromTop = jQuery(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if (jQuery(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});


/* FAQ Scroll to section End */


jQuery(function() {
  jQuery('.form-group .input-text').click(function() {
    jQuery(this).focus();
  });
  jQuery('.form-group .input-text').focusin(function() {
    jQuery(this).parent('.form-group').addClass('active');
  });
  jQuery('.form-group .input-text').focusout(function() {
    if (jQuery(this).val().length <= 0) {
      jQuery(this).parent('.form-group').removeClass('active');
    } else {
      jQuery(this).parent('.form-group').addClass('active');
    }
  });
});




var fixTop = $('.faq_main .sidebar .side_links').offset().top;

jQuery(window).scroll(function() {
	
	var winscroll =  jQuery(window).scrollTop();
	if( winscroll >= fixTop) {
		jQuery(".faq_main .sidebar .side_links").addClass("sticky_sidebar");
	} else {
		jQuery(".faq_main .sidebar .side_links").removeClass("sticky_sidebar");
	}
	
});
