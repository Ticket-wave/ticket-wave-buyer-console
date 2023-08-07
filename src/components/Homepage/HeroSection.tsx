import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import images from '../../../public/images';
import { InfoIcon } from '../SVGs/SVGicons';

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundImage}>
                <Image src={images.ImageBg1} alt='People partying' />
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
                        <div className={styles.searchErrorMsg}><InfoIcon /> <p>Please type the name of the event</p></div>
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