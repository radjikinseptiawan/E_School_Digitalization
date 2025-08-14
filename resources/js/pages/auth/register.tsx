/* eslint-disable @typescript-eslint/no-unused-vars */
import { Head, useForm } from '@inertiajs/react';

import AuthLayout from '@/layouts/auth-layout';
import LoginRegisterInput from '@/components/ui/input/loginRegister';
import AppLayoutUnSigin from '@/layouts/app-layout-unSigin';
import ErrorNotification from '@/components/ux/errorNotification';
import React from 'react';


export default function Register() {
    const {data,setData,post,processing,errors} = useForm({
        nama_lengkap: "",
        email: "",
        password: "",
        password_confirmation:""
    })

    const submit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        post('/register')
    }
    return (
        <AppLayoutUnSigin>
        <div className='my-29'>
        <AuthLayout title="Daftar akun KodingKom" description="Isi kolom dibawah ini untuk membuat akun">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit} method='POST'>
                <div className="grid gap-6">
                    <div className="grid gap-2">

                       <LoginRegisterInput changed={(e)=>{setData('nama_lengkap',e.target.value)}} to={'namaLengkap'} title={'Nama Lengkap'} types={'text'}/>
                       <LoginRegisterInput changed={(e)=>{setData('email',e.target.value)}} to={'email'} title={'Email'} types={'email'}/>
                       <LoginRegisterInput changed={(e)=>{setData('password',e.target.value)}} to={'password'} title={'Create Password'} types={'password'} />
                       <LoginRegisterInput changed={(e)=>{setData('password_confirmation',e.target.value)}} to={'confirm_password'} title={'Confirm Password'} types={'password'} />

                </div>
                    <button className='bg-[#13A936] p-2 text-white font-bold rounded-md'> {processing ? 'Proses...' : 'Daftar'}</button>
            </div>
            </form>
            <p className='text-center'>Sudah punya akun? klik <a href="/login" className='text-yellow-500 underline'>disini</a></p>
            <hr />
            <p className='text-sm text-center text-gray-400'>
                Dengan melakukan pendaftaran, Anda setuju dengan syarat & ketentuan <a href="" aria-disabled className='underlined'>KodingKom</a>.
            </p>
        </AuthLayout>
            <button className='bg-[#13A936] p-4 rounded-full bottom-25 right-5 fixed'><img src="message-circle (1).svg" alt="" /></button>
        </div>

        {errors.password && <ErrorNotification message={errors.password}/>}
        {errors.email && <ErrorNotification message={errors.email}/>}
        {errors.nama_lengkap && <ErrorNotification message={errors.nama_lengkap}/>}
        </AppLayoutUnSigin>
    );
}
