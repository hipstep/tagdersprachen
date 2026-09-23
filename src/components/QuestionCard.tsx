import data from "../assets/data"

type props = {
    questionIndex: number
}

function QuestionCard(props: props) {
    const category = data[props.questionIndex].category;
    // tongue-twister
    // translation
    // rebus
    // trivia
    // connections
    let colour = "black"
    switch(category){
        case "tongue-twister":
            colour = "red";
            break;
        case "translation":
            colour = "green";
            break;
        case "rebus":
            colour = "blue";
            break;
        case "trivia":
            colour = "yellow";
            break;
        case "connections":
            colour = "orange";
            break;
    }
    return(
        <div className="p-8">
            <div className="w-full h-full box-border rounded-2xl flex justify-center items-center uppercase text-white cursor-pointer" style={{backgroundColor : colour}}>
                {category}
            </div>
        </div>
    )
}

export default QuestionCard