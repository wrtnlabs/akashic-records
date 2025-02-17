import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { IHealth } from "@wrtnlabs/akashic-records-api/lib/structures/health/IHealth";

@Controller()
export class HealthController {
  /**
   * Get the health status of the server.
   *
   * @returns The health status of the server.
   *
   * @tag health
   */
  @TypedRoute.Get("health")
  get(): IHealth {
    return {
      health: "good",
    };
  }
}
