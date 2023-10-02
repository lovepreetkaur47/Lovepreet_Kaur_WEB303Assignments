// function to fetch data using $.getJSON method
function fetchDataWithGetJSON() {
  $.getJSON('team.json', function(data) {
    // Clearing the content of the div#team
    $('#team').empty();

    // Loop: the array of team members
    $.each(data, function(index, member) {
      // Createing HTML elements for name, position, and bio
      var nameElement = $('<h2>').text(member.name); //html name element
      var positionElement = $('<h5>').text(member.position); //html postion element
      var bioElement = $('<p>').text(member.bio);//html bio element

      // Appending the elements to the div#team
      $('#team').append(nameElement, positionElement, bioElement);
    });
  });
}

//function to fetch data using $.ajax
function fetchDataWithAjax() {
  //it  Displays "Loading..." message first before sending the request
  $('#team').text('Loading...');

  $.ajax({
    type: 'GET',
    url: 'team.json',
    dataType: 'json',
    success: function(data) {
      // Clearing the content of the div#team
      $('#team').empty();

      // Loop through the array of team members
      $.each(data, function(index, member) {
        // Create HTML elements for name, position, and bio
        var nameElement = $('<h2>').text(member.name);//html name 
        var positionElement = $('<h5>').text(member.position);//html position
        var bioElement = $('<p>').text(member.bio);//html bio

        // Append the elements to the div#team
        $('#team').append(nameElement, positionElement, bioElement);
      });
    },
    error: function() {
      // Display error message if the request fails
      $('#team').text('Error: Content could not be retrieved');
    },
    complete: function() {
      // Using setTimeout to delay content displaying by 3 seconds (bonus)
      setTimeout(function() {
        $('#team').text(''); // Clearing the loading message after delay
      }, 3000);
    }
  });
}

// Calling one of the methods in a ready function
$(document).ready(function() {
  
  fetchDataWithGetJSON(); // Uncomment this line to use $.getJSON method
  // OR
  //fetchDataWithAjax(); // Uncomment this line to use $.ajax method  

});
