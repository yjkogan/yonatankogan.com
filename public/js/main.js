$(function() {

  $(".screen").click(function(e) {
    selectScreenWithName($(this).attr('name'));
  });

  $("a").click(function(e) {
    if ($(this).attr('disabled')) {
      e.preventDefault();
    }
  })

  $('.screen').bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
    var $a = $(this).find('a');
    // Only enable the link once the transition to the front has finished
    if(!$(this).hasClass('background') && $a.attr('disabled')) {
      $a.removeAttr('disabled');
    }
  });

  $("body").keydown(function(e) {
    var $screens = $(".screen");
    var current = undefined;
    for(var i=0; i < $screens.length; i++) {
      if (!$screens.eq(i).hasClass('background')) {
        current = i;
        break;        
      }
    }
    var next = current;
    if(e.keyCode == 37) { // left
      next = ((current - 1) + $screens.length) % $screens.length;
    }
    else if(e.keyCode == 39) { // right
      next = (current + 1) % $screens.length;
    }
    selectScreenWithName($screens.eq(next).attr('name'));
  });

  // Initialize
  var timeoutID = window.setTimeout(function() {
    selectScreenWithName('projects');
    }, 1000);

});

function selectScreenWithName(name) {
    var $selected = $('[name=' + name + ']');
    $(".screen").each(function(index) {
      if ($(this).attr('name') === $selected.attr('name')) {
        $(this).removeClass('background');
      } else {
        $(this).find('a').attr('disabled', 'true');
        $(this).addClass('background');
      }
    });  
}