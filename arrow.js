// function doubleIt(num){
//     return num*2;
// }
const doubleIt = num => num *2;
const add = (x , y) => x+y;
const result = add(50,70);
console.log(result);

const doMath = (x,y) => {
    const sum = x + y;
    const dif = x - y;
    const result = sum * dif;
    return result;
}
const math = doMath(7,5);
console.log(math);