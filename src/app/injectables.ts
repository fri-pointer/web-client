import { InjectionToken } from "@angular/core";
import { ConfigService } from "@mjamsek/ngx-config";
import { AppEnv } from "../environments/env.model";

export const API_URL = new InjectionToken<string>("apiUrl", {
    providedIn: "root",
    factory: () => ConfigService.getConfig<AppEnv>().apis.backend.url + "/v1"
});
