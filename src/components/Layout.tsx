import type { Metadata } from 'next'
import { FunctionComponent, ReactElement, ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContext } from '@/extensions/toast';
import { ToastMessageType } from './models/ToastMessageType';
import ToastCard from './Card/ToastCard';
import Provider from './Provider';
import Sidebar from './shared/Sidebar';
import Topbar from './shared/Topbar';
import { useRouter } from 'next/router';

export const metadata: Metadata = {
    title: 'Ticket wave web application',
    description: 'Ticket wave web application',
}

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    const { pathname } = useRouter();

    const toastContext = useContext(ToastContext);
    const isAppPage = pathname.includes('/app');
    const isEventsPage = pathname == '/app/events'; 
    const isViewEventPage = pathname.startsWith('/app/event') && !pathname.includes('/create');
    

    return (
        <>
            <Provider>
                <ToastCard
                    visibility={toastContext?.toastOptions?.visible ?? false}
                    title={toastContext?.toastOptions?.title ?? 'Welcome'}
                    description={toastContext?.toastOptions?.description ?? ''}
                    messageType={toastContext?.toastOptions?.type ?? ToastMessageType.Info}
                    timeout={toastContext?.toastOptions?.timeout ?? 0.01} />
                {
                    !isAppPage && <>
                        <Navbar />
                        {children}
                        <Footer />
                    </>
                }
                {
                    isAppPage && <>
                        <div className="appLayout">
                            <Topbar />
                            <div className="appLayout__body">
                                <Sidebar />
                                <div className="innerBody" style={(isEventsPage || isViewEventPage) ? {padding: 0} : {}}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Provider>
        </>
    )
}

export default Layout;
