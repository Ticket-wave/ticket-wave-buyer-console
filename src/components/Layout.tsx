import type { Metadata } from 'next'
import { FunctionComponent, ReactElement, ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContext } from '@/extensions/toast';
import { ToastMessageType } from './models/ToastMessageType';
import ToastCard from './Card/ToastCard';
import Provider from './Provider';

export const metadata: Metadata = {
    title: 'Ticket wave web application',
    description: 'Ticket wave web application',
}

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const toastContext = useContext(ToastContext);

    return (
        <>
            <Provider>
                <ToastCard
                    visibility={toastContext?.toastOptions?.visible ?? false}
                    title={toastContext?.toastOptions?.title ?? 'Welcome'}
                    description={toastContext?.toastOptions?.description ?? ''}
                    messageType={toastContext?.toastOptions?.type ?? ToastMessageType.Info}
                    timeout={toastContext?.toastOptions?.timeout ?? 0.01} />
                <Navbar />
                {children}
                <Footer />
            </Provider>
        </>
    )
}

export default Layout;
