import { FunctionComponent, ReactElement } from "react";
import { HorizontalLineIcon, LikeIcon, LocationPinIcon, ShareIcon } from "../SVGs/SVGicons";
import Image from "next/image";
import images from "../../../public/images";
import styles from '../../styles/EventGroupSection.module.scss';
import useResponsive from "@/hooks/useResponsiveness copy";
import { Event } from "../models/IEvent";
import moment from "moment";
import Link from "next/link";
import EventCard from "../Event/EventCard";

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
                        <EventCard event={event} mobileAndActionButtonDismiss key={index} />
                    )}
                </div>
            </div>
        </section>
    );
}

export default EventsGroup;