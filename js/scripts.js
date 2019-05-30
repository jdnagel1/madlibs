$(document).ready(function() {
  $("button#catbtn").click(function() {
    $("ul#catclass").prepend("<li>Pur</li>");
  });

  $("button#dogbtn").click(function() {
    $("ul#dogclass").prepend("<li>Woof</li>");
  })
});
