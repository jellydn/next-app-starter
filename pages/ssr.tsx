import Index from './index';

export default function ServerSideRendering() {
    return <Index />;
}

export function getServerSideProps() {
    return { props: { initialState: 1000 } };
}
