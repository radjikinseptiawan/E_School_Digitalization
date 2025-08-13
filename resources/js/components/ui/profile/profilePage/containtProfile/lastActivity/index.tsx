import LessonCardRow from '@/components/ui/LessonCard/LessonCardRow'
import React from 'react'

export default function LastActivity() {
  return (
      <div>
        <h1 className="font-bold underline text-3xl md:text-5xl my-6 md:my-8 mx-2 md:mx-4">Aktivitas Terbaru</h1>
        <LessonCardRow onClicked={() => window.location.href = "/class-lobby"} />
      </div>

  )
}
