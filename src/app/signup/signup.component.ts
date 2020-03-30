import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MyAppService } from "src/app/my-app.service";
import { MustMatch } from '../_helpers/must-match.validator';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../message/message.component';
import { SuccessComponent } from '../success/success.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public completeStatus:boolean  = false;
  public errorState:boolean = false;
  basicForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: MyAppService,
    private  dialog:  MatDialog,
  ) {
    this.basicForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, Validators.required],
    },  {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  ngOnInit() {}

  onSubmit() {
    this.formSubmitted = true;
    const userFormData = this.basicForm.value;
    
    // console.log(this.basicForm.value);
    // const todoFormData = this.addTodoForm.value;
    const dataObj = {
      ...userFormData,
      
    };

    if( this.basicForm.value.password !== this.basicForm.value.confirmPassword ){
      this.errorState = true;
      console.log("Error!");
      this.dialog.open(MessageComponent,{ data: {
        message:  "Error!!!"
        }});
      this.basicForm.reset();
      
    } else{

    console.log(dataObj);
    this.userService.adduser(dataObj).subscribe(
      data => {
        this.completeStatus = true;
        this.dialog.open(SuccessComponent,{ data: {
          message:  "Success!!!"
          }});
        console.log(data);    
        this.basicForm.reset();
        // this.router.navigate(["/login"]);
        console.log("Successfully added!");
      },
      error => {
        this.errorState = true;
        console.error(error);
        this.dialog.open(SuccessComponent,{ data: {
          message:  "Success!!!"
          }});
        
      }
    );
    }
    console.log(this.basicForm.value);
  }
}
