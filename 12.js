jQuery("p").lettering();
$(document).on('mouseenter mouseleave touchend', 'p', function (ev) {
  var el = jQuery(this).find('span');
  if(ev.type === 'mouseenter') {
    TweenMax.staggerTo(el, 0.8, {color:'#f00', ease:Power4.easeOut},0.07);
  } else {
    TweenMax.staggerTo(el, 0.8, {color:'#000', ease:Power4.easeOut},0.07);
  }
});