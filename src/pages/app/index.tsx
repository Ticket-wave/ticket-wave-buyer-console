import { ReactElement, FunctionComponent, useEffect } from "react";
import styles from "../../styles/Dashboard.module.scss";
import { EventIcon } from "@/components/SVGs/SVGicons";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";

interface DashboardProps {

}

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

//     // Get session
//     const session = await getServerSession(req, res, {});

//     console.log({session});

//     // If session is null...
//     if (!session) {
//         // Redirect
//         return {
//             redirect: {
//                 permanent: false,
//                 destination: '/api/auth/login'
//             }
//         }
//     }

//     return {
//         props: {}
//     };
// }

const Dashboard: FunctionComponent<DashboardProps> = (): ReactElement => {

    const { user, isLoading } = useUser();
    const { push, isReady } = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            push('/api/auth/login');
        }   
    }, [isLoading, user]);

    if (isLoading) {
        return <></>;
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.topArea}>
                <h3>Dashboard</h3>
                <Link href="/app/event/create">
                    <button>New Event</button>
                </Link>
            </div>

            <div className={styles.kpiSection}>
                <div className={styles.kpi}>
                    <span><EventIcon /></span>
                    <div className={styles.content}>
                        <h4>12</h4>
                        <p>Total Events</p>
                    </div>
                </div>
                <div className={styles.kpi}>
                    <span><EventIcon /></span>
                    <div className={styles.content}>
                        <h4>120</h4>
                        <p>Tickets Bought</p>
                    </div>
                </div>
                <div className={styles.kpi}>
                    <span><EventIcon /></span>
                    <div className={styles.content}>
                        <h4>120</h4>
                        <p>Tickets Sold</p>
                    </div>
                </div>
                <div className={styles.kpi}>
                    <span><EventIcon /></span>
                    <div className={styles.content}>
                        <h4>$1200</h4>
                        <p>Total Revenue</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;