$(document).ready(function() {
$("form#data").submit(function(event) {
  const name = $("input#name").val();
  const hobby = $("#hobby").val();
  const animal = $("input:radio[name=animal]:checked").val();
  event.preventDefault();
});
});