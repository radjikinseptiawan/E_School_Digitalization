/* eslint-disable react-hooks/rules-of-hooks */
import KelasCard from '@/components/ui/LessonCard/kelasCard'
import LoadingCard from '@/components/ui/LessonCard/kelasCard/loading'
import SearchEngine from '@/components/ui/SearchEngine'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'

type DataKelas = {
  nama_kelas:string,
  level:string,
  kelas_dimulai:Date,
  kelas_diakhiri:Date
  id:number,
}

export default function Kelas() {
  const [data,setData] = useState<DataKelas[]>([]);
  const [isAvailable,setIsAvailable] = useState<boolean>(false);
  const fetchingData = async ()=>{
    try{
      const response = await fetch("http://127.0.0.1:8000/api/semua-kelas/")
      const datas = await response.json();
      setData(datas.data)
      setIsAvailable(true)
    }catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchingData();
    console.log(data);
  },[data])

  return (
    <AppLayout>
      <Head title='Kelas'/>
      <div className='mt-20 h-screen'>
        <SearchEngine changed={() => {}} buttonText={'Cari Kelas'} logicSearch={()=>{} }/>
        <div className='flex justify-center'>
          <div className='grid gap-5 grid-cols-1 md:grid-cols-4 my-5'>
          
            {

            isAvailable ? 

            data.map((item,index)=>(
              <KelasCard 
                clicked={()=> window.location.href = `/class-lobby/${item.id}`}
                title={item.nama_kelas} 
                level={item.level} 
                kelas_dimulai={item.kelas_dimulai} 
                kelas_diakhiri={item.kelas_diakhiri} 
                key={index}
              />
            ))
            :
            data.map(()=>(
              <LoadingCard/>
            ))
          }
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
