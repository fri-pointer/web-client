import { EventEmitter, Injectable } from "@angular/core";
import { EventTransport } from "../../models";
import { filter, map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EventService {
    
    private emitter: EventEmitter<EventTransport> = new EventEmitter<EventTransport>();
    
    /**
     * Emit event throughout app
     * @param event event name
     * @param data optional data to be sent with event
     */
    public sendEvent(event: string, data?: any): void {
        this.emitter.emit({event, data});
    }
    
    /**
     * Get event subscription
     * @param event event name
     */
    public getEvent(event: string): Observable<any | void> {
        return this.emitter.pipe(
            filter((eventData: EventTransport) => {
                return eventData.event === event;
            }),
            map((eventData: EventTransport) => eventData.data)
        );
    }
    
    /**
     * Get multiple event subscription
     * @param events array of events
     */
    public getEvents(events: string[]): Observable<any | void> {
        return this.emitter.pipe(
            filter((eventData: EventTransport) => {
                return events.includes(eventData.event);
            }),
            map((eventData: EventTransport) => eventData.data)
        );
    }
    
}
