import React from 'react'

export default function LessonCarGridd() {
  return (
    <div className='mx-auto'>
    <div className='p-2 m-5 bg-whites rounded-md shadow-2xl w-96'>
        <h1 className='font-extrabold text-xl my-3 text-blue-600'>Fisika</h1>
        <img className='rounded-md shadow-md' src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg" alt="" />
        <hr />
        <p className='mt-3 text-md'>Muhammad Hadi Kusuma</p>
        <p className='text-md'>Selasa 09:30 - 11:30</p>
        <div className='flex justify-end'>
            <button className='my-3 text-md bg-blue-600 p-3 rounded-md text-white  font-semibold '>Masuk Kelas</button>
        </div>
    </div>
    </div>
  )
}
