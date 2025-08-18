/* eslint-disable @typescript-eslint/no-unused-vars */
import LowonganCard from '@/components/ui/lowonganCard'
import SearchEngine from '@/components/ui/SearchEngine'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

export default function MagangLowongan() {
  const [isAvailable,setIsAvailable] = useState<boolean>(false)
  return (
    <AppLayout>
      <Head title='Magang & Lowogan Kerja'/>
      <div className="mt-20 w-full overflow-auto h-1/2">
        <SearchEngine changed={() => {}} buttonText="Cari Lowongan" logicSearch={() => {}} />

      {
        isAvailable ? 
        <div className="flex gap-4 h-1/2 p-2 w-1/2 my-4 shadow-2xl justify-center mx-auto flex-col">
          {Array.from({ length: 20 }).map((_, i) => (
            <LowonganCard
              key={i}
              role="Junior Website Developer"
              namaInstansi="PT PERDANA KUSUMA INDO"
              clicked={() => {}}
            />
          ))}
        </div>
      :
        <div className='h-screen text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Lowongan Pekerjaan belum tersedia!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan untuk menjadi persiapan kerja!</p>
          </div>
        
      }
      </div>
    </AppLayout>
  )
}
