/**
 * @param {string[]} board
 * @return {string}
 */
var tictactoe = function (board) {
    let changeBoard = board.join("").split("");
    if (changeBoard[0] === " " && changeBoard.length === 1) {
        return "Draw";
    }
    console.log(changeBoard);

    let lens = changeBoard.length;
    let N = Math.sqrt(lens);
    let absSum = 0;

    for (let i = 0; i < lens; i++) {

        if (changeBoard[i] == " ") {
            changeBoard[i] = 0;
        } else if (changeBoard[i] == "O") {
            changeBoard[i] = -1;
        } else {
            changeBoard[i] = 1;
        }

        absSum += Math.abs(changeBoard[i]);
    }

    console.log("changeBoard: " + changeBoard);
    console.log("absSum: " + absSum);

    // 没有空位的情况

    // 行判断
    for (let i = 0; i < N; i++) {
        var lineSum = 0;
        for (let j = 0; j < N; j++) {
            lineSum += changeBoard[i * N + j];
        }
        console.log("lineSum: " + lineSum);
        if (lineSum === N) return "X";
        if (lineSum === -N) return "O";
    }

    //列判断
    for (let i = 0; i < N; i++) {
        var rowSum = 0;
        for (let j = 0; j < N; j++) {
            rowSum += changeBoard[i + j * N];
        }
        console.log("rowSum: " + rowSum);
        if (rowSum === N) return "X";
        if (rowSum === -N) return "O";
    }

    //正对角线判断
    var diagonalSum = 0;
    for (let i = 0; i < N; i++) {
        diagonalSum += changeBoard[i * N + i];
    }
    console.log("diagonalSum: " + diagonalSum);
    if (diagonalSum === N) return "X";
    if (diagonalSum === -N) return "O";

    //反对角线判断
    var diagonalSum2 = 0;
    for (let i = 1; i < N + 1; i++) {
        diagonalSum2 += changeBoard[i * N - i];
    }
    console.log("diagonalSum2: " + diagonalSum2);
    if (diagonalSum2 == N) return "X";
    if (diagonalSum2 == -N) return "O";


    return absSum == lens ? "Draw" : "Pending";

};

console.log(tictactoe(["OX ", "OX ", "O  "]));