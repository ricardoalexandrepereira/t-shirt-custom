import React from 'react'
import { SketchPicker } from "react-color"
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {

  const snap = useSnapshot(state)

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
      color={snap.color}
      disableAlpha
      presetColors={["#ffff1a","#9c8d8d", "#000000", "#fcfcfc","#2529e0","#097a2f","#d36f12","#684d4d"]}
      onChange={(color)=> state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker