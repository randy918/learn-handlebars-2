//!  121822.0830        VARIABLES

 let baseURL = "https://api.themoviedb.org/3/";
 let configData = null;
 let baseImageURL = null;

 let getConfig = function () {
   console.log("hello");
   let url = "".concat(baseURL, "configuration?api_key=", APIKEY);
   fetch(url)
     .then((result) => {
       return result.json();
     })
     .then((data) => {
       baseImageURL = data.images.secure_base_url;
       configData = data.images.config_data;
       console.log("config", data);
       console.log("config fetched");
       runSearch("game of thrones");
     })
     .catch(function (err) {
       alert(err);
     });
 };

 let runSearch = function (keyword) {
   let url = "".concat(
     baseURL,
     "search/tv?api_key=",
     APIKEY,
     "&query=",
     keyword
   );
   fetch(url)
     .then((result) => result.json.())
     .then((data) => {
       document.getElementById("output").innerHTML = JSON.stringify(
         data,
         null,
         4
       );
     });
 };
document.addEventListener('DOMContentLoaded', getConfig)

//!  121822.0826        FUNCTIONS

const init = function () {
  main();
};

window.onload = function () {

  init();
};

//!  123122.1839        MAIN

const main = function () {
    
    
};

// const APIKEY = "ca1f26ba6eb2ba4fb641257b39d3bea7";
//  SAMPLE URLS

// 1. To get the config data like image base urls
// https://api.themoviedb.org/3/configuration?api_key=<APIKEY>

// 2. To fetch a list of movies based on a keyword
// https://api.themoviedb.org/3/search/movie?api_key=<APIKEY>&query=<keyword>

// 3. To fetch more details about a movie
// https://api.themoviedb.org/3/movie/<movie-id>?api_key=<APIKEY>
// *************/

/*******************************
        SAMPLE SEARCH RESULTS DATA
        { "vote_count": 2762, 
            "id": 578, 
            "video": false, 
            "vote_average": 7.5, 
            "title": "Jaws", 
            "popularity": 16.273358, 
            "poster_path": "/l1yltvzILaZcx2jYvc5sEMkM7Eh.jpg", 
            "original_language": "en", 
            "original_title": "Jaws", 
            "genre_ids": [ 27, 53, 12 ], 
            "backdrop_path": "/slkPgAt1IQgxZXNrazEcOzhAK8f.jpg", 
            "adult": false, 
            "overview": "An insatiable great white shark terrorizes the townspeople of Amity Island, The police chief, an oceanographer and a grizzled shark hunter seek to destroy the bloodthirsty beast.", 
            "release_date": "1975-06-18" 
        }
        *******************************/
//     </script >

// };

//!  123122.1839        END
