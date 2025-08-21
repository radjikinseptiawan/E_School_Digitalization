import React, { useEffect, useState } from 'react'
import BiodataSection from './biodataSection'
import LastActivity from './lastActivity'
import LearningScore from './learningScore'
import CertificationSection from './certificationSection'

type DataAction = {
  action: {
    email: string | unknown | undefined,
    username:string | unknown | undefined,
    tanggalBergabung:string | unknown | undefined,
    domisili: string | unknown | undefined,
    nomorTelepon: string | unknown | undefined,
    tanggalLahir: string|unknown|undefined
  }
}

export default function ProfileContaint({action}:DataAction) {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(()=>{
        const weight = ()=> setWidth(window.innerWidth)
        window.addEventListener('resize',weight)
        return ()=> window.removeEventListener('resize',weight)
    },[width])
    console.log(width)
    return (
    <div className="mt-18 overflow-y-scroll w-full h-screen border-[#EEEEEE] border-2 p-4 md:p-8 shadow-2xl rounded-2xl">
      <BiodataSection username={action.username} tanggalLahir={action.tanggalLahir} email={action.email} nomorTelepon={action.nomorTelepon} domisili={action.domisili} tanggalBergabung={action.tanggalBergabung}/>
      <LastActivity/>
      <LearningScore/>
      <CertificationSection/>
      {
        width < 768 && 
        <>
        <button className='fixed transition-x bottom-25 right-5 bg-yellow-300 p-4 rounded-full' onClick={()=>{
            window.scrollTo({top:0, behavior:"smooth"})
        }}>
            <img src="/arrow-up (1).svg" alt="" />
        </button>
        </>
      }
    </div>
  )
}
