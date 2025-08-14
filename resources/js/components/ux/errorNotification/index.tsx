import React, { useState, useEffect } from 'react'

export default function ErrorNotification({ message } : {message : string | undefined}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (message) {
      setOpen(true)
      const timer = setTimeout(() => setOpen(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [message])

  if (!message) return null
  return (
    <div
      className={`fixed top-20 right-0 z-50 transition-transform duration-300 ease-in-out
      ${open ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <div className="bg-red-600 text-white p-4 rounded-l-md shadow-lg min-w-[200px]">
        {message}
      </div>
    </div>
  )
}
