import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { DisplayTeacherComponent } from './display-teacher/display-teacher.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { FindTeacherComponent } from './find-teacher/find-teacher.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    TeacherPageComponent,
    StudentPageComponent,
    AddTeacherComponent,
    DisplayTeacherComponent,
    DisplayStudentComponent,
    AdminComponent,
    AddStudentComponent,
    FindStudentComponent,
    FindTeacherComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
