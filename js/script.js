
let mlname = {Sunday: 'Kwasi', Monday: 'Kwadwo', Tuesday: 'Kwabena', Wednesday: 'Kwaku',
  Thursday: 'Yaw', Friday: 'Kofi', Saturday: 'Kwame'};
let flname = {Sunday: 'Akosua', Monday: 'Adwoa', Tuesday: 'Abenaa',
  Wednesday: 'Akua', Thursday: 'Yaa', Friday: 'Afua', Saturday: 'Ama'};
 
var dayoftheweek = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
function checkInputs(){
  let dateofbirth=dateofbirth.value.trim();
  let mlname=mlname.value.trim();
  let flname=flname.value.trim();
  let date = new Date(dateofbirth); //Enter your date here
}
if (date <= 0 || date > 31) {
  window.alert("Invalid date,please input a correct date");
} else if (month <= 0 || month > 12) {
  window.alert("Invalid month,please input a correct month");
} else {
  let yy=parseInt(year.toString().substr(-2));
  let cc=parseInt(year.toString().slice(0, 2));

  let result=(dateofbirth,genderValue);
  alert("Your Akan Name is: ");
  