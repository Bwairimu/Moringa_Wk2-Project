let today=new Date();
var hourNow=today.getHours();
var greeting;
if (hourNow > 17) {
    greeting='Good evening!';
}else if(hourNow >= 12) {
    greeting='Good afternoon!';
}else if(hourNow > 0) {
    greeting='Good morning!';
}else {
    greeting='Welcome!';
}
document.write('<h4>' + greeting + '</h4>');

