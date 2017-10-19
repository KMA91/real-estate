import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { LandingComponent } from './landing/landing.component';
import { ListingComponent } from './listing/listing.component';
import { AboutComponent } from './about/about.component';
import { ListingShowComponent } from './listing//listing-show/listing-show.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'properties', component: ListingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'show/:id', component: ListingShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
