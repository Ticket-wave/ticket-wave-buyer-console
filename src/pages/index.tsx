import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import HeroSection from '@/components/Homepage/HeroSection'
import FeaturedEvents from '@/components/Homepage/FeaturedEvents'
import Services from '@/components/Homepage/Services'
import CreateEvent from '@/components/Homepage/CreateEvent'

export default function Home() {
    return (
        <div className={styles.homepage}>
            <HeroSection />
            <FeaturedEvents />
            <Services />
            <CreateEvent />
        </div>
    )
}