import React from 'react'

export default function LearningScore() {
  return (
      <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 my-10 md:my-20">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Total Jam Belajar</h1>
          <h1 className="text-lg md:text-2xl">200</h1>
        </div>
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-bold">Skor Rata-Rata</h1>
          <h1 className="text-lg md:text-2xl">85.5</h1>
        </div>
      </div>

  )
}
