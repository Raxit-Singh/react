import React, { useState } from 'react'
import ModalPopup from './modalpopup'

const PopupTest = () => {
    const [popUp, setPopUp] = useState(false)

    function handleToggle(){
        setPopUp(!popUp)
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-black'>
        <button className={popUp ? 'hidden':'bg-gray-400 p-2 rounded-lg text-white'} onClick={handleToggle}>Popup</button>
        {popUp && <ModalPopup close={handleToggle}/>}
    </div>
  )
}

export default PopupTest