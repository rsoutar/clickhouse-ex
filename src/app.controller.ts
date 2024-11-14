import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClickhouseService } from './clickhouse.service';

@Controller('logs')
export class AppController {
  constructor(private readonly clickhouse: ClickhouseService) {}

  @Get()
  async getLogs() {
    const result = await this.clickhouse.query(
      'SELECT * FROM logs ORDER BY timestamp',
    );
    return result.json();
  }

  @Post()
  async addLog(
    @Body() log: { timestamp: string; level: string; message: string },
  ) {
    await this.clickhouse.insert('logs', [log]);
    return { status: 'ok' };
  }
}
