import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { Singleton } from "tstl";
import typia from "typia";

/* eslint-disable */
export class AkashicRecordsGlobal {
  public static testing: boolean = false;
  public static get env(): AkashicRecordsGlobal.IEnvironments {
    return environments.get();
  }
}
export namespace AkashicRecordsGlobal {
  export interface IEnvironments {
    PROJECT_API_PORT: `${number}`;
    DATABASE_URL: string;
    COHERE_API_KEY: string;
  }
}

const environments = new Singleton(() => {
  const env = dotenv.config();
  dotenvExpand.expand(env);
  return typia.assert<AkashicRecordsGlobal.IEnvironments>(process.env);
});
