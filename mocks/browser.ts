import { setupWorker } from 'msw/browser';

import handlers from './handlers';

export const browser = setupWorker(...handlers);

export default browser;
