$(function() {

  $(".screen").click(function(e){
    var $clicked = $(this);
    $(".screen").each(function(index) {
      console.log(index);
      if ($(this).attr('name') === $clicked.attr('name')) {
	$(this).css('z-index','100');
	$(this).css('opacity','1');
	$(this).removeClass('background');
      } else {
	$(this).css('z-index','0');
	$(this).css('opacity','.4');
	$(this).addClass('background');
      }
    });
  });

});