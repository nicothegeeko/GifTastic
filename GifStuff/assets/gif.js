$(document).ready(function() {


// Array of Topics

      var topics = ["Afghan Hound", "Akita", "American Eskimo Dog", "American Foxhound", "American Pitbull Terrior",
"Australian Cattle Dog", "Australian Shephard", "Barbet", "Basenji", "Basset Hound","Beagle",
"Bearded Collie", "Bichon Frise", "Bolognese", "Border Collie", "Border Terrier", "Boxer", "Bulldog", 
"Corgi","Chinook", "Chow Chow", "Dachshund", "Dalmatian", "French Bulldog", "White German Shepherd", "Havanese",
"Jack Russel Terrier", "Jindo Dog", "Labradoodle", "Maltese", "Papillon","Pekingese","Pomeranian", "Pug",
"Samoyed","Siberian Husky", "Swedish Vallhund", "Yorkipoo"];

      function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#topics-view").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("topic");
          // Adding a data-attribute with a value of the movie at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the movie at index i

          // var a = $("<button class=movie data-name=''").attr("data-name", movies[i]);
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#topics-view").append(a);
        }
      }

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=dc6zaTOxFJmzC";

      console.log(topics);

      // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          console.log(queryURL);

          var results = response.data;

for (var i = 0; i < results.length; i++) {

  var dogDiv = $('<div>');

                        var p = $('<p>').text("Rating: " + results[i].rating);

                        var dogsImage = $('<img>');
                        dogImage.attr('src', results[i].images.fixed_height.url);

                        dogDiv.append(p);
                        dogDiv.prepend(dogImage);

                        $('#gifSection').prepend(dogDiv);

                      }

               
       });

      // This function handles events where one button is clicked
      $("#add-topic").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();

        // This line will grab the text from the input box
        var topic = $("#topic-input").val().trim();
        // The movie from the textbox is then added to our array
        topics.push(topic);

        // calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Calling the renderButtons function at least once to display the initial list of movies
      renderButtons();



      
    })
    

