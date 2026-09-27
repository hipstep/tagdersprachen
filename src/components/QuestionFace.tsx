import { useEffect, useState, type ReactElement } from "react";
import data from "../data/data";
import ClickToReveal from "./ClickToReveal";

type propsTypes = {
    questionIndex: number,
    setIsAnsweredCorrectly: any
}

let questionData: any
let setIsAnsweredCorrectly: any

function fisherYatesShuffle(arr: number[]) {
  	for (let i = arr.length - 1; i > 0; i--) {
    	const j = Math.floor(Math.random() * (i + 1));
    	[arr[i], arr[j]] = [arr[j], arr[i]];
  	}
  	return arr;
}



function TongueTwister(){
    return(
        <div className="p-10">
            <p className="h-20 text-4xl">
                die Zungenbrecher
            </p>
            <div className="text-3xl">
                {questionData.text}
            </div>
            <ClickToReveal text={questionData.translation}/>
            <div>
                <button 
                    className="w-30 h-5 rounded-2xl flex justify-center items-center bg-green-500" 
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Dobrze
                </button>
                <button 
                    className="w-30 h-5 rounded-2xl flex justify-center items-center bg-red-500" 
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Źle
                </button>
                
            </div>
        </div>
    )
}
function Translation(){
    return(
        <div className="p-10">
            <p className="h-20 text-4xl">
                die Zungenbrecher
            </p>
            <div className="text-3xl">
                {questionData.word}
            </div>
            <ClickToReveal text={questionData.translation}/>
            <div className="flex justify-around">
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-green-500" 
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Dobrze
                </button>
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-red-500" 
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Źle
                </button>
                
            </div>
        </div>
    )
}
function Rebus(){
    

    return(
        <div className="p-10">
            <p className="h-20 text-4xl">
                der Rebus
            </p>
            <div className="flex justify-center items-center">
                <img 
                    src="/tagdersprachen/rebusPhotos/photo1.png"
                    className=" h-20"
                />
            </div>
            <ClickToReveal text={questionData.word}/>
            <div className="flex justify-around">
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-green-500" 
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Dobrze
                </button>
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-red-500" 
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Źle
                </button>
                
            </div>
        </div>
    )
}
function Trivia(){ // MECHANICS DONE!
    const [indexes, _] = useState(fisherYatesShuffle([0,1,2,3]));
    const [answer, setAnswer] = useState<boolean | undefined>(undefined);
    const [answersArray, setAnswersArray] = useState<React.JSX.Element[]>();

    function choseAnswer(val: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        setAnswer(val===0 ? true : false)
        e.currentTarget.style.setProperty("background-color", "red");
    }

    useEffect(() => {
        let elements : React.JSX.Element[] = [];
        indexes.forEach((val, i) => {
            const element =<button 
                        className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center border-2 hover:bg-[#d1c6b2] duration-300" 
                        onClick={(e) => choseAnswer(val, e)}
                        key={i}
                        id={"answer"+val}
                    >
                        {questionData.answers[val]}
                    </button>
            
            elements.push(element);
        })
        setAnswersArray(elements);
    }, [])

    useEffect(() =>{
        if(answer !== undefined){
            document.getElementById("answer0")?.style.setProperty("background-color", "green");
        }
    }, [answer])
    return(
        <div className="p-10">
            <p className="h-20 text-4xl">
                die Trivia
            </p>
            <p className="text-3xl">
                {questionData.question}
            </p>
            <div 
                className="grid grid-cols-2 grid-rows-2 gap-5 p-5" 
                id="answers"
            >
                {answersArray}
            </div>
            {(
                answer !== undefined
                &&
                <div>
                    {(
                        answer
                        &&
                        <p>Prawidłowa odpowiedź!</p>
                    )}
                    {(
                        answer === false
                        &&
                        <p>Zła odpowiedź!</p>
                    )}
                    <button
                        className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center border-2 hover:bg-[#d1c6b2] duration-300" 
                        onClick={() => setIsAnsweredCorrectly(answer)}
                    >
                        Kontynuuj
                    </button>
                </div>
            )}
        </div>
    )
}
function Connections(){
    return(
        <div className="p-10">
            <p className="h-20 text-4xl">
                die Wortverbindungen
                </p>
            <div className="flex justify-around">
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-green-500" 
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Dobrze
                </button>
                <button 
                    className="cursor-pointer w-1/3 h-20 rounded-2xl flex justify-center items-center bg-red-500" 
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Źle
                </button>
                
            </div>
        </div>
    )
}

function QuestionFace(props: propsTypes){
    questionData = data[props.questionIndex];
    setIsAnsweredCorrectly = props.setIsAnsweredCorrectly;

    const categoryQuestions: Record<string, ReactElement> = {
        "tongue-twister": <TongueTwister/>,
        "translation": <Translation/>,
        "rebus": <Rebus/>,
        "trivia": <Trivia/>,
        "connections": <Connections/>,
    };
    const question = categoryQuestions[questionData.category];


    return(
        <div>
            {question}
        </div>
    )
}

export default QuestionFace