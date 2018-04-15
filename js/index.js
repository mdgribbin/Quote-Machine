function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$(document).ready(function() {
var quote ="It's free real estate.";
var author='- Tim Heidecker';
  $('#buttonTarget').on('click', function() {
    $('#quoteTarget, #authorTarget').animate({opacity:0}, 400, function(){
     

    $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(json) {
    $("#quoteTarget").html('"' + json.quote + '"');
    $("#authorTarget").html("- " + json.author);
    quote = json.quote;
    author = json.author;
    $('.fa-twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quote + '" ' + json.author));
      $('#quoteTarget, #authorTarget').animate({opacity: 1},400);
    });
      });
  });
  
  $('.fa-twitter').on('click', function(){
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
});