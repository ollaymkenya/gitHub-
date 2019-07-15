import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private user: string;
  public clientid = 'f21040c245079111c9b3';
  public clientSecret = '257882e76d910b81c24a3eb932cda7b5be09f66f';

  constructor(private http: Http) {
    this.user = 'ollaymkenya';
  }

getProfileUser() {
  return this.http.get('https://api.github.com/users/' + this.user + '?client_id=' + this.clientid + "&client_secret=" + this.clientSecret)
    .map(res => res.json());
}

getProfileRepo() {
  return this.http.get('https://api.github.com/users/' + this.user + '/repos?client_id=' + this.clientid + "&client_secret=" + this.clientSecret)
    .map(res => res.json());
}

updateProfile(user: string) {
  this.user = user;
}
}


