export function Form(props){
    return (
        <div>
            <textarea name={props.name} id="p"
                readOnly={!props.edit}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
                value={props.value}
                ></textarea>
        </div>
    )
}