export function But(props){
    return (
        <div className='buttons-div'>
            <div className='rots-div'>
                <button onClick={props.decrRot}>{"<"}</button>
                <span>{props.rot}</span>
                <button onClick={props.incrRot}>{">"}</button>
            </div>
        </div>
    )
}