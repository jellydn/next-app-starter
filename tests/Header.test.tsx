import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import Header from '../components/Header';
import { SessionProvider } from 'next-auth/react';

global.fetch = vi.fn();

/**
 * @jest-environment jsdom
 */
describe('Header component', () => {
    test('should render header', () => {
        render(
            <SessionProvider>
                <Header links={[]} />
            </SessionProvider>,
        );
    });
});
