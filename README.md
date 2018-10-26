#LIRI Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

You may use following 4 commands

1.node liri.js concert-this **artist/band name here**

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

* Name of the venue
* Venue location
* ate of the Event 

2.node liri.js spotify-this-song **song name here**

This will show the following information about the song in your terminal/bash window

Artist(s)

* The song's name
* A preview link of the song from Spotify
* The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

3.node liri.js movie-this **movie name here**

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4.node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

**All the results are also appended to the log.txt file**

Please refer to the following Screencastify 

Remember you do need to get your own SPOTIFY ID and a SPOTIFY SECRET to try this in your local machine.
SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret


