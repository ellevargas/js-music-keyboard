$(document).ready(function() {

  var callback = function(note) {
    var key = document.getElementById(note + 'Audio');
    key.load();
    key.play();
  };

  $('body').keypress(function() {
      // if (event.key == 'c')
      callback(event.key);
  });

  $('.c').click(function() {
    callback($(this).text())
  })

})
