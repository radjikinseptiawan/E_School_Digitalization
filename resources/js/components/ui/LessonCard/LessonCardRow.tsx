import React from 'react';

export default function LessonCardRow() {
  return (
    <>
      <div className="p-2 mx-auto bg-white w-full max-w-3xl rounded-md shadow-2xl flex flex-col sm:flex-row items-center sm:items-start gap-5">
        
        <img
          className="rounded-md shadow-md object-cover w-full sm:w-48 h-48 sm:h-auto"
          src="https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg"
          alt="Fisika"
        />

        <div className="flex-1 text-center sm:text-left">
          <h1 className="font-extrabold text-xl my-3 text-blue-600">Fisika</h1>
          <hr />
          <p className="mt-3 text-md">Muhammad Hadi Kusuma</p>
          <p className="text-md">Selasa 09:30 - 11:30</p>
        </div>

        <div className="flex sm:justify-end w-full sm:w-auto">
          <button
            className="my-3 text-md bg-blue-600 px-5 py-2 rounded-md text-white font-semibold w-full sm:w-auto"
            onClick={() => {}}
          >
            Masuk Kelas
          </button>
        </div>

      </div>
    </>
  );
}
