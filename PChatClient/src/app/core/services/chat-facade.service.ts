import { Injectable } from '@angular/core';
import { ProfileWebService } from './web/profile-web.service';
import { Profile } from '../model/profile.model';
import { GoogleFacadeService } from './google-facade.service';

@Injectable({providedIn: 'root'})
export class ChatFacadeService {

    constructor(
        private googleFacade: GoogleFacadeService,
        private profileWebService: ProfileWebService,
        ) {}

    public async getProfile(): Promise<Profile> {
        const googleProfile = await this.googleFacade.getGoogleProfileAsync();
        const profile = await this.profileWebService.getProfileByGoogleId(googleProfile.id).toPromise();
        return profile ?? await this.profileWebService.createProfileByGoogle(googleProfile).toPromise();
    }
}
