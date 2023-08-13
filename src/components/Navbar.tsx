import { FunctionComponent, ReactElement, useState, useRef } from 'react';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import images from '../../public/images';
import { CaretDownIcon, CloseMenuIcon, HamburgerMenuIcon, MoonIcon, SunIcon, UserIcon } from './SVGs/SVGicons';
import useOuterClick from '@/hooks/useOuterClick';
import useResponsive from '@/hooks/useResponsiveness copy';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const router = useRouter();

    const onMobile = useResponsive();

    const [navbarDropdownIsVisible, setNavbarDropdownIsVisible] = useState(false);
    const [mobileNavbarIsVisible, setMobileNavbarIsVisible] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    const navbarDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(navbarDropdownRef, setNavbarDropdownIsVisible);

    const [navbarIsVisible, setNavbarIsVisible] = useState(false);

    const navbarRef = useRef<HTMLDivElement>(null);

    // useRemoveHtmlElementFromDOM(navbarRef, navbarIsVisible, 600, "flex");

    return (
        <>
            {
                onMobile ?
                    <section className={styles.mobileNavbarContainer}>
                        <Link href='/'>
                            <div className={styles.logo}>
                                <Image src={images.logoWhite} alt='Logo' />
                            </div>
                        </Link>
                        <div className={styles.buttons}>
                            <span><SunIcon /></span>
                            <span onClick={() => setNavbarIsVisible(true)}><HamburgerMenuIcon /></span>
                        </div>
                        {navbarRef &&
                            <div className={navbarIsVisible ? styles.navbarOverlayContainer : styles.navbarOverlayContainerClose} ref={navbarRef}>
                                <span className={styles.overlay} onClick={() => setNavbarIsVisible(false)}></span>
                                <div className={styles.navbarOverlay}>
                                    <span className={styles.closeIcon} onClick={() => setNavbarIsVisible(false)}><CloseMenuIcon /></span>
                                    <div className={styles.navLinks}>
                                        <Link href='/' onClick={() => setNavbarIsVisible(false)}>
                                            <span className={router.pathname == '/' ? styles.active : ''}>Home</span>
                                        </Link>
                                        <Link href='/events' onClick={() => setNavbarIsVisible(false)}>
                                            <span className={router.pathname == '/events' ? styles.active : ''}>Events</span>
                                        </Link>
                                        <Link href='/support' onClick={() => setNavbarIsVisible(false)}>
                                            <span className={router.pathname == '/support' ? styles.active : ''}>Support</span>
                                        </Link>
                                        <Link href='/account' onClick={() => setNavbarIsVisible(false)}>
                                            <span className={router.pathname == '/account' ? styles.active : ''}>Account</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>}
                    </section> :
                    <section className={styles.navbarContainer}>
                        <Link href='/'>
                            <div className={styles.navbarContainer__lhs}>
                                <div className={styles.logo}>
                                    <Image src={images.logoWhite} alt='Logo' />
                                </div>
                                <p>Ticketwave</p>
                            </div>
                        </Link>
                        <div className={styles.navbarContainer__rhs}>
                            <ul className={styles.navLinks}>
                                <li>Home</li>
                                <li>Events</li>
                                <li>Support</li>
                            </ul>
                            <div className={styles.accountSection} ref={navbarDropdownRef}>
                                <div className={styles.profileCircle}>
                                    <UserIcon />
                                </div>
                                <h3>Account</h3>
                                <span className={styles.dropdownIcon} onClick={() => setNavbarDropdownIsVisible(!navbarDropdownIsVisible)}>
                                    <CaretDownIcon />
                                </span>
                                {navbarDropdownIsVisible &&
                                    <div className={styles.dropdownContainer}>
                                        <span>My account</span>
                                        <span>Log out</span>
                                    </div>}
                            </div>
                            <span className={styles.themeController}>
                                {isLightTheme ? <MoonIcon /> : <SunIcon />}
                            </span>
                        </div>
                    </section>
            }
        </>
    );
}

export default Navbar;