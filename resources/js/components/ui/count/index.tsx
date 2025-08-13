import React from 'react'

export default function DashboardCount({title,count}:{title:string, count:string}) {
  return (
                    <div className='flex items-center flex-col text-xl md:text-2xl'>
                      <h1>{count}</h1>
                      <h1>{title}</h1>
                    </div>
  )
}
