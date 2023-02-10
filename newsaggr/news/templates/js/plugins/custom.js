if(jQuery('#pp_page_title_img_blur').val()!='') {
	(function() {
	  jQuery(window).scroll(function() {
	    var oVal;
	    oVal = jQuery(window).scrollTop() / 400;
	    if(oVal>1)
	    {
		    oVal = 1;
	    }
	    
	    return jQuery("#bg_blurred").css("opacity", oVal);
	  });
	
	}).call(this);
}

if(jQuery('#pp_page_title_img_blur').val()!='') {
	(function() {
	  jQuery(window).scroll(function() {
	    var oVal;
	    oVal = jQuery(window).scrollTop() / 600;
	    if(oVal>1)
	    {
		    oVal = 1;
	    }
	    oVal = parseFloat(1-oVal);
	    
	    return jQuery("#page_caption.hasbg .page_title_wrapper").css("opacity", oVal);
	  });
	
	}).call(this);
}

jQuery(document).ready(function(){ 
	"use strict";

	jQuery(document).setNav();
	
	jQuery(window).resize(function(){
		jQuery(document).setNav();
	});
	
	var iLightboxapi = jQuery('a.fancy-gallery, .pp_gallery a, .img_frame, .fancy_video, .lightbox_vimeo, .lightbox_youtube, .woocommerce-product-gallery__image a').iLightBox({
		skin: jQuery('#tg_lightbox_skin').val(),
		path: jQuery('#tg_lightbox_thumbnails').val(),
		type: 'inline, video, image',
		maxScale: 1,
	  	controls: {
		  slideshow: true,
		  arrows: true
		},
		overlay: {
		  opacity: jQuery('#tg_lightbox_opacity').val()
		}
	});
	
	iLightboxapi.refresh();
    
    jQuery('#menu_expand_wrapper a').on( 'click', function(){
    	jQuery('#menu_wrapper').fadeIn();
	    jQuery('#custom_logo').animate({'left': '15px', 'opacity': 1}, 400);
	    jQuery('#menu_close').animate({'left': '-10px', 'opacity': 1}, 400);
	    jQuery(this).animate({'left': '-60px', 'opacity': 0}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '0', 'opacity': 1}, 400).fadeIn();
    });
	
	jQuery('#menu_close').on( 'click', function(){
		jQuery('#custom_logo').animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery(this).stop().animate({'left': '-200px', 'opacity': 0}, 400);
	    jQuery('#menu_expand_wrapper a').animate({'left': '20px', 'opacity': 1}, 400);
	    jQuery('#menu_border_wrapper select').animate({'left': '-200px', 'opacity': 0}, 400).fadeOut();
	    jQuery('#menu_wrapper').fadeOut();
	});
	
	jQuery(window).resize(function() {
		if(jQuery(this).width() < 768)
		{
			jQuery('#menu_expand_wrapper a').trigger('click');
		}
	});
	
	var isDisableRightClick = jQuery('#pp_enable_right_click').val();
	
	if(isDisableRightClick!='')
	{
		jQuery(this).bind("contextmenu", function(e) {
	    	e.preventDefault();
	    });
	}
    
    //Add to top button when scrolling
    jQuery(window).scroll(function() {
	 	var calScreenWidth = jQuery(window).width();
		
		if(jQuery(this).scrollTop() > 200) {
		    jQuery('#toTop').stop().css({opacity: 0.5, "visibility": "visible"}).animate({"visibility": "visible"}, {duration:1000,easing:"easeOutExpo"});
		} else if(jQuery(this).scrollTop() == 0) {
		    jQuery('#toTop').stop().css({opacity: 0, "visibility": "hidden"}).animate({"visibility": "hidden"}, {duration:1500,easing:"easeOutExpo"});
		}
	});
 
	jQuery('#toTop, .hr_totop').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},800);
	});
	
	var isDisableDragging = jQuery('#pp_enable_dragging').val();
	
	if(isDisableDragging!='')
	{
		jQuery("img").mousedown(function(){
		    return false;
		});
	}
	
	if(jQuery('#pp_topbar').val()==0)
	{
		var topBarHeight = jQuery('.header_style_wrapper').height();
	}
	else
	{
		var topBarHeight = parseInt(jQuery('.header_style_wrapper').height()-jQuery('.header_style_wrapper .above_top_bar').height());
	}
	
	var logoHeight = jQuery('#custom_logo img').height();
	var logoMargin = parseInt(jQuery('#custom_logo').css('marginTop'));
	var menuPaddingTop = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingTop'));
	var menuPaddingBottom = parseInt(jQuery('#menu_wrapper div .nav li > a').css('paddingBottom'));
	var SearchPaddingTop = parseInt(jQuery('.top_bar #searchform button').css('paddingTop'));
	
	jQuery(window).resize(function(){
	    if(jQuery(this).width()>=960)
	    {
		    jQuery('.logo_wrapper').css('marginTop', '');
		    jQuery('.top_bar #searchform button').css('paddingTop', '');
		    
		    if(!jQuery('.top_bar').hasClass('scroll'))
		    {
		    	var originalWrapperPaddingTop = parseInt(jQuery('.header_style_wrapper').height());
				jQuery('#wrapper').css('paddingTop', parseInt(originalWrapperPaddingTop)+'px');
			}
	    }
	    else
	    {
	    	if(!jQuery('.top_bar').hasClass('scroll'))
		    {
		    	var originalWrapperPaddingTop = parseInt(jQuery('.header_style_wrapper').height());
				jQuery('#wrapper').css('paddingTop', parseInt(originalWrapperPaddingTop)+'px');
			}
	    }
	});
	
	jQuery('.demotip').tooltipster({
		position: 'left'
	});
	
	jQuery(window).scroll(function(){
		var scrollTop = jQuery(window).scrollTop();
		var docHeight = jQuery(document).height();
		var winHeight = jQuery(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);
		
		jQuery('#post_indicator').css('width', scrollPercentRounded+'%');
	});
	
	jQuery(window).scroll(function(){
	    if(jQuery('#pp_fixed_menu').val()==1 && jQuery('#wrapper').hasClass('ready'))
	    {
	    	if(jQuery(this).scrollTop() >= 100){
	    		jQuery('.header_style_wrapper .above_top_bar').hide();
	    		jQuery('.extend_top_contact_info').hide();
	    		
	    		jQuery('.top_bar').addClass('scroll');
	    		jQuery('#post_info_bar').addClass('scroll');
	    		jQuery('.header_style_wrapper .ppb_ads').hide();
	        }
	        else if(jQuery(this).scrollTop() < 100)
	        {
	        	jQuery('.header_style_wrapper .above_top_bar').show();
	        	jQuery('.header_style_wrapper .ppb_ads').show();
	        	jQuery('.extend_top_contact_info').show();
	    	    
	    	    jQuery('#custom_logo img').removeClass('zoom');
	    	    jQuery('#custom_logo img').css('maxHeight', '');
	    	    
	    	    jQuery('#custom_logo').css('marginTop', parseInt(logoMargin)+'px');
	    		
	    		jQuery('#menu_wrapper div .nav > li > a').css('paddingTop', menuPaddingTop+'px');
	    		jQuery('#menu_wrapper div .nav > li > a').css('paddingBottom', menuPaddingBottom+'px');;
	    		
	    		jQuery('.top_bar').removeClass('scroll');
	    		jQuery('#post_info_bar').removeClass('scroll');
	        }
	   }
	});
	
	jQuery(document).mouseenter(function()
	{	
	    jQuery('body').addClass('hover');	
	});	
	
	jQuery(document).mouseleave(function()
	{	
	    jQuery('body').removeClass('hover');	
	});	
	
	var siteBaseURL = jQuery('#pp_homepage_url').val();
	
	if(jQuery('#pp_ajax_search').val() != '')
    {
		jQuery('#s').on('input', function() {
			jQuery.ajax({
				url:siteBaseURL+"/wp-admin/admin-ajax.php",
				type:'POST',
				data:'action=grandnews_ajax_search&s='+jQuery('#s').val(),
				success:function(results) {
					jQuery("#autocomplete").html(results);
					
					if(results != '')
					{
						jQuery("#autocomplete").addClass('visible');
						jQuery("#autocomplete").show();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'visible');
					}
					else
					{
						jQuery("#autocomplete").hide();
						jQuery("body.js_nav .mobile_menu_wrapper").css('overflow', 'scroll');
					}
				}
			});
		});
		
		jQuery("#s").keypress(function(event) {
		    if (event.which == 13) {
		        event.preventDefault();
		        jQuery("form#searchform").submit();
		    }
		});
	}
	
	jQuery('#mobile_nav_icon').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},100);
		jQuery('body').toggleClass('js_nav');
		jQuery('#close_mobile_menu').addClass('open');
		
		if(is_touch_device())
		{
			jQuery('body.js_nav').css('overflow', 'auto');
		}
	});
	
	jQuery('#close_mobile_menu, #close_mobile_menu_button').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		jQuery('body').removeClass('overflow_hidden');	
		jQuery(this).removeClass('open');
	});
	
	jQuery('.mobile_menu_close a').on( 'click', function() {
		jQuery('body').removeClass('js_nav');
		jQuery('body').removeClass('overflow_hidden');	
	});
	
	jQuery('#search_icon').on( 'click', function() {
		jQuery('body,html').animate({scrollTop:0},100);
		jQuery('body').addClass('overflow_hidden');	
		jQuery('#overlay_background_search').find('.search_wrapper').find('.search_content').find('#searchform').find('#s').focus();
		jQuery('#overlay_background_search').addClass('visible');
		
		if(is_touch_device())
		{
			jQuery('body').css('overflow', 'auto');
		}
	});
	
	jQuery('#search_close_button').on( 'click', function() {
		jQuery('body').removeClass('overflow_hidden');
		jQuery('#overlay_background_search').removeClass('visible');
	});
	
	jQuery('.close_alert').on( 'click', function() {
		var target = jQuery(this).data('target');
		jQuery('#'+target).fadeOut();
	});			
        
    jQuery('#option_wrapper').mouseenter(function()
	{	
	    jQuery('body').addClass('overflow_hidden');	
	});	
	
	jQuery('#option_wrapper').mouseleave(function()
	{	
	    jQuery('body').removeClass('overflow_hidden');	
	});	
	
	jQuery('#page_share, #post_share_text, #post_info_share').click(function(){
		jQuery('#overlay_background').addClass('visible');
		jQuery('#overlay_background').addClass('share_open');
		jQuery('#fullscreen_share_wrapper').css('visibility', 'visible');
	});
	
	jQuery('#overlay_background').click(function(){
		if(!jQuery('body').hasClass('js_nav'))
		{
			jQuery('#overlay_background').removeClass('visible');
			jQuery('#overlay_background').removeClass('share_open');
			jQuery('#fullscreen_share_wrapper').css('visibility', 'hidden');
		}
	});
	
	if(jQuery('#tg_sidebar_sticky').val()==1)
	{
		if(jQuery('#pp_fixed_menu').val()==1)
		{
			jQuery(".sidebar_wrapper").stick_in_parent({ offset_top: 80 });
		}
		else
		{
			jQuery(".sidebar_wrapper").stick_in_parent();
		}
		
		if(jQuery(window).width() < 768 || is_touch_device())
		{
			jQuery(".sidebar_wrapper").trigger("sticky_kit:detach");
		}
		
		jQuery(window).resize(function() {
			if(jQuery(this).width() < 768)
			{
				jQuery(".sidebar_wrapper").trigger("sticky_kit:detach");
			}
		});
	}
	
	if(!is_touch_device())
	{
		var lastScrollTop = 0;
		jQuery(window).scroll(function(event){
		   var st = jQuery(this).scrollTop();
		   if (st > lastScrollTop){
		       jQuery('#post_info_bar').addClass('scroll');
		   } else {
		      jQuery('#post_info_bar').removeClass('scroll');
		   }
		   lastScrollTop = st;
		});
	}
	else
	{
		var lastY;
		jQuery(document).bind('touchmove', function (e){
		     var currentY = e.originalEvent.touches[0].clientY;
		     if(currentY > lastY){
		        jQuery('#post_info_bar').addClass('scroll');
		     }else if(currentY < lastY){
		         jQuery('#post_info_bar').removeClass('scroll');
		     }
		     lastY = currentY;
		});
	}

	jQuery('#option_btn').click(
		function() {
			if(jQuery('#option_wrapper').css('right') != '0px')
			{	
	    		jQuery('#option_wrapper').animate({"right": "0px"}, { duration: 500 });
	 			jQuery(this).animate({"right": "280px"}, { duration: 500 });
	 		}
	 		else
	 		{
	 			var isOpenOption = jQuery.cookie("grandnews_demo");
				if(jQuery.type(isOpenOption) === "undefined")
	    		{
	    			jQuery.cookie("grandnews_demo", 1, { expires : 7, path: '/' });
	    		}
	 			jQuery('#option_wrapper').animate({"right": "-282px"}, { duration: 500 });
				jQuery('#option_btn').animate({"right": "0px"}, { duration: 500 });
	 		}
		}
	);
	
	var isOpenOption = jQuery.cookie("grandnews_demo");
	if(jQuery.type(isOpenOption) === "undefined")
	{
	    jQuery('#option_btn').trigger('click');
	}
});

jQuery(window).on('resize load',adjustIframes);

jQuery(function() {
	if(jQuery('#tg_enable_lazy').val()!='')
	{
	    jQuery(".post_img img, .tg-lazy").Lazy({
	      	effect: "fadeIn",
	        effectTime: 300,
	        threshold: 0
	    });
	}
});

jQuery(window).load(function(){
	if(jQuery(window).scrollTop() < 100)
	{
		jQuery('.top_bar').removeClass('scroll');
		jQuery('.header_style_wrapper .above_top_bar').show();
	
	    var originalWrapperPaddingTop = parseInt(jQuery('.header_style_wrapper').height());
		
		jQuery('#wrapper').css('paddingTop', parseInt(originalWrapperPaddingTop)+'px');
		jQuery('#wrapper').addClass('ready');
		jQuery('.header_style_wrapper').data('height', parseInt(originalWrapperPaddingTop));
	}
	else
	{
		window.setTimeout(function() {
			jQuery('.top_bar').removeClass('scroll');
			jQuery('.header_style_wrapper .above_top_bar').show();
			jQuery('.ppb_ads.pp_ads_global_before_menu').show();
		}, 100);
	
		window.setTimeout(function() {
			var originalWrapperPaddingTop = parseInt(jQuery('.header_style_wrapper').height());
	  	
		  	jQuery('#wrapper').css('paddingTop', parseInt(originalWrapperPaddingTop)+'px');
		  	jQuery('#wrapper').addClass('ready');
		  	jQuery('.header_style_wrapper').data('height', parseInt(originalWrapperPaddingTop));
		}, 400);
	}
	
	jQuery( window ).on( "orientationchange", function( event ) {
		window.setTimeout(function() {
			jQuery('.top_bar').removeClass('scroll');
			jQuery('.header_style_wrapper .above_top_bar').show();
		}, 100);
	
		window.setTimeout(function() {
			var originalWrapperPaddingTop = parseInt(jQuery('.header_style_wrapper').height());
	  	
		  	jQuery('#wrapper').css('paddingTop', parseInt(originalWrapperPaddingTop)+'px');
		  	jQuery('#wrapper').addClass('ready');
		  	jQuery('.header_style_wrapper').data('height', parseInt(originalWrapperPaddingTop));
		}, 300);
	});
});