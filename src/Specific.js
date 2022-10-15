import {useParams} from "react-router-dom";
import {fetchData} from "./fetchData.mjs";

function getImageURLs(id){
    let imageURLs = []
    let data = fetchData()
    let imageElements = []
    for (let elem in data) {
        if (data[elem].url === id) {
            console.log("hit")
            let imageURLs = data[elem].images
            console.log(imageURLs)
            return imageURLs
        }
    }
}

export default function Specific(){
    const {id} = useParams()
    let imageURLs = getImageURLs(id)
    let imageElements = []
    for (let elem in imageURLs){
        imageElements.push(<img width={"100%"} src={imageURLs[elem]}/>)
    }



    return(

        <>
            {imageElements}
        </>
    )
}