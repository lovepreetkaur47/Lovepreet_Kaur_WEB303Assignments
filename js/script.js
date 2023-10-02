// Define a function to fetch data using $.getJSON
function fetchDataWithGetJSON() {
  $.getJSON('team.json', function(data) {
    // Clear the content of the div#team
    $('#team').empty();

    // Loop through the array of team members
    $.each(data, function(index, member) {
      // Create HTML elements for name, position, and bio
      var nameElement = $('<h2>').text(member.name);
      var positionElement = $('<h5>').text(member.position);
      var bioElement = $('<p>').text(member.bio);

      // Append the elements to the div#team
      $('#team').append(nameElement, positionElement, bioElement);
    });
  });
}

// Define a function to fetch data using $.ajax
function fetchDataWithAjax() {
  // Display "Loading..." message before sending the request
  $('#team').text('Loading...');

  $.ajax({
    type: 'GET',
    url: 'team.json',
    dataType: 'json',
    success: function(data) {
      // Clear the content of the div#team
      $('#team').empty();

      // Loop through the array of team members
      $.each(data, function(index, member) {
        // Create HTML elements for name, position, and bio
        var nameElement = $('<h2>').text(member.name);
        var positionElement = $('<h5>').text(member.position);
        var bioElement = $('<p>').text(member.bio);

        // Append the elements to the div#team
        $('#team').append(nameElement, positionElement, bioElement);
      });
    },
    error: function() {
      // Display an error message if the request fails
      $('#team').text('Error: Content could not be retrieved');
    },
    complete: function() {
      // Use setTimeout to delay content display by 3 seconds (bonus)
      setTimeout(function() {
        $('#team').text(''); // Clear the loading message after delay
      }, 3000);
    }
  });
}

// Call one of the methods in a ready function
$(document).ready(function() {
  fetchDataWithGetJSON(); // You can also call fetchDataWithAjax() here to test the other method
});
