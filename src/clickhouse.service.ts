import { Injectable } from '@nestjs/common';
import { createClient } from '@clickhouse/client';

@Injectable()
export class ClickhouseService {
  private client;

  constructor() {
    this.client = createClient({
      host: '',
      username: 'default',
      password: '',
      database: '',
    });
  }

  async query(sql: string) {
    return await this.client.query({
      query: sql,
      format: 'JSONEachRow',
    });
  }

  async insert(table: string, data: any[]) {
    return await this.client.insert({
      table,
      values: data,
      format: 'JSONEachRow',
    });
  }
}
