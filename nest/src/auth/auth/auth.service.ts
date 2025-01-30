import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
//Reactive X
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  public async login(username: string, password: string) {
    const { data } = await firstValueFrom(
      this.http.post(
        'http://host.docker.internal:8890/realms/Fullcycle/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: '',
          client_secret: '',
          grant_type: 'password',
          username,
          password,
        }),
      ),
    );
    return data;
  }
}
