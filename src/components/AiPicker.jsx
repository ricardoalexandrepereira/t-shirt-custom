import React from 'react'
import CustomButton from "./CustomButton"

const AiPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
      <textarea 
      rows="5"
      className='aipicker-textarea'
      placeholder='Ask Ai ...'
      value={prompt}
      onChange={(e)=> setPrompt(e.target.value)}
      >

      </textarea>

      <div className="flex flex-wrap gap-3">
        {generatingImg 
        ? (
        <CustomButton 
        type="outline" 
        title="Asking AI..." 
        custumStyles="text-xs"/>
        ) : (
          <>
          <CustomButton 
          type="outline" 
          title="AI Logo" 
          handleClick={()=>handleSubmit("logo")} 
          custumStyles="text-xs"/>

          <CustomButton 
          type="filled" 
          title="AI Full" 
          handleClick={()=>handleSubmit("full")} 
          custumStyles="text-xs"/>
          </>
        )
        }
      </div>

    </div>
  )
}

export default AiPicker