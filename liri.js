//calling the dotenv package to call the .env file
require("dotenv").config();

// NPM module used to read the random.txt file. this way i could do the fs.readfile.

var fs = require("fs");
var keys = require("./keys.js");
var moment = require("moment");
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
    query: input
    // limit: 1
  };

  spotify.search(query, function(err, data) {
    //   console.log(data.tracks.items);
    console.log(
      "Artist(s): " +
        data.tracks.items[0].artists[0].name +
        "\nSong's Name: " +
        data.tracks.items[0].name +
        "\nPreviewUrl: " +
        data.tracks.items[0].preview_url +
        "\nAlbum: " +
        data.tracks.items[0].album.name
    );
  });
} else if (process.argv[2] === "concert-this") {
  var query =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";
  //bandsintown API
  request(query, function(err, response, data) {
    // console.log(data);
    var formattedData = JSON.parse(data);
    var dateTime = moment(formattedData[0].datetime).format("MM/DD/YYYY");
    console.log(
      "Venue: " +
        formattedData[0].venue.name +
        "\nLocation: " +
        formattedData[0].venue.city +
        "\nDate: " +
        dateTime
    );
  });
} else if (process.argv[2] === "movie-this") {
  var query = "http://www.omdbapi.com?apikey=trilogy&t=" + input;
  //OMDBAPI
  request(query, function(err, response, data) {
    var formattedData = JSON.parse(data);
    console.log(
      "Year: " +
        formattedData.Year +
        "\nimdbRating: " +
        formattedData.imdbRating +
        "\nRotten Tomato: " +
        formattedData.Ratings[1].Value +
        "\nCountry: " +
        formattedData.Country +
        "\nLanguage: " +
        formattedData.Language +
        "\nPlot: " +
        formattedData.Plot +
        "\nActors: " +
        formattedData.Actors
    );
  });
} else if (process.argv[2] === "do-what-it-says") {
  //random.txt
  //fs.readFile(path[, options], callback)
  fs.readFile("random.txt", "utf-8", function(err, data) {
    if (err) throw err;
    console.log(data);
    var random = data.split(",")
    console.log(random);
  });
}
