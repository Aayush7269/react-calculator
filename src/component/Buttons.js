import React from 'react'
const btns= []
export const Buttons = ({cls, label, func}) => {
  return (
    <div className={cls} onClick={()=>func(label)}>
        {label}
    </div>
  )
}
