$(document).ready(function() {
  $("#formOne").submit(function(event) {

    event.preventDefault();

    const uiName = $("input#name").val();

    $("name").text(uiName);

    $("#letter").show();

  });
});