/* eslint-disable react-hooks/rules-of-hooks */
import LessonCardGrid from '@/components/ui/LessonCard/LessonCardGrid'
import LessonCardRow from '@/components/ui/LessonCard/LessonCardRow'
import React, { useState } from 'react'

export default function dashboard() {
  const [row,setRow] = useState(false)

  return (
    <>
    <div className='flex'>
    <div className='bg-white border w-xl rounded-md'>
        <div className='flex flex-col my-10 justify-center items-center gap-2'>
          <img src="https://i.pinimg.com/736x/bf/ee/b3/bfeeb37f7ab8170faf7abf48c6c38a24.jpg" width={180} height={20} className='rounded-full' alt="" />
          <h1 className='text-2xl font-bold'>Nindya Intan Lestari</h1>
          <p className='text-gray-500'>Female</p>
         </div>

      <div>
        <p>NISN : 312410082</p>
        <p>NIS: 202110085</p>
        <p>Status : Active</p>
      </div>

      <div>
        <p>Nama Wali : Syarif Jiadah</p>
        <p>Nomor Telpon Orang Tua : 087883034068</p>
        <p>Agama : Islam</p>
        <p>Jenis Kelamin: Perempuan</p>
        <p>Anak ke : 1</p>
        <p>Status Dalam Keluarga: Anak Kandung</p>
      </div>

      <div>
        <h1>Alamat Siswa</h1>
        <p>Nama Jalan/Gang : Jalan Pitara Raya Gang Damai</p>
        <p>Kelurahan: Rangkapan Jaya</p>
        <p>Kecamatan: Pancoran Mas</p>
        <p>Kota : Depok</p>
        <p>Kode Pos: 16435</p>
      </div>

      <div>
      <h1>Di Terima Di Sekola h ini</h1>
      <p>Tanggal Masuk : 06 Juni 2023</p>
      <p>Kelas : X MIPA 3</p>
      <p>Semester : 1</p> 
    </div>
    
    <div>
      <h1>Sekolah Asal</h1>
      <p>Nama Sekolah: MTS Sirojul Athfal</p>
      <p>Alamat Sekolah : -</p>
    </div>
    
    <div>
      <h1>STTB dan SHUN SMP/MTs</h1>
      <p>Nomor STTB : MTs-13 100178591</p>
      <p>Nomor SHUN : -</p>
    </div>

    <div>
      <h1>Orang Tua</h1>
      <p>Ayah: Sadikin</p>
      <p>Ibu: Mumun Maemunah</p>
      <p>Alamat Orang tua: Jl pitara raya gang damai RT RW, Rangkapan jaya kecamatan pancoran emas</p>  
    </div>

    <div>
      <h1>Pekerjaan Orang Tua</h1>
      <p>Ayah: Karyawan Swasta</p>
      <p>Ibu: Tidak Bekerja</p>
    </div>
    </div>
    
    
    <div>
      <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-bold text-center underline my-2'>Jadwal Pelajaran</h1>
        <button className='p-4 bg-gray-200 m-2 rounded-xl' onClick={()=>setRow(!row)}>{row ? 'grid':'row'}</button>
        <div className={row ? 'border-t-2 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-1' : 'flex border-t-2 flex-col gap-1'}>
           {
            row ?
            <>
            <LessonCardGrid/>
            <LessonCardGrid/>
            <LessonCardGrid/>
            <LessonCardGrid/>
            <LessonCardGrid/>
            <LessonCardGrid/>
            </>
            :
           <>
            <LessonCardRow/>
            <LessonCardRow/>
            <LessonCardRow/>
            <LessonCardRow/>
            <LessonCardRow/>
            <LessonCardRow/>
           </>
           }
        </div>
    </div>
    </div>
    </>
)
}
