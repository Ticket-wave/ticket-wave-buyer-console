import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import HeroSection from '@/components/Homepage/HeroSection'
import FeaturedEvents from '@/components/Homepage/FeaturedEvents'
import Services from '@/components/Homepage/Services'
import CreateEvent from '@/components/Homepage/CreateEvent'

export default function Home() {
    return (
        <>
            <Head>
                <title>Ticket wave web application</title>
                <meta name="description" content="Ticket wave web application" />
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
            <div className={styles.homepage}>
                <HeroSection />
                <FeaturedEvents />
                <Services />
                <CreateEvent />
            </div>
        </>
    )
}