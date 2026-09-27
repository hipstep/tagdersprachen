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

type headerProps = {
    title: string,
    mainColor: string,
    textShadow: string
}
function Header(props: headerProps){
    return(
        <div 
            className="text-6xl cloister-black p-8 text-white rounded-xl"
            style={{backgroundColor: props.mainColor, textShadow: props.textShadow}}
        >
            {props.title}
        </div>
    )
}

function TongueTwister(){
    const mainColor = "#223252";
    const secondColor = "#93a1bb";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10 flex flex-col justify-between h-full">
            <Header title="Zungenbrecher" mainColor={mainColor} textShadow={textShadow}/>


            <div className="gap-10 flex flex-col bg-white py-10 px-5 rounded-xl">
                <div className="text-3xl">
                    {questionData.text}
                </div>

                <ClickToReveal text={questionData.translation} mainColor={mainColor} />

                <audio className="w-2/3 m-auto" controls src={`/tagdersprachen/audio/${questionData.audio}.mp3`} />
            </div>

            <div className="flex gap-10">
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Richtig
                </button>
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white" 
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Schlecht
                </button>
            </div>
        </div>
    )
}
function Translation(){
    const mainColor = "#4a2523";
    const secondColor = "#bf9d9a";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10 flex flex-col justify-between h-full">
            <Header title="Übersetzung" mainColor={mainColor} textShadow={textShadow}/>


            <div className="gap-10 flex flex-col bg-white py-10 px-5 rounded-xl">
                <div className="text-3xl">
                    {questionData.translation}
                </div>

                <ClickToReveal text={questionData.word} mainColor={mainColor} />
            </div>

            <div className="flex gap-10">
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Richtig
                </button>
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white" 
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Schlecht
                </button>
            </div>
        </div>
    )
}
function Rebus(){
    const mainColor = "#362240";
    const secondColor = "#c2b7c9";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    return(
        <div className="p-10 flex flex-col justify-between h-full">
            <Header title="Rebus" mainColor={mainColor} textShadow={textShadow}/>

            <div className="gap-10 flex flex-col bg-white py-10 px-5 rounded-xl">
                <div className="flex justify-center items-center">
                    <img 
                        src={`/tagdersprachen/rebusPhotos/${questionData.img}.png`}
                        className=" h-60"
                    />
                </div>

                <ClickToReveal text={questionData.word} mainColor={mainColor} />
            </div>

            <div className="flex gap-10">
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(true)}
                >
                    Richtig
                </button>
                <button 
                    className="cursor-pointer w-1/2 h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white" 
                    style={{color: mainColor}}
                    onClick={() => setIsAnsweredCorrectly(false)}
                >
                    Schlecht
                </button>
            </div>
        </div>
    )
}
function Trivia(){
    const [indexes, _] = useState(fisherYatesShuffle([0,1,2,3]));
    const [answer, setAnswer] = useState<boolean | undefined>(undefined);
    const [answersArray, setAnswersArray] = useState<React.JSX.Element[]>();

    const mainColor = "#4f4528";
    const secondColor = "#c6c0ae";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`;

    function choseAnswer(val: number){
        setAnswer(val===0 ? true : false)
    }

    useEffect(() => {
        let elements : React.JSX.Element[] = [];
        indexes.forEach((val, i) => {
            const element =<button 
                        className="cursor-pointer w-full h-20 rounded-xl flex justify-center items-center border-2 duration-300 font-bold hover:shadow-xl" 
                        onClick={() => choseAnswer(val)}
                        key={i}
                        id={"answer"+val}
                        style={{color: mainColor}}
                    >
                        {questionData.answers[val]}
                    </button>
            
            elements.push(element);
        })
        setAnswersArray(elements);
    }, [])

    useEffect(() =>{
        if(answer !== undefined){
            document.getElementById("answer0")?.style.setProperty("background-color", "#86c77d");
        }
    }, [answer])
    return(
        <div className="p-10 flex flex-col gap-10 h-full">
            <Header title="Trivia" mainColor={mainColor} textShadow={textShadow}/>

            <div className="gap-10 flex flex-col bg-white py-10 px-5 rounded-xl">
                <div className="text-3xl">
                    {questionData.question}
                </div>
                <div 
                    className="grid grid-cols-2 grid-rows-2 gap-5 p-5" 
                    id="answers"
                >
                    {answersArray}
                </div>

                {(
                        answer
                        &&
                        <p 
                            className="font-bold text-2xl" 
                            style={{color: mainColor}}
                        >
                            Richtige Antwort!
                        </p>
                    )}
                    {(
                        answer === false
                        &&
                        <p 
                            className="font-bold text-2xl" 
                            style={{color: mainColor}}
                        >
                            Schlechte Antwort!
                        </p>
                    )}
            </div>
            {(
                answer !== undefined
                &&
                <button
                    className="cursor-pointer w-full h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                    onClick={() => setIsAnsweredCorrectly(answer)}
                    style={{color: mainColor}}
                >
                    Weiter
                </button>
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

    const [answer, setAnswer] = useState<boolean | undefined>(undefined);

    const mainColor = "#1b2418";
    const secondColor = "#949d90";
    const textShadow = `0px 1px 1px ${secondColor}, 0px 1px 2px ${secondColor}, 0px 2px 4px ${secondColor}`

    useEffect(() => {
        // generating words in german on the site
        let wordElements : React.JSX.Element[] = [];
        wordsIndexes.forEach((val) => {
            const element =<div 
                    className="draggable p-2 px-5 bg-white flex justify-center items-center font-bold h-full" 
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
                    className="dragover h-13 border-2 box-border flex justify-center items-center"
                    key={val}
                    style={{borderColor: mainColor}}
                >
                    {questionData.words[val]}
                </div>
            
            translationElements.push(element);

            const dropElement = <div 
                    className="dragover drop h-13 box-border border-2"
                    id={"drop"+val}
                    key={val}
                    style={{backgroundColor: mainColor, color: mainColor}}
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

    function checkAnswers() {
        let tempAnswer = true;
        for(let i = 0; i < 4; i++){
            const droppedContainer = document.getElementById(`drop${i}`);
            if(droppedContainer?.children !== null && droppedContainer?.children !== undefined){
                const containerId = droppedContainer.getAttribute("id")
                const answerId = droppedContainer?.children[0].getAttribute("id");
                if(containerId !== null && answerId !== null){
                    if(containerId[4] !== answerId[4]){
                        tempAnswer = false;
                        document.getElementById(`drag${i}`)?.style.setProperty("background-color", "#c46c6c");
                        document.getElementById(`drop${i}`)?.style.setProperty("background-color", "#c46c6c");
                    }
                }
                else{
                    tempAnswer = false;
                }
            }
        }
        setAnswer(tempAnswer);
    }

    return(
        <div className="p-10 flex flex-col gap-10 h-full">
            <Header title="Trivia" mainColor={mainColor} textShadow={textShadow}/>

            <div className="flex flex-col">
                <div 
                    className="drop dragover grid grid-cols-4 grid-rows-1 gap-10 h-25 px-10 py-5 border-2 rounded-xl rounded-b-none"
                    id="wordbank"
                    style={{backgroundColor: mainColor}}
                >
                    {/* Word bank */}
                    {wordsArray}
                </div>
                <div className="bg-white py-10 rounded-xl rounded-t-none dragover">
                    <div className="dragover flex  h-full w-full justify-between gap-10">
                        <div className="dragover flex flex-col justify-around h-full w-1/2 pl-10 gap-5">
                            {/* po polsku */}
                            {translationsArray}
                        </div>
                        <div className="dragover flex flex-col justify-around h-full w-1/2 pr-10 gap-5">
                            {/* po niemiecku */}
                            {dropsArray}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-around">
                {(
                    answer === undefined
                    &&
                    <button
                        className="cursor-pointer w-full h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                        onClick={() => checkAnswers()}
                        style={{color: mainColor}}
                    >
                        Prüfen
                    </button>
                )}
                {(
                    answer !== undefined
                    &&
                    <button
                        className="cursor-pointer w-full h-20 rounded-xl cloister-black flex justify-center items-center text-5xl border-2 hover:shadow-2xl bg-white"
                        onClick={() => setIsAnsweredCorrectly(answer)}
                        style={{color: mainColor}}
                    >
                    Weiter
                    </button>
                )}
                
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
        <div className="h-full">
            {question}
        </div>
    )
}

export default QuestionFace