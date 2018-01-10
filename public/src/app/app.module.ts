import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListingShowComponent } from './listing//listing-show/listing-show.component';
import { ListingEditComponent } from './listing/listing-edit/listing-edit.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { UploadService } from './upload/upload.service';
import { ListingService } from './listing/listing.service';
import { AuthGuard } from './auth.guard';
import { ListingEditAddImagesComponent } from './listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileDropDirective,
    UploadComponent,
    AboutComponent,
    ListingComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    ListingShowComponent,
    ContactComponent,
    LoginComponent,
    ListingEditComponent,
    ListingEditAddImagesComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxCarouselModule
  ],
  providers: [UploadService, ListingService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
