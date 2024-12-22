import React, { useState } from 'react'
import '../style/Todo.css'
function Todo() {

    const [underline, setUnderline]=useState(false)
const ready = ()=>{

const change = document.getElementById('input')
change.setUnderline.toggle(' setUnderline',true)
}
   
  return (
    <div>
      <div className="todo">
        <input onClick={ready} checked={underline} type="checkbox" name="" id="input" /> Saat 5 de yuxudan qalx
      </div>
    </div>
  )
}

export default Todo
