import { Head } from '@inertiajs/react';

import AuthLayout from '@/layouts/auth-layout';
import LoginRegisterInput from '@/components/ui/input/loginRegister';
import AppLayoutUnSigin from '@/layouts/app-layout-unSigin';


export default function Register() {

    return (
        <AppLayoutUnSigin>
        <div className='my-29'>
        <AuthLayout title="Daftar akun KodingKom" description="Isi kolom dibawah ini untuk membuat akun">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={()=>{}}>
                <div className="grid gap-6">
                    <div className="grid gap-2">

                       <LoginRegisterInput to={'namaLengkap'} title={'Nama Lengkap'} types={'text'}/>
                       <LoginRegisterInput to={'email'} title={'Email'} types={'email'}/>
                       <LoginRegisterInput to={'password'} title={'Create Password'} types={'password'} />
                </div>
                    <button className='bg-[#13A936] p-2 text-white font-bold rounded-md'>Daftar</button>
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
        </AppLayoutUnSigin>
    );
}
