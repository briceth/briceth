$(document).ready(function() {

  var dejeuner = [
    {display: "Salade césar",value: "Salade césar"},
    {display: "Hamburger", value: "Hamburger"},
    {display: "Pâtes",value: "Pâtes"}];
  var diner = [
    {display: "Blanquette de veau",value: "Blanquette de veau"},
    {display: "Couscous royal",value: "Couscous royal"},
    {display: "Raclette",value: "Racette"}];

  $("#repas").change(function() {
    var select = $("#repas option:selected").val();
    switch (select) {
    case "déjeuner":
      plat(dejeuner);
      break;
    case "dîner":
      plat(diner);
      break;
    default:
    $("#city").empty();
    $("#city").append("<option>--Select--</option>");
    break;
    }
  });

  function plat(arr) {
    $("#plat").empty();
    $("#plat").append("<option>--Select--</option>");

    $(arr).each(function(i) {
        $("#plat").append("<option value=\"" + arr[i].value + "\">" + arr[i].display + "</option>")
      });
    }
});
