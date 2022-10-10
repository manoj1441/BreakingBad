import React from "react";



const CharacterItem=({item})=>{
 return(
  <div className="card">
    <div className="inner">
        <div className="front">
    <img src={item.img} alt=''></img>
    </div>
    <div className="back">
  <h1>{item.name}</h1>
  <div>-------------------------------------</div>
  <ul>
 <li>
 <h3>Actor Name</h3>{item.portrayed}
 </li>
 <li>
    <h2>Nickname</h2>{item.nickname}
 </li>
 <li>
  <h2>Birthday</h2>{item.birthday}
 </li>
 <li>
  <h2>Status</h2>{item.status}
 </li>

  </ul>
  </div>
  </div>
  </div>


 )
}


export default CharacterItem;