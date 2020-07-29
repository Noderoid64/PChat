import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './pages/auth/auth.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfilesListComponent } from './pages/chat/components/profiles-list/profiles-list.component';

@NgModule({
  declarations: [
    AuthComponent,
    ChatComponent,
    ProfilesListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class CoreModule { }
