$(document).ready(function () {
    // Click event handler for the links
    $('#prospect').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loadContent('prospect.html'); // Call the function to load 'prospect.html'
    });

    $('#convert').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loadContent('convert.html'); // Call the function to load 'convert.html'
    });

    $('#retain').click(function (event) {
        event.preventDefault(); // Prevent the default link behavior
        loadContent('retain.html'); // Call the function to load 'retain.html'
    });

    // Function to load content and animate
    function loadContent(url) {
        $('#content').fadeOut(400, function () {
            $(this).empty(); // Clear existing content

            // Load new content using .load() method
            $(this).load(url, function () {
                $(this).fadeIn(400); // Display the new content with fade-in animation
            });
        });
    }
});
