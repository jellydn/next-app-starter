import Script from 'next/script';
import { ReactNode } from 'react';


function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    readonly children: ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <Script
                    async={true}
                    id="adsbygoogle"
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5337133458846513"
                    crossOrigin="anonymous"
                />
                <title>NextJs Starter App</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;
