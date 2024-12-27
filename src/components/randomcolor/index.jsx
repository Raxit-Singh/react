import { useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function handleHexColor(){

    }
    
    function handleRgbColor(){

    }
  return (
    <div style={{width: "100vw",
        height: "100vh",
        background: color
    }}>
        <button onClick={setTypeOfColor("hex")}>Show hex value</button>
        <button onClick={setTypeOfColor("rgb")}>Show Rgb value</button>
        <button onClick={typeOfColor === "hex" ? ()=> handleHexColor : ()=> handleRgbColor}>Generate Color</button>
    </div>
  )
}

export default RandomColor