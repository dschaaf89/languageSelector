$(document).ready(function () {
  $("#data").submit(function (event) {
    const name = $("#name").val();
    const hobby = parseInt($("#hobby").val());
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("#color").val();
    const book =$("input:radio[name=book]:checked").val();
    event.preventDefault();
    if (color === "Red") {
      $('#python').show();
      $('#csharp').hide();
      $('#java').hide();
    } else if (color === "Blue") {
      $('#java').show();
      $('#csharp').hide();
      $('#python').hide();
    } else {
      $('#csharp').show();
      $('#python').hide();
      $('#java').hide();
    }
    $(".name1").text(name)

    
  });
  
});
