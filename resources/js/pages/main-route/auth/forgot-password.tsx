/* eslint-disable @typescript-eslint/no-unused-vars */
// Components
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import AuthLayout from '@/layouts/auth-layout';
import LoginRegisterInput from '@/components/ui/input/loginRegister';
import UnsignedNavigation from '@/components/ui/unSignedNavigation';
import Footer from '@/components/ui/footer';
import ButtonInfo from '@/components/ui/button/buttonInfo';
import ErrorNotification from '@/components/ux/errorNotification';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm<Required<{ email: string }>>({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
        <UnsignedNavigation />
        <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
            <Head title="Forgot password" />

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
            <div className='space-y-6'>
                <form action="" onSubmit={submit}>
                    <LoginRegisterInput
                        to={'email'}
                        title={'email'}
                        types={"email"}
                        changed={(e) => setData("email", e.target.value)} />
                </form>


                <div className="my-6 flex items-center justify-start">
                    <button className='bg-[#13A936] p-2 text-white font-bold rounded-md'>{processing ? <LoaderCircle/> : "Masuk"}</button>
                </div>
            </div>

            <div className="space-x-1 text-center text-sm text-muted-foreground">
                <span>Atau kembali ke</span>
                <a href={route('login')} className='hover:underline text-yellow-400 hover:text-red-400'>log in</a>
                
            </div>
            <ButtonInfo/>
            {errors.email && <ErrorNotification message={errors.email}/>}
        </AuthLayout>
    <Footer/>    
    </>
    );
}
