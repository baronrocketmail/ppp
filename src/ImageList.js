export default function ImageList(props){
    let elements = []
    for (let elem in props.images){
        elements.push(<img width={"100%"} src={props.images[elem]} />)
    }
    return(
        <div>
            {elements}
        </div>
    )
}