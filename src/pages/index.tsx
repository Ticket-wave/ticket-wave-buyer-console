import styles from '@/styles/Home.module.scss'
import HeroSection from '@/components/Homepage/HeroSection'
import FeaturedEvents from '@/components/Homepage/FeaturedEvents'
import Services from '@/components/Homepage/Services'
import CreateEvent from '@/components/Homepage/CreateEvent'
import ModalWrapper from '@/components/Modal/ModalWrapper'
import { useState } from 'react'

export default function Home() {
    return (
        <>
            <div className={styles.homepage}>
                <HeroSection />
                <FeaturedEvents />
                <Services />
                <CreateEvent />
            </div>
        </>
    )
}