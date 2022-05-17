import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import Header from '../components/Header';

/**
 * @jest-environment jsdom
 */
describe('Header component', () => {
    test('should render header', () => {
        render(<Header links={[]} />);
    });
});
