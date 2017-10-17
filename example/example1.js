
function promiseCheck(age){
  console.log("Checking a users age....");
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      if(age >= 13){
        resolve("allowed");
      }else{
        reject("user is not old enough");
      }
    }, 2500);
  })

}

promiseCheck(13).then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err)
});
