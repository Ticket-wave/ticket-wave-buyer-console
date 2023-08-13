import { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import images from '../../../public/images';
import { InfoIcon } from '../SVGs/SVGicons';

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {

    const imageList = [
        {
            img: images.ImageBg1,
        },
        {
            img: images.ImageBg2,
        },
        {
            img: images.ImageBg3,
        },
        {
            img: images.ImageBg4,
        },
        {
            img: images.ImageBg5,
        },
        {
            img: images.ImageBg6,
        },
        {
            img: images.ImageBg7,
        },
        {
            img: images.ImageBg8,
        },
    ]

    const [heroSectionImgIndex, setHeroSectionImgIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroSectionImgIndex((prevIndex) =>
                prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [imageList.length]);

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundImage}>
                <Image src={imageList[heroSectionImgIndex].img} alt='People partying' />
            </div>
            <div className={styles.heroSection__lhs}>
                <div className={styles.textContents}>
                    <h2>Find The Next Big <br />Event To <span>Attend</span></h2>
                    <p>"From music festivals to sports games, find the perfect tickets <br />for your entertainment needs!"</p>
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.primaryButton}>Find Event</button>
                    <button className={styles.secondaryButton}>Host Event</button>
                </div>
            </div>
            <div className={styles.heroSection__rhs}>
                <div className={styles.searchContainer}>
                    <div className={styles.textContents}>
                        <p><span>Catch the train,</span> before those tickets get sold out.</p>
                        <p>You can quickly <span>search</span> for an event here.</p>
                    </div>
                    <div className={styles.inputArea}>
                        <input type="text" placeholder='Event name' />
                        {/* <div className={styles.searchErrorMsg}><InfoIcon /> <p>Please type the name of the event</p></div> */}
                    </div>
                    <button>Let's search</button>
                </div>
            </div>
            <div className={styles.colors}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}

export default HeroSection;