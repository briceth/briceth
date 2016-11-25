$(document).ready(function () {
  $("#un").change(function() {
    var select = $("#un option:selected").text();
    switch (select) {
      case "Premier choix":
        $('#deux').removeClass('hide');
        $('#quatre').addClass('hide');
        $('#trois').addClass('hide');
      break;
      case "deuxième choix":
        $('#trois').removeClass('hide');
        $('#deux').addClass('hide');
        $('#quatre').addClass('hide');
      break;
      case "Troisième choix":
        $('#quatre').removeClass('hide');
        $('#trois').addClass('hide');
      break;
    }
  });
});












