// Define your two methods for JSON and AJAX requests
function getTeamInfoWithJSON() {
  $.getJSON('team.json', function (data) {
    displayTeamInfo(data.team);
  });
}

function getTeamInfoWithAjax() {
  $('#team').text('Loading...');

  $.ajax({
    type: 'GET',
    url: 'team.json',
    dataType: 'json',
    success: function (data) {
      displayTeamInfo(data.team);
    },
    error: function () {
      $('#team').html('<p>Error: Content could not be retrieved.</p>');
    },
  });
}

function displayTeamInfo(teamMembers) {
  // Clear existing content in the #team div
  $('#team').empty();

  // Loop through the team members and display their information
  $.each(teamMembers, function (index, member) {
    var memberInfo = `
      <h2>${member.name}</h2>
      <h5>${member.position}</h5>
      <p>${member.bio}</p>
    `;

    $('#team').append(memberInfo);
  });
}

// Call one of the methods in a ready function
$(document).ready(function () {
  // Choose either getTeamInfoWithJSON() or getTeamInfoWithAjax() to call
  getTeamInfoWithAjax(); // Change to the method you want to test
});
