import { useState } from "react"
import QuestionCard from "./QuestionCard"


function QuestionWindow() {
    const [isQuestionPicked, isQuestionPickedState] = useState(false);
    const [pickedQuestion, pickedQuestionState] = useState(undefined);

    return(
        <div className="w-2/3 h-5/6 bg-yellow-50 absolute top-1/2 left-1/2 rounded-2xl -translate-1/2">
            {(
                !isQuestionPicked
                &&
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-10 px-20 py-10">
                    <QuestionCard questionIndex={0} isQuestionPickedState={isQuestionPickedState} pickedQuestionState={pickedQuestionState}/>
                    <QuestionCard questionIndex={1} isQuestionPickedState={isQuestionPickedState} pickedQuestionState={pickedQuestionState}/>
                    <QuestionCard questionIndex={2} isQuestionPickedState={isQuestionPickedState} pickedQuestionState={pickedQuestionState}/>
                    <QuestionCard questionIndex={4} isQuestionPickedState={isQuestionPickedState} pickedQuestionState={pickedQuestionState}/>
                </div>
            )}
            {(
                isQuestionPicked
                &&
                pickedQuestion
            )}
        </div>
    )
}

export default QuestionWindow