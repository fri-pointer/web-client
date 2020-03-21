export interface ApiConfig {
    url: string;
}

export interface AppEnv {
    production: boolean;
    apis: {[apiName: string]: ApiConfig};
    keycloak: {
        clientId: string;
        realm: string;
        url: string;
    };
}
