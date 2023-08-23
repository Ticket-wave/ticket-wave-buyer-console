import { ChangeEvent, FormEvent, FunctionComponent, ReactElement, useEffect, useState, useRef } from 'react';
import styles from '../../styles/Home.module.scss';
import Image from 'next/image';
import images from '../../../public/images';
import { InfoIcon } from '../SVGs/SVGicons';
import { events } from '../demoData/Events';
import ComponentLoader from '../Loader/ComponentLoader';
import { useRouter } from 'next/router';
import { Event } from '../models/IEvent';
import Link from 'next/link';
import moment from "moment";
import useOuterClick from '@/hooks/useOuterClick';
import { scrollWindow } from '../PageScroll/ScrollWindow';
import useResponsive from '@/hooks/useResponsiveness copy';

interface HeroSectionProps {

}

const HeroSection: FunctionComponent<HeroSectionProps> = (): ReactElement => {

    const router = useRouter();
    const onMobile = useResponsive();

    const imageList = [
        {
            img: images.ImageBg1,
        },
        {
            img: images.ImageBg2,
        },
        {
            img: images.ImageBg3,
        },
        {
            img: images.ImageBg4,
        },
        {
            img: images.ImageBg5,
        },
        {
            img: images.ImageBg6,
        },
        {
            img: images.ImageBg7,
        },
        {
            img: images.ImageBg8,
        },
    ]

    const [heroSectionImgIndex, setHeroSectionImgIndex] = useState(0);
    const [eventName, setEventName] = useState<string>();
    const [eventNameErrorMsg, setEventNameErrorMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [searchResults, setSearchResults] = useState<Event[]>();
    const [searchResultsIsVisible, setSearchResultsIsVisible] = useState(false);

    // async function handleEventSearch(e: FormEvent<HTMLFormElement>) {
    //     e.preventDefault();

    //     if (!eventName) {
    //         // Show error msg 
    //         setEventNameErrorMsg(true);
    //         return;
    //     }

    //     // Close error msg
    //     setEventNameErrorMsg(false);

    //     // Spin up loader
    //     setIsLoading(true);

    //     // const _searchedEvent = events.find((event) => event.title.toLowerCase().includes(eventName.toLowerCase()));
    //     // console.log(_searchedEvent);

    //     // if (_searchedEvent) {
    //     //     router.push(`/event/${_searchedEvent?.id}`);
    //     // }
    // }

    async function handleEventSearch(e: ChangeEvent<HTMLInputElement>) {

        if (searchResults) {
            setSearchResultsIsVisible(false);
        }
        if (!eventName) {
            setSearchResultsIsVisible(false);
            return;
        }
        if (e.target.value.length == 0) {
            setSearchResults(undefined);
            setSearchResultsIsVisible(false);
            return;
        }

        setSearchResultsIsVisible(true);

        setSearchResults(events.filter((event) => event.title.toLowerCase().includes(eventName.toLowerCase())));
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeroSectionImgIndex((prevIndex) =>
                prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [imageList.length]);

    useEffect(() => {
        if (!searchResultsIsVisible) {
            setSearchResults(undefined);
            setEventName('');
        }
    }, [searchResultsIsVisible]);

    const inputAreaContainerRef = useRef<HTMLDivElement>(null);

    useOuterClick(inputAreaContainerRef, setSearchResultsIsVisible);

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundImage}>
                <Image src={imageList[heroSectionImgIndex].img} alt='People partying' />
            </div>
            <div className={styles.heroSection__lhs}>
                <div className={styles.textContents}>
                    <h2>Find The Next Big <br />Event To <span>Attend</span></h2>
                    <p>"From music festivals to sports games, find the perfect tickets for your entertainment needs!"</p>
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.primaryButton}>Find Event</button>
                    <button className={styles.secondaryButton}>Host Event</button>
                </div>
            </div>
            <div className={styles.heroSection__rhs}>
                <form className={styles.searchContainer}>
                    <div className={styles.textContents}>
                        <p><span>Catch the train,</span> before those tickets get sold out.</p>
                        <p>You can quickly <span>search</span> for an event here.</p>
                    </div>
                    <div className={styles.inputAreaContainer} ref={inputAreaContainerRef}>
                        <div className={styles.inputArea}>
                            <input
                                type="text"
                                value={eventName}
                                placeholder='Event name'
                                onClick={() => onMobile ? scrollWindow(160) : {}}
                                onChange={(e) => {
                                    setEventName(e.target.value);
                                    handleEventSearch(e);
                                }} />
                            {eventNameErrorMsg && <div className={styles.searchErrorMsg}><InfoIcon /> <p>Please type the name of the event</p></div>}
                        </div>
                        {searchResultsIsVisible &&
                            <div className={styles.resultsDropdown}>
                                {searchResults?.map((event, index) =>
                                    <Link href={`/event/${event.id}`} onClick={() => setSearchResultsIsVisible(false)}>
                                        <div className={styles.eachResult} key={index}>
                                            <div className={styles.eachResult__top}>
                                                <h4>{event.title}</h4>
                                                <h4>{moment(event?.eventDateTime).format("MMM. Do YYYY")}</h4>
                                            </div>
                                            <p>Starting price: &#8358;{event.ticketPrice.amount.toLocaleString()}</p>
                                        </div>
                                    </Link>
                                )}
                                {searchResults?.length == 0 &&
                                    <div className={styles.resultNotFound}>
                                        <span>
                                            <Image src={images.sad_face} alt='Sad face emoji' width={36} height={36} />
                                        </span>
                                        <p>There are no events based on your search keyword</p>
                                    </div>
                                }
                            </div>}
                    </div>
                    {/* <button type="submit" style={isLoading ? { opacity: 0.6, pointerEvents: 'none' } : {}} disabled={isLoading}>
                        {
                            isLoading ?
                                <span style={{ width: '16px', height: '16px', position: 'relative', scale: '2.2' }}><ComponentLoader /></span>
                                :
                                <span>Let's search</span>
                        }
                    </button> */}
                </form>
            </div>
            <div className={styles.colors}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}

export default HeroSection;
