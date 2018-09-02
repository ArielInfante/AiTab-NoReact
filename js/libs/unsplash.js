import Secret from 'secret'

console.log(Secret.unsplash.appid)

(function($) {
  $.fn.unsplashBackground = function() {
    this.each( function() {
      $(this).css('background-color', '#000');
      console.log("woking unsplash plugin")
    })
  }
}(jQuery));