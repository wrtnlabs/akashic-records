// nestia configuration file
import type sdk from "@nestia/sdk";
import { NestFactory } from "@nestjs/core";

import { AkashicRecordsConfiguration } from "./src/AkashicRecordsConfiguration";
import { AkashicRecordsModule } from "./src/AkashicRecordsModule";

const NESTIA_CONFIG: sdk.INestiaConfig = {
  input: () => NestFactory.create(AkashicRecordsModule),
  output: "src/api",
  swagger: {
    output: "packages/api/swagger.json",
    servers: [
      {
        url: `http://localhost:${AkashicRecordsConfiguration.API_PORT()}`,
        description: "Local Server",
      },
    ],
    beautify: true,
  },
  distribute: "packages/api",
  primitive: false,
  simulate: true,
};
export default NESTIA_CONFIG;
