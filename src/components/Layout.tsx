import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CSSProperties, FunctionComponent, ReactElement, ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContext } from '@/extensions/toast';
import { ToastMessageType } from './models/ToastMessageType';
import ToastCard from './Card/ToastCard';
import Head from 'next/head';

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
            <Head>
                <title>Your Site Title</title>
                <meta name="description" content="Common description for your site" />
                {/* Add other common metadata here */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:image" content="../../public/images/event_flyer.jpg" />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Facebook Meta Tags */}
                <meta property="og:url" content="https://ticketwave.netlify.app/" />
                <meta property="og:type" content="image/jpeg" />
                <meta property="og:title" content="Your Site Title" />
                <meta property="og:description" content="Common description for your site" />
                <meta property="og:image" content="../../public/images/event_flyer.jpg" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:image" content="../../public/images/event_flyer.jpg" />
                <meta name="twitter:image:type" content="image/jpeg" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
            </Head>
            <ToastCard
                visibility={toastContext?.toastOptions?.visible ?? false}
                title={toastContext?.toastOptions?.title ?? 'Welcome'}
                description={toastContext?.toastOptions?.description ?? ''}
                messageType={toastContext?.toastOptions?.type ?? ToastMessageType.Info}
                timeout={toastContext?.toastOptions?.timeout ?? 0.01} />
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;
