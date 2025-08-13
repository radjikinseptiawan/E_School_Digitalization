import DescriptionCardClassLobby from '@/components/ui/class/lobby/description-card'
import MediaDetailCard from '@/components/ui/class/lobby/media-detail-card/detail-card'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function ClassLobby() {
  return (
    <AppLayout>
      <Head title='Class'/>
      <div className="flex flex-col md:flex-row gap-2 sm:gap-4 md:gap-6 justify-center w-full max-w-6xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl">
        
        <div className="flex-1 min-w-[280px]">
          <MediaDetailCard />
        </div>

        <div className="flex-1 min-w-[280px]">
          <DescriptionCardClassLobby 
            title="Website Developer"
            level="Beginner"
            date="09 Agustus 2025 - 17 Agustus 2025"
            platform="Online"
            penyelenggara="Amazon"
            deskripsi="Kelas Website Developer Fundamental ini dirancang untuk pemula yang ingin memahami dasar-dasar pengembangan website. Selama 7 hari, peserta akan mempelajari HTML, CSS, dan JavaScript dari nol, memahami struktur website, serta mempraktikkan langsung pembuatan proyek sederhana. Kelas ini diadakan secara online oleh Google, sehingga peserta dapat belajar dari mana saja dengan fleksibilitas waktu."
          />
        </div>

      </div>
    </AppLayout>
  )
}
