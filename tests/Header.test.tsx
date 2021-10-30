import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Header from '../components/Header';

/**
 * @jest-environment jsdom
 */
describe('Header component', () => {
    test('should render header', () => {
        render(<Header links={[]} />);
    });
});
