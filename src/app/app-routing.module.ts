import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";

import { MustMatch } from "./_helpers/must-match.validator";
import { AuthComponent } from "./auth/auth.component";
import { TestComponent } from "./test/test.component";
import { UserComponent } from "./components/user/user/user.component";
import { UserModule } from "./components/user/user/user.module";
import { TemplateDemoComponent } from "./components/template-demo/template-demo.component";
import { NavSidebarComponent } from "./components/nav-sidebar/nav-sidebar.component";
import { NodesComponent } from "./components/nodes/nodes/nodes.component";

const routes: Routes = [
  {
    path: "demo",
    component: TemplateDemoComponent
  },
  {
    path: "sidebar",
    component: NavSidebarComponent
  },
  {
    path: "register",
    component: SignupComponent
  },
  {
    path: "signup",
    component: AuthComponent
  },
  {
    path: "test",
    component: TestComponent
  },
  {
    path: "dashboars/user",
    component: UserComponent
  },
  {
    path: "dashboars/nodes",
    component: NodesComponent
  },
  {
    path: "dashboard/profile",
    loadChildren: () =>
      import("./components/user/user/user.module").then(m => m.UserModule)
  },
  { path: "", redirectTo: "register", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
