import React from 'react'

export default function LoadingCard() {
  return (
                <div className='p-8 h-auto animate-pulse rounded-md bg-gray-500 w-96'>
                  <img className='rounded-md p-2 w-xl bg-gray-600 h-72' alt="" />
                  <div className='flex gap-4 items-center justify-between'>
                    <div className='my-2 w-full flex-col flex gap-2'>
                    <div className='text-xl w-52 font-bold  p-3 rounded-md bg-gray-700'></div>
                    <div className='text-xl w-52 font-bold  p-3 rounded-md bg-gray-700'></div>
                    <div className='text-xl w-52 font-bold  p-3 rounded-md bg-gray-700'></div>
                    </div>
                    <button className='bg-gray-700 font-bold text-white rounded-md shadow-2xl cursor-pointer p-4 w-40 h-12'></button>
                  </div>
                </div>
  )
}
