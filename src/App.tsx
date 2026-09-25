import { useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow'

import boardBackground from "./assets/photos/boardBackground.png";

function App() {
  const [isQuestionWindowOpen, setisQuestionWindowOpen] = useState(false);

  return (
    <>
      <div 
        className='w-full h-full bg-contain relative'
        style={{backgroundImage: `url(${boardBackground})`}}
        >
      {(
        isQuestionWindowOpen
        &&
        <QuestionWindow />
      )}
      

      <button onClick={() => {setisQuestionWindowOpen(!isQuestionWindowOpen)}}>Change</button>
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
