import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeroSection from '@/components/Homepage/HeroSection'
import FeaturedEvents from '@/components/Homepage/FeaturedEvents'
import Services from '@/components/Homepage/Services'
import CreateEvent from '@/components/Homepage/CreateEvent'
import { NextSeo } from 'next-seo'

export default function Home() {
    return (
        <>
            {/* <NextSeo
                title="Your Title"
                description="This is a demo description"
                canonical="https://www.example.com"
                openGraph={{
                    url: 'https://www.example.com',
                    title: 'Open Graph Title',
                    description: 'Open Graph Description',
                    images: [
                        {
                            url: '../../public/images/event_flyer.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                        {
                            url: '../../public/images/event_flyer.jpg',
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                            type: 'image/jpeg',
                        },
                        { url: '../../public/images/event_flyer.jpg' },
                        { url: '../../public/images/event_flyer.jpg' },
                    ],
                    site_name: 'YourSiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            /> */}
            {/* <Head>
                <title>Ticket wave web application</title>
                <meta name="description" content="Ticket wave web application" />
                
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="Application description" />

                <meta property="og:url" content="https://simlex.netlify.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Portfolio Website" />
                <meta property="og:description" content="Application description" />
                <meta property="og:image" content="../../public/images/event_flyer.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="simlex.netlify.app" />
                <meta property="twitter:url" content="https://simlex.netlify.app" />
                <meta name="twitter:title" content="Portfolio Website" />
                <meta name="twitter:description" content="Application description" />
                <meta name="twitter:image" content="../../public/images/event_flyer.jpg" />

                <meta name="image" content="../../public/images/event_flyer.jpg" />
            </Head> */}
            <div className={styles.homepage}>
                <HeroSection />
                <FeaturedEvents />
                <Services />
                <CreateEvent />
            </div>
        </>
    )
}