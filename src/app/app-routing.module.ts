import { Component, createComponent, Directive, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HomeComponent } from './home/home.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { Flipkart1Component } from './flipkart1/flipkart1.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankaccountaddComponent } from './bankaccountadd/bankaccountadd.component';
import { Login1Component } from './login1/login1.component';
import { LoginsService } from './logins.service';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ParentComponent } from './parent/parent.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { SiblingComponent } from './sibling/sibling.component';
import { AmazonComponent } from './amazon/amazon.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {path: 'dashboard', component: DashboardComponent, children: [
      { path: 'home', component: WelcomeComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path:'directives-pipes', component:DirectivesPipesComponent },
      {path:'employee', component:EmployeeComponent},
      {path: 'flipkart', component:FlipkartComponent},
      {path: 'vehicles', component:VehiclesComponent},
      { path:'flipkart1', component:Flipkart1Component},
      { path: 'bankaccount' , component:BankaccountComponent},
      { path: 'create-vehicle', component:CreateVehicleComponent},
      { path: 'bankaccountadd', component:BankaccountaddComponent},
      { path: 'viewaccount/:id' , component:ViewaccountComponent},
      { path: 'editaccount/:id' , component:BankaccountaddComponent},
      { path: 'email',component:EmailComponent},
      {path : 'calculator', component:CalculatorComponent},
      { path:'login1', component:Login1Component},
      { path:'view-vehicle/:id', component:ViewVehicleComponent},
      { path:'edit-vehicle/:id', component:CreateVehicleComponent},
      { path : 'student-detail' , component:StudentDetailComponent},
      { path: 'text-area' , component:TextAreaComponent},
      { path: 'parent' , component:ParentComponent},
      { path: 'sibling' , component:SiblingComponent},
      { path : 'amazon', component:AmazonComponent},
      { path: '', component:HomeComponent },]
  },
  { path: "", component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
