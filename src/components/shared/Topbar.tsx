import { FunctionComponent, ReactElement } from "react";
import styles from "../../styles/ConsoleTopbar.module.scss";
import Image from "next/image";
import images from "../../../public/images";
import { SearchIcon } from "../SVGs/SVGicons";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

interface TopbarProps {

}

const Topbar: FunctionComponent<TopbarProps> = (): ReactElement => {

    const {user, isLoading} = useUser(); 

    return (
        <div className={styles.topbar}>
            <Link href="/">
                <div className={styles.logo}>
                    <span className={styles.logo__image}>
                        <Image src={images.logoPurple} alt="Logo" />
                    </span>
                    <p>Ticketwave</p>
                </div>
            </Link>
            <div className={styles.topbar__rhs}>
                <div className={styles.searchContainer}>
                    <SearchIcon />
                    <input type="text" placeholder="Search for event" />
                </div>
                <Link href="/app/profile">
                    <div className={styles.accountContainer}>
                        <div className={styles.accountContainer__image}>
                            <Image src={user?.picture ?? images.user_avatar} fill alt="Profile" />
                        </div>
                        <h3>{user?.nickname}</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Topbar;