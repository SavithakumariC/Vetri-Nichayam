import React, { useState } from 'react'
import "./Dice.css"

function Dice() {
    // const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [player1, setPlayer1] = useState(1)
    const [player2, setPlayer2] = useState(1)
    const [result,setResult] = useState("Let's start")

    const generateRandomNum = ()=>{

     const num1 = Math.floor(Math.random()*6) + 1 
     const num2 = Math.floor(Math.random()*6) + 1 
     setPlayer1(num1)
     setPlayer2(num2)
     setResult(num1>num2 ? "Player1 wins 🚩" : num1<num2 ? "Player 2 wins 😎" : "Match Draw 🫡")
    }

  return (
    <div>

    <h1 id="result">{result}</h1>
    <div className="container">
      <div>
        <p>Player 1</p>
        <img src={`./images/dice${player1}.png`} id="dice1" />
      </div>
      <div>
        <p>Player 2</p>
        <img src={`./images/dice${player2}.png`} id="dice2" />
      </div>
    </div>
    <button id="rollButton" onClick={generateRandomNum}>Roll Dice</button>
      
    </div>
  )
}

export default Dice
