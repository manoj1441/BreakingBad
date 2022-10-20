import BB from '../Images/BB.jpg';
import React, { useState } from 'react';


const Heading=({searchType})=>{
     const[text,setText]=useState("")
     const search=(q)=>{
        setText(q)
        searchType(q)
     }
      return(
        < div>
        <div className='center'> <img src={BB} alt="BB"  style={{width:100}}/></div>
       
        <input type="text" className='text' placeholder="Search characters" value={text} onChange={(e)=>search(e.target.value)} />
         </div>
    )
}
export default Heading;