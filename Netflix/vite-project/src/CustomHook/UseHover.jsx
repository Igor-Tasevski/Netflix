import { useRef } from 'react'
import { useEffect, useState, UseRef } from 'react'
import React from 'react'





export const UseHover = () => {

const [hovered,setHovered] = useState(false)
const ref = useRef(null)


useEffect(()=>{
const handleMouseOver = () =>setHovered(true)
const handleMouseOut = ()=>setHovered(false)

const node = ref.current;


if(node) {

node.addEventListener('mouseover', handleMouseOver)
node.addEventListener('mouseout', handleMouseOut)


return () => {
  node.removeEventListener('mouseover',handleMouseOver)
  node.removeEventListener('mouseout',handleMouseOut)


}



}

},[ref.current])



return [ref,hovered]

}





  