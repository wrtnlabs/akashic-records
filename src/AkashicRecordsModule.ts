import { Module } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";

import { DbModule } from "./modules/db/db.module";
import { HealthModule } from "./modules/health/health.module";

@Module({
  imports: [LoggerModule.forRoot(), DbModule, HealthModule],
})
export class AkashicRecordsModule {}
