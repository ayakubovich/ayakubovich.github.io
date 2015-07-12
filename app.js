$(document).ready(function(){

        var scrolling = false;
        var offset;

        responsive();

        $(document).scroll(function() {
          offset = $(document).scrollTop() + 20;
          $("ul#nav li").each(function() {
            if (!scrolling && offset + 100 > $("" + $(this).find("a").attr("href")).offset().top) {
              makeSelected($(this));
            }
          });
        });

        $(window).resize(function(){
          responsive();
        });

        $("ul#nav a").click(function(e) {
          if ($(this).parent().attr("id") == "nav")
            makeSelected($(this).next().next());
          else
            makeSelected($(this).parent());
          e.preventDefault();
          scrolling = true;
	  $("body").animate({scrollTop: $($(this).attr("href")).offset().top}, 500, function() { scrolling = false; } );
        });

        $("a#email").html("alex.yakubovich@gmail.com");
        $("a#email").attr("href","mailto:alex.yakubovich@gmail.com");

        $("table#photos td").hover(function(){
          $(this).find("span.photo-hover").slideDown();
        }, function() {
          $(this).find("span.photo-hover").slideUp();
        });

        function responsive() {
          if ($(window).width() < 550) {
            $("ul#nav").hide();
            $("#header").hide();
            $("body").css("padding","10px")
            $("p").css("width","100%")
	    $("img.screenshot").css("width","100%");
          } else {
            $("ul#nav").show();
            $("#header").show();
            $("body").css("padding","40px 40px 40px 200px")
	    $("img.screenshot").css("width","50%");
          }

        }

        function makeSelected (item) {
          $("ul#nav li").removeClass("selected");
          item.addClass("selected");
        }

        $("table#photos a").colorbox({top:100, speed: 0});
        $("a#screenshot-yammer").colorbox({top:10, speed:0});
        $("a#screenshot-commonsku").colorbox({top:10, speed:0});
        $("a#screenshot-geni").colorbox({iframe:true, innerWidth:600, innerHeight:344, top:10, speed:0});
      });