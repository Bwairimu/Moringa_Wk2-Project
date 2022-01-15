function fetchValue() {
  var yearOfBirth=document.getElementById('year').value;
  var monthOfBirth=document.getElementById('month').value;
  var dateOfBirth=document.getElementById('date').value;
  var gender=document.getElementById('gender').value;

  //Converting strings into integers
  var monthInt=parseInt(monthOfBirth);
  var dateInt=parseInt(dateOfBirth);
  var century = yearOfBirth.slice(0, 2);
  var bornYear = yearOfBirth.slice(2, 5);
  var CC=parseInt(century);
  var YY=parseInt(bornYear);
  console.log(century + " " + bornYear);
  validateValues(CC,YY,monthInt,dateInt,gender);
}
//Validation of values
function validateValues(CC,YY,monthInt,dateInt,gender) {
   if (dateInt <= 0 || dateInt > 31) {
    alert("Invalid date, please input a correct date");
  } else if (monthInt <= 0 || monthInt > 12) {
    alert("Invalid month, please input a correct month");
  } else {
   getDayOfWeek(CC,YY,monthInt,dateInt,gender);
  }
}
  function getDayOfWeek(CC, YY,monthInt,dateInt,gender) {
    var bornDay = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (monthInt + 1) / 10)) + dateInt) % 7;
    var dw = Math.floor(bornDay);
    console.log(dw);
    akanNamesOutput(dw, gender);
  };
  function akanNamesOutput(dw, gender) {
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mlAkanNames = ["Kwasi", "Kwadwo", " Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var flAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (dw == 1 && gender === "male") {
      alert("You were born on" + week[0] + "and your akan name is " + mlAkanNames[0])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on" + week[0] + "and your name is " + flAkanNames[0])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[1] + "and your akan name is " + mlAkanNames[1])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[1] + "and your name is " + flAkanNames[1])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[2] + "and your akan name is " + mlAkanNames[2])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[2] + "and your name is " + flAkanNames[2])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[3] + "and your akan name is " + mlAkanNames[3])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[3] + "and your name is " + flAkanNames[3])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[4] + "and your akan name is " + mlAkanNames[4])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[4] + "and your name is " + flAkanNames[4])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[5] + "and your akan name is " + mlAkanNames[5])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[5] + "and your name is " + flAkanNames[5])
    }
    if (dw == 1 && gender === "male") {
      alert("You were born on " + week[6] + "and your akan name is " + mlAkanNames[6])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[6] + "and your name is " + flAkanNames[6])
    }
  }
