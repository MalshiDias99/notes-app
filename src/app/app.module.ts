import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TestComponent } from "./test/test.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MessageComponent } from "./message/message.component";
import { SuccessComponent } from "./success/success.component";
import { UserComponent } from "./components/user/user/user.component";
import { CommonModule } from "@angular/common";
import { TemplateDemoComponent } from "./components/template-demo/template-demo.component";
import { NavSidebarComponent } from "./components/nav-sidebar/nav-sidebar.component";
import { NodesComponent } from "./components/nodes/nodes/nodes.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AuthComponent,
    TestComponent,
    MessageComponent,
    SuccessComponent,
    UserComponent,
    TemplateDemoComponent,
    NavSidebarComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
