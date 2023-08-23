import { FunctionComponent, ReactElement, useEffect, useState, useContext } from 'react';
import styles from "../../styles/EventDetails.module.scss";
import { useRouter } from 'next/router';
import Image from 'next/image';
import images from '../../../public/images';
import { CalenderIcon, HeartIcon, ShareIcon } from '@/components/SVGs/SVGicons';
import Tooltip from '@/components/custom/Tooltip';
import { events } from '@/components/demoData/Events';
import { Event } from '@/components/models/IEvent';
import ToastCard from '@/components/Card/ToastCard';
import { ToastContext } from '@/extensions/toast';
import moment from 'moment';
import EventsGroup from '@/components/events/EventsGroup';
import useResponsive from '@/hooks/useResponsiveness copy';

interface EventDetailsProps {

}

const EventDetails: FunctionComponent<EventDetailsProps> = (): ReactElement => {
    const router = useRouter();
    const onMobile = useResponsive();
    const eventId = router.query.id;

    const toasthandler = useContext(ToastContext);

    const [eventInfo, setEventInfo] = useState<Event>();
    const [loader, setLoader] = useState(false);

    function shareEvent() {
        const eventURL = window.location.href;
        // const tempInput = document.createElement("input");
        // document.body.appendChild(tempInput);
        // tempInput.value = eventURL;
        // tempInput.select();
        // document.execCommand("copy");
        // document.body.removeChild(tempInput);
        try {
            navigator.clipboard.writeText(eventURL);
            alert("Event link copied to clipboard!");
        } catch (error) {
            console.error("Copying to clipboard failed:", error);
        }
    }
    function shareEventMobile() {
        const eventURL = window.location.href;
        if (navigator.share) {
            navigator.share({
              title: "Check out this event!",
              text: "I found this amazing event. You should check it out!",
              url: eventURL
            })
            .then(() => console.log("Shared successfully"))
            .catch(error => console.log("Sharing failed:", error));
          } else {
            console.log("Web Share API not supported");
          }
    }

    useEffect(() => {
        if (router.isReady) {
            const _eventInfo = events.find((event) => event.id === eventId);
            if (_eventInfo) {
                console.log(_eventInfo);
                setEventInfo(_eventInfo);
                toasthandler?.logSuccess('Success', 'Event info retrieved!')
            } else {
                // Route to flight not-found page
                router.push(`/event/not-found`);
            }
        }
    }, [router.isReady, eventId]);

    // useEffect(() => {
    //     async function fetchEventInfo() {
    //         await fetchEventInfo(router.query.id as string)
    //             .then((response) => {
    //                 // Log the result
    //                 console.log('Result:', response.data.result);

    //                 // Set the event results
    //                 let _eventInfo = response.data;

    //                 if (!_eventInfo) {
    //                     // Route to event not-found page
    //                     router.push(`/event/not-found`);
    //                 }

    //                 // Update the event results
    //                 setEventInfo(_eventInfo);
    //             })
    //             .catch((error) => {

    //                 // Display the error
    //                 toastHandler?.logError(
    //                     'Error fetching results',
    //                     'We encountered an error while fetchng event offers. Please try again.'
    //                 );

    //                 // If we have a response error...
    //                 if (error.response) {

    //                     // Log the error
    //                     console.error('Error:', error.response.data);
    //                 }
    //                 // Otherwise, if we could not reach the server...
    //                 else if (error.request) {

    //                     // Log the error
    //                     console.log('Error saving event request:', error.request);
    //                 }
    //                 // Otherwise... some error occurred in the build up of the request
    //                 else {

    //                     // Log the error
    //                     console.error('Request Build Up Error:', error.message);
    //                 }

    //                 // Unset running flag
    //                 setLoader(false);
    //             });
    //     }

    //     // If router is ready...
    //     if (router.isReady) {
    //         // If we don't have event result...
    //         if (!eventInfo)
    //             // Fire the event search request
    //             fetchEventInfo();
    //     }
    // }, [router.isReady, router.query.eventRequestId, router.query.sessionId]);

    return (
        <div className={styles.eventDetailsPage}>
            <section className={styles.heroSection}>
                <div className={styles.video}>
                    <video
                        autoPlay
                        loop
                        muted
                        src="https://res.cloudinary.com/dxwpajciu/video/upload/v1691936875/ticketwave/videos/people_waving_p9tni6.mp4" />
                </div>
                <div className={styles.textContents}>
                    <span>Time to party! <span className={styles.img}><Image src={images.woman_dancing} alt='Woman dancing' /></span></span>
                    <h2>Event Information</h2>
                </div>
            </section>
            <section className={styles.eventInfoContainer}>
                <div className={styles.mainSection}>
                    <div className={styles.eventImage}>
                        <Image src={images.event_flyer} alt='Event flyer' />
                    </div>
                    <span className={styles.tag}>Latest</span>
                    <div className={styles.eventDetails}>
                        <div className={styles.leftInfo}>
                            <h2 className={styles.title}>{eventInfo?.title}</h2>
                            <p className={styles.datePosted}>Posted on: {moment(eventInfo?.dateCreated).format('Do MMMM YYYY')}</p>
                            <div className={styles.publisherInfo}>
                                <div className={styles.publisherInfo__image}>
                                    <Image src={images.user_avatar} alt='Avatar' />
                                </div>
                                <div className={styles.publisherInfo__name}>{eventInfo?.publisher.name}</div>
                            </div>
                            <div className={styles.dateTime}>
                                <h4>{moment(eventInfo?.eventDateTime).format("MMM. Do YYYY")}</h4>
                                <h4>{moment(eventInfo?.eventDateTime).format("hh:mma")}</h4>
                            </div>
                            <div className={styles.location}>
                                <p>{eventInfo?.location.blockNumber + ' ' + eventInfo?.location.street + ' ' + eventInfo?.location.city + ', ' + eventInfo?.location.state + ', ' + eventInfo?.location.country}</p>
                                <button>Get directions on map</button>
                            </div>
                            <div className={styles.bottomArea}>
                                {eventInfo?.ticketTypes !== null &&
                                    <div className={styles.priceArea}>
                                        <span>Ticket price:</span>
                                        <h2>&#8358;{eventInfo?.ticketPrice.amount.toLocaleString()}</h2>
                                    </div>}
                                <button>Purchase your ticket(s)</button>
                            </div>
                        </div>
                        <div className={styles.actionButtons}>
                            <Tooltip tooltipText='Add to calender'>
                                <div className={styles.actionButton}>
                                    <CalenderIcon />
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText='Like event'>
                                <div className={styles.actionButton}>
                                    <HeartIcon />
                                </div>
                            </Tooltip>
                            <Tooltip tooltipText='Share event'>
                                <div className={styles.actionButton} style={{ backgroundColor: '#D5542A' }} onClick={() => onMobile ? shareEventMobile() : shareEvent()}>
                                    <ShareIcon />
                                </div>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className={styles.optionalSection}></div>
            </section>
            <EventsGroup title='Similar Events' subText='Dear superstar, below is a list of all events available at the moment.' eventsData={events} />
        </div>
    );
}

export default EventDetails;