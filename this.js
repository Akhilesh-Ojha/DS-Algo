// var akhil = {
//     checkThis: function() {
//         console.log('This', this);
//     }
// }

// akhil.checkThis();

// //Here the output output will be akhil object, as value of this depends on caller context;
// //Since akhil is the caller function , this will be akhil


// var func = akhil.checkThis;
// func();
// //IN this case as there is no caller function for func this will be GOLBAL WINDOW



// var akhil = {
//     checkThis: function() {
//         console.log('First This', this);
//         function checkOther() {
//             console.log('Second', this);
//         }
//         checkOther();

//         //Now here the first this will be akhil object as we a have caller context
//         //But for Second this, we call checkOther() directly (without caller context) hence output is window 
//     }
// }

// akhil.checkThis()


// var akhil = {
//     checkThis: function() {
//         "use strict";
//         function checkOther() {
//             console.log(this); //Now here this becomes undefined. so in strict mode we can not have another this when using caller function
//         }
//         checkOther();
//     }
// }

// akhil.checkThis();




//CALL BIND APPLY

//These are different ways to stabalise THIS keyword

//All function in JS are actually objects as well which have certain properties like length, name , prototype etc and some properties are functions as well.


// function akhilesh(arg1) {
//     console.log(this);
// }


// console.log('Function', akhilesh.name , akhilesh.length);

//One such propert that function object has is call()

// akhilesh.call();

//Now as noted in use stric mode value of this is undefined

"use strict"

function ak() {
    console.log(this);
}

// ak.call()

// Now we can pass in argument in call which will make that argument value the value of this

function ako() {
    console.log(this);
}

//This will now be an empty object
// ako.call({})


//Now to solve descrepancy of value of two differet this inside a function we can use call()

var akhil = {
    checkThis: function() {
        //As seen above both this are differet here, which casues discrepancy
        console.log('First This', this);
        function checkOther() {
            console.log('Second', this);
        }
         //checkOther();
        // to solve this issue what we can do is checkOther.call(this) // this this in agrument is now akhil object

        checkOther.call(this); // Here this is akhil. SO this is constant akhil throughout.
    }
}

// akhil.checkThis()

//SO THE FIRST PARAMETER OF CALL IS VALUE OF THIS

function a(b,c,d) {
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
}

// a.call(1,2,3,4);


//Apply works the same way it just take two argument, first value for this and another an array

//Apply is used when we need to pass dynamic datas

// var sumArr = [1,2,3,4,513,3131,121]

//a.apply(1 , sumArr)




// let akhiles = () => {
//     console.log('This outside', this);
//     akhilKey: () => {
//         console.log('This inside', this);
//     }
// }

let akhiles = {
    checkThis: () => {
        console.log('This', this);
    }
}


akhiles.checkThis();


var akhil = {
    checkThis: function() {
        console.log('This', this);
    }
}

akhil.checkThis();
