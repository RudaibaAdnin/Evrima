//chrome.windows.create({url : "userinfo.html",type: "popup", height: 200, width:200});
/*chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({
    url: chrome.runtime.getURL("index.html")
  }, function(win) {
    // win represents the Window object from windows API
    // Do something after opening
  });
});*/

var mooc_click_count=0;
var youtube_click_count=0;
var forum_click_count=0;
var serverhost = 'http://127.0.0.1:8000';


function mooc_click(heading){
	mooc_click_count++;
	localStorage['mooc_click_count']=mooc_click_count;
	console.log("mooc_click_count==>"+mooc_click_count);
	store_search_heading(heading);
	
	
}	
function youtube_click(heading){
	youtube_click_count++;
	localStorage['youtube_click_count']=youtube_click_count;
	console.log("youtube click count==>"+youtube_click_count);
	store_search_heading(heading);
	
	
}
function forum_click(heading){
	forum_click_count++;
	localStorage['forum_click_count']=forum_click_count;
	console.log("forum_click_count==>"+forum_click_count);
	
	store_search_heading(heading);
}
	
function store_search_heading(heading){
	console.log(heading);
	
	var username=localStorage['user'];	 
	var url = serverhost + '/ajax/store_search_headings/?username='+username+'&heading='+heading;
	fetch(url)
		.then(response => response.json())
		.then(response => {
		  console.log('Success:', response);
		  //alert(response.raw);
		})
		.catch((error) => {
		  console.error('Error:', error);
		});	

	
	
}
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
	

	if (localStorage['user']=="invalid"|| localStorage['user']==undefined )
	{
	document.getElementById("loginpage").innerHTML +='<a href="login.html">login</a>';
	document.getElementById("signuppage").innerHTML +='<a href="signup.html">Sign Up</a>';
	}else{
		document.getElementById("profile").innerHTML += '<a class="nav-link" href="profile.html">'+localStorage['user']+'</a>';
		document.getElementById("navbuttons").innerHTML +='<button id="logout" type="submit" value="logout">logout</button>';
	}
	
	$('button[value="logout"]').click(function(e){
	
		
		localStorage['user']="invalid";
		localStorage['category'] = 1;
		window.location.href="index.html";
		
	});
	
	function searchYoutube(st){
		
		
		
		const YOUTUBE_API_KEY = "AIzaSyDmYIQV01j_faT2Q33uHnbnuDc5GhiZODU";
		const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q="+st+"&key="+YOUTUBE_API_KEY;
		//alert("keyword==" + url);
		//https://www.youtube.com/watch?v=
		fetch(url)
			.then(response => response.json())
			.then(data => {
			  //console.log(data.items[0].id.videoId);
			  //alert(data.items[0].snippet.title);
			  //alert(data.items[0].link);
		
			  
			  var i=0;
			  for(i=0;i<data.items.length;i++){
			  document.getElementById("items").innerHTML += " <div class=\"col-md-12\">"+
															"<div class=\"feature-item\"><img height=\"50px\" src=\"assets/images/youtubelogobig.png\">"+
															"<a href=\"https://www.youtube.com/watch?v="+data.items[i].id.videoId+"\"target=\"_blank\" onclick=\"youtube_click('"+data.items[i].snippet.title+"')\"><h4>"+
															data.items[i].snippet.title+"</h4></a><p>"+data.items[i].snippet.description+"</p></div></div>"; 
			  }
			  

		 })
		  .catch(function(error) {
				console.log(error);
			});
	 
			 
			 
	}
	

	function searchForum(st){
		
		
		
		const url_forum="https://www.googleapis.com/customsearch/v1?key=AIzaSyDmYIQV01j_faT2Q33uHnbnuDc5GhiZODU&cx=db4a7d6e5558c914f&q="+st;
					//https://www.googleapis.com/customsearch/v1?key=AIzaSyDmYIQV01j_faT2Q33uHnbnuDc5GhiZODU&cx=db4a7d6e5558c914f&q=cars
	
				fetch(url_forum)
					.then(response => response.json())
					.then(data => {
					 
					  var i=0;
					  for(i=0;i<data.items.length;i++){
					  document.getElementById("items").innerHTML += " <div class=\"col-md-12\">"+
																	"<div class=\"feature-item\"><img height=\"60px\" src=\""+data.items[i].pagemap.cse_image[0].src+
																	"\"><a href=\""+data.items[i].link+"\" target=\"_blank\" onclick=\"forum_click('"+data.items[i].title+"')\"><h4>"+data.items[i].title+"</h4></a><p>"+data.items[i].snippet+"</p></div></div>"; 
					  }
					 
					 
				})
		  .catch(function(error) {
				console.log(error);
			});
			 
			 
	}
	
	function searchMooc(st){
		
		
		
		const url_google="https://www.googleapis.com/customsearch/v1?key=AIzaSyD375iPupbZFkfVShytLJfSmhjfyFsRwCQ&cx=ec4d1d0aabbf51f23&q="+st;
		//https://www.googleapis.com/customsearch/v1?key=AIzaSyD375iPupbZFkfVShytLJfSmhjfyFsRwCQ&cx=db4a7d6e5558c914f&q=cars
		
		fetch(url_google)
            .then(response => response.json())
            .then(data => {
			  
			 var i=0;
			  for(i=0;i<data.items.length;i++){
			  document.getElementById("items").innerHTML += " <div class=\"col-md-12\">"+
															"<div class=\"feature-item\"><img height=\"60px\" src=\""+data.items[i].pagemap.cse_image[0].src+
			                                                "\"><a href=\""+data.items[i].link+"\" target=\"_blank\" onclick=\"mooc_click('"+data.items[i].title+"')\"><h4>"+data.items[i].title+"</h4></a><p>"+data.items[i].snippet+"</p></div></div>"; 
			  }
			  
			  //localStorage['mdata'] = data.items[0].id.videoId
			  
					

          })
		  .catch(function(error) {
				console.log(error);
			});
		  
			
			 
			 
	}
	
	function sleep(milliseconds) {
		  const date = Date.now();
		  let currentDate = null;
		  do {
			currentDate = Date.now();
		  } while (currentDate - date < milliseconds);
	}
	
	function store_previous_search_history(){
		
		var username=localStorage['user'];	 
		var url = serverhost + '/ajax/store_clicks_keyword/?username='+username+'&mooc_clicks='+localStorage['mooc_click_count']+
		'&youtube_clicks='+localStorage['youtube_click_count']+
		'&forum_clicks='+localStorage['forum_click_count']+'&keyword='+localStorage['keyword'];
		
		console.log(url);
		fetch(url)
		.then(response => response.json())
		.then(response => {
		  console.log('Success:', response);
		  //alert(response.raw);
		})
		.catch((error) => {
		  console.error('Error:', error);
		});	
		
		mooc_click_count=0;
		youtube_click_count=0;
		forum_click_count=0;
		
		localStorage['mooc_click_count']=0;
		localStorage['youtube_click_count']=0;
		localStorage['forum_click_count']=0;
		
		
		
	}
	
	$('input[value="Search Now"]').click(function(e){
		
		//alert("searching");
		//var sender = $(this).closest('tr').find('#name').text();
		//var subject = $(this).closest('tr').find('#mail').text();	
		//var message = $(this).closest('tr').find('#message').text();
		
		store_previous_search_history();
		
		document.getElementById("items").innerHTML="<div class=\"col-md-12\"><div class=\"section-heading\"><h2>Search Results</h2></div></div>";
		value = document.getElementById("keyword").value;
		//document.getElementById("link1").innerHTML += "ok"; 
		var res = value.split(" ");
		  i=0;
		  var st="";

		if(res.length>1)
		{
			for(i=0;i<res.length-1;i++)
			{
				st+=res[i]+"%";
			}
		  st=st+res[res.length-1];
		}
		else{
			st=value;
		}
		
		localStorage['keyword']=st;
		
		if(localStorage['category']==5){
			searchForum(st);
			sleep(2000);
			searchMooc(st);
			sleep(2000);
			searchYoutube(st);
		}
		
		else if(localStorage['category']==2){
			console.log("category==>"+localStorage['category']);
			
			searchYoutube(st);
			sleep(2000);
			searchForum(st);
			sleep(2000);
			searchMooc(st);
		
		}
		else if(localStorage['category']==1){
			console.log(localStorage['category']);
			
			searchYoutube(st);
			sleep(2000);
			searchMooc(st);
			sleep(2000);
			searchForum(st);
		
		
		}
		
		
		else if(localStorage['category']==4){
		
			console.log(localStorage['category']);		
			searchMooc(st);
			sleep(2000);
			searchForum(st);
			sleep(2000);
			searchYoutube(st);
		}
		
		else if(localStorage['category']==3){
		
			console.log(localStorage['category']);		
			searchMooc(st);
			sleep(2000);
			searchYoutube(st);
			sleep(2000);
			searchForum(st);
			
		}
		else{
		
		
			searchForum(st);
			sleep(2000);
			searchYoutube(st);
			sleep(2000);
			searchMooc(st);		
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