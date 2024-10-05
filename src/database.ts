import {knex as setupKnex, Knex} from 'knex'
import { env } from './env'

export const configKnex = {
	client: 'sqlite',
	connection: {
		filename: env.DATABASE_URL
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './database/migrations',
	}
} as Knex.Config

export const knex = setupKnex(configKnex)