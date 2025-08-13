/* eslint-disable react-hooks/rules-of-hooks */
import DashboardCount from '@/components/ui/count'
import LessonCardRow from '@/components/ui/LessonCard/LessonCardRow'
import DashboardProfile from '@/components/ui/profile/dashboardProfile'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

export default function dashboard() {
  return (
    <AppLayout>
      <Head title="Dashboard"/>
      <div className="flex flex-col-reverse justify-center md:flex-row gap-6 mt-10 md:mt-20 px-4">
        
        <div className="w-full max-w-2xl">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Kelas Diikuti</h1>
          <div className="bg-[#EEEEEE] flex flex-col gap-2 rounded-2xl p-4 sm:p-5 h-auto md:h-11/12 overflow-auto">
            <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} />
            <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} />
            <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} />
            <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} />
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Profile</h1>
          <div className="border-[#EEEEEE] rounded-2xl border-2 h-auto md:h-11/12">
            
            <DashboardProfile media="userDefaultProfile.jpg" username="Radjikin Septiawan" />

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 justify-center my-8 md:my-12">
              <DashboardCount title="Kelas Selesai" count="6" />
              <DashboardCount title="Sertifikasi Didapat" count="10" />
              <DashboardCount title="Seminar Diikuti" count="4" />
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
