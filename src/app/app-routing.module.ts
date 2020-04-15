import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";

import { AdminComponent } from "./admin/admin.component";

import { TeacherPageComponent } from "./teacher-page/teacher-page.component";
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { DisplayTeacherComponent } from "./display-teacher/display-teacher.component";
import { FindTeacherComponent } from "./find-teacher/find-teacher.component";

import { StudentPageComponent } from "./student-page/student-page.component";
import { AddStudentComponent } from "./add-student/add-student.component";
import { FindStudentComponent } from "./find-student/find-student.component";
import { DisplayStudentComponent } from "./display-student/display-student.component";



const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'about-us', component: AboutUsComponent },
{ path: 'contact-us', component: ContactUsComponent },
{ path: 'login', component: LoginComponent },
{ path: 'home', component: HomeComponent },

{ path: 'admin', component: AdminComponent },

{ path: 'teacher', component: TeacherPageComponent },
{ path: 'add-teacher', component: AddTeacherComponent },
{ path: 'display-teacher', component: DisplayTeacherComponent },
{ path: 'find-teacher', component: FindTeacherComponent },

{ path: 'student', component: StudentPageComponent },
{ path: 'display-student', component: DisplayStudentComponent },
{ path: 'add-student', component: AddStudentComponent },
{ path: 'find-student', component: FindStudentComponent }];


@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
