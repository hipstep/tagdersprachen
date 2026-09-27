import { useEffect, useRef, useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow';
import GroupList from './components/GroupList';
import Dice from './components/Dice';

import boardBackground from "./assets/photos/boardBackground.png";


function App() {
  const [isQuestionWindowOpen, setIsQuestionWindowOpen] = useState(false);
  const [diceNumber, setDiceNumber] = useState<number | undefined>(undefined)
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean | undefined>(undefined);

  const [isLastTurn, setIsLastTurn] = useState(false);
  const [isEndOfGame, setIsEndOfGame] = useState(false);

  const currentTeam = useRef(0);
  const [teamsPositions, setTeamsPositions] = useState([0,0,0,0,0]);

  useEffect(() =>{ // sequence after rolling the dice
    if(diceNumber !== undefined){
      setTimeout(() => {
        setIsQuestionWindowOpen(true);
      }, 300)
    }
  }, [diceNumber])

  useEffect(() =>{ // question window animation
    if(isQuestionWindowOpen){
      const animation = document.getElementById('questionWindow')?.children[0]!.animate([
              {
                transform: "scale(60%)",
              },
              {
                transform: "scale(105%)"
              },
              {
                transform: "scale(100%)"
              }
          ],
          100)
      animation!.play()
    }
  }, [isQuestionWindowOpen])

  useEffect(() =>{ // sequence after answering the question
    if(isAnsweredCorrectly !== undefined){
      if(isAnsweredCorrectly && diceNumber !== undefined){
        console.log("Odpowiedziano dobrze na pytanie!");
        setTeamsPositions(teamsPositions.map((val, i) => i === currentTeam.current ? (val + diceNumber >= 9 ? 9 : val + diceNumber) : val));
      }
      
      setIsQuestionWindowOpen(false);
      setDiceNumber(undefined);
      setIsAnsweredCorrectly(undefined);
      currentTeam.current = ((currentTeam.current + 1) % 5);
    }
  })

  useEffect(() =>{ // checks if there is a winner
    if(teamsPositions.includes(9)){
      setIsLastTurn(true);
    }
    if(teamsPositions.includes(9) && currentTeam.current === 0 && isLastTurn){
      setIsEndOfGame(true);
    }
  }, [teamsPositions])

  useEffect(() =>{
    if(isEndOfGame)
      console.log("Koniec gry!");
  }, [isEndOfGame])

  function resetLocalStorage(){
        localStorage.clear();
  }

  return (
    <>
      <div 
        className='w-full h-full bg-contain relative grid-cols-37 grid-rows-21 grid'
        style={{backgroundImage: `url(${boardBackground})`}}
        >
        {(
          isQuestionWindowOpen
          &&
          <div id='questionWindow'>
            <QuestionWindow setIsAnsweredCorrectly={setIsAnsweredCorrectly} diceRoll={diceNumber}/>
          </div>
        )}
      
        <GroupList currentGroup={currentTeam.current} teamsPosition={teamsPositions}/>

        <Dice setDiceNumber={setDiceNumber} />

        <button onClick={resetLocalStorage} className="absolute bottom-0 right-0 cursor-pointer text-white font-bold">Zresetuj pytania</button>
      </div>
      {(
        (isQuestionWindowOpen || isEndOfGame)
        &&
        <div className="bg-black/60 top-0 left-0 absolute z-0" style={{width: "100vw", height: "100vh"}}/>
      )}
      
    </>
  )
}

export default App
