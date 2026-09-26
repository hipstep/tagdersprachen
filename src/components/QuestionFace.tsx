import type { ReactElement, ReactNode } from "react";
import data from "../data/data";
import ClickToReveal from "./ClickToReveal";

type propsTypes = {
    questionIndex: number,
    setIsAnsweredCorrectly: any
}

let questionData: any
let setIsAnsweredCorrectly: any


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
            <p className="text-black">
                der Rebus
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
function Trivia(){
    return(
        <div className="p-10">
            <p className="text-black">
                die Trivia
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
function Connections(){
    return(
        <div className="p-10">
            <p className="text-black">
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
        <div className="">
            {question}
        </div>
    )
}

export default QuestionFace