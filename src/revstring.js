// function reverseString(str) {
//     var newString = "";
//     //console.log(str.length);
//     for (var i = str.length-1; i >=0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('car'));

// function swap(x,y)
// {
//    x = x + y;
//    y = x - y;
//    x = x - y;
//    console.log("swap value of x is  " + x);
//    console.log("swap value of y is  " + y);
// }
//
// swap(10,20);

function swapString(str1) {
  var str = str1.split('');
    var temp;
    var j= str.length-1;

    for (var i = 0; i < j; i++,j--){
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
   console.log('Reverse string is  '+str.join(''));
}

swapString('car');
