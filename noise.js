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

  $('body').click(function() {
    callback($(event.target).text());
  })

  // $('.c').click(function() {
  //   callback($(this).text())
  // })

})

// $("#some_id").on("click keyup", function (e) {
//     if (e.type == "click" || e.keyCode == 27) {
//         alert("click or esc");
//     }
// });
