import { render } from '@testing-library/react';
import { describe, test } from 'vitest';

import Button from '../components/Button';

/**
 * @jest-environment jsdom
 */
describe('Button component', () => {
    test('should render button', () => {
        render(<Button size="s">Button</Button>);
    });
});
