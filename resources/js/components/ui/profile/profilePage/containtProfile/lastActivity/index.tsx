/* eslint-disable @typescript-eslint/no-unused-vars */
import LessonCardRow from '@/components/ui/LessonCard/LessonCardRow'
import React, { useState } from 'react'

export default function LastActivity() {
  const [isAvailable,setIsAvailable] = useState<boolean>(false)
  return (
      <div>
        {
        isAvailable ?
        <>
        <h1 className="font-bold underline text-3xl md:text-5xl my-6 md:my-8 mx-2 md:mx-4">Aktivitas Terbaru</h1>
        <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} title={''} level={''} tanggalPelaksanaan={''} metodePelaksanaan={''} penyelenggara={''} />
        </>
        :
          <div className='h-96 text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Belum ada kelas diikuti!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan untuk menjadi persiapan kerja!</p>
          </div>
        }
      </div>

  )
}
