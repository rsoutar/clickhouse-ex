import { Module } from '@nestjs/common';
import { ClickhouseModule } from './clickhouse.module';
import { AppController } from './app.controller';

@Module({
  imports: [ClickhouseModule],
  controllers: [AppController],
})
export class AppModule {}
