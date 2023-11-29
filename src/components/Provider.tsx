"use client";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface ProviderProps {
    children: ReactNode | ReactNode[];
}

const Provider: FunctionComponent<ProviderProps> = ({ children }): ReactElement => {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}

export default Provider;