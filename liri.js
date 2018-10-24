//calling the dotenv package to call the .env file
require("dotenv").config();

// NPM module used to read the random.txt file. this way i could do the fs.readfile.

var fs = require("fs");
var keys = require("./keys.js");

//console.log(keys);

//has the function stored in it. require always return something.
//SpotifyAPI is the variable name that has the node modules get constructor function that
var SpotifyAPI = require("node-spotify-api");
var request = require("request");

//creating a object using a constructor
//blue spotify is the object
var spotify = new SpotifyAPI(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

if (process.argv[2] === "spotify-this-song") {
  //spotify search requires
  var query = {
    type: "track",
    query: input,
    // limit: 1
  };

  spotify.search(query, function(err, data) {
    console.log("Artist(s): " + data.tracks.items[0].artists[0].name + "\nSong's Name: "+ data.tracks.items[0].name +"\nPreviewUrl: " + data.tracks.items[0].preview_url +"\nAlbum: " + data.tracks.items[0].album.name);
  });
}
else if(process.argv[2] === "concert-this"){
   var query = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp"
    //bandsintown API
    request(query, function(err, response, data){
        console.log(data);
    });

}
else if(process.argv[2] === "movie-this"){
    //OMDBAPI
}
else if(process.argv[2] === "do-what-it-says"){
    //random.txt 
}
