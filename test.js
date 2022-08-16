


const P1 = new Promise((resolve) => {
    console.log(1);
    resolve(25);
    })
    
    console.log(2);
    
    setTimeout(() => {
        console.log(3);
    } , 0)
    
    P1.then(() => {
    console.log(4);
    });
    
    console.log(5);

    //2, 5, 1, 4, 3