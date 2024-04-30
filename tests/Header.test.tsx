import { render } from '@testing-library/react';
import { describe, test, vi } from 'vitest';

import { SessionProvider } from 'next-auth/react';
import Header from '../components/Header';

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
