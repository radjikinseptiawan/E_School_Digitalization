import Footer from '@/components/ui/footer';
import Navigation from '@/components/ui/navigation';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default ({ children}: AppLayoutProps) => (
    <>
        <Navigation/>
        <div className='h-screen'>
        {children}
        </div>
        <Footer/>
    </>
);
