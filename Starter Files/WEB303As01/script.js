/*
	WEB 303 Assignment 1 - jQuery
	{Lovepreet Kaur}
*/


$(document).ready(function() {
    // Event handler  to run ("change" event) on percent fields and  salary 
    $("#yearly-salary, #percent").on('input', function() {
        // Get the values 
        var salaryValue = $("#yearly-salary").val();
        var percentValue = $("#percent").val();

        // testing if the values are valid numbers, then.........
        if (!isNaN(salaryValue) && !isNaN(percentValue)) {
            // Converting the values into numbers
            var salary = parseFloat(salaryValue);
            var percent = parseFloat(percentValue);

            // Calculating amount
            var amount = (salary * percent) / 100;

            // Updating span#amount with the calculating amount
            $("#amount").text("$" + amount.toFixed(2));
        } else {
            // if the case, one or both values are not valid numbers
            $("#amount").text("$0"); // show $0 in this case
        }
    });
});
