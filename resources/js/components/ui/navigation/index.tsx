import { router } from '@inertiajs/react';
import React, { useState } from 'react'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="bg-[#177E23] z-10 fixed top-0 w-full p-2 flex items-center">
        <button className="p-2" onClick={() => setOpen(true)}>
          <img src="menu 1.png" width={35} alt="menu" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`bg-white shadow-2xl h-full fixed top-0 left-0 z-50 transform transition-transform duration-300 ease-in-out 
        ${open ? 'translate-x-0' : '-translate-x-full'} 
        w-64 sm:w-80 max-w-full overflow-y-auto`}
      >
        <div className="border-b p-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button onClick={() => setOpen(false)}>
            <img
              src="x (2).svg"
              alt="close"
              className="border-2 border-red-600 rounded-2xl bg-red-600 w-8 h-8"
            />
          </button>
        </div>

        <ol className="list-none p-3 space-y-3">
          <FirstSectionNavigation />
          <SecondSectionNavigation />
        </ol>
      </div>
    </>
  )
}

function FirstSectionNavigation() {
  return (
    <div className="bg-gray-200 rounded-md">
      {[
        { title: 'Dashboard', href: '/dashboard', action: ()=>{} },
        { title: 'Pengumuman', href: '/pengumuman', action: ()=>{} },
        { title: 'Profile', href: '/profile', action:()=>{} },
        { title: 'Kelas', href: '/kelas', action:()=>{}}
      ].map((item, index) => (
        <li key={index}>
          <a href={item.href}>
            <div className="p-3 text-base sm:text-lg hover:bg-yellow-400 hover:rounded-md hover:underline cursor-pointer">
              {item.title}
            </div>
          </a>
        </li>
      ))}
    </div>
  )
}

function SecondSectionNavigation() {
  const logoutAccount = (e : React.MouseEvent)=>{
    e.preventDefault();
    router.post('/logout')
  }
  return (
    <div className="bg-gray-200 rounded-md mt-3">
      {[
        { title: 'Cari Pelatihan', href: '/pelatihan', action: ()=>{} },
        { title: 'Magang & Lowongan Kerja', href: '/maganglowongankerja', action: ()=>{} },
        { title: 'Galeri Sertifikasi', href: '/galeri',action:()=>{} },
        { title: 'Keluar', href: '/login', action:logoutAccount }
      ].map((item, index) => (
        <li key={index}>
          <a href={item.href}>
            <div onClick={item.action} className="p-3 text-base sm:text-lg hover:bg-yellow-400 hover:rounded-md hover:underline cursor-pointer">
              {item.title}
            </div>
          </a>
        </li>
      ))}
    </div>
  )
}
