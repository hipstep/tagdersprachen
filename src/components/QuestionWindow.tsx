import { useState } from "react"
import QuestionCard from "./QuestionCard"


function QuestionWindow() {
    const [isQuestionPicked, isQuestionPickedState] = useState(false);

    return(
        <div className="w-2/3 h-5/6 bg-yellow-50 absolute top-1/2 left-1/2 rounded-2xl -translate-1/2">
            {(
                !isQuestionPicked
                &&
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-10 px-20 py-10">
                    <QuestionCard questionIndex={0} />
                    <QuestionCard questionIndex={1} />
                    <QuestionCard questionIndex={2} />
                    <QuestionCard questionIndex={4} />
                </div>
            )}
        </div>
    )
}

export default QuestionWindow