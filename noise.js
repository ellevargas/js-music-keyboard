$(document).ready(function() {

  var callback = function(note) {
    var key = document.getElementById(note + 'Audio');
    key.load();
    key.play();
  };

  $('body').keypress(function() {
      callback(event.key);
  });

  $('body').click(function() {
    callback($(event.target).text());
  })

})
