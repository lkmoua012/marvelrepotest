$(function() {
    console.log( 'ready!' );

    var charName = "";

    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=daredevil&apikey=3729b58ef60ba8affe97db66144af1c2";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        var thumbnail = (response.data.results[0].thumbnail[1] + response.data.results[0].thumbnail[0]);
        console.log(response);
        $(".charName").append(thumbnail);
        $(".charName").append(response.data.results[0].name);
        $(".charName").append(response.data.results[0].description);
        console.log(thumbnail);
    
      });
      //^ End of AJAX

});
//^ End of Document Ready


