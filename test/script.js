    $(document).ready(function(){
      function openMenu() {
        $(".menu-trigger").addClass("open");
        $(".navigation").addClass("nav-open");
        $(".col").addClass("c-in");
      }
      function closeMenu() {
        $(".menu-trigger").removeClass("open");
        $(".navigation").removeClass("nav-open");
        $(".col").removeClass("c-in");
      }
      $(".menu-trigger").click(function(){
        if($(".menu-trigger").hasClass("open")) {
          closeMenu();
        }
        else {
          openMenu();
        }
      });
      $("main").click(function(){
        if($(".menu-trigger").hasClass("open")) {
          closeMenu();
        }
      });
      $(document).keyup(function(e) {
           if (e.keyCode == 27) {
             closeMenu();
          }
      });
    });
