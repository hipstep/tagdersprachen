import { useState } from "react"

type propsTypes = {
    text: string    
}

function ClickToReveal(props: propsTypes){
    const [isRevealed, setIsRevealed] = useState(false);

    return(
        <div className="relative flex justify-center items-center text-2xl text-black border-4 border-amber-500 p-5 box-border rounded-2xl m-10 overflow-hidden">
            {(
                !isRevealed
                &&
                <div className="absolute top-0 left-0 w-full h-full bg-red-100" onClick={() => {setIsRevealed(true)}}></div>
            )}
            {props.text}
        </div>
    )
}

export default ClickToReveal