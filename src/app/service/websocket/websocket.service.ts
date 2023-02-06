// src\app\services\websocket.service.ts
import { Injectable } from "@angular/core";
import { Observable, Observer } from 'rxjs';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<any>;
  constructor() {
    this.messages = <Subject<any>>this.connect("ws://localhost:3000?auth="+JSON.parse(localStorage.getItem("users"))._token).pipe(
        map(
            (response: MessageEvent): any => {
               return response.data
            }
        )
    );
}

  public connect(url): AnonymousSubject<MessageEvent> {
    if (!this.subject) {
        this.subject = this.create(url);
    }
    return this.subject;
}

  private create(url): AnonymousSubject<MessageEvent> {
    let ws = new WebSocket(url  );
    let observable = new Observable((obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
    });
    let observer = {
        error: null,
        complete: null,
        next: (data: Object) => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(data));
            }
        }
    };
    return new AnonymousSubject<MessageEvent>(observer, observable);
  }

}
