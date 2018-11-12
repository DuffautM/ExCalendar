function start() {
	clearTypeWeek();
	var selected_date = getSelectedDate();
	manageDates(selected_date);
}

function getSelectedDate() {
	return document.getElementById('selection_date').value;
}

function setTypeWeek(position, type) {
	document.getElementById(position).classList.add(type);
}

function clearTypeWeek() {
	for (var y = 1; y < 5; y++) {
		for (var x = 1; x < 7; x++) {
			var id = "" + y  + x;
			if(document.getElementById(id).classList.contains("red")) {
				document.getElementById(id).classList.remove("red");
			}
			else if (document.getElementById(id).classList.contains("green")) {
				document.getElementById(id).classList.remove("green");					
			}		
		}
	}
}

function manageDates(selected_date) {
	var date = new Date();
	var date_full = new Date();
	var select_explode = selected_date.split("-");
	date.setFullYear(parseInt(select_explode[0]), parseInt(select_explode[1]) - 1, parseInt(select_explode[2]));
	date_full.setFullYear(parseInt(select_explode[0]), parseInt(select_explode[1]) - 1, 1);

	var day_of_week = date.getDay();
	var first_day = date_full.getDay();
	if(first_day === 0) {
		first_day = 7;
	}
	var start = "" + 1 + first_day;
	setTypeWeek(start, "red");
	assignNumber(start, 1);
	var month_length = getMonthLength(date_full);

}

function assignAll(date, ) {

	for (var y = 1; y < 5; y++) {
		for (var x = 1; x < 7; x++) {
			
		}
	}

}

function getMonthLength(date) {

	var nb = 0;
	if([0, 2, 4, 6, 7, 9, 11].includes(date.getMonth())) {
		nb = 31;
	}
	else if([3, 5, 8, 10].includes(date.getMonth())){
		nb = 30;
	}
	else {
		nb = 28;
	}
	return nb;	
}

function assignNumber(position, number) {
	document.getElementById(position).innerHTML = number;
}

function displayAll() {
	
}

/*

	var position_start_break = "" + 1 + (date.getDay() + 1);
*/