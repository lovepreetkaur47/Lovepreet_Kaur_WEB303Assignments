$(document).ready(function() {
    // Your JSON data
    var characters = [
        // Your character data here...
    ];

    // Function to render the table rows
    function renderTable() {
        var tbody = $('#characterBody');
        tbody.empty(); // Clear existing rows

        // Loop through characters and append rows to the table
        characters.forEach(function(character) {
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

    // Initial rendering of the table
    renderTable();

    // Event handler for sorting table on header click
    $('th a').on('click', function() {
        var column = $(this).data('sort');
        characters.sort(function(a, b) {
            // Assuming all fields are strings, adjust comparison as needed
            return a[column].localeCompare(b[column]);
        });

        renderTable();
    });
});
