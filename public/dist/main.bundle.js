webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
// import the required animation functions from the angular animations module

var fadeInAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
        // css styles at start of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* animate */])('0.7s', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ opacity: 1 }))
    ]),
]);
//# sourceMappingURL=fade-in.animation.js.map

/***/ }),

/***/ "../../../../../src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__("../../../../../src/app/_animations/fade-in.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  margin: 0;\n  padding: 0;\n  font-family: 'Arial';\n}\n\n/* Tablet/Desktop */\n@media only screen and (min-width: 415px) {\n  .wrapper{\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  section{\n    padding: 3%;\n  }\n\n  .top{\n    display: inline-block;\n    position: relative;\n  }\n\n  .top img{\n    width: 25%;\n    display: inline-block;\n  }\n\n  .top h3{\n    width: 60%;\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n    position: relative;\n    padding: 3%;\n  }\n\n  .testimonials{\n    text-align: center;\n    margin: 2%;\n  }\n\n  .testimonials h3, p{\n    padding: 2%;\n  }\n\n  p{\n    font-size: 1.5em;\n  }\n}\n\n/* MOBILE */\n@media only screen and (max-width: 414px) {\n  .wrapper{\n    margin: 0 auto;\n    text-align: center;\n    max-width: 90%;\n  }\n\n  section{\n    padding: 3%;\n  }\n\n  .top h3{\n    margin-top: 9%;\n    font-size: 1.33em;\n  }\n\n  h2, p, button{\n    margin: 5% 0;\n  }\n\n  .test{\n    font-size: 1.33em;\n    text-decoration: red underline;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\n\n  <section>\n    <div class=\"top\">\n      <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyprofile.jpg\">\n      <h3>\"My mission is to guide my current and prospective clients through the process of any of their real estate needs. I know that there's a lot of ambiguity when dealing with real estate. With my years of experience and knowledge, I can help answer any questions and guide you through the process, step by step. Whether you're buying or selling, I invite you to contact me, so that I may show you why my past clients have trusted and continuously trust me with their ventures.\"</h3>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"testimonials\">\n      <h2>Testimonials</h2>\n      <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\" - Sally Zhen</p>\n      <p>\"Tony is THE BEST! As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home. Throughout the process, Tony explained everything clearly to make sure I was up to speed and on the same page..\" - Cassie Curtin</p>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listing_listing_show_listing_show_component__ = __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__listing_listing_edit_listing_edit_component__ = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'upload', canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__["a" /* UploadComponent */] },
    { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__["a" /* ListingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_6__listing_listing_show_listing_show_component__["a" /* ListingShowComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'editlisting', component: __WEBPACK_IMPORTED_MODULE_7__listing_listing_edit_listing_edit_component__["a" /* ListingEditComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-top-navbar></app-top-navbar>\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__listing_listing_show_listing_show_component__ = __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__listing_listing_edit_listing_edit_component__ = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__upload_upload_service__ = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__listing_listing_edit_listing_edit_add_images_listing_edit_add_images_component__ = __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__top_navbar_top_navbar_component__ = __webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_file_upload_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_8__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_10__listing_listing_component__["a" /* ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__listing_listing_show_listing_show_component__["a" /* ListingShowComponent */],
            __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__listing_listing_edit_listing_edit_component__["a" /* ListingEditComponent */],
            __WEBPACK_IMPORTED_MODULE_22__listing_listing_edit_listing_edit_add_images_listing_edit_add_images_component__["a" /* ListingEditAddImagesComponent */],
            __WEBPACK_IMPORTED_MODULE_23__top_navbar_top_navbar_component__["a" /* TopNavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_carousel__["a" /* NgxCarouselModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19__upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_20__listing_listing_service__["a" /* ListingService */], __WEBPACK_IMPORTED_MODULE_18__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_21__auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  text-align: center;\n}\n\n.wrapper{\n  padding: 5% 5% 7%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\n  <h2>Let's get in touch</h2>\n  <div class=\"contact\">\n    <p>E-mail : <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a></p>\n    <p>Phone # : <a href=\"tel:1-626-759-4812\">(626) 759-4812</a></p>\n    <p>Address: 842 E Valley Blvd, Alhambra, CA 91801</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_1__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n  text-align: center;\n  font-family: 'Arial Black';\n}\n\nimg{\n  max-width: 4%;\n  margin: 0 0.3%;\n}\n\na{\n  width: 25%;\n  max-width: 1%;\n}\n\n.trulia{\n  vertical-align: top;\n}\n\n.linkedin{\n  vertical-align: top;\n}\n\n.remax {\n  vertical-align: top;\n  margin-top: 0.1%;\n  max-width: 3%;\n}\n\n.social{\n  text-align: center;\n}\n\n/* MOBILE */\n@media only screen and (max-width: 414px) {\n  *{\n    font-size: 0.75em;\n  }\n\n  img{\n    max-width: 13%;\n    margin: 1%;\n  }\n\n  .remax{\n    margin: 1%;\n    max-width: 9%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a href=\"tel:1-626-759-4812\">(626) 759-4812</a> | <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a> | CalBRE #01931357</p>\n<div class=\"social\">\n  <a href=\"https://www.zillow.com/profile/brokertonyma/#reviews\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillow.png\" class=\"zillow\"></a>\n  <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/trulia.png\" class=\"trulia\"></a>\n  <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/google.png\" class=\"google\"></a>\n  <a href=\"https://www.linkedin.com/in/tonyma01/\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/linkedin.jpg\" class=\"linkedin\"></a>\n  <a href=\"http://global.remax.com/AgentProfile.aspx?AgentID=1005440052\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remax.jpg\" class=\"remax\"></a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin : 0;\n  padding: 0;\n  font-family: 'Fjalla One', sans-serif;\n  box-sizing: border-box;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n.top{\n  width: 100%;\n}\n\n.slide1,.slide2,.slide3{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  letter-spacing: 5px;\n}\n\n.description, .testimonials, .properties {\n  padding: 10%;\n  width: 100%;\n  height: 550px;\n}\n\n.description div{\n  height: 33%;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n\n.description h3 {\n  width: 40%;\n  margin: 0 auto 60px;\n  font-weight: 200;\n  background: #080a58;\n  color: white;\n}\n\n.description h5 {\n  color: #080a58;\n}\n\n.description img {\n  max-width: 13%;\n}\n\n.testimonials {\n  background: #ffebd5;\n  color: #080a58;\n}\n\n.testimonials h3, .testimonials h4, .description h3, .properties h3 {\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n\n.testimonials p {\n  margin: 20px 0;\n  line-height: 1.2;\n  border: 3px solid white;\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.testimonials img{\n  max-width: 16%;\n  margin: 10px 7px;\n}\n\n.properties h3 {\n  width: 50%;\n  margin: 0 auto 60px;\n  font-weight: 200;\n  background: #080a58;\n  color: white;\n}\n\n.leftRs {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    left: 0;\n}\n\n.rightRs {\n    position: absolute;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    width: 50px;\n    height: 50px;\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, .3);\n    border-radius: 999px;\n    right: 0;\n}\n\n.tile {\n    min-height: 350px;\n    background-color: #ccc;\n    background-size: cover !important;\n}\n\n.tile h1 {\n    text-align: center;\n    line-height: 200px;\n    background: rgba(0, 0, 0, 0.32);\n    color: white;\n    margin: 0;\n}\n\n\n\n\n\n\n\n/*DESKTOP/TABLET*/\n@media only screen and (min-width: 768px) {\n  .slider {\n    max-width: 100%;\n    height: 600px;\n    position: relative;\n  }\n  .slide1 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade 16s infinite;\n    -webkit-animation:fade 12s infinite;\n  }\n  .slide2 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house3.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade2 16s infinite;\n    -webkit-animation:fade2 12s infinite;\n  }\n  .slide3 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house1.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade3 16s infinite;\n    -webkit-animation:fade3 12s infinite;\n  }\n  @-webkit-keyframes fade\n  {\n    0%   {opacity:1}\n    33.333% { opacity: 0}\n    66.666% { opacity: 0}\n    100% { opacity: 1}\n  }\n  @keyframes fade\n  {\n    0%   {opacity:1}\n    33.333% { opacity: 0}\n    66.666% { opacity: 0}\n    100% { opacity: 1}\n  }\n  @-webkit-keyframes fade2\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 1}\n    66.666% { opacity: 0 }\n    100% { opacity: 0}\n  }\n  @keyframes fade2\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 1}\n    66.666% { opacity: 0 }\n    100% { opacity: 0}\n  }\n  @-webkit-keyframes fade3\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 0}\n    66.666% { opacity: 1}\n    100% { opacity: 0}\n  }\n  @keyframes fade3\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 0}\n    66.666% { opacity: 1}\n    100% { opacity: 0}\n  }\n\n  .slide1, .slide2, .slide3{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n  .slide1 h3{\n    color: transparent;\n  }\n\n  .router{\n    color: black;\n    border: 2px solid #dadada;\n    font-size: 1.25rem;\n    padding: .5em 1.85em;\n    text-decoration: none;\n  }\n}\n\n/* MOBILE */\n@media only screen and (max-width: 767px) {\n\n  section{\n    text-align: center;\n  }\n\n  .slide1, .slide2, .slide3{\n    width: 100%;\n  }\n\n  .slider {\n    max-width: 100%;\n    height: 400px;\n    position: relative;\n  }\n  .slide1 {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg);\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n  }\n\n  .slide1 h3{\n    font-size: 1.75em;\n    color: white;\n    position: relative;\n    top: 40%;\n  }\n\n  .router{\n    color: black;\n    border: 2px solid #dadada;\n    font-size: 1rem;\n    padding: .5em 1.85em;\n    text-decoration: none;\n  }\n\n  .tile {\n      min-height: 200px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"top\" [@fadeInAnimation]>\n<div class=\"slider\">\n  <div class=\"slide1\"><h3>FOR ALL YOUR REAL ESTATE NEEDS</h3></div>\n  <div class=\"slide2\"></div>\n  <div class=\"slide3\"></div>\n</div>\n<div class=\"description\">\n  <h3>Tony is</h3>\n  <div>\n    <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyknowledge.png\">\n    <h5>knowledgeable</h5>\n  </div>\n  <div>\n    <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyfriendly.png\">\n    <h5>friendly</h5>\n  </div>\n  <div>\n    <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonytrust.png\">\n    <h5>trustworthy</h5>\n  </div>\n</div>\n<div class=\"testimonials\">\n  <h3>Testimonials</h3>\n  <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate...\" - Sally Zhen</p>\n  <p>\"...As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home...\" - Cassie Curtin\"</p>\n  <h4>See what others are saying about Tony</h4>\n  <a href=\"https://www.zillow.com/profile/brokertonyma/#reviews\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillowoj.png\"></a>\n  <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/truliaoj.png\"></a>\n  <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/googleoj.png\"></a>\n</div>\n<div class=\"properties\">\n  <h3>Properties</h3>\n\n  <ngx-carousel [inputs]=\"carouselTile\">\n      <ngx-tile NgxCarouselItem *ngFor=\"let tile of carouselTileItems; let i = index;\">\n          <div class=\"tile\" [style.background]=\"'url(' + tile + ')'\">\n          </div>\n      </ngx-tile>\n      <button NgxCarouselPrev class=\"leftRs\">&lt;</button>\n      <button NgxCarouselNext class=\"rightRs\">&gt;</button>\n  </ngx-carousel>\n\n\n</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = (function () {
    function LandingComponent(_listingService) {
        this._listingService = _listingService;
        this.carouselTileItems = [];
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getActive();
        this.carouselTile = {
            grid: { xs: 2, sm: 2, md: 2, lg: 2, all: 0 },
            speed: 600,
            interval: 3000,
            point: {
                visible: true,
                pointStyles: "\n          .ngxcarouselPoint {\n            list-style-type: none;\n            text-align: center;\n            padding: 12px;\n            margin: 0;\n            white-space: nowrap;\n            overflow: auto;\n            box-sizing: border-box;\n          }\n          .ngxcarouselPoint li {\n            display: inline-block;\n            border-radius: 50%;\n            border: 2px solid rgba(0, 0, 0, 0.55);\n            padding: 4px;\n            margin: 0 3px;\n            transition-timing-function: cubic-bezier(.17, .67, .83, .67);\n            transition: .4s;\n          }\n          .ngxcarouselPoint li.active {\n              background: #6b6b6b;\n              transform: scale(1.2);\n          }\n        "
            },
            load: 1,
            touch: true
        };
    };
    LandingComponent.prototype.getActive = function () {
        var _this = this;
        this._listingService.getAllActiveListings()
            .then(function (listings) {
            for (var i = 0; i < listings.length; i++) {
                _this.carouselTileItems.push(listings[i].paths[0]);
            }
        })
            .catch();
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__["a" /* ListingService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_upload_service__ = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingEditAddImagesComponent; });
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




var URL = '/api/upload';
var ListingEditAddImagesComponent = (function () {
    function ListingEditAddImagesComponent(_uploadService, _listingService) {
        this._uploadService = _uploadService;
        this._listingService = _listingService;
        this.showAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ListingEditAddImagesComponent.prototype, "showAdd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListingEditAddImagesComponent.prototype, "showAddID", void 0);
ListingEditAddImagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing-edit-add-images',
        template: __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit-add-images/listing-edit-add-images.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__upload_upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__["a" /* ListingService */]) === "function" && _b || Object])
], ListingEditAddImagesComponent);

var _a, _b;
//# sourceMappingURL=listing-edit-add-images.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listings{\n  margin: 0 auto;\n  text-align: center;\n  width: 50%;\n}\n\nimg{\n  max-width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!showAdd\">\n  <div *ngIf='listings' class='listings'>\n    <h3 *ngIf='listings.length == 0'>Add Listings to get started</h3>\n    <table *ngIf='listings.length > 0'>\n      <tr>\n        <th>Address</th>\n        <th>Sold</th>\n        <th>Images</th>\n        <th>Add Image</th>\n        <th>Action</th>\n      </tr>\n      <tr *ngFor='let listing of listings'>\n        <td (click)=\"showAddressForm()\" *ngIf='!showAddress'>{{ listing.address }}</td>\n        <td *ngIf='showAddress'>\n          <form (submit)='changeAddress(formData, listing._id)' #formData=\"ngForm\">\n            <textarea name=\"address\" rows=\"3\" cols=\"20\" value='listing.address' ngModel>asdfg</textarea>\n            <button>Apply</button>\n          </form>\n          <button (click)='showAddressForm()'>Cancel</button>\n        </td>\n        <td (click)=\"changeSoldStatus(listing._id)\"><button>{{ listing.sold }}</button></td>\n        <td *ngFor='let path of listing.paths'><a (click)=\"deleteImage(listing._id, path)\"><img src=\"{{ path }}\"></a></td>\n        <td><button (click)='toggleShow(listing._id)'>Add Image</button></td>\n        <td><button (click)=\"deleteListing(listing._id)\">Delete</button></td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n<app-listing-edit-add-images *ngIf=\"showAdd\" (showAdd)='toggleShow($event)' [showAddID]='showAddID'></app-listing-edit-add-images>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-edit/listing-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing-edit',
        template: __webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-edit/listing-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */]) === "function" && _a || Object])
], ListingEditComponent);

var _a;
//# sourceMappingURL=listing-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  margin: 0 auto;\n  text-align: center;\n  vertical-align: top;\n}\n\nimg{\n  width: 80%;\n  height: auto;\n  margin-bottom: 3%;\n  display: inline-block;\n}\n\np{\n  margin-top: 25%;\n  display: inline-block;\n}\n\n.right {\n    transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n}\n\n.left {\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n}\n\n.address {\n  margin: auto 0;\n  text-align: center;\n}\n\n/*Desktop*/\n@media only screen and (min-width: 1025px){\n  i {\n    border: solid red;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 25px;\n  }\n}\n\n/*Tablet*/\n@media (min-width: 415px) and (max-width: 1024px){\n  i {\n    border: solid red;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 20px;\n  }\n}\n\n/*Mobile*/\n@media only screen and (max-width: 414px){\n  i {\n    border: solid red;\n    border-width: 0 3px 3px 0;\n    display: inline-block;\n    padding: 8px;\n  }\n\n  h3{\n    font-size: 1em;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeInAnimation]>\n  <div *ngIf=\"imageSources.length > 0\">\n    <p (click)=\"previousImage()\"><i class=\"left\"></i></p>\n    <img (click)=\"nextImage()\" src=\"{{ image }}\">\n    <p (click)=\"nextImage()\"><i class=\"right\"></i></p>\n  </div>\n  <div *ngIf=\"listing\">\n    <h3 class=\"address\" >{{ listing.address }}</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing-show',
        template: __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_3__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__listing_service__["a" /* ListingService */]) === "function" && _b || Object])
], ListingShowComponent);

var _a, _b;
//# sourceMappingURL=listing-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  font-family: 'Arial';\n  text-align: center;\n}\n\n.wrapper{\n  margin: 0 auto;\n  text-align: center;\n}\n\n.moreinfo{\n  display: block;\n  text-transform: uppercase;\n}\n\n.listings a{\n  text-decoration: none;\n}\n\n/*Mobile*/\n@media only screen and (max-width: 414px) {\n  img{\n    max-width: 85%;\n  }\n\n  .moreinfo{\n    display: block;\n    color: white;\n    font-size: 0.9em;\n    width: 20%;\n    margin: -13% auto 23%;\n    outline: 2px solid white;\n  }\n}\n\n/* Mid Size Desktop */\n@media (min-width: 415px) and (max-width: 767px){\n  img{\n    max-width: 55%;\n  }\n\n  button{\n    font-size: 2em;\n  }\n\n  .listings img{\n    margin-bottom: -8%;\n  }\n\n  .moreinfo{\n    font-size: 1.75em;\n    width: 12%;\n    margin: 0 auto 8%;\n    color: white;\n    outline: 2px solid white;\n  }\n}\n\n/*Tablet*/\n@media (min-width: 768px) and (max-width: 1024px){\n  .search{\n    font-size: 2em;\n  }\n\n  img{\n    max-width: 85%;\n  }\n\n  button{\n    font-size: 1.5em;\n  }\n\n  h1{\n    font-size: 4em;\n  }\n\n  .listings img{\n    margin-bottom: -10%;\n  }\n\n  .moreinfo{\n    font-size: 1.75em;\n    width: 12%;\n    margin: 0 auto 4%;\n    color: white;\n    outline: 2px solid white;\n  }\n}\n\n@media only screen and (min-width: 1025px){\n\n  button{\n    font-size: 1.5em;\n  }\n\n  img{\n    max-width: 55%;\n  }\n\n  img:hover {\n    border: 5px solid red;\n  }\n\n  .moreinfo{\n    display: none;\n  }\n\n  .listings img:hover{\n    opacity: 0.5;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [@fadeInAnimation]>\n  <section class=\"search\">\n    <h3>Search By:</h3>\n    <button (click)=\"getActive()\">Active</button>\n    <button (click)=\"getSold()\">Sold</button>\n  </section>\n\n  <section>\n    <h1 *ngIf=\"active\">Active Properties</h1>\n    <h1 *ngIf=\"!active\">Sold Properties</h1>\n\n    <div *ngFor=\"let listing of listings\" class=\"listings\">\n      <a routerLink=\"/show/{{ listing._id }}\"><img src=\"{{ listing.paths[0] }}\"></a>\n      <a href=\"#\" class=\"moreinfo\">More info</a>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_index__ = __webpack_require__("../../../../../src/app/_animations/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing.component.css")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__animations_index__["a" /* fadeInAnimation */]],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_service__["a" /* ListingService */]) === "function" && _a || Object])
], ListingComponent);

var _a;
//# sourceMappingURL=listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListingService);

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

module.exports = "<form (submit)=\"login(formData)\" #formData=\"ngForm\">\n  <h2>Login</h2>\n  <label>Username: <input type=\"text\" name=\"username\" ngModel></label>\n  <label>Password: <input type=\"password\" name=\"password\" ngModel></label>\n  <button>Login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            .then(function (success) { _this._loginService.setLoggedIn(); _this._router.navigate(['/upload']); })
            .catch(function (err) { info.resetForm(); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    /**
     * if we have token the user is loggedIn
     * @returns {boolean}
     */
    function LoginService(_http) {
        this._http = _http;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](this.hasToken());
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Ropa Sans', sans-serif;\n  font-weight: 600;\n}\n\n.container {\n  width: 85%;\n  margin: 0 auto;\n}\n\n.logo img {\n  margin: 12px 0;\n  width: 50%;\n}\n\n/* Style the links inside the navigation bar */\n.topnav a {\n    display: block;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n    color: #080a58\n}\n\n/* Change the color of links on hover */\n.topnav a:hover {\n    /* color: #f28109; */\n}\n\n.topnav a:visited {\n  color: #080a58;\n}\n\n/* Add an active class to highlight the current page */\n.active {\n    background-color: #4CAF50;\n    color: white;\n}\n\n/* Hide the link that should open and close the topnav on small screens */\n.topnav .icon {\n    display: none;\n}\n\n/* When the screen is less than 600 pixels wide, hide all links, except for the first one (\"Home\"). Show the link that contains should open and close the topnav (.icon) */\n@media screen and (max-width: 600px) {\n  .logo img {display: block;}\n  .topnav {display: inline-block;}\n  .topnav a {display: none;}\n  .topnav a.icon {\n    position: absolute;\n    right: 5%;\n    top: 8%;\n    display: block;\n  }\n}\n\n/* The \"responsive\" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */\n@media screen and (max-width: 600px) {\n  .topnav.responsive a.icon {\n    position: absolute;\n    right: 5%;\n    top: 8%;\n  }\n\n  .responsive {\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\n  }\n  .topnav.responsive a {\n    display: inline-block;\n  }\n  .topnav-cont a {\n    border: 0.5px solid #080a58b0;\n    margin-bottom: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/\" class=\"logo\" (click)=\"close()\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tmhouse.png\"></a>\n  <div class=\"topnav\" id=\"myTopnav\">\n      <a href=\"javascript:void(0);\" class=\"icon\" id=\"icon\" (click)=\"myFunction()\">&#9776;</a>\n      <div class=\"topnav-cont\" (click)=\"close()\">\n      <a routerLink=\"/properties\">Properties</a>\n      <a routerLink=\"/about\">About</a>\n      <a routerLink=\"/contact\">Contact</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
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
    NavbarComponent.prototype.close = function () {
        var x = document.getElementById("myTopnav");
        var y = document.getElementById("icon");
        x.className = "topnav";
        y.innerHTML = "&#9776";
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav {\n  text-align: right;\n  width: 100%;\n  height: 35px;\n  background: #080a58;\n  text-transform: uppercase;\n  font-family: 'Ropa Sans', sans-serif;\n  color: white;\n}\n\n.nav-content {\n  width: 85%;\n  margin: 0 auto;\n  -webkit-transform: translate(0, 50%);\n          transform: translate(0, 50%);\n}\n\n.nav:not(first-child) {\n  margin-bottom: 20px;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\n.nav-content div {\n  display: inline-block;\n}\n\n@media (max-width: 1024px) {\n  .nav-content {\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <div class=\"nav-content\">\n    <a href=\"tel:1-626-759-4812\">(626) 759-4812</a> |\n    <a href=\"mailto:brokertonyma@gmail.com\">brokertonyma@gmail.com</a> |\n    <div *ngIf=\"!loggedIn\">\n      <a routerLink=\"/login\">Log In</a>\n    </div>\n    <div *ngIf=\"loggedIn\">\n      <a (click)=\"logout()\">Logout</a>\n    </div>\n  </div>\n  <div class=\"nav\" *ngIf=\"loggedIn\">\n    <div class=\"nav-content\">\n      <a routerLink=\"/upload\">Add Listing</a> |\n      <a routerLink=\"/editlisting\">Edit Listing</a> |\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/top-navbar/top-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavbarComponent = (function () {
    function TopNavbarComponent(_loginService) {
        var _this = this;
        this._loginService = _loginService;
        this.subscription = this._loginService.isLoggedIn().subscribe(function (loggedin) { _this.loggedIn = loggedin; });
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        this.getLoggedIn();
        console.log(this.loggedIn);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-navbar',
        template: __webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-navbar/top-navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], TopNavbarComponent);

var _a;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper{\n  padding: 2%;\n  text-align: center;\n}\n\n/*.buttons{\n  margin: 0 auto;\n  text-align: center;\n}*/\n\n.dontadd, .addit{\n  display: inline-block;\n}\n\n.info{\n  outline: 2px solid red;\n  padding: 3%;\n}\n\n.dropzone{\n  outline: 2px dotted red;\n  padding: 10% 0;\n}\n\n.uploadfile, .showqueue, .uploadedalready, .showqueue, .info, .dropzonearea{\n  outline: 2px solid red;\n  width: 50%;\n  padding: 3%;\n  margin: 2% auto;\n}\n\n.addit, .dontadd{\n  padding: 3%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"error\">\n  {{error}}\n</div>\n<div class=\"wrapper\">\n  <form (submit)=\"addListing(formData)\" #formData=\"ngForm\">\n    <div class=\"buttons\">\n    <button (click)='cancel(ngForm)' type=\"button\">Cancel</button>\n    <div *ngIf='showButton && this.files.length' class=\"addit\">\n      <button>Add</button>\n    </div>\n    <div *ngIf='!showButton || !this.files.length' class=\"dontadd\">\n      <button disabled='disabled'>Add</button>\n    </div>\n  </div>\n\n    <div class=\"info\">\n      <p>\n        Address: <input type=\"text\" name=\"address\" ngModel>\n      </p>\n      <p>\n        Sold? <input type=\"checkbox\" name=\"sold\" ngModel>\n      </p>\n    </div>\n  </form>\n\n  <div class=\"uploadfile\">\n    <h3>Select files</h3>\n      <div class=\"dropzonearea\">\n        <div ng2FileDrop\n        [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n        (fileOver)=\"fileOverBase($event)\"\n        [uploader]=\"uploader\"\n        class=\"dropzone\">\n        > Drop Images Here <\n      </div>\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n    </div>\n    <div class=\"showqueue\">\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n            <td><strong>{{ item?.file?.name }}</strong></td>\n            <td>\n              <button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\n              <button (click)=\"item.remove()\">Remove</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n      <button type=\"button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">Cancel all</button>\n      <button type=\"button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">Clear Queue</button>\n    </div>\n\n    <div class=\"uploadedalready\">\n      <table>\n        <th (click)='print()'>Name</th>\n        <th>Image</th>\n        <th>Action</th>\n        <div *ngIf = \"files\">\n          <div *ngFor = \"let file of files\" class=\"showuploaded\">\n            <td>{{ file.originalname }}</td>\n            <td><img src=\"{{ file.location }}\" width=\"25%\"></td>\n            <button type=\"button\" (click)=\"deleteListingImage(file.originalname, file.size, file.key)\">Delete</button>\n          </div>\n        </div>\n      </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_service__ = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
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




var URL = '/api/upload';
var UploadComponent = (function () {
    function UploadComponent(_uploadService, _listingService) {
        this._uploadService = _uploadService;
        this._listingService = _listingService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__listing_listing_service__["a" /* ListingService */]) === "function" && _b || Object])
], UploadComponent);

var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/upload/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UploadService);

var _a;
//# sourceMappingURL=upload.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map