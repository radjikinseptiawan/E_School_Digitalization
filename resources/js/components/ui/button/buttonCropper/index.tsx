import React from 'react'

type DataActionType = {
    action : {
        cancel : ()=>void,
        ok: ()=>void
    }
}

export default function ButtonCropper({action}:DataActionType) {
  return (
         <div className="absolute bottom-4 right-4 flex gap-2">
                <button type="button" onClick={action.cancel} className='bg-gray-400 text-white p-2 rounded'>Cancel</button>
                <button type="button" onClick={action.ok} className='bg-amber-500 text-white p-2 rounded'>Oke</button>
            </div>
   
  )
}
