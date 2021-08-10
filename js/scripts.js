$(document).ready(function() {
  $("button#bark").click(function(){
   $("ul#dog").prepend("<li>The dog says BARK!"); 
   $("ul#cat").prepend("<li> The cat says meow!");
  })
});