import React, { useState } from 'react'
import NavBar from './NavBar.jsx'
import Nav2Bar from './Nav2Bar.jsx'
import Nav3Bar from './Nav3Bar.jsx'
function App() {
  const [bgColor, setBgColor] = useState("bg-white")
  const changeColor = ()=>{
    const randomColor = Math.floor(Math.random()*16777213).toString(16)
    console.log(randomColor )
    setBgColor(`#${randomColor}`)

  }
  return (
    
  
    <>

{/*<Nav2Bar/>*/}
<Nav3Bar/>

    </>
  )
}

export default App
