import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmitCredentialsService {

  constructor() { }

  public submit(password) {
    console.log(`PASSWORD SUBMITTED ${password}`);
    // 1. http.post nkei neki
    // 2. dobi rezultat
    // return rezultat

    return "Server ok";
  }
}
