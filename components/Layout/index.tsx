import Header from '../Header';

const Layout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
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

export default Layout;
