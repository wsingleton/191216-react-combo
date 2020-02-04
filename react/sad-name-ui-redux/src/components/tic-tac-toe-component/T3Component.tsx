import React from 'react';
import { T3DisplayComponent } from'./tic-tac-toe-display-component/T3DisplayComponent';
import { Button } from 'reactstrap';

interface ITicTacToeProps {
    board: string[][],
    xTurn:boolean,
    winner:string,
    T3CellClick:(x:number, y:number) => void,
    T3Reset:() => void

}

export class T3Component extends React.Component<ITicTacToeProps> {
    constructor(props: ITicTacToeProps) {
        super(props)
        this.state =  {
            xcoord: 0,
            ycoord: 0,
            board: [['temp']]
        }
    }

    

    render() {
        return (
            <div className="gameboard">
                <h1>TIC TAC TOE</h1>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={ () => this.props.T3CellClick(0,0) }>{this.props.board[0][0]}</td>
                            <td onClick={ () => this.props.T3CellClick(0,1) }>{this.props.board[0][1]}</td>
                            <td onClick={ () => this.props.T3CellClick(0,2) }>{this.props.board[0][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={ () => this.props.T3CellClick(1,0) }>{this.props.board[1][0]}</td>
                            <td onClick={ () => this.props.T3CellClick(1,1) }>{this.props.board[1][1]}</td>
                            <td onClick={ () => this.props.T3CellClick(1,2) }>{this.props.board[1][2]}</td>
                        </tr>
                        <tr>
                            <td onClick={ () => this.props.T3CellClick(2,0) }>{this.props.board[2][0]}</td>
                            <td onClick={ () => this.props.T3CellClick(2,1) }>{this.props.board[2][1]}</td>
                            <td onClick={ () => this.props.T3CellClick(2,2) }>{this.props.board[2][2]}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>IT IS CURRENTLY {this.props.xTurn ? 'X' : 'O'}'S TURN</h3>
                <h4>{this.props.winner}</h4>
                <Button color='info' onClick={this.props.T3Reset} disabled={!!this.props.winner}/>
            </div>
        )
    }
}