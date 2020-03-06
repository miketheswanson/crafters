
$( document ).ready(function() {
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
});

$( document ).ready(function() {
  var btn = $('#button');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop : 0},1200);
  });
  });
  




$(document).ready(function() {
    $('.menu').on('click', function(ev) {
      $('.menu').toggleClass('active');
    })
  });


  (function($) {
    $.fn.timeline = function() {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img"
      };
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" +
          selectors.item
            .first()
            .find(selectors.img)
            .attr("src") +
          ")"
      );
      var itemLength = selectors.item.length;
      $(window).scroll(function() {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function(i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item
                  .last()
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 40 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" +
                $(this)
                  .find(selectors.img)
                  .attr("src") +
                ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };
  })(jQuery);
  
  $("#timeline-1").timeline();

  

  window.onload = play();
document.getElementById('tryAgain').addEventListener('click', () => { play() })

function play() {
	var blue = '#fff';
	var l = Snap('#logo');
	var p = l.select('path');
  l.clear();
	l.append(p);

	p.attr({
		fill: blue,
		stroke: '#333',
	});

	setTimeout( function() {
		// modify this one line below, and see the result !
		var logoTitle = 'WebCrafters';
		var logoRandom = '';
		var logoTitleContainer = l.text(0, '98%', '');
		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		logoTitleContainer.attr({
      fontSize: 200,
      fill:'#ec4d36',
			fontFamily: 'permanent',
			fontWeight: '100'
		});

		function generateRandomTitle(i, logoRandom) {
			setTimeout( function() {
				logoTitleContainer.attr({ text: logoRandom });
			}, i*70 );
		}

		for( var i=0; i < logoTitle.length+1; i++ ) {
			logoRandom = logoTitle.substr(0, i);
			for( var j=i; j < logoTitle.length; j++ ) { 
				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
			}
			generateRandomTitle(i, logoRandom);
			logoRandom = '';
		}

	}, 500 );

}


$( document ).ready(function() {
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
});
