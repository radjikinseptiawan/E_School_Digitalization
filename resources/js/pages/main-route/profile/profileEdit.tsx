/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import AppLayout from '@/layouts/app-layout';
import { Head, useForm, usePage } from '@inertiajs/react';
import React, { useRef, useState, useEffect } from 'react'; // <-- Tambahkan 'useEffect'
import Cropper from 'react-easy-crop';

type ProfileForm = {
  nomor_telepon: string;
  domisili: string;
  tanggal_lahir: string;
  nama_lengkap: string;
  email: string;
  photo_profile: File | null;
};

export default function ProfileEdit() {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null); // <-- Ubah 'setImagSrc' menjadi 'setImageSrc' dan tambahkan tipe data

  const refId = useRef<HTMLInputElement | null>(null);
  const { props } = usePage<any>();

  const user = props.profile || {};

  const { data, setData, processing, errors, post } = useForm<ProfileForm>({
    nomor_telepon: user.nomor_telepon || '',
    domisili: user.domisili || '',
    tanggal_lahir: user.tanggal_lahir || '',
    nama_lengkap: props.data.nama_lengkap || '',
    email: props.data.email || '',
    photo_profile: null,
  });

  useEffect(() => {
    if (data.photo_profile) {
      setImageSrc(URL.createObjectURL(data.photo_profile));
    } else if (user.photo_profile) {
      setImageSrc(`/storage/${user.photo_profile}`);
    }
  }, [data.photo_profile, user.photo_profile]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    post(`/profile-edit/${user.user_id}`, {
      forceFormData: true,
      onSuccess: () => {
        window.location.href = '/profile';
      },
    });
  };

  const handleDivClick = () => {
    refId.current?.click();
  };

  return (
    <AppLayout>
      <Head title="Edit" />
      <div className="my-20 p-4">
        <form
          className="flex flex-col gap-4"
          onSubmit={submit}
          encType="multipart/form-data"
        >
          <div className="flex gap-8 justify-center">
            <div onClick={handleDivClick}>
              <input
                accept="image/jpg, image/png, image/jpeg"
                type="file"
                name="photo_profile"
                className="hidden"
                ref={refId}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setData('photo_profile', e.target.files[0]);
                  }
                }}
              />
              <img
                src={
                  imageSrc
                    ? imageSrc
                    : '/userDefaultProfile.jpg'
                }
                width={200}
                className="rounded-full mt-20 cursor-pointer hover:bg-black/50"
                alt="Foto Profil"
              />
            </div>
            <div className="mt-20">
              <h1 className="font-bold text-3xl">Edit Profile</h1>

              <p className="text-xl">Nama Lengkap</p>
              <input
                name="nama_lengkap"
                value={data.nama_lengkap}
                type="text"
                onChange={(e) => setData('nama_lengkap', e.target.value)}
                className="border p-2 rounded-md w-xl"
              />
              {errors.nama_lengkap && <p className="text-red-600">{errors.nama_lengkap}</p>}

              <p className="text-xl">Domisili</p>
              <input
                name="domisili"
                type="text"
                value={data.domisili}
                onChange={(e) => setData('domisili', e.target.value)}
                className="border p-2 rounded-md w-xl"
              />
              {errors.domisili && <p className="text-red-600">{errors.domisili}</p>}

              <p className="text-xl">Tanggal Lahir</p>
              <input
                type="date"
                name="tanggal_lahir"
                value={data.tanggal_lahir}
                onChange={(e) => setData('tanggal_lahir', e.target.value)}
                className="border p-2 rounded-md w-xl"
              />
              {errors.tanggal_lahir && <p className="text-red-600">{errors.tanggal_lahir}</p>}

              <p className="text-xl">Nomor Telepon</p>
              <input
                name="nomor_telepon"
                value={data.nomor_telepon}
                type="text"
                onChange={(e) => setData('nomor_telepon', e.target.value)}
                className="border p-2 rounded-md w-xl"
              />
              {errors.nomor_telepon && <p className="text-red-600">{errors.nomor_telepon}</p>}

              <p className="text-xl">Email</p>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="border p-2 rounded-md w-xl"
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}

              <div className="flex justify-end my-4 gap-4">
                <button
                  type="button"
                  className="bg-red-600 p-2 cursor-pointer font-bold text-white rounded-md"
                  onClick={() => (window.location.href = '/profile')}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="bg-green-600 cursor-pointer p-2 font-bold text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}