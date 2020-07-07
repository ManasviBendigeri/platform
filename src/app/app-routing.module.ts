import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {SubmissionsComponent} from './submissions/submissions.component';
import {VideosComponent} from './videos/videos.component';
import {ProblemsComponent} from './problems/problems.component';

const routes: Routes = [
  {path : 'main', component : MainComponent},
  {path : 'login', component : LoginComponent},
  {path : 'submissions', component : SubmissionsComponent},
  {path : 'videos', component : VideosComponent},
  {path : 'problems', component : ProblemsComponent}
];


@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
