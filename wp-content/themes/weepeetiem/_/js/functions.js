$(document).ready(function(){

    //Remove <p></p> after after colums
    //$('.column').next('p').remove();

    //Last item
    $( ".widget-list div.item" ).last().addClass( "last" );

    $( ".gallery .gallery-item:nth-of-type(4n)" ).addClass( "last" );

    //Add Icon
    $( ".item li a" ).append( " <i class='icon-download-alt'></i>" );
    
    /* Rows */
    
    $(".list .item:nth-child(2n+1)").addClass('alt');
    
    /* FlexSlider Slider */
    
    $('.flexslider').flexslider({
        animation: "slide",
        //controlNav: false,
    });

    /* FlexSlider Carousel */
    
    $('.carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 256,
        controlNav: false,
        itemMargin: 10
    });
    
    /* Responsive Menu */

    $( ".menu > ul" ).addClass( "nav" );
    
    var ww = document.body.clientWidth;

    $(document).ready(function() {
        $(".nav li a").each(function() {
            if ($(this).next().length > 0) {
                $(this).addClass("parent");
            };
        })
        
        $(".toggleMenu").click(function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
            $(".nav").toggle();
        });
        adjustMenu();
    })

    $(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        adjustMenu();
    });

    var adjustMenu = function() {
        if (ww < 959) {
            $(".toggleMenu").css("display", "inline-block");
            if (!$(".toggleMenu").hasClass("active")) {
                $(".nav").hide();
            } else {
                $(".nav").show();
            }
            $(".nav li").unbind('mouseenter mouseleave');
            $(".nav li a.parent").unbind('click').bind('click', function(e) {
                // must be attached to anchor element to prevent bubbling
                e.preventDefault();
                $(this).parent("li").toggleClass("hover");
            });
        } 
        else if (ww >= 959) {
            $(".toggleMenu").css("display", "none");
            $(".nav").show();
            $(".nav li").removeClass("hover");
            $(".nav li a").unbind('click');
            $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
                // must be attached to li so that mouseleave is not triggered when hover over submenu
                $(this).toggleClass('hover');
            });
        }
    }
    
    /* Login box */

    // Show the login dialog box on click
    $('.login_button').on('click', function(e){
        $('body').prepend('<div class="login_overlay"></div>');
        $('form#login').fadeIn(500);
        $('div.login_overlay, form#login a.close').on('click', function(){
            $('div.login_overlay').remove();
            $('form#login').hide();
        });
        e.preventDefault();
    });

    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
        $('form#login p.status').show().text(ajax_login_object.loadingmessage);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #username').val(), 
                'password': $('form#login #password').val(), 
                'security': $('form#login #security').val() },
            success: function(data){
                $('form#login p.status').text(data.message);
                if (data.loggedin == true){
                    document.location.href = ajax_login_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });
    
    /* Placeholder for IE */
    
    if(!Modernizr.input.placeholder){

	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});
    }
  
});