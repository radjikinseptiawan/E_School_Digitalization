import React from 'react'

export default function LowonganCard({role,namaInstansi,clicked}:{role:string,namaInstansi:string,clicked:()=>void}) {
  return (
<div className=' p-4 flex shadow-2xl bg-white rounded-md flex-col'>
            <div className='flex items-center justify-between gap-5'>
              <div className='flex gap-5'>
               <img src="https://images.pexels.com/photos/32849129/pexels-photo-32849129.jpeg?_gl=1*7tn4xz*_ga*MTk0MjQ2NzQyNC4xNzU1MzE1Njky*_ga_8JE65Q40S6*czE3NTUzMTU2OTEkbzEkZzEkdDE3NTUzMTU2OTYkajU1JGwwJGgw" width={80} alt="" />
                <div>
                  <h1 className='text-xl font-bold'>{role}</h1>
                  <p>{namaInstansi}</p>
                </div>
              </div>
  
              <button className='bg-[#177E23] p-2 font-bold text-white rounded-2xl hover:shadow-2xl hover:cursor-pointer' onClick={clicked}>Lihat Selengkapnya</button>
            </div>

          </div>

  )
}
