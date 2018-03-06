function isRetina() {
	var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					  (min--moz-device-pixel-ratio: 1.5),\
					  (-o-min-device-pixel-ratio: 3/2),\
					  (min-resolution: 1.5dppx)";
 
	if (window.devicePixelRatio > 1)
		return true;
 
	if (window.matchMedia && window.matchMedia(mediaQuery).matches)
		return true;
 
	return false;
};
function isApple() {
	var platform = navigator.platform;

	if (platform == "MacIntel"
		|| platform == "iPhone"
		|| platform == "iPod"
		|| platform == "iPad") {
		return true;
	}
	else return false;
}
function getScrollbarWidth() {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  inner.style.width = '100%';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var widthWithoutScrollbar = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthWithScrollbar = inner.offsetWidth;
  document.body.removeChild(outer);

  return (widthWithoutScrollbar - widthWithScrollbar);
}
var BrowserDetect = { 
  init: function () { 
  this.browser = this.searchString(this.dataBrowser) || "An unknown browser"; 
  this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version"; 
  this.OS = this.searchString(this.dataOS) || "an unknown OS"; 
  }, 
  searchString: function (data) { 
  for (var i=0;i<data.length;i++) { 
  var dataString = data[i].string; 
  var dataProp = data[i].prop; 
  this.versionSearchString = data[i].versionSearch || data[i].identity; 
  if (dataString) { 
  if (dataString.indexOf(data[i].subString) != -1) 
  return data[i].identity; 
  } 
  else if (dataProp) 
  return data[i].identity; 
  } 
  }, 
  searchVersion: function (dataString) { 
  var index = dataString.indexOf(this.versionSearchString); 
  if (index == -1) return; 
  return parseFloat(dataString.substring(index+this.versionSearchString.length+1)); 
  }, 
  dataBrowser: [ 
  { 
  string: navigator.userAgent, 
  subString: "Chrome", 
  identity: "Chrome" 
  }, 
  { string: navigator.userAgent, 
  subString: "OmniWeb", 
  versionSearch: "OmniWeb/", 
  identity: "OmniWeb" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "Apple", 
  identity: "Safari", 
  versionSearch: "Version" 
  }, 
  { 
  prop: window.opera, 
  identity: "Opera", 
  versionSearch: "Version" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "iCab", 
  identity: "iCab" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "KDE", 
  identity: "Konqueror" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "Firefox", 
  identity: "Firefox" 
  }, 
  { 
  string: navigator.vendor, 
  subString: "Camino", 
  identity: "Camino" 
  }, 
  {  
  /* For Newer Netscapes (6+) */ 
  string: navigator.userAgent, 
  subString: "Netscape", 
  identity: "Netscape" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "MSIE", 
  identity: "Internet Explorer", 
  versionSearch: "MSIE" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "Gecko", 
  identity: "Mozilla", 
  versionSearch: "rv" 
  }, 
  {  
  /* For Older Netscapes (4-) */ 
  string: navigator.userAgent, 
  subString: "Mozilla", 
  identity: "Netscape", 
  versionSearch: "Mozilla" 
  } 
  ], 
  dataOS : [ 
  { 
  string: navigator.platform, 
  subString: "Win", 
  identity: "Windows" 
  }, 
  { 
  string: navigator.platform, 
  subString: "Mac", 
  identity: "Mac" 
  }, 
  { 
  string: navigator.userAgent, 
  subString: "iPhone", 
  identity: "iPhone/iPod" 
  }, 
  { 
  string: navigator.platform, 
  subString: "Linux", 
  identity: "Linux" 
  } 
  ] 

};
var counter = 0;
$(window).scroll(function() {
	if ($(window).scrollTop() > 320) {
		$(".dropup").fadeIn("slow");
	} else {
		$(".dropup").fadeOut("fast");
	}
});
$(document).ready(function() {
	BrowserDetect.init();
	if ($(window).width() > 829) {
		$(".dropup").css("right", ($(".content_wrapper").offset().left + 12 + "px"));
		$(".dry_chartering_description p span").html("<br/>");
	} else {
		$(".dropup").css("right", "20px");
		$(".dry_chartering_description p span").html("");
	}
	if ($(window).scrollTop() > 320) {
		$(".dropup").fadeIn("slow");
	} else $(".dropup").fadeOut("fast");
	
	if ($(window).width() > 649) {
		$("header p span").html("<br/>");
	} else {
		$("header p span").html("");
	}
	if ($(window).width() > 817) {
		$("footer p span").html("<br/>");
	} else $("footer p span").html("");
	if (BrowserDetect.browser != "MSIE" || BrowserDetect.browser != "Internet Explorer") {
		if ($(window).width() < 650) {
			$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
		} else $("div.search_options").css("marginLeft", "");
	} else {
		if ($(window).width() < (650 - getScrollbarWidth())) {
			$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
		} else $("div.search_options").css("marginLeft", "");
	}
	if (isRetina() && isApple()) {
		$(".fa-chevron-right").css("left", "-4px");
		if ($(window).width() < (650 - getScrollbarWidth())) {
			$(".change_values").css({
    			top: "-45px",
    			backgroundColor: "red",
			});
			$(".search-row .input-group-btn").css({
				position: "relative",
				left: ($(window).width() - 101)+"px"
			});
		}
	}
});
$(window).resize(function() {
	if ($(window).width() > 829) {
		$(".dropup").css("right", ($(".content_wrapper").offset().left + 12 + "px"));
		$(".dry_chartering_description p span").html("<br/>");
	} else {
		$(".dropup").css("right", "20px");
		$(".dry_chartering_description p span").html("");
	}
	if (BrowserDetect.browser != "MSIE" || BrowserDetect.browser != "Internet Explorer") {
		if ($(window).width() < 650) {
			$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
		} else $("div.search_options").css("marginLeft", "");
	} else {
		if ($(window).width() < (650 - getScrollbarWidth())) {
			$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
			if (isRetina()) {
				$(".dry_chartering_description p span").html("");
			}
		} else $("div.search_options").css("marginLeft", "");
	}
	if ($(window).width() > 649) {
		$("header p span").html("<br/>");
	} else {
		$("header p span").html("");
	}
	if ($(window).width() > 817) {
		$("footer p span").html("<br/>");
	} else $("footer p span").html("");
	if (isRetina() && isApple()) {
		if ($(window).width() < (650 - getScrollbarWidth())) {
			$(".search-row .input-group-btn").css({
				left: ($(window).width() - 101)+"px"
			});
		}
	}
});
$(".dropup label").click(function() {
	++counter;
	if (counter%2 && counter > 0) {
		$(this).removeClass("unclicked");
		$("li.dollar").animate({top: "120px"}, 250);
		$("li.call").animate({top: "20px"}, 250);
		
	} else {
		$(this).addClass("unclicked");
		$("li.call").animate({
			top: ""
	},250);
		$("li.dollar").animate({top: ""}, 250);
	}
});
$(".dropup li").hover(function() {
	if ($(this).prop("className") == "img-circle dollar") {
		$("span.menu_dollar").fadeIn("slow");
	} else if ($(this).prop("className") == "img-circle call") {
		$("span.menu_call").fadeIn("slow");
	}
}, function() {
	$("ul.hidden_button span").fadeOut();
});
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: 0,
    autoplay: true,
    nav:false,
    loop:true,
    dots: true,
    dotsEach: true,
    items:4,
    autoplayTimeout: 1500,
    autoWidth: false,
    startPosition: 1,
    responsive: {
    	320: {
    		items: 2
    	},
    	768: {
    		items: 4
    	},
    	1920: {
    		items: 4
    	}
    }
});

$("button.change_values").click(function() {
	//var from_value = $(this).parent().parent().children(".from").attr("value");
	var from_selector = $(this).parent().parent().children(".from");
	var to_selector = $(this).parent().parent().children(".to");
	var from_value = from_selector.val();
	var to_value = to_selector.val();
	from_selector.val(to_value);
	to_selector.val(from_value);
});