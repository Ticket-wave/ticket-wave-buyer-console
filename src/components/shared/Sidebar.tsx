import { CSSProperties, FunctionComponent, ReactElement, useState } from "react";
import styles from "../../styles/ConsoleSidebar.module.scss";
import { AddEventIcon, CaretDownIcon, CaretRightIcon, CreateEventsIcon, DashboardIcon, EventIcon, LogoutIcon, ProfileIcon, UserIcon } from "../SVGs/SVGicons";
import { useRouter } from "next/router";
import Link from "next/link";

interface SidebarProps {

}

const Sidebar: FunctionComponent<SidebarProps> = (): ReactElement => {

    const { pathname } = useRouter();
    const [eventsSubLinksIsOpen, setEventsSubLinksIsOpen] = useState(false);

    const currentPageIsDashboard = pathname == '/app';
    const currentPageIsEvents = pathname == "/app/events";
    const currentPageIsCreateEvent = pathname == "/app/event/create";
    const currentPageIsProfile = pathname.includes('/app/profile');

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__menu}>
                <ul>
                    <Link href="/app">
                        <li className={currentPageIsDashboard ? styles.active : ''}><DashboardIcon /> Dashboard</li>
                    </Link>
                    <li className={(currentPageIsEvents || currentPageIsCreateEvent) ? styles.active : ''} onClick={() => setEventsSubLinksIsOpen(!eventsSubLinksIsOpen)}>
                        <EventIcon /> Events <span className={eventsSubLinksIsOpen ? styles.active : ''}><CaretRightIcon /></span>
                    </li>
                    <div
                        className={`${styles.subLinks} ${eventsSubLinksIsOpen ? styles.subLinkContainerIsOpen : ''}`}
                        style={{ '--multiplicant-value': `${2.1}` } as CSSProperties}>
                        <Link href="/app/events">
                            <li className={currentPageIsEvents ? styles.active : ''}><EventIcon /> My Events</li>
                        </Link>
                        <Link href="/app/event/create">
                            <li className={currentPageIsCreateEvent ? styles.active : ''}><AddEventIcon /> Create Event</li>
                        </Link>
                    </div>
                    <Link href="/app/profile">
                        <li className={currentPageIsProfile ? styles.active : ''}><ProfileIcon /> Profile</li>
                    </Link>
                    <Link href="/api/auth/logout">
                        <li ><LogoutIcon /> Logout</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;