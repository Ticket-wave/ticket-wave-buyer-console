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