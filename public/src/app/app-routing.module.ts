import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './components/_admin/upload/upload.component';
import { LandingComponent } from './components/landing/landing.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { AboutComponent } from './components/about/about.component';
import { PropertiesShowComponent } from './components/properties/properties-show/properties-show.component';
import { PropertiesEditComponent } from './components/_admin/properties-edit/properties-edit.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/_admin/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'upload', canActivate: [AuthGuard], component: UploadComponent},
  {path: 'properties', component: PropertiesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'show/:id', component: PropertiesShowComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'editlisting', component: PropertiesEditComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
