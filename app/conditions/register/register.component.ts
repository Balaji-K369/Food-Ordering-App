import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  email: string ="";
  password: string ="";

  constructor(private http: HttpClient) 
  {
  }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData = 
    {
     
      "email" : this.email,
      "password" : this.password,
    };
    this.http.post("http://localhost:9992/foodapp/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
    });
  }

  save()
  {
    this.register();
  }

}
