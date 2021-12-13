const dayoftheWEEK=new Array(7);
dayoftheWEEK[0]='Sunday';
dayoftheWEEK[1]='Monday';
dayoftheWEEK[2]='Tuesday';
dayoftheWEEK[3]='Wednesday';
dayoftheWEEK[4]='Thursday';
dayoftheWEEK[5]='Friday';
dayoftheWEEK[6]='Saturday';

function returndayoftheWEEK(x){
    return (x < 1) || (x > 7)? null : dayoftheWEEK[x];
  }
  console.log(returndayoftheWEEK(2));