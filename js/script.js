// Method for fetching data using $.getJSON
function fetchDataWithGetJSON() {
  $.getJSON('team.json', function(data) {
    // Loop through the data array and display it
    $.each(data, function(index, member) {
      // Create HTML elements for each team member
      var memberDiv = $('<div>');
      var nameHeader = $('<h2>').text(member.name);
      var positionHeader = $('<h5>').text(member.position);
      var bioParagraph = $('<p>').text(member.bio);

      // Append the elements to the team div
      memberDiv.append(nameHeader, positionHeader, bioParagraph);
      $('#team').append(memberDiv);
    });
  });
} 

// Method for fetching data using $.ajax
function fetchDataWithAjax() {
  // Display "Loading..." message
  $('#team').text('Loading...');

  // Add a 3-second delay before making the AJAX request
  setTimeout(function() {
    $.ajax({
      type: 'GET',
      url: 'team.json',
      dataType: 'json',
      success: function(data) {
        // Remove "Loading..." message
        $('#team').empty();

        // Loop through the data array and display it
        $.each(data, function(index, member) {
          // Create HTML elements for each team member
          var memberDiv = $('<div>');
          var nameHeader = $('<h2>').text(member.name);
          var positionHeader = $('<h5>').text(member.position);
          var bioParagraph = $('<p>').text(member.bio);

          // Append the elements to the team div
          memberDiv.append(nameHeader, positionHeader, bioParagraph);
          $('#team').append(memberDiv);
        });
      },
      error: function() {
        // Display error message if AJAX request fails
        $('#team').text('Error: Content could not be retrieved.');
      }
    });
  }, 3000); // 3-second delay (3000 milliseconds)
}


$(document).ready(function() {
  // Call one of the methods to fetch and display data
  //fetchDataWithGetJSON(); // Uncomment this line to use $.getJSON method
  // OR
  fetchDataWithAjax(); // Uncomment this line to use $.ajax method  
});