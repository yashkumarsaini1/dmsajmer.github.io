function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./myblogs/myblogs.component */
    "./src/app/myblogs/myblogs.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'myblogs',
      component: _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_4__["MyblogsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'edit-profile/:id',
      component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__["EditProfileComponent"]
    }, {
      path: 'profile/:id',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }, {
      path: 'view/:postId',
      component: _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"]
    }, {
      path: '**',
      redirectTo: 'home'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Scribe';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Scribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["p[_ngcontent-%COMP%]\r\n{\r\n    font-size: 40px;\r\n    color: red;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInBcclxue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./capitalize.pipe */
    "./src/app/capitalize.pipe.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./myblogs/myblogs.component */
    "./src/app/myblogs/myblogs.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./create/create.component */
    "./src/app/create/create.component.ts");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./post/post.component */
    "./src/app/post/post.component.ts");
    /* harmony import */


    var _view_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./view/view.component */
    "./src/app/view/view.component.ts");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./comments/comments.component */
    "./src/app/comments/comments.component.ts");
    /* harmony import */


    var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./edit-profile/edit-profile.component */
    "./src/app/edit-profile/edit-profile.component.ts");

    var firebaseConfig = {
      apiKey: "AIzaSyBRJ1tEDwndXH_JgnABvlUmgScbOUBYPDc",
      authDomain: "scribe-ed63b.firebaseapp.com",
      databaseURL: "https://scribe-ed63b.firebaseio.com",
      projectId: "scribe-ed63b",
      storageBucket: "scribe-ed63b.appspot.com",
      messagingSenderId: "474409021284",
      appId: "1:474409021284:web:bc98dc6f77005b167b9471",
      measurementId: "G-5QSYK64ZJM"
    };
    firebase_app__WEBPACK_IMPORTED_MODULE_3__["initializeApp"](firebaseConfig);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__["CapitalizePipe"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_12__["MyblogsComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_20__["EditProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _capitalize_pipe__WEBPACK_IMPORTED_MODULE_10__["CapitalizePipe"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_11__["MenuComponent"], _myblogs_myblogs_component__WEBPACK_IMPORTED_MODULE_12__["MyblogsComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"], _post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_18__["ViewComponent"], _comments_comments_component__WEBPACK_IMPORTED_MODULE_19__["CommentsComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_20__["EditProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_15__["AngularEditorModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          return new Promise(function (resole, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
              if (user) {
                resole(true);
              } else {
                _this.router.navigate(['/login']);

                resole(false);
              }
            });
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(email, password) {
          return firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "signup",
        value: function signup(email, password, firstName, lastName) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password).then(function (response) {
              console.log(response);
              var randomNumber = Math.floor(Math.random() * 1000);
              response.user.updateProfile({
                displayName: firstName + " " + lastName,
                photoURL: "https://api.adorable.io/avatars/" + randomNumber
              }).then(function () {
                resolve(response.user);
              })["catch"](function (error) {
                reject(error);
              });
            })["catch"](function (error) {
              reject(error);
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/capitalize.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/capitalize.pipe.ts ***!
    \************************************/

  /*! exports provided: CapitalizePipe */

  /***/
  function srcAppCapitalizePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function () {
      return CapitalizePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CapitalizePipe = /*#__PURE__*/function () {
      function CapitalizePipe() {
        _classCallCheck(this, CapitalizePipe);
      }

      _createClass(CapitalizePipe, [{
        key: "transform",
        value: function transform(value) {
          var firstChar = value.substring(0, 1);
          var allOtherChars = value.substring(1, value.length);
          var newValue = firstChar.toUpperCase() + allOtherChars.toLowerCase();
          return newValue;
        }
      }]);

      return CapitalizePipe;
    }();

    CapitalizePipe.ɵfac = function CapitalizePipe_Factory(t) {
      return new (t || CapitalizePipe)();
    };

    CapitalizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "capitalize",
      type: CapitalizePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CapitalizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'capitalize'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comments/comments.component.ts":
  /*!************************************************!*\
    !*** ./src/app/comments/comments.component.ts ***!
    \************************************************/

  /*! exports provided: CommentsComponent */

  /***/
  function srcAppCommentsCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsComponent", function () {
      return CommentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CommentsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsComponent_div_0_Template_textarea_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.comment = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.comment);
      }
    }

    function CommentsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_div_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.postComment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please login to post a comment. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CommentsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "commented on ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8.ownerName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, comment_r8.created.toDate(), "MMM dd, yyyy h:mm a"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", comment_r8.text, " ");
      }
    }

    var CommentsComponent = /*#__PURE__*/function () {
      function CommentsComponent() {
        var _this2 = this;

        _classCallCheck(this, CommentsComponent);

        this.comment = "";
        this.comments = [];
        this.loggedIn = false;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
          if (user) {
            _this2.loggedIn = true;
          } else {
            _this2.loggedIn = false;
          }
        });
      }

      _createClass(CommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getComments();
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this3 = this;

          if (this.comment.length < 5) {
            return;
          }

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("comments").add({
            text: this.comment,
            post: this.postId,
            owner: firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid,
            ownerName: firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.displayName,
            created: firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
          }).then(function (data) {
            console.log("Comment is saved!");

            _this3.getComments();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getComments",
        value: function getComments() {
          var _this4 = this;

          this.comments = [];
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("comments").where("post", "==", this.postId).orderBy("created", "desc").get().then(function (data) {
            data.docs.forEach(function (commentRef) {
              _this4.comments.push(commentRef.data());
            });
          });
        }
      }]);

      return CommentsComponent;
    }();

    CommentsComponent.ɵfac = function CommentsComponent_Factory(t) {
      return new (t || CommentsComponent)();
    };

    CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CommentsComponent,
      selectors: [["app-comments"]],
      inputs: {
        postId: "postId"
      },
      decls: 6,
      vars: 5,
      consts: [["class", "row mt-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "alert alert-primary", 4, "ngIf"], ["class", "row mt-3", 4, "ngFor", "ngForOf"], [1, "row", "mt-5"], [1, "col"], ["rows", "2", "placeholder", "Your comment here...", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "pull-right"], [1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-primary"], [1, "row", "mt-3"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "card-text"]],
      template: function CommentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CommentsComponent_div_0_Template, 3, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentsComponent_div_1_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentsComponent_div_2_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CommentsComponent_div_5_Template, 12, 6, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Comments (", ctx.comments.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["textarea[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-comments',
          templateUrl: './comments.component.html',
          styleUrls: ['./comments.component.css']
        }]
      }], function () {
        return [];
      }, {
        postId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["postId"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/create/create.component.ts":
  /*!********************************************!*\
    !*** ./src/app/create/create.component.ts ***!
    \********************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm2015/kolkov-angular-editor.js");

    var CreateComponent = /*#__PURE__*/function () {
      function CreateComponent() {
        _classCallCheck(this, CreateComponent);

        this.postCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '0',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: true,
          showToolbar: false,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'v1/image',
          uploadWithCredentials: false,
          sanitize: true,
          toolbarPosition: 'top',
          toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']]
        };
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "createPost",
        value: function createPost() {
          var _this5 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("posts").add({
            title: this.title,
            content: this.content,
            owner: firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid,
            created: firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"].FieldValue.serverTimestamp()
          }).then(function (data) {
            console.log(data);

            _this5.postCreated.emit();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);

      return CreateComponent;
    }();

    CreateComponent.ɵfac = function CreateComponent_Factory(t) {
      return new (t || CreateComponent)();
    };

    CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateComponent,
      selectors: [["app-create"]],
      outputs: {
        postCreated: "postCreated"
      },
      decls: 13,
      vars: 4,
      consts: [[1, "row", "mt-5"], [1, "col"], [1, "form-group"], ["type", "text", "id", "title", "placeholder", "Post Title", "name", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "placeholder", "config", "ngModel", "ngModelChange"], [1, "form-group", "float-right"], [1, "btn", "btn-warning", "round", 3, "click"]],
      template: function CreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Post Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "angular-editor", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateComponent_Template_angular_editor_ngModelChange_9_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_button_click_11_listener() {
            return ctx.createPost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Enter text here...")("config", ctx.editorConfig)("ngModel", ctx.content);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorComponent"]],
      styles: [".round[_ngcontent-%COMP%]\r\n{\r\n    border-radius: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZFxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create',
          templateUrl: './create.component.html',
          styleUrls: ['./create.component.css']
        }]
      }], function () {
        return [];
      }, {
        postCreated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['postCreated']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/edit-profile/edit-profile.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/edit-profile/edit-profile.component.ts ***!
    \********************************************************/

  /*! exports provided: EditProfileComponent */

  /***/
  function srcAppEditProfileEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function () {
      return EditProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditProfileComponent_div_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
      }
    }

    var EditProfileComponent = /*#__PURE__*/function () {
      function EditProfileComponent() {
        _classCallCheck(this, EditProfileComponent);

        this.user = {};
        this.getProfile();
      }

      _createClass(EditProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this6 = this;

          var userId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid;
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("users").doc(userId).get().then(function (documentSnapshot) {
            _this6.user = documentSnapshot.data();
            _this6.user.displayName = _this6.user.firstName + " " + _this6.user.lastName;
            _this6.user.id = documentSnapshot.id;
            console.log(_this6.user);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this7 = this;

          this.message = "Updating Profile...";
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.updateProfile({
            displayName: this.user.displayName,
            photoURL: this.user.photoUrl
          }).then(function () {
            var userId = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.uid;
            firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("users").doc(userId).update({
              firstName: _this7.user.displayName.split(' ')[0],
              lastName: _this7.user.displayName,
              hobbies: _this7.user.hobbies,
              interests: _this7.user.interests,
              bio: _this7.user.bio
            }).then(function () {
              _this7.message = "Profile Updated Successfully.";
            })["catch"](function (error) {
              console.log(error);
            });
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }]);

      return EditProfileComponent;
    }();

    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) {
      return new (t || EditProfileComponent)();
    };

    EditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditProfileComponent,
      selectors: [["app-edit-profile"]],
      decls: 51,
      vars: 7,
      consts: [[1, "row", "mt-5"], [1, "offset-sm-1", "col-sm-10"], [1, "card-text-blank", "bg-light"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "row"], [1, "col-sm-4"], ["width", "256", "height", "256", 1, "img-circle", 3, "src"], [1, "col-sm-8"], [1, "form-group", "row"], [1, "col-sm-2", "col-form-label"], ["type", "text", "placeholder", "First name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "readonly", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "6", "placeholder", "Tell us something about yourself...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "card", "text-blank", "bg-light"], [1, "col-sm-6"], [1, "form-group"], [1, "col-form-label"], [1, "col-sm-12"], ["rows", "6", "placeholder", "I like to read sci-fi novels...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "6", "placeholder", "Reading, Travelling, Gaming", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-warning", "round", "pull-right", 3, "click"], ["class", "alert alert-success fade show pull-left", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-success", "fade", "show", "pull-left"]],
      template: function EditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.user.displayName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.user.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_textarea_ngModelChange_26_listener($event) {
            return ctx.user.bio = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Your Interests");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "textarea", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_textarea_ngModelChange_38_listener($event) {
            return ctx.user.interests = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Your Hobbies ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "(Comma Separate Each Hobby)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProfileComponent_Template_textarea_ngModelChange_47_listener($event) {
            return ctx.user.hobbies = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProfileComponent_Template_button_click_48_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, EditProfileComponent_div_50_Template, 2, 1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.bio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.hobbies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-profile',
          templateUrl: './edit-profile.component.html',
          styleUrls: ['./edit-profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../signup/signup.component */
    "./src/app/signup/signup.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.name = "iNteNsHala";
        this.amount = 123456;
        this.dateOfBirth = new Date();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 44,
      vars: 0,
      consts: [[1, "row"], [1, "col-sm-6", "text-right", "pt-5"], ["height", "300px", "src", "/assets/What-Is-Scribe-Image.png", 1, "align-middle", "m-5"], [1, "col-sm-4"], [1, "mx-5", "my-5"], [1, "mx-5", "my-1"], [1, "offset-sm-2", "col-sm-8", "text-center", "pt-5", "mt-5"], [1, "offset-sm-2", "col-sm-4", "text-left", "pt-5", "vertical-divider", "mt-5"], [1, "fa", "fa-phone", "mt-3"], [1, "fa", "fa-envelope", "mt-3"], [1, "fa", "fa-facebook", "mt-3"], [1, "col-sm-6", "text-left", "py-5", "my-5", "px-5"], [1, "fa", "fa-map-marker", "mt-3"], [1, "fa", "fa-map-marker", "mt-1", "invisible"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "What is Scribe?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Scribe is a thought sharing platform where you can share your thoughts and craziest ideas with the world. You can also interact with other users by commenting on their posts. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Create a free account and get started. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Let's get started! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Available Soon... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " yashallendms@gmail.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Internshala Trainings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Available Soon...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Available Soon...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Available Soon...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Available Soon...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__["SignupComponent"]],
      styles: [".vertical-divider[_ngcontent-%COMP%]{\r\n    border-right:1px solid #ddd;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbC1kaXZpZGVye1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGRkO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A valid Email is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.message, " ");
      }
    }

    function LoginComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.userError.message, " ");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, authService, router) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.message = "";
        this.myForm = this.fb.group({
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this8 = this;

          this.authService.login(form.value.email, form.value.password).then(function (data) {
            console.log(data);
            _this8.message = "You have been logged in successfully.";

            _this8.router.navigate(['/myblogs']);
          })["catch"](function (error) {
            console.log(error);
            _this8.userError = error;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 30,
      vars: 8,
      consts: [[1, "row", "background"], [1, "offset-sm-4", "col-sm-4"], [1, "card", "text-blank"], [1, "card-body"], [1, "card-title", "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "placeholder", "Enter email", "name", "email", 1, "form-control", 3, "formControl"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "password", "placeholder", "Enter password", "name", "password", 1, "form-control", 3, "formControl"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-block", "btn-warning", "round", 3, "disabled"], [1, "text-center", "mt-3"], ["routerLink", "/home", 1, "btn", "btn-link"], ["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login using your email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit(ctx.myForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_div_13_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Don't have an account? Create One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["email"].valid && ctx.myForm.controls["email"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["password"].valid && ctx.myForm.controls["password"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.myForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".background[_ngcontent-%COMP%]\r\n{\r\n    background-color: #2e7cf6;\r\n    width: 101.1%;\r\n}\r\n.card[_ngcontent-%COMP%] \r\n{\r\n    background-color: transparent !important;\r\n    color: #fff;\r\n    border: none;\r\n    margin-top: 35%;\r\n}\r\n.btn[type=submit][_ngcontent-%COMP%]\r\n{\r\n    border-radius: 50px;\r\n}\r\n.btn-link[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjtBQUNBOztJQUVJLHdDQUF3QztJQUN4QyxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTs7SUFFSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTdjZjY7XHJcbiAgICB3aWR0aDogMTAxLjElO1xyXG59XHJcbi5jYXJkIFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNSU7XHJcbn1cclxuXHJcbi5idG5bdHlwZT1zdWJtaXRdXHJcbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLmJ0bi1saW5rIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MenuComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/profile/" + ctx_r3.user.uid);
      }
    }

    function MenuComponent_li_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_li_12_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        var _this9 = this;

        _classCallCheck(this, MenuComponent);

        this.loggedIn = false;
        this.user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;

        if (this.user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }

        firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().onAuthStateChanged(function (user) {
          _this9.user = user;

          if (user) {
            _this9.loggedIn = true;
          } else {
            _this9.loggedIn = false;
          }
        });
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 13,
      vars: 5,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-primary"], ["href", "#", 1, "navbar-brand"], ["src", "assets/Scribe-Logo.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["class", "nav-item", "routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item right ", "routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse", 4, "ngIf"], ["class", "nav-item right", 4, "ngIf"], ["routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], ["routerLink", "/myblogs", 1, "nav-link"], ["routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "nav-item", "right"], ["routerLink", "/login", 1, "btn", "btn-outline-light", "px-5"], [1, "nav-item", "right"], [1, "nav-link", 3, "routerLink"], ["routerLink", "/", 1, "nav-link", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_li_7_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MenuComponent_li_8_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 3, 0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_li_11_Template, 3, 1, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MenuComponent_li_12_Template, 3, 0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: [".btn-outline-light[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 10px;\r\n    border-radius: 50px;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n    border-bottom: 1px solid #6ca3f9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtbGlnaHRcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbm5hdntcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmNhM2Y5O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myblogs/myblogs.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/myblogs/myblogs.component.ts ***!
    \**********************************************/

  /*! exports provided: MyblogsComponent */

  /***/
  function srcAppMyblogsMyblogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyblogsComponent", function () {
      return MyblogsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../create/create.component */
    "./src/app/create/create.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../post/post.component */
    "./src/app/post/post.component.ts");

    function MyblogsComponent_app_post_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function MyblogsComponent_app_post_11_Template_app_post_onDelete_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.onDelete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r1);
      }
    }

    var MyblogsComponent = /*#__PURE__*/function () {
      function MyblogsComponent() {
        _classCallCheck(this, MyblogsComponent);

        this.user = {};
        this.posts = [];
        this.user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        this.getPosts();
      }

      _createClass(MyblogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getPosts",
        value: function getPosts() {
          var _this10 = this;

          // get the list of posts
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("posts").orderBy("created", "desc").get().then(function (querySnapshot) {
            console.log(querySnapshot.docs);
            _this10.posts = querySnapshot.docs;
          })["catch"](function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onPostCreated",
        value: function onPostCreated() {
          // refresh the list of posts
          this.getPosts();
          this.posts = [];
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          // refresh the list of posts
          this.posts = [];
          this.getPosts();
        }
      }]);

      return MyblogsComponent;
    }();

    MyblogsComponent.ɵfac = function MyblogsComponent_Factory(t) {
      return new (t || MyblogsComponent)();
    };

    MyblogsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyblogsComponent,
      selectors: [["app-myblogs"]],
      decls: 12,
      vars: 4,
      consts: [[1, "row", "mb-5"], [1, "col-sm-3", "offset-sm-1"], [1, "card", "mt-5"], [1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "col-sm-7"], [3, "postCreated"], [3, "post", "onDelete", 4, "ngFor", "ngForOf"], [3, "post", "onDelete"]],
      template: function MyblogsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-create", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("postCreated", function MyblogsComponent_Template_app_create_postCreated_10_listener() {
            return ctx.onPostCreated();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyblogsComponent_app_post_11_Template, 1, 1, "app-post", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.displayName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/edit-profile/", ctx.user.uid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215YmxvZ3MvbXlibG9ncy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyblogsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-myblogs',
          templateUrl: './myblogs.component.html',
          styleUrls: ['./myblogs.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post/post.component.ts":
  /*!****************************************!*\
    !*** ./src/app/post/post.component.ts ***!
    \****************************************/

  /*! exports provided: PostComponent */

  /***/
  function srcAppPostPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PostComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PostComponent_a_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Writer's Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/profile/", ctx_r1.postData.owner, "");
      }
    }

    var PostComponent = /*#__PURE__*/function () {
      function PostComponent() {
        _classCallCheck(this, PostComponent);

        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postData = {};
        this.user = {};
      }

      _createClass(PostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.postData = this.post.data();
          this.user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this11 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("posts").doc(this.post.id)["delete"]().then(function () {
            _this11.onDelete.emit();
          });
        }
      }]);

      return PostComponent;
    }();

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)();
    };

    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      inputs: {
        post: "post"
      },
      outputs: {
        onDelete: "onDelete"
      },
      decls: 14,
      vars: 9,
      consts: [[1, "card", "text-blank", "mt-3"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-link", 3, "routerLink"], [1, "card-footer", "text-muted"], ["type", "button", "class", "btn btn-danger card-link btn-sm float-right", 3, "click", 4, "ngIf"], ["class", "card-footer text-muted", 3, "routerLink", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "card-link", "btn-sm", "float-right", 3, "click"], [1, "card-footer", "text-muted", 3, "routerLink"]],
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Read More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PostComponent_button_12_Template, 2, 0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostComponent_a_13_Template, 2, 1, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.postData.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.postData.content.substring(0, 50), "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/view/", ctx.post.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Posted on ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, ctx.postData.created.toDate(), "MMM dd, yyyy"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.uid == ctx.postData.owner);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.postData.owner != ctx.user.uid || !ctx.user);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.css']
        }]
      }], function () {
        return [];
      }, {
        post: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['post']
        }],
        onDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['onDelete']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../post/post.component */
    "./src/app/post/post.component.ts");

    function ProfileComponent_span_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hobby_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hobby_r2, " ");
      }
    }

    function ProfileComponent_app_post_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 13);
      }

      if (rf & 2) {
        var post_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r3);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(activatedRoute) {
        _classCallCheck(this, ProfileComponent);

        this.activatedRoute = activatedRoute;
        this.user = {};
        this.posts = [];
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.getProfile(id);
        this.getUsersPosts(id);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getProfile",
        value: function getProfile(id) {
          var _this12 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().settings({
            timestampsInSnapshots: true
          });
          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("users").doc(id).get().then(function (documentSnapshot) {
            _this12.user = documentSnapshot.data();
            _this12.user.displayName = _this12.user.firstName + " " + _this12.user.lastName;
            _this12.user.id = documentSnapshot.id;
            _this12.user.hobbies = _this12.user.hobbies.split(",");
            console.log(_this12.user);
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getUsersPosts",
        value: function getUsersPosts(id) {
          var _this13 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("posts").where("owner", "==", id).get().then(function (data) {
            _this13.posts = data.docs;
          });
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 31,
      vars: 9,
      consts: [[1, "row"], [1, "offset-sm-1", "col-sm-10"], [1, "card", "text-blank"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], [1, "col-sm-3", "text-center"], ["height", "256", "width", "256", 1, "img-circle", 3, "src"], [1, "col-sm-9"], ["class", "badge badge-pill badge-primary badge-lg ml-3", 4, "ngFor", "ngForOf"], [1, "card-title"], [3, "post", 4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-primary", "badge-lg", "ml-3"], [3, "post"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfileComponent_span_21_Template, 2, 1, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProfileComponent_app_post_30_Template, 1, 1, "app-post", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.photoURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.firstName + " " + ctx.user.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.bio);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.interests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.user.hobbies);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Posts by ", ctx.user.last_name, " (", ctx.posts.length, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"]],
      styles: [".img-circle[_ngcontent-%COMP%] {\r\n    border-radius: 128px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY2lyY2xlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEyOHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignupComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First and Last name are required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A valid email is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password Should by 8 Characters Long ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Passwords do not match!! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.message, " ");
      }
    }

    function SignupComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.userError.message, " ");
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(fb, authService) {
        _classCallCheck(this, SignupComponent);

        this.fb = fb;
        this.authService = authService;
        this.message = "";
        this.myForm = this.fb.group({
          firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
          confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(SignupComponent, [{
        key: "onSubmit",
        value: function onSubmit(signupform) {
          var _this14 = this;

          var email = signupform.value.email;
          var password = signupform.value.password;
          var firstName = signupform.value.firstName;
          var lastName = signupform.value.lastName;
          this.authService.signup(email, password, firstName, lastName).then(function (user) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]().collection("users").doc(user.uid).set({
              firstName: signupform.value.firstName,
              lastName: signupform.value.lastName,
              email: signupform.value.email,
              photoURL: user.photoURL,
              interests: "",
              bio: "",
              hobbies: ""
            }).then(function () {
              _this14.message = "You have been signed up successfully. Please login.";
            });
          })["catch"](function (error) {
            console.log(error);
            _this14.userError = error;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 36,
      vars: 15,
      consts: [[1, "row", "background"], [1, "col-sm-6", "background-left", "p-5", "pb-5"], [1, "col-sm-6", "background-right", "p-5", "pb-5"], [1, "row"], [1, "offset-sm-2", "col-sm-8"], [1, "card", "text-blank", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "card-text"], [3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "form-group", "col-sm-6"], ["type", "text", "placeholder", "First Name", 1, "form-control", 3, "formControl"], ["type", "text", "placeholder", "Last Name", 1, "form-control", 3, "formControl"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["type", "email", "placeholder", "Enter your email", 1, "form-control", 3, "formControl"], [1, "form-text", "text-muted"], ["type", "password", "placeholder", "Password", 1, "form-control", 3, "formControl", "ngModel", "ngModelChange"], ["type", "password", "placeholder", " Confirm Password", 1, "form-control", 3, "formControl", "ngModel", "ngModelChange"], [1, "text-center"], ["type", "submit", 1, "btn", "btn-block", "btn-warning", 3, "disabled"], ["class", "alert alert-success", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Don't just think ! Blog It!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign up for free");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignupComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit(ctx.myForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SignupComponent_div_19_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " We'll never share your email with anyone else ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SignupComponent_div_24_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.pass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignupComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.cpass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SignupComponent_div_29_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, SignupComponent_div_30_Template, 2, 0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SignupComponent_div_34_Template, 2, 1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SignupComponent_div_35_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.myForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["firstName"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["lastName"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.myForm.controls["firstName"].valid || !ctx.myForm.controls["lastName"].valid) && (ctx.myForm.controls["firstName"].touched || ctx.myForm.controls["lastName"].touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["email"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["email"].valid && ctx.myForm.controls["email"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["password"])("ngModel", ctx.pass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.myForm.controls["confirmPassword"])("ngModel", ctx.cpass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.myForm.controls["password"].valid && ctx.myForm.controls["password"].touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.pass == ctx.cpass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx.myForm.valid && ctx.pass == ctx.cpass));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userError);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".background-left[_ngcontent-%COMP%] {\r\n    background-color: #2e7cf6;\r\n    background-image: url('/assets/Sign-Up-BG-Image.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: left bottom;\r\n}\r\n\r\n.background-right[_ngcontent-%COMP%] {\r\n    background-color: #2e7cf6;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    color: #fff;\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%]{ \r\n    color: #fff !important;\r\n}\r\n\r\n.btn[type=submit][_ngcontent-%COMP%]{\r\n    border-radius: 50px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFEQUFxRDtJQUNyRCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1sZWZ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTdjZjY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvU2lnbi1VcC1CRy1JbWFnZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcclxufVxyXG5cclxuLmJhY2tncm91bmQtcmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlN2NmNjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRleHQtbXV0ZWR7IFxyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0blt0eXBlPXN1Ym1pdF17XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/view/view.component.ts":
  /*!****************************************!*\
    !*** ./src/app/view/view.component.ts ***!
    \****************************************/

  /*! exports provided: ViewComponent */

  /***/
  function srcAppViewViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../comments/comments.component */
    "./src/app/comments/comments.component.ts");

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(activatedRoute, ngZone) {
        var _this15 = this;

        _classCallCheck(this, ViewComponent);

        this.activatedRoute = activatedRoute;
        this.ngZone = ngZone;
        this.post = {};
        this.postId = " ";
        var postId = this.activatedRoute.snapshot.paramMap.get("postId");
        this.postId = postId;
        firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]().collection("posts").doc(postId).get().then(function (docSnapshot) {
          _this15.ngZone.run(function () {
            _this15.post = docSnapshot.data();
            console.log(_this15.post);
          });
        });
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewComponent;
    }();

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["app-view"]],
      decls: 8,
      vars: 3,
      consts: [[1, "row", "mt-5"], [1, "col-sm-8", "offset-sm-2"], [3, "innerHTML"], [3, "postId"]],
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-comments", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.post.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postId", ctx.postId);
        }
      },
      directives: [_comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view',
          templateUrl: './view.component.html',
          styleUrls: ['./view.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Babu Lal Mali\Desktop\Internshala\Scribe\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map