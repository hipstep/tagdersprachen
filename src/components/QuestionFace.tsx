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
    const mainColor = "#223252";
    const secondColor = "#93a1bb";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10">
            <div 
                className="text-6xl cloister-black p-8 text-white rounded-3xl"
                style={{backgroundColor: mainColor, textShadow: textShadow}}
            >
                die Zungenbrecher
            </div>
            <div className="text-3xl">
                {questionData.text}
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
function Translation(){
    const mainColor = "#223252";
    const secondColor = "#93a1bb";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10">
            <div 
                className="text-6xl cloister-black p-8 text-white rounded-3xl"
                style={{backgroundColor: mainColor, textShadow: textShadow}}
            >
                die Zungenbrecher
            </div>
            <div className="text-3xl">
                {questionData.translation}
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
function Rebus(){
    const mainColor = "#223252";
    const secondColor = "#93a1bb";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10">
            <div 
                className="text-6xl cloister-black p-8 text-white rounded-3xl"
                style={{backgroundColor: mainColor, textShadow: textShadow}}
            >
                der Rebus
            </div>
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

    const mainColor = "#223252";
    const secondColor = "#93a1bb";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

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
            <div 
                className="text-6xl cloister-black p-8 text-white rounded-3xl"
                style={{backgroundColor: mainColor, textShadow: textShadow}}
            >
                Die Trivia
            </div>
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
    const [wordsIndexes, _] = useState(fisherYatesShuffle([0,1,2,3]));
    const [wordsArray, setWordsArray] = useState<React.JSX.Element[]>();

    const [translationsIndexes, __] = useState(fisherYatesShuffle([0,1,2,3]));
    const [translationsArray, setTranslationsArray] = useState<React.JSX.Element[]>();

    const [dropsArray, setDropsArray] = useState<React.JSX.Element[]>();

    const mainColor = "#1b2418";
    const secondColor = "#949d90";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`

    useEffect(() => {
        // generating words in german on the site
        let wordElements : React.JSX.Element[] = [];
        wordsIndexes.forEach((val) => {
            const element =<div 
                    className="draggable bg-green-300 p-2 px-5" 
                    draggable={true}
                    id={"drag"+val}
                    key={val}
                >
                    {questionData.terms[val]}
                </div>
            
            wordElements.push(element);
        })
        setWordsArray(wordElements);

        // generating translation in polish on the site
        // generating blank spaces to drop
        let translationElements : React.JSX.Element[] = [];
        let dropElements : React.JSX.Element[] = [];
        translationsIndexes.forEach((val) => {
            const element =<div 
                    className="dragover bg-yellow-300 h-10"
                    key={val}
                >
                    {questionData.words[val]}
                </div>
            
            translationElements.push(element);

            const dropElement = <div 
                    className="dragover drop bg-orange-300 h-10"
                    id={"drop"+val}
                >
                </div>
            dropElements.push(dropElement);
        })
        setTranslationsArray(translationElements);
        setDropsArray(dropElements);


        // drag and drop
        setTimeout(() => {
            // drag and drop
            let draggedItemId: string | null;
            document.querySelectorAll(".draggable").forEach((val) =>{
                val.addEventListener("dragstart",(e) => {
                    const temp = e.currentTarget as HTMLElement | null
                    draggedItemId = temp?.getAttribute("id") ? temp.getAttribute("id"): "";
                })
            })
            document.querySelectorAll(".drop").forEach((val) =>{
                val.addEventListener("drop",(e) => {
                    e.preventDefault();
                    if(val.children !== null && val.children !== undefined){
                        const oldAnswer = val.children[0]?.getAttribute("id");
                        const oldAnswerElement = oldAnswer ? document.getElementById(oldAnswer) : ""
                        document.getElementById("wordbank")?.append(oldAnswerElement ? oldAnswerElement : "");
                    }
                    const newAnswer = document.getElementById(draggedItemId ? draggedItemId : "");
                    val.append(newAnswer ? newAnswer : "");
                })
            })
            document.querySelectorAll(".dragover").forEach((val) =>{
                val.addEventListener("dragover",(e) => {
                    e.preventDefault();
                })
            })
        }, 1)
    }, []);

    return(
        <div className="p-10">
            <div 
                className="text-6xl cloister-black p-8 text-white rounded-3xl"
                style={{backgroundColor: mainColor, textShadow: textShadow}}
            >
                die Wortverbindungen
            </div>
            <div className="flex flex-col dragover h-130 gap-5 px-15 py-7">
                <div id="wordbank" className="drop dragover flex justify-around h-40 border-2 rounded-3xl">
                    {/* Word bank */}
                    {wordsArray}
                </div>
                <div className="dragover flex  h-full w-full justify-between">
                    <div className="dragover flex flex-col justify-around h-full w-1/2 px-10">
                        {/* po polsku */}
                        {translationsArray}
                    </div>
                    <div className="dragover flex flex-col justify-around h-full w-1/2 px-10">
                        {/* po niemiecku */}
                        {dropsArray}
                    </div>
                </div>
            </div>

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