function calculate(){

let percent = document.getElementById("percent").value;

let present = document.getElementById("present").value;

let total = document.getElementById("total").value;

/* EMPTY FIELD CHECK */

if(present === "" || total === ""){

alert("Please enter values in both fields.");
return;

}

/* CONVERT TO NUMBER */

present = Number(present);
total = Number(total);

/* INVALID INPUT CHECK */

if(isNaN(present) || isNaN(total) || present < 0 || total <= 0){

alert("Invalid input. Please enter valid numbers.");
return;

}

/* PRESENT > TOTAL CHECK */

if(present > total){

alert("Invalid input. Present classes cannot be greater than total classes.");
return;

}

/* CALCULATION */

percent = percent / 100;

let current = present / total;

if(current >= percent){

let bunk = Math.floor((present / percent) - total);

document.getElementById("result").innerHTML =
"You can bunk " + bunk + " classes";

}

else{

let attend = Math.ceil((percent * total) - present);

document.getElementById("result").innerHTML =
"You must attend " + attend + " more classes";

}

}
