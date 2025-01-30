import { Component, inject, OnInit } from '@angular/core';
import Keycloak from 'keycloak-js';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: [`user-profile.component.css`],
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;

  private readonly keycloak: Keycloak = inject(Keycloak);

  public async ngOnInit(): Promise<void> {
    if (this.keycloak?.authenticated) {
      const profile = await this.keycloak.loadUserProfile();

      this.user = {
        name: `${profile?.firstName} ${profile.lastName}`,
        email: profile?.email,
        username: profile?.username,
      };
    }
  }
}
