import Header from '../Header';

const Layout: React.FC = ({ children }) => (
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
