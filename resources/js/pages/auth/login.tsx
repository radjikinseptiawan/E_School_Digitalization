import { Head } from '@inertiajs/react';
import AuthLayout from '@/layouts/auth-layout';
import AppLayoutUnSigin from '@/layouts/app-layout-unSigin';
import LoginRegisterInput from '@/components/ui/input/loginRegister';


export default function Login() {

    return (
<AppLayoutUnSigin>
        <div className='my-20'>
        <AuthLayout title="Selamat Datang Kembali!" description="Selamat datang kembali di website KodingKom!">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={()=>{}}>
                <div className="grid gap-6">
                    <div className="grid gap-2">

                       <LoginRegisterInput to={'email'} title={'Email'} types={'email'}/>
                       <LoginRegisterInput to={'password'} title={'Password'} types={'password'}/>
                </div>
                    <button className='bg-[#13A936] p-2 text-white font-bold rounded-md'>Masuk</button>
            </div>
            </form>
            <hr />
            <p className='text-center'>Belum punya akun? klik <a href="/register" className='text-yellow-500 underline'>disini</a></p>
        </AuthLayout>
            <button className='bg-[#13A936] p-4 rounded-full bottom-25 right-5 fixed'><img src="message-circle (1).svg" alt="" /></button>
        </div>
        </AppLayoutUnSigin>
    
        );
}
