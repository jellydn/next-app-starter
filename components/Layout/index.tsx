import { ReactNode } from 'react';
import Header from '../Header';

function Layout({ children }: { readonly children: ReactNode }) {
    return (
        <div>
            <Header
                links={[
                    {
                        title: 'Contact',
                        url: '/contact',
                    },
                ]}
            />
            {children}
        </div>
    );
}

export default Layout;
