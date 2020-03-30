import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MyAppService } from "src/app/my-app.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: MyAppService,
  ) {
    this.signupForm = this.fb.group({
      email: ["", [Validators.required]],
      password: ['', [Validators.required]]
    },  );
  }

  ngOnInit() {}

  onSubmit() {
    const userFormData = this.signupForm.value;
    
    // console.log(this.basicForm.value);
    // const todoFormData = this.addTodoForm.value;
    const dataObj = {
      ...userFormData,
      
    };

    

    console.log(dataObj);
    this.userService.loginuser(dataObj).subscribe(
      data => {
        // this.router.navigate(["/login"]);
        this.router.navigate(['test']);
        console.log("Successfully added!");
      },
      error => {
        console.error(error);
      }
    );
    
    
  }

}
