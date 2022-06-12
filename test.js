const prompt = require('prompt-sync')();
var x = prompt('Please input a number: ')

function collatz(){
    while(true){

        if(x % 2 == 0){
            x = x / 2
            console.log(x)
        }
        else if (x == 1){
            return true;
        }
        else {
            x = (3 * x) + 1
            console.log(x)
        }
    }
}

collatz();