/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import AppLayout from '@/layouts/app-layout'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'


type ProfileForm = {
  nomor_telepon: string
  domisili: string 
  tanggal_lahir: string
  nama_lengkap: string
  email: string
  password: string
}
export default function profileEdit() {
   const { props } = usePage<any>() 
  const user = props.profile || {} // ini data lama dari controller
 
  const {data , setData, processing, errors,put} = useForm<ProfileForm>({
    nomor_telepon: user.nomor_telepon ||"",
    domisili: user.domisili || "",
    tanggal_lahir: user.tanggal_lahir || "",
    nama_lengkap:props.nama_lengkap || "",
    email:props.email || "",
    password:props.password || ""
  })
  const submit = (e:React.FormEvent)=>{
    e.preventDefault()
    put(`/edit-data/${props.user_id}`)
  }

  console.log(user)
return (
<AppLayout>
    <div className='my-20 p-4'>
      <form action="" className='flex flex-col gap-4' onSubmit={submit}>
      <div className='flex gap-8 justify-center'>
      <div>
      <img src="../../userDefaultProfile.jpg" width={200} className='rounded-full mt-20 cursor-pointer hover:bg-black/50' alt="" />
      </div>
      <div className='mt-20'>
        <h1 className='font-bold text-3xl'>Edit Profile</h1> 
      <p className='text-xl'>Nama Lengkap</p>
        <input value={data.nama_lengkap} type="text" onChange={(e)=>setData("nama_lengkap",e.target.value)} className='border p-2 rounded-md w-xl' />
        {errors.nama_lengkap && <p className='text-red-600'>{errors.nama_lengkap}</p>}
      <p className='text-xl'>Domisili</p>
        <input type="text" value={data.domisili} onChange={(e)=>setData("domisili",e.target.value)} className='border p-2 rounded-md w-xl' />
        {errors.domisili && <p className='text-red-600'>{errors.domisili}</p>}
      <p className='text-xl'>Tanggal Lahir</p>
       <input type="date" value={data.tanggal_lahir} onChange={(e)=>setData("tanggal_lahir",e.target.value)} className='border p-2 rounded-md w-xl' />
       {errors.tanggal_lahir && <p className='text-red-600'>{errors.tanggal_lahir}</p>}
      <p className='text-xl'>Nomor Telepon</p>
        <input value={data.nomor_telepon} type="text" onChange={(e)=>setData("nomor_telepon",e.target.value)} className='border p-2 rounded-md w-xl' />
        {errors.nomor_telepon && <p className='text-red-600'>{errors.nomor_telepon}</p>}
      <p className='text-xl'>Email</p>
      <input type="text" value={data.email} onChange={(e)=>setData("email",e.target.value)} className='border p-2 rounded-md w-xl' />
        {errors.email && <p className='text-red-600'>{errors.email}</p>}
      <p className='text-xl'>Password</p>
      <input type="text" value={data.password} onChange={(e)=>setData("password",e.target.value)} className='border p-2 rounded-md w-xl' />
        {errors.password && <p className='text-red-600'>{errors.password}</p>}
      <div className='flex justify-end my-4 gap-4'>
        <button className='bg-red-600 p-2 cursor-pointer font-bold text-white rounded-md' onClick={()=>window.location.href = "/profile"}>Cancel</button>
      <button type='submit' disabled={processing} className='bg-green-600 cursor-pointer p-2 font-bold text-white rounded-md'>Save</button>
      </div>
      </div>
      </div>
      </form>
    </div>
    </AppLayout>
  )
}
