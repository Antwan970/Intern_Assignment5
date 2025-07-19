import React from 'react'
import { useState , useEffect} from 'react'
const infinite=()=>{
    const[count,setCount]=useState(0);


useEffect(()=>{
    setCount(count+1);
},[count] //run everytime count change 
)

useEffect(()=>{
    console.log("Appear one Time");
},[]
)
}
export default infinite