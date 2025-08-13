import LessonCarGridd from '@/components/ui/LessonCard/LessonCardGrid'
import React from 'react'

export default function CertificationSection() {
  return (
    <div>
      <h1 className="font-bold underline text-3xl md:text-5xl my-6 md:my-8 mx-2 md:mx-4">
        Sertifikasi
      </h1>

      <div
        className="
          grid gap-6 mx-2 md:mx-4
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <LessonCarGridd key={i} />
        ))}
      </div>
          <button className='bg-[#13A936] p-4 rounded-md font-bold mb-20 mx-10 text-white'>Lihat Selengkapnya</button>
    </div>
  )
}
