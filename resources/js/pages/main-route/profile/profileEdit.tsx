/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import ProfileEditButton from '@/components/ui/button/profileEditButton';
import Input from '@/components/ui/input/profileEdit';
import AppLayout from '@/layouts/app-layout';
import { getCroppedImg } from '@/utils/cropImage';
import { Head, useForm, usePage } from '@inertiajs/react';
import React, { useRef, useState, useEffect } from 'react'; // <-- Tambahkan 'useEffect'
import Cropper from 'react-easy-crop';
import { text } from 'stream/consumers';

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
  const [showCropper,setShowCropper] = useState(false)
  const [cropped,setCroppedd] = useState('')
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

  const onCropComplete = (croppedArea : any,croppedAreaPixels : any)=>{
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const onFileChange = (e : any)=>{
     if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0]
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = ()=>{
          setImageSrc(reader.result as string)
          setShowCropper(true)
          }
        }
                
  }

const handleCrop = async () => {
    if (!imageSrc || !croppedAreaPixels) return;

    try {
        const croppedImageBlob : any = await getCroppedImg(imageSrc, croppedAreaPixels);

        const file = new File([croppedImageBlob], 'cropped-profile.png', { type: croppedImageBlob.type });

        setData('photo_profile', file);

        const imageUrl = URL.createObjectURL(file);
        setImageSrc(imageUrl);
        setShowCropper(false);

    } catch (e) {
        console.error("Error during cropping:", e);
    }
};  console.log("ini state",imageSrc)
  useEffect(() => {
    if (data.photo_profile) {
      setImageSrc(URL.createObjectURL(data.photo_profile));
    } else if (user.photo_profile) {
      setImageSrc(`/storage/${user.photo_profile}`);
    }
  }, [data.photo_profile, user.photo_profile]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data yang akan dikirim:", data)
  
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
          <div className="flex flex-col my-24 gap-8 md:flex-row md:justify-center">
              <div onClick={handleDivClick}>
              <input
                accept="image/jpg, image/png, image/jpeg"
                type="file"
                name="photo_profile"
                className="hidden"
                ref={refId}
                onChange={onFileChange}
              />
              <img
                src={
                  imageSrc
                    ? imageSrc
                    : '/userDefaultProfile.jpg'
                }
                width={200}
                height={200}
                className="rounded-full overflow-hidden mt-20 cursor-pointer hover:bg-black/50"
                alt="Foto Profil"
              />
            </div>

          {showCropper && (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div className="relative w-[80vw] h-[80vh] sm:w-[50vw] sm:h-[50vh]">
            <Cropper
                image={imageSrc || ''}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropComplete={onCropComplete}
                onCropChange={setCrop}
                onZoomChange={setZoom}
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
                <button type="button" onClick={() => setShowCropper(false)} className='bg-gray-400 text-white p-2 rounded'>Cancel</button>
                <button type="button" onClick={handleCrop} className='bg-amber-500 text-white p-2 rounded'>Oke</button>
            </div>
        </div>
    </div>
)}
  <div className="mt-20">
              <h1 className="font-bold text-3xl">Edit Profile</h1>
              <Input type='text' error={`${errors.nama_lengkap}`} change={(e)=>{setData("nama_lengkap",e.target.value)} } data={data.nama_lengkap} title={'Nama Lengkap'}/>
              <Input type="text" error={`${errors.domisili}`} change={(e)=>{setData("domisili",e.target.value)} } data={data.domisili} title={'Domisili'}/>
              <Input type="date" error={`${errors.tanggal_lahir}`} change={(e)=>{setData("tanggal_lahir",e.target.value)} } data={data.tanggal_lahir} title={'Tanggal Lahir'}/>
              <Input type="text" error={`${errors.nomor_telepon}`} change={(e)=>{setData("nomor_telepon",e.target.value)} } data={data.nomor_telepon} title={'Nomor Telepon'}/>
              <Input type="email" error={`${errors.email}`} change={(e)=>{setData("email",e.target.value)} } data={data.email} title={'Email'}/>
            
              <div className="flex justify-end my-4 gap-4">
                <ProfileEditButton types={"button"} clicked={() => window.location.href = "/profile"} text='Cancel' sx={'bg-red-600 p-2'}/>
                <ProfileEditButton types={"submit"} clicked={()=>{}}  text="save" sx='bg-green-600 p-2'/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}