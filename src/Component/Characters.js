
import React from "react";
import CharacterItem from "./CharacterItem";


const Characters=({item,photo})=>{
   
return photo ? (<h1>......</h1>) :(<section className="cards">{item.map(item=>(
<CharacterItem key={item.char_id} item={item}></CharacterItem>
)
)}</section>)

}
export default Characters;