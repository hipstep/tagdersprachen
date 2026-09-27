import { useState } from "react"

type propsTypes = {
    text: string,
    mainColor: string
}

function ClickToReveal(props: propsTypes){
    const [isRevealed, setIsRevealed] = useState(false);

    return(
        <div 
            className="relative flex justify-center items-center text-2xl text-black border-2 p-5 box-border rounded-xl overflow-hidden  bg-white"
            style={{borderColor: props.mainColor}}
        >
            {(
                !isRevealed
                &&
                <div 
                    className="absolute top-0 left-0 w-full h-full cursor-pointer" 
                    onClick={() => {setIsRevealed(true)}}
                    style={{backgroundColor: props.mainColor}}
                ></div>
            )}
            {props.text}
        </div>
    )
}

export default ClickToReveal