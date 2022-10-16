import {useParams} from "react-router-dom";
import {fetchData} from "./fetchData.mjs";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DownloadIcon from "@mui/icons-material/Download";
import ListIcon from '@mui/icons-material/List';
import NavigationIcon from "@mui/icons-material/Navigation";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
                <Fab variant="extended" color="primary" aria-label="download" onClick={x => {alert(23)}}>
                    <DownloadIcon />
                    Architectural
                </Fab>
                <Fab variant="extended" color="primary" aria-label="download" onClick={x => {alert(23)}}>
                    <DownloadIcon />
                    MEP
                </Fab>
                <Fab color="secondary" variant="extended" aria-label="edit">
                    <DownloadIcon />
                    REVIT
                </Fab>
                <Fab variant="extended">
                    <ListIcon sx={{ mr: 1 }} />
                    MATERIALS
                </Fab>
            </Box>
        </>
    )
}