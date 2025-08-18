import React from 'react'
type CardDataType = {
    title : string | undefined;
    level: string | undefined;
    date: string | undefined;
    platform: string | undefined;
    penyelenggara: string | undefined;
    deskripsi:string | undefined
}
export default function DescriptionCardClassLobby({title,level,date,platform,penyelenggara,deskripsi}:CardDataType) {
  return (

            <div className='mt-5 md:mt-18 h-screen p-10 w-2xl rounded-md'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <h1 className='text-3xl font-bold'>{level}</h1>
                <div className='text-gray-400 text-xl md:text-3xl'>
                    <h1>{date}</h1>
                    <h1>{platform}</h1>
                    <h1>{penyelenggara}</h1>
                </div>
                    <hr className='w-72 md:w-full' />
                <div className=' mt-10 md:mt-20'>
                    <h1 className='text-xl md:text-4xl w-80 font-bold'>Deskripsi Kelas</h1>
                    <p className='w-72 md:w-full'>
                    {
                        deskripsi
                    }
                    </p>
                </div>
            </div>
  )
}
