	

$(function () {
    $("#tabs").tabs();

   	
	$('button[value="msgpreference"]').click(function(e){
		
		msg=document.getElementById('message').value;
		
		alert(msg);
		
		username=localStorage['user'];
		
		var serverhost = 'http://127.0.0.1:8000';
		var url = serverhost + '/ajax/set_rankcategorywithmsg/?username='+ encodeURIComponent(username) + '&msg='+ encodeURIComponent(msg);
				
		console.log(url);
					 
				fetch(url)
						.then(response => response.json())
						.then(response => {
							console.log('Success:', response);
							alert(response.raw);
						  
							if(response.is_taken){
								
							  //localStorage['category']=response.rank_category;
							  window.location.href="login.html";
							  
							}
					 });	
		
	});
	
	$('button[value="preference"]').click(function(e){
		
		//alert("ok");
		
		var why="";
		if (document.getElementById('vehicle1').checked) {
			 why+="1";	
		} 
		if (document.getElementById('vehicle2').checked) {
				why+="2";
		 }
		
		if (document.getElementById('vehicle3').checked) {
				why+="3";
		 }
		 
		if (document.getElementById('vehicle4').checked) {
				why+="4";
		 } 
		
		
		var wk="";
		if (document.getElementById('whatkind1').checked) {
			 wk+="1";	
		} 
		if (document.getElementById('whatkind2').checked) {
				wk+="2";
		 }
		
		if (document.getElementById('whatkind3').checked) {
				wk+="3";
		 }
		 
		if (document.getElementById('whatkind4').checked) {
				wk+="4";
		 } 
		 
		 if (document.getElementById('whatkind5').checked) {
				wk+="5";
		 }
		 
		if (document.getElementById('whatkind6').checked) {
				wk+="6";
		 } 
		 
		 if (document.getElementById('whatkind7').checked) {
				wk+="7";
		 } 
		
		
		var yc="";
		if (document.getElementById('lessyc').checked) {
			 yc="1";	
		}else {
				yc="2";
		 }
		
		var fc="";
		if (document.getElementById('lessfc').checked) {
			 fc="1";	
		}else {
				fc="2";
		 }
		 
		var m="";
		 if (document.getElementById('lessm').checked) {
			 m="1";	
		}else {
				m="2";
		 }
		 
		var mc="";
		 if (document.getElementById('lessmc').checked) {
			 mc="1";	
		}else {
				mc="2";
		 }
		 
		 
		 
		//alert(why+wk+yc+fc+m+mc);
		
		username=localStorage['user'];
		
		var serverhost = 'http://127.0.0.1:8000';
		var url = serverhost + '/ajax/set_rankcategory/?username='+ encodeURIComponent(username) + '&why='+ encodeURIComponent(why)+
				'&wk='+encodeURIComponent(wk)+'&yc='+encodeURIComponent(yc)+'&fc='+encodeURIComponent(fc)+
				'&m='+encodeURIComponent(m)+'&mc='+ encodeURIComponent(mc);
				
		console.log(url);

					 
				fetch(url)
						.then(response => response.json())
						.then(response => {
							console.log('Success:', response);
							alert(response.raw);
						  
							if(response.is_taken){
								
							  //localStorage['category']=response.rank_category;
							  window.location.href="login.html";
							  
							}
					 });	
					 
					
		
		
		
	/*	firstname = document.getElementById("firstname").value;
		lastname = document.getElementById("lastname").value;
		username = document.getElementById("username").value;
		password = document.getElementById("password").value;
		gender = document.getElementById("gender").value;
		email = document.getElementById("email").value;
		institution = document.getElementById("institution").value;
		department = document.getElementById("department").value;
		level=document.getElementById("level").value;
		
		
		//alert("pkk" + firstname + lastname + username + password + gender + email + institution + department + level);
		
		if(username&&password){
		var serverhost = 'http://127.0.0.1:8000';
		var url = serverhost + '/ajax/validate_registration/?username='+ encodeURIComponent(username) + '&password='+ encodeURIComponent(password)+
				'&firstname='+encodeURIComponent(firstname)+'&lastname='+encodeURIComponent(lastname)+'&gender='+encodeURIComponent(gender)+
				'&email='+encodeURIComponent(email)+'&institution='+ encodeURIComponent(institution)+
				'&department='+encodeURIComponent(department)+'&level='+encodeURIComponent(level);
		console.log(url);

					 
				fetch(url)
						.then(response => response.json())
						.then(response => {
						  console.log('Success:', response);
						  alert(response.raw);
						  
						  if(response.is_taken){
							  window.location.href="login.html";
							  
						  }
						 
	
						  
		  
					 });	
					 
					 //window.location.href="login.html";
					 
		}
		else{
			alert("Enter Username and Password");
			
		}*/
		  
		  
		
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