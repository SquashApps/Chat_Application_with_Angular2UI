import {Subject} from'rxjs/Subject';
import {Observable} from'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService{
    url='http://localhost:9000';
    socket=io(this.url);

    sendMessage(message: string){
        this.socket.emit('chat message', message);

    }

    getMessages(){
        let observable = new Observable((observer:any) =>{
            this.socket = io(this.url);
            this.socket.on('server response',(data:any)=>{
                observer.next(data);
            });
            return ()=>{
                this.socket.disconnect();
            };
        })
        return observable;
    }
}   
