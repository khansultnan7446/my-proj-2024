import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesPipesComponent } from './directives-pipes/directives-pipes.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { Flipkart1Component } from './flipkart1/flipkart1.component';
import { EmailComponent } from './email/email.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { BankaccountaddComponent } from './bankaccountadd/bankaccountadd.component';
import { Login1Component } from './login1/login1.component';
import { ViewVehicleComponent } from './view-vehicle/view-vehicle.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RatingComponent } from './rating/rating.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon1Component } from './amazon1/amazon1.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { Amazon3Component } from './amazon3/amazon3.component';
import { Amazon4Component } from './amazon4/amazon4.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    WelcomeComponent,
    DirectivesPipesComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehiclesComponent,
    BankaccountComponent,
    Flipkart1Component,
    EmailComponent,
    CreateVehicleComponent,
    BankaccountaddComponent,
    Login1Component,
    ViewVehicleComponent,
    ViewaccountComponent,
  StudentDetailComponent,
  ParentComponent,
  ChildComponent,
  RatingComponent,
  TextAreaComponent,
  CalculatorComponent,
  SiblingComponent,
  Sibling1Component,
  Sibling2Component,
  AmazonComponent,
  Amazon1Component,
  Amazon2Component,
  Amazon3Component,
  Amazon4Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
