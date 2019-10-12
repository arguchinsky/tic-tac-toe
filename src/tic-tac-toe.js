class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]

        this.turn = true;
    }

    getCurrentPlayerSymbol() {
        return this.turn ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.getFieldValue(rowIndex, columnIndex) === null){
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn = !this.turn;
        }
    }

    isFinished() {
        return (this.isDraw() || this.getWinner()) ? true : false;
    }

    getWinner() {
        for (let i = 0; i < this.field.length; i++){
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) return this.field[i][0];
            if (this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) return this.field[0][i];
            if (this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) return this.field[0][0];
            if (this.field[2][0] === this.field[1][1] && this.field[2][0] === this.field[0][2]) return this.field[2][0];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.field.length; i++){
            for (let j = 0; j < this.field.length; j++){
                if (this.field[i][j] === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true: false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
