import { Component, OnInit } from '@angular/core';
import { ChatFacadeService } from '../../services/chat-facade.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProfileDialogComponent } from './components/add-profile-dialog/add-profile-dialog.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatFacade: ChatFacadeService, public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.chatFacade.getProfile().then(profile => console.log(profile));
  }

  public searchButtonClick(): void {
    this.dialog.open(AddProfileDialogComponent).afterClosed().subscribe(result => console.log(result));
  }
}
