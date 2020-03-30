import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from './signup/signup.component';

import { MustMatch } from './_helpers/must-match.validator';
import { AuthComponent } from './auth/auth.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './components/user/user/user.component';
import { NotesComponent } from './components/notes/notes/notes.component';
import { UserModule } from './components/user/user/user.module';


const routes: Routes = [

 
  {
    path: "register",
    component: SignupComponent
  },
  {
    path: "signup",
    component: AuthComponent
  },{
    path: "test",
    component: TestComponent
  },{
    path: "dashboars/profile",
    component: UserComponent
  },{
    path: "dashboars/notes",
    component: NotesComponent
  },{
    path: "dashboard/profile",
    loadChildren: () =>import('./components/user/user/user.module').then(m => m.UserModule)
  },
  { path: "", redirectTo: "register", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

