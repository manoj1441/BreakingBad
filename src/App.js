import React, { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Component/Heading";
import Characters from "./Component/Characters";
import './App.css'


const App=()=>{
	const[item,setItem]=useState([])
    const[photo,setPhoto]=useState(true)
    const[type,setType]=useState("")

    useEffect(()=>{
     const fetchItems=async()=>{
        const result=await axios(`https://Www.breakingbadapi.com/api/characters?name=${type}`)
        
        setItem(result.data)
        setPhoto(false)
     }
fetchItems()
      
    },[type]);
    const functiontype=(t)=>{
     setType(t)
    }




	return(<div className="container">
	<Heading searchtype={functiontype}/>
	<Characters photo={photo} item={item}/>
	</div>
		
	)
}


export default App;