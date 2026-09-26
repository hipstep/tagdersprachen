
type propsTypes = {
    currentGroup: number
}

function GroupList(props: propsTypes){

    return(
        <div className="bg-[#ebcf9c] p-10 shadow-2xl rounded-3xl row-start-2 row-end-8 col-start-2 col-end-8">
            {props.currentGroup}
        </div>
    )
}

export default GroupList