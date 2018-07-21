$(function() {
    console.log( 'ready!' );

    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=venom&apikey=3729b58ef60ba8affe97db66144af1c2";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    
      });
      //^ End of AJAX

});
//^ End of Document Ready


