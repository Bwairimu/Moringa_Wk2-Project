var mlnames = ["Kwasi", "Kwadwo", "Kwabena ", "Kwaku ", "Yaw", "Kofi", "Kwame"];
var flnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function MLDayOfTheWeek(x) {
    return (x < 1)||(x > 7) ? null : mlnames[x];
}
function FLDayOfTheWeek(x) {
    return (x < 1)||(x > 7) ? null : flnames[x];
}
function namesGenFun(type) {
    var genderValue=["malegender","femalegender"];
if (document.getElementById("malegender").checked) {
    genderValue = document.getElementById("malegender").value;
} else if (document.getElementById("femalegender")) {
    genderValue = document.getElementById("femalegender").value;
}
    var dateofbirth = document.getElementById("dateofbirth").value;
    var date = new Date(dateofbirth); //Enter your date here
    var date = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (date <= 0 || date > 31) {
        window.alert("Invalid date,please input a correct date");
    } else if (month <= 0 || month > 12) {
        window.alert("Invalid month,please input a correct month");
    } else {
        var yy = parseInt(year.toString().substr(-2));
        var cc = parseInt(year.toString().slice(0,2));
        var dayoftheweek = (((cc/ 4) - 2 * cc- 1) + ((5 * yy / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
        if (genderValue == "Male") {
            returnMlDayOfWeek(dayoftheweek);
        } else if (genderValue == "Female") {
            returnFlDayOfWeek(dayoftheweek);
            if (genderValue == "male") {
                window.alert(returnMlDayOfWeek(dayoftheweek));
            } else if (genderValue == "female") {
                window.alert(returnFlDayOfWeek(dayoftheweek));
            }
        }
    }

}