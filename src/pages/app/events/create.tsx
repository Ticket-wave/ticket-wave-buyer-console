import { FunctionComponent, ReactElement } from "react";
import styles from '@/styles/CreateEvent.module.scss';

interface CreateEventProps {

}

const CreateEvent: FunctionComponent<CreateEventProps> = (): ReactElement => {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <h1>Create Event</h1>
            </div>
            <div className={styles.form}>
                <form>
                    <div className={styles.form_group}>
                        <label htmlFor="title">Event Title</label>
                        <input type="text" name="title" id="title" placeholder="Event Title" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="description">Event Description</label>
                        <textarea name="description" id="description" placeholder="Event Description" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="date">Event Date</label>
                        <input type="date" name="date" id="date" placeholder="Event Date" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="time">Event Time</label>
                        <input type="time" name="time" id="time" placeholder="Event Time" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="venue">Event Venue</label>
                        <input type="text" name="venue" id="venue" placeholder="Event Venue" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="price">Event Price</label>
                        <input type="number" name="price" id="price" placeholder="Event Price" />
                    </div>
                    <div className={styles.form_group}>
                        <label htmlFor="image">Event Image</label>
                        <input type="file" name="image" id="image" placeholder="Event Image" />
                    </div>
                    <div className={styles.form_group}>
                        <button type="submit">Create Event</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEvent;