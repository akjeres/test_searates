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
  const outer = document.createElement('div');
  const inner = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  inner.style.width = '100%';
  outer.appendChild(inner);
  document.body.appendChild(outer);
  const widthWithoutScrollbar = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  const widthWithScrollbar = inner.offsetWidth;
  document.body.removeChild(outer);

  return (widthWithoutScrollbar - widthWithScrollbar);
}
var counter = 0;
$(window).scroll(function() {
	if ($(window).scrollTop() > 320) {
		$(".dropup").fadeIn("slow");
	} else {
		$(".dropup").fadeOut("fast");
	}
});
$(document).ready(function() {
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
	
	if ($(window).width() > 550) {
		$("header p span").html("<br/>");
	} else $("header p span").html("");
	if ($(window).width() > 817) {
		$("footer p span").html("<br/>");
	} else $("footer p span").html("");
	if ($(window).width() < (650 - getScrollbarWidth())) {
		$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
		if (isRetina() && isApple()) {
			$(".dry_chartering_description p span").html("");
			$(".change_values").css({
    			backgroundColor: "red",
    			top: "-45px"
			});
			$(".fa-chevron-right").css("left", "-4px");
			alert("Test13");
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
	if ($(window).width() < (650 - getScrollbarWidth())) {
		$("div.search_options").css("marginLeft", ($(window).width() - 173)/2 + "px");
		if (isRetina()) {
			$(".dry_chartering_description p span").html("");
		}
	} else $("div.search_options").css("marginLeft", "");
	if ($(window).width() > 550) {
		$("header p span").html("<br/>");
	} else $("header p span").html("");
	if ($(window).width() > 817) {
		$("footer p span").html("<br/>");
	} else $("footer p span").html("");
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

