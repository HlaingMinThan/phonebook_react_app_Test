import React from 'react'
const Error=({err})=>{
    if(err===null){
        return null;
    }
    let styleErr={
        marginTop:30,
        color:"red",
        fontSize:25,
        borderColor:"red",
        borderStyle:"solid",
        borderWidth:3
    }
    
    return(
        <div>
           {err? <div style={styleErr}>{err}</div>:"" }   
        </div>
    )
}
export default Error;