import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';

interface ServicesProps {

}

const Services: FunctionComponent<ServicesProps> = (): ReactElement => {
    return ( 
        <section className={styles.services}>Services</section>
     );
}

export default Services;