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
var upload_component_1 = __webpack_require__("../../../../../src/app/components/_admin/upload/upload.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
var properties_component_1 = __webpack_require__("../../../../../src/app/components/properties/properties.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
var properties_show_component_1 = __webpack_require__("../../../../../src/app/components/properties/properties-show/properties-show.component.ts");
var properties_edit_component_1 = __webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/_admin/login/login.component.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
var routes = [
    { path: '', component: landing_component_1.LandingComponent },
    { path: 'upload', canActivate: [auth_guard_1.AuthGuard], component: upload_component_1.UploadComponent },
    { path: 'properties', component: properties_component_1.PropertiesComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'show/:id', component: properties_show_component_1.PropertiesShowComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'editlisting', component: properties_edit_component_1.PropertiesEditComponent },
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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Oswald', sans-serif; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
var ng2_file_upload_1 = __webpack_require__("../../../../ng2-file-upload/index.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var upload_component_1 = __webpack_require__("../../../../../src/app/components/_admin/upload/upload.component.ts");
var about_component_1 = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
var properties_component_1 = __webpack_require__("../../../../../src/app/components/properties/properties.component.ts");
var landing_component_1 = __webpack_require__("../../../../../src/app/components/landing/landing.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var properties_show_component_1 = __webpack_require__("../../../../../src/app/components/properties/properties-show/properties-show.component.ts");
var properties_edit_component_1 = __webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit.component.ts");
var contact_component_1 = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/_admin/login/login.component.ts");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var upload_service_1 = __webpack_require__("../../../../../src/app/services/upload.service.ts");
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
var message_service_1 = __webpack_require__("../../../../../src/app/services/message.service.ts");
var auth_guard_1 = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
var properties_edit_add_images_component_1 = __webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.ts");
var ngx_carousel_1 = __webpack_require__("../../../../ngx-carousel/index.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var ng2_device_detector_1 = __webpack_require__("../../../../ng2-device-detector/index.js");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            // FileSelectDirective,
            // FileDropDirective,
            upload_component_1.UploadComponent,
            about_component_1.AboutComponent,
            properties_component_1.PropertiesComponent,
            landing_component_1.LandingComponent,
            navbar_component_1.NavbarComponent,
            footer_component_1.FooterComponent,
            properties_show_component_1.PropertiesShowComponent,
            contact_component_1.ContactComponent,
            login_component_1.LoginComponent,
            properties_edit_component_1.PropertiesEditComponent,
            properties_edit_add_images_component_1.PropertiesEditAddImagesComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            animations_1.BrowserAnimationsModule,
            ngx_carousel_1.NgxCarouselModule,
            ng2_device_detector_1.Ng2DeviceDetectorModule.forRoot(),
            core_2.AgmCoreModule.forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyAyGRgKEeUMHzVkwwZ0JZ7y03NaZ1_RG0o'
            }),
            ng2_file_upload_1.FileUploadModule
        ],
        exports: [ng2_file_upload_1.FileUploadModule],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        providers: [upload_service_1.UploadService, properties_service_1.PropertiesService, login_service_1.LoginService, message_service_1.MessageService, auth_guard_1.AuthGuard, core_2.GoogleMapsAPIWrapper],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/_admin/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"row\">\r\n\r\n      <h2>Admin Login</h2>\r\n      <form (submit)=\"login(formData)\" #formData=\"ngForm\">\r\n        <label>Username <input type=\"text\" name=\"username\" ngModel></label>\r\n        <label>Password <input type=\"password\" name=\"password\" ngModel></label>\r\n        <button>Login</button>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/_admin/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  color: #080a58;\n  text-align: center; }\n\n.container {\n  min-height: 500px;\n  padding: 15px; }\n\n.wrapper {\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff;\n  padding: 15px; }\n\nform label, form input {\n  margin: 0 auto;\n  text-align: center;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_admin/login/login.component.ts":
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
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
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
        template: __webpack_require__("../../../../../src/app/components/_admin/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_admin/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"uploadfile\">\n    <h3>Select files</h3>\n      <!-- <div class=\"dropzonearea\">\n        <div ng2FileDrop\n        [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n        (fileOver)=\"fileOverBase($event)\"\n        [uploader]=\"uploader\"\n        class=\"dropzone\">\n        > Drop Images Here <\n      </div> -->\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple/>\n      <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload all</button>\n    </div>\n    <div *ngIf='showButton && this.files.length' class=\"addit\">\n      <button (click)='addMoreImages()'>Add</button>\n    </div>\n    <div *ngIf='!showButton || !this.files.length' class=\"dontadd\">\n      <button disabled='disabled'>Add</button>\n    </div>\n  <button (click)='toggleShow()'>Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.ts":
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
var upload_service_1 = __webpack_require__("../../../../../src/app/services/upload.service.ts");
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
var URL = '/api/upload';
var PropertiesEditAddImagesComponent = (function () {
    function PropertiesEditAddImagesComponent(_uploadService, _listingService) {
        this._uploadService = _uploadService;
        this._listingService = _listingService;
        this.showAdd = new core_1.EventEmitter();
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.showButton = false;
    }
    PropertiesEditAddImagesComponent.prototype.ngDoCheck = function () {
        this.uploader.queue.length == this.files.length ? this.showButton = true : this.showButton = false;
    };
    PropertiesEditAddImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.files = [];
        this.files_path = [];
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            response = JSON.parse(response);
            _this.files.push(response);
            _this.files_path.push(response.location);
        };
    };
    PropertiesEditAddImagesComponent.prototype.toggleShow = function () {
        this.showAdd.emit();
    };
    PropertiesEditAddImagesComponent.prototype.addMoreImages = function () {
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
    return PropertiesEditAddImagesComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PropertiesEditAddImagesComponent.prototype, "showAdd", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PropertiesEditAddImagesComponent.prototype, "showAddID", void 0);
PropertiesEditAddImagesComponent = __decorate([
    core_1.Component({
        selector: 'app-properties-edit-add-images',
        template: __webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit-add-images/properties-edit-add-images.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" && _a || Object, typeof (_b = typeof properties_service_1.PropertiesService !== "undefined" && properties_service_1.PropertiesService) === "function" && _b || Object])
], PropertiesEditAddImagesComponent);
exports.PropertiesEditAddImagesComponent = PropertiesEditAddImagesComponent;
var _a, _b;
//# sourceMappingURL=properties-edit-add-images.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"!showAdd\">\r\n  <div *ngIf='listings' class='listings'>\r\n    <h3 *ngIf='listings.length == 0'>Add Listings to get started</h3>\r\n    <table *ngIf='listings.length > 0'>\r\n      <tr>\r\n        <th>Address</th>\r\n        <th>Sold</th>\r\n        <th>Images</th>\r\n        <th>Add Image</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      <tr *ngFor='let listing of listings'>\r\n        <td (click)=\"showAddressForm()\" *ngIf='!showAddress'>{{ listing.address }}</td>\r\n        <td *ngIf='showAddress'>\r\n          <form (submit)='changeAddress(formData, listing._id)' #formData=\"ngForm\">\r\n            <textarea name=\"address\" rows=\"3\" cols=\"20\" value='listing.address' ngModel>asdfg</textarea>\r\n            <button>Apply</button>\r\n          </form>\r\n          <button (click)='showAddressForm()'>Cancel</button>\r\n        </td>\r\n        <td (click)=\"changeSoldStatus(listing._id)\"><button>{{ listing.sold }}</button></td>\r\n        <td *ngFor='let path of listing.paths'><a (click)=\"deleteImage(listing._id, path)\"><img src=\"{{ path }}\"></a></td>\r\n        <td><button (click)='toggleShow(listing._id)'>Add Image</button></td>\r\n        <td><button (click)=\"deleteListing(listing._id)\">Delete</button></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<app-listing-edit-add-images *ngIf=\"showAdd\" (showAdd)='toggleShow($event)' [showAddID]='showAddID'></app-listing-edit-add-images>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listings {\n  margin: 0 auto;\n  text-align: center;\n  width: 50%; }\n\nimg {\n  max-width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_admin/properties-edit/properties-edit.component.ts":
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
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
var PropertiesEditComponent = (function () {
    function PropertiesEditComponent(_listingService) {
        this._listingService = _listingService;
        this.showAdd = false;
        this.showAddress = false;
    }
    PropertiesEditComponent.prototype.ngOnChanges = function () {
        console.log('change change');
    };
    PropertiesEditComponent.prototype.ngOnInit = function () {
        this.getListings();
    };
    PropertiesEditComponent.prototype.getListings = function () {
        var _this = this;
        this._listingService.getAllListings()
            .then(function (listings) { _this.listings = listings; })
            .catch();
    };
    PropertiesEditComponent.prototype.changeSoldStatus = function (id) {
        var _this = this;
        id = { id: id };
        this._listingService.changeSoldStatus(id)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    PropertiesEditComponent.prototype.deleteImage = function (id, path) {
        var _this = this;
        var info = { id: id, path: path };
        this._listingService.deleteImage(info)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    PropertiesEditComponent.prototype.deleteListing = function (id) {
        var _this = this;
        id = { id: id };
        this._listingService.deleteListing(id)
            .then(function () { return _this.getListings(); })
            .catch();
    };
    PropertiesEditComponent.prototype.showAddressForm = function () {
        if (this.showAddress) {
            this.showAddress = false;
        }
        else {
            this.showAddress = true;
        }
    };
    PropertiesEditComponent.prototype.changeAddress = function (info) {
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
    PropertiesEditComponent.prototype.toggleShow = function (id) {
        this.showAddID = id;
        if (this.showAdd == false) {
            this.showAdd = true;
        }
        else {
            this.getListings();
            this.showAdd = false;
        }
    };
    return PropertiesEditComponent;
}());
PropertiesEditComponent = __decorate([
    core_1.Component({
        selector: 'app-properties-edit',
        template: __webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_admin/properties-edit/properties-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof properties_service_1.PropertiesService !== "undefined" && properties_service_1.PropertiesService) === "function" && _a || Object])
], PropertiesEditComponent);
exports.PropertiesEditComponent = PropertiesEditComponent;
var _a;
//# sourceMappingURL=properties-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/_admin/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"wrapper\">\r\n\r\n    <div *ngIf = \"error\">\r\n      {{error}}\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-md-6 uploadContainer\">\r\n\r\n        <div class=\"selectFiles\">\r\n          <h2 class=\"numbers\">Step 1 - Select files</h2>\r\n          <div class=\"selectFilesContainer\">\r\n            <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"btn btn-md\" multiple  />\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"verifyFiles\">\r\n          <h2 class=\"numbers\">Step 2 - Verify and upload</h2>\r\n\r\n          <p>Amount of images: {{ uploader?.queue?.length }}</p>\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <!-- <th>Actions</th> -->\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of uploader.queue\">\r\n                <td><strong>{{ item?.file?.name }}</strong></td>\r\n                <td>\r\n                  <!-- <button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">Upload</button> -->\r\n                  <button (click)=\"item.remove()\">Remove</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <button type=\"button\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">Upload</button>\r\n          <!-- <button type=\"button\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">Cancel all</button>\r\n          <button type=\"button\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">Clear Queue</button> -->\r\n        </div>\r\n\r\n        <div class=\"uploadedalready\">\r\n          <table>\r\n            <th>Name</th>\r\n            <th>Image</th>\r\n            <th>Action</th>\r\n            <div *ngIf = \"files\">\r\n              <div *ngFor = \"let file of files\" class=\"showuploaded\">\r\n                <td>{{ file.originalname }}</td>\r\n                <td><img src=\"{{ file.location }}\"></td>\r\n                <button type=\"button\" (click)=\"deleteListingImage(file.originalname, file.size, file.key)\">Delete</button>\r\n              </div>\r\n            </div>\r\n          </table>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-md-6\">\r\n        <h2 class=\"numbers\">Step 3 - Add Info To Your Listing</h2>\r\n\r\n        <form (submit)=\"addListing(formData)\" #formData=\"ngForm\">\r\n          <div class=\"info\">\r\n            <p>\r\n              Address: <input type=\"text\" name=\"address\" ngModel>\r\n            </p>\r\n            <p>\r\n              Has It Been Sold? <input type=\"checkbox\" name=\"sold\" ngModel>\r\n            </p>\r\n          </div>\r\n          <h2 class=\"numbers\">Step 4 - Add or Reset</h2>\r\n          <!-- <div class=\"buttons\"> -->\r\n            <button (click)='cancel(formData)' type=\"button\">Cancel</button>\r\n            <div *ngIf='showButton && this.files.length' class=\"addit\">\r\n              <button>Add</button>\r\n            </div>\r\n            <div *ngIf='!showButton || !this.files.length' class=\"dontadd\">\r\n              <button disabled='disabled'>Add</button>\r\n            </div>\r\n            <button (click)=\"removeAllImages()\">ASD</button>\r\n          <!-- </div> -->\r\n        </form>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/_admin/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  color: #080a58; }\n\n.container {\n  padding: 15px;\n  text-align: center; }\n\n.wrapper {\n  padding: 15px;\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff; }\n\n.uploadContainer {\n  border-right: 2px solid #e6e4ff; }\n\n.numbers {\n  display: inline-block;\n  padding: 10px;\n  border: 1px solid #e6e4ff;\n  border-radius: 20px;\n  background: #e6e4ff; }\n\n.selectFiles {\n  padding: 15px; }\n\n.selectFiles .selectFilesContainer {\n    padding: 30px; }\n\n.selectFiles .selectFilesContainer input {\n      margin: 0 auto;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/_admin/upload/upload.component.ts":
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
var upload_service_1 = __webpack_require__("../../../../../src/app/services/upload.service.ts");
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
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
        // console.log(FileUploader);
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
    UploadComponent.prototype.cancel = function (form) {
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
        this.files = [];
        this.uploader.clearQueue();
        form.resetForm();
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    core_1.Component({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/components/_admin/upload/upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/_admin/upload/upload.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" && _a || Object, typeof (_b = typeof properties_service_1.PropertiesService !== "undefined" && properties_service_1.PropertiesService) === "function" && _b || Object])
], UploadComponent);
exports.UploadComponent = UploadComponent;
var _a, _b;
//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo\" [@fadeInAnimation]>\r\n  <div class=\"center\">\r\n    <div class=\"caption\">\r\n      <h1>About</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" [@fadeInAnimation]>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-12 col-md-3 tonyContainer\">\r\n      <div class=\"tonyBox\">\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonybackground.png\" class=\"img-responsive\">\r\n      </div>\r\n      <p>842 E Valley Blvd.</p>\r\n      <p>Alhambra, CA 91801</p>\r\n      <a href=\"tel:+6267594812\">(626)759-4812</a>\r\n      <a href=\"mailto:BrokerTonyMa@gmail.com\" target=\"_top\">brokertonyma@gmail.com</a>\r\n      <button routerLink=\"/contact\" class='btn btn-md'>Contact Now</button>\r\n      <button (click)=\"scroll(reviews)\" class='btn btn-md'>Read Reviews</button>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-9 messageContainer\">\r\n\r\n      <div class=\"messageWrapper\">\r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"mission col-xs-12\">\r\n            <h2>Mission Statement <i class=\"fas fa-chess-knight bounce\"></i></h2>\r\n            <div class=\"break\"></div>\r\n            <p>\"My mission is to guide my current and prospective clients through the process of any of their real estate needs. I know that there's a lot of ambiguity when dealing with real estate. With my years of experience and knowledge, I can help answer any questions and guide you through the process, step by step. Whether you're buying or selling, I invite you to contact me, so that I may show you why my past clients have trusted and continuously trust me with their ventures.\"</p>\r\n          </div>\r\n\r\n          <div class=\"testimonials col-xs-12\">\r\n            <h2>Testimonials\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/Comment.png\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/comment1.png\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/comment2.png\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/comment3.png\">\r\n            </h2>\r\n            <div class=\"break\"></div>\r\n            <p>\"Selling our home with Tony was a positive and smooth experience. From the initial listing, to open houses, to closing, it was evident that Tony was extremely knowledgeable and passionate about real estate. I appreciate his great attention to detail and how he always makes time for his clients. I   highly recommend Tony Ma for any of your real estate needs!\"</p>\r\n            <p> - Sally Zhen</p>\r\n            <p>\"Tony is THE BEST! As a first time homebuyer, I was nervous to begin my search but Tony helped me learn more about what I wanted (and more importantly, what I didn't!) and helped me find the perfect home. Throughout the process, Tony explained everything clearly to make sure I was up to speed and on the same page..\"</p>\r\n            <p> - Cassie Curtin</p>\r\n            <div class=\"break\"></div>\r\n          </div>\r\n\r\n          <div class=\"reviews col-xs-12\" #reviews>\r\n            <h2>See Why Partners are rating Tony</h2>\r\n            <h2>\r\n              <span class=\"fa fa-star onestar\"></span>\r\n              <span class=\"fa fa-star twostar\"></span>\r\n              <span class=\"fa fa-star threestar\"></span>\r\n              <span class=\"fa fa-star fourstar\"></span>\r\n              <span class=\"fa fa-star fivestar\"></span>\r\n            </h2>\r\n            <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\" target=\"_blank\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/google.png\" class=\"img-responsive\">\r\n            </a>\r\n            <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\" target=\"_blank\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/trulia.png\" class=\"img-responsive\">\r\n            </a>\r\n            <a href=\"https://www.zillow.com/profile/brokertonyma/\" target=\"_blank\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillow.png\" class=\"img-responsive\">\r\n            </a>\r\n            <a href=\"https://www.yelp.com/biz/tony-ma-re-max-elite-realty-alhambra\" target=\"_blank\">\r\n              <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/yelp.png\" class=\"img-responsive\">\r\n            </a>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  text-align: center; }\n\n.jumbo {\n  background-image: url(https://s3-us-west-1.amazonaws.com/mean-realestate/jumboimage.jpg);\n  background-position: top;\n  text-align: center; }\n\n.jumbo .center {\n    padding: 65px 0; }\n\n.jumbo .caption {\n    padding: 10px;\n    display: inline-block;\n    background: white; }\n\n.jumbo .caption h1 {\n      color: #080a58;\n      letter-spacing: 5px;\n      text-transform: uppercase;\n      margin: 0; }\n\n@media only screen and (max-width: 414px) {\n  .jumbo .center {\n    padding: 40px 0; } }\n\n.container {\n  padding: 15px; }\n\n.btn {\n  color: white;\n  background: #f28109; }\n\n.break {\n  background: #e0e0e0;\n  height: 2px; }\n\n.tonyContainer {\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff;\n  padding: 47px 10px !important;\n  color: #080a58; }\n\n.tonyContainer a {\n    font-size: 16px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #080a58; }\n\n.tonyContainer button {\n    display: block;\n    margin: 3px auto;\n    height: 50px;\n    width: 200px;\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer button:hover {\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9);\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer .btn {\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n\n.tonyContainer .btn:nth-child(odd) {\n    background: #068aff; }\n\n.tonyContainer .tonyBox {\n    background: white;\n    width: 100%;\n    margin: 0 auto; }\n\n.tonyContainer .tonyBox img {\n      opacity: 0.9;\n      margin: 0 auto;\n      border-radius: 10px;\n      -webkit-filter: brightness(0.9);\n              filter: brightness(0.9); }\n\n.tonyContainer p {\n    margin: 0; }\n\n@media only screen and (max-width: 414px) {\n  .tonyContainer {\n    padding: 100px 0 !important;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .tonyContainer .tonyBox img {\n      width: 50%; }\n    .tonyContainer a {\n      display: block; } }\n\n.messageWrapper {\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff;\n  padding: 15px; }\n\n.mission {\n  padding: 0 50px; }\n\n.mission:hover p {\n    color: #f28109;\n    -webkit-transition: color 1s;\n    transition: color 1s; }\n\n.mission h2 {\n    color: #080a58;\n    text-transform: uppercase; }\n\n.mission .fa-chess-knight {\n    color: #f28109 !important; }\n\n.mission p {\n    -webkit-transition: color 1s;\n    transition: color 1s;\n    font-size: 20px;\n    color: #2f3294;\n    letter-spacing: 2.5px;\n    line-height: 1.4; }\n\n.testimonials {\n  padding: 0 50px;\n  position: relative; }\n\n.testimonials:hover p {\n    color: #f28109;\n    -webkit-transition: color 1s;\n    transition: color 1s; }\n\n.testimonials h2 {\n    color: #080a58;\n    text-transform: uppercase;\n    position: relative; }\n\n.testimonials h2 img {\n      width: 4%;\n      position: absolute; }\n\n.testimonials h2 img:nth-child(2) {\n      -webkit-animation: fade2 4s infinite; }\n\n.testimonials h2 img:nth-child(3) {\n      -webkit-animation: fade3 4s infinite; }\n\n.testimonials h2 img:nth-child(4) {\n      -webkit-animation: fade3 4s infinite; }\n\n.testimonials p {\n    font-size: 20px;\n    letter-spacing: 2px;\n    line-height: 1.4;\n    color: #2f3294;\n    -webkit-transition: color 1s;\n    transition: color 1s; }\n\n@media only screen and (max-width: 414px) {\n  .mission, .testimonials {\n    padding: 0 40px !important; }\n  .testimonials h2 img {\n    width: 8%; } }\n\n.bounce {\n  -webkit-animation: checkmate 2s infinite; }\n\n@-webkit-keyframes checkmate {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n\n@keyframes checkmate {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n\n.stars {\n  min-height: 33.75px; }\n\n.onestar {\n  color: white;\n  -webkit-animation: fadein 1.5s 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.twostar {\n  color: white;\n  -webkit-animation: fadein 2s 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.threestar {\n  color: white;\n  -webkit-animation: fadein 2.5s 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.fourstar {\n  color: white;\n  -webkit-animation: fadein 3s 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n.fivestar {\n  color: white;\n  -webkit-animation: fadein 3.5s 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards; }\n\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n    color: #f28109; }\n  50% {\n    opacity: 0.5;\n    color: #f28109; }\n  100% {\n    opacity: 1;\n    color: #f28109; } }\n\n@-webkit-keyframes fade2 {\n  0% {\n    opacity: 0.5; }\n  33.33% {\n    opacity: 0; }\n  66.66% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade2 {\n  0% {\n    opacity: 1; }\n  33.33% {\n    opacity: 0; }\n  66.66% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade3 {\n  0% {\n    opacity: 0; }\n  33.33% {\n    opacity: 1; }\n  66.66% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade4 {\n  0% {\n    opacity: 0; }\n  33.33% {\n    opacity: 0; }\n  66.66% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.reviews h2 {\n  text-transform: uppercase;\n  color: #080a58; }\n\n.reviews h2:nth-of-type(even) {\n  min-height: 33.75px;\n  margin: 20px 0; }\n\n.reviews a {\n  display: inline-block;\n  max-width: 10%;\n  margin: 0 5px;\n  opacity: 0.5;\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s; }\n\n.reviews a:hover {\n  -webkit-transition: opacity 1s;\n  transition: opacity 1s;\n  opacity: 1; }\n\n@media only screen and (max-width: 414px) {\n  .reviews a {\n    max-width: 20%;\n    opacity: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
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
    AboutComponent.prototype.scroll = function (el) {
        el.scrollIntoView();
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.scss")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo\" [@fadeInAnimation]>\r\n  <div class=\"center\">\r\n    <div class=\"caption\">\r\n      <h1>Contact</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" [@fadeInAnimation]>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-3 tonyContainer\">\r\n      <div class=\"tonyBox\">\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonybackground.png\" class=\"img-responsive\">\r\n      </div>\r\n        <p>842 E Valley Blvd.</p>\r\n        <p>Alhambra, CA 91801</p>\r\n        <a href=\"tel:+6267594812\">(626)759-4812</a>\r\n        <a href=\"mailto:BrokerTonyMa@gmail.com\" target=\"_top\">brokertonyma@gmail.com</a>\r\n        <button routerLink=\"/contact\" class='btn btn-md'>Contact Now</button>\r\n        <button routerLink=\"/about\" class='btn btn-md'>See Testimonials</button>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-9 contactForm\">\r\n      <div class=\"contactWrapper\">\r\n\r\n        <div *ngIf=\"message\" class=\"sentMessage\" [@fadeInAnimation]>\r\n          <h3>{{ message }}</h3>\r\n        </div>\r\n\r\n        <div *ngIf=\"errors\" class=\"errorMessage\" [@fadeInAnimation]>\r\n          <h3> {{ errors }} </h3>\r\n        </div>\r\n\r\n        <form (submit)=\"sendEmail(formData)\" #formData=\"ngForm\">\r\n          <p>Name</p>\r\n          <input type=\"text\" name=\"name\" ngModel>\r\n          <p>Contact Number</p>\r\n          <input type=\"text\" name=\"phone\" ngModel>\r\n          <p>Email Address</p>\r\n          <input type=\"text\" name=\"email\" ngModel>\r\n          <p>Message</p>\r\n          <textarea name=\"message\" class=\"message\" ngModel></textarea>\r\n          <button class=\"btn btn-md\">Send</button>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  color: #080a58; }\n\n.jumbo {\n  background-image: url(https://s3-us-west-1.amazonaws.com/mean-realestate/jumboimage.jpg);\n  background-position: top;\n  text-align: center; }\n\n.jumbo .center {\n    padding: 65px 0; }\n\n.jumbo .caption {\n    padding: 10px;\n    display: inline-block;\n    background: white; }\n\n.jumbo .caption h1 {\n      letter-spacing: 5px;\n      text-transform: uppercase;\n      margin: 0; }\n\n@media only screen and (max-width: 414px) {\n  .jumbo .center {\n    padding: 40px 0; } }\n\n.container {\n  padding: 15px; }\n\n.tonyContainer {\n  text-align: center;\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff;\n  padding: 47px 10px !important; }\n\n.tonyContainer a {\n    font-size: 16px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #080a58; }\n\n.tonyContainer button {\n    display: block;\n    margin: 3px auto;\n    height: 50px;\n    width: 200px;\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer button:hover {\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9);\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer .btn {\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    background: #f28109;\n    color: white; }\n\n.tonyContainer .btn:nth-child(odd) {\n    background: #068aff; }\n\n.tonyContainer .tonyBox {\n    background: white;\n    width: 100%;\n    margin: 0 auto; }\n\n.tonyContainer .tonyBox img {\n      opacity: 0.9;\n      margin: 0 auto;\n      border-radius: 10px;\n      -webkit-filter: brightness(0.9);\n              filter: brightness(0.9); }\n\n.tonyContainer p {\n    margin: 0; }\n\n.contactForm .contactWrapper {\n  padding: 15px;\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff; }\n\n.contactForm .contactWrapper form {\n    font-size: 16px;\n    letter-spacing: 2px; }\n\n.contactForm .contactWrapper form textarea:focus, .contactForm .contactWrapper form input:focus {\n      outline: none; }\n\n.contactForm .contactWrapper form .message {\n      margin-bottom: 10px;\n      height: 250px;\n      width: 500px;\n      resize: none;\n      display: block;\n      letter-spacing: 2px;\n      border: 2px solid #d2d2d2; }\n\n.contactForm .contactWrapper form button {\n      background: #f28109;\n      color: white;\n      font-size: 16px;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      height: 50px;\n      width: 200px; }\n\n.contactForm .contactWrapper form input, .contactForm .contactWrapper form textarea {\n      padding: 3px;\n      border-radius: 4px;\n      border: 2px solid #d2d2d2;\n      letter-spacing: 2px; }\n\n.contactForm .sentMessage h3, .contactForm .errorMessage h3 {\n  display: inline-block;\n  padding: 5px;\n  color: #080a58;\n  background: yellow; }\n\n@media only screen and (max-width: 414px) {\n  * {\n    text-align: center; }\n  .tonyContainer {\n    padding: 100px 0 !important;\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .tonyContainer img {\n      width: 50%; }\n    .tonyContainer a {\n      display: block; }\n  .contactForm .contactWrapper form {\n    font-size: 20px; }\n    .contactForm .contactWrapper form .message {\n      height: 250px;\n      width: 309px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
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
var message_service_1 = __webpack_require__("../../../../../src/app/services/message.service.ts");
var ContactComponent = (function () {
    function ContactComponent(_messageService) {
        this._messageService = _messageService;
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.sendEmail = function (form) {
        var _this = this;
        if (form.value.name.length == 0 || form.value.phone.length == 0 || form.value.email.length == 0 || form.value.message.length == 0) {
            this.errors = "Please ensure all fields are filled out.";
        }
        else {
            this._messageService.sendEmail(form.value)
                .then(function () {
                form.resetForm();
                _this.message = 'Thanks for your message. Tony will get back to you ASAP!';
            })
                .catch();
        }
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.scss")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" && _a || Object])
], ContactComponent);
exports.ContactComponent = ContactComponent;
var _a;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footContainer\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"footHeader col-xs-12 col-md-4\">\r\n          <h1>Tony Ma</h1>\r\n          <p>Real Estate</p>\r\n      </div>\r\n\r\n      <div class=\"social-media col-xs-12 col-md-4\">\r\n        <a href=\"https://www.google.com/search?q=Tony%20Ma%20Real%20Estate%20Agent&ludocid=3951818538487366440#lrd=0x0:0x36d7ae05eb57c328,1\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/google.png\" class=\"img-responsive\">\r\n        </a>\r\n        <a href=\"https://www.trulia.com/profile/tony-ma-agent-alhambra-ca-zgw5pj7v/overview\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/trulia.png\" class=\"img-responsive\">\r\n        </a>\r\n        <a href=\"https://www.zillow.com/profile/brokertonyma/\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/zillow.png\" class=\"img-responsive\">\r\n        </a>\r\n        <a href=\"https://www.yelp.com/biz/tony-ma-re-max-elite-realty-alhambra\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/yelp.png\" class=\"img-responsive\">\r\n        </a>\r\n        <a href=\"https://www.remax.com/realestateagentoffice/alhambra-ca-91801-tonyma-id29848707.html\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remax.png\" class=\"img-responsive\">\r\n        </a>\r\n        <a href=\"https://www.linkedin.com/in/tonyma01/\" target=\"_blank\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/linkedin.png\" class=\"img-responsive\">\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-md-4 remax\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/remax-logo.png\" class=\"img-responsive\">\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"footContainer\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"links col-xs-12\">\r\n        <a routerLink=\"/properties\">Properties</a>\r\n        <a routerLink=\"/about\">About</a>\r\n        <a routerLink=\"/contact\">Contact</a>\r\n      </div>\r\n      <div class=\"loggedIn col-xs-12\" *ngIf=\"loggedIn\">\r\n          <a routerLink=\"/upload\">Add Listing</a> |\r\n          <a routerLink=\"/editlisting\">Edit Listing</a>\r\n      </div>\r\n      <div class=\"copyright col-xs-12\">\r\n        <div class=\"copyrightContainer\">&copy; 2018 Tony Ma |\r\n          <div *ngIf=\"!loggedIn\">\r\n            <a routerLink=\"/login\">Log In</a>\r\n          </div>\r\n          <div *ngIf=\"loggedIn\">\r\n            <a (click)=\"logout()\">Logout</a>\r\n          </div>\r\n          <a href=\"#\"></a>\r\n          | Website built by <a href=\"https://www.linkedin.com/in/kevinmadev\" target=\"_blank\" class=\"kevinma\">Kevin Ma</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footContainer {\n  border-top: 0.5px solid grey;\n  background: #080a58;\n  padding-bottom: 20px; }\n\n.footHeader {\n  padding: 30px 0; }\n\n.footHeader a {\n    text-decoration: none; }\n\n.footHeader h1, .footHeader h3 {\n    font-size: 4em;\n    margin: 0px; }\n\n.footHeader h1 {\n    text-transform: uppercase;\n    letter-spacing: 3px;\n    color: white; }\n\n.footHeader .copyrightContainer {\n    color: #f28109;\n    letter-spacing: 13.5px;\n    font-size: 1.25em;\n    margin: 0; }\n\n.footHeader p {\n    color: #f28109;\n    letter-spacing: 15px; }\n\n.loggedIn {\n  color: #bfbfbf; }\n\n.loggedIn a {\n    color: #bfbfbf; }\n\n@media only screen and (max-width: 414px) {\n  .footHeader .copyrightContainer {\n    margin-left: 12px; }\n  .footHeader p {\n    margin-left: 12px; } }\n\n.social-media {\n  margin: 0 auto;\n  text-align: center;\n  padding: 51px 0; }\n\n.social-media a {\n    display: inline-block !important;\n    max-width: 10%;\n    margin: auto 5px;\n    -webkit-transition: border 0.5s; }\n\n.social-media a:hover {\n      border: 3px solid white;\n      border-radius: 15px;\n      -webkit-transition: border 0.5s; }\n\n.remax {\n  padding: 41px 0; }\n\n.remax a {\n    text-decoration: none; }\n\n.remax img {\n    float: right; }\n\n@media only screen and (max-width: 414px) {\n  .footHeader, .remax img {\n    margin: 0 auto;\n    text-align: center;\n    float: none; } }\n\n.links {\n  padding: 15px; }\n\n.links a {\n    padding: 15px;\n    font-size: 1.25em;\n    text-transform: uppercase;\n    color: white;\n    text-decoration: none;\n    -webkit-transition: color 0.5s; }\n\n.links a:hover {\n      color: #f28109;\n      -webkit-transition: color 0.5s; }\n\n.copyright {\n  color: #bfbfbf;\n  padding: 10px; }\n\n.copyright a {\n    color: #bfbfbf; }\n\n.copyright .kevinma {\n    color: #f28109; }\n\n.copyright div {\n    display: inline-block; }\n\n.links, .copyright, .loggedIn {\n  margin: 0 auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
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
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var FooterComponent = (function () {
    function FooterComponent(_loginService) {
        var _this = this;
        this._loginService = _loginService;
        this.subscription = this._loginService.isLoggedIn()
            .subscribe(function (loggedin) {
            _this.loggedIn = loggedin;
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.getLoggedIn();
    };
    FooterComponent.prototype.getLoggedIn = function () {
        if (localStorage.getItem('token')) {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    FooterComponent.prototype.logout = function () {
        this._loginService.logOut();
        this.loggedIn = false;
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof login_service_1.LoginService !== "undefined" && login_service_1.LoginService) === "function" && _a || Object])
], FooterComponent);
exports.FooterComponent = FooterComponent;
var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@fadeInAnimation]>\r\n\r\n  <div class=\"slideContainer\">\r\n\r\n    <div class=\"slider\">\r\n\r\n      <div class=\"slide1\"><h3>FOR ALL YOUR REAL ESTATE NEEDS</h3></div>\r\n      <div class=\"slide2\"></div>\r\n      <div class=\"slide3\"></div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-xs-12 col-md-5\">\r\n        <div class=\"tonyContainer\">\r\n          <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonybackground.png\" class=\"img-responsive tonybox\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 col-md-6 welcomeMessage\">\r\n        <h4>Welcome to</h4>\r\n        <h1>Tony Ma Real Estate</h1>\r\n        <p>It is with great pleasure that Tony welcomes you to his website. He is individual that strives for satisfaction with those he partners with and has been awarded multiple times for his excellency in the field.</p>\r\n        <p>Finding the right home can be rough. The logitics can be intiminidating, confusing and filled with paperwork. With his years of experience and knowledge of the market, Tony excels at walking those he partners with, every step of the way.</p>\r\n        <button routerLink=\"/contact\" class=\"btn btn-lg\">Contact Tony Today</button>\r\n        <button routerLink=\"/about\" class=\"btn btn-lg\">Read Reviews</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"valuesContainer\">\r\n\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row values\">\r\n\r\n        <div class=\"valuesHeader\">\r\n          <h3>Core Values</h3>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-4\">\r\n          <div class=\"contentContainer firstContainer\">\r\n            <i class=\"fa fa-book fa-5x shake\"></i>\r\n            <h4>knowledge</h4>\r\n            <p>Strives with years of constant research, growth and understanding of the market </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-4\">\r\n          <div class=\"contentContainer\">\r\n            <i class=\"fa fa-comments fa-5x beat\"></i>\r\n            <h4>empathy</h4>\r\n            <p>Understands that every individual has different wants, needs, and expectations  </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-xs-12 col-md-4\">\r\n          <div class=\"contentContainer lastContainer\">\r\n            <i class=\"fa fa-handshake fa-5x bounce\"></i>\r\n            <h4>trust</h4>\r\n            <p>Promotes a workflow with strong moral with an emphasis on ethics and zeal</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: \"Oswald\", sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.container {\n  padding: 100px 25px; }\n\n.btn {\n  width: 200px;\n  height: 50px;\n  padding: 5px;\n  color: white;\n  background: orange;\n  text-transform: uppercase;\n  -webkit-transition: -webkit-filter 1s;\n  transition: -webkit-filter 1s;\n  transition: filter 1s;\n  transition: filter 1s, -webkit-filter 1s; }\n\n.btn:nth-child(even) {\n  background: #068aff;\n  margin-left: 4px; }\n\n.btn:hover {\n  -webkit-transition: box-shadow background 1s;\n  -webkit-transition: -webkit-filter 1s;\n  transition: -webkit-filter 1s;\n  transition: filter 1s;\n  transition: filter 1s, -webkit-filter 1s;\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8); }\n\n.slideContainer {\n  width: 100%;\n  margin: 0 auto;\n  text-align: center; }\n\n@-webkit-keyframes fade {\n  0% {\n    opacity: 1; }\n  33.333% {\n    opacity: 0; }\n  66.666% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fade {\n  0% {\n    opacity: 1; }\n  33.333% {\n    opacity: 0; }\n  66.666% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fade2 {\n  0% {\n    opacity: 0; }\n  33.333% {\n    opacity: 1; }\n  66.666% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade2 {\n  0% {\n    opacity: 0; }\n  33.333% {\n    opacity: 1; }\n  66.666% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes fade3 {\n  0% {\n    opacity: 0; }\n  33.333% {\n    opacity: 0; }\n  66.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fade3 {\n  0% {\n    opacity: 0; }\n  33.333% {\n    opacity: 0; }\n  66.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.slide1, .slide2, .slide3 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  letter-spacing: 5px; }\n\n@media only screen and (min-width: 1025px) {\n  .slider {\n    max-width: 100%;\n    height: 600px;\n    position: relative; }\n  .slide1, .slide2, .slide3 {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .slide1 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/pexels-photo-286744.jpeg) no-repeat center;\n    background-size: cover;\n    animation: fade 16s infinite;\n    -webkit-animation: fade 12s infinite; }\n    .slide1 h3 {\n      color: transparent; }\n  .slide2 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/pexels-photo-279607.jpeg) no-repeat center;\n    background-size: cover;\n    animation: fade2 16s infinite;\n    -webkit-animation: fade2 12s infinite; }\n  .slide3 {\n    background: url(https://s3-us-west-1.amazonaws.com/mean-realestate/pexels-photo-186077.jpeg) no-repeat center;\n    background-position: 25% 25%;\n    background-size: cover;\n    animation: fade3 16s infinite;\n    -webkit-animation: fade3 12s infinite; } }\n\n@media only screen and (max-width: 1024px) {\n  .slider {\n    max-width: 100%;\n    height: 450px;\n    position: relative; }\n  .slide1 {\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.5)), to(rgba(0, 0, 0, 0.5))), url(https://s3-us-west-1.amazonaws.com/mean-realestate/mobilejumbo.jpg);\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://s3-us-west-1.amazonaws.com/mean-realestate/mobilejumbo.jpg);\n    background-position: center;\n    background-size: cover;\n    height: 100%; }\n    .slide1 h3 {\n      font-size: 1.75em;\n      color: white;\n      position: relative;\n      top: 40%;\n      line-height: 1.1; } }\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n/* WELCOME */\n\n.tonybox {\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  margin: 0 auto;\n  opacity: 0.9;\n  -webkit-filter: brightness(1.1);\n          filter: brightness(1.1); }\n\n.welcomeMessage {\n  margin-top: 10px; }\n\n.welcomeMessageh1, .welcomeMessagep {\n    margin-bottom: 10px;\n    line-height: 1.2; }\n\n.welcomeMessage h4, .welcomeMessage h1 {\n    text-transform: uppercase;\n    margin: 0; }\n\n.welcomeMessage h4 {\n    letter-spacing: 2px;\n    color: #f28109; }\n\n.welcomeMessage h1 {\n    color: #080a58;\n    margin-bottom: 5px; }\n\n.welcomeMessage p {\n    color: grey;\n    font-size: 1.4em;\n    letter-spacing: 2px;\n    font-family: 'Fjalla One', sans-serif; }\n\n.img-responsive {\n  width: 70%; }\n\n@media only screen and (max-width: 414px) {\n  .landingContainer {\n    padding: 50px; }\n  .img-responsive {\n    width: 70%; }\n  .img-responsive, .welcomeMessage {\n    margin: 0 auto;\n    text-align: center; }\n  .welcomeMessage h4 {\n    font-size: 1.5em; }\n  button {\n    margin-bottom: 5px; } }\n\n/* 2) VALUES / 2) VALUES / 2) VALUES /  */\n\n/* 2) VALUES / 2) VALUES / 2) VALUES /  */\n\n.valuesContainer {\n  background-image: url(\"https://s3-us-west-1.amazonaws.com/mean-realestate/cityblue.jpg\"); }\n\n.valuesHeader {\n  text-align: center;\n  background: white;\n  padding: 1px 0;\n  margin-bottom: 20px;\n  border-radius: 7px; }\n\n.valuesHeader h3 {\n    display: inline-block;\n    font-weight: 600;\n    color: #080a58;\n    text-transform: uppercase;\n    margin: 10px 0; }\n\n.contentContainer {\n  padding: 5px;\n  border-radius: 7px;\n  background: white;\n  margin: 0 auto;\n  text-align: center;\n  -webkit-box-shadow: 7px 7px #6d6e98;\n          box-shadow: 7px 7px #6d6e98;\n  text-transform: uppercase;\n  -webkit-transition: box-shadow 1s; }\n\n.contentContainer:hover {\n    -webkit-transition: box-shadow 1s;\n    -webkit-box-shadow: 15px 15px #6d6e98;\n            box-shadow: 15px 15px #6d6e98; }\n\n.contentContainer:hover p {\n    color: orange;\n    -webkit-transition: color 1s; }\n\n.contentContainer h4 {\n    color: #080a58;\n    font-weight: 600;\n    letter-spacing: 2px; }\n\n.contentContainer p {\n    font-size: 1.25em;\n    color: grey;\n    letter-spacing: 2px;\n    -webkit-transition: color 1s; }\n\n.contentContainer:first-of-type:hover .fa-book {\n    -webkit-animation: bookShake 5s ease infinite;\n            animation: bookShake 5s ease infinite; }\n\n.contentContainer:nth-of-type(odd):hover .fa-comments {\n    -webkit-animation: commentBeat 5s ease infinite;\n            animation: commentBeat 5s ease infinite; }\n\n.contentContainer:last-of-type:hover .fa-handshake {\n    position: relative;\n    display: inline-block;\n    -webkit-animation: handshake 1s infinite linear;\n    animation: handshake 1s infinite linear; }\n\n.fa-book, .fa-comments, .fa-handshake {\n  color: #f28109; }\n\n@media only screen and (max-width: 414px) {\n  .contentContainer {\n    border-radius: 0; }\n  .firstContainer {\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px; }\n  .lastContainer {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px; } }\n\n@media only screen and (min-width: 992px) and (max-width: 1200px) {\n  .contentContainer {\n    min-height: 230px; } }\n\n@-webkit-keyframes commentBeat {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  5% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  30% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  35% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  55% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes commentBeat {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  5% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  20% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  30% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  35% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  55% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25); }\n  70% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes bookShake {\n  0% {\n    -webkit-transform: rotate(-12deg);\n    transform: rotate(-12deg); }\n  8% {\n    -webkit-transform: rotate(12deg);\n    transform: rotate(12deg); }\n  10% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  18% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  20% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  28% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  30% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  38% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  40% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  48% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  50% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  58% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  60% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  68% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  75% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n@keyframes bookShake {\n  0% {\n    -webkit-transform: rotate(-12deg);\n    transform: rotate(-12deg); }\n  8% {\n    -webkit-transform: rotate(12deg);\n    transform: rotate(12deg); }\n  10% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  18% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  20% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  28% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  30% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  38% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  40% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  48% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  50% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  58% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  60% {\n    -webkit-transform: rotate(-24deg);\n    transform: rotate(-24deg); }\n  68% {\n    -webkit-transform: rotate(24deg);\n    transform: rotate(24deg); }\n  75% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); } }\n\n@-webkit-keyframes handshake {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n\n@keyframes handshake {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  40% {\n    -webkit-transform: translateY(-30px);\n    transform: translateY(-30px); }\n  60% {\n    -webkit-transform: translateY(-15px);\n    transform: translateY(-15px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/landing/landing.component.ts":
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
// import { ListingService } from '../../services/listing.service';
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var ng2_device_detector_1 = __webpack_require__("../../../../ng2-device-detector/index.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var LandingComponent = (function () {
    function LandingComponent(
        // private _listingService: ListingService,
        http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.deviceInfo = null;
        this.carouselTileItems = [];
        // this.checkDevice();
    }
    LandingComponent.prototype.ngOnInit = function () {
        //   this.getPropCarouselImgs();
        //
        //   this.carouselTile = {
        //     grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        //     speed: 600,
        //     interval: 3000,
        //     point: {
        //       visible: true,
        //       pointStyles: `
        //         .ngxcarouselPoint {
        //           list-style-type: none;
        //           text-align: center;
        //           padding: 12px;
        //           margin: 0;
        //           white-space: nowrap;
        //           overflow: auto;
        //           box-sizing: border-box;
        //         }
        //         .ngxcarouselPoint li {
        //           display: inline-block;
        //           border-radius: 50%;
        //           border: 2px solid rgba(0, 0, 0, 0.55);
        //           padding: 4px;
        //           margin: 0 3px;
        //           transition-timing-function: cubic-bezier(.17, .67, .83, .67);
        //           transition: .4s;
        //         }
        //         .ngxcarouselPoint li.active {
        //             background: #6b6b6b;
        //             transform: scale(1.2);
        //         }
        //       `
        //     },
        //     load: 1,
        //     touch: true
        //   };
        //
        //   if(this.deviceInfo == "unknown"){
        //     this.carouselTile.grid = { xs: 2, sm: 2, md: 2, lg: 2, all: 0 }
        //   };
        // }
        //
        // getPropCarouselImgs() {
        //   this._listingService.getAllActiveListings()
        //   .then((listings) => {
        //     for(var i = 0; i < listings.length; i++){
        //       this.carouselTileItems.push(listings[i].paths[0])
        //     }
        //   })
        //   .catch()
        // }
        //
        // checkDevice() {
        //   this.deviceInfo = this.deviceService.getDeviceInfo().device;
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    core_1.Component({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/components/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/landing/landing.component.scss")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof ng2_device_detector_1.Ng2DeviceService !== "undefined" && ng2_device_detector_1.Ng2DeviceService) === "function" && _b || Object])
], LandingComponent);
exports.LandingComponent = LandingComponent;
var _a, _b;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <!-- <a routerLink=\"/\" class=\"logo\" (click)=\"close()\"><img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tmhouse.png\"></a> -->\r\n  <div class=\"brand\">\r\n    <a routerLink=\"/\">\r\n      <h1>Tony Ma</h1>\r\n      <p>Real Estate</p>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"links\" id=\"Nav\">\r\n    <a href=\"javascript:void(0);\" class=\"icon\" id=\"icon\" (click)=\"changeResponsive()\">&#9776;</a>\r\n\r\n      <div class=\"links-cont\" (click)=\"closeMenu()\">\r\n        <a routerLink=\"/properties\">Properties</a>\r\n        <a routerLink=\"/about\">About</a>\r\n        <a routerLink=\"/contact\">Contact</a>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font: Oswald, sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.brand {\n  display: inline-block;\n  padding: 10px 0; }\n\n.brand a {\n    text-decoration: none; }\n\n.brand h1 {\n    font-size: 4em;\n    margin: 0;\n    font-weight: 600;\n    color: #080a58;\n    letter-spacing: 0.5px; }\n\n.brand p {\n    font-weight: 400;\n    letter-spacing: 11.5px;\n    color: #f28109;\n    margin: 0; }\n\n.links {\n  text-transform: uppercase; }\n\n.links a {\n    display: block;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 17px;\n    color: #080a58;\n    -webkit-transition: color 0.5s; }\n\n.links .links-cont a:hover {\n    color: #f28109;\n    -webkit-transition: color 0.5s; }\n\n.links .icon {\n    display: none; }\n\n.active {\n  background-color: #4CAF50;\n  color: white; }\n\n@media only screen and (max-width: 414px) {\n  .brand p {\n    letter-spacing: 11.75px; } }\n\n/* mobile device */\n\n@media only screen and (max-width: 660px) {\n  .container {\n    padding-left: 25px;\n    padding-right: 25px; }\n  .brand {\n    padding: 15px 0; }\n  .links {\n    display: inline-block; }\n    .links a {\n      display: none;\n      padding: 10px 12px; }\n    .links a.icon {\n      display: inline-block;\n      position: absolute;\n      top: 4%;\n      right: 2%;\n      display: block; }\n    .links.responsive a {\n      display: inline-block; }\n  .responsive {\n    width: 100%;\n    margin: 0 auto;\n    text-align: center; }\n  .links-cont a {\n    border: 0.5px solid #080a58;\n    margin-bottom: 10px; } }\n\n/* tablet/desktop */\n\n@media screen and (min-width: 661px) {\n  .links {\n    display: inline-block;\n    font-size: 1.1em;\n    padding-top: 40px;\n    float: right; }\n    .links a {\n      display: inline-block;\n      font-size: 1.1em; }\n    .links a:last-child {\n      padding-right: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
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
        if (x.className === "links") {
            x.className += " responsive";
            y.innerHTML = "X";
        }
        else {
            x.className = "links";
            y.innerHTML = "&#9776";
        }
    };
    NavbarComponent.prototype.closeMenu = function () {
        var x = document.getElementById("Nav");
        var y = document.getElementById("icon");
        x.className = "links";
        y.innerHTML = "&#9776";
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/properties/properties-show/properties-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo\" [@fadeInAnimation]>\r\n  <div class=\"center\">\r\n    <div class=\"caption\">\r\n      <h1>Browse Images</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" [@fadeInAnimation]>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-12 col-md-3 tonyContainer\">\r\n      <div class=\"tonyBox\">\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonybackground.png\" class=\"img-responsive\">\r\n      </div>\r\n        <p>842 E Valley Blvd.</p>\r\n        <p>Alhambra, CA 91801</p>\r\n        <a href=\"#\">(626)759-4812</a>\r\n        <a href=\"#\">brokertonyma@gmail.com</a>\r\n        <button routerLink=\"/contact\" class='btn btn-md'>Contact Now</button>\r\n        <button routerLink=\"/about\" class='btn btn-md'>See Testimonials</button>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-9 listingContainer\">\r\n\r\n      <div class=\"listingWrapper\">\r\n        <div class=\"row\">\r\n\r\n          <div *ngIf=\"listing\" class=\"col-xs-12\">\r\n            <h3 class=\"address\" >{{ listing.address }}</h3>\r\n          </div>\r\n\r\n          <div *ngIf=\"image\" class=\"col-xs-12 imageContainer\">\r\n            <p (click)=\"previousImage()\"><i class=\"left\"></i></p>\r\n            <img (click)=\"nextImage()\" src=\"{{ image }}\" class=\"img-responsive\">\r\n            <p (click)=\"nextImage()\"><i class=\"right\"></i></p>\r\n          </div>\r\n\r\n\r\n          <div *ngFor=\"let listing of listing.paths; let i = index \" class=\"col-xs-4 col-md-3 listingCollection\" >\r\n\r\n              <div *ngIf=\"i == 0; else showNotFocused\">\r\n                <img src=\"{{ listing }}\" class=\"img-responsive focusimage img{{ i }}\" (click)=\"changeImage(i)\">\r\n              </div>\r\n              <ng-template #showNotFocused>\r\n                <img src=\"{{ listing }}\" class=\"img-responsive img{{ i }}\" (click)=\"changeImage(i)\">\r\n              </ng-template>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/properties/properties-show/properties-show.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  color: #080a58; }\n\n.jumbo {\n  background-image: url(https://s3-us-west-1.amazonaws.com/mean-realestate/jumboimage.jpg);\n  background-position: top;\n  text-align: center; }\n\n.jumbo .center {\n    padding: 65px 0; }\n\n.jumbo .caption {\n    padding: 10px;\n    display: inline-block;\n    background: white; }\n\n.jumbo .caption h1 {\n      letter-spacing: 5px;\n      text-transform: uppercase;\n      margin: 0; }\n\n@media only screen and (max-width: 414px) {\n  .jumbo .center {\n    padding: 40px 0; } }\n\n.container {\n  padding: 15px; }\n\n.tonyContainer {\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff;\n  padding: 47px 10px !important;\n  color: #080a58;\n  text-align: center; }\n\n.tonyContainer a {\n    font-size: 16px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #080a58; }\n\n.tonyContainer button {\n    display: block;\n    margin: 3px auto;\n    height: 50px;\n    width: 200px;\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer button:hover {\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9);\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer .btn {\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    color: white; }\n\n.tonyContainer .btn:nth-child(even) {\n    background: #f28109; }\n\n.tonyContainer .btn:nth-child(odd) {\n    background: #068aff; }\n\n.tonyContainer .tonyBox {\n    background: white;\n    width: 100%;\n    margin: 0 auto; }\n\n.tonyContainer .tonyBox img {\n      margin: 0 auto;\n      border-radius: 10px;\n      -webkit-filter: brightness(0.9);\n              filter: brightness(0.9); }\n\n.tonyContainer p {\n    margin: 0; }\n\n.imageContainer {\n  margin: 15px 0; }\n\n.listingWrapper {\n  padding: 15px;\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff; }\n\n.address {\n  text-align: center;\n  letter-spacing: 1px; }\n\n.listingCollection {\n  padding: 0; }\n\n.listingCollection img {\n    border: 1px solid white;\n    -webkit-filter: brightness(0.5);\n            filter: brightness(0.5); }\n\n.listingCollection .focusimage {\n    -webkit-filter: brightness(1);\n            filter: brightness(1); }\n\n@media only screen and (max-width: 414px) {\n  .tonyContainer {\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 100px 0; }\n    .tonyContainer .tonyBox {\n      width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/properties/properties-show/properties-show.component.ts":
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
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var PropertiesShowComponent = (function () {
    function PropertiesShowComponent(_activatedRoute, _listingService) {
        this._activatedRoute = _activatedRoute;
        this._listingService = _listingService;
        this.imageSources = [];
        this.imageindex = 0;
    }
    PropertiesShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (param) { return _this.listingid = param.id; });
        this.getListing(this.listingid);
    };
    PropertiesShowComponent.prototype.getListing = function (listing) {
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
    PropertiesShowComponent.prototype.nextImage = function () {
        if (this.listing.paths[this.imageindex + 1]) {
            $('.img' + this.imageindex).removeClass("focusimage");
            this.image = this.listing.paths[this.imageindex + 1];
            this.imageindex++;
            $('.img' + this.imageindex).addClass("focusimage");
        }
        else {
            $('.img' + this.imageindex).removeClass("focusimage");
            this.image = this.listing.paths[0];
            this.imageindex = 0;
            $('.img' + this.imageindex).addClass("focusimage");
        }
    };
    PropertiesShowComponent.prototype.changeImage = function (index) {
        $('.img' + this.imageindex).removeClass("focusimage");
        this.image = this.listing.paths[index];
        this.imageindex = index;
        $('.img' + this.imageindex).addClass("focusimage");
    };
    return PropertiesShowComponent;
}());
PropertiesShowComponent = __decorate([
    core_1.Component({
        selector: 'app-properties-show',
        template: __webpack_require__("../../../../../src/app/components/properties/properties-show/properties-show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/properties/properties-show/properties-show.component.scss")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof properties_service_1.PropertiesService !== "undefined" && properties_service_1.PropertiesService) === "function" && _b || Object])
], PropertiesShowComponent);
exports.PropertiesShowComponent = PropertiesShowComponent;
var _a, _b;
//# sourceMappingURL=properties-show.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/properties/properties.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbo\" [@fadeInAnimation]>\r\n  <div class=\"center\">\r\n    <div class=\"caption\">\r\n      <h1>Properties</h1>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" [@fadeInAnimation]>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-md-3 tonyContainer\">\r\n      <div class=\"tonyBox\">\r\n        <img src=\"https://s3-us-west-1.amazonaws.com/mean-realestate/tonybackground.png\" class=\"img-responsive\">\r\n      </div>\r\n        <p>842 E Valley Blvd.</p>\r\n        <p>Alhambra, CA 91801</p>\r\n        <a href=\"tel:+6267594812\">(626)759-4812</a>\r\n        <a href=\"mailto:BrokerTonyMa@gmail.com\" target=\"_top\">brokertonyma@gmail.com</a>\r\n        <button routerLink=\"/contact\" class='btn btn-md'>Contact Now</button>\r\n        <button routerLink=\"/about\" class='btn btn-md'>See Testimonials</button>\r\n        <agm-map\r\n          [latitude]=\"latitude\"\r\n          [longitude]=\"longitude\"\r\n          [zoom]=\"zoom\">\r\n          <agm-marker\r\n              [latitude]=\"latitude\"\r\n              [longitude]=\"longitude\">\r\n            <agm-info-window>\r\n              <strong>InfoWindow content</strong>\r\n            </agm-info-window>\r\n\r\n          </agm-marker>\r\n        </agm-map>\r\n    </div>\r\n\r\n      <div class=\"col-xs-12 col-md-9 listingContainer\">\r\n        <div class=\"listingWrapper\">\r\n\r\n          <div class=\"arrowContainer\">\r\n            <h1>Browse Properties</h1>\r\n              <div class=\"break\"></div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n\r\n            <div *ngFor=\"let listing of listings\" class=\"listings\">\r\n              <div class=\"col-xs-12\" (mouseenter)=\"getLatLan( listing.address )\">\r\n\r\n                <div class=\"row\">\r\n\r\n                  <div class=\"image-container col-xs-6\">\r\n\r\n                    <a routerLink=\"/show/{{ listing._id }}\" class=\"image\"><img src=\"{{ listing.paths[0] }}\" class=\"img-responsive listingimg\"></a>\r\n                    <div class=\"middle\">\r\n                      <button routerLink=\"/show/{{ listing._id }}\"  class=\"btn btn-md desktopBrowse\">More Images</button>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"col-xs-6 address\">\r\n                    <p>{{ listing.address }}</p>\r\n                    <button routerLink=\"/show/{{ listing._id }}\"  class=\"btn btn-md mobileBrowse\">Browse Images</button>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"break\"></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"arrowContainer\">\r\n              <button (click)=\"leftClick()\" class=\"btn btn-md\" id=\"leftArrow\"><</button>\r\n              <button (click)=\"rightClick()\" class=\"btn btn-md\" id=\"rightArrow\">></button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<!-- <div class=\"prefooter\">\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/properties/properties.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Oswald, sans-serif;\n  color: #080a58;\n  text-align: center; }\n\n.container {\n  min-height: 940px;\n  padding: 15px; }\n\n.btn {\n  color: white;\n  background: #f28109; }\n\n.jumbo {\n  background-image: url(https://s3-us-west-1.amazonaws.com/mean-realestate/jumboimage.jpg);\n  background-position: top; }\n\n.jumbo .center {\n    padding: 65px 0; }\n\n.jumbo .caption {\n    padding: 10px;\n    display: inline-block;\n    background: white; }\n\n.jumbo .caption h1 {\n      letter-spacing: 5px;\n      text-transform: uppercase;\n      margin: 0; }\n\n@media only screen and (max-width: 414px) {\n  .jumbo .center {\n    padding: 40px 0; } }\n\n.tonyContainer {\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff; }\n\n.tonyContainer a {\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    color: #080a58; }\n\n.tonyContainer .btn {\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n\n.tonyContainer .btn:nth-child(odd) {\n    background: #068aff; }\n\n.listingWrapper {\n  padding: 15px;\n  border: 2px solid #e6e4ff;\n  border-radius: 10px;\n  -webkit-box-shadow: 2px 2px #e6e4ff;\n          box-shadow: 2px 2px #e6e4ff; }\n\n.listingWrapper h1 {\n    text-transform: uppercase; }\n\n.listingWrapper .listings {\n    padding: 15px; }\n\n.listingWrapper .listings .btn {\n      color: white;\n      text-transform: uppercase; }\n\n.listingimg {\n  max-height: 300px;\n  border-radius: 10px;\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.middle {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center; }\n\n.image-container {\n  padding: 10px 0; }\n\n.image-container:hover .img-responsive {\n  opacity: 0.3; }\n\n.image-container:hover .middle {\n  opacity: 1; }\n\n@media only screen and (max-width: 414px) {\n  .desktopBrowse {\n    display: none; } }\n\n@media only screen and (min-width: 415px) {\n  .mobileBrowse {\n    display: none; } }\n\n.tonyContainer {\n  height: 100%;\n  border-radius: 10px; }\n\n.tonyContainer .tonyBox {\n    width: 100%;\n    margin: 0 auto; }\n\n.tonyContainer a {\n    letter-spacing: 1px;\n    font-size: 16px;\n    display: block; }\n\n.tonyContainer p {\n    margin: 0; }\n\n.tonyContainer button {\n    width: 200px;\n    height: 50px;\n    display: block;\n    margin: 3px auto;\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s; }\n\n.tonyContainer button:hover {\n    -webkit-transition: -webkit-filter 1s;\n    transition: -webkit-filter 1s;\n    transition: filter 1s;\n    transition: filter 1s, -webkit-filter 1s;\n    -webkit-filter: brightness(0.8);\n            filter: brightness(0.8); }\n\n.tonyContainer img {\n    opacity: 0.9;\n    border-radius: 10px;\n    -webkit-filter: brightness(0.9);\n            filter: brightness(0.9); }\n\n.prefooter {\n  background-image: url(\"https://s3-us-west-1.amazonaws.com/mean-realestate/cityblue.jpg\");\n  height: 200px; }\n\n.break {\n  background: #e0e0e0;\n  height: 2px; }\n\n@media only screen and (max-width: 414px) {\n  .jumbo {\n    height: 125px; }\n  .tonyContainer {\n    border: none;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    padding: 100px 0; }\n    .tonyContainer .tonyBox {\n      width: 50%; }\n  .image-container {\n    padding: 30px 0; }\n  .address {\n    padding: 57px 0; } }\n\n@media only screen and (min-width: 415px) {\n  .tonyContainer {\n    padding: 47px 10px !important; }\n  .listingWrapper {\n    min-height: 1039.5px; }\n  .listingWrapper {\n    padding: 10px; }\n  .address {\n    margin: 0;\n    padding: 120px 0; }\n    .address p {\n      margin: 0;\n      font-size: 1.25em; } }\n\n@media only screen and (min-width: 768px) {\n  agm-map {\n    height: 500px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/properties/properties.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var properties_service_1 = __webpack_require__("../../../../../src/app/services/properties.service.ts");
var index_1 = __webpack_require__("../../../../../src/app/_animations/index.ts");
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var PropertiesComponent = (function (_super) {
    __extends(PropertiesComponent, _super);
    function PropertiesComponent(_listingService, __loader, gmaps, __zone) {
        var _this = _super.call(this, __loader, __zone) || this;
        _this._listingService = _listingService;
        _this.__loader = __loader;
        _this.gmaps = gmaps;
        _this.__zone = __zone;
        // SHOWN LISTINGS
        _this.listings = [];
        // LISTINGS ARRAY AFTER API AND BEING SEPARATED
        _this.listingsArray = [];
        // CHANGE SHOWN BETWEEN ACTIVE/SOLD
        // public active:boolean = true;
        // COUNTER FOR LENGTH OF PAGES
        _this.leftArrow = false;
        // COUNTER FOR LENGTH FOR COLOR CHANGE
        _this.rightArrow = false;
        // public geo: google_geocoding = new google_geocoding();
        _this.latitude = 34.078052;
        _this.longitude = -118.113003;
        _this.zoom = 8;
        return _this;
    }
    PropertiesComponent.prototype.ngOnInit = function () {
        this.getAllListings();
    };
    // GET LAT & LONG FROM SERVICES
    PropertiesComponent.prototype.getLatLan = function (address) {
        var _this = this;
        this._listingService.getLatLan(address).subscribe(function (value) {
            // needs to run inside zone to update the map
            _this.__zone.run(function () {
                _this.latitude = value.lat();
                _this.longitude = value.lng();
                // console.log(value.lat());
                // console.log(value.lng());
            });
            _this.gmaps.setCenter({ lat: _this.latitude, lng: _this.longitude });
        });
    };
    PropertiesComponent.prototype.getAllListings = function () {
        var _this = this;
        // GET ALL LISTINGS FROM API
        this._listingService.getAllListings()
            .then(function (listings) {
            // LISTINGS FROM API IS NOW SAVED
            var allListings = listings;
            // USED TO PLACE LISTINGS FOR BOTTOM ALGO
            var tempArr = [];
            // every 4 listings push tempArray into listingsArray
            for (var i = 0; i < allListings.length; i++) {
                if (tempArr.length < 3) {
                    tempArr.push(allListings[i]);
                }
                else {
                    _this.listingsArray.push(tempArr);
                    tempArr = [];
                    tempArr.push(allListings[i]);
                }
            }
            // if there are any remainding listings not pushed in, push it in
            if (tempArr.length) {
                _this.listingsArray.push(tempArr);
                tempArr = [];
            }
            // show first index of listings on load
            _this.listings = _this.listingsArray[0];
        })
            .catch();
    };
    PropertiesComponent.prototype.leftClick = function () {
        var prev = this.flipPage(-1, "prev");
        // let pageBeforePrev = this.flipPage(-2);
        if (prev) {
            this.listings = prev;
        }
    };
    PropertiesComponent.prototype.rightClick = function () {
        var next = this.flipPage(1, "after");
        // let pageAfterNext = this.flipPage(2);
        if (next) {
            this.listings = next;
        }
    };
    // flip page method
    // if clicking right on end of listings, return the first array of listings
    // if clicking left at beginning of listings, return the last array of listings
    PropertiesComponent.prototype.flipPage = function (number, position) {
        var _this = this;
        var nextPage = this.listingsArray[this.listingsArray.findIndex(function (listing) {
            return listing === _this.listings;
        })
            + number];
        if (nextPage) {
            return nextPage;
        }
        else if (position == "after") {
            return this.listingsArray[0];
        }
        else if (position == "prev") {
            return this.listingsArray[this.listingsArray.length - 1];
        }
    };
    return PropertiesComponent;
}(core_2.GoogleMapsAPIWrapper));
PropertiesComponent = __decorate([
    core_1.Component({
        selector: 'app-properties',
        template: __webpack_require__("../../../../../src/app/components/properties/properties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/properties/properties.component.scss")],
        animations: [index_1.fadeInAnimation],
        host: { '[@fadeInAnimation]': '' }
    }),
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof properties_service_1.PropertiesService !== "undefined" && properties_service_1.PropertiesService) === "function" && _a || Object, typeof (_b = typeof core_2.MapsAPILoader !== "undefined" && core_2.MapsAPILoader) === "function" && _b || Object, typeof (_c = typeof core_2.GoogleMapsAPIWrapper !== "undefined" && core_2.GoogleMapsAPIWrapper) === "function" && _c || Object, typeof (_d = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _d || Object])
], PropertiesComponent);
exports.PropertiesComponent = PropertiesComponent;
var _a, _b, _c, _d;
//# sourceMappingURL=properties.component.js.map

/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
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
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
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

/***/ "../../../../../src/app/services/login.service.ts":
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

/***/ "../../../../../src/app/services/message.service.ts":
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
var MessageService = (function () {
    function MessageService(_http) {
        this._http = _http;
    }
    MessageService.prototype.sendEmail = function (form) {
        return this._http.post('/api/sendEmail', form)
            .toPromise();
    };
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], MessageService);
exports.MessageService = MessageService;
var _a;
//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/properties.service.ts":
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
var core_2 = __webpack_require__("../../../../@agm/core/index.js");
var rxjs_1 = __webpack_require__("../../../../rxjs/Rx.js");
__webpack_require__("../../../../rxjs/Rx.js");
var PropertiesService = (function () {
    function PropertiesService(_http, _loader, _zone) {
        this._http = _http;
        this._loader = _loader;
        this._zone = _zone;
    }
    PropertiesService.prototype.getLatLan = function (address) {
        var _this = this;
        // SET OBSERVABLE
        return rxjs_1.Observable.create(function (observer) {
            // LET GOOGLE SCRIPT LOAD BEFORE GEOCODER
            _this._loader.load().then(function () {
                var geocoder = new google.maps.Geocoder();
                // GEOCODE ADDRESS
                geocoder.geocode({ 'address': address }, function (results, status) {
                    // IF NO ERROR => return results
                    if (status == google.maps.GeocoderStatus.OK) {
                        observer.next(results[0].geometry.location);
                        observer.complete();
                        // IF ERROR => LOG err
                    }
                    else {
                        console.log('Error - ', results, ' & Status - ', status);
                        observer.next({});
                        observer.complete();
                    }
                });
            });
        });
    };
    PropertiesService.prototype.getThreeListings = function () {
        return this._http.get("/api/getThreeListings")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.getAllActiveListings = function () {
        return this._http.get("/api/getActive")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.getAllSoldListings = function () {
        return this._http.get("/api/getSold")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.getListing = function (listing) {
        return this._http.get("/api/getListing/" + listing)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.getAllListings = function () {
        return this._http.get("/api/getAllListings")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.changeSoldStatus = function (id) {
        return this._http.post("/api/changeStatus", id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.deleteImage = function (info) {
        return this._http.post("/api/deleteImage", info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.deleteListing = function (id) {
        return this._http.post("/api/deleteListing", id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.addListing = function (address) {
        return this._http.post('/api/addlisting', address)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.addMoreImages = function (info) {
        return this._http.post('/api/addMoreImages', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    PropertiesService.prototype.changeAddress = function (info) {
        return this._http.post('/api/changeAddress', info)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return PropertiesService;
}());
PropertiesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof core_2.MapsAPILoader !== "undefined" && core_2.MapsAPILoader) === "function" && _b || Object, typeof (_c = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _c || Object])
], PropertiesService);
exports.PropertiesService = PropertiesService;
var _a, _b, _c;
//# sourceMappingURL=properties.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
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