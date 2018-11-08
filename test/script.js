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

    function myFunction(){
      var input, filter, ul, li, a, i;
   input = document.getElementById('myInput');
   filter = input.value.toUpperCase();
   ul = document.getElementById("myUL");
   li = ul.getElementsByTagName('li');

   // Loop through all list items, and hide those who don't match the search query
   for (i = 0; i < li.length; i++) {
       a = li[i].getElementsByTagName("a")[0];
       if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
           li[i].style.display = "";
       } else {
           li[i].style.display = "none";
       }
   }
}
