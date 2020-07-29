import { Component, OnInit } from '@angular/core';
import { OAuthService} from '../../services/oauth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private oAuthService: OAuthService) { }

  ngOnInit(): void {
  }

  public googleOAuthClick(): void {
    this.oAuthService.init();
  }

}
