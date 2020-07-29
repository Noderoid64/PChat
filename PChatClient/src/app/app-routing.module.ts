import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './core/pages/auth/auth.component';
import { ChatComponent } from './core/pages/chat/chat.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent
    }, {
        path: 'chat',
        component: ChatComponent
    }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'chat'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
