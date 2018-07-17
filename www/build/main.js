webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payement_payement__ = __webpack_require__(101);
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
            selector: 'page-first',template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\pages\first\first.html"*/'<!--\n  Generated template for the FirstPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title class="titre2">AMERICAN DV LOTTERY 2019, WINNERS PAGE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-grid>\n      <ion-row class="photo">\n        <ion-col col-12 col-md-12 offset-md col-lg-11 offset-lg-1 col-xl-11 offset-xl-1 >\n            <ion-img width="1400" height="300" src="assets/image7.png"></ion-img>\n        </ion-col>\n      </ion-row>\n      <ion-row class="titre">\n        <ion-col offset-5>\n          <h5 >WELCOME TO ALL WINNERS </h5>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-md-6  col-lg-8 offset-lg-2  col-xl-8 offset-xl-2>\n          <p>\n          You are one of the winners randomly selected by a computer, out of the 13.5 millions entries registered for the Diversity Immigrant Visa Program 2019.<br> It is a United stated congressionally mandated lottery program for receiving a United Stated Resident Card. Also known as Green Card Lottery.\n\n          </p>\n\n        </ion-col>\n          <ion-col offset-5>\n           <button color="danger" ion-button (click)="formulaire()">click here to proceed</button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let item of items">\n            <ion-card>\n            <!--  <ion-card-header>{{ item.title }}</ion-card-header>\n              <ion-card-content>{{ item.text }}</ion-card-content>\n            -->\n              <img [src]="item.url">\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\pages\first\first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
    //firstname:AbstractControl;
    //lastname:AbstractControl;
    //cardnumber:AbstractControl;
    //expinumber:AbstractControl;
    //expinumbermonth:AbstractControl;
    // cardcvc:AbstractControl;
    function PayementPage(navCtrl, navParams, formBuilder, loadingCtrl, alertCtrl, http, plt) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.plt = plt;
        this.stripe = Stripe('pk_test_tjSHLnJNmKmBQsZe8GskmE0q');
        this.carde = {
            // $key: String,
            //  name: '',
            //  surname: '',
            //  dateofbirth: '',
            // confignumber: '',
            age: '',
            numero: '',
            nom: '',
            prenom: ''
        };
        this.items = [
            { url: 'https://stripe.com/img/documentation/checkout/marketplace.png' }
        ];
        this.publishableKey = 'pk_test_tjSHLnJNmKmBQsZe8GskmE0q';
        this.cardes = formBuilder.group({
            /*  expinumbermonth:['',Validators.compose([
                Validators.required, Validators.minLength(1), Validators.maxLength(2),
              ]),
             // this.validPassword.bind(this)
             ],
             expinumber:['',Validators.compose([
              Validators.required, Validators.minLength(3), Validators.maxLength(4),
            ]),
           // this.validPassword.bind(this)
           ],
           cardnumber:['',Validators.compose([
            Validators.required, Validators.minLength(2), Validators.maxLength(16),
          ]),
         // this.validPassword2.bind(this)
         ],
         cardcvc:['',Validators.compose([
          Validators.required, Validators.minLength(2), Validators.maxLength(4),
        ]),
        //this.validPassword2.bind(this)
         ], */
            numero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16),
                ]),
            ],
            age: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16),
                ]),
            ],
            nom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16),
                ]),
            ],
            prenom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(16),
                ]),
            ],
        });
        // this.firstname = new FormControl('Dayana', Validators.required)
        // this.lastname = new FormControl('Dayana', Validators.required)
        // this.age = new FormControl('Dayana', Validators.required)
        /* this.expinumber = this.formgroup.controls['expinumber'];
         this.expinumbermonth = this.formgroup.controls['expinumbermonth'];
         this.cardnumber = this.formgroup.controls['cardnumber'];
         this.cardcvc = this.formgroup.controls['cardcvc']; */
    }
    PayementPage.prototype.ionViewDidLoad = function () {
        this.setupStripe();
    };
    //stripe code
    PayementPage.prototype.setupStripe = function () {
        var _this = this;
        var elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                lineHeight: '24px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        this.card = elements.create('card', { style: style });
        this.card.mount('#card-element');
        this.card.addEventListener('change', function (event) {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            }
            else {
                displayError.textContent = '';
            }
        });
        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            // this.stripe.createToken(this.card)
            _this.stripe.createSource(_this.card).then(function (result) {
                if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                }
                else {
                    console.log(result);
                    var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    headers.append('Content-Type', 'application/json');
                    _this.http.post('http://localhost:3000/payer', JSON.stringify(result), { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(data.message);
                        alert(data.message + "\n" +
                            data.message2);
                    });
                }
            });
        });
    };
    //fin code stripe
    PayementPage.prototype.payer = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            // window.localStorage.setItem('username', value.username);
            // window.localStorage.setItem('password', value.password);
            console.log(this.card);
            this.stripe.setPublishableKey('pk_test_tjSHLnJNmKmBQsZe8GskmE0q');
            this.stripe.createCardToken(this.card).then(function (token) {
                var data = 'stripetoken=' + token + '&amount=100';
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                _this.http.post('http://localhost:3000/processpay/', data, { headers: headers }).map(function (res) { return res.json(); }).subscribe(function (data) {
                    console.log(data);
                    console.log(data.message);
                    alert('WE HAVE RECEIVED YOUR PAIEMENT,A CONFIRMATION WILL BE SEND TO YOU BY E-MAIL.');
                });
            });
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
            }, 5000);
            this.inter();
        }
        else {
            console.log(this.card);
            console.log('erico');
            // this.stripe.setPublishableKey('pk_test_tjSHLnJNmKmBQsZe8GskmE0q');
            // this.stripe.createCardToken(this.card).then((token) =>{
            //  var data = 'stripetoken=' + token + '&amount=100';
            //   })
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
            // headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Content-Type', 'application/json');
            // this.http.post('http://localhost:3000/payer',  JSON.stringify(this.card), {headers: headers} )
            this.http.post('http://ec2-18-222-66-128.us-east-2.compute.amazonaws.com:3000/payer', JSON.stringify(this.card), { headers: headers })
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                console.log(data.message);
                alert(data.message + "\n" +
                    data.message2);
            });
            /* this.http.get('http://localhost:3000/payer').map(res=>res.json()).subscribe((data) =>{
               console.log(data)
             }) */
            /*let loading = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            
            loading.present();
            
            setTimeout(() => {
              loading.dismiss();
            }, 5000);
            this.inter();*/
        }
    };
    PayementPage.prototype.inter = function () {
        var _this = this;
        var a = setInterval(function () {
            var alert = _this.alertCtrl.create({
                title: 'impossible to connect to the server',
                subTitle: 'if the problem persists contact us by email.',
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
    PayementPage.prototype.logForm = function () {
        console.log(this.cardes.value);
        if (this.cardes.value) {
            var loading_2 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loading_2.present();
            setTimeout(function () {
                loading_2.dismiss();
            }, 5000);
            this.inter();
        }
        else {
            console.log(this.cardes.value);
            console.log('erico');
        }
    };
    PayementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payement',template:/*ion-inline-start:"C:\Users\erico\angular4app\lehub\hub\src\pages\payement\payement.html"*/'<!--\n  Generated template for the PayementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title ></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n      <ion-row class="photo2">\n          <ion-col col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-3 col-xl-8 offset-xl-3 >\n              <ion-img width="680" height="365" src="assets/image8.png"></ion-img>\n          </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="150" height="100" src="assets/image9.png"></ion-img>\n        </ion-col>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="150" height="135" src="assets/image12.png"></ion-img>\n        </ion-col>\n        <ion-col col-lg-3 offset-lg-1 col-xl-3 offset-xl-1>\n            <ion-img width="160" height="100" src="assets/image11.png"></ion-img>\n        </ion-col>\n    </ion-row>\n    <!-- test api stripe -->\n\n      <form action="/" method="post" id="payment-form" [formGroup]="cardes">\n    \n        <div class="form-row">\n          <div id="card-element">\n            <!-- a Stripe Element will be inserted here. -->\n          </div>\n           <!-- customer info -->\n          <ion-row>\n                <ion-col col-12 col-sm col-lg-6>\n        \n                    <ion-item>\n                        <ion-label >SURNAME</ion-label>\n                        <ion-input type="text" formControlName="nom"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm col-lg-6>\n        \n                    <ion-item>\n                        <ion-label >FIRST NAME</ion-label>\n                        <ion-input type="text" formControlName="prenom"></ion-input>\n                    </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm col-lg-6>\n        \n                    <ion-item>\n                        <ion-label >DATE OF BIRTH</ion-label>\n                        <ion-input type="text" formControlName="age" placeholder="01/01/1973"></ion-input>\n                    </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm col-lg-6>\n        \n                    <ion-item>\n                        <ion-label >CONFIRMATION NUMBER</ion-label>\n                        <ion-input type="nom" formControlName="numero"></ion-input>\n                    </ion-item>\n            </ion-col>\n            </ion-row>\n    \n          <!-- Used to display Element errors -->\n          <div id="card-errors" role="alert"></div>\n        </div>\n        <ion-row>\n                <ion-col col-sm-12 col-lg-8 offset-lg-2>\n                        <button ion-button  full [disabled]="!cardes.valid">CLICK HERE TO CONFIRM</button>\n                </ion-col>\n            </ion-row>\n     \n        \n      </form>\n\n <!-- test api stripe fin code -->\n  <!-- ancien forms\n<form [formGroup]="cardes" (ngSubmit)="logForm()">\n\n            <ion-row>\n                    <ion-col col-12 col-sm col-lg-6>\n            \n                        <ion-item>\n                            <ion-label >SURNAME</ion-label>\n                            <ion-input type="text" formControlName="nom"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm col-lg-6>\n            \n                        <ion-item>\n                            <ion-label >FIRST NAME</ion-label>\n                            <ion-input type="text" formControlName="prenom"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12 col-sm col-lg-6>\n            \n                        <ion-item>\n                            <ion-label >DATE OF BIRTH</ion-label>\n                            <ion-input type="text" formControlName="age" placeholder="01/01/1973"></ion-input>\n                        </ion-item>\n                </ion-col>\n                <ion-col col-12 col-sm col-lg-6>\n            \n                        <ion-item>\n                            <ion-label >CONFIRMATION NUMBER</ion-label>\n                            <ion-input type="nom" formControlName="numero"></ion-input>\n                        </ion-item>\n                </ion-col>\n                </ion-row>\n    \n    \n    <ion-row>\n    <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n            <ion-label>CARD NUMBER</ion-label>\n            <ion-input type="number" formControlName="cardnumber"></ion-input>\n       </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n            <ion-label>CARD EXPIRY MONTH</ion-label>\n            <ion-input type="number" formControlName="expinumbermonth"></ion-input>\n        </ion-item>  \n    </ion-col>\n    <ion-col col-12 col-sm col-lg-6>\n      <ion-item>\n        <ion-label>CARD EXPIRY YEAR</ion-label>\n            <ion-input type="number" formControlName="expinumber"></ion-input>\n       </ion-item> \n    </ion-col>\n    <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n            <ion-label>CARD CVC</ion-label>\n            <ion-input type="number" formControlName="cardcvc"></ion-input>\n         </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-sm-12 col-lg-8 offset-lg-2>\n            <button ion-button full type="submit" [disabled]="!cardes.valid">Submit</button>\n        </ion-col>\n    </ion-row>\n    </form>\n-->\n\n    \n\n\n<!--\n    <ion-row>\n        <ion-col col-12 col-sm col-lg-6>\n\n            <ion-item>\n                <ion-label stacked>SURNAME</ion-label>\n                <ion-input [(ngModel)]="carde.name"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm col-lg-6>\n\n            <ion-item>\n                <ion-label stacked>FIRST NAME</ion-label>\n                <ion-input [(ngModel)]="carde.surname"></ion-input>\n            </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm col-lg-6>\n\n            <ion-item>\n                <ion-label stacked>DATE OF BIRTH</ion-label>\n                <ion-input [(ngModel)]="carde.dateofbirth"></ion-input>\n            </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm col-lg-6>\n\n            <ion-item>\n                <ion-label stacked>CONFIRMATION NUMBER</ion-label>\n                <ion-input [(ngModel)]="carde.confignumber"></ion-input>\n            </ion-item>\n    </ion-col>\n    </ion-row>\n\n    <ion-row>\n    <ion-col col-12 col-sm col-lg-6>\n\n        <ion-item>\n          <ion-label stacked>CARD NUMBER</ion-label>\n          <ion-input [(ngModel)]="card.numero"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n          <ion-label stacked>CARD EXPIRY YEAR</ion-label>\n          <ion-input  type="number" [(ngModel)]="card.expiyear"></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n          <ion-label stacked>CARD EXPIRY MONTH</ion-label>\n          <ion-input  type="number" [(ngModel)]="card.expimonth"></ion-input>\n        </ion-item>\n    </ion-col>\n\n    <ion-col col-12 col-sm col-lg-6>\n        <ion-item>\n          <ion-label stacked>CARD CVC</ion-label>\n          <ion-input  type="number" [(ngModel)]="card.cvc"></ion-input>\n        </ion-item>\n    </ion-col>\n</ion-row>\n    <ion-row>\n        <ion-col col-sm-8 col-lg-4 offset-lg-4>\n          <button ion-button full  (click)="payer()">VALIDER</button>\n        </ion-col>\n        <ion-col col-sm-8 col-lg-4 offset-4>\n         \n        </ion-col>\n      </ion-row>\n    -->\n\n\n\n\n\n <!-- <form [formGroup]="cardes" (ngSubmit)="logForm()">\n    <ion-row>\n  <ion-col col-sm-12 col-lg-6 >\n    <ion-item>\n        <ion-label>CARD NUMBER</ion-label>\n        <ion-input type="number" formControlName="cardnumber"></ion-input>\n     </ion-item>\n        <ion-item>\n            <ion-label>CARD EXPIRY MONTH</ion-label>\n            <ion-input type="number" formControlName="expinumbermonth"></ion-input>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n     <ion-item>\n            <ion-label>CARD EXPIRY YEAR</ion-label>\n            <ion-input type="number" formControlName="expinumber"></ion-input>\n     </ion-item>\n    \n     <ion-item>\n            <ion-label>CARD CVC</ion-label>\n            <ion-input type="number" formControlName="cardcvc"></ion-input>\n     </ion-item>\n\n\n     <button ion-button type="submit" [disabled]="!cardes.valid">Submit</button>\n\n</form>\n\n-->\n\n\n\n\n\n\n<!-- \n  <form [formGroup]="formgroup" (ngSubmit)="onSubmit(form)">\n \n     <ion-list>\n       <ion-item [ngClass]="{\'error-border\':!formgroup.controls.firstname.valid && formgroup.controls.firstname.touched}">\n            <ion-label floating>First Name</ion-label>\n            <ion-input formControlName="firstname" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'required\') && firstname.touched">\n            <p class="para"> *FirstName is required</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'minlength\') && firstname.touched">\n            <p class="para">Sorry, minimum password firstname is 3!</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'maxlength\') && firstname.touched">\n            <p class="para">Sorry, maxlength firstname length is 20!</p>\n        </ion-item>\n        <ion-item *ngIf="firstname.hasError(\'pattern\') && firstname.touched">\n            <p class="para">Sorry, pas de caractéres spéciaux</p>\n        </ion-item>\n  \n\n        <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input formControlName="lastname" type="text"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'required\') && lastname.touched ">\n            <p class="para"> *LastName is required</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'minlength\') && lastname.touched">\n            <p class="para">Sorry, minimum password length is 3!</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'maxlength\') && lastname.touched">\n            <p class="para">Sorry, maxlength lastname length is 20!</p>\n        </ion-item>\n        <ion-item *ngIf="lastname.hasError(\'pattern\') && firstname.touched">\n            <p class="para">Sorry, pas de caractéres spéciaux</p>\n        </ion-item>\n    -->\n\n    <!--    <ion-item>\n            <ion-label floating>Card Number</ion-label>\n            <ion-input formControlName="cardnumber" type="number"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="cardnumber.hasError(\'required\') && cardnumber.touched">\n            <p> *Age is required</p>\n        </ion-item>\n        <ion-item *ngIf="cardnumber.hasError(\'maxlength\') && cardnumber.touched">\n            <p> *only to number</p>\n        </ion-item>\n        \n        <ion-item>\n            <ion-label floating>Card Expiration Year</ion-label>\n            <ion-input formControlName="expinumber" type="number"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="expinumber.hasError(\'required\') && cardnumber.touched">\n            <p> *expinumber is required</p>\n        </ion-item>\n        <ion-item *ngIf="expinumber.hasError(\'maxlength\') && expinumber.touched">\n            <p> *only to number</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Card Expiration Month</ion-label>\n            <ion-input formControlName="expinumbermonth" type="number"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="expinumbermonth.hasError(\'required\') && expinumbermonth.touched">\n            <p> *expinumber is required</p>\n        </ion-item>\n        <ion-item *ngIf="expinumbermonth.hasError(\'maxlength\') && expinumbermonth.touched">\n            <p> *only to number</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>CVC</ion-label>\n            <ion-input formControlName="cardcvc" type="number"></ion-input>\n        </ion-item>\n        <ion-item *ngIf="cardcvc.hasError(\'required\') && cardcvc.touched">\n            <p> *expinumber is required</p>\n        </ion-item>\n        <ion-item *ngIf="cardcvc.hasError(\'maxlength\') && cardcvc.touched">\n            <p> *only to number</p>\n        </ion-item>\n\n\n\n     </ion-list>\n     <button ion-button  color="secondary"  style="margin-top: 20px; width: 250px;" type="submit" >Submit</button>\n  </form>\n  <ion-row>\n        <ion-col col-sm-6 col-md-4 col-lg-4 offset-lg-4 offset-md-4 offset-sm-3> \n            <h1>Checkout</h1>\n            <h4>Your Total: $</h4>\n            \n        </ion-col>\n    </ion-row>\n  <form method="post" action="https://www.my-dohone.com/dohone/pay">\n    <ion-row>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n            <div>\n               \n                <input type="text" id="name" class="formu" placeholder="Name" required>\n            </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n                <div>\n                    <input type="text" id="adress" class="formu" placeholder="adresse" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n                <div>\n                    <input type="text" id="oldername" class="formu" placeholder="older name" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n                <div>\n                    \n                    <input type="number" id="card-number" class="formu" placeholder="credit card number" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-3 offset-lg-5>\n                <div>\n                    <input type="number" id="expiartion" class="formu" placeholder="Expiration Mounth" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-3 >\n                <div>\n                    <input type="number" id="expiartiony" class="formu" placeholder="Expiration Year" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n                <div>\n                    <input type="number" id="cvs" class="formu" placeholder="CVS" required>\n                </div>\n        </ion-col>\n        <ion-col col-xs-12 col-lg-6 offset-lg-5>\n                <button ion-button  color="secondary"  style="margin-top: 20px; width: 250px;" type="submit" >Submit</button>\n        </ion-col>\n    </ion-row>\n \n</form>  -->\n\n\n</ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\erico\angular4app\lehub\hub\src\pages\payement\payement.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], PayementPage);
    return PayementPage;
}());

//# sourceMappingURL=payement.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/first/first.module": [
		276,
		1
	],
	"../pages/payement/payement.module": [
		277,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_first_first__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payement_payement__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_stripe__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { HttpModule } from '@angular/http';









//import { Module as StripeModule } from "stripe-angular"
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
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_first_first__["a" /* FirstPage */], __WEBPACK_IMPORTED_MODULE_8__pages_payement_payement__["a" /* PayementPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_stripe__["a" /* Stripe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_first_first__ = __webpack_require__(100);
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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

},[198]);
//# sourceMappingURL=main.js.map