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

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  margin: 0;\n  padding: 0;\n  font-family: 'Arial';\n}\n\n/* MOBILE */\n@media only screen and (min-width: 415px) {\n  .wrapper{\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  section{\n    padding: 3%;\n  }\n\n  .top{\n    display: inline-block;\n  }\n\n  .top img{\n    width: 22%;\n    display: inline-block;\n  }\n\n  .top h1{\n    width: 70%;\n    display: inline-block;\n    text-align: center;\n    vertical-align: top;\n    margin-top: 1%;\n    padding: 3%;\n  }\n\n  .testimonials{\n    text-align: center;\n    margin: 2%;\n  }\n\n  .testimonials h2, p{\n    padding: 2%;\n  }\n\n  p{\n    font-size: 1.5em;\n  }\n}\n\n/* MOBILE */\n@media only screen and (max-width: 414px) {\n  .wrapper{\n    margin: 0 auto;\n    text-align: center;\n    max-width: 90%;\n  }\n\n  section{\n    padding: 3%;\n  }\n\n  .top h1{\n    margin-top: 9%;\n    font-size: 1.33em;\n  }\n\n  h2, p, button{\n    margin: 5% 0;\n  }\n\n  h2{\n    font-size: 1.33em;\n    text-decoration: red underline;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <section>\n    <div class=\"top\">\n      <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonyprofile.jpg\">\n      <h1>\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" - Tony Ma</h1>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"testimonials\">\n      <h2>Testimonials</h2>\n      <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\" - Sally Zhen</p>\n      <p>\"Tony is THE BEST! As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home. Throughout the process, Tony explained everything clearly to make sure I was up to speed and on the same page..\" - Cassie Curtin</p>\n    </div>\n  </section>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_2__upload_upload_component__["a" /* UploadComponent */] },
    { path: 'properties', component: __WEBPACK_IMPORTED_MODULE_4__listing_listing_component__["a" /* ListingComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_6__listing_listing_show_listing_show_component__["a" /* ListingShowComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  margin : 0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_upload_component__ = __webpack_require__("../../../../../src/app/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__upload_upload_service__ = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__ = __webpack_require__("../../../../../src/app/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__listing_listing_show_listing_show_component__ = __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileSelectDirective"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileDropDirective"],
            __WEBPACK_IMPORTED_MODULE_8__upload_upload_component__["a" /* UploadComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__listing_listing_component__["a" /* ListingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__listing_listing_show_listing_show_component__["a" /* ListingShowComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular4_carousel__["a" /* CarouselModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__upload_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_12__listing_listing_service__["a" /* ListingService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

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

module.exports = "<p>tony@tony-ma.com | (626)759-4812 | CalBRE #01931357</p>\n<div class=\"social\">\n  <a href=\"https://www.zillow.com/profile/brokertonyma/#reviews\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillow.png\" class=\"zillow\"></a>\n  <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/trulia.png\" class=\"trulia\"></a>\n  <a href=\"https://www.linkedin.com/in/tonyma01/\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/linkedin.jpg\" class=\"linkedin\"></a>\n  <a href=\"http://global.remax.com/AgentProfile.aspx?AgentID=1005440052\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remax.jpg\" class=\"remax\"></a>\n</div>\n"

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
exports.push([module.i, "* {\n  margin : 0;\n  padding: 0;\n  font-family: 'Fjalla One', sans-serif;\n}\n\nhtml, body {\n  margin: 0;\n  padding: 0;\n}\n\n#wrapper {\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: rgba(255, 235, 219, 0.73);\n}\n\n.top{\n  width: 100%;\n}\n\n.slide1,.slide2,.slide3{\n  position: absolute;\n  width: 85%;\n  height: 100%;\n}\n\n/*DESKTOP/TABLET*/\n@media only screen and (min-width: 768px) {\n  .slider {\n    max-width: 100%;\n    height: 600px;\n    position: relative;\n  }\n  .slide1 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade 8s infinite;\n    -webkit-animation:fade 6s infinite;\n  }\n  .slide2 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house3.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade2 8s infinite;\n    -webkit-animation:fade2 6s infinite;\n  }\n  .slide3 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/house1.jpeg)no-repeat center;\n    background-size: cover;\n    animation:fade3 8s infinite;\n    -webkit-animation:fade3 6s infinite;\n  }\n  @-webkit-keyframes fade\n  {\n    0%   {opacity:1}\n    33.333% { opacity: 0}\n    66.666% { opacity: 0}\n    100% { opacity: 1}\n  }\n  @keyframes fade\n  {\n    0%   {opacity:1}\n    33.333% { opacity: 0}\n    66.666% { opacity: 0}\n    100% { opacity: 1}\n  }\n  @-webkit-keyframes fade2\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 1}\n    66.666% { opacity: 0 }\n    100% { opacity: 0}\n  }\n  @keyframes fade2\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 1}\n    66.666% { opacity: 0 }\n    100% { opacity: 0}\n  }\n  @-webkit-keyframes fade3\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 0}\n    66.666% { opacity: 1}\n    100% { opacity: 0}\n  }\n  @keyframes fade3\n  {\n    0%   {opacity:0}\n    33.333% { opacity: 0}\n    66.666% { opacity: 1}\n    100% { opacity: 0}\n  }\n\n  .slide1, .slide2, .slide3{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n  .slide1 h3{\n    color: transparent;\n  }\n\n  .router{\n    color: black;\n    border: 2px solid #dadada;\n    font-size: 1.25rem;\n    padding: .5em 1.85em;\n    text-decoration: none;\n  }\n}\n\n/* MOBILE */\n@media only screen and (max-width: 767px) {\n\n  section{\n    text-align: center;\n  }\n\n  .slide1, .slide2, .slide3{\n    width: 100%;\n  }\n\n  .slider {\n    border: 2px solid green;\n    max-width: 100%;\n    height: 400px;\n    position: relative;\n  }\n  .slide1 {\n    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s3-us-west-1.amazonaws.com/mean-realestate/house4.jpeg);\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n  }\n\n  .slide1 h3{\n    font-size: 1.75em;\n    color: white;\n    position: relative;\n    top: 40%;\n  }\n\n  .router{\n    color: black;\n    border: 2px solid #dadada;\n    font-size: 1rem;\n    padding: .5em 1.85em;\n    text-decoration: none;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "    <section class=\"top\">\n      <div class=\"slider\">\n        <div class=\"slide1\"><h3>\"Make your dream home a reality\"</h3></div>\n        <div class=\"slide2\"></div>\n        <div class=\"slide3\"></div>\n      </div>\n    </section>\n<!-- <div *ngIf=\"imageSources.length == 3\">\n  <div style=\"width: 800px; height: 400px\">\n    <carousel [sources]=\"imageSources\" [config]=\"config\">\n    </carousel>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
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
        this.threelisting = [];
        this.testimonial = "\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\" - Sally Zhen";
        this.imageSources = [];
        this.config = {
            verifyBeforeLoad: false,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_2_angular4_carousel__["b" /* AnimationConfig */].SLIDE,
            autoplay: false,
            autoplayDelay: 500,
            stopAutoplayMinWidth: 768
        };
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.getThree();
    };
    LandingComponent.prototype.getThree = function () {
        var _this = this;
        this._listingService.getThreeListings()
            .then(function (listings) {
            _this.threelisting = listings;
            for (var i = 0; i < _this.threelisting.length; i++) {
                _this.imageSources.push(_this.threelisting[i].paths[0]);
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
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__["a" /* ListingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__listing_listing_service__["a" /* ListingService */]) === "function" && _a || Object])
], LandingComponent);

var _a;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 800px; height: 400px\">\n  <carousel [sources]=\"imageSources\" [config]=\"config\"></carousel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing-show/listing-show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__ = __webpack_require__("../../../../angular4-carousel/index.ts");
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
    function ListingShowComponent() {
        this.imageSources = [""];
        this.config = {
            verifyBeforeLoad: true,
            log: false,
            animation: true,
            animationType: __WEBPACK_IMPORTED_MODULE_1_angular4_carousel__["b" /* AnimationConfig */].SLIDE,
            autoplay: false,
            autoplayDelay: 2000,
            stopAutoplayMinWidth: 768
        };
    }
    ListingShowComponent.prototype.ngOnInit = function () {
    };
    return ListingShowComponent;
}());
ListingShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing-show',
        template: __webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing-show/listing-show.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListingShowComponent);

//# sourceMappingURL=listing-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  font-family: 'Arial';\n  text-align: center;\n}\n\n.wrapper{\n  margin: 0 auto;\n  text-align: center;\n}\n\n.moreinfo{\n  display: block;\n  text-transform: uppercase;\n}\n\n.listings a{\n  text-decoration: none;\n}\n\n/*Mobile*/\n@media only screen and (max-width: 414px) {\n  img{\n    max-width: 85%;\n  }\n\n  .moreinfo{\n    display: block;\n    color: white;\n    font-size: 0.9em;\n    width: 20%;\n    margin: -13% auto 23%;\n  }\n}\n\n/* Mid Size Desktop */\n@media (min-width: 415px) and (max-width: 767px){\n  img{\n    max-width: 55%;\n  }\n\n  button{\n    font-size: 2em;\n  }\n\n  .listings img{\n    margin-bottom: -8%;\n  }\n\n  .moreinfo{\n    font-size: 1.75em;\n    width: 12%;\n    margin: 0 auto 8%;\n    color: white;\n    outline: 2px solid white;\n  }\n}\n\n/*Tablet*/\n@media (min-width: 768px) and (max-width: 1024px){\n  .search{\n    font-size: 2em;\n  }\n\n  button{\n    font-size: 1.5em;\n  }\n\n  h1{\n    font-size: 4em;\n  }\n\n  .listings img{\n    margin-bottom: -10%;\n  }\n\n  .moreinfo{\n    margin: 0 auto 4%;\n    color: white;\n    outline: 2px solid white;\n  }\n}\n\n@media only screen and (min-width: 1025px){\n\n  img{\n    max-width: 55%;\n  }\n\n  .moreinfo{\n    display: none;\n  }\n\n  .listings img:hover{\n    opacity: 0.5;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <section class=\"search\">\n    <h3>Search By:</h3>\n    <button (click)=\"getActive()\">Active</button>\n    <button (click)=\"getSold()\">Sold</button>\n  </section>\n\n  <section>\n    <h1 *ngIf=\"active\">Active Properties</h1>\n    <h1 *ngIf=\"!active\">Sold Properties</h1>\n\n    <div *ngFor=\"let listing of listings\" class=\"listings\">\n      <a routerLink=\"/show/{{ listing._id }}\"><img src=\"{{ listing.paths[0] }}\"></a>\n      <a href=\"#\" class=\"moreinfo\">More info</a>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_service__ = __webpack_require__("../../../../../src/app/listing/listing.service.ts");
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
            .then(function (listings) { _this.listings = listings; _this.active = true; })
            .catch();
    };
    ListingComponent.prototype.getSold = function () {
        var _this = this;
        this._listingService.getAllSoldListings()
            .then(function (listings) { _this.listings = listings; _this.active = false; })
            .catch();
    };
    return ListingComponent;
}());
ListingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listing',
        template: __webpack_require__("../../../../../src/app/listing/listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listing/listing.component.css")]
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
    return ListingService;
}());
ListingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ListingService);

var _a;
//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*{\n  text-align: center;\n}\n\n.wrapper{\n  text-align: center;\n  padding: 3%;\n}\n\n.logo{\n  font-size: 5em;\n  color: black;\n  text-decoration: none;\n}\n\n/* Add a black background color to the top navigation */\n.topnav {\n    background-color: white;\n    overflow: hidden;\n}\n\n/* Style the links inside the navigation bar */\n.topnav a {\n    color: black;\n    font-size: 1.75em;\n    text-decoration: none;\n    font-family: 'Arial';\n}\n\nspan{\n  font-size: 1.75em;\n}\n\n/* Change the color of links on hover */\n.topnav a:hover {\n  color: black;\n  text-decoration: red underline;\n}\n\n/* Add a color to the active/current link */\n.topnav a.active {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.topnav img{\n  width: 17%;\n  padding: 1% 0.85%;\n}\n\nspan{\n  vertical-align: top;\n}\n\n/* MOBILE */\n@media only screen and (max-width: 414px) {\n  *{\n    font-size: 0.75em;\n  }\n\n  img{\n    max-width: 95%;\n  }\n\n  .topnav a{\n    text-decoration: red underline;\n  }\n\n  figcaption{\n    position: relative;\n    border: 2px solid black;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <a routerLink=\"/\" class=\"logo\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remaxelite.png\"></a>\n  <div class=\"topnav\" id=\"myTopnav\">\n    <a routerLink=\"/properties\">Properties</a><span class=\"divider\"> |</span>\n    <a routerLink=\"/about\">About</a><span class=\"divider\"> |</span>\n    <a routerLink=\"/contact\">Contact</a>\n  </div>\n</div>\n"

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

/***/ "../../../../../src/app/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <title></title>\n  </head>\n  <body>\n    <div *ngIf = \"error\">\n      {{error}}\n    </div>\n    <form (submit)=\"addListing(formData)\" #formData=\"ngForm\">\n      Address: <input type=\"text\" name=\"address\" ngModel>\n      Sold? <input type=\"checkbox\" name=\"sold\" ngModel>\n    <div class=\"\">\n      <div ng2FileDrop\n      [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n      (fileOver)=\"fileOverBase($event)\"\n      [uploader]=\"uploader\"\n      class=\"well my-drop-zone\">\n      Base drop zone\n    </div>\n    </div>\n\n    <h3>Select files</h3>\n\n    <div class=\"\">\n      Multiple\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\n      Single\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n      <h3>Upload queue</h3>\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\n    </div>\n\n    <div class=\"\">\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n            <td><strong>{{ item?.file?.name }}</strong></td>\n            <td>\n              <button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button>\n              <button (click)=\"item.remove()\">Remove</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"\">\n      <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n      <button type=\"button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">Cancel all</button>\n      <button type=\"button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">Clear Queue</button>\n    </div>\n\n    <div class=\"\">\n      <table>\n        <th>Name</th>\n        <th>Image</th>\n        <th>Action</th>\n\t<div *ngIf = \"files\">\n        <div *ngFor = \"let file of files\">\n          <td>{{ file.originalname }}</td>\n          <td><img src=\"{{ file.location }}\" width=\"25%\"></td>\n          <button type=\"button\" (click)=\"deleteListing(file.key)\">Delete</button>\n        </div>\n\t</div>\n      </table>\n    </div>\n    <button>Hello</button>\n  </form>\n\n  </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload_service__ = __webpack_require__("../../../../../src/app/upload/upload.service.ts");
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



var URL = '/api/upload';
var UploadComponent = (function () {
    function UploadComponent(_uploadService) {
        this._uploadService = _uploadService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: URL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
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
        this._uploadService.addListing(address.value)
            .then()
            .catch(function (err) { return _this.error = err._body; });
        console.log(this.error);
        this.uploader.clearQueue();
        address.resetForm();
        this.files = [];
        this.files_path = [];
    };
    UploadComponent.prototype.deleteListing = function (key) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].key == key) {
                this.files.splice(i, 1);
            }
        }
        key = { key: key };
        this._uploadService.removeImage(key)
            .then()
            .catch();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/upload/upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__upload_service__["a" /* UploadService */]) === "function" && _a || Object])
], UploadComponent);

var _a;
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