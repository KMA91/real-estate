import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';
import { AboutComponent } from './about/about.component';
import { ListingComponent } from './listing/listing.component';
import { ListingService } from './listing/listing.service';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListingShowComponent } from './listing//listing-show/listing-show.component';

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
    ListingShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UploadService, ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
