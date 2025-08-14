import React, { ChangeEvent } from 'react'

interface DataTypeInputHTML{
    to:string,
    title:string,
    types: string,
    changed: (e : ChangeEvent<HTMLInputElement>)=>void
}

export default function LoginRegisterInput({to,title,types,changed}:DataTypeInputHTML) {
  return (
<div className='border p-2 rounded-lg'>
            <label htmlFor={to} className='underlined font-bold'>{title}</label>
             <input type={types} name={to} id={to} onChange={changed} className='border-2 p-2 rounded-lg w-full' placeholder={title} />
    </div>
  )
}
