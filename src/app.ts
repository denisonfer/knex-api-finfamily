import fastifyCookie from '@fastify/cookie';
import fastify from 'fastify';
import { transactionsRoutes } from './routes/transactions';

const app = fastify();

app.register(fastifyCookie);

app.register(transactionsRoutes, {
  prefix: '/transactions',
});

export default app;
