import React from 'react'

export default function CertificateCard() {
  return (
        <div className='shadow-xl p-4 w-96 my-2 rounded-md flex-col flex'>
          <div className='bg-gray-400 p-6 rounded-md h-64'>
            <img src="https://marketplace.canva.com/EAGMPfFcHWI/1/0/1600w/canva-blue-and-white-simple-modern-certificate-of-appreciation-kYHEaKKpJI0.jpg" alt="" />
          </div>
          <div className='flex justify-between my-4'>
            <div>
              <h1 className='text-xl font-bold'>Nama Sertifikat</h1>
              <p className='text-gray-500'>Publikasi : 09-20-2022</p>
            </div>
            
            <button className='bg-[#177E23] p-2 rounded-md font-bold text-white'>View Credential</button>
          </div>
        </div>
  )
}
