/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import AnnouncementNotification from '@/components/ui/pengumumanNotifikasi'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'

export default function pengumuman() {
  const [isAvailable,setIsAvailable] = useState<boolean>(false);

  return (
      <AppLayout>
        <Head title='Pengumuman'/>
        <div className='mt-20 flex justify-center'>
          <div className='h-screen w-xl flex-col flex gap-4 shadow-2xl p-2'>

          {
            isAvailable ? 

            Array.from({length:10}).map(()=>(
                
                <AnnouncementNotification/>

            ))
            :
           <div className='h-screen text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Belum ada pengumuman tersedia!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan untuk menjadi persiapan kerja!</p>
          </div>

          }
           
            </div>
        </div>
      </AppLayout>)
}
