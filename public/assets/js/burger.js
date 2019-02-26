$(function(){

   
    $(".create-burger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger").val().trim(),
          devour : false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
            
        var newState = {
            devour : true
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newState
        }).then(
          function() {
            console.log("Devoured");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
