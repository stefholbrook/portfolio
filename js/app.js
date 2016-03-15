
//toggle menu
   $(document).ready(function($) {
    $('.toggle-nav').click(function(e) {
    $('.toggle-nav').toggleClass('active');
    $('.menu ul').toggleClass('active');
  
    e.preventDefault();
});
  
});
