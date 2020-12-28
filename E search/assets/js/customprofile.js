	
var serverhost = 'http://127.0.0.1:8000';
$().ready(function() {
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
	
	
	
	if (localStorage['user']=="invalid"){
		
	document.getElementById("loginpage").innerHTML +='<a href="login.html">login</a>';
	document.getElementById("signuppage").innerHTML +='<a href="signup.html">Sign Up</a>';

	}
	else{
		
		
		document.getElementById("profile").innerHTML += '<a class="nav-link" href="profile.html">'+localStorage['user']+'</a>';
		document.getElementById("navbuttons").innerHTML +='<button id="logout" type="submit" value="logout">logout</button>';
		//document.getElementById("items_list").innerHTML +=  '<button id="ok" type="submit" value="update">logout</button>';
		
		username= localStorage['user'];
		
		line='<img src="'+username+'.png" height="600px" width="600x">';
		console.log(line);
		
		document.getElementById("wordcloud").innerHTML+=line;
		
		//var serverhost = 'http://127.0.0.1:8000';
		var url = serverhost + '/ajax/get_userdetails/?username='+username;
				//const YOUTUBE_API_KEY = "AIzaSyDmYIQV01j_faT2Q33uHnbnuDc5GhiZODU";
				//const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=car"+"&key="+YOUTUBE_API_KEY;
			   fetch(url)
						.then(response => response.json())
						.then(response => {
						  console.log('Success:', response);
						  //alert(response.raw);
						  
						  if(response.is_taken){
							  
							localStorage['category'] = response.rank_category;
							console.log(localStorage['category']);
				           /* document.getElementById("items_list").innerHTML +=        '<h6> First Name </h6>'+
																	'<input name="firstname" type="text" id="firstname" value="'+response.first_name+'">'+
																	'<button type="submit" id="form-submit" value="update_firstname">Update</button>'+
																	'<h6> Last Name </h6>'+
																	'<input name="lastname" type="text" id="lastname"  value="'+response.last_name+'">'+
																	'<button type="submit" id="form-submit" value="update_lastname">Update</button>'+
												 
																	'<h6> Email Address</h6>'+
																	'<input name="email" type="Email" id="email"  value="'+response.email+'">'+
																	'<button id="logout" type="submit" value="update_email">logout</button>'+
												
												  
																	'<h6>Institution</h6>'+
																	'<input name="institution" type="text" id="institution" value="'+response.institution+'">'+
																	'<button type="submit" id="form-submit" value="update_institution">Update</button>'+
																	'<h6>Department </h6>'+
																	'<input name="department" type="text" id="department" value="'+response.department+'">'+
																	'<button type="submit" id="form-submit" value="update_department">Update</button>'+
																	'<h6>Level</h6>' +
																	'<input name="level" type="text" id="level" value="'+response.level+'">'+
																	'<button type="submit" id="form-submit" value="update_level">Update</button>';*/
								
							document.getElementById("firstnameid").innerHTML ='<input name="firstname" type="text" id="firstname" value="'+response.first_name+'">';
							document.getElementById("lastnameid").innerHTML ='<input name="lastname" type="text" id="lastname"  value="'+response.last_name+'">';
							document.getElementById("emailid").innerHTML = '<input name="email" type="Email" id="email"  value="'+response.email+'">';
							document.getElementById("institutionid").innerHTML = '<input name="institution" type="text" id="institution" value="'+response.institution+'">';
							document.getElementById("departmentid").innerHTML = '<input name="department" type="text" id="department" value="'+response.department+'">';
							document.getElementById("levelid").innerHTML = '<input name="level" type="text" id="level" value="'+response.level+'">';
							  
							  
							  
							  
						  }
						  else{
							  alert("Login again");
							  window.location.href="login.html";
							  
						  }
						})
						.catch((error) => {
						  console.error('Error:', error);
						  
						});	
						
				
	}
	
	$('button[value="logout"]').click(function(e){
	
		
		localStorage['user']="invalid";
		localStorage['category'] = 1;
		window.location.href="index.html";
		
		
		
	});
	
	$('button[value="update_firstname"]').click(function(e){
	
			firstname = document.getElementById("firstname").value;
			
			//alert("firstname" + firstname);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_firstname/?username='+username+'&firstname='+firstname;
			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);
					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
	});
	
	$('button[value="update_lastname"]').click(function(e){
	
			lastname = document.getElementById("lastname").value;
			
			//alert("lastname" + lastname);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_lastname/?username='+username+'&lastname='+lastname;
			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);
					
					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
	});
	
	$('button[value="update_email"]').click(function(e){
	
			email = document.getElementById("email").value;
			
			//alert("email" + email);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_email/?username='+username+'&email='+email;
		
			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);
					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
	});
	
	$('button[value="update_institution"]').click(function(e){
	
			institution = document.getElementById("institution").value;
			
			//alert("institution" + institution);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_institution/?username='+username+'&institution='+institution;

			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);
					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
	});
	
	$('button[value="update_department"]').click(function(e){
	
			department = document.getElementById("department").value;
			
			//alert("department" + department);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_department/?username='+username+'&department='+department;
	
			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);
	
					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
	});
	
	$('button[value="update_level"]').click(function(e){
	
			level = document.getElementById("level").value;
			
			//alert("level" + level);				
			//var serverhost = 'http://127.0.0.1:8000';	 
			var url = serverhost + '/ajax/update_level/?username='+username+'&level='+level;

			fetch(url)
					.then(response => response.json())
					.then(response => {
					  console.log('Success:', response);
					  alert(response.raw);

					})
					.catch((error) => {
					  console.error('Error:', error);
					});	

		
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