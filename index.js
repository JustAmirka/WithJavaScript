$(document).ready(function() {
    $(".white").click(function() {
        $("#gradient").css("background-color","#dcdcdc"); //edit, body must be in quotes!
        $("p").css("color", "#1c222a");
        $("h4").css("color", "#1c222a");
        $("#contact").css("border-top", "10px solid #1c222a");
        $("#title").css("border-bottom", "10px solid #1c222a");
    });
});
$(document).ready(function() {
    $(".black").click(function() {
        $("#gradient").css("background-color","#1c222a"); //edit, body must be in quotes!
        $("p").css("color", "#dcdcdc");
        $("h4").css("color", "#dcdcdc");
        $("#contact").css("border-top", "10px solid #dcdcdc");
        $("#title").css("border-bottom", "10px solid #dcdcdc");
    });
});
$(document).ready(function() {
    $(".main").click(function() {
        $("#gradient").css("background-color","#edb021"); //edit, body must be in quotes!
        $("p").css("color", "#6a655d");
        $("h4").css("color", "#6a655d");
        $("#contact").css("border-top", "10px solid #dcdcdc");
        $("#title").css("border-bottom", "10px solid #dcdcdc");
    });
});



$(document).ready(function(){
 
      $("p").toggle();

  });
  $("h4").click(function(){
    $("p").toggle(1000);
  });
  