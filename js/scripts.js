$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const uiName = $("input#name").val();
    const uiName2 = $("input#name2").val();

    event.preventDefault();

    $(".name").text(uiName);
    $(".name2").text(uiName2);
    
    $("#letter").show();
  });
});