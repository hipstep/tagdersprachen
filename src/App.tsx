import { useState } from 'react'
import './App.css'
import QuestionWindow from './components/QuestionWindow'

function App() {
  const [test, setTest] = useState(true);

  return (
    <>
    {(
      test
      &&
      <QuestionWindow />
    )}

    <button onClick={() => {setTest(!test)}}>Change</button>
    </>
  )
}

export default App
