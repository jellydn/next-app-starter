import { setupWorker } from 'msw';

import handlers from './handlers';

export const browser = setupWorker(...handlers);

export default browser;
