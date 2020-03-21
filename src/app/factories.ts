import { KeycloakService } from "@procempa/ngx-keycloak";
import { ConfigService } from "@mjamsek/ngx-config";
import { AppEnv } from "../environments/env.model";
import { environment } from "../environments/environment";
import { InjectionToken } from "@angular/core";

export function AppConfigFactory(keycloak: KeycloakService) {
    return async () => {
        await ConfigService.initialize<AppEnv>({path: "/config/config.json", environment});
        
        const keycloakConfig = {
            url: ConfigService.getConfig<AppEnv>().keycloak.url,
            realm: ConfigService.getConfig<AppEnv>().keycloak.realm,
            clientId: ConfigService.getConfig<AppEnv>().keycloak.clientId
        };
        await keycloak.init(keycloakConfig, {onLoad: "check-sso"});
    };
}

export const API_URL = new InjectionToken<string>("apiUrl", {
    providedIn: "root",
    factory: () => ConfigService.getConfig<AppEnv>().apis.backend.url + "/v1"
});
