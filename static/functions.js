var total_credits = 0;
var grade_points = 0;
var semester_gpa = 0;
var letter_grades = new Set(["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"]);


function addClass() {
    $("#inputs").append("<label>Grade:&nbsp;</label><input type=\"text\" name=\"grade\" onblur=\"validate()\"><label>&nbsp;Credits:&nbsp;</label><input type=\"text\" name=\"credits\" onblur=\"validate()\"><br>");
	console.log("Adding class...");
	document.getElementById("calculateBtn").disabled = true;
	document.getElementById("calculatedGrade").value = "";
}

function gpa_points(grade) {
	if (grade == "A") {
		return 4.0;
	} else if (grade == "A-") {
		return 3.7;
	} else if (grade == "B+") {
		return 3.3;
	} else if (grade == "B") {
		return 3.0;
	} else if (grade == "B-") {
		return 2.7;
	} else if (grade == "C+") {
		return 2.3;
	} else if (grade == "C") {
		return 2.0;
	} else if (grade == "C-") {
		return 1.7;
	} else if (grade == "D+") {
		return 1.3;
	} else if (grade == "D") {
		return 1.0;
	} else if (grade == "E") {
		return 0.0;
	}
}

function calculate() {
	var grades = document.getElementsByName("grade");
	var credit = document.getElementsByName("credits");
	console.log(grades[0].value);
	console.log(credit[0].value);

	console.log(grades.length);

	var i = grades.length;
	console.log(i);
	while (i > 0) {
		i = i-1;		
		console.log(i);
		total_credits += parseFloat(credit[i].value);
		grade_points += credit[i].value * gpa_points(grades[i].value);
	}
	semester_gpa = grade_points / total_credits;
	console.log(total_credits);
	console.log(grade_points);
	console.log(semester_gpa);

	$("#currentGPA").remove();
    $("#calculatedGrade").append("<p id=\"currentGPA\"><b>&nbsp;Current Semester GPA: " + semester_gpa.toPrecision(3) + "</b></p>");
    console.log("Calculating...");
}

function clearCurrent() {
	var grades = document.getElementsByName("grade");
	for (let i = 0; i < grades.length; i++) {
		document.getElementsByName("grade")[i].value = "";
		document.getElementsByName("credits")[i].value = "";
	}
	$("#currentGPA").remove();
	document.getElementById("calculateBtn").disabled = true;

}

function calculateGpa() {
	var prev_gpa = document.getElementById("prev_gpa").value;
	console.log(prev_gpa);
	var prev_total = document.getElementById("prev_total").value;
	console.log(prev_total);
	var total_points = (prev_total * prev_gpa) + grade_points;
	console.log(grade_points);
	var total = parseFloat(prev_total) + total_credits;
	console.log(total_credits);
	console.log(total_points);
	console.log(total);
	var gpa = total_points / total;
	$("#totalGPA").remove();
	$("#cummulative").append("<p id=\"totalGPA\"><b>&nbsp;Cumulative GPA: " + gpa.toPrecision(3) +"</b></p>");
	console.log("Calculating...");
}

function clearTotal() {
	document.getElementById("prev_gpa").value = "";
	document.getElementById("prev_total").value = "";
	$("#totalGPA").remove();
	document.getElementById("calculateNewBtn").disabled = true;

}

function validate() {
	var grades = document.getElementsByName("grade");
	var credits = document.getElementsByName("credits");
	let valid = true;
	for (let i = 0; i < grades.length && valid == true; i++) {
		console.log("i " + i + ", grades[i].value " + grades[i].value + ", credits[i].value " + credits[i].value);
		console.log("is in set " + letter_grades.has(grades[i].value));
		console.log("credits is NaN " + isNaN(Number(credits[i].value)));
		if (grades[i].value == "" 
				|| credits[i].value == "" 
				|| !letter_grades.has(grades[i].value)
				|| isNaN(Number(credits[i].value))) {
			valid = false;
		}
	}

	if (valid) {
		document.getElementById("calculateBtn").disabled = false;
	}
}

function validateTotalGPA() {
	var prev_gpa = document.getElementById("prev_gpa").value;
	var prev_total = document.getElementById("prev_total").value;
	var current_gpa = document.getElementById("currentGPA");
	let valid = true;

	if (prev_gpa == "" || prev_total == "" 
		|| current_gpa == null || isNaN(Number(current_gpa))
		|| isNaN(Number(prev_total))) {
		valid = false;
	}

	if (valid) {
		document.getElementById("calculateNewBtn").disabled = false;
	}
}
