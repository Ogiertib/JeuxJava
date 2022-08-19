
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {PlusCircle, RefreshCw, Download} from 'react-feather'
function App() {
 

  const[round1, setRound1]= useState(0)
  const [round2, setRound2]= useState(0)
  const[hold1, setHold1]= useState(0)
  const[hold2, setHold2]= useState(0)
  const [ChangePlayer, setChangePlayer] = useState(Boolean)
 
  useEffect(()=>{
    setRound1(0)
    setRound2(0)
    setChangePlayer(ChangePlayer =>!ChangePlayer)
  },[hold1, hold2])

  useEffect(()=>{
    if(round1 === 1)
    setChangePlayer(ChangePlayer =>!ChangePlayer)
  },[round1])

  useEffect(()=>{
  if(round2 ===1)
  setChangePlayer(ChangePlayer =>!ChangePlayer)
  },[round2])

  useEffect(()=>{
    if(hold1 >=100)
    alert("Player 1 win the game")
  })
  useEffect(()=>{
    if(hold2 >= 100)
    alert("Player 2 win the game")
  })
 
  const ThrowDice= ()=>{
    return(
      (ChangePlayer === false ? setRound1(Math.floor(Math.random() * (7 - 1)) + 1) : setRound2(Math.floor(Math.random() * (7 - 1)) + 1))
    )
}
const HoldeDice = () => {
  return (
    (ChangePlayer===false? setHold1(round1 + hold1): setHold2(round2 + hold2))
  )
}
  return (
    <div className="App">
     
      <header className="App-header">
            <div className="Player1"> 
              <p class='Player' style={{backgroundColor: ChangePlayer === false  ? 'green' : null}}> Player 1</p>
              <p>Score: {hold1}</p>
              <p>Throw: {round1}</p>
              {ChangePlayer !== true &&(
               <p>Your Turn</p>
              )}
            </div>
            <div class="DiceButton">
               <Button class="btn btn-info"onClick={()=>[setRound1(0), setHold1(0),setHold2(0),setRound2(0)]}><PlusCircle/>  New Game</Button>
               <Button onClick={HoldeDice}><Download/>  Hold</Button>
               <Button class="btn btn-success"onClick={ThrowDice}><RefreshCw/> Throw Dice</Button>
            </div>
           
            <div className='Player2'>
              <p class='Player' style={{backgroundColor: ChangePlayer === true  ? 'green' : null}}>Player 2</p>
            <p>Score : {hold2}</p>
              <p>Throw : {round2}</p>
           
            {ChangePlayer === true &&(
              <p> Your Turn </p>
            )}
          </div> 
      </header>
    </div>
  );
}

export default App;
 