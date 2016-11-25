$(document).ready(function() {
  $('#clickable-link').on('click', function() {
    $.ajax({
      url: "https://api.github.com/users/bacdol/repos",
      success: function(data) {
        $.each(data, function(index, element) {
          var nameUser = element.name;
          var loginUser =  element.owner.login;
          var avatarUrl =  element.owner.avatar_url;
          var ownerUrl =  element.owner.url

        $('#container').append($('<h2>' + nameUser + '</h2>' + '<h4>' + loginUser + '</h4>'));
        $('#container').append($('<img src="'+ avatarUrl +'" height="100">'));
        $('#container').append($('<a href="' + ownerUrl + '">' + 'allez voir' + '</a>'));
        });
      }
    });
  });
  $(document).ajaxComplete(function () {
    $('#ajax-message').append('Méthode ajaxComplete exécutée');
    console.log("https://api.github.com/users/bacdol/repos");
  });
});

