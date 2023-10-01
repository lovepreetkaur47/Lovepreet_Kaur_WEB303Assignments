
// Method for $.getjson request
function getDataWithGetJSON() {
  $.getJSON("team.json", function(data) {
    $.each(data, function(index, item) {
      var name = item.name;
      var position = item.position;
      var bio = item.bio;

      var teamDiv = $("<div>").appendTo("#team");
      $("<h2>").text(name).appendTo(teamDiv);
      $("<h5>").text(position).appendTo(teamDiv);
      $("<p>").text(bio).appendTo(teamDiv);
    });
  });
}

// Method for $.ajax request
function getDataWithAjax() {
  $("#team").text("Loading...");

  $.ajax({
    url: "team.json",
    type: "GET",
    dataType: "json",
    beforeSend: function() {
      $("#team").text("Loading...");
    },
    success: function(data) {
      $("#team").empty();
      $.each(data, function(index, item) {
        var name = item.name;
        var position = item.position;
        var bio = item.bio;

        var teamDiv = $("<div>").appendTo("#team");
        $("<h2>").text(name).appendTo(teamDiv);
        $("<h5>").text(position).appendTo(teamDiv);
        $("<p>").text(bio).appendTo(teamDiv);
      });
    },
    error: function() {
      $("#team").text("Error retrieving content.");
    }
  });
}

$(document).ready(function() {
  getDataWithAjax(); // or getDataWithGetJSON();
});

