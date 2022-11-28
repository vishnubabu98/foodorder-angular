import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  Name=""
  Address=""
  Pincode=""
  Emailid=""
  Phoneno=""
  Username=""
  Password=""
  Confirmpassword=""

  readValues=()=>
  {
    let data:any=
    {
        "Name":this.Name,
        "Address":this.Address,
        "Pincode":this.Pincode,
        "Emailid":this.Emailid,
        "Phoneno":this.Phoneno,
        "Username":this.Username,
        "Password":this.Password,
        "ConfirmPassword":this.Confirmpassword
    }
    console.log(data)
  }






}
