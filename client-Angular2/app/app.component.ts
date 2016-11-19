import { Component, OnInit, OnDestroy } from '@angular/core';
import {ChatService} from './app.chatservice';

@Component({
  selector: 'my-app',
  templateUrl: 'app/chat.html',
  styleUrls:['app/main/main.scss']
})
export class AppComponent implements OnDestroy {
  messages:any=[];
  connection:any;
  text:string;
  constructor(private  chatService:ChatService){
     this.connection = this.chatService.getMessages().subscribe(message =>{
      this.messages.push(message);
    })
  }

  sendMessage(text:string){
    this.messages.push(text);
    this.chatService.sendMessage(text);
    this.text='';
     
  }

  
  ngOnDestroy(){
    this.connection.unsubscribe();
  }
}
