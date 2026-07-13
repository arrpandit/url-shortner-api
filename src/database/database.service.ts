import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { Pool, QueryResult, QueryResultRow } from 'pg'

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly pool: Pool

  constructor(private readonly config: ConfigService) {
    const databaseUrl = this.config.get<string>('DATABASE_URL')

    if (!databaseUrl) {
      throw new Error('DATABASE_URL is required for database connection')
    }

    this.pool = new Pool({
      connectionString: databaseUrl,
    })
  }

  async onModuleInit(){
    try{
        const res = await this.query('SELECT NOW()',)
        console.log('DB Connected')

        console.log(res.rows[0])
    }catch(err){
        console.error(`'DB conn failed',${err}`)
    }
  }

  async query<T extends QueryResultRow = QueryResultRow>(sql: string, params?: any[]): Promise<QueryResult<T>> {
    return this.pool.query<T>(sql, params)
  }

  async onModuleDestroy() {
    await this.pool.end()
  }
}