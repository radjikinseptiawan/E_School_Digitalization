import React, { ChangeEvent } from 'react'

type DataProfileInput = {
    handleDivClicks : ()=>void
    refsId: React.Ref<HTMLInputElement>,
    fileChange : (e:ChangeEvent<HTMLInputElement>)=>void,
    imageSrco: string
}

export default function PhotoProfileInput({handleDivClicks,refsId,fileChange,imageSrco}:DataProfileInput) {
    

    return (
    <div onClick={handleDivClicks}>
              <input
                accept="image/jpg, image/png, image/jpeg"
                type="file"
                ref ={refsId}
                name="photo_profile"
                className="hidden"
                onChange={fileChange}
              />
              <img
                src={
                  imageSrco
                    ? imageSrco
                    : '/userDefaultProfile.jpg'
                }
                width={200}
                height={200}
                className="rounded-full overflow-hidden mt-20 cursor-pointer hover:bg-black/50"
                alt="Foto Profil"
              />
            </div>

  )
}
