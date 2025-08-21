import React from 'react';

export default function LessonCardRow({onClicked,title,level,tanggalPelaksanaan,metodePelaksanaan,penyelenggara}:{title:string,level:string,tanggalPelaksanaan:string,metodePelaksanaan:string,penyelenggara:string,onClicked:()=>void}) {
  return (
    <>
      <div className="p-2 mx-auto bg-white w-full max-w-3xl rounded-md shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
        
        <img
          className="rounded-md shadow-md object-cover w-full sm:w-48 h-48 sm:h-auto"
          src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg"
          alt="Fisika"
        />

        <div className="flex-1 text-left sm:text-left">
          <h1 className="font-extrabold md:text-xl text-lg text-black">{title}</h1>
          <h1 className="font-extrabold md:text-md text-sm text-black">{level}</h1>
          <hr />
          <p className="mt-3 md:text-md text-sm text-gray-500">{tanggalPelaksanaan}</p>
          <p className="md:text-md text-sm text-gray-500">{metodePelaksanaan}</p>
          <p className="md:text-md text-sm text-gray-500">{penyelenggara}</p> 
        <div className="flex sm:justify-end w-full sm:w-auto">
          <button
            className="my-3 text-md bg-[#13A936] px-5 py-2 rounded-md text-white font-semibold w-full sm:w-auto"
            onClick={onClicked}
          >
            Akses Kelas
          </button>
        </div>


        </div>
      </div>
    </>
  );
}
