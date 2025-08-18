/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CertificateCard from '@/components/ui/CertificateCard'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'

export default function sertifikasi() {
  const [isAvailable,setIsAvailable] = useState<boolean>(false);
  
  return (
    <AppLayout>
      <Head title='Sertifikasi'/>
      <div className='mt-15'>

      <div>

        
        {
          isAvailable ? 

        <div className='grid md:grid-cols-4'>
          {
            isAvailable &&
            
            Array.from({length:20}).map(()=>{
              return(
                <>
                  <CertificateCard/>                
                </>
              )
            })
          
          }
        </div>
          :
          <div className='h-screen text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Kamu belum punya setifikat!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan untuk mengisi galeri sertifikat!</p>
          </div>
        }
      </div>
      </div>
    </AppLayout>
  )
}
