/* 
 * hoverLabel jQuery plugin
 * 
 * A jQuery adaptation of the "A List Apart" overlabel pattern
 * For more information visit: http://www.alistapart.com/articles/makingcompactformsmoreaccessible/
 * 
 * URL: http://github.com/namxam/hoverlabel
 */
(function($) {
  
  /* This is called via $('#id_of_form_element).hoverLabel();
   *
   * Very important is the .hover-label css style class
   * There you can define the padding (should be the same as the input field),
   * the z-index, and the color (a light grey is probably the best)
   *
   * Example: .hover-label { z-index: 1000; padding: 2px; color: #888; }
   */
  $.fn.hoverLabel = function() {
    return this.each(function(item) {
      var input = $(this);
      var label = $("label[for="+input.attr('id')+"]");
      
      // Replace the label with a span element which is easier to position and style
      label.hide();
      var overlay = input.after('<span id="'+input.attr('id')+'-hover-label">'+label.text()+'</span>');
      var overlay = $('#'+input.attr('id')+'-hover-label');
      overlay.addClass('hover-label');
      overlay.css({ 'position': 'absolute', 'left': input.position().left });
      
      // Delegate span focus to the overlayed form field
      overlay.click(function() { input.focus(); });
      
      // Do not show overlay if the field already contains data
      if(input.val() != '') { overlay.css('display', 'none'); }
      
      // Hide and show for the span overlay
      input.focus(function() {
        overlay.css('display', 'none');
      }).blur(function() {
        if (this.value === '') { overlay.show(); }
      });
    });
  };
})(jQuery);