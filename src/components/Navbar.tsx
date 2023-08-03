import { FunctionComponent, ReactElement, useState, useRef } from 'react';
import styles from '../styles/Navbar.module.scss';
import Image from 'next/image';
import images from '../../public/images';
import { CaretDownIcon, MoonIcon, SunIcon, UserIcon } from './SVGs/SVGicons';
import useOuterClick from '@/hooks/useOuterClick';

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = (): ReactElement => {

    const [navbarDropdownIsVisible, setNavbarDropdownIsVisible] = useState(false);
    const [mobileNavbarIsVisible, setMobileNavbarIsVisible] = useState(false);
    const [isLightTheme, setIsLightTheme] = useState(false);

    const navbarDropdownRef = useRef<HTMLDivElement>(null);

    useOuterClick(navbarDropdownRef, setNavbarDropdownIsVisible);

    return (
        <section className={styles.navbarContainer}>
            <div className={styles.navbarContainer__lhs}>
                <div className={styles.logo}>
                    <Image src={images.logoWhite} alt='Logo' />
                </div>
                <p>Ticketwave</p>
            </div>
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
    );
}

export default Navbar;