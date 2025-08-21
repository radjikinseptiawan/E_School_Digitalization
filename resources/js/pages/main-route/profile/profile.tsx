import ShortAccountInfo from '@/components/ui/profile/profilePage'
import ProfileContaint from '@/components/ui/profile/profilePage/containtProfile'
import AppLayout from '@/layouts/app-layout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export default function ProfilePage() {
  const {profile,email,nama_lengkap,tanggalBergabung,user_id} = usePage().props
  console.log({
    profile,
    email,
    nama_lengkap,
    user_id,
    tanggalBergabung
  })
  return (
    <AppLayout>
        <Head title='Profile'/>
        <div className='flex flex-col md:flex-row'>
            <ShortAccountInfo username={`${nama_lengkap}`} clicked={()=>window.location.href = `/edit/${user_id}` }/>   
            <ProfileContaint action={{
          email: email,
          domisili: "Bekasi",
          nomorTelepon : "+62-858-8052-8744",
          tanggalBergabung: tanggalBergabung,
          username: nama_lengkap
        }}/>
        </div>
    </AppLayout>
  )
}
