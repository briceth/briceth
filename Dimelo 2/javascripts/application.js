$(document).ready(function(){
// question 1
  $('body').addClass('my-first-class');

// question 2
  $('a').attr('title', 'mon-title');
  $('a').text("see more");
  $('a').wrap("<div id='link_container'></div>");

// question 3
  if( $('input[name=checked]').is(':checked') ){
    $('.tab').addClass('active');
    }

  $(".tab").click(function () {
    $(this).toggleClass('active');
  });

  // question 4
  $(".inactive").click(function () {
    $(this).toggleClass('active').toggleClass('inactive');
  });

// question 5
  $('.trois').insertAfter('.deux');
});

