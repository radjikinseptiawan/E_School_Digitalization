/* eslint-disable @typescript-eslint/no-unused-vars */
import LessonCarGridd from '@/components/ui/LessonCard/LessonCardGrid'
import React, { useState } from 'react'

export default function CertificationSection() {
  const [isAvailable,setIsAvailable] = useState<boolean>(false);
  return (
    <div>
      <h1 className="font-bold underline text-3xl md:text-5xl my-6 md:my-8 mx-2 md:mx-4">
        Sertifikasi
      </h1>

{
  isAvailable ?

      <div
        className="
          grid gap-6 mx-2 md:mx-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <LessonCarGridd key={i} />
        ))}
      </div>

      :

          <div className='h-96 text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Kamu belum punya setifikat!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan untuk mengisi galeri sertifikat!</p>
          </div>


}
<button onClick={()=>window.location.href ="/galeri"} className='bg-[#13A936] p-4 rounded-md font-bold mb-20 mx-10 text-white'>Lihat Selengkapnya</button>
    </div>
  )
}
