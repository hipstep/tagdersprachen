import { useEffect, useState } from "react"
import QuestionCard from "./QuestionCard"


function QuestionWindow() {
    const [isQuestionPicked, setIsQuestionPicked] = useState(false);
    const [pickedQuestion, setPickedQuestion] = useState<number | undefined>(undefined);
    const [seenQuestions, setSeenQuestions] = useState<number[]>([]);

    // function getRandomInt(max: number) {
    //     // <0; max)
    //     return Math.floor(Math.random() * max);
    // }

    useEffect(() => { //Adds picked questions to seenQuestions
        if(pickedQuestion !== undefined && !seenQuestions.includes(pickedQuestion)){ 
            setSeenQuestions([...seenQuestions, pickedQuestion]);
        }
    }, [pickedQuestion]) // runs on the first render and after every change in pickedQuestions


    useEffect(() =>{ //Gets seen questions from local storage
        const stored = localStorage.getItem("seenQuestions");
        const questions = stored ? JSON.parse(stored) : [];
        
        if(questions){
            setSeenQuestions(questions);
        }
    }, []); // [] - runs every render


    useEffect(() =>{ // Adds seen questions to local storage
        if(seenQuestions.length !== 0){
            console.log("Used questions: " + seenQuestions);
            localStorage.setItem("seenQuestions", JSON.stringify(seenQuestions));
        }
    }, [seenQuestions]) // runs on the first render and after every change in seenQuestions


    function resetLocalStorage(){
        console.log("Storage Cleared!")
        localStorage.clear();
    }

    return(
        <div className="w-2/3 h-5/6 bg-yellow-50 absolute top-1/2 left-1/2 rounded-2xl -translate-1/2">
            {(
                !isQuestionPicked
                &&
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-10 px-20 py-10">
                    <QuestionCard questionIndex={0} setIsQuestionPicked={setIsQuestionPicked} setPickedQuestion={setPickedQuestion}/>
                    <QuestionCard questionIndex={1} setIsQuestionPicked={setIsQuestionPicked} setPickedQuestion={setPickedQuestion}/>
                    <QuestionCard questionIndex={2} setIsQuestionPicked={setIsQuestionPicked} setPickedQuestion={setPickedQuestion}/>
                    <QuestionCard questionIndex={4} setIsQuestionPicked={setIsQuestionPicked} setPickedQuestion={setPickedQuestion}/>
                </div>
            )}
            {(
                isQuestionPicked
                &&
                pickedQuestion
            )}

            <button onClick={resetLocalStorage}>Reset Local Storage</button>
        </div>
    )
}

export default QuestionWindow