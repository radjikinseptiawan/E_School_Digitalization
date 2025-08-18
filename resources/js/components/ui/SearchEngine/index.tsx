import React, { ChangeEvent } from 'react'

export default function SearchEngine({changed,buttonText,logicSearch}:{changed:(e : ChangeEvent<HTMLInputElement>)=>void, buttonText:string, logicSearch:()=>void}) {
  return (
             <div className='flex justify-center gap-2'>
                <input type="text" onChange={changed} placeholder='Cari Kelas...' className=' w-md p-1 border-black border-2 rounded-md' />
            <button className='bg-[#13A936] bottom-0 text-sm md:text-md rounded-lg font-semibold text-white p-2 md:p-2' onClick={logicSearch}>{buttonText}</button>
            </div>
  )
}
