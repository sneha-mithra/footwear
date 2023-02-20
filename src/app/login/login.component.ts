import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
 
  loginForm!: FormGroup 
  invalidLogin=false;

  login:Login = new Login();

  constructor(private fb: FormBuilder,
    private router:Router, private loginservice: LoginService, private route:ActivatedRoute) { }
   ngOnInit(): void {
    this.loginForm=this.fb.group({
      username: ['',Validators.required],
      password:['',Validators.required]
    })
   }
   hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText ? this.type="text":this.type="password";
   }
  //  getLogin(batchid: number){
  //   this.router.navigate(['login',batchid]);

  //  }
handleLogin(){
  console.log(this.login);
  this.loginservice.log(this.login).subscribe(data =>{
    console.log(data);
    if(data!=null){
      this.router.navigate(['/footwears']);
      this.invalidLogin=false;
    }
    else{
      this.invalidLogin=true;
    }
  })
}



}
