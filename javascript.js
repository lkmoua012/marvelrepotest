$(function() {
    console.log( 'ready!' );

    var charName = "";

    var queryURL = "https://gateway.marvel.com:443/v1/public/characters?name=daredevil&apikey=3729b58ef60ba8affe97db66144af1c2";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        var thumbnailImg = ("" + response.data.results[0].thumbnail[1] + response.data.results[0].thumbnail[0] + "");
        var thumbnailImg2 = (response.data.results[0].thumbnail.path + response.data.results[0].thumbnail.extension);
        var thumbPath = response.data.results[0].thumbnail.path;
        var thumbExt = response.data.results[0].thumbnail.extension;

        $(".charName").append(response.data.results[0].name);
        $(".description").append(response.data.results[0].description);

        console.log(response);
        console.log(thumbnailImg);
        console.log(thumbnailImg2);
        console.log(thumbPath);
        console.log(thumbExt);
    
      });
      //^ End of AJAX

});
//^ End of Document Ready


