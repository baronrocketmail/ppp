import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import NavTabs from "./NavTabs";
import {Outlet } from "react-router-dom";




export default function Root(){

    return(
        <>
            <NavTabs/>
            <Outlet/>
        </>
    )


}