The first column is what your opponent is going to play:
A for Rock, B for Paper, and C for Scissors.

The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors

The score for a single round is the score for the shape you selected 
1 for Rock, 2 for Paper, and 3 for Scissors

plus the score for the outcome of the round 
(0 if you lost, 3 if the round was a draw, and 6 if you won)

---

Rock wins over Scissors
Scissors wins over Paper
Paper wins over Rock

Rock:     A  X
Paper:    B  Y
Scissors: C  Z

Score by Shape
Rock:      1
Paper:     2
Scissors:  3

Score by Outcome
Lost: 0
Draw: 3
Won:  6

total score per round
score = (Score by Shape) + (Score by Outcome)

---

Sample Input
A Y
B X
C Z

1 - shapeOpponent = A (Rock)
    shapePlayer = Y (Paper)
    Paper wins over Rock => Player wins =>outcome sore =6
    Score by shape= 2 (Paper)
    Total by round = 2 + 6 = 8

2 - shapeOpponent = B (Paper)
    shapePlayer = X (Rock)
    Paper wins over Rock => Player lose =>outcome score=0
    Score by Shape= 1(Rock)
    Total by round = 1 + 0 = 1

3 - shapeOpponent = C (Scissors)
    sphapePlayer = Z (Scissors)
    Draw: Scissors  => Draw => outcome score=3
    Score by Shape = 3
    Total by round = 3 + 3 = 6

Game total score
score = 8 + 1 + 6 = 15

-----
Part 2

how the round needs to end
X lose
Y draw
Z win

Sample Input
A Y
B X
C Z

1 - shapeOpponent = A (Rock)
    roundNeedToEnd = Y (draw) outcome score=3
    playerShape = X (Rock) Score by Shape = 1
    Total by round = 3 + 1 = 4

2 - shapeOpponent = B (Paper)
    roundNeedToEnd = X (lose) outcome score=0
    playerShape = B (Rock) Score by Shape = 1
    Total by round = 0 + 1 = 1

3 - shapeOpponent = C (Scissor)
    roundNeedToEnd = Z (win) outcome score=6
    playerShape = B (Rock) Score by Shape = 1
    Total by round = 6 + 1 = 7

    TotalScore = 4 + 1 + 7 = 12






