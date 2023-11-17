$(document).ready(function () {
    var characters;

    // Load data from JSON file using jQuery ajax
    $.ajax({
        url: 'characters.json', // Replace with your JSON file path
        dataType: 'json',
        success: function (data) {
            characters = data;
            populateTable(characters);

            // Set up click event for table headings
            $('th[data-sort]').click(function (e) {
                e.preventDefault();
                var column = $(this).data('sort');
                sortTable(column);
            });
            
        },
        error: function (error) {
            console.error('Error loading JSON data: ' + error.statusText);
        }
    });

    // Function to populate the table with data
    function populateTable(data) {
        var tbody = $('#characterBody');
        tbody.empty();

        $.each(data, function (index, character) {
            var row = $('<tr>');
            row.append('<td>' + character.first_name + '</td>');
            row.append('<td>' + character.last_name + '</td>');
            row.append('<td>' + character.birth_date + '</td>');
            row.append('<td>' + character.age + '</td>');
            row.append('<td>' + character.from + '</td>');
            row.append('<td>' + character.profession + '</td>');
            tbody.append(row);
        });
    }

    // Function to sort the table based on a column
    // Function to sort the table based on a column
function sortTable(column) {
    characters.sort(function (a, b) {
        var aValue = a[column];
        var bValue = b[column];

        if (typeof aValue === 'string') {
            // Convert date strings to comparable format
            aValue = new Date(aValue);
            bValue = new Date(bValue);
        }

        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });

    // Remove 'sorted' class from all columns
    $('th[data-sort]').removeClass('sorted');

    // Toggle the 'sorted' class for the clicked column
    $(`th[data-sort="${column}"]`).toggleClass('sorted');

    populateTable(characters);
}

    
    
});
