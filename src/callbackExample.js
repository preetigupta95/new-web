

let divide = (a, b, done)=>{
      if (b === 0){
        done(" b cann't be zero");
      }
      else{
        done(undefined, a/b);
      }
}

let Mathfun ={divide: divide};

module.exports =  Mathfun;


// let a =1;
// let b =0;
// let done = (err, result)=>{
//
// }
