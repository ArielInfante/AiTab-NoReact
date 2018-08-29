jQuery(document).ready(function($) {
  function searchEvent(e) {
    var textSearch = $('#search-text').val();
    console.log(textSearch);
  };

  $('#search-button').click(function(event) {
    searchEvent(event);
  });

  $('#search-text').keypress(function(event) {
    if(event.which == 13) searchEvent(event);
  });
});