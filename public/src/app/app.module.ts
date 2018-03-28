import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UploadComponent } from './components/_admin/upload/upload.component';
import { AboutComponent } from './components/about/about.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PropertiesShowComponent } from './components/properties/properties-show/properties-show.component';
import { PropertiesEditComponent } from './components/_admin/properties-edit/properties-edit.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/_admin/login/login.component';
import { LoginService } from './services/login.service';
import { UploadService } from './services/upload.service';
import { PropertiesService } from './services/properties.service';
import { MessageService } from './services/message.service';
import { AuthGuard } from './guard/auth.guard';
import { PropertiesEditAddImagesComponent } from './components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { DashboardComponent } from './components/_admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    // FileSelectDirective,
    // FileDropDirective,
    UploadComponent,
    AboutComponent,
    PropertiesComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    PropertiesShowComponent,
    ContactComponent,
    LoginComponent,
    PropertiesEditComponent,
    PropertiesEditAddImagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxCarouselModule,
    Ng2DeviceDetectorModule.forRoot(),
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAyGRgKEeUMHzVkwwZ0JZ7y03NaZ1_RG0o'
    }),
    FileUploadModule
  ],
  exports: [FileUploadModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [UploadService, PropertiesService, LoginService, MessageService, AuthGuard, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
