webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(195);
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
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.signup = function () {
        //Api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\xampp\htdocs\trackRapp\src\pages\signup\signup.html"*/`<ion-content padding>\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Name</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Email</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Username</ion-label>\n\n    <ion-input type="text" value=""></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label fixed>Password</ion-label>\n\n    <ion-input type="password"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n\n\n\n</ion-list>\n\n</ion-content>`/*ion-inline-end:"D:\xampp\htdocs\trackRapp\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(278);
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
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\xampp\htdocs\trackRapp\src\pages\welcome\welcome.html"*/`\n\n\n\n\n\n<ion-content padding id="welcome">\n\n\n\n<img src="assets/imgs/bananalogo.png" class="logo"/>\n\n<h1> Welcome to Banana </h1>\n\n<div>Discover some intersting things</div>\n\n\n\n<button ion-button block class="marginTop" (click)="signup()">Signup</button>\n\n<button ion-button block color="lightprimary" (click)="login()">Login</button>\n\n</ion-content>\n\n`/*ion-inline-end:"D:\xampp\htdocs\trackRapp\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map