import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { ResumePageComponent } from './components/resume-page/resume-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { label: 'Home' } },
  {
    path: 'resume',
    component: ResumePageComponent,
    data: { label: 'Resume' },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {}), MDBBootstrapModule.forRoot()],
  exports: [RouterModule],
})
export class AppRoutingModule {}
