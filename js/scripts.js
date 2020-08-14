$(document).ready(function () {
  $("#data").submit(function (event) {
    const name = $("#name").val();
    const hobby = parseInt($("#hobby").val());
    const animal = $("input:radio[name=animal]:checked").val();
    const color = $("#color").val();
    const book =$("input:radio[name=book]:checked").val();
    event.preventDefault();
    if( hobby = 2){
      $('#python').show();
    }
});
});