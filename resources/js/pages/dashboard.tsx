/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import DashboardCount from '@/components/ui/count'
import LessonCardRow from '@/components/ui/LessonCard/LessonCardRow'
import DashboardProfile from '@/components/ui/profile/dashboardProfile'
import AppLayout from '@/layouts/app-layout'
import { Head, usePage } from '@inertiajs/react'
import { useEffect, useState } from 'react'


type DashboardCardType = {
  nama_kelas : string;
  level: string;
  id:number;
  kelas_dimulai:Date;
  kelas_diakhiri:Date;
  penyelenggara_kelas:string;
}

export default function dashboard() {
  const {nama_lengkap} = usePage().props;
  const [kelas, setKelas] = useState<DashboardCardType[]>([]);
  const [isAvailable,setIsAvailable] = useState<boolean>(false)

  const fetchKelasData = async ()=>{
    const response = await fetch('http://localhost:8000/api/semua-kelas',{
      method:"GET"
    });

    const data = await response.json();
    setKelas(data.data)
    setIsAvailable(true);
  }

  useEffect(()=>{
    fetchKelasData();
  },[]);
  return (
    <AppLayout>
      <Head title="Dashboard"/>
      <div className="flex flex-col-reverse justify-center md:flex-row gap-6 mt-10 md:mt-20 px-4">
        
        <div className="w-full max-w-2xl">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Kelas Diikuti</h1>
          <div className="bg-[#EEEEEE] flex flex-col gap-2 rounded-2xl p-4 sm:p-5 h-auto md:h-[91%]">
          {
            kelas &&
            isAvailable ? 
            kelas.map((item,index)=>(
            <LessonCardRow key={index++} 
            onClicked={() => window.location.href = `/class-lobby/${item.id}`} 
            title={item?.nama_kelas}
            level={item?.level} 
            tanggalPelaksanaan={item?.kelas_dimulai + " " + item?.kelas_diakhiri} 
            metodePelaksanaan={'Online'} 
            penyelenggara={item?.penyelenggara_kelas} />
            ))

            :

                      <div className='h-96 text-center flex-col flex justify-center align-middle items-center'>
            <h1 className='text-3xl font-bold'>Belum ada kelas diikuti!</h1>
            <p className='text-gray-400'>Kerjakan modul-modul yang sudah kami sediakan!</p>
          </div>
          }
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Profile</h1>
          <div className="border-[#EEEEEE] rounded-2xl border-2 h-auto md:h-[91%]">
            
            <DashboardProfile media="userDefaultProfile.jpg" username={`${nama_lengkap}`} />

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 justify-center my-8 md:my-12">
              <DashboardCount title="Kelas Selesai" count={isAvailable ? "6": "0"} />
              <DashboardCount title="Sertifikasi Didapat" count={isAvailable ? "10" : "0"} />
              <DashboardCount title="Seminar Diikuti" count={isAvailable ? "4" : "0"} />
            </div>

            <div className="flex p-4 sm:p-6 md:p-10 justify-end">
              <button
                onClick={() => window.location.href = "/profile"}
                className="bg-[#13A936] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-white font-bold text-sm sm:text-base"
              >
                Profile
              </button>
            </div>
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
