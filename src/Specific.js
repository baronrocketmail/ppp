import {useParams} from "react-router-dom";
import {fetchData} from "./fetchData.mjs";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

function getImageURLs(id){
    let imageURLs = []
    let data = fetchData()
    let imageElements = []
    for (let elem in data) {
        if (data[elem].url === id) {
            let imageURLs = data[elem].images
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

            <Box className={"fab"} sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="string"   aria-label="download" onClick={x => {window.location.href = "https://storage.googleapis.com/2022fundraising-website/3638/36%2038.pdf"}}>
                    ARC
                </Fab>
                <Fab variant="string" aria-label="download" onClick={x => {alert(23)}}>
                    MEP
                </Fab>
                <Fab variant="string">
                    M
                </Fab>
                <Fab variant="string" aria-label="edit">
                    RVT
                </Fab>
            </Box>
        </>
    )
}