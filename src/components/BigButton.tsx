type propsTypes = {
    label: string
}

function BigButton(props: propsTypes){
    return(
        <div className="w-30 h-5 rounded-2xl flex justify-center items-center">
            <p>{props.label}</p>
        </div>
    )
}

export default BigButton