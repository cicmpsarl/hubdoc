webpackJsonp([2],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payement_payement__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  ', url: " assets/image4.jpg" },
            { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et  ', url: " assets/image1.jpg" },
            { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ', url: " assets/image2.jpg" },
            { title: 'Lorem ipsum dolor sit amet', text: 'consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et ', url: " assets/image5.jpg" }
        ];
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.formulaire = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__payement_payement__["a" /* PayementPage */]);
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\pages\first\first.html"*/'<!--\n  Generated template for the FirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>First</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-grid>\n      <ion-row class="photo">\n        <ion-col col-12 col-md-12 offset-md col-lg-11 offset-lg-1 col-xl-11 offset-xl-1 >\n            <ion-img width="1400" height="300" src="assets/image7.png"></ion-img>\n        </ion-col>\n      </ion-row>\n      <ion-row class="titre">\n        <ion-col offset-4>\n          <h5 >WELCOME TO ALL THE WINNERS </h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-md-6  col-lg-8 offset-lg-2  col-xl-8 offset-xl-2>\n          <p>\n              EB-5 is a permanent residence program allowing for immigration by investment into the United States. A single investment can qualify the applicant, their spouse and any unmarried children under the age of 21 to receive a permanent visa (Green Card).\n              Requires a minimum investment of $500,000 USD.\n          </p>\n\n        </ion-col>\n          <ion-col offset-4>\n           <button color="danger" ion-button (click)="formulaire()">click here and fill out the form</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of items">\n            <ion-card>\n              <ion-card-header>{{ item.title }}</ion-card-header>\n              <ion-card-content>{{ item.text }}</ion-card-content>\n              <img [src]="item.url">\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\pages\first\first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayementPage = /** @class */ (function () {
    function PayementPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formgroup = formBuilder.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ]),
                this.validPassword.bind(this)
            ],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')
                ]),
                this.validPassword.bind(this)
            ],
            age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(2),
                ]),
                this.validPassword2.bind(this)
            ],
        });
        // this.firstname = new FormControl('Dayana', Validators.required)
        // this.lastname = new FormControl('Dayana', Validators.required)
        // this.age = new FormControl('Dayana', Validators.required)
        this.firstname = this.formgroup.controls['firstname'];
        this.lastname = this.formgroup.controls['lastname'];
        this.age = this.formgroup.controls['age'];
    }
    PayementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PayementPage');
    };
    PayementPage.prototype.validPassword = function (control) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of('anbcvcb' === control.value).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) { return result ? { invalid: true } : null; }));
    };
    PayementPage.prototype.validPassword2 = function (control) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of('12' === control.value).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (result) { return result ? { invalid: true } : null; }));
    };
    PayementPage.prototype.onSubmit = function (value) {
        if (this.formgroup.valid) {
            // window.localStorage.setItem('username', value.username);
            // window.localStorage.setItem('password', value.password);
            console.log(value);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
            }, 5000);
            this.inter();
        }
    };
    PayementPage.prototype.inter = function () {
        var _this = this;
        var a = setInterval(function () {
            var alert = _this.alertCtrl.create({
                title: 'impossible de se connecter au serveur',
                subTitle: 'si le probléme persiste contacter nous par mail.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            console.log('Cancel clicked');
                            clearInterval(a);
                        }
                    },
                ]
            });
            alert.present();
        }, 10000);
    };
    PayementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payement',template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\pages\payement\payement.html"*/'<!--\n  Generated template for the PayementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Payement</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n      <ion-row class="photo2">\n          <ion-col col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-3 col-xl-8 offset-xl-3 >\n              <ion-img width="680" height="365" src="assets/image8.png"></ion-img>\n          </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="150" height="100" src="assets/image9.png"></ion-img>\n        </ion-col>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="150" height="135" src="assets/image12.png"></ion-img>\n        </ion-col>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="160" height="100" src="assets/image11.png"></ion-img>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form [formGroup]="formgroup" (ngSubmit)="onSubmit(formgroup.value)">\n \n     <ion-list>\n        <ion-item [ngClass]="{\'error-border\':!formgroup.controls.firstname.valid && formgroup.controls.firstname.touched}">\n            <ion-label floating>First Name</ion-label>\n            <ion-input formControlName="firstname" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'required\') && firstname.touched">\n            <p class="para"> *FirstName is required</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'minlength\') && firstname.touched">\n            <p class="para">Sorry, minimum password firstname is 3!</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'maxlength\') && firstname.touched">\n            <p class="para">Sorry, maxlength firstname length is 20!</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'pattern\') && firstname.touched">\n            <p class="para">Sorry, pas de caractéres spéciaux</p>\n        </ion-item>\n  \n\n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input formControlName="lastname" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'required\') && lastname.touched ">\n            <p class="para"> *LastName is required</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'minlength\') && lastname.touched">\n            <p class="para">Sorry, minimum password length is 3!</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'maxlength\') && lastname.touched">\n            <p class="para">Sorry, maxlength lastname length is 20!</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'pattern\') && firstname.touched">\n            <p class="para">Sorry, pas de caractéres spéciaux</p>\n        </ion-item>\n  \n\n        <ion-item>\n            <ion-label floating>Age</ion-label>\n            <ion-input formControlName="age" type="number"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="age.hasError(\'required\') && age.touched">\n            <p> *Age is required</p>\n        </ion-item>\n        <ion-item *ngIf="age.hasError(\'maxlength\') && age.touched">\n            <p> *only to number</p>\n        </ion-item>\n     </ion-list>\n     <button ion-button  color="secondary" [disabled]="!formgroup.valid" style="margin-top: 20px; width: 250px;" type="submit" >Submit</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\pages\payement\payement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PayementPage);
    return PayementPage;
}());

//# sourceMappingURL=payement.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/first/first.module": [
		397,
		1
	],
	"../pages/payement/payement.module": [
		398,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payement_payement__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */], __WEBPACK_IMPORTED_MODULE_8__pages_payement_payement__["a" /* PayementPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payement/payement.module#PayementPageModule', name: 'PayementPage', segment: 'payement', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */], __WEBPACK_IMPORTED_MODULE_8__pages_payement_payement__["a" /* PayementPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, app) {
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_first_first__["a" /* FirstPage */];
        this.title = "Navbar Title";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ionViewDidEnter = function () {
        this.app.setTitle('people');
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n     \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[240]);
//# sourceMappingURL=main.js.map