
type propsTypes = {
    currentGroup: number,
    teamsPosition: number[]
}
type propsTypesLine = {
    currentGroup: number,
    teamsPosition: number[],
    groupId: number
}

function GroupLine(props: propsTypesLine){
    return(
        <div className="flex px-2 justify-between text-2xl rounded-3xl border-2" id={`team${props.groupId}`} style={props.currentGroup === props.groupId ? {backgroundColor: "#bd9b5b"} : {backgroundColor: "#d1c6b2"}}>
                <p>Gruppe Nr. {props.groupId+1}</p>
                <p className="font-bold">{props.teamsPosition[props.groupId]+1}</p>
        </div>
    )
}

function GroupList(props: propsTypes){
    return(
        <div className=" bg-[#bfa87d] px-5 py-2 cloister-black shadow-2xl border-2 rounded-3xl row-start-2 row-end-8 col-start-2 col-end-8 flex flex-col justify-around">
            <GroupLine currentGroup={props.currentGroup} teamsPosition={props.teamsPosition} groupId={0}/>
            <GroupLine currentGroup={props.currentGroup} teamsPosition={props.teamsPosition} groupId={1}/>
            <GroupLine currentGroup={props.currentGroup} teamsPosition={props.teamsPosition} groupId={2}/>
            <GroupLine currentGroup={props.currentGroup} teamsPosition={props.teamsPosition} groupId={3}/>
            <GroupLine currentGroup={props.currentGroup} teamsPosition={props.teamsPosition} groupId={4}/>
        </div>
    )
}

export default GroupList