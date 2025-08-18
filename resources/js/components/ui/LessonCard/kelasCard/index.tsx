import React from 'react'

export default function KelasCard({title,level,kelas_dimulai,kelas_diakhiri,clicked}:{title:string,level:string,clicked :()=>void,kelas_dimulai:Date,kelas_diakhiri:Date}) {
  return (
                <div className='p-8 h-auto rounded-md shadow-xl w-96'>
                  <img className='rounded-md' src="https://images.pexels.com/photos/32868540/pexels-photo-32868540.jpeg?_gl=1*wzan1v*_ga*MTk0MjQ2NzQyNC4xNzU1MzE1Njky*_ga_8JE65Q40S6*czE3NTU0ODQxMzMkbzMkZzEkdDE3NTU0ODQxMzgkajU1JGwwJGgw" alt="" />
                  <div className='flex items-center justify-between'>
                    <div className='my-2'>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='text-sm text-gray-600'>{level}</p>
                    <p className='text-sm text-gray-600'>{kelas_dimulai + " " + kelas_diakhiri}</p>
                    </div>
                    <button className='bg-[#13A936] font-bold text-white rounded-md shadow-2xl cursor-pointer p-2' onClick={clicked}>Lihat Kelas</button>
                  </div>
                </div>

  )
}
