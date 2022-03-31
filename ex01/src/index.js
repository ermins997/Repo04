function main(numOne,numTwo){

    var quotinet;
    var numOne;
    var numTwo;
    if(numTwo===0){
        quotinet = 'Divide by 0! Cannot divide by zero!';
    } else{
        //only change code bellow this line
       quotinet = numOne / numTwo;
        //only change code above this line
    }

    return quotinet;
}

console.log(main(15,3));
console.log(main(25,5));
console.log(main(420,10));
console.log(main(55,0));

module.exports = main;