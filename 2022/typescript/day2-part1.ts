import * as fs from 'fs';

/*
enum Shape {
    Rock, 
    Paper,
    Scissor
};

let s: Shape;
const r = Math.random();
if (r > 0.5){
    s = Shape.Rock;
}else{
    s = Shape.Paper;
}
if (s === Shape.Rock){
    console.log("Rock !");
}
console.log(s);



Win conditions for Player Shape Table
Rock => Scissor
Scissor => Paper
Paper => Rock

map opponent shape character to shape
'A' = Rock
'B' = Paper
'C' = Scissors

map player shape charater to shape
'X' = Rock
'Y' = Paper
'Z' = Scissor



MapScoreByOutcome:
    Won => 6
    Draw => 3
    Lost => 0

map 

calculateOutcome(player shape, opponent shape){
    if player shape == Rock {
        if opponent == Rock return Draw
        if opponent == Scissor return Won
        if opponent == Paper return Lost
    }

    if player shape == Scissors{
        ...
    }

    if player shape == Paper{
        ...
    }
}

getOpponentShapeByLetter(opponent letter){
    return the opponent shape mapping for letter
}

getPlayerShapeByLetter(player letter){
    return the player shape mapping for letter
}

getScoreFromShape(shape){
    if shape = Rock return 1
    if shape = Paper return 2
    if shape = Scissors return 3
}

totalScore initialized with zero
Loop with input, line by line, every line is a round
for each round {
    compare player shape with opponent shape:
    playerShape = getPlayerShapeByLetter( player letter from input)
    opponentShape = getOpponentShapeByLetter(opponent letter from input)
    outcome = calculateOutcome( playerShape, opponentShape)
    outcomeScore = MapScoreByOutcome[outcome]

    playerShapeScore = getScoreFromShape(playerShape)
    scoreThisRound = outcomeScore + playerShapeScore
    totalScore = totalScore + scoreThisRound
}

return totalScore

*/
const Won = 6;
const Draw = 3;
const Lost = 0;

enum Shape {
    Rock=1, 
    Paper,
    Scissor
};


//map player shape character to shape
const opponentShapeMap = new Map<string, Shape>([
    ['A', Shape.Rock],
    ['B', Shape.Paper],
    ['C' , Shape.Scissor]
]);


//[map opponent shape charater to shape
const playerShapeMap = new Map<string, Shape>([
    ["X" , Shape.Rock],
    ["Y" , Shape.Paper],
    ["Z" , Shape.Scissor]
]);

function calculateOutcome(playerShape: Shape| undefined, opponentShape: Shape| undefined): number{
    if (playerShape == Shape.Rock) {
        if (opponentShape == Shape.Rock) return Draw;
        if (opponentShape == Shape.Scissor) return Won;
        if (opponentShape == Shape.Paper) return Lost;
    }

    if (playerShape == Shape.Scissor){
        if(opponentShape == Shape.Scissor) return Draw;
        if(opponentShape == Shape.Paper) return Won;
        if(opponentShape == Shape.Rock) return Lost
    }

    if (playerShape == Shape.Paper){
        if(opponentShape == Shape.Paper) return Draw;
        if(opponentShape == Shape.Rock) return Won;
        if(opponentShape == Shape.Scissor) return Lost;
    }
    return 0;
}

function getOpponentShapeByLetter(opponentLetter: string): Shape| undefined {
    return opponentShapeMap.get(opponentLetter);

}

function getPlayerShapeByLetter(playerLetter: string): Shape | undefined {
    return playerShapeMap.get(playerLetter);
}

function getScoreFromShape(shape: Shape| undefined): number{
    if (shape == Shape.Rock) return 1
    if (shape == Shape.Paper) return 2
    if (shape == Shape.Scissor) return 3
    return 0;
}

// Read data file
const data = fs.readFileSync(`${__dirname}/day2.data`,'utf-8');
const lines = data.split('\r\n');
let totalScore = 0;
//Loop with input, line by line, every line is a round
for ( let round of lines){  //for each round {
    //compare player shape with opponent shape:
    const splitedInput: string[] = round.split(' ');
    const playerLetter = splitedInput[1];
    const opponentLetter = splitedInput[0];
    const playerShape = getPlayerShapeByLetter( playerLetter);
    const opponentShape = getOpponentShapeByLetter(opponentLetter);
    const outcomeScore = calculateOutcome( playerShape, opponentShape);

    const playerShapeScore = getScoreFromShape(playerShape);
    const scoreThisRound = outcomeScore + playerShapeScore;
    totalScore = totalScore + scoreThisRound;
}

console.log(`total Score: ${totalScore}`)