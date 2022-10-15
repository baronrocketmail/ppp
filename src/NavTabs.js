import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {fetchData} from "./fetchData.mjs";
import {useNavigate} from "react-router-dom";
import react from "react";


function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

export default function NavTabs() {

    const navigate = useNavigate();

    let arry = fetchData()
    let tabElements = []
    for(let elem in arry){
        tabElements.push(<LinkTab label={arry[elem].name} href={arry[elem].url} value={elem}/>)

    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        if (newValue == 0) {
            navigate("/" + "all")
        } else if (newValue == 1){
            navigate("/"+"3638castro")
        } else if (newValue == 2){
            navigate("/"+"539blossom")
        } else if (newValue == 3) {
            navigate("/"+"817825rodney")
        } else if (newValue == 4) {
            navigate("/"+"61castro")
        }
        ;}



    return (
        <div>

        <Box className={"nav"} sx={{ width: '100%' }}>
            <Tabs   variant="scrollable"
                    scrollButtons="auto" value={value} onChange={handleChange} aria-label="nav tabs example">
                {tabElements}
            </Tabs>
        </Box>
        </div>
    );
}
