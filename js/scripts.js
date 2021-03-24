$(document).ready(function() {
  $("#formOne").submit(function(event) {

    event.preventDefault();

    const name = $("input#name").val();

    $("name").text(name);

    $("#letter").show();

  });
});