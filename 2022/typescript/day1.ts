const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
// [24000,11000,10000,6000,4000]


let lines = input.split("\n")
// let maxCalories = 0;
lines.push('');
let currentElfSum = 0;
let elfCalories: number[] = [];
let currentElfIndex = 0;
for( let line of lines){
    if(line.length>0){
        currentElfSum = currentElfSum + Number(line);
        // if(currentElfSum > maxCalories){
        //     maxCalories = currentElfSum;
        // }
    }
    else{
        elfCalories[currentElfIndex] = currentElfSum;
        currentElfIndex++;
        currentElfSum = 0;
    }    
}
console.log(elfCalories)
elfCalories.sort((a,b) => b-a);
console.log(elfCalories)
let firstThreeElfsWithMostCalories:number[] = elfCalories.slice(0,3);

let sumCalories = 0
for(let calorie of firstThreeElfsWithMostCalories){
    sumCalories+= calorie;
}


console.log(sumCalories);