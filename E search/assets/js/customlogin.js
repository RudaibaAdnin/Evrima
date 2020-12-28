	

$(function () {
    $("#tabs").tabs();

    if ($('.owl-trusted').length) {
        $('.owl-trusted').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 4,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 2,
                    margin: 0
                },
                576: {
                    items: 3,
                    margin: 20
                },
                992: {
                    items: 4,
                    margin: 30
                }
            }
        });
    }
    if ($('.owl-testimonials').length) {
        $('.owl-testimonials').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            margin: 30,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 6000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 1,
                    margin: 30
                }
            }
        });
    }
	

	

	
	$('button[value="loginmain"]').click(function(e){
		
		
		//alert("ok");
			username = document.getElementById("username").value;
			password = document.getElementById("password").value;
			
			if(username&&password){
			
			
							//alert("pkk" + firstname + lastname + username + password + gender + email + institution + department + level);
							var serverhost = 'http://127.0.0.1:8000';	 
							var url = serverhost + '/ajax/validate_username/?username='+username+'&password='+password;
							//const YOUTUBE_API_KEY = "AIzaSyDmYIQV01j_faT2Q33uHnbnuDc5GhiZODU";
							//const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=car"+"&key="+YOUTUBE_API_KEY;
							fetch(url)
									.then(response => response.json())
									.then(response => {
									  console.log('Success:', response);
									  alert(response.raw);
									  if(response.is_taken){
										localStorage['user'] = username;
										//localStorage['category'] = 3;
										window.location.href="profile.html";
										  
									  }
									})
									.catch((error) => {
									  console.error('Error:', error);
									});
							

									
									
						    
							
			}
						
		  
		
	});
	
	
	
	
	

	
	
	
	
});




// Page loading animation
$(window).on('load', function () {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function () {
        setTimeout(function () {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $('.header-text').height();
    var header = $('header').height();

    if (scroll >= box - header) {
        $("header").addClass("background-header");
    } else {
        $("header").removeClass("background-header");
    }
});