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
function akanNames(dw) {
  switch (dw){
    case 1:
      alert("You were born on Sunday, your akan name is Kwasi");
      break;
    case 2:
      alert("You were born on Monday, your akan name is Kwadwo");
      break;
    case 3:
      alert("You were born on Tuesday, your akan name is Kwabena");
      break;
    case 4:
      alert("You were born on Wednesday, your akan name is Kwaku");
      break;
    case 5:
      alert("You were born on Thursday, your akan name is Yaw");
      break;
    case 6:
      alert("You were born on Friday, your akan name is Kofi");
      break;
    case 7:
      alert("You were born on Saturday, your akan name is Kwame");
      break;
    default:
      alert("Oops! Try Again.");
  };
};
