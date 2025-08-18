import DescriptionCardClassLobby from '@/components/ui/class/lobby/description-card'
import MediaDetailCard from '@/components/ui/class/lobby/media-detail-card/detail-card'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export interface ClassData {
  id: number;
  nama_kelas: string;
  kelas_dimulai: string; 
  kelas_diakhiri: string;
  penyelenggara_kelas: string;
  aktifitas_pelatihan: string;
  alur_seleksi: string;
  level: string;
  kouta: number;
  sertifikasi: string;
  lokasi_pelatihan: string;
  zonasi: string;
  deskripsi: string;
}

export interface AddClassResponse {
  message: string;
  data: ClassData;
}

export default function ClassLobby({id}:{id:number}) {
  const [kelas,setKelas] = useState<ClassData>();

    const fetchKelasData = async ()=>{
    const response = await fetch(`http://localhost:8000/api/semua-kelas/${id}`,{
      method:"GET"
    });

    const data = await response.json();
    setKelas(data.data)
  }

  useEffect(()=>{
    fetchKelasData()
  },[])

  console.log(kelas)
  return (
    <AppLayout>
      <Head title='Class'/>
      <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 justify-center w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
        
        <div className="flex-1 min-w-[280px]">
          <MediaDetailCard 
            aTo={() => window.location.href = "/materi"}
            selection={kelas?.alur_seleksi}
            level={kelas?.level}
            kouta={kelas?.kouta}
            certification={kelas?.sertifikasi}
            trainingLocation={kelas?.lokasi_pelatihan}
            viewers={5000}
            activity={kelas?.aktifitas_pelatihan} zone={kelas?.zonasi}/>
        </div>

        <div className="flex-1 min-w-[280px]">
          <DescriptionCardClassLobby 
            title={kelas?.nama_kelas}
            level={kelas?.level}
            date={`${kelas?.kelas_dimulai} s/d ${kelas?.kelas_diakhiri}`}
            platform="Online"
            penyelenggara={`${kelas?.penyelenggara_kelas}`}
            deskripsi={kelas?.deskripsi}
          />
        </div>

      </div>
    </AppLayout>
  )
}

