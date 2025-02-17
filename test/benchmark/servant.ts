import { DynamicBenchmarker } from "@nestia/benchmark";

import { AkashicRecordsConfiguration } from "../../src/AkashicRecordsConfiguration";

DynamicBenchmarker.servant({
  connection: {
    host: `http://127.0.0.1:${AkashicRecordsConfiguration.API_PORT()}`,
  },
  location: `${__dirname}/../features`,
  parameters: (connection) => [connection],
  prefix: "test_api_",
}).catch((exp) => {
  console.error(exp);
  process.exit(-1);
});
