$(document).ready(function() {
$("form#data").submit(function(event) {
  const name = $("input#name").val();
  const hobby = $("#hobby").val();
  const animal = $("input:radio[name=animal]:checked").val();
  const color = $("#color").val();
  const book =$("input:radio[name=book]:checked").val();
  event.preventDefault();
});
});