import React from 'react'
type DataType ={
  username:string | undefined | unknown,
  email:string | undefined|unknown,
  nomorTelepon:string|undefined|unknown,
  domisili:string|undefined|unknown
  tanggalBergabung:string|undefined|unknown,
  tanggalLahir:string|undefined|unknown
}
export default function BiodataSection({username,email,tanggalLahir,nomorTelepon,domisili,tanggalBergabung}:DataType) {
  return (
    <>
<h1 className="font-bold underline text-3xl md:text-5xl mx-2 md:mx-4">Biodata</h1>
      
      <div className="flex flex-col w-full justify-center gap-2 md:gap-4 mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Nama Lengkap:</h1>
          <h1 className="sm:mx-4 text-lg md:text-2xl">{username as string}</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Email:</h1>
          <h1 className="text-lg md:text-2xl break-all">{email as string}</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Nomor Telepon:</h1>
          <h1 className="text-lg md:text-2xl">{nomorTelepon as string}</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Alamat Domisili:</h1>
          <h1 className="text-lg md:text-2xl">{domisili as string}</h1>
        </div>


        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Tanggal Lahir:</h1>
          <h1 className="text-lg md:text-2xl">{tanggalLahir as string}</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <h1 className="sm:mx-4 text-lg md:text-2xl">Tanggal Bergabung:</h1>
          <h1 className="text-lg md:text-2xl">{tanggalBergabung as string}</h1>
        </div>

      </div>
</>
  )
}
