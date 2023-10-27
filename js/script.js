$(document).ready(function() {
    // Accordion functionality
    $('.accordion h3').click(function() {
        // Hide all accordion panels
        $('.accordion-panel').slideUp();
        // Show the panel associated with the clicked label
        $(this).next('.accordion-panel').slideDown();
    });

    // Tabbed section functionality
    $('.tabs .tab').click(function() {
        // Remove the 'active' class from all tabs
        $('.tabs .tab').removeClass('active');
        // Add the 'active' class to the clicked tab
        $(this).addClass('active');
        
        // Hide all tab content
        $('.tab-content > div').hide();
        // Show the content associated with the clicked tab
        var index = $(this).index();
        $('.tab-content > div').eq(index).show();
    });
});
