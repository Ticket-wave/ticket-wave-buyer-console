import { useEffect, useState } from 'react';
import Layout from '@/components/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Image from 'next/image';
import images from '../../public/images';

export default function App({ Component, pageProps }: AppProps) {
    const [loaderIsVisible, setLoaderIsVisible] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setLoaderIsVisible(false);
        }
    }, [])

    return <>
        {!loaderIsVisible && <Layout>
            <Component {...pageProps} />
        </Layout>}
        {loaderIsVisible && <div className="splashScreen">
            <div className="image">
                <Image src={images.logoWhite} alt='logo' />
            </div>
        </div>}
    </>
}
