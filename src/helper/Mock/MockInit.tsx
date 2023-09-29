import type { SetupWorkerApi } from 'msw';
import type { SetupServerApi } from 'msw/node';

if (typeof window === 'undefined') {
    const {
        mswServer
    }: { mswServer: SetupServerApi } = require('./msw-server');

    mswServer.listen({
        onUnhandledRequest: 'bypass'
    });
} else {
    const { worker }: { worker: SetupWorkerApi } = require('./msw-browser');

    worker.start({
        onUnhandledRequest: 'bypass'
    });
}
