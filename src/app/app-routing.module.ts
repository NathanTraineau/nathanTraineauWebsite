import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'resume',
    component: ResumePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
