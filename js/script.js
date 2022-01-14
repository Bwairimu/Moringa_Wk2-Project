form.onclick = async (e) => {
  e.preventDefault();
});
var dateOfBirth;
dateOfBirth = window.prompt("Enter your birthday (YYYY-MM-DD)?", " ");
var birthdayArray = dateOfBirth.split('-');
var day = birthdayArray[2];
var month = birthdayArray[1];
var year = birthdayArray[0];
//validation
if (birthdayArray.length !== 3) {
  alert("Invalid date, please input a correct date");
} else if (day <= 0 || day > 31) {
  alert("Invalid day, please input a correct day");
} else if (month <= 0 || month > 12) {
  alert("Invalid month, please input a correct month");
} else {
  var century = year.slice(0, 2);
  console.log(century);
  var bornyear = year.slice(2, 5);
  console.log(bornyear);
  getDayOfWeek(century,bornyear,month,day);
}
function getDayOfWeek(century,bornyear,month,day){
  var CC = parseInt(century);
  var YY = parseInt(bornyear);
  var MM = parseInt(month);
  var DD = parseInt(day);
  var dayOfWeek = (((CC/4)-2*CC-1) + ((5*YY/4)) + ((26*(MM+1)/10)) + DD ) % 7;
  var dw = Math.floor(dayOfWeek);
  console.log(dw);
  akanNames(dw,gender);
};
function finalAkanNames(dw,gender) {
  var week =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var mlAkanNames=["Kwasi","Kwadwo"," Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var flAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[0] + "and your akan name is "+ mlAkanNames[0])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[0] +"and your name is " + flAkanNames[0])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[1] + "and your akan name is "+ mlAkanNames[1])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[1] +"and your name is " + flAkanNames[1])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[2] + "and your akan name is "+ mlAkanNames[2])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[2] +"and your name is " + flAkanNames[2])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[3] + "and your akan name is "+ mlAkanNames[3])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[3] +"and your name is " + flAkanNames[3])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[4] + "and your akan name is "+ mlAkanNames[4])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[4] +"and your name is " + flAkanNames[4])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " +week[5] + "and your akan name is "+ mlAkanNames[5])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[5] +"and your name is " + flAkanNames[5])
  }
  if (dw ==1  && gender ==="male"){
    alert("You were born on " + week[6] + "and your akan name is "+ mlAkanNames[6])
  }else if (dw == 1 && gender === "female"){
    alert("You were born on " + week[6] +"and your name is " + flAkanNames[6])
  }

    //default:
     // alert("Oops! Try Again.");
