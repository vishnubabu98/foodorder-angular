import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Username=""
  Password=""

  readValues=()=>
  {
    let data:any=
    {
      "Username":this.Username,
      "Password":this.Password
    }
    console.log(data)
  }


}
