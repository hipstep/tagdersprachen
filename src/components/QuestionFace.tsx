import type { ReactNode } from "react";
import data from "../data/data";
import BigButton from "./BigButton";
import ClickToReveal from "./ClickToReveal";

type propsTypes = {
    questionIndex: number,
    setIsAnsweredCorrectly: any
}

let questionData: any
let setIsAnsweredCorrectly: any

function TongueTwister(){
    return(
        <>
            <p className="text-black">
                {questionData.category}
            </p>
            <div>
                {questionData.text}
            </div>
            <ClickToReveal text={questionData.translation}/>
            <BigButton label="IDK"/>
        </>
    )
}
function Translation(){
    return(
        <>
            <p className="text-black">{questionData.category}</p>
            <BigButton label="IDK"/>
        </>
    )
}
function Rebus(){
    return(
        <>
            <p className="text-black">{questionData.category}</p>
            <BigButton label="IDK"/>
        </>
    )
}
function Trivia(){
    return(
        <>
            <p className="text-black">{questionData.category}</p>
            <BigButton label="IDK"/>
        </>
    )
}
function Connections(){
    return(
        <>
            <p className="text-black">{questionData.category}</p>
            <BigButton label="IDK"/>
        </>
    )
}

function QuestionFace(props: propsTypes){
    questionData = data[props.questionIndex];
    setIsAnsweredCorrectly = props.setIsAnsweredCorrectly;

    let question: ReactNode | null;
    switch(questionData.category){
        case "tongue-twister":
            question = <TongueTwister/>;
            break;
        case "translation":
            question = <Translation/>;
            break;
        case "rebus":
            question = <Rebus/>;
            break;
        case "trivia":
            question = <Trivia/>;
            break;
        case "connections":
            question = <Connections/>;
            break;
    }

    return(
        <div className="text-black">
            {question}
        </div>
    )
}

export default QuestionFace