import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { LandingComponent } from './landing/landing.component';
import { ListingComponent } from './listing/listing.component';
import { AboutComponent } from './about/about.component';
import { ListingShowComponent } from './listing//listing-show/listing-show.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'upload', canActivate: [AuthGuard], component: UploadComponent},
  {path: 'properties', component: ListingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'show/:id', component: ListingShowComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
