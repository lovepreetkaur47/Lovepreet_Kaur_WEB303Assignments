$(document).ready(function() {
    // Load JSON data using AJAX
    $.ajax({
      url: 'characters.json',
      dataType: 'json',
      success: function(data) {
        // Call a function to build the table with the JSON data
        buildTable(data);
      },
      error: function(error) {
        console.log('Error loading JSON data:', error);
      }
    });
  
    function buildTable(data) {
      // Cache references to table body and table rows
      var $tableBody = $('#characterBody');
      var $rows = [];
  
      // Iterate through each character in the JSON data
      $(document).ready(function() {
        // Load JSON data using AJAX
        $.ajax({
          url: 'characters.json',
          dataType: 'json',
          success: function(data) {
            // Call a function to build the table with the JSON data
            buildTable(data);
          },
          error: function(error) {
            console.log('Error loading JSON data:', error);
          }
        });
      
        function buildTable(data) {
          // Cache references to table body and table rows
          var $tableBody = $('#characterBody');
          var $rows = [];
      
          // Iterate through each character in the JSON data
          $.each(data, function(index, character) {
            // Create a table row and append it to the rows array
            var $row = $('<tr>');
            $row.append('<td>' + character.first_name + '</td>');
            $row.append('<td>' + character.last_name + '</td>');
            $row.append('<td>' + character.birth_date + '</td>');
            $row.append('<td>' + character.age + '</td>');
            $row.append('<td>' + character.from + '</td>');
            $row.append('<td>' + character.profession + '</td>');
            $rows.push($row);
          });
      
          // Append the rows to the table body
          $tableBody.append($rows);
      
          // Attach click event to table header anchors
          $('thead a').on('click', function(e) {
            e.preventDefault();
      
            var $anchor = $(this);
            var sortKey = $anchor.data('sort');
            var sortOrder = $anchor.data('order') || 'asc';
      
            // Update sort order
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            $anchor.data('order', sortOrder);
      
            // Sort rows based on the selected column and order
            $rows.sort(function(rowA, rowB) {
              var valueA = $(rowA).find('td[data-key=' + sortKey + ']').text();
              var valueB = $(rowB).find('td[data-key=' + sortKey + ']').text();
      
              if (sortOrder === 'asc') {
                return valueA.localeCompare(valueB);
              } else {
                return valueB.localeCompare(valueA);
              }
            });
      
            // Append the sorted rows to the table body
            $tableBody.html($rows);
          });
        }
      });
      
  
      // Append the rows to the table body
      $tableBody.append($rows);
  
      // Attach click event to table header anchors
      $('thead a').on('click', function(e) {
        e.preventDefault();
  
        var $anchor = $(this);
        var sortKey = $anchor.data('sort');
        var sortOrder = $anchor.data('order') || 'asc';
  
        // Update sort order
        sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        $anchor.data('order', sortOrder);
  
        // Sort rows based on the selected column and order
        $rows.sort(function(rowA, rowB) {
          var valueA = $(rowA).find('td[data-key=' + sortKey + ']').text();
          var valueB = $(rowB).find('td[data-key=' + sortKey + ']').text();
  
          if (sortOrder === 'asc') {
            return valueA.localeCompare(valueB);
          } else {
            return valueB.localeCompare(valueA);
          }
        });
  
        // Append the sorted rows to the table body
        $tableBody.html($rows);
      });
    }
  });
  