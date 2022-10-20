// import React, { useEffect, useState } from "react";
// import Characters from "./Component/Characters";
// import Heading from "./Component/Heading";
// import './App.css';
// import axios from "axios";


// const App=()=>{

//     const[item,setItem]=useState([]);
//     const[photo,setPhoto]=useState(true);
//     const[query,setQuery]=useState('');
//     useEffect(()=>{
//         const fetchItem=async ()=>{
//             setPhoto(true)
//             const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
//             console.log(result.data)
//             setItem(result.data)
//             setPhoto(false)
//         }
//         fetchItem()
//     },[query])
//    const queryfunction=(q)=>{
//     setQuery(q)
//    }
// return(
//  <div className="container">
//     <Heading searchType={queryfunction}/>
//     <Characters  photo={photo} item={item}/>
// </div>
//  )
// }
// export default App;


