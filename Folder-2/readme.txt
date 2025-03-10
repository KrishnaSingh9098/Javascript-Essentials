//   ----  DATATYPES ----  //

1. Primitives - DATATYPES

a. Number (10,10.5,10.5555).
b. String ('a', "Krishna Singh", "Learning Is Art").
c. Boolean (true,false).
d. Undefined
e. Null
f. BigInt
g. Symbol


2. Reference - DATATYPES [Non-Primitives Also]

a. Arrays
b. Object : Collection Of diffferent Variables.
c. Functions



 /*  Prompt  */ -- Prompt("Enter Your Age) : 

 Jab bhi hum prompt ke through kis cheej ko store krte hai toh uska type String hota hai.

    Example :                       var age = prompt("enter Your Age")
                                         console.log(typeof(age)) 


Strings: Strings Can be Added BUt Not Substract, Multiply, Divided .If we done this they gives us a NaN .
         Which we Basically Called Not a Number. Here Comes New Logic Called Concatenation.



TypeConversion : Type conversion is the process of converting a variable from one data type to another.
                 It can be either implicit (automatic) or explicit (manual) depending on the situation.

Hindi-Me : Type conversion ek process hai jisme ek variable ko ek data type se doosre data type mein convert kiya jata hai.
           Ye implicit (automatic) ya explicit (manual) ho sakta hai, situation ke hisaab se.

                                           /* ---- Undefined-Data Type ---- */

English: In JavaScript, undefined is a data type that indicates a variable has been declared but not assigned a value.
         It is automatically assigned when a variable is declared without an initial value.

Hindi-Me: JavaScript mein undefined ek data type hai jo batata hai ki variable declare toh kiya gaya hai,
          lekin usse koi value assign nahi ki gayi. Ye automatically assign hota hai jab variable ko initial
          value diye bina declare kiya jata hai.
                     
                                         /* ---- Null-Data Type ---- */     

English: In JavaScript, null is a special data type that represents the intentional absence of any object value.
         It is used to indicate that a variable is empty or has no value.

Hindi-Me: JavaScript mein null ek special data type hai jo kisi object value ki jaan bhoojh ke absence ko represent karta hai.
          Ye isliye use hota hai jab variable empty ho ya uska koi value na ho.

                                         /* ---- BigInt-Data Type ---- */  
                                    
English: In JavaScript, BigInt is a data type used to represent large integers that are beyond the limits of the Number type.
         It is created by appending n to a number, like 123456789012345678901234567890n.

Hinglish: JavaScript mein BigInt ek data type hai jo bohot bade integers ko represent karta hai jo Number type ke limits se bahar 
          hote hain. Ye n append karke banaya jata hai, jaise 123456789012345678901234567890n.   2^53-n 

                                         /* ---- Symbol-Data Type ---- */        

English: In JavaScript, Symbol is a primitive data type used to create unique and immutable values, often used as object property keys.
         It is created using Symbol() like let sym = Symbol('description').

Hinglish: JavaScript mein Symbol ek primitive data type hai jo unique aur immutable values banata hai, jo zyada tar object property keys 
          ke liye use hota hai. Ye Symbol() se banaya jata hai, jaise let sym = Symbol('description').

                                         /* ---- H-O-I-S-T-I-N-G ---- */ 

 Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their scope during compilation.
                       However, only the declarations are hoisted, not the initializations or assignments.


  Example-1 : var a :  hoisting moves the declaration to the top.
              console.log(a) :  outputs undefined
              a=10 : before the assignment . The initialization happens after the declaration is hoisted.
                                        
  Example-2 : var a;
              console.log(a);
              a=10;
              console.log(a);



                                        /* ----C-O-N-D-I-T-I-O-N-A-L-S---- */

       Conditionals in JavaScript are used to execute code based on whether a condition is true or false, using statements 
       like if, else if, and else. They allow branching logic to control the flow of the program based on different conditions.                                      

 IF - Statement   if(){              else-if - Statement  else-if(){                   else{
                        
                      }                                            }                       }

Example-1 : var age = Number(prompt("Enter your age:"));

                          if (age > 18 && age < 32) {
                            console.log("You can go to OYO.");
                                } else if (age > 50) {
                           console.log("Why are you going to OYO? Viagra doesn't work on you.");
                           } else {
                            console.log("Pogo dekho beta, jaake.");
                            }


                                          /* - L-O-O-P-S - */

  For-Loop : for(int i=1;i<=n;i++){                                              .initialization Condition
                  //Body of the loop                                             .Stopping Condition
                                 }                                               .Updation


  While-Loop : while(condition) {                                    Example: let i=1;
                   //Do SOme Work                                             while(i<=5){
                               }                                                  console.log("i" + i);
                                                                                     } i++;
                                                                                  
 [ IN While Loop Condition Check at the Start OF the Loop ].


 Do-While-Loop : do{                                                Example: let i=2;
            // Do Some Work                                                  do{
               }                                                               console.log("Krishna Thakur");
               while(Consdition);                                                i++;
                                                                                }
                                                                             while(i<=5);
                                                                              

  ^-^ Condition Check at the End Of The Loop ^-^
                      