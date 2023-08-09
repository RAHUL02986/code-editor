import React from "react";
import Editing from "./Editing";
import {Box, styled} from '@mui/material'
import { useContext } from "react";
import { DataContext } from "../Context/DataProvider";
const Container = styled(Box)`
display:flex;
background-color:black;
height:50vh;
`
function Editor(){
    const {html, setHtml,css,setCss}=useContext(DataContext);
    return(
        <Container>

        <Editing
        heading="Html"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
        />
        <Editing
        heading="Css"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
        />

        </Container>
    )
}
export default Editor;