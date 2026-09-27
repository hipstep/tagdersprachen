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

  const fieldPositions =[
    {x: 9, y:16},
    {x: 5, y:10},
    {x: 11, y:6},
    {x: 15, y:12},
    {x: 20, y:18},
    {x: 25, y:15},
    {x: 23, y:9},
    {x: 28, y:5},
    {x: 32, y:10},
    {x: 32, y:17},
  ]

  function renderPlayers(){
    document.querySelectorAll(".teamBall").forEach((val) =>{
      const team = val as HTMLElement;
      const elementId = team.getAttribute("id");
      const teamId: number = elementId ? parseInt(elementId[8]) : 0;
      setTimeout(() => {
        const animation = document.getElementById(elementId ? elementId : "")!.animate([
                {
                  transform: "scale(100%)",
                },
                {
                  transform: "scale(1%)",
                },
                {
                  transform: "scale(150%)"
                },
                {
                  transform: "scale(100%)"
                }
            ],
            500)
        animation!.play()
  
        setTimeout(() => {
          team.style.setProperty("grid-column-start", `${fieldPositions[teamsPositions[teamId]].x}`);
          team.style.setProperty("grid-column-end", `${fieldPositions[teamsPositions[teamId]].x}+1`);
    
          team.style.setProperty("grid-row-start", `${fieldPositions[teamsPositions[teamId]].y}`);
          team.style.setProperty("grid-row-end", `${fieldPositions[teamsPositions[teamId]].y}+1`);
        }, 125)
      }, 400)
    })
  }

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
    renderPlayers();
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

  
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelectorAll(".teamBall").forEach((val) =>{
        const team = val as HTMLElement;
        
        team.style.zIndex = parseInt(team.style.zIndex) >= 14 ? "10" : `${parseInt(team.style.zIndex)+1}`;
      })
    }, 2000)

    return () => clearInterval(interval);
  }, [])
  

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

        <button onClick={resetLocalStorage} className="-row-start-3 col-start-2 col-end-8 cursor-pointer text-black border-2 font-bold text-4xl rounded-3xl bg-[#bfa87d] hover:bg-[#d1c6b2] cloister-black">RESET</button>

        <div className='teamBall rounded-full bg-[#2f4676] border-2 border-[#223252]' id='teamBall0' style={{zIndex: 14, gridColumnStart: 9, gridRowStart: 16}}/>
        <div className='teamBall rounded-full bg-[#783c39] border-2 border-[#4a2523]' id='teamBall1' style={{zIndex: 13, gridColumnStart: 9, gridRowStart: 16}}/>
        <div className='teamBall rounded-full bg-[#543664] border-2 border-[#362240]' id='teamBall2' style={{zIndex: 12, gridColumnStart: 9, gridRowStart: 16}}/>
        <div className='teamBall rounded-full bg-[#7a6a3f] border-2 border-[#4f4528]' id='teamBall3' style={{zIndex: 11, gridColumnStart: 9, gridRowStart: 16}}/>
        <div className='teamBall rounded-full bg-[#34442d] border-2 border-[#1b2418]' id='teamBall4' style={{zIndex: 10, gridColumnStart: 9, gridRowStart: 16}}/>
      </div>
      {(
        (isQuestionWindowOpen || isEndOfGame)
        &&
        <div className="bg-black/60 top-0 left-0 absolute z-20" style={{width: "100vw", height: "100vh"}}/>
      )}
      
    </>
  )
}

export default App
