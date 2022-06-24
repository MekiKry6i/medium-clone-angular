import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { RegisterComponent } from "./components/register.component";

const routes = [
    { path: 'register', component: RegisterComponent }
  ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],
    declarations: [
        RegisterComponent,
    ],
})
export class AuthModule {}