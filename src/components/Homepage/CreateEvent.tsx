import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';

interface CreateEventProps {

}

const CreateEvent: FunctionComponent<CreateEventProps> = (): ReactElement => {
    return ( 
        <section className={styles.createEvent}>Create event</section>
     );
}

export default CreateEvent;