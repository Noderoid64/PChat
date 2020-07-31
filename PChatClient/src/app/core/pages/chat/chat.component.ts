import { Component, OnInit } from '@angular/core';
import { ChatFacadeService } from 'app/core/services/chat-facade.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatFacade: ChatFacadeService) { }

  public ngOnInit(): void {
    this.chatFacade.getProfile().then(profile => console.log(profile));
  }

}
