
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
    const categoryBorderColours: Record<number, string> = {
        0: "#2f4676",
        1: "#783c39",
        2: "#543664",
        3: "#7a6a3f",
        4: "#34442d",
    };
    const textColour = categoryBorderColours[props.groupId];
    const bgColor = props.currentGroup === props.groupId ? "#bd9b5b" : "#d1c6b2"
    return(
        <div 
            className="flex px-2 gap-5 items-center text-2xl rounded-3xl border-4" 
            id={`team${props.groupId}`} 
            style={{color: textColour, backgroundColor: bgColor}}
        >
            <div className="rounded-full w-5 h-5" style={{backgroundColor: textColour}}/>
            <p>Gruppe Nr.{props.groupId+1}</p>
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