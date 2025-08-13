import React from 'react'

export default function BiodataSection() {
  return (
    <>
<h1 className="font-bold underline text-3xl md:text-5xl mx-2 md:mx-4">Biodata</h1>
      
      <div className="flex flex-col w-full justify-center gap-2 md:gap-4 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Nama Lengkap:</h1>
          <h1 className="sm:mx-4 text-lg md:text-2xl">Radjikin Septiawan</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Email:</h1>
          <h1 className="text-lg md:text-2xl break-all">radjikinseptiawan@gmail.com</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Nomor Telepon:</h1>
          <h1 className="text-lg md:text-2xl">+62-858-8052-8744</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Alamat Domisili:</h1>
          <h1 className="text-lg md:text-2xl">Kabupaten Bekasi</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Tanggal Bergabung:</h1>
          <h1 className="text-lg md:text-2xl">17 September 2005</h1>
        </div>
      </div>
</>
  )
}
