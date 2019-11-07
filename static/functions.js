function calculate() {
    var grade = 4.0;

    $("input[name=grade]").each(function() {
        console.log(this.val());
    });

    $("#calculatedGrade").append("<p>Grade is " + grade + "</p>");
    console.log("Calculating...");
}

function addClass() {
    $("#inputs").append("<label>Grade: </label><input type=\"text\" name=\"grade\"><br>")
    console.log("Adding class...");
}