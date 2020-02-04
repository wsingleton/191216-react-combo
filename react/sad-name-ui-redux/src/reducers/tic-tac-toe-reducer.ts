import { ITicTacToeState } from ".";
import { T3Types } from "../action-mappers/t3-actions";

const initialstate:ITicTacToeState = {
    board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ],
    winner:'',
    xTurn:true
}

export const t3Reducer = (state = initialstate, action:any) => {
    switch(action.type) {
        case T3Types.T3_CELL_CLICK: {
            let {x, y } = action.payload
            if(state.winner) {
                return state
            }
            if(state.board[x][y] !== ' ') {
                return state
            }
            let newBoard = [[...state.board[0]], [...state.board[1]], [...state.board[2]]];
            state.xTurn ? newBoard[x][y] = 'X' : newBoard[x][y] = 'O';
            let newWinner = checkWinner(newBoard);
            if(!newWinner) {
                return {
                    ...state,
                    board:newBoard,
                    xTurn: !state.xTurn
                }
            } else{
                return {
                    ...state,
                    board:newBoard,
                    winner: newWinner + ' Is the winner'
                }
            }
        }
        case 'reset game': {

        }
        default:
            return state;
    }   
}

export const checkWinner = (board: string[][]) => {
    //all horizontals
    let res = ''

    for (const row of board) {
        if ((row[0] === row[1]) && (row[0] === row[2]) && row[0] !== ' ') {
            res = row[0]
        }
    }
    if(!res){
        res = board[0].reduce((total, cell, index) => {
            if ((cell === board[1][index]) && (cell === board[2][index]) && cell !== ' ') {
                return total + cell
            } else {
                return total + ''
            }
        }, '')
    } 
    if (((board[0][0] === board[1][1] && board[0][0] === board[2][2])
        || (board[2][0] === board[1][1] && board[2][0] === board[0][2]))
        && board[1][1] !== ' ') {
        res = board[1][1]
    }

    return res
}