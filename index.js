console.log( x() );     // Not display errror because 
                          // the interpreter appears to move the declaration of functions, variables or classes to the top of their scope.

function x() {
    function y() {return 1};
    return y();
    function y() {return 0};
}

// What does function x will return ?
// - Error
// - 1
// - 0

// Your Answer:
        // It willn't return error , It will return 0 .