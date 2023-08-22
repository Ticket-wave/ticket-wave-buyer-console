import { FunctionComponent, ReactElement } from "react";
import { HorizontalLineIcon, LikeIcon, LocationPinIcon, ShareIcon } from "../SVGs/SVGicons";
import Image from "next/image";
import images from "../../../public/images";
import styles from '../../styles/EventGroupSection.module.scss';
import useResponsive from "@/hooks/useResponsiveness copy";
import { Event } from "../models/IEvent";
import moment from "moment";
import Link from "next/link";

interface EventsGroupProps {
    title: string
    subText: string
    eventsData: Event[]
}

const EventsGroup: FunctionComponent<EventsGroupProps> = ({ title, subText, eventsData }): ReactElement => {

    const onMobile = useResponsive();

    return (
        <section className={styles.allEvents}>
            <div className={styles.topArea}>
                <div className={styles.topArea__lhs}>
                    <div className={styles.main}>
                        <span>{title}</span>
                        <Image src={images.rocket} alt='Rocket' />
                    </div>
                    <p>{subText}</p>
                </div>
                <div className={styles.topArea__rhs}>
                    <button>Filter</button>
                </div>
            </div>
            <div className={styles.eventsContainer}>
                <div className={styles.eventsContainerCarousel}>
                    {eventsData.map((event, index) =>
                        <div className={styles.event} key={index}>
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
                                    <h3 className={styles.title}>{event.title}</h3>
                                    <div className={styles.dateTime}>
                                        <span className={styles.dateTime__date}>{moment(event.dateCreated).format('MMM DD')}</span>
                                        <span className={styles.dateTime__dot}></span>
                                        <span className={styles.dateTime__time}>{moment(event.dateCreated).format('hh:mmA')}</span>
                                    </div>
                                    <div className={styles.location}>
                                        <LocationPinIcon />
                                        <p>{event.location.blockNumber + ' ' + event.location.city + ', ' + event.location.state + ', ' + event.location.country}</p>
                                    </div>
                                </div>
                                {!onMobile && <div className={styles.eventInfo__rhs}>
                                    <div className={styles.actions}>
                                        <button className={styles.actions__like}><LikeIcon /></button>
                                        <button className={styles.actions__share}><ShareIcon /></button>
                                    </div>
                                    <p className={styles.restriction}>Everyone</p>
                                </div>}
                            </div>
                            <Link href={`/event/${event.id}`}> 
                                <button>View details</button>
                            </Link>
                        </div>)}
                </div>
            </div>
        </section>
    );
}

export default EventsGroup;