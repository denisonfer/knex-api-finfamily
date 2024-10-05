import { Knex, knex as setupKnex } from 'knex';
import { env } from './env';

export const configKnex = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT !== 'sqlite'
      ? env.DATABASE_URL
      : {
          filename: env.DATABASE_URL,
        },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database/migrations',
  },
} as Knex.Config;

export const knex = setupKnex(configKnex);
