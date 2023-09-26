import { setupServer } from 'msw/node'
import { handlers } from './MockHandler'

export const mswServer = setupServer(...handlers)