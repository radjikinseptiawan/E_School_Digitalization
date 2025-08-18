import ShortAccountInfo from '@/components/ui/profile/profilePage'
import ProfileContaint from '@/components/ui/profile/profilePage/containtProfile'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function ProfilePage() {
  return (
    <AppLayout>
        <Head title='Profile'/>
        <div className='flex flex-col md:flex-row'>
            <ShortAccountInfo/>   
            <ProfileContaint/>
        </div>
    </AppLayout>
  )
}
