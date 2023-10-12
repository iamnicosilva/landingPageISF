import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './section/home/home.component';
import { AboutComponent } from './section/about/about.component';
import { LectureComponent } from './section/lecture/lecture.component';
import { CongressComponent } from './section/congress/congress.component';
import { ContactComponent } from './section/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'lecture', component: LectureComponent},
  { path: 'congress', component: CongressComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
