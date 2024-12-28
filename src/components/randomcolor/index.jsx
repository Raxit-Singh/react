import { useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length){
      return Math.floor(Math.random()*length)
    }

    function handleHexColor(){
      const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      let hexColor = "#"
      
      for(let i =0; i<6; i++){
        hexColor += hex[randomColorUtility(hex.length)]
      }
      setColor(hexColor)
    }
    

    function handleRgbColor(){
      const r = randomColorUtility(256)
      const g = randomColorUtility(256)
      const b = randomColorUtility(256)

      setColor(`rgb(${r},${g},${b})`)
    }
  return (
    <div
    >
      <div className='items-center flex justify-center gap-5 bg-black text-white'>
        <button className='bg-slate-500 rounded-xl p-2' onClick={()=>setTypeOfColor("hex")}>Create Hex value</button>
        <button className='bg-slate-500 rounded-xl p-2' onClick={()=>setTypeOfColor("rgb")}>Create Rgb value</button>
        <button className='bg-slate-500 rounded-xl p-2' onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}>Generate Color</button>
    </div>
    <div className='h-[700px] text-white flex justify-center items-center' style={{background: color}}>
      {color}
    </div>
    </div>
  )
} 

export default RandomColor