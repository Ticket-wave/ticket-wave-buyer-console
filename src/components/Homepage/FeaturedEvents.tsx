import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';

interface FeaturedEventsProps {

}

const FeaturedEvents: FunctionComponent<FeaturedEventsProps> = (): ReactElement => {
    return ( 
        <section className={styles.featuredEvents}>Featured Events</section>
     );
}

export default FeaturedEvents;