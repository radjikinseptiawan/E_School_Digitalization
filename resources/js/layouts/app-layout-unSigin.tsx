import Footer from '@/components/ui/footer';
import UnsignedNavigation from '@/components/ui/unSignedNavigation';
import { type ReactNode } from 'react';

interface AppLayoutUnsignedProps {
    children: ReactNode;
}

export default ({ children}: AppLayoutUnsignedProps) => (
    <>
        <UnsignedNavigation/>
        {children}
        <Footer/>
    </>
);
