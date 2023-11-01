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
                <meta property="og:title" content="Social Title for Cool Page" />
                <meta property="og:description" content="And a social description for our cool page" />
                <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
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