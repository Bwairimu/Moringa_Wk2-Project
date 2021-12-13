var mlnames = ["Kwasi", "Kwadwo", "Kwabena ", "Kwaku ", "Yaw ", "Kofi", "Kwame"];
var flnames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua ", "Ama"];

function returnMLDayOfTheWeek(x) {
    return (x < 1) || (x > 7) ? null : mlnames[x];
}
function returnFLDayOfTheWeek(x) {
    return (x < 1) || (x > 7) ? null : flnames[x];
}
function namesFunction() {
    var dateofbirth=document.getElementById("dateofbirth").value;
    var date=new Date(dateofbirth); // Or your date here
    var date=date.getDate();
    var month=date.getMonth()+1;
    var year=date.getFullYear();
    window.alert("dateofbirth");
    
}
