import { Component, OnInit } from '@angular/core';
import { GoogleFacadeService } from '../../services/google-facade.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private googleFacase: GoogleFacadeService) { }

  ngOnInit(): void {
  }

  public googleOAuthClick(): void {
    this.googleFacase.openGoogleAuthPage();
  }

}
