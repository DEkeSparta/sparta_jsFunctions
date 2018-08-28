var arr = [[34,65,54],[76,32,74],[43,86,32]];
console.log(printPrimes());
console.log(secondLargest(arr));
console.log(countEven(arr));
console.log(printAllDoWhile(arr));
console.log(printAllForIn(arr));

function printPrimes(){
  var result = "";
  for(var i=2;i<=177;i++){
    isPrime = true;
    for(var j=2;j<Math.pow(i,0.5);j++){
      if(i%j==0){
        isPrime = false;
        break;
      }
    }
    if(isPrime) result += i + ", ";
  }
  return result;
}

function secondLargest(arr2D){
  var first = null;
  var second = null;

  for(var i=0; i<arr2D.length;i++){
    for(var j=0; j<arr2D[i].length;j++){
      if(first==null) first = arr2D[i][j];
      else if(arr2D[i][j] > first){
        second = first;
        first = arr2D[i][j];
      }
      else if(second==null) second = arr2D[i][j];
      else if(arr2D[i][j] > second){
        second = arr2D[i][j];
      }
    }
  }
  return second;
}

function countEven(arr2D){
  var count = 0;
  for(var i=0; i<arr2D.length; i++){
    for (var j = 0; j < arr2D[i].length; j++) {
      if(arr2D[i][j]%2==0) count++;
    }
  }
  return count;
}

function printAllDoWhile(arr2D){
  var i=0;
  var j;
  var output = "";
  do{
    j=0;
    do{
      output += arr2D[i][j] + ", ";
      j++;
    }while(j<arr2D[i].length);
    i++;
  }while(i<arr2D.length);
  return output;
}

function printAllForIn(arr2D){
  var output = "";
  var i=0;
  for (var row in arr2D){
    for (var col in arr2D[row])  {
      output += arr2D[row][col] + ", ";
    }
  }
  return output;
}
