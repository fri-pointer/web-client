export class EntityList<E> {
    public entities: E[];
    public count: number;
    
    constructor(entities: E[], count: number) {
        this.entities = entities ? entities : [];
        this.count = count ? count : this.entities.length;
    }
}

export interface EventTransport {
    event: string;
    data?: any;
}
