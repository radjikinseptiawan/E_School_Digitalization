import React from 'react'


export interface ClassData {
  selection: string | undefined;
  level: string | undefined;
  kouta: number | undefined;
  certification: string | undefined;
  trainingLocation: string | undefined;
  zone: string | undefined;
  viewers:number | undefined;
  activity:string | undefined

  aTo:()=>void
}

export default function MediaDetailCard(
    {   aTo,
        selection,
        level,
        kouta,
        certification,
        trainingLocation,
        viewers,
        activity,
        zone}
     : ClassData) {
  return (

            <div className='mt-18 mb-20 flex-col flex rounded-md p-4'>
                <div>
                    <img src="https://images.pexels.com/photos/33314204/pexels-photo-33314204.jpeg" className='w-xl md:w-4xl rounded-md' alt="" />
                </div>
                <div className='flex gap-20 md:gap-40 my-8 justify-around'>
                    <div className='flex flex-col gap-5'>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Alur Seleksi : </p>
                    <p>{selection}</p>
                    </span>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>level : </p>
                    <p>{level}</p>
                    </span>                    
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>kouta : </p>
                    <p>{kouta}</p>
                    </span>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Sertifikasi : </p>
                    <p>{certification}</p>
                    </span>
                    </div>

                    <div className='flex flex-col gap-5'>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Lokasi Pelatihan : </p>
                    <p>{trainingLocation}</p>
                    </span>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Dilihat : </p>
                    <p>{viewers}</p>
                    </span>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Aktifitas : </p>
                    <p>{activity}</p>
                    </span>
                    <span>
                    <p className='text-sm md:text-2xl font-bold'>Zone : </p>
                    <p>{zone}</p>
                    </span></div>
                </div>
                <button className='bg-[#13A936] bottom-0 text-xl md:text-2xl rounded-lg font-bold text-white p-2 md:p-4' onClick={aTo}>Lihat Module</button>
            </div>
    
  )
}
