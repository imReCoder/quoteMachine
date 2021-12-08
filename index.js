$(document).ready(function(){
    var quotetopost='';
     var authortopost='';
     $("#btn3").click(function(){
       //function for color changr start
       var colors=['#16a085', '#27ae60', '#2c3e50', '#f39c12',
     '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", 
     "#BDBB99", "#77B1A9", "#73A857"];
     var color = Math.floor(Math.random() * colors.length);
         $("html body").css({
           backgroundColor: colors[color],
           color: colors[color]
         }, 1000);
   
      
     var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
   
   
       $.getJSON(url,function(data)
        {
         $("#quote").html('"'+data.quoteText+'"');
         $("#author").html('-'+data.quoteAuthor);
         console.log(data.quoteText); 
           quotetopost= data.quoteText;
     authortopost= data.quoteAuthor;
                 });
     });
      $("#tweetquote").click(function(){
      $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
     });
      
   })