
/**
 * Let's see what some of our newer array methods are...
 */

/**
 * Find Method:
 */
var myArray = [ 'Hello, World!', 2, 3, true, 5, null, 38 ];
var myValue = myArray.find( function ( element ) { return element > 4; } );
console.log( myValue ); // Returns 5, an element from our array! Only gives us one item back.

// For checking if an element exists in the array.
var isMyStringInside = myArray.find( function ( element ) { return element === 'Hello, World!'; } );
console.log( isMyStringInside ); // We would get the matching element.

// Find is helpful for checking if an element exists in an array!
var isMyStringInside = myArray.find( function ( element ) { return element === 'Goodbye, Everyone :('; } );
console.log( isMyStringInside ); // Not found :(

/**
 * .findIndex()
 */

// Still searching for an element!
var findAnIndex = myArray.findIndex( function ( element ) { return element === 2; } );
console.log( findAnIndex ); // But this time, it returned the value's INDEX.

/**
 * .entries()
 */

var pairing = myArray.entries();
console.log( pairing );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );
console.log( pairing.next().value );

//We can pass a string to Array's method, and break each character out into an array!
var fromArray = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log(fromArray); //Oh geeze, thats a 26-element array row.
var fromArray2 =Array.from('Hello world');
console.log (fromArray2);

var filtered = myArray.filter(function(element){return element >4;});
console.log(filtered);//ALL matched returned! 5 and 38.

/**
 * reduce() method:
 * We can add on to a value, returns only a single.
 */
 var ReduceResult = myArray.reduce(
     function(accumulator, currentVal)
 { return accumulator + currentVal;});
 console.log(ReduceResult);

 var x=3;//Standard variable declaration. Function-scoped.
 let y =7;//Let is block-scoped.
 const z=36;//Const is block-scoped but reassignment is not allowed.

 //z=16;// Not allowed! Constmust remain with its original assignment.

 y=13
console.log(y);

for (var myVar =0; myVar <10; myVar++)
{
    console.log('For loop iteration')
}

console.log ('myVar ='+myVar);

//LET is block scoped...it lives and dies in any block (like an if, or a loop!)
for(let myNewVar = 0; myNewVar <10; myNewVar++)
{
    console.log('For loop iteration...');
    console.log('myNewVar =' +myNewVar );
}

//console.log('myNewVar ='+myNewVar); //We cant access it outside of the block.

/**
 * Const cant be re-assigned...but its insides can be manipulated
 */

 const myObj = {
     name:'Henry',
     age:18
 }

 myObj.name = 'Sandy';//Can we update PROPERTIES or array ELEMENTS inside of a constant-declared variable? YES cos you are not assigning to a constant directly but only manipulating thr inside
 myObj.hobbies =[];
 myObj.hobbies.push('Mountain Climbing');
 console.log(myObj);

 //myObj ={}//This would still error. Only insisdes for a cosnt can be manipulated.

 /**
  * Lets shake things up with Functions:
  * New syntax...
  */

  //Classic function declaration...
  function myFunction(a,b)
  {
      return Number(a) + Number (b);
  }

  console.log(myFunction(3,7));

  //ES6 Style:
  myFunction = (a,b) => Number(a) + Number(b);
  console.log(myFunction(3,8));

  //Bigger Function
  myOtherFunction =(a,b) =>
  {
      const myAnswer = Number(a) +Number(b);
      return myAnswer;
  }

  console.log (myOtherFunction(34,6));


  /**
   * Function default parameter values.
   */

   //We can set defaults, to prevent errors in case nothing gets passed in a  parameter!
   addNums = (x=0, y=0) => x+y;
   console.log(addNums()); //No arguments! But our default values kick in!

   /**
    * Rest Parameter.
    */

    findHighNum =(minNum =0, ...args) => {
        //...args will capture any number of arguments that we pass!
        minNum =  Number(minNum);
        if (minNum ==NaN) minNum =0;
        const highNums =args.filter((element) => element >minNum);
        //console.log(args);//It can be called by the name we had in between our parenthesis.
        return highNums;
    
    }
        console.log (findHighNum(5,2,20,20,3,0,10,24,-508));
    

    addAllNums = (...nums) => nums.reduce((a,v) => a+v);
    console.log(addAllNums(64,6,10,20));

    /**
     * Template Literals
     */

     const helloVar = 'Hello, World';
     const sampleName ='Sam';

     const myNewString = `Hey there, my name is ${sampleName}; I'd  like to give you a big: "${helloVar}"!!`;
    // The syntax for template literals is:${variable Name}

    //NOTE: This only works inside of backticks!But is super useful. It saves us from extra concatenation.

    console.log(myNewString);

    /**
     * Spread Operator
     * Dont get this confused with the rest parameter! Both are three dots...
     * Remember that the rest parameter is always in PARAMETER area of a function, nowhere else. Spread is used  ANYWHERE else basically
     */

     const newArray =['Hello', ',', ' ', 'World', '!']
     console.log(newArray);
     console.log(...newArray); //Brought the values int he array together as one (space-separated) string. Or did it?

     //spread operator separates into separate values.
     const aBunchofNums = [5,10,36,58];
     console.log(addAllNums(5,10,36,58)); //Spreading an argument.

     /**
      * string methods
      */
    /**
     * Search() Method:
     */

     const myTestString ='Greetings, programs!';
     console.log(myTestString.search(/TING/i));

     const myReplacedString =myTestString.replace(/Programs/i,'World');
     console.log(myReplacedString);


     {
         const myBlockNestedVar = 38;
     }

     //console.log(myBlockNestedVar);
     //We CAN name blocks if we want.

     myOrganizeName:{
         //This could be named aanything...//We can organize some code in here, and control scope of let/const.

         let myBlockNestedVar =55;//We used the same name as in our unamed block!
         myBlockNestedVar++;
         console.log(myBlockNestedVar);
         myFinalResult = myBlockNestedVar;
     }
     console.log(myFinalResult);

     /**
      * Classes
      * Check our impoert, thats how we are accessing this!
      */
     class Movie {
        constructor( name, genre, year ) {
            this.name = name;
            this.genre = genre;
            this.year = year;
        }
        showPoster() { // This is a method! We can name them as we'd like.
            const info = `
                MOVIE INFO
                ==========
                Name: ${this.name}
                Genre: ${this.genre}
                Year: ${this.year}
            `;
            return info;
        }
    }
   
                
    
    
    const tron = new Movie( 'Disney\'s TRON', 'Adventure', 1982 );
    const dragonheart = new Movie( 'Dragonheart', 'Medieval Fantasy', 1996 );
    const godfather = new Movie( 'Godfather II', 'Action/Thriller', 1974 );
    
    console.log( tron );
    console.log( dragonheart );
    console.log( godfather );




