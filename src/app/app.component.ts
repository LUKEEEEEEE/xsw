import { Component } from '@angular/core';
import {SubmitCredentialsService} from "./submit-credentials.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xsw';
  ime = "igor";
  status = "";
  serverstatus = "online";
   
  constructor(private submitCredentials: SubmitCredentialsService) {
    
  }

  public asdf() {
    return "lukaluka";
  }


  public checkPasswordMatch(password, passwordRepeat) {
    if (password !== passwordRepeat) {
      this.status = "PASSWORDS DONT MATCH";
      return;
    }
    
    const result = this.submitCredentials.submit(password);
    this.status = (result === "Server ok")
      ? "Server said its ok"
      : "Something went wrong on server";
  
  }

  changeName() {
    this.ime = "luka";
  }

  asdf2(text) {
    console.log(text);
  }
}
