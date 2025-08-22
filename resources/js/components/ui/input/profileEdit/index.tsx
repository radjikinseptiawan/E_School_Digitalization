import React, { ChangeEvent } from 'react'

type DataProfileChange= {
    error : string | boolean,
    change: (e : ChangeEvent<HTMLInputElement>)=>void,
    data:string,
    title:string,
    type: "date" | "text" | "email" | string
}

export default function Input({type,error,change,data,title} : DataProfileChange) {
  return (
        <>
        <p className="text-xl">{title}</p>
              <input
                type={type}
                name="tanggal_lahir"
                value={data}
                onChange={change}
                className="border p-2 rounded-md w-96 md:w-xl"
              />
              {error && <p className="text-red-600">{error}</p>}
        </>

  )
}
