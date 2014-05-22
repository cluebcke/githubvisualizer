$(document).ready(function() {
  var fadeIn = 2000, fadeOut = 20000, delay = 2000;
  var fonts = [
    "Questrial",
    "Crafty Girls",
    "Permanent Marker",
    "Josefin Sans",
    "Lobster",
    "Shadows Into Light",
    "Droid Serif",
    "Oswald",
    "Pacifico",
    "Special Elite",
    "Audiowide",
    "Bangers",
    "Rock Salt",
    "Pinyon Script",
    "Righteous",
    "Amatic SC"
  ];

  var ws = new WebSocket('ws://localhost:3001');
  ws.onmessage = function(event) {
    showText(event.data);
  };
  ws.onopen = function() {
    ws.send('start');
  };

  var showText = function(text) {
    var $div = $("<div class='text-div'>");
    var width = $(window).width();
    var height = $(window).height();
    var x = getRoundedRandom(width - 350);
    var y = getRoundedRandom(height - 50);
    var r = getRoundedRandom(0xBB) + 0x44;
    var g = getRoundedRandom(0xBB) + 0x44;
    var b = getRoundedRandom(0xBB) + 0x44;
    var rgbStr = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    var fontSize = "" + (Math.random() + 1.5) + "em";
    var font = fonts[getRoundedRandom(fonts.length)];
    var css = {
      left: x,
      top: y,
      color: rgbStr,
      fontSize: fontSize,
      fontFamily: font
    };
    $div.text(text);
    $div.css(css);
    $(document.body).append($div);
    $div.animate({opacity:1}, fadeIn, function() {
      $(this).delay(delay).animate({opacity:0}, fadeOut);
    });

  };

  var getRoundedRandom = function(limit) {
    return Math.round(Math.random() * limit);
  }

});
