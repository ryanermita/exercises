// A function that will return the sum of
// all multiples of 3 and 5 below 1000.
//
// if there's a better way. Just open an issue so
// we can discuss. Thanks!
(function(){
  var ans = 0;
  for(var i=0; i<1000; i++){
    if(i%3 == 0 || i%5 == 0){
      ans += i;
    }
    console.log('Ans', ans);
})();
