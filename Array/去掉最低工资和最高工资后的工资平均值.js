/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    // let array = salary.sort((a, b) => a - b);
    // let len = array.length - 2;
    // let temp = 0;
    // array.shift();
    // array.pop();
    // for (let i = 0; i < len; i++) {
    //     temp += array[i];
    // }
    // return parseFloat(temp) / len;

    const extremum = Math.max(...salary) + Math.min(...salary);
    const sum = salary.reduce((prev, curr) => {
        return prev + curr;
    })
    return (sum - extremum) / (salary.length - 2);
};