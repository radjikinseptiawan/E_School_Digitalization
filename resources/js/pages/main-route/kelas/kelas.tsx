/* eslint-disable react-hooks/rules-of-hooks */
import KelasCard from '@/components/ui/LessonCard/kelasCard'
import SearchEngine from '@/components/ui/SearchEngine'
import AppLayout from '@/layouts/app-layout'
import { Head, usePage } from '@inertiajs/react'

type DataKelas = {
  nama_kelas: string,
  level: string,
  kelas_dimulai: Date,
  kelas_diakhiri: Date,
  kelas_id: string,
}

export default function Kelas() {
  const { kelas } = usePage().props as unknown as {
    kelas: DataKelas[]
  }

  
  return (
    <AppLayout>
      <Head title='Kelas' />
      <div className='mt-20 h-screen'>
        <SearchEngine changed={() => {}} buttonText={'Cari Kelas'} logicSearch={() => {}} />
        <div className='flex justify-center'>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-4 my-5'>

            {(!kelas || kelas.length == 0) ? 
              <div>
                  <h1>Belum ada kelas!</h1>
              </div>
             
             : kelas.map((item) => (
                  <KelasCard
                    key={item.kelas_id}
                    clicked={() => window.location.href = `/class-lobby/${item.kelas_id}`}
                    title={item.nama_kelas}
                    level={item.level}
                    kelas_dimulai={item.kelas_dimulai}
                    kelas_diakhiri={item.kelas_diakhiri}
                  />
                ))
            }

          </div>
        </div>
      </div>
    </AppLayout>
  )
}
