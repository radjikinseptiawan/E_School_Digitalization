import DescriptionCardClassLobby from '@/components/ui/class/lobby/description-card'
import MediaDetailCard from '@/components/ui/class/lobby/media-detail-card/detail-card'
import AppLayout from '@/layouts/app-layout'
import { Head, usePage } from '@inertiajs/react'

type DataKelasType= {
  alur_seleksi :string,
  level:string,
  sertifikasi:string,
  lokasi_pelatihan:string,
  aktifitas_pelatihan:string,
  zonasi:string,
  nama_kelas:string,
  kelas_dimulai:string,
  kelas_diakhiri:string,
  kouta:number
  penyelenggara_kelas:string,
  deskripsi:string
}

export default function ClassLobby() {
  const {kelas} = usePage().props as unknown as {
    kelas : DataKelasType
  }

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

