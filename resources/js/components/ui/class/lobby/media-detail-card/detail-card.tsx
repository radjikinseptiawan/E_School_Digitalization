import React from 'react'

export default function MediaDetailCard() {
  return (

            <div className='mt-18 mb-20 flex-col flex rounded-md p-4'>
                <div>
                    <img src="https://images.pexels.com/photos/33314204/pexels-photo-33314204.jpeg" className='w-xl md:w-4xl rounded-md' alt="" />
                </div>
                <div className='flex gap-20 md:gap-40 my-8 justify-around'>
                    <div className='flex flex-col gap-5'>
                    <p className='text-sm md:text-2xl font-bold'>Alur Seleksi</p>
                    <p className='text-sm md:text-2xl font-bold'>Level</p>
                    <p className='text-sm md:text-2xl font-bold'>Kouta</p>
                    <p className='text-sm md:text-2xl font-bold'>Sertifikasi</p>
                    </div>

                    <div className='flex flex-col gap-5'>
                    <p className='text-sm md:text-2xl font-bold'>Lokasi Pelatihan</p>
                    <p className='text-sm md:text-2xl font-bold'>Dilihat Sebanyak</p>
                    <p className='text-sm md:text-2xl font-bold'>Aktifitas Pelatihan</p>
                    <p className='text-sm md:text-2xl font-bold'>Zonasi</p>
                    </div>
                </div>
                <button className='bg-[#13A936] bottom-0 text-xl md:text-2xl rounded-lg font-bold text-white p-2 md:p-4'>Lihat Module</button>
            </div>
    
  )
}
