
var mlname= {
Sunday:'Kwasi',
Monday:'Kwadwo',
Tuesday:'Kwabena',
Wednesday:'Kwaku',
Thursday:'Yaw',
Friday:'Kofi',
Saturday:'Kwame'};

var flname= {
Sunday:'Akosua',
Monday:'Adwoa',
Tuesday:'Abenaa',
Wednesday:'Akua',
Thursday:'Yaa',
Friday:'Afua',
Saturday:'Ama'};

const form=document.getElementById('form')
const dateofbirth=document.getElementById('dateofbirth')
const  Male=document.getElementById('male-gender')
const Female=document.getElementById('female-gender')

form.addEventListener('submit',(event) => {
event.preventDefault();
});

checkInputs() {
});
function checkInputs() {
  //get the values from the inputs
  const dateofbirthValue=dateofbirth.value.trim()
  const maleValue=mlname.value.trim()
  const femaleValue=flname.value.trim()
}

function mlDayOfTheWeek(x) {
  return (x < 1)||(x > 7) ? null : mlname[x];
  }
  function mlDayOfTheWeek(x) {
  return (x < 1)||(x > 7) ? null : flname[x];
  };
if (dateofbirthValue === '') {
  //show error
  setErrorFor(dateofbirth,'Please enter a valid date');
}else {
  setSuccessFor(dateofbirth);
}
  function setErrorFor(input, message) {
  const formControl=input.parentElement;
  const small=formControl.QuerySelector('small');
  formControl.className='form-control error';
}
  function nameGenFun() {
  var genderValue=["male-gender","female-gender"];
  if (document.getElementById("male-gender").checked) {
  genderValue = document.getElementById("male-gender").innerHTML=gender.dayoftheweek + " is" + mlname;
  } else if (document.getElementById("female-gender")) {
  genderValue = document.getElementById("female-gender").innerHTML=gender.dayoftheweek + "is" + flname;
  };
  var dateofbirth = document.getElementById("dateofbirth").value;
  var date = new Date(dateofbirth); //Enter your date here
  if (date <= 0 || date > 31) {
  window.alert("Invalid date,please input a correct date");
  } else if (month <= 0 || month > 12) {
  window.alert("Invalid month,please input a correct month");
  } else {
  var yy = parseInt(year.toString().substr(-2));
  var cc = parseInt(year.toString().slice(0,2));
  var dayoftheweek = (((cc/ 4) - 2 * cc- 1) + ((5 * yy / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
  if (genderValue == "Male") {
  returnmlDayOfWeek(dayoftheweek);
  } else if (genderValue == "Female") {
  returnflDayOfWeek(dayoftheweek);
  if (genderValue == "Male") {
  window.alert(returnmlDayOfWeek(dayoftheweek));
  } else if (genderValue == "female") {
  window.alert(returnflDayOfWeek(dayoftheweek));