import { useEffect, useRef, useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow'

import boardBackground from "./assets/photos/boardBackground.png";
import GroupList from './components/GroupList';
import Dice from './components/Dice';

function App() {
  const [isQuestionWindowOpen, setIsQuestionWindowOpen] = useState(false);
  const [diceNumber, setDiceNumber] = useState<number | undefined>(undefined)
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState<boolean | undefined>(undefined);
  const currentTeam = useRef(0);

  useEffect(() =>{
    if(diceNumber !== undefined){
      setIsQuestionWindowOpen(true);
    }
  }, [diceNumber])

  useEffect(() =>{
    if(diceNumber !== undefined){
      console.log("wylosowano: " + diceNumber)
    }
  }, [diceNumber])

  useEffect(() =>{
    if(isAnsweredCorrectly !== undefined){
      if(isAnsweredCorrectly)
        console.log("działa!");
    }
  })

  return (
    <>
      <div 
        className='w-full h-full bg-contain relative grid-cols-37 grid-rows-21 grid'
        style={{backgroundImage: `url(${boardBackground})`}}
        >
        {(
          isQuestionWindowOpen
          &&
          <QuestionWindow setIsAnsweredCorrectly={setIsAnsweredCorrectly}/>
        )}
      
        <GroupList currentGroup={currentTeam.current} />

        <Dice setDiceNumber={setDiceNumber} />

        <button onClick={() => {setIsQuestionWindowOpen(!isQuestionWindowOpen)}} className='bg-red-500'>Change</button>
      </div>
      {(
        isQuestionWindowOpen
        &&
        <div className="bg-black/60 top-0 left-0 absolute z-0" style={{width: "100vw", height: "100vh"}}/>
      )}
    </>
  )
}

export default App
