/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import DashboardProfile from '../dashboardProfile'
import DashboardCount from '../../count'
import { usePage } from '@inertiajs/react'

type DataAccount = {
  username:string,
  clicked : ()=>void
}

export default function ShortAccountInfo({username,clicked}:DataAccount) {
  const [isAvailable,setIsAvailable] = useState<boolean>(false)
  const {user_id} = usePage().props
  return (
    <div className="mt-10 sm:mt-20">
      <div className="min-h-96 w-full max-w-2xl mx-auto px-4">
        
        <DashboardProfile media="userDefaultProfile.jpg" username={username} />
        
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 justify-center my-10 sm:my-20">
          <DashboardCount title="Kelas Selesai" count={isAvailable ? "6":"0"} />
          <DashboardCount title="Sertifikasi Didapat" count={isAvailable ? "10":"0"} />
          <DashboardCount title="Seminar Diikuti" count={isAvailable ? "4":"0"} />
        </div>

        <div className="text-center italic text-sm sm:text-base">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius labore quam. Adipisci, mollitia animi delectus quos odio tempore magnam, quo tenetur ratione quidem in molestias excepturi deleniti numquam earum?
          </p>
        </div>

        <div className="flex p-4 sm:p-6 md:p-10 justify-end">
          <button
            onClick={clicked}
            className="bg-[#13A936] px-4 sm:px-6 py-2 sm:py-3 rounded-md text-white font-bold text-sm sm:text-base"
          >
            Edit
          </button>
        </div>

      </div>
    </div>
  )
}
