$(document).ready(function() {
  $("button#bark").click(function(){
   $("ul#dog").prepend("<li>The dog says BARK!</li>"); 
   $("ul#cat").prepend("<li>The cat says meow!</li>");
   $("ul#dog").children("li").first().click(function() {
    const image = document.createElement('img');
    image.src = 'img/dog.jpg';
    document.querySelector('ul#dog').appendChild(image);
     $(this).remove();
   })
   $("ul#cat").children("li").first().click(function() {
     const image = document.createElement('img');
     image.src = 'img/cat.jpg';
     document.querySelector('ul#cat').appendChild(image);
    $(this).remove();
  })
  })
});