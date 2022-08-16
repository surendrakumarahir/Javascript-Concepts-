const fireGun  = function() {
    console.log("fire gun");
}
const throtting = function(fn, delay) {
    let flag = true;
    return function(){
        if(flag) {
            fn();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay)
        }
    }
}
const handleThrolling = throtting(fireGun, 200);