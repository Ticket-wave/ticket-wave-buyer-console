import { ReactElement, FunctionComponent, useState } from "react";
import styles from "../styles/AuthStyles.module.scss";
import Image from "next/image";
import images from "../../public/images";
import { EyeIcon, FacebookIcon, GoogleIcon, UserIcon } from "@/components/SVGs/SVGicons";
import Link from "next/link";

interface LoginProps {

}

const Login: FunctionComponent<LoginProps> = (): ReactElement => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.content__top}>
                        <h3>Welcome</h3>
                        <p>Log into your account</p>
                    </div>
                    <div className={styles.content__loginOptions}>
                        <div className={styles.option}>
                            <span>
                                <GoogleIcon />
                            </span>
                            <p>Google</p>
                        </div>
                        <div className={styles.option}>
                            <span>
                                <FacebookIcon />
                            </span>
                            <p>Facebook</p>
                        </div>
                    </div>
                    <span>OR</span>
                    <div className={styles.content__form}>
                        <div className={styles.formFieldContainer}>
                            <label htmlFor="email">Email address</label>
                            <div className={styles.formField}>
                                <span><UserIcon /></span>
                                <input type="email" name="email" placeholder="email@example.com" />
                            </div>
                            {/* <span className={styles.errorMsg}>Please enter your email address</span> */}
                        </div>
                        <div className={styles.formFieldContainer}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.formField}>
                                <span><UserIcon /></span>
                                <input type={isPasswordVisible ? "text" : "password"} name="password" placeholder="password" />
                                <span
                                    className={styles.clickable}
                                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <EyeIcon clicked={!isPasswordVisible} />
                                </span>
                            </div>
                            {/* <span className={styles.errorMsg}>Please enter your password</span> */}
                        </div>
                        <button>Log in</button>
                        <div className={styles.extraOptions}>
                            <span>Forgot password?</span>
                            <span>Don't have an account? <Link href="/signup">Sign up</Link></span>
                        </div>
                    </div>
                </div>
                <div className={styles.imagesDisplay}>
                    <span>
                        <Image src={images.logoPurple} alt="Logo" />
                    </span>
                    <div className={styles.images}>
                        <div className={styles.column}>
                            <span><Image src={images.ImageBg6} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg2} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg3} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg1} alt="Event" fill /></span>
                        </div>
                        <div className={styles.column}>
                            <span><Image src={images.ImageBg5} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg6} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg3} alt="Event" fill /></span>
                        </div>
                        <div className={styles.column}>
                            <span><Image src={images.ImageBg1} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg3} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg5} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                        </div>
                        <div className={styles.column}>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                            <span><Image src={images.ImageBg4} alt="Event" fill /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;