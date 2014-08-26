 $(document).ready(function(){

    /*------- Parallax BG -------*/
    $(window).resize(function(){
        if ($(window).width() >= 768){
            var $window = $(window);

            $('section[data-type="background"]').each(function(){
                var $bgobj = $(this); // assigning the object

                $(window).scroll(function() {
                    var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

                    // Put together our final background position
                    var coords = '50% '+ yPos + 'px';

                    // Move the background
                    $bgobj.css({ backgroundPosition: coords });
                }); 
            }); 
        }
    });
 
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#home').css({'height': '500px'});
        $('.contact-outer').css({'height': '600px'});
    }
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('#video-background').hide();
        $('.tint').css({'background-color':'none', 'background':'url(../images/backgrounds/bubble.jpg);', 'opacity':'1', 'background-size': '100% 100%'});
        $('#education').css({'background':'none', 'background-color': '#28384B'});
    }
     if( /iPhone|iPod|iPad/i.test(navigator.userAgent) ) {
        $('#education').css({'background':'none', 'background-color': '#28384B'});
    }
 
    /*------- Home Logo transaction -------*/
    $('.main-logo').mouseenter(function(){
        $(this).fadeOut(function(){
            $(this).attr('src','../images/logo/millingabani_white.png').fadeIn();
        });
    });
    
    $('.main-logo').mouseleave(function(){
        $(this).fadeOut(function(){
            $(this).attr('src','../images/logo/mg_white.png').fadeIn();  
        });
    });  
    
    /*------- nav-bar transaction -------*/
    $(window).scroll(function () {
        //console log determines when nav is fixed
        if ($(window).scrollTop() >= 400) {
            $('.navbar').addClass('navbar-inverse');
            $('.navbar').removeClass('navbar-default');
        }

        if ($(window).scrollTop() < 400) {
            $('.navbar').removeClass('navbar-inverse');
            $('.navbar').addClass('navbar-default');
        }
    });
        
    /*------- scroll effects-------*/
    	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'70%'});
		
    /*------------- Skill bars animation -------------*/    
    
    $('.skills-bar').waypoint(function(){var $skill = $(this).data('percent');$(this).animate({width: $skill},1000);},{offset:'70%'});
        
        /*------------- Bat Signal-------------*/    
            
        $('.signal').waypoint(function(){
             $(this).css({'opacity': '0'});
        }, {offset:'100%'});

           
        $('.signal').waypoint(function(){
            $(this).delay(500).animate({'opacity': '.7'},0);
            $(this).animate({'opacity': '.3'},50);
            $(this).animate({'opacity': '.5'},1000);
            $(this).animate({'opacity': '.8'},2000);
        },{offset:'40%'});

	   }
    
    /*------------- Navbar Brand transaction -------------*/
    $('.quote-outer').waypoint(function(){
        $('.navbar-brand').find('img').attr('src','images/logo/mg_white_small.png');
    },{offset:'40%'});
    
     $('.main-logo').waypoint(function(){
        $('.navbar-brand').find('img').attr('src','images/logo/millingabani_white.png');
    },{offset:'0%'});

    /*------------ love icons hover ----------*/
    $('.love-icons').mouseenter(function(){
        var iconname = $(this).data('name');
        $(this).animate({'top': '-10px'},200);
        $('.love-inner-inner').find('.remove-things').text('');
        $('.love-inner-inner').find('.add-name').text(iconname);
    });
    $('.love-icons').mouseleave(function(){
        var iconname = $(this).data('name');
        $(this).animate({'top': '0px'},50);
    });
 
    /*------------ social icons hover ----------*/
        $('.full-logo').mouseenter(function(){
        $(this).animate({'opacity': '1'},0);
    });
    $('.full-logo').mouseleave(function(){
        $(this).animate({'opacity': '.3'},0);
    });

     /*------------ Smooth Scrolling----------*/
 
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
    		
    $(window).resize(function(){
	if ($(window).width() <= 768){
        
        $('.skills-bar').on('show',function(){
        var $skill = $(this).data('percent');
        $(this).animate({width: $skill},1000);
	});	
        $('.skills-bar').trigger('show');    
    }
});
        $(window).resize();
});


