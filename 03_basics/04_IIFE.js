// Immediately Invoked function Expression (IIFE)

// why IIFE?
// - To avoid pollution from global variable.
//   yes the child function can access the variable global
//   to it. But sometime we don't want it
// - To immediately call a function

(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

(function aurcode(){
    console.log(`User loggedIn`);
}
)();

( //un named IFFE
    (user) => {
        console.log(`${user} got connected!`);
    }
)('Nimisha')


if(100<200) console.log("test"), console.log("test2");


