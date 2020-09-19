import React from 'react';
const Feedback=({feedback})=>{
    if(feedback===null){
        return null;
    }
    
    // css
    let styleFeeback={
        marginTop:30,
        color:"green",
        fontSize:25,
        borderColor:"green",
        borderStyle:"solid",
        borderWidth:3
    }
  return (
        <div>
            <div style={styleFeeback}>{feedback}</div>
         
        </div>
            
            
    )
}
export default Feedback;