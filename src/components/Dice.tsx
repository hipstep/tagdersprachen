import dice from "../assets/photos/dice.png"

type propsTypes = {
    setDiceNumber: any
}

function Dice(props: propsTypes){
    function getRandomInt(max: number) {
        // <0; max)
        return Math.floor(Math.random() * max);
    }

    function onDiceClick(){
        props.setDiceNumber(getRandomInt(6)+1)
        
        const animation = document.getElementById('dice')!.animate([
                {
                    transform: "rotate(0deg) scale(120%)",
                },
                {
                    transform: "rotate(360deg) scale(100%)"
                }
            ],
            300)
        animation.play()
    }

    return(
        <div 
            className="p-10 row-start-2 row-end-8 -col-start-8 -col-end-2"
        >
            <img 
                src={dice} alt="kostka"
                className="cursor-pointer hover:scale-105 duration-150"
                onClick={onDiceClick}
                id="dice"
            />
        </div>
    )
}

export default Dice