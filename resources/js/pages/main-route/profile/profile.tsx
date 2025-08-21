/* eslint-disable @typescript-eslint/no-explicit-any */
import ShortAccountInfo from '@/components/ui/profile/profilePage'
import ProfileContaint from '@/components/ui/profile/profilePage/containtProfile'
import AppLayout from '@/layouts/app-layout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export default function ProfilePage() {
  const {profile,email,nama_lengkap,tanggalBergabung,user_id} = usePage<any>().props
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
            <ShortAccountInfo username={`${nama_lengkap}`} clicked={() => window.location.href = `/profile-edit/${user_id}`} image={{
          media: "/userDefaultProfile.jpg"
        }}/>   
            <ProfileContaint action={{
          email: email,
          domisili: profile?.domisili,
          nomorTelepon : profile?.nomor_telepon,
          tanggalBergabung: tanggalBergabung,
          username: nama_lengkap,
          tanggalLahir:profile?.tanggal_lahir
        }}/>
        </div>
    </AppLayout>
  )
}
