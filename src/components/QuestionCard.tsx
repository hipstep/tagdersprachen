import data from "../data/data"

import cardBackBlue from "../assets/photos/cardBackBlue.png";
import cardBackRed from "../assets/photos/cardBackRed.png";
import cardBackPurple from "../assets/photos/cardBackPurple.png";
import cardBackYellow from "../assets/photos/cardBackYellow.png";
import cardBackGreen from "../assets/photos/cardBackGreen.png";

type propsTypes = {
    questionIndex: number,
    setIsQuestionPicked: any,
    setPickedQuestion: any
}


function QuestionCard(props: propsTypes) {
    const category = data[props.questionIndex].category;
    // tongue-twister
    // translation
    // rebus
    // trivia
    // connections

    const categoryColours: Record<string, string> = {
        "tongue-twister": cardBackBlue,
        "translation": cardBackRed,
        "rebus": cardBackPurple,
        "trivia": cardBackYellow,
        "connections": cardBackGreen,
    };
    const colour = categoryColours[category];
    const categoryTextColours: Record<string, string> = {
        "tongue-twister": "#223252",
        "translation": "#4a2523",
        "rebus": "#362240",
        "trivia": "#4f4528",
        "connections": "#1b2418",
    };
    const textColour = categoryTextColours[category];

    const categoryNames: Record<string, string> = {
        "tongue-twister": "Zungenbrecher",
        "translation": "Übersetzung",
        "rebus": "Rebus",
        "trivia": "Trivia",
        "connections": "Wortverbindungen",
    };
    const name = categoryNames[category];

    return(
        <div className="p-8">
            <div 
                className="w-full h-full box-border rounded-2xl flex justify-center items-center uppercase text-shadow-lg text-shadow-white/50 cursor-pointer bg-contain shadow-2xl hover:shadow-black/50 duration-150 font-bold text-2xl" 
                style={{backgroundImage : `url(${colour})`, color: textColour}}
                onClick={() => {props.setIsQuestionPicked(true); props.setPickedQuestion(props.questionIndex)}}
                >
                {name}
            </div>
        </div>
    )
}

export default QuestionCard