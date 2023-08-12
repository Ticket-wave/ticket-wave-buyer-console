import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import images from '../../../public/images';
import useResponsive from '@/hooks/useResponsiveness copy';

interface CreateEventProps {

}

const CreateEvent: FunctionComponent<CreateEventProps> = (): ReactElement => {
    const onMobile = useResponsive();

    return (
        <section className={styles.createEventSection}>
            <div className={styles.createEventSection__lhs}>
                <div className={styles.image}>
                    {onMobile ? <Image src={images.createImageMobile} alt='Create image' /> : <Image src={images.createImage} alt='Create image' />}
                </div>
            </div>
            <div className={styles.createEventSection__rhs}>
                <h3>Create your own Event</h3>
                <p>Lets help you manage your ticketing while you make your events with us</p>
                <button>Create Events</button>
            </div>
        </section>
    );
}

export default CreateEvent;