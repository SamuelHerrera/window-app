import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/timeout';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';

@Injectable()
export class TestService {

  private  timeout = 60000;
  private urlAPI = 'http://localhost:3000/api';
  private urlTCP = 'http://localhost:3000';
  private socket;

  constructor(private http: Http) { }

  public testGet(data: any): Observable<any> {
    return this.http.get(this.urlAPI+'/users').timeout(this.timeout);
  }

  public testSendTCP(message) {
    this.socket.emit('message', message);    
  }
  
  testReadTCP() {
    const observable = new Observable(observer => {
      this.socket = io(this.urlTCP);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    });
    return observable;
  } 

}
