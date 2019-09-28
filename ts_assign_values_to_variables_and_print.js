let x = 600; // read this as : take 500 and put it into the variable x. 

console.log("Before x = x + 2");
console.log("printing x+2 and x");
console.log(x+2); //***** Important: x is still 500! this just prints 500+2 = 502
console.log(x); //x is still 500! this prints 500

x = x + 2;  //Read this as : take 500+2 and put it into the variable x. 
            //Now x has changed to 502 and x+2 is 504

console.log("After x = x + 2");
console.log("printing x+2 and x");
console.log(x+2);
console.log(x);

