import React from "react";
import {Box, styled} from '@mui/material'
import {Controlled  as CodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/css/css';
import 'codemirror/mode/xml/xml';

const Heading = styled(Box)`
display:flex;
background:#1d1e22;
padding:9px 12px;
color:wheat
`;
const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction:column;
padding:0 8px 8px;

`



function Editing({heading,icon,color,value,onChange}){
    const handleChange=(editor,data,value)=>{
        onChange(value);

    }
    return(
    <Container>
        <Heading>
             <Box component="span"
             style={{
                background:{color},
                height:20,
                width:20,
                display:'flex',
                placeContent:'center',
                borderRadius:5,
                marginRight:5,
                paddingBottom:2
             }}
             >             
             {icon}</Box>
             {heading}
        </Heading>
            <CodeMirror
            className="controlled-editor"
            value={value}
    onBeforeChange={handleChange}
            option={{
                theme:'material',
                lineNumbers:true
            }}
            />
    </Container>
    )
}
export default Editing;