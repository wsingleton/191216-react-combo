import React from 'react';
import logo from './logo.svg';
import './App.css';

const enum Player {
  None = 0,
  One = 1,
  Two = 2
}

interface IState {
  board: Player[],
  nextPlayerTurn: Player,
  gameIsWon: number
}




class App extends React.Component<{}, IState> {

  public state={
    board: [Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None,Player.None],
    nextPlayerTurn: Player.One,
    gameIsWon: Player.
  }

 public createOnClickHandler =(index: number)=>()=>{
  const { board, nextPlayerTurn }=this.state
  const newBoard = board.slice()
  newBoard[index] = nextPlayerTurn;
  this.setState({board: newBoard, nextPlayerTurn: 3-nextPlayerTurn})
  
 }

  public renderCell = (index: number)=>{
    const { board } = this.state;

    return <div className="cell" onClick={()=>this.createOnClickHandler}/>
  }

  public renderBoard =()=>{
    const { board } = this.state


    return <div className="board-container">{board.map((value, key) => this.renderCell(key))}</div>
  }

  public renderStatus=()=>{
    const { gameIsWon } =this.state
    const winningText = gameIsWon !
  }

  public render(){
    return (
      <div className="App">
      <h1>Tic Tac Toe</h1>
      
      {this.renderBoard()}
      </div>
        
    )

  }


}

export default App;
