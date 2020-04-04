import { KeycloakService } from "@procempa/ngx-keycloak";
import { ConfigService } from "@mjamsek/ngx-config";
import { AppEnv } from "../environments/env.model";
import { environment } from "../environments/environment";

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


