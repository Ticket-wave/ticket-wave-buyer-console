import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {
    return ( 
        <section className={styles.heroSection}>HeroSection</section>
     );
}

export default HeroSection;