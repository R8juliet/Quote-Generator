$.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json){
  $(".quote").html('"'+json.quoteText+'"');
  $(".author").html(json.quoteAuthor);
  $('#tweet').attr("href", "https://twitter.com/intent/tweet?text="+'"'+json.quoteText+'"'+json.quoteAuthor);
});

$('.quoteButton').on("click", function() {
  var p = $('p');
  p.fadeOut('fast').fadeIn('slow');
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
    $(".quote").html('"' + json.quoteText + '"');
    $(".author").html(json.quoteAuthor);
    $('#tweet').attr("href", "https://twitter.com/intent/tweet?text="+'"'+json.quoteText+'"'+json.quoteAuthor);
  });
});
