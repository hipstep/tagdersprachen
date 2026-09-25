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

    return(
        <div className="p-8" onClick={() => {props.setIsQuestionPicked(true); props.setPickedQuestion(props.questionIndex)}}>
            <div className="w-full h-full box-border rounded-2xl flex justify-center items-center uppercase text-white cursor-pointer bg-contain" style={{backgroundImage : `url(${colour})`}}>
                {props.questionIndex}. {category}
            </div>
        </div>
    )
}

export default QuestionCard