import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./_components/login/login.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    loadChildren: () =>
      import("../app/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
