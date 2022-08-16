var finalValue = {};
function magin(user, parent) {

  for(let key in user) {
    //  console.log(typeof user[key]);
     if(typeof user[key]  == "object") { 
        console.log(user[key]);
         magin(user[key], `${parent}_${key}`);
    } else {
       console.log("flase");
       finalValue[`${parent}_${key}`] = user[key];
    }
  }

}