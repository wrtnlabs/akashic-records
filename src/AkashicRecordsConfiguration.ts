import fs from "fs";
import path from "path";

import { AkashicRecordsGlobal } from "./AkashicRecordsGlobal";

export namespace AkashicRecordsConfiguration {
  export const API_PORT = () =>
    Number(AkashicRecordsGlobal.env.PROJECT_API_PORT);
  export const DATABASE_URL = () => AkashicRecordsGlobal.env.DATABASE_URL;
  export const COHERE_API_KEY = () => AkashicRecordsGlobal.env.COHERE_API_KEY;

  export const ROOT = (() => {
    const splitted: string[] = __dirname.split(path.sep);
    return splitted.at(-1) === "src" && splitted.at(-2) === "bin"
      ? path.resolve(__dirname + "/../..")
      : fs.existsSync(__dirname + "/.env")
        ? __dirname
        : path.resolve(__dirname + "/..");
  })();
}
