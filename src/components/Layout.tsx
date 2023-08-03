import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CSSProperties, FunctionComponent, ReactElement, ReactNode, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const metadata: Metadata = {
    title: 'Ticket wave web application',
    description: 'Ticket wave web application',
}

interface LayoutProps {
    children?: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }): ReactElement => {

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout;
