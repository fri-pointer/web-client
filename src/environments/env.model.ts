export interface ApiConfig {
    url: string;
    apiKey?: string;
}

export interface AppEnv {
    production: boolean;
    applicationId: string;
    apis: {[apiName: string]: ApiConfig};
    keycloak: {
        clientId: string;
        realm: string;
        url: string;
    };
}
