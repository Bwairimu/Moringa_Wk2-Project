const dayoftheWEEK=new Array(7);
dayoftheWEEK[0]='Sunday';
dayoftheWEEK[1]='Monday';
dayoftheWEEK[2]='Tuesday';
dayoftheWEEK[3]='Wednesday';
dayoftheWEEK[4]='Thursday';
dayoftheWEEK[5]='Friday';
dayoftheWEEK[6]='Saturday';
let dayoftheWEEKLen = dayoftheWEEK.length;
document.getElementById("dateofbirth").innerHTML = dayoftheWEEK;

function returndayoftheWEEK(x){
    return (x < 1) || (x > 7)? null : dayoftheWEEK[x];
  }
  console.log(returndayoftheWEEK(2));

  var options = { weekday: 'long'};
  console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));

  const birthday = new Date('August 19, 1975 23:15:30');
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);



document.getElementById("namegenerator").innerHTML = dayoftheWEEK.flnme;