//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  console.log("me", me);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; 
  
  me.printIntroduction();

  console.log(person);



  ///The Object.entries() method returns an array of a given object's own enumerable string-keyed property 
  //[key, value] pairs. This is the same as iterating with a for...in loop,
   //except that a for...in loop enumerates properties in the prototype chain as well.

//The order of the array returned by Object.entries() is the same as that provided by a for...in loop. 
//If there is a need for different ordering, then the array should be sorted first,
// like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.


const object1 = {
    a: 'somestring',
    b: 42
  };
  
  console.log(Object.entries(object1));
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }