// create a function that adds two numbers together
const add = (firstNum, secondNum) => {

  //console.log ('FIRST NUM: ${firstNum}');
  //console.log ('SECOND NUM: ${secondNum}')
  return firstNum + secondNum; 
}




//add takes two numbers










//testing
const sum = add(10, -20);

console.log (sum);


//create a function that takes in an array and returns the average number

//create a function called getAverage
//getAverage takes in an array
const getAverage = () => {
  //find the total of all numbers
  const sum = numbers.reduce((accumulator, currentNumber) => {
    return accumulator + currentNumber;
    //console.log ('ACCUMULATOR', accumulator);
    //console.log ('CURRENT NUM', currentNumber);
  }, 0 )

//divide by amount of numbers in array
  const average = (sum / numbers.length);
  
  return average;
  //const total = getAverage()
}

//play with this anon func (accumulator, currentNumber) => {
 // return accumulator + currentNumber;
  //console.log ('ACCUMULATOR', accumulator);
  //console.log ('CURRENT NUM', currentNumber);
//},

//testing

const testScores = [78, 67, 89, 56, 100, 99, 20, 85];
const ages = [56, 32];
const rushingYards = [34,-2, -20, 90];
const myGrade = [110]



const total = getAverage (ages);
console.log (total);
