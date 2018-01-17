webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_animations/fade-in.animation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import the required animation functions from the angular animations module
var animations_1 = __webpack_require__("../../../animations/@angular/animations.es5.js");
exports.fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
animations_1.trigger('fadeInAnimation', [
    // route 'enter' transition
    animations_1.transition(':enter', [
        // css styles at start of transition
        animations_1.style({ opacity: 0 }),
        // animation and styles at end of transition
        animations_1.animate('0.7s', animations_1.style({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ "../../../../../src/app/_animations/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("../../../../../src/app/_animations/fade-in.animation.ts"));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Arial';\r\n}\r\n\r\n/* Tablet/Desktop */\r\n\r\n@media only screen and (min-width: 415px) {\r\n  .wrapper{\r\n    width: 90%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  section{\r\n    padding: 3%;\r\n  }\r\n\r\n  .top{\r\n    display: inline-block;\r\n    position: relative;\r\n  }\r\n\r\n  .top img{\r\n    width: 25%;\r\n    display: inline-block;\r\n  }\r\n\r\n  .top h3{\r\n    width: 60%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    position: relative;\r\n    padding: 3%;\r\n  }\r\n\r\n  .testimonials{\r\n    text-align: center;\r\n    margin: 2%;\r\n  }\r\n\r\n  .testimonials h3, p{\r\n    padding: 2%;\r\n  }\r\n\r\n  p{\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n\r\n/* MOBILE */\r\n\r\n@media only screen and (max-width: 414px) {\r\n  .wrapper{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    max-width: 90%;\r\n  }\r\n\r\n  section{\r\n    padding: 3%;\r\n  }\r\n\r\n  .top h3{\r\n    margin-top: 9%;\r\n    font-size: 1.33em;\r\n  }\r\n\r\n  h2, p, button{\r\n    margin: 5% 0;\r\n  }\r\n\r\n  .test{\r\n    font-size: 1.33em;\r\n    -webkit-text-decoration: red underline;\r\n            text-decoration: red underline;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\r\n\r\n  <section>\r\n    <div class=\"top\">\r\n      <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyprofile.jpg\">\r\n      <h3>\"My mission is to guide my current and prospective clients through the process of any of their real estate needs. I know that there's a lot of ambiguity when dealing with real estate. With my years of experience and knowledge, I can help answer any questions and guide you through the process, step by step. Whether you're buying or selling, I invite you to contact me, so that I may show you why my past clients have trusted and continuously trust me with their ventures.\"</h3>\r\n    </div>\r\n  </section>\r\n\r\n  <section>\r\n    <div class=\"testimonials\">\r\n      <h2>Testimonials</h2>\r\n      <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\" - Sally Zhen</p>\r\n      <p>\"Tony is THE BEST! As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home. Throughout the process, Tony explained everything clearly to make sure I was up to speed and on the same page..\" - Cassie Curtin</p>\r\n    </div>\r\n  </section>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var upload_component_1 = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var listing_component_1 = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var listing_show_component_1 = __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.ts");
var listing_edit_component_1 = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/auth.guard.ts");
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'upload', canActivate: [auth_guard_1.AuthGuard], component: upload_component_1.UploadComponent },
    { path: 'properties', component: listing_component_1.ListingComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'show/:id', component: listing_show_component_1.ListingShowComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'editlisting', component: listing_edit_component_1.ListingEditComponent },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  padding: 0;\r\n  margin: 0;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-top-navbar></app-top-navbar>\r\n  <app-navbar></app-navbar>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var upload_component_1 = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/about/about.component.ts");
var listing_component_1 = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var listing_show_component_1 = __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.ts");
var listing_edit_component_1 = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/login/login.service.ts");
var upload_service_1 = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/auth.guard.ts");
var listing_edit_add_images_component_1 = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.ts");
var top_navbar_component_1 = __webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.ts");
var ngx_carousel_1 = __webpack_require__("../../../../ngx-carousel/index.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var ng2_device_detector_1 = __webpack_require__("../../../../ng2-device-detector/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            ng2_file_upload_1.FileSelectDirective,
            ng2_file_upload_1.FileDropDirective,
            upload_component_1.UploadComponent,
            about_component_1.AboutComponent,
            listing_component_1.ListingComponent,
            landing_component_1.LandingComponent,
            navbar_component_1.NavbarComponent,
            footer_component_1.FooterComponent,
            listing_show_component_1.ListingShowComponent,
            contact_component_1.ContactComponent,
            login_component_1.LoginComponent,
            listing_edit_component_1.ListingEditComponent,
            listing_edit_add_images_component_1.ListingEditAddImagesComponent,
            top_navbar_component_1.TopNavbarComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            ngx_carousel_1.NgxCarouselModule,
            ng2_device_detector_1.Ng2DeviceDetectorModule.forRoot()
        ],
        providers: [upload_service_1.UploadService, listing_service_1.ListingService, login_service_1.LoginService, auth_guard_1.AuthGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login/login.service.ts");
var AuthGuard = (function () {
    function AuthGuard(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
        // this._loginService.isLoggedIn()
        // .subscribe(message => {
        //   console.log(message);
        //   if(message){
        //     return true;
        //   }
        // })
        // this._router.navigate(['/'])
        // return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;
var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  text-align: center;\r\n}\r\n\r\n.wrapper{\r\n  padding: 5% 5% 7%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\r\n  <h2>Let's get in touch</h2>\r\n  <div class=\"contact\">\r\n    <p>E-mail : <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a></p>\r\n    <p>Phone # : <a href=\"tel:1-626-759-4812\">(626) 759-4812</a></p>\r\n    <p>Address: 842 E Valley Blvd, Alhambra, CA 91801</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n  text-align: center;\r\n  font-family: 'Arial Black';\r\n  background: blue;\r\n}\r\n\r\nimg {\r\n  max-width: 4%;\r\n  margin: 0 0.3%;\r\n}\r\n\r\n.social a {\r\n  width: 25%;\r\n  max-width: 1%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.nav {\r\n  text-align: right;\r\n  width: 100%;\r\n  height: 35px;\r\n  background: #090a4c;\r\n  text-transform: uppercase;\r\n  font-family: 'Ropa Sans', sans-serif;\r\n  color: white;\r\n  font-size: 0.85em;\r\n}\r\n\r\n.nav-content {\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  -webkit-transform: translate(0, 60%);\r\n          transform: translate(0, 60%);\r\n}\r\n\r\n.trulia{\r\n  vertical-align: top;\r\n}\r\n\r\n.linkedin{\r\n  vertical-align: top;\r\n}\r\n\r\n.remax {\r\n  vertical-align: top;\r\n  margin-top: 0.1%;\r\n  max-width: 3%;\r\n}\r\n\r\n.social{\r\n  text-align: center;\r\n}\r\n\r\n/* DESKTOP */\r\n\r\n@media only screen and (min-width: 1025px) {\r\n  .nav-content {\r\n    font-size: 1.5em;\r\n    -webkit-transform: translate(0, 30%);\r\n            transform: translate(0, 30%);\r\n  }\r\n}\r\n\r\n/* MOBILE */\r\n\r\n@media only screen and (max-width: 414px) {\r\n\r\n  .nav-content {\r\n    text-align: center;\r\n  }\r\n\r\n  img{\r\n    max-width: 13%;\r\n    margin: 1%;\r\n  }\r\n\r\n  .remax{\r\n    margin: 1%;\r\n    max-width: 9%;\r\n  }\r\n}\r\n\r\n/* Smaller mobiles */\r\n\r\n@media only screen and (max-width: 375px) {\r\n  .nav-content {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"social\">\r\n  <a href=\"https://www.zillow.com/profile/brokertonyma/#reviews\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillow.png\" class=\"zillow\"></a>\r\n  <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/trulia.png\" class=\"trulia\"></a>\r\n  <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/google.png\" class=\"google\"></a>\r\n  <a href=\"https://www.linkedin.com/in/tonyma01/\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/linkedin.jpg\" class=\"linkedin\"></a>\r\n  <a href=\"http://global.remax.com/AgentProfile.aspx?AgentID=1005440052\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remax.jpg\" class=\"remax\"></a>\r\n</div>\r\n<!-- <p><a href=\"tel:1-626-759-4812\">(626) 759-4812</a> | <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a> | CalBRE #01931357</p> -->\r\n\r\n<div class=\"nav\">\r\n  <div class=\"nav-content\">\r\n    <a href=\"tel:1-626-759-4812\">(626) 759-4812</a> |\r\n    <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a> |\r\n    <a href=\"http://global.remax.com/AgentProfile.aspx?AgentID=1005440052\">CalBRE #01931357</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  margin : 0;\r\n  padding: 0;\r\n  font-family: 'Fjalla One', sans-serif;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.slide1, .slide2, .slide3 {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  letter-spacing: 5px;\r\n}\r\n\r\n.values, .testimonials, .properties {\r\n  padding: 9%;\r\n  width: 100%;\r\n}\r\n\r\n.values {\r\n  height: 700px;\r\n}\r\n\r\n.values div {\r\n  height: 33%;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.values h3 {\r\n  width: 39%;\r\n  margin: 0 auto 32px;\r\n  background: #080a58;\r\n  color: white;\r\n  font-weight: 600;\r\n  font-size: 25px;\r\n  letter-spacing: 2px;\r\n}\r\n\r\n.values h5 {\r\n  color: #080a58;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.values p {\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n  line-height: 1.25;\r\n  letter-spacing: 1px;\r\n  color: #000000d4;\r\n}\r\n\r\n.values img {\r\n  max-width: 13%;\r\n}\r\n\r\n.testimonials {\r\n  height: 700px;\r\n  background: #ffebd5;\r\n  color: #080a58;\r\n}\r\n\r\n.testimonials h3, .testimonials h4, .values h3, .properties h3 {\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  font-weight: 600;\r\n  border-radius: 3px;\r\n}\r\n\r\n.testimonials h3 {\r\n  font-size: 25px;\r\n}\r\n\r\n.testimonials p {\r\n  margin: 40px 0;\r\n  line-height: 1.2;\r\n  letter-spacing: 1px;\r\n  border: 4px solid white;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.testimonials img {\r\n  max-width: 16%;\r\n  margin: 10px 7px;\r\n}\r\n\r\n.testimonials h4 {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.properties {\r\n  height: 550px;\r\n}\r\n\r\n.properties h3 {\r\n  width: 50%;\r\n  margin: 0 auto 60px;\r\n  font-weight: 200;\r\n  background: #080a58;\r\n  color: white;\r\n  font-size: 25px;\r\n}\r\n\r\n.leftRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    left: 0;\r\n}\r\n\r\n.rightRs {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    -webkit-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n            box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\r\n    border-radius: 999px;\r\n    right: 0;\r\n}\r\n\r\n.tile {\r\n    margin-top: 45px;\r\n    min-height: 350px;\r\n    background-color: #ccc;\r\n    background-size: cover !important;\r\n}\r\n\r\n.browse {\r\n  padding: 7px;\r\n  font-size: 1em;\r\n  margin-top: 40px;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  background: #f28202;\r\n  border: #f28202;\r\n  border-radius: 5px;\r\n}\r\n\r\n.browse:hover {\r\n  background: #ce6e00;\r\n  border: #ce6e00;\r\n}\r\n\r\n/*DESKTOP*/\r\n\r\n@media only screen and (min-width: 1025px) {\r\n  .slider {\r\n    max-width: 100%;\r\n    height: 600px;\r\n    position: relative;\r\n  }\r\n  .slide1 {\r\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg)no-repeat center;\r\n    background-size: cover;\r\n    animation:fade 16s infinite;\r\n    -webkit-animation:fade 12s infinite;\r\n  }\r\n  .slide2 {\r\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house3.jpeg)no-repeat center;\r\n    background-size: cover;\r\n    animation:fade2 16s infinite;\r\n    -webkit-animation:fade2 12s infinite;\r\n  }\r\n  .slide3 {\r\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house1.jpeg)no-repeat center;\r\n    background-size: cover;\r\n    animation:fade3 16s infinite;\r\n    -webkit-animation:fade3 12s infinite;\r\n  }\r\n  @-webkit-keyframes fade\r\n  {\r\n    0%   {opacity:1}\r\n    33.333% { opacity: 0}\r\n    66.666% { opacity: 0}\r\n    100% { opacity: 1}\r\n  }\r\n  @keyframes fade\r\n  {\r\n    0%   {opacity:1}\r\n    33.333% { opacity: 0}\r\n    66.666% { opacity: 0}\r\n    100% { opacity: 1}\r\n  }\r\n  @-webkit-keyframes fade2\r\n  {\r\n    0%   {opacity:0}\r\n    33.333% { opacity: 1}\r\n    66.666% { opacity: 0 }\r\n    100% { opacity: 0}\r\n  }\r\n  @keyframes fade2\r\n  {\r\n    0%   {opacity:0}\r\n    33.333% { opacity: 1}\r\n    66.666% { opacity: 0 }\r\n    100% { opacity: 0}\r\n  }\r\n  @-webkit-keyframes fade3\r\n  {\r\n    0%   {opacity:0}\r\n    33.333% { opacity: 0}\r\n    66.666% { opacity: 1}\r\n    100% { opacity: 0}\r\n  }\r\n  @keyframes fade3\r\n  {\r\n    0%   {opacity:0}\r\n    33.333% { opacity: 0}\r\n    66.666% { opacity: 1}\r\n    100% { opacity: 0}\r\n  }\r\n\r\n  .slide1, .slide2, .slide3{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n  .slide1 h3 {\r\n    color: transparent;\r\n  }\r\n\r\n  .values {\r\n    padding: 5%;\r\n  }\r\n\r\n  .values h3 {\r\n    width: 55%;\r\n    margin-bottom: 10%;\r\n    font-size: 2em;\r\n  }\r\n\r\n  .values div {\r\n    display: inline-block;\r\n    width: 33%;\r\n  }\r\n\r\n  .values p {\r\n    width: 90%;\r\n    text-align: center;\r\n    margin: 13px auto;\r\n    font-size: 1em;\r\n  }\r\n\r\n  .testimonials {\r\n    height: 900px;\r\n    padding: 5%;\r\n  }\r\n\r\n  .testimonials h3 {\r\n    margin-bottom: 5%;\r\n    font-size: 2em;\r\n  }\r\n\r\n  .testimonials p {\r\n    display: inline-block !important;\r\n    width: 45%;\r\n    margin: 40px 10px 83px;\r\n    line-height: 1.2;\r\n    letter-spacing: 2px;\r\n    border: 6px solid white;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n  }\r\n\r\n  .testimonials h4 {\r\n    margin-bottom: 40px;\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .testimonials img {\r\n    max-width: 8%;\r\n    margin: 10px 40px;\r\n  }\r\n\r\n  .trulia {\r\n    margin-top: 0px !important;\r\n  }\r\n\r\n  .properties {\r\n    height: 1000px;\r\n  }\r\n\r\n  .properties h3 {\r\n    font-size: 2em;\r\n  }\r\n\r\n  .browse {\r\n    padding: 10px;\r\n    font-size: 1.25em;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n}\r\n\r\n/* MOBILE/TABLET */\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\r\n  .container {\r\n    text-align: center;\r\n  }\r\n\r\n  .slide1, .slide2, .slide3{\r\n    width: 100%;\r\n  }\r\n\r\n  .slider {\r\n    max-width: 100%;\r\n    height: 450px;\r\n    position: relative;\r\n  }\r\n  .slide1 {\r\n    background: -webkit-gradient( linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg);\r\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg);\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100%;\r\n  }\r\n\r\n  .slide1 h3 {\r\n    font-size: 1.75em;\r\n    color: white;\r\n    position: relative;\r\n    top: 40%;\r\n    line-height: 1.1;\r\n  }\r\n\r\n  .tile {\r\n    min-height: 200px;\r\n  }\r\n\r\n  .values {\r\n    height: 750px;\r\n  }\r\n\r\n  .properties h3 {\r\n    width: 60%;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@fadeInAnimation]>\r\n\r\n    <div class=\"slider\">\r\n\r\n      <div class=\"slide1\"><h3>FOR ALL YOUR REAL ESTATE NEEDS</h3></div>\r\n      <div class=\"slide2\"></div>\r\n      <div class=\"slide3\"></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"values\">\r\n\r\n\r\n      <h3>Core Values</h3>\r\n      <div>\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyknowledge.png\">\r\n        <h5>knowledge</h5>\r\n        <p>Strives with years of constant research, growth and understanding of the market </p>\r\n      </div>\r\n\r\n      <div>\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyfriendly.png\">\r\n        <h5>empathy</h5>\r\n        <p>Understands that every individual has different wants, needs, and expectations  </p>\r\n      </div>\r\n\r\n      <div>\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonytrust.png\">\r\n        <h5>trust</h5>\r\n        <p>Promotes a lifestyle and workflow with strong moral with an emphasis on ethics and zeal</p>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"testimonials\">\r\n\r\n      <h3>Testimonials</h3>\r\n      <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate...\" - Sally Zhen</p>\r\n      <p>\"...As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home...\" - Cassie Curtin\"</p>\r\n      <h4>See what others are saying about Tony</h4>\r\n      <a href=\"https://www.zillow.com/profile/brokertonyma/#reviews\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillowoj.png\"></a>\r\n      <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\"><img class=\"trulia\" src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/truliaoj.png\"></a>\r\n      <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/googleoj.png\"></a>\r\n\r\n    </div>\r\n\r\n    <div class=\"properties\">\r\n\r\n      <h3>Properties</h3>\r\n      <ngx-carousel [inputs]=\"carouselTile\">\r\n          <ngx-tile NgxCarouselItem *ngFor=\"let tile of carouselTileItems; let i = index;\">\r\n              <div class=\"tile\" [style.background]=\"'url(' + tile + ')'\">\r\n              </div>\r\n          </ngx-tile>\r\n          <button NgxCarouselPrev class=\"leftRs\">&lt;</button>\r\n          <button NgxCarouselNext class=\"rightRs\">&gt;</button>\r\n      </ngx-carousel>\r\n\r\n      <button class=\"browse\" routerLink=\"/properties\">Browse More</button>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var ng2_device_detector_1 = __webpack_require__("../../../../ng2-device-detector/index.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var LandingComponent = (function () {
    function LandingComponent(_listingService, http, deviceService) {
        this._listingService = _listingService;
        this.http = http;
        this.deviceService = deviceService;
        this.deviceInfo = null;
        this.carouselTileItems = [];
        this.checkDevice();
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getPropCarouselImgs();
        this.carouselTile = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 1,
            touch: true
        };
        if (this.deviceInfo == "unknown") {
            this.carouselTile.grid = { xs: 2, sm: 2, md: 2, lg: 2, all: 0 };
        }
        ;
    };
    LandingComponent.prototype.getPropCarouselImgs = function () {
        var _this = this;
        this._listingService.getAllActiveListings()
            .then(function (listings) {
            for (var i = 0; i < listings.length; i++) {
                _this.carouselTileItems.push(listings[i].paths[0]);
            }
        })
            .catch();
    };
    LandingComponent.prototype.checkDevice = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo().device;
        console.log(this.deviceInfo);
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _a || Object, typeof (_b = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _b || Object, typeof (_c = typeof ng2_device_detector_1.Ng2DeviceService !== "undefined" && ng2_device_detector_1.Ng2DeviceService) === "function" && _c || Object])
], LandingComponent);
exports.LandingComponent = LandingComponent;
var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"uploadfile\">\n    <h3>Select files</h3>\n      <div class=\"dropzonearea\">\n        <div ng2FileDrop\n        [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n        (fileOver)=\"fileOverBase($event)\"\n        [uploader]=\"uploader\"\n        class=\"dropzone\">\n        > Drop Images Here <\n      </div>\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple/>\n      <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n    </div>\n    <div *ngIf='showButton && this.files.length' class=\"addit\">\n      <button (click)='addMoreImages()'>Add</button>\n    </div>\n    <div *ngIf='!showButton || !this.files.length' class=\"dontadd\">\n      <button disabled='disabled'>Add</button>\n    </div>\n  <button (click)='toggleShow()'>Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var upload_service_1 = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var URL = '/api/upload';
var ListingEditAddImagesComponent = (function () {
    function ListingEditAddImagesComponent(_uploadService, _listingService) {
        this._uploadService = _uploadService;
        this._listingService = _listingService;
        this.showAdd = new core_1.EventEmitter();
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.showButton = false;
    }
    ListingEditAddImagesComponent.prototype.ngDoCheck = function () {
        this.uploader.queue.length == this.files.length ? this.showButton = true : this.showButton = false;
    };
    ListingEditAddImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.files = [];
        this.files_path = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            response = JSON.parse(response);
            _this.files.push(response);
            _this.files_path.push(response.location);
        };
    };
    ListingEditAddImagesComponent.prototype.toggleShow = function () {
        this.showAdd.emit();
    };
    ListingEditAddImagesComponent.prototype.addMoreImages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, images;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = {
                            paths: this.files_path,
                            id: this.showAddID
                        };
                        return [4 /*yield*/, this._listingService.addMoreImages(info)];
                    case 1:
                        images = _a.sent();
                        this.uploader.queue.length, this.files.length, this.files_path.length = 0;
                        this.toggleShow();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ListingEditAddImagesComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListingEditAddImagesComponent.prototype, "showAdd", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListingEditAddImagesComponent.prototype, "showAddID", void 0);
ListingEditAddImagesComponent = __decorate([
    core_1.Component({
        selector: 'app-listing-edit-add-images',
        template: __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" && _a || Object, typeof (_b = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _b || Object])
], ListingEditAddImagesComponent);
exports.ListingEditAddImagesComponent = ListingEditAddImagesComponent;
var _a, _b;
//# sourceMappingURL=listing-edit-add-images.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listings{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  width: 50%;\r\n}\r\n\r\nimg{\r\n  max-width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!showAdd\">\r\n  <div *ngIf='listings' class='listings'>\r\n    <h3 *ngIf='listings.length == 0'>Add Listings to get started</h3>\r\n    <table *ngIf='listings.length > 0'>\r\n      <tr>\r\n        <th>Address</th>\r\n        <th>Sold</th>\r\n        <th>Images</th>\r\n        <th>Add Image</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      <tr *ngFor='let listing of listings'>\r\n        <td (click)=\"showAddressForm()\" *ngIf='!showAddress'>{{ listing.address }}</td>\r\n        <td *ngIf='showAddress'>\r\n          <form (submit)='changeAddress(formData, listing._id)' #formData=\"ngForm\">\r\n            <textarea name=\"address\" rows=\"3\" cols=\"20\" value='listing.address' ngModel>asdfg</textarea>\r\n            <button>Apply</button>\r\n          </form>\r\n          <button (click)='showAddressForm()'>Cancel</button>\r\n        </td>\r\n        <td (click)=\"changeSoldStatus(listing._id)\"><button>{{ listing.sold }}</button></td>\r\n        <td *ngFor='let path of listing.paths'><a (click)=\"deleteImage(listing._id, path)\"><img src=\"{{ path }}\"></a></td>\r\n        <td><button (click)='toggleShow(listing._id)'>Add Image</button></td>\r\n        <td><button (click)=\"deleteListing(listing._id)\">Delete</button></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<app-listing-edit-add-images *ngIf=\"showAdd\" (showAdd)='toggleShow($event)' [showAddID]='showAddID'></app-listing-edit-add-images>\r\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var ListingEditComponent = (function () {
    function ListingEditComponent(_listingService) {
        this._listingService = _listingService;
        this.showAdd = false;
        this.showAddress = false;
    }
    ListingEditComponent.prototype.ngOnChanges = function () {
        console.log('change change');
    };
    ListingEditComponent.prototype.ngOnInit = function () {
        this.getListings();
    };
    ListingEditComponent.prototype.getListings = function () {
        var _this = this;
        this._listingService.getAllListings()
            .then(function (listings) { _this.listings = listings; })
            .catch();
    };
    ListingEditComponent.prototype.changeSoldStatus = function (id) {
        var _this = this;
        id = { id: id };
        this._listingService.changeSoldStatus(id)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    ListingEditComponent.prototype.deleteImage = function (id, path) {
        var _this = this;
        var info = { id: id, path: path };
        this._listingService.deleteImage(info)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    ListingEditComponent.prototype.deleteListing = function (id) {
        var _this = this;
        id = { id: id };
        this._listingService.deleteListing(id)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    ListingEditComponent.prototype.showAddressForm = function () {
        if (this.showAddress) {
            this.showAddress = false;
        }
        else {
            this.showAddress = true;
        }
    };
    ListingEditComponent.prototype.changeAddress = function (info) {
        var newInfo = info.value;
        console.log(newInfo);
        // if(newAddress.address == ''){
        //   this.error = "Address field can't be empty"
        // }else{
        //   this._listingService.changeAddress(newAddress)
        //   .then()
        //   .catch()
        // }
    };
    ListingEditComponent.prototype.toggleShow = function (id) {
        this.showAddID = id;
        if (this.showAdd == false) {
            this.showAdd = true;
        }
        else {
            this.getListings();
            this.showAdd = false;
        }
    };
    return ListingEditComponent;
}());
ListingEditComponent = __decorate([
    core_1.Component({
        selector: 'app-listing-edit',
        template: __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _a || Object])
], ListingEditComponent);
exports.ListingEditComponent = ListingEditComponent;
var _a;
//# sourceMappingURL=listing-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  vertical-align: top;\r\n}\r\n\r\nimg{\r\n  width: 80%;\r\n  height: auto;\r\n  margin-bottom: 3%;\r\n  display: inline-block;\r\n}\r\n\r\np{\r\n  margin-top: 25%;\r\n  display: inline-block;\r\n}\r\n\r\n.right {\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n}\r\n\r\n.left {\r\n    transform: rotate(135deg);\r\n    -webkit-transform: rotate(135deg);\r\n}\r\n\r\n.address {\r\n  margin: auto 0;\r\n  text-align: center;\r\n}\r\n\r\n/*Desktop*/\r\n\r\n@media only screen and (min-width: 1025px){\r\n  i {\r\n    border: solid red;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 25px;\r\n  }\r\n}\r\n\r\n/*Tablet*/\r\n\r\n@media (min-width: 415px) and (max-width: 1024px){\r\n  i {\r\n    border: solid red;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 20px;\r\n  }\r\n}\r\n\r\n/*Mobile*/\r\n\r\n@media only screen and (max-width: 414px){\r\n  i {\r\n    border: solid red;\r\n    border-width: 0 3px 3px 0;\r\n    display: inline-block;\r\n    padding: 8px;\r\n  }\r\n\r\n  h3{\r\n    font-size: 1em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeInAnimation]>\r\n  <div *ngIf=\"imageSources.length > 0\">\r\n    <p (click)=\"previousImage()\"><i class=\"left\"></i></p>\r\n    <img (click)=\"nextImage()\" src=\"{{ image }}\">\r\n    <p (click)=\"nextImage()\"><i class=\"right\"></i></p>\r\n  </div>\r\n  <div *ngIf=\"listing\">\r\n    <h3 class=\"address\" >{{ listing.address }}</h3>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var ListingShowComponent = (function () {
    function ListingShowComponent(_activatedRoute, _listingService) {
        this._activatedRoute = _activatedRoute;
        this._listingService = _listingService;
        this.imageSources = [];
        this.imageindex = 0;
    }
    ListingShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (param) { return _this.listingid = param.id; });
        this.getListing(this.listingid);
    };
    ListingShowComponent.prototype.getListing = function (listing) {
        var _this = this;
        this._listingService.getListing(listing)
            .then(function (listing) {
            _this.listing = listing;
            for (var i = 0; i < _this.listing.paths.length; i++) {
                _this.imageSources.push(_this.listing.paths[i]);
            }
            _this.image = _this.listing.paths[0];
        })
            .catch();
    };
    ListingShowComponent.prototype.nextImage = function () {
        if (this.listing.paths[this.imageindex + 1]) {
            this.image = this.listing.paths[this.imageindex + 1];
            this.imageindex++;
        }
        else {
            this.image = this.listing.paths[0];
            this.imageindex = 0;
        }
    };
    ListingShowComponent.prototype.previousImage = function () {
        if (this.listing.paths[this.imageindex - 1]) {
            this.image = this.listing.paths[this.imageindex - 1];
            this.imageindex--;
        }
        else {
            this.image = this.listing.paths[this.listing.paths.length - 1];
            this.imageindex = this.listing.paths.length - 1;
        }
    };
    return ListingShowComponent;
}());
ListingShowComponent = __decorate([
    core_1.Component({
        selector: 'app-listing-show',
        template: __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.css")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _b || Object])
], ListingShowComponent);
exports.ListingShowComponent = ListingShowComponent;
var _a, _b;
//# sourceMappingURL=listing-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\r\n  font-family: 'Arial';\r\n  text-align: center;\r\n}\r\n\r\n.wrapper{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.moreinfo{\r\n  display: block;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.listings a{\r\n  text-decoration: none;\r\n}\r\n\r\n/*Mobile*/\r\n\r\n@media only screen and (max-width: 414px) {\r\n  img{\r\n    max-width: 85%;\r\n  }\r\n\r\n  .moreinfo{\r\n    display: block;\r\n    color: white;\r\n    font-size: 0.9em;\r\n    width: 20%;\r\n    margin: -13% auto 23%;\r\n    outline: 2px solid white;\r\n  }\r\n}\r\n\r\n/* Mid Size Desktop */\r\n\r\n@media (min-width: 415px) and (max-width: 767px){\r\n  img{\r\n    max-width: 55%;\r\n  }\r\n\r\n  button{\r\n    font-size: 2em;\r\n  }\r\n\r\n  .listings img{\r\n    margin-bottom: -8%;\r\n  }\r\n\r\n  .moreinfo{\r\n    font-size: 1.75em;\r\n    width: 12%;\r\n    margin: 0 auto 8%;\r\n    color: white;\r\n    outline: 2px solid white;\r\n  }\r\n}\r\n\r\n/*Tablet*/\r\n\r\n@media (min-width: 768px) and (max-width: 1024px){\r\n  .search{\r\n    font-size: 2em;\r\n  }\r\n\r\n  img{\r\n    max-width: 85%;\r\n  }\r\n\r\n  button{\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  h1{\r\n    font-size: 4em;\r\n  }\r\n\r\n  .listings img{\r\n    margin-bottom: -10%;\r\n  }\r\n\r\n  .moreinfo{\r\n    font-size: 1.75em;\r\n    width: 12%;\r\n    margin: 0 auto 4%;\r\n    color: white;\r\n    outline: 2px solid white;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1025px){\r\n\r\n  button{\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  img{\r\n    max-width: 55%;\r\n  }\r\n\r\n  img:hover {\r\n    border: 5px solid red;\r\n  }\r\n\r\n  .moreinfo{\r\n    display: none;\r\n  }\r\n\r\n  .listings img:hover{\r\n    opacity: 0.5;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\r\n  <section class=\"search\">\r\n    <h3>Search By:</h3>\r\n    <button (click)=\"getActive()\">Active</button>\r\n    <button (click)=\"getSold()\">Sold</button>\r\n  </section>\r\n\r\n  <section>\r\n    <h1 *ngIf=\"active\">Active Properties</h1>\r\n    <h1 *ngIf=\"!active\">Sold Properties</h1>\r\n\r\n    <div *ngFor=\"let listing of listings\" class=\"listings\">\r\n      <a routerLink=\"/show/{{ listing._id }}\"><img src=\"{{ listing.paths[0] }}\"></a>\r\n      <a href=\"#\" class=\"moreinfo\">More info</a>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var ListingComponent = (function () {
    function ListingComponent(_listingService) {
        this._listingService = _listingService;
        this.active = true;
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getActive();
    };
    ListingComponent.prototype.getActive = function () {
        var _this = this;
        this._listingService.getAllActiveListings()
            .then(function (listings) {
            _this.listings = listings;
            _this.active = true;
        })
            .catch();
    };
    ListingComponent.prototype.getSold = function () {
        var _this = this;
        this._listingService.getAllSoldListings()
            .then(function (listings) {
            _this.listings = listings;
            _this.active = false;
        })
            .catch();
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    core_1.Component({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing.component.css")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _a || Object])
], ListingComponent);
exports.ListingComponent = ListingComponent;
var _a;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/Rx.js");
var ListingService = (function () {
    function ListingService(_http) {
        this._http = _http;
    }
    ListingService.prototype.getThreeListings = function () {
        return this._http.get("/api/getThreeListings")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.getAllActiveListings = function () {
        return this._http.get("/api/getActive")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.getAllSoldListings = function () {
        return this._http.get("/api/getSold")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.getListing = function (listing) {
        return this._http.get("/api/getListing/" + listing)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.getAllListings = function () {
        return this._http.get("/api/getAllListings")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.changeSoldStatus = function (id) {
        return this._http.post("/api/changeStatus", id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.deleteImage = function (info) {
        return this._http.post("/api/deleteImage", info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.deleteListing = function (id) {
        return this._http.post("/api/deleteListing", id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.addListing = function (address) {
        return this._http.post('/api/addlisting', address)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.addMoreImages = function (info) {
        return this._http.post('/api/addMoreImages', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ListingService.prototype.changeAddress = function (info) {
        return this._http.post('/api/changeAddress', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return ListingService;
}());
ListingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ListingService);
exports.ListingService = ListingService;
var _a;
//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n<form (submit)=\"login(formData)\" #formData=\"ngForm\">\r\n  <label>Username: <input type=\"text\" name=\"username\" ngModel></label>\r\n  <label>Password: <input type=\"password\" name=\"password\" ngModel></label>\r\n  <button>Login</button>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login/login.service.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var LoginComponent = (function () {
    function LoginComponent(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (info) {
        var _this = this;
        this._loginService.login(info.value)
            .then(function (success) {
            _this._loginService.setLoggedIn();
            _this._router.navigate(['/upload']);
        })
            .catch(function (err) {
            info.resetForm();
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/Rx.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
var LoginService = (function () {
    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    function LoginService(_http) {
        this._http = _http;
        this.loggedIn = new rxjs_1.BehaviorSubject(this.hasToken());
    }
    LoginService.prototype.hasToken = function () {
        return !!localStorage.getItem('token');
    };
    LoginService.prototype.login = function (info) {
        return this._http.post('/api/login', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    LoginService.prototype.setLoggedIn = function () {
        localStorage.setItem('token', 'JWT');
        this.loggedIn.next(true);
    };
    LoginService.prototype.logOut = function () {
        localStorage.removeItem('token');
        this.loggedIn.next(false);
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn.asObservable();
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], LoginService);
exports.LoginService = LoginService;
var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  font-family: 'Ropa Sans', sans-serif;\r\n  font-weight: 600;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.container {\r\n  width: 85%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.logo img {\r\n  margin: 14px 0;\r\n  width: 50%;\r\n}\r\n\r\n.topnav {\r\n  text-transform: uppercase;\r\n}\r\n\r\n.topnav a {\r\n  display: block;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n  color: #080a58\r\n}\r\n\r\n.topnav a:visited {\r\n  color: #080a58;\r\n}\r\n\r\n.topnav a:hover {\r\n  color: #f28109;\r\n}\r\n\r\n.active {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.topnav .icon {\r\n    display: none;\r\n}\r\n\r\n/* mobile device */\r\n\r\n@media screen and (max-width: 414px) {\r\n\r\n  .logo img {\r\n    display: block;\r\n  }\r\n\r\n  .topnav {\r\n    display: inline-block;\r\n  }\r\n\r\n  .topnav a {\r\n    display: none;\r\n    padding: 10px 12px;\r\n  }\r\n\r\n  .topnav a.icon {\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 9%;\r\n    display: block;\r\n  }\r\n\r\n  .topnav.responsive a.icon {\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 8%;\r\n  }\r\n\r\n  .responsive {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n\r\n  .topnav.responsive a {\r\n    display: inline-block;\r\n  }\r\n\r\n  .topnav-cont a {\r\n    border: 0.5px solid #080a58b0;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n\r\n/* tablet/desktop */\r\n\r\n@media screen and (min-width: 415px) {\r\n\r\n  .logo img {\r\n    width: 25%;\r\n    margin: -15px 0 0;\r\n  }\r\n\r\n  .topnav, .topnav a {\r\n    display: inline-block;\r\n    font-size: 1.1em;\r\n  }\r\n\r\n  .topnav {\r\n    width: 74.5%;\r\n    text-align: right;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .topnav a:last-child {\r\n    padding-right: 0;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <a routerLink=\"/\" class=\"logo\" (click)=\"close()\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tmhouse.png\"></a>\r\n\r\n  <div class=\"topnav\" id=\"Nav\">\r\n    <a href=\"javascript:void(0);\" class=\"icon\" id=\"icon\" (click)=\"changeResponsive()\">&#9776;</a>\r\n\r\n      <div class=\"topnav-cont\" (click)=\"closeMenu()\">\r\n        <a routerLink=\"/properties\">Properties</a>\r\n        <a routerLink=\"/about\">About</a>\r\n        <a routerLink=\"/contact\">Contact</a>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.changeResponsive = function () {
        var x = document.getElementById("Nav");
        var y = document.getElementById("icon");
        if (x.className === "topnav") {
            x.className += " responsive";
            y.innerHTML = "X";
        }
        else {
            x.className = "topnav";
            y.innerHTML = "&#9776";
        }
    };
    NavbarComponent.prototype.closeMenu = function () {
        var x = document.getElementById("Nav");
        var y = document.getElementById("icon");
        x.className = "topnav";
        y.innerHTML = "&#9776";
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  font-family: 'Ropa Sans', sans-serif;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n\r\n.nav {\r\n  text-align: right;\r\n  width: 100%;\r\n  height: 35px;\r\n  background: #080a58;\r\n  text-transform: uppercase;\r\n  color: white;\r\n}\r\n\r\n.nav-content {\r\n  width: 85%;\r\n  margin: 0 auto;\r\n  -webkit-transform: translate(0, 50%);\r\n          transform: translate(0, 50%);\r\n}\r\n\r\n.nav:not(first-child) {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.nav-content div {\r\n  display: inline-block;\r\n}\r\n\r\n@media (min-width: 1025px) {\r\n  .nav {\r\n    height: 45px;\r\n  }\r\n\r\n  .nav-content {\r\n    -webkit-transform: translate(0, 40%);\r\n            transform: translate(0, 40%);\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n\r\n@media (max-width: 414px) {\r\n  .nav-content {\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n/* Smaller mobiles */\r\n\r\n@media only screen and (max-width: 375px) {\r\n  .nav-content {\r\n    font-size: 0.9em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\r\n\r\n  <div class=\"nav-content\">\r\n    <a href=\"tel:1-626-759-4812\">(626) 759-4812</a> |\r\n    <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a> |\r\n    <div *ngIf=\"!loggedIn\">\r\n      <a routerLink=\"/login\">Log In</a>\r\n    </div>\r\n    <div *ngIf=\"loggedIn\">\r\n      <a (click)=\"logout()\">Logout</a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"nav\" *ngIf=\"loggedIn\">\r\n    <div class=\"nav-content\">\r\n      <a routerLink=\"/upload\">Add Listing</a> |\r\n      <a routerLink=\"/editlisting\">Edit Listing</a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var login_service_1 = __webpack_require__("../../../../../src/app/login/login.service.ts");
var TopNavbarComponent = (function () {
    function TopNavbarComponent(_loginService) {
        var _this = this;
        this._loginService = _loginService;
        this.subscription = this._loginService.isLoggedIn()
            .subscribe(function (loggedin) {
            _this.loggedIn = loggedin;
        });
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        this.getLoggedIn();
    };
    TopNavbarComponent.prototype.getLoggedIn = function () {
        if (localStorage.getItem('token')) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    TopNavbarComponent.prototype.logout = function () {
        this._loginService.logOut();
        this.loggedIn = false;
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-top-navbar',
        template: __webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object])
], TopNavbarComponent);
exports.TopNavbarComponent = TopNavbarComponent;
var _a;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\r\n  padding: 2%;\r\n  text-align: center;\r\n}\r\n\r\n/*.buttons{\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}*/\r\n\r\n.dontadd, .addit{\r\n  display: inline-block;\r\n}\r\n\r\n.info{\r\n  outline: 2px solid red;\r\n  padding: 3%;\r\n}\r\n\r\n.dropzone{\r\n  outline: 2px dotted red;\r\n  padding: 10% 0;\r\n}\r\n\r\n.uploadfile, .showqueue, .uploadedalready, .showqueue, .info, .dropzonearea{\r\n  outline: 2px solid red;\r\n  width: 50%;\r\n  padding: 3%;\r\n  margin: 2% auto;\r\n}\r\n\r\n.addit, .dontadd{\r\n  padding: 3%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"error\">\r\n  {{error}}\r\n</div>\r\n<div class=\"wrapper\">\r\n  <form (submit)=\"addListing(formData)\" #formData=\"ngForm\">\r\n    <div class=\"buttons\">\r\n    <button (click)='cancel(ngForm)' type=\"button\">Cancel</button>\r\n    <div *ngIf='showButton && this.files.length' class=\"addit\">\r\n      <button>Add</button>\r\n    </div>\r\n    <div *ngIf='!showButton || !this.files.length' class=\"dontadd\">\r\n      <button disabled='disabled'>Add</button>\r\n    </div>\r\n  </div>\r\n\r\n    <div class=\"info\">\r\n      <p>\r\n        Address: <input type=\"text\" name=\"address\" ngModel>\r\n      </p>\r\n      <p>\r\n        Sold? <input type=\"checkbox\" name=\"sold\" ngModel>\r\n      </p>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"uploadfile\">\r\n    <h3>Select files</h3>\r\n      <div class=\"dropzonearea\">\r\n        <div ng2FileDrop\r\n        [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n        (fileOver)=\"fileOverBase($event)\"\r\n        [uploader]=\"uploader\"\r\n        class=\"dropzone\">\r\n        > Drop Images Here <\r\n      </div>\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n    </div>\r\n    <div class=\"showqueue\">\r\n      <h3>Upload queue</h3>\r\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Actions</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n            <td><strong>{{ item?.file?.name }}</strong></td>\r\n            <td>\r\n              <button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\r\n              <button (click)=\"item.remove()\">Remove</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\r\n      <button type=\"button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">Cancel all</button>\r\n      <button type=\"button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">Clear Queue</button>\r\n    </div>\r\n\r\n    <div class=\"uploadedalready\">\r\n      <table>\r\n        <th (click)='print()'>Name</th>\r\n        <th>Image</th>\r\n        <th>Action</th>\r\n        <div *ngIf = \"files\">\r\n          <div *ngFor = \"let file of files\" class=\"showuploaded\">\r\n            <td>{{ file.originalname }}</td>\r\n            <td><img src=\"{{ file.location }}\" width=\"25%\"></td>\r\n            <button type=\"button\" (click)=\"deleteListingImage(file.originalname, file.size, file.key)\">Delete</button>\r\n          </div>\r\n        </div>\r\n      </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var upload_service_1 = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
var listing_service_1 = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
var URL = '/api/upload';
var UploadComponent = (function () {
    function UploadComponent(_uploadService, _listingService) {
        this._uploadService = _uploadService;
        this._listingService = _listingService;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.showButton = false;
    }
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.ngDoCheck = function () {
        this.uploader.queue.length == this.files.length ? this.showButton = true : this.showButton = false;
    };
    UploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.files = [];
        this.files_path = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            response = JSON.parse(response);
            _this.files.push(response);
            _this.files_path.push(response.location);
        };
    };
    UploadComponent.prototype.addListing = function (address) {
        var _this = this;
        address.value["paths"] = this.files_path;
        if (address.value.sold === '') {
            address.value.sold = false;
        }
        this._listingService.addListing(address.value)
            .then(function () {
            _this.uploader.clearQueue();
            address.resetForm();
            _this.files = [];
            _this.files_path = [];
        })
            .catch(function (err) {
            return _this.error = err._body;
        });
    };
    UploadComponent.prototype.deleteListingImage = function (originalName, size, s3Name) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].key == s3Name) {
                this.files.splice(i, 1);
            }
        }
        for (var i = 0; i < this.uploader.queue.length; i++) {
            if (this.uploader.queue[i]._file.name == originalName && this.uploader.queue[i]._file.size == size) {
                this.uploader.queue.splice(i, 1);
                break;
            }
        }
        s3Name = { s3Name: s3Name };
        this._uploadService.removeImage(s3Name)
            .then()
            .catch();
    };
    UploadComponent.prototype.cancel = function () {
        var _this = this;
        this.files_path.forEach(function (s3Name) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._uploadService.removeImage({ s3Name: s3Name })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        location.reload();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" && _a || Object, typeof (_b = typeof listing_service_1.ListingService !== "undefined" && listing_service_1.ListingService) === "function" && _b || Object])
], UploadComponent);
exports.UploadComponent = UploadComponent;
var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/Rx.js");
var UploadService = (function () {
    function UploadService(_http) {
        this._http = _http;
    }
    UploadService.prototype.addListing = function (address) {
        return this._http.post('/api/addlisting', address)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    UploadService.prototype.removeImage = function (key) {
        return this._http.post('/api/removeImage', key)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return UploadService;
}());
UploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], UploadService);
exports.UploadService = UploadService;
var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map