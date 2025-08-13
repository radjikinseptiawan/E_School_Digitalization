import React from 'react'

interface DataTypeInputHTML{
    to:string,
    title:string,
    types: string
}

export default function LoginRegisterInput({to,title,types}:DataTypeInputHTML) {
  return (
<div className='border p-2 rounded-lg'>
            <label htmlFor={to} className='underlined font-bold'>{title}</label>
             <input type={types} name={to} id={to} className='border-2 p-2 rounded-lg w-full' placeholder={title} />
    </div>
  )
}
