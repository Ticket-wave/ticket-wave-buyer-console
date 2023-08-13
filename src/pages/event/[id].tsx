import { FunctionComponent, ReactElement } from 'react';
import styles from "../../styles/EventDetails.module.scss";

interface EventDetailsProps {

}

const EventDetails: FunctionComponent<EventDetailsProps> = (): ReactElement => {
    return (
        <div className={styles.eventDetailsPage}>
            
        </div>
    );
}

export default EventDetails;