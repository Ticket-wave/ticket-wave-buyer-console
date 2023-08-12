import { FunctionComponent, ReactElement } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import images from '../../../public/images';
import { CaretLeftIcon, CaretRightIcon, HorizontalLineIcon, LikeIcon, LocationPinIcon, ShareIcon } from '../SVGs/SVGicons';

interface FeaturedEventsProps {

}

const FeaturedEvents: FunctionComponent<FeaturedEventsProps> = (): ReactElement => {
    return (
        <section className={styles.featuredEvents}>
            <div className={styles.topArea}>
                <div className={styles.topArea__lhs}>
                    <div className={styles.main}>
                        <span>Featured Events</span>
                        <Image src={images.rocket} alt='Rocket' />
                    </div>
                    <p>Based on the superstar that you are, we have carefully gathered top events for you. </p>
                </div>
                <div className={styles.topArea__rhs}>
                    <button>See all events</button>
                </div>
            </div>
            <div className={styles.eventsContainer}>
                <div className={styles.eventsContainerCarousel}>
                    {([...Array(5)]).map((event, index) =>
                        <div className={styles.event}>
                            <div className={styles.backgroundImage}>
                                <Image src={images.ticketbg} alt='Ticket background' />
                            </div>
                            <span className={styles.event__tag}>Latest</span>
                            <div className={styles.event__image}>
                                <Image src={images.event_flyer} alt='Event flyer' />
                            </div>
                            <span className={styles.hLine}>
                                <HorizontalLineIcon />
                            </span>
                            <div className={styles.eventInfo}>
                                <div className={styles.eventInfo__lhs}>
                                    <h3 className={styles.title}>Summer Curriculum</h3>
                                    <div className={styles.dateTime}>
                                        <span className={styles.dateTime__date}>Jan 20</span>
                                        <span className={styles.dateTime__dot}></span>
                                        <span className={styles.dateTime__time}>8:00PM</span>
                                    </div>
                                    <div className={styles.location}>
                                        <LocationPinIcon />
                                        <p>House 44A Lasisi, OgunlanaOgunlana</p>
                                    </div>
                                </div>
                                <div className={styles.eventInfo__rhs}>
                                    <div className={styles.actions}>
                                        <button className={styles.actions__like}><LikeIcon /></button>
                                        <button className={styles.actions__share}><ShareIcon /></button>
                                    </div>
                                    <p className={styles.restriction}>Everyone</p>
                                </div>
                            </div>
                            <button>View details</button>
                        </div>)}
                </div>
            </div>
            <span className={styles.controller}><CaretLeftIcon /></span>
            <span className={styles.controller}><CaretRightIcon /></span>
        </section>
    );
}

export default FeaturedEvents;