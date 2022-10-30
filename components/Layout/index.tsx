import Head from 'next/head';
import Script from 'next/script';

import Header from '../Header';

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
    <div>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
                crossOrigin="anonymous"
            ></Script>
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

export default Layout;
