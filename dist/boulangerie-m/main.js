"use strict";
(self["webpackChunkboulangerie_m"] = self["webpackChunkboulangerie_m"] || []).push([["main"],{

/***/ 6811:
/*!********************************************************!*\
  !*** ./src/app/admin/services/opening-days.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpeningDaysService": () => (/* binding */ OpeningDaysService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



class OpeningDaysService {
    constructor(firestore) {
        this.firestore = firestore;
        this.closingDaysCollection = this.firestore.collection('closingDays');
        this.closingDays = this.closingDaysCollection.valueChanges({ idField: 'rangeId' });
    }
    getAllClosingDays() {
        return this.closingDays;
    }
    addClosingDays(days) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.closingDaysCollection.add(days));
    }
    deleteClosingDays(rangeId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.closingDaysCollection
            .doc(rangeId)
            .delete());
    }
}
OpeningDaysService.ɵfac = function OpeningDaysService_Factory(t) { return new (t || OpeningDaysService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore)); };
OpeningDaysService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OpeningDaysService, factory: OpeningDaysService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 6566);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/pages/login-page/login-page.component */ 4291);
/* harmony import */ var _auth_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/pages/register-page/register-page.component */ 3527);
/* harmony import */ var _auth_services_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/services/admin.guard */ 3255);
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ 4681);
/* harmony import */ var _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/pages/order-form/order-form.component */ 4081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const redirectUnauthorizedToLogin = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.redirectUnauthorizedTo)(['connexion']);
const redirectAlreadyLoggedIn = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.redirectLoggedInTo)(['']);
const routes = [
    { path: '', redirectTo: 'commande', pathMatch: 'full' },
    Object.assign({ path: 'commande', component: _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_4__.OrderFormComponent }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.canActivate)(redirectUnauthorizedToLogin)),
    { path: 'mentions-legales', component: _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_3__.MentionsLegalesComponent },
    Object.assign({ path: 'connexion', component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.canActivate)(redirectAlreadyLoggedIn)),
    Object.assign({ path: 'inscription', component: _auth_pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_1__.RegisterPageComponent }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.canActivate)(redirectAlreadyLoggedIn)),
    {
        path: 'admin',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then((m) => m.AdminModule),
        canActivate: [_auth_services_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard]
    },
    Object.assign({ path: 'compte', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 8524)).then((m) => m.UserModule) }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_5__.canActivate)(redirectUnauthorizedToLogin)),
    { path: '**', redirectTo: 'commande' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/info-modal/template-modal.component */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/services/auth.service */ 6518);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/header/header.component */ 5123);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 1583);









class AppComponent {
    constructor(router, authService, auth, dialog) {
        this.router = router;
        this.authService = authService;
        this.auth = auth;
        this.dialog = dialog;
        this.activatedRoute = '';
        this.authService
            .isUserAuthenticated()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((user) => {
            if (user && !(user === null || user === void 0 ? void 0 : user.emailVerified)) {
                this.resendEmailVerificationEmailModal = this.dialog.open(_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent, {
                    data: {
                        title: "Email non vérifié",
                        bodyText: `
                <p>Votre compte a bien été créé mais vous n'avez pas validé votre email.</p>
                <p>Vous avez normalement reçu un mail de confirmation avec un lien sur lequel cliquer pour finaliser votre création de compte.</p>
                <p>Pensez à vérifier vos spams!</p>
                <p>Si vous n'avez pas reçu l'email, vous pouvez en redemander un autre en cliquant sur le bouton ci-dessous.</p>
                `,
                        buttonText: "Renvoyer un email",
                        buttonAction: () => this.auth.user.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(user => user === null || user === void 0 ? void 0 : user.sendEmailVerification())).subscribe()
                    },
                    disableClose: true,
                    width: '400px',
                    maxWidth: '90%',
                });
                this.resendEmailVerificationEmailModal
                    .afterClosed()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
                    this.logout();
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.first)())
                    .subscribe();
            }
        }))
            .subscribe();
    }
    logout() {
        this.authService.logout();
        window.location.reload();
    }
    onActivate() {
        this.activatedRoute = this.router.routerState.snapshot.url;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[3, "activatedRoute"], [1, "container-page"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1)(2, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("activatedRoute", ctx.activatedRoute);
    } }, directives: [_core_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: ["@charset \"UTF-8\";\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.container-page[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 128rem;\n  width: 100%;\n  background-color: #f9f7f8;\n  align-self: center;\n  padding-bottom: 6rem;\n}\n@media screen and (max-width: 959px) {\n  .container-page[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFxzdHlsZVxcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcc3R5bGVcXGFic3RyYWN0c1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBQU1BLGVBQUE7QUFjQSxrQkFBQTtBRGpCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFJRjtBQURBO0VBQ0UsT0FBQTtFQUNBLGlCQ1B1QjtFRFF2QixXQUFBO0VBQ0EseUJDVXFCO0VEVHJCLGtCQUFBO0VBQ0Esb0JBQUE7QUFJRjtBRUFJO0VGVko7SUFTSSxnQkFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1wYWdlIHtcclxuICBmbGV4OiAxO1xyXG4gIG1heC13aWR0aDogJGdsb2JhbC1jb250YWluZXItd2lkdGg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFwcC1saWdodC1ncmV5O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcclxuXHJcbiAgQGluY2x1ZGUgZm9yLXRhYmxldC1sYW5kc2NhcGUtZG93biB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gIH1cclxufSIsIi8qKlxyXG4qIEVuc2VtYmxlIGRlcyB2YXJpYWJsZXMgdXRpbGlzw6llcyBkYW5zIGxlIHN0eWxlXHJcbioqL1xyXG5cclxuJGdsb2JhbC1jb250YWluZXItd2lkdGg6IDEyOHJlbTtcclxuXHJcbi8qIFR5cG9ncmFwaHkgKi9cclxuJGZvbnQtc2l6ZS1yb290OiAxMHB4O1xyXG4kZm9udC1zaXplLWRlZmF1bHQ6IDEuNnJlbTtcclxuJGZvbnQtc2l6ZS1zdWJ0aXRsZTogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMC45O1xyXG4kZm9udC1zaXplLWg2OiAkZm9udC1zaXplLWRlZmF1bHQgKiAuNjc7XHJcbiRmb250LXNpemUtaDU6ICRmb250LXNpemUtZGVmYXVsdCAqIC44MztcclxuJGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMTtcclxuJGZvbnQtc2l6ZS1oMzogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMS4xNztcclxuJGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMS41O1xyXG4kZm9udC1zaXplLWgxOiAkZm9udC1zaXplLWRlZmF1bHQgKiAyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LTUwMCA6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQgOiBib2xkO1xyXG5cclxuLyogR2xvYmFsIGNvbG9ycyAqL1xyXG4kY29sb3ItYXBwLWJyb3duOiAjYWY3NjJmO1xyXG4kY29sb3ItYXBwLWxpZ2h0LWJyb3duOiAjZjVjZjhlO1xyXG4kY29sb3ItYXBwLWxpZ2h0LWdyZXk6ICNmOWY3Zjg7XHJcbiRjb2xvci1hcHAtZ3JleTogI2RmZDlkZDtcclxuJGNvbG9yLWFwcC1icm93bi1ncmV5OiAjYmVhMjhjO1xyXG4kY29sb3ItYXBwLWJpbzogIzZjOGQzMDtcclxuJGNvbG9yLWFwcC1saWdodC1iaW86ICNiNGM0NTc7IiwiQG1peGluIGZvci1waG9uZS1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LXVwIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItYmlnLWRlc2t0b3AtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1iaWctZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ 9744);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/footer/footer.component */ 1583);
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/header/header.component */ 5123);
/* harmony import */ var _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/info-modal/info-modal.component */ 9206);
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ 4681);
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order/order.module */ 8865);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/shared.module */ 4466);


























(0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__["default"], 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_0__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.LOCALE_ID, useValue: 'fr-FR' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.provideFirestore)(() => {
                const firestore = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.getFirestore)();
                // TODO: Pour avoir un émulateur en mode dev, a voir plus tard
                // connectFirestoreEmulator(firestore, 'localhost', 8080);
                // TODO: Pour sauvegarder les données de la db dans le cache pour rationaliser les appels. A voir dans un second temps
                // enableIndexedDbPersistence(firestore);
                return firestore;
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
            _order_order_module__WEBPACK_IMPORTED_MODULE_10__.OrderModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_9__.MentionsLegalesComponent, _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__.InfoModalComponent, _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_15__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__.FirestoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__.SharedModule,
        _order_order_module__WEBPACK_IMPORTED_MODULE_10__.OrderModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule] }); })();


/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 4466);
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ 1006);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 4291);
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ 3527);
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/admin.guard */ 3255);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ 6518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);











class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService, _services_admin_guard__WEBPACK_IMPORTED_MODULE_4__.AdminGuard], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__.LoginModalComponent, _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__.LoginPageComponent, _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_3__.RegisterPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 1006:
/*!**********************************************************************!*\
  !*** ./src/app/auth/components/login-modal/login-modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModalComponent": () => (/* binding */ LoginModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/auth/services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function LoginModalComponent_form_3_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginModalComponent_form_3_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mot de passe obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginModalComponent_form_3_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.loginErrorMessage, " ");
} }
function LoginModalComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4)(2, "mat-form-field", 5)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginModalComponent_form_3_mat_error_6_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "mat-form-field", 5)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginModalComponent_form_3_mat_error_12_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, LoginModalComponent_form_3_p_14_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Se connecter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginModalComponent_form_3_Template_span_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goToRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Pas encore inscrit ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4)(22, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginModalComponent_form_3_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.forgottenPassword = !ctx_r8.forgottenPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Mot de passe oubli\u00E9?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loginForm == null ? null : (tmp_1_0 = ctx_r0.loginForm.get("email")) == null ? null : tmp_1_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loginForm == null ? null : (tmp_2_0 = ctx_r0.loginForm.get("password")) == null ? null : tmp_2_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loginErrorMessage);
} }
function LoginModalComponent_form_4_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginModalComponent_form_4_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.resetPasswordErrorMessage, " ");
} }
function LoginModalComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.resetUserPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4)(2, "mat-form-field", 5)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LoginModalComponent_form_4_mat_error_6_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginModalComponent_form_4_p_8_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 16)(10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginModalComponent_form_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.forgottenPassword = !ctx_r13.forgottenPassword; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Annuler ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Envoyer l'email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.resetPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordForm == null ? null : (tmp_1_0 = ctx_r1.resetPasswordForm.get("email")) == null ? null : tmp_1_0.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.resetPasswordErrorMessage);
} }
class LoginModalComponent {
    constructor(fb, authService, router, dialog) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.loginErrorMessage = '';
        this.resetPasswordErrorMessage = '';
        this.forgottenPassword = false;
        this.title = this.forgottenPassword ? 'Mot de passe oublié' : 'Connexion';
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        this.resetPasswordForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    login() {
        if (this.loginForm.valid) {
            this.authService
                .login(this.loginForm.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe({
                next: () => {
                    this.router.navigate(['/commande']);
                    this.dialog.closeAll();
                },
                error: (err) => {
                    if (err.code === 'auth/wrong-password') {
                        this.loginErrorMessage =
                            'Mauvais e-mail ou mot de passe, veuillez réessayer.';
                    }
                    else {
                        this.loginErrorMessage =
                            'Une erreur est survenue, veuillez réessayer plus tard. ' +
                                err.message;
                    }
                },
            });
        }
    }
    resetUserPassword() {
        if (this.resetPasswordForm.valid) {
            this.authService
                .resetUserPassword(this.resetPasswordForm.value.email)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe({
                next: () => {
                    window.location.reload();
                },
                error: (err) => {
                    this.resetPasswordErrorMessage =
                        'Une erreur est survenue, veuillez réessayer plus tard. ' +
                            err.message;
                },
            });
        }
    }
    goToRegister() {
        this.router.navigate(['/inscription']);
        this.dialog.closeAll();
    }
}
LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
LoginModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], decls: 5, vars: 3, consts: [["matDialogTitle", "", "fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "email", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""], ["fxFlex", "87", "fxLayoutAlign", "center center", "class", "errorMessage", 4, "ngIf"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["fxLayout", "row", "fxLayoutAlign", "center center", "id", "registerRow"], [1, "link", 3, "click"], ["fxFlex", "87", "fxLayoutAlign", "center center", 1, "errorMessage"], ["matInput", "", "type", "text", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], ["class", "errorMessage", 4, "ngIf"], ["fxLayout", " wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "2", "fxFlexOrder.gt-xs", "1", "mat-raised-button", "", "type", "button", 3, "click"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "1", "fxFlexOrder.gt-xs", "2", "mat-raised-button", "", "type", "submit"], [1, "errorMessage"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginModalComponent_form_3_Template, 24, 4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginModalComponent_form_4_Template, 14, 3, "form", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.forgottenPassword ? "Mot de passe oubli\u00E9" : "Connexion", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.forgottenPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.forgottenPassword);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexOrderDirective], styles: ["@charset \"UTF-8\";\n\n\n\n#registerRow[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxhYnN0cmFjdHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0VBQUE7QUFNQSxlQUFBO0FBY0Esa0JBQUE7QURsQkE7RUFDSSxtQkFBQTtBQUtKIiwiZmlsZSI6ImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuXHJcbiNyZWdpc3RlclJvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59IiwiLyoqXHJcbiogRW5zZW1ibGUgZGVzIHZhcmlhYmxlcyB1dGlsaXPDqWVzIGRhbnMgbGUgc3R5bGVcclxuKiovXHJcblxyXG4kZ2xvYmFsLWNvbnRhaW5lci13aWR0aDogMTI4cmVtO1xyXG5cclxuLyogVHlwb2dyYXBoeSAqL1xyXG4kZm9udC1zaXplLXJvb3Q6IDEwcHg7XHJcbiRmb250LXNpemUtZGVmYXVsdDogMS42cmVtO1xyXG4kZm9udC1zaXplLXN1YnRpdGxlOiAkZm9udC1zaXplLWRlZmF1bHQgKiAwLjk7XHJcbiRmb250LXNpemUtaDY6ICRmb250LXNpemUtZGVmYXVsdCAqIC42NztcclxuJGZvbnQtc2l6ZS1oNTogJGZvbnQtc2l6ZS1kZWZhdWx0ICogLjgzO1xyXG4kZm9udC1zaXplLWg0OiAkZm9udC1zaXplLWRlZmF1bHQgKiAxO1xyXG4kZm9udC1zaXplLWgzOiAkZm9udC1zaXplLWRlZmF1bHQgKiAxLjE3O1xyXG4kZm9udC1zaXplLWgyOiAkZm9udC1zaXplLWRlZmF1bHQgKiAxLjU7XHJcbiRmb250LXNpemUtaDE6ICRmb250LXNpemUtZGVmYXVsdCAqIDI7XHJcblxyXG4kZm9udC13ZWlnaHQtNTAwIDogNTAwO1xyXG4kZm9udC13ZWlnaHQtYm9sZCA6IGJvbGQ7XHJcblxyXG4vKiBHbG9iYWwgY29sb3JzICovXHJcbiRjb2xvci1hcHAtYnJvd246ICNhZjc2MmY7XHJcbiRjb2xvci1hcHAtbGlnaHQtYnJvd246ICNmNWNmOGU7XHJcbiRjb2xvci1hcHAtbGlnaHQtZ3JleTogI2Y5ZjdmODtcclxuJGNvbG9yLWFwcC1ncmV5OiAjZGZkOWRkO1xyXG4kY29sb3ItYXBwLWJyb3duLWdyZXk6ICNiZWEyOGM7XHJcbiRjb2xvci1hcHAtYmlvOiAjNmM4ZDMwO1xyXG4kY29sb3ItYXBwLWxpZ2h0LWJpbzogI2I0YzQ1NzsiXX0= */"] });


/***/ }),

/***/ 4291:
/*!***************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/auth/components/login-modal/login-modal.component */ 1006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);



class LoginPageComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        this.dialog.open(_app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__.LoginModalComponent, {
            disableClose: true,
            width: '400px',
            maxWidth: '90%',
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 0, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3527:
/*!*********************************************************************!*\
  !*** ./src/app/auth/pages/register-page/register-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageComponent": () => (/* binding */ RegisterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/info-modal/template-modal.component */ 1977);
/* harmony import */ var _app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/utils/form-utils */ 6977);
/* harmony import */ var _app_shared_utils_validate_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/utils/validate-password */ 757);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/auth.service */ 6518);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 5227);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);

















function RegisterPageComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("email", ctx_r0.registerForm, ctx_r0.errorMessages));
} }
function RegisterPageComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("password", ctx_r1.registerForm, ctx_r1.errorMessages));
} }
function RegisterPageComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("confirmPassword", ctx_r2.registerForm, ctx_r2.errorMessages));
} }
function RegisterPageComponent_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("name", ctx_r3.registerForm, ctx_r3.errorMessages));
} }
function RegisterPageComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("phone", ctx_r4.registerForm, ctx_r4.errorMessages));
} }
function RegisterPageComponent_mat_error_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.getErrorMessage("street", ctx_r5.registerForm, ctx_r5.errorMessages, "address"));
} }
function RegisterPageComponent_mat_error_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.getErrorMessage("zipCode", ctx_r6.registerForm, ctx_r6.errorMessages, "address"));
} }
function RegisterPageComponent_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.getErrorMessage("city", ctx_r7.registerForm, ctx_r7.errorMessages, "address"));
} }
function RegisterPageComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Erreur : ", ctx_r8.errorMessage, "");
} }
class RegisterPageComponent {
    constructor(fb, authService, dialog, router) {
        this.fb = fb;
        this.authService = authService;
        this.dialog = dialog;
        this.router = router;
        this.errorMessage = '';
        this.regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#\$%\^&\*]).{8,}$/g);
        this.registerForm = this.fb.group({
            email: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
                ],
            ],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexPassword)],
            ],
            confirmPassword: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.regexPassword)],
            ],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{10}$')]],
            address: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            }),
        }, {
            validators: [
                _app_shared_utils_validate_password__WEBPACK_IMPORTED_MODULE_2__.ValidatePassword.MatchPassword('password', 'confirmPassword'),
            ],
        });
        this.getErrorMessage = _app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_1__.FormUtils.GetErrorMessage;
        this.errorMessages = {
            email: {
                required: 'Email obligatoire',
                pattern: 'Doit avoir le format email',
            },
            password: {
                required: 'Mot de passe obligatoire',
                pattern: 'Doit contenir 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux !@#$%^&*',
            },
            confirmPassword: {
                required: 'Confirmation du mot de passe obligatoire',
                pattern: 'Doit contenir 8 caractères, une lettre minuscule, une lettre majuscule, un chiffre et un de ces caractères spéciaux !@#$%^&*',
                matchPassword: 'Doit être identique au mot de passe',
            },
            name: {
                required: 'Nom de votre entreprise obligatoire',
            },
            phone: {
                required: 'Numéro de téléphone obligatoire',
                pattern: 'Doit contenir 10 chiffres',
            },
            street: {
                required: 'Rue obligatoire',
            },
            zipCode: {
                required: 'Code postal obligatoire',
                pattern: 'Doit contenir 5 chiffres',
            },
            city: {
                required: 'Ville obligatoire',
            },
        };
    }
    onSubmit() {
        if (this.registerForm.valid) {
            this.authService
                .register(this.registerForm.value)
                .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.take)(1))
                .subscribe({
                next: () => {
                    this.registerValidationModal = this.dialog.open(_app_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent, {
                        data: {
                            title: 'Félicitations!',
                            bodyText: `
            <p>Votre compte a bien été créé.</p>
            <p>Vous allez recevoir un email, veuillez suivre le lien pour valider votre compte.</p>
            <p>N'hésitez pas à nous contacter si vous rencontrez un problème.</p>
            `,
                        },
                        disableClose: true,
                        width: '400px',
                        maxWidth: '90%',
                    });
                    this.registerValidationModal
                        .afterClosed()
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.tap)(() => {
                        this.authService.logout();
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }))
                        .subscribe();
                },
                error: (error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        this.errorMessage =
                            'Il semblerait que cet e-mail est déjà utilisé, veuillez vous connecter.';
                    }
                    else {
                        window.alert("Une erreur s'est produit, veuillez réessayer plus tard." +
                            error.message);
                    }
                },
            });
        }
    }
}
RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
RegisterPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 64, vars: 10, consts: [["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center"], ["id", "welcomeContainer", "fxFlex", "40", "fxFlex.lt-md", "87", "fxLayout", "column", "fxLayoutAlign", "space-around center"], [1, "welcomeText"], ["fxHide", "", "fxShow.gt-sm", "", "alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logoRegisterForm"], ["fxLayout", "column", "fxLayoutAlign", "center", "fxFlex", "40", "fxFlex.lt-sm", "87", 3, "formGroup", "ngSubmit"], ["fxLayout", "column", "fxLayoutAlign", "center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "email", "placeholder", "Ex: restaurant-du-port@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "password", "required", ""], ["matInput", "", "type", "password", "formControlName", "confirmPassword", "required", ""], ["fxFlex", "50"], ["matInput", "", "type", "text", "placeholder", "Ex: Restaurant du port", "formControlName", "name", "required", ""], ["matInput", "", "type", "tel", "placeholder", "Ex: 0546331122", "formControlName", "phone", "required", ""], ["formGroupName", "address", "fxLayout", "column", "fxLayoutAlign", "center"], ["matInput", "", "type", "text", "placeholder", "Ex: 2 rue du port", "formControlName", "street", "required", ""], ["fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: 17000", "formControlName", "zipCode", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: La Rochelle", "formControlName", "city", "required", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["id", "submitRegistrationButton", "fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], [1, "link", 3, "click"], [1, "errorMessage"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Formulaire d'inscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Bienvenu sur le site de gestion de commandes de la boulangerie M, r\u00E9serv\u00E9 uniquement aux professionnels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Veuillez vous inscrire afin d'acc\u00E9der au formulaire, \u00E0 vos anciennes commandes, repasser les m\u00EAmes commandes et bien plus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6)(12, "mat-form-field", 7)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, RegisterPageComponent_mat_error_16_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 7)(18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, RegisterPageComponent_mat_error_21_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 7)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Confirmer le mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, RegisterPageComponent_mat_error_26_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 7)(30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Nom de votre entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, RegisterPageComponent_mat_error_33_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 7)(35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Num\u00E9ro de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, RegisterPageComponent_mat_error_38_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "mat-divider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 15)(42, "mat-form-field", 7)(43, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Rue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, RegisterPageComponent_mat_error_46_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "mat-form-field", 17)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Code postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, RegisterPageComponent_mat_error_51_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "mat-form-field", 17)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Ville");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, RegisterPageComponent_mat_error_56_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, RegisterPageComponent_div_57_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 0)(59, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " S'inscrire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 0)(62, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RegisterPageComponent_Template_span_click_62_listener() { return ctx.router.navigate(["/connexion"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "D\u00E9j\u00E0 inscrit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        let tmp_6_0;
        let tmp_6_1;
        let tmp_7_0;
        let tmp_7_1;
        let tmp_8_0;
        let tmp_8_1;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.registerForm.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.registerForm.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_3_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.registerForm.get("name")) == null ? null : tmp_4_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.registerForm.get("phone")) == null ? null : tmp_5_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.registerForm.get("address")) == null ? null : (tmp_6_1 = tmp_6_0.get("street")) == null ? null : tmp_6_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.registerForm.get("address")) == null ? null : (tmp_7_1 = tmp_7_0.get("zipCode")) == null ? null : tmp_7_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.registerForm.get("address")) == null ? null : (tmp_8_1 = tmp_8_0.get("city")) == null ? null : tmp_8_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultShowHideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton], styles: ["h2[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n@media screen and (min-width: 960px) {\n  h2[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n}\n.logoRegisterForm[_ngcontent-%COMP%] {\n  width: 22rem;\n}\n@media screen and (min-width: 960px) {\n  #welcomeContainer[_ngcontent-%COMP%] {\n    margin-right: 7rem;\n  }\n}\n.welcomeText[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#submitRegistrationButton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\nmat-divider[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXGFic3RyYWN0c1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7QUFESjtBQ3VCSTtFRHZCSjtJQUlRLGdCQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0ksWUFBQTtBQUFKO0FDY0k7RURYSjtJQUVRLGtCQUFBO0VBQU47QUFDRjtBQUdBO0VBQ0ksa0JBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7QUFBSjtBQUdBO0VBQ0ksbUJBQUE7QUFBSiIsImZpbGUiOiJyZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sb2dvUmVnaXN0ZXJGb3JtIHtcclxuICAgIHdpZHRoOiAyMnJlbTtcclxufVxyXG5cclxuI3dlbGNvbWVDb250YWluZXIge1xyXG4gICAgQGluY2x1ZGUgZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogN3JlbTtcclxuICAgIH1cclxufVxyXG5cclxuLndlbGNvbWVUZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3N1Ym1pdFJlZ2lzdHJhdGlvbkJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG5tYXQtZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59IiwiQG1peGluIGZvci1waG9uZS1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LXVwIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItYmlnLWRlc2t0b3AtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1iaWctZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 3255:
/*!**********************************************!*\
  !*** ./src/app/auth/services/admin.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6518);



class AdminGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate() {
        return this.authService.isUserAdmin().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(isAuth => isAuth));
    }
}
AdminGuard.ɵfac = function AdminGuard_Factory(t) { return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AdminGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AdminGuard, factory: AdminGuard.ɵfac });


/***/ }),

/***/ 6518:
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);




class AuthService {
    constructor(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
        this.userCollection = this.firestore.collection('users');
    }
    register(credentials) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((result) => {
            var _a;
            (_a = result.user) === null || _a === void 0 ? void 0 : _a.sendEmailVerification();
            return result.user;
        })
            .catch((error) => {
            throw error;
        })).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)((user) => {
            const newUser = {
                firebaseUid: user.uid,
                name: credentials.name,
                phone: credentials.phone,
                address: credentials.address,
                email: credentials.email,
                isAdmin: false
            };
            return this.saveUserAtRegistration(newUser);
        }));
    }
    saveUserAtRegistration(user) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.userCollection.doc(user.firebaseUid).set(user));
    }
    isUserAdmin() {
        if (this.isAdmin !== undefined) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.isAdmin);
        }
        else {
            return this.auth.user.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.switchMap)(userFirebase => this.userCollection.doc(userFirebase === null || userFirebase === void 0 ? void 0 : userFirebase.uid).valueChanges()), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(boulMUser => {
                this.isAdmin = boulMUser === null || boulMUser === void 0 ? void 0 : boulMUser.isAdmin;
                return boulMUser === null || boulMUser === void 0 ? void 0 : boulMUser.isAdmin;
            }));
        }
    }
    login(credentials) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((res) => {
            return res;
        }, (err) => {
            throw err;
        }));
    }
    logout() {
        this.auth.signOut();
    }
    isUserAuthenticated() {
        return this.auth.user;
    }
    resetUserPassword(email) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth.sendPasswordResetEmail(email)
            .then((res) => {
            return res;
        }, (err) => {
            throw err;
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1583:
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);






class FooterComponent {
    constructor(router, iconRegistry, sanitizer) {
        this.router = router;
        this.webSiteVersion = package_json__WEBPACK_IMPORTED_MODULE_0__.version;
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('../assets/logos/facebook-circular-logo.svg'));
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 27, vars: 1, consts: [["id", "footer", "fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign", "center center", "fxLayoutAlign.gt-sm", "space-evenly center"], ["href", "tel:0546010972", 1, "textWithIcon", "footerLink"], ["svgIcon", "facebook"], ["href", "https://www.facebook.com/pages/category/Bakery/Boulangerie-M-437577199741453/", "target", "blank", 1, "textWithIcon", "footerLink"], [3, "click"], ["href", "https://www.linkedin.com/in/alexandre-guerin/", "target", "blank", 1, "footerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div")(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Boulangerie M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " 127 Avenue du Lieutenant-Colonel Bernier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " 17000 La Rochelle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "p")(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " 05 46 01 09 72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Notre page facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div")(20, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_20_listener() { return ctx.router.navigate(["mentions-legales"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Mentions L\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " R\u00E9alis\u00E9 gracieusement par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Ithrandil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" / v ", ctx.webSiteVersion, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: ["@charset \"UTF-8\";\n\n\n\n#footer[_ngcontent-%COMP%] {\n  background-color: #bea28c;\n  border-top: solid 1px black;\n  color: #f9f7f8;\n  text-shadow: 1px 1px 0 black;\n  text-align: center;\n  padding-top: 1.5rem;\n  width: 100%;\n  margin-bottom: -23.4rem;\n}\n@media screen and (min-width: 960px) {\n  #footer[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n.textWithIcon[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.footerLink[_ngcontent-%COMP%] {\n  color: #f9f7f8;\n  text-shadow: 1px 1px 0 black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZVxcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXGFic3RyYWN0c1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBQU1BLGVBQUE7QUFjQSxrQkFBQTtBRGpCQTtFQUNJLHlCQ3FCbUI7RURwQm5CLDJCQUFBO0VBQ0EsY0NpQm1CO0VEaEJuQiw0QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7QUFFSjtBRVVJO0VGdEJKO0lBYVEsZ0JBQUE7RUFHTjtBQUNGO0FBQUE7RUFDSSxtQkFBQTtBQUdKO0FBQUE7RUFDSSxjQ0ZtQjtFREduQiw0QkFBQTtBQUdKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJhYnN0cmFjdHMvbWl4aW5zXCI7XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hcHAtYnJvd24tZ3JleTtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFjaztcclxuICAgIGNvbG9yOiAkY29sb3ItYXBwLWxpZ2h0LWdyZXk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwIGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjMuNHJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3ItdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnRleHRXaXRoSWNvbiB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4uZm9vdGVyTGluayB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWFwcC1saWdodC1ncmV5O1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMCBibGFjaztcclxufSIsIi8qKlxyXG4qIEVuc2VtYmxlIGRlcyB2YXJpYWJsZXMgdXRpbGlzw6llcyBkYW5zIGxlIHN0eWxlXHJcbioqL1xyXG5cclxuJGdsb2JhbC1jb250YWluZXItd2lkdGg6IDEyOHJlbTtcclxuXHJcbi8qIFR5cG9ncmFwaHkgKi9cclxuJGZvbnQtc2l6ZS1yb290OiAxMHB4O1xyXG4kZm9udC1zaXplLWRlZmF1bHQ6IDEuNnJlbTtcclxuJGZvbnQtc2l6ZS1zdWJ0aXRsZTogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMC45O1xyXG4kZm9udC1zaXplLWg2OiAkZm9udC1zaXplLWRlZmF1bHQgKiAuNjc7XHJcbiRmb250LXNpemUtaDU6ICRmb250LXNpemUtZGVmYXVsdCAqIC44MztcclxuJGZvbnQtc2l6ZS1oNDogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMTtcclxuJGZvbnQtc2l6ZS1oMzogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMS4xNztcclxuJGZvbnQtc2l6ZS1oMjogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMS41O1xyXG4kZm9udC1zaXplLWgxOiAkZm9udC1zaXplLWRlZmF1bHQgKiAyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LTUwMCA6IDUwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQgOiBib2xkO1xyXG5cclxuLyogR2xvYmFsIGNvbG9ycyAqL1xyXG4kY29sb3ItYXBwLWJyb3duOiAjYWY3NjJmO1xyXG4kY29sb3ItYXBwLWxpZ2h0LWJyb3duOiAjZjVjZjhlO1xyXG4kY29sb3ItYXBwLWxpZ2h0LWdyZXk6ICNmOWY3Zjg7XHJcbiRjb2xvci1hcHAtZ3JleTogI2RmZDlkZDtcclxuJGNvbG9yLWFwcC1icm93bi1ncmV5OiAjYmVhMjhjO1xyXG4kY29sb3ItYXBwLWJpbzogIzZjOGQzMDtcclxuJGNvbG9yLWFwcC1saWdodC1iaW86ICNiNGM0NTc7IiwiQG1peGluIGZvci1waG9uZS1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LXVwIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LXBvcnRyYWl0LW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjgwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1kZXNrdG9wLW9ubHkge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItYmlnLWRlc2t0b3AtZG93biB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1iaWctZGVza3RvcC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5123:
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _models_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/header */ 1427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/services/auth.service */ 6518);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 5227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);













function HeaderComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_3_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const menuElem_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.router.navigate([menuElem_r5.path]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuElem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuElem_r5.wording, " ");
} }
function HeaderComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_ul_3_li_1_Template, 2, 1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_3_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.menuElements);
} }
function HeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_9_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const menuElem_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.router.navigate([menuElem_r10.path]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const menuElem_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuElem_r10.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menuElem_r10.wording);
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.activatedRoute = '';
        this.menuElements = [];
    }
    ngOnChanges() {
        this.authService
            .isUserAuthenticated()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)((user) => (this.isConnected = user)), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.authService.isUserAdmin()), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((isAdmin) => {
            this.isAdmin = isAdmin;
        }))
            .subscribe({
            error: () => { },
            complete: () => this.createMenuElements(),
        });
    }
    createMenuElements() {
        if (!this.isConnected) {
            return;
        }
        else {
            if (this.isAdmin) {
                this.menuElements = _models_header__WEBPACK_IMPORTED_MODULE_0__.AdminMenuElement;
            }
            else {
                this.menuElements = _models_header__WEBPACK_IMPORTED_MODULE_0__.UserMenuElement;
            }
        }
    }
    logout() {
        this.authService.logout();
        window.location.reload();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { activatedRoute: "activatedRoute" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 3, consts: [["id", "header"], ["fxLayout", "row", "fxFlex", "100", "fxHide.lt-md", "", "fxLayoutAlign", "space-between center"], ["alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logo-header", 3, "click"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "space-between center", 4, "ngIf"], ["fxLayout", "row", "fxFlex", "100", "fxHide.gt-sm", "", "fxLayoutAlign", "center center"], ["id", "mobileMenuButton", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "space-between center"], ["class", "link", 3, "click", 4, "ngFor", "ngForOf"], ["id", "logoutHeader", "fxLayoutAlign", "center center", 1, "link", 3, "click"], [1, "link", 3, "click"], ["id", "mobileMenuButton", "mat-icon-button", "", 3, "matMenuTriggerFor"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "nav", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_2_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_ul_3_Template, 7, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nav", 4)(5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_5_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_button_6_Template, 3, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-menu", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isConnected && ctx.menuElements.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isConnected && ctx.menuElements.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuElements);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider], styles: ["@charset \"UTF-8\";\n\n\n\n[_nghost-%COMP%] {\n  \n  position: sticky;\n  \n  position: -webkit-sticky;\n  top: 0;\n  z-index: 99;\n}\n#header[_ngcontent-%COMP%] {\n  background-color: #bea28c;\n  border-bottom: solid 1px black;\n  color: #f9f7f8;\n  text-shadow: 1px 1px 0 black;\n}\n@media screen and (max-width: 599px) {\n  #header[_ngcontent-%COMP%] {\n    min-height: 6rem;\n  }\n}\n@media screen and (min-width: 960px) {\n  #header[_ngcontent-%COMP%] {\n    min-height: 14rem;\n  }\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.logo-header[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  max-height: 10rem;\n  margin-top: 6rem;\n  cursor: pointer;\n}\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-left: 2vw;\n    margin-right: 2vw;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 0;\n    margin-left: 2vw;\n    margin-right: 15vw;\n  }\n}\n#logoutHeader[_ngcontent-%COMP%] {\n  margin-right: 2vw;\n}\n#mobileMenuButton[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzdHlsZVxcYWJzdHJhY3RzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXGFic3RyYWN0c1xcX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFBQTtBQU1BLGVBQUE7QUFjQSxrQkFBQTtBRGpCQTtFQUNJLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFJSjtBQURBO0VBQ0kseUJDWW1CO0VEWG5CLDhCQUFBO0VBRUEsY0NPbUI7RURObkIsNEJBQUE7QUFHSjtBRW5CSTtFRldKO0lBUVEsZ0JBQUE7RUFJTjtBQUNGO0FFQUk7RUZiSjtJQVlRLGlCQUFBO0VBS047QUFDRjtBQURBO0VBQ0kscUJBQUE7QUFJSjtBQURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlKO0FFVkk7RUZFSjtJQU9RLGFBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBS047QUFDRjtBRUxJO0VGVko7SUFhUSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQU1OO0FBQ0Y7QUFIQTtFQUNJLGlCQUFBO0FBTUo7QUFIQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBTUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFic3RyYWN0cy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcImFic3RyYWN0cy9taXhpbnNcIjtcclxuXHJcbjpob3N0IHtcclxuICAgIC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYXBwLWJyb3duLWdyZXk7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XHJcblxyXG4gICAgY29sb3I6ICRjb2xvci1hcHAtbGlnaHQtZ3JleTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgYmxhY2s7XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLXBob25lLW9ubHkge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDZyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLXRhYmxldC1sYW5kc2NhcGUtdXAge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE0cmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ubG9nby1oZWFkZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3ItdGFibGV0LWxhbmRzY2FwZS1vbmx5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLWRlc2t0b3AtdXAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1dnc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNsb2dvdXRIZWFkZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAydnc7XHJcbn1cclxuXHJcbiNtb2JpbGVNZW51QnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiA1dnc7XHJcbn0iLCIvKipcclxuKiBFbnNlbWJsZSBkZXMgdmFyaWFibGVzIHV0aWxpc8OpZXMgZGFucyBsZSBzdHlsZVxyXG4qKi9cclxuXHJcbiRnbG9iYWwtY29udGFpbmVyLXdpZHRoOiAxMjhyZW07XHJcblxyXG4vKiBUeXBvZ3JhcGh5ICovXHJcbiRmb250LXNpemUtcm9vdDogMTBweDtcclxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XHJcbiRmb250LXNpemUtc3VidGl0bGU6ICRmb250LXNpemUtZGVmYXVsdCAqIDAuOTtcclxuJGZvbnQtc2l6ZS1oNjogJGZvbnQtc2l6ZS1kZWZhdWx0ICogLjY3O1xyXG4kZm9udC1zaXplLWg1OiAkZm9udC1zaXplLWRlZmF1bHQgKiAuODM7XHJcbiRmb250LXNpemUtaDQ6ICRmb250LXNpemUtZGVmYXVsdCAqIDE7XHJcbiRmb250LXNpemUtaDM6ICRmb250LXNpemUtZGVmYXVsdCAqIDEuMTc7XHJcbiRmb250LXNpemUtaDI6ICRmb250LXNpemUtZGVmYXVsdCAqIDEuNTtcclxuJGZvbnQtc2l6ZS1oMTogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMjtcclxuXHJcbiRmb250LXdlaWdodC01MDAgOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkIDogYm9sZDtcclxuXHJcbi8qIEdsb2JhbCBjb2xvcnMgKi9cclxuJGNvbG9yLWFwcC1icm93bjogI2FmNzYyZjtcclxuJGNvbG9yLWFwcC1saWdodC1icm93bjogI2Y1Y2Y4ZTtcclxuJGNvbG9yLWFwcC1saWdodC1ncmV5OiAjZjlmN2Y4O1xyXG4kY29sb3ItYXBwLWdyZXk6ICNkZmQ5ZGQ7XHJcbiRjb2xvci1hcHAtYnJvd24tZ3JleTogI2JlYTI4YztcclxuJGNvbG9yLWFwcC1iaW86ICM2YzhkMzA7XHJcbiRjb2xvci1hcHAtbGlnaHQtYmlvOiAjYjRjNDU3OyIsIkBtaXhpbiBmb3ItcGhvbmUtb25seSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1wb3J0cmFpdC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1wb3J0cmFpdC1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLXVwIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LWxhbmRzY2FwZS1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC1kb3duIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLWJpZy1kZXNrdG9wLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItYmlnLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9206:
/*!********************************************************************!*\
  !*** ./src/app/core/components/info-modal/info-modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoModalComponent": () => (/* binding */ InfoModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);





class InfoModalComponent {
    constructor() {
        this.dontShowAgain = false;
    }
}
InfoModalComponent.ɵfac = function InfoModalComponent_Factory(t) { return new (t || InfoModalComponent)(); };
InfoModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoModalComponent, selectors: [["app-info-modal"]], decls: 11, vars: 1, consts: [["mat-dialog-title", ""], ["fxLayout", "column"], [3, "change"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]], template: function InfoModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre formulaire \u00E9volue!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div")(4, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoModalComponent_Template_mat_checkbox_change_4_listener($event) { return ctx.dontShowAgain = $event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ne plus me montrer ce message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-dialog-actions", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckbox, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["[_nghost-%COMP%] {\n  text-align: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\np[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n#saveOrderDesktop[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 700px;\n  max-width: 90%;\n}\n\n#newCardProduct[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 400px;\n  max-width: 90%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFHRjs7QUFJQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREYiLCJmaWxlIjoiaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaDMge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xyXG59XHJcbi5pbWFnZUNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4jc2F2ZU9yZGVyRGVza3RvcCB7XHJcbiAgYm9yZGVyOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pIHNvbGlkIDFweDtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgLy8gY29udGVudDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZlX29yZGVyX2Rlc2t0b3AucG5nXCIpO1xyXG4gIC8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC8vICAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zYXZlX29yZGVyX21vYmlsZS5wbmdcIik7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4jbmV3Q2FyZFByb2R1Y3Qge1xyXG4gIGJvcmRlcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSBzb2xpZCAxcHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogOTAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4681:
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/mentions-legales/mentions-legales.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MentionsLegalesComponent": () => (/* binding */ MentionsLegalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MentionsLegalesComponent {
    constructor() { }
}
MentionsLegalesComponent.ɵfac = function MentionsLegalesComponent_Factory(t) { return new (t || MentionsLegalesComponent)(); };
MentionsLegalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentionsLegalesComponent, selectors: [["app-mentions-legales"]], decls: 57, vars: 0, consts: [["href", "https://www.freepik.com/vectors/background", 1, "bkgrdLink"], ["href", "https://www.flaticon.com/authors/freepik", "title", "Freepik"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]], template: function MentionsLegalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conditions G\u00E9n\u00E9rales d\u2019Utilisation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nous utilisons des liens de tracking Google. Nous stockons des cookies de navigations ainsi que les donn\u00E9es utilisateur n\u00E9cessaires au fonctionnement du site : informations de navigations, fonctionnalit\u00E9s annexes, et de localisation. Nous sommes susceptibles d\u2019afficher des pubs, et des pubs cibl\u00E9es par Google.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Article 1 : Objet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Les pr\u00E9sentes CGU ou Conditions G\u00E9n\u00E9rales d\u2019Utilisation encadrent juridiquement l\u2019utilisation des services du site boulangerie-m.web.app (ci-apr\u00E8s d\u00E9nomm\u00E9 \u00AB le site \u00BB). Constituant le contrat entre la soci\u00E9t\u00E9 Michon et l\u2019Utilisateur.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Article 2 : Mentions l\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " L\u2019\u00E9dition du site boulangerie-m.web.app est assur\u00E9e par la soci\u00E9t\u00E9 Michon, Siret n\u00B080886630500010, dont le si\u00E8ge social est localis\u00E9 au 127 avenue du Lieutenant Colonel Bernier, 17 000 La Rochelle. L\u2019h\u00E9bergeur du site boulangerie-m.web.app est la soci\u00E9t\u00E9 Google France, sise au 8 rue de Londres, 75009 Paris, France.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Article 3 : Acc\u00E8s au site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Le site boulangerie-m.web.app permet d\u2019acc\u00E9der gratuitement aux services suivants : \u2013 Affichage des articles \u2013 Mise en place du panier. Le site est accessible gratuitement depuis n\u2019importe o\u00F9 par tout utilisateur disposant d\u2019un acc\u00E8s \u00E0 Internet (sauf restriction par des pares-feux nationaux). Tous les frais n\u00E9cessaires pour l\u2019acc\u00E8s aux services (mat\u00E9riel informatique, connexion, internet\u2026) sont \u00E0 la charge de l\u2019Utilisateur. L\u2019acc\u00E8s au portail d\u00E9di\u00E9 aux administrateurs s\u2019effectue \u00E0 l\u2019aide d\u2019un identifiant et d\u2019un mot de passe. Pour des raisons de maintenance ou autres, l\u2019acc\u00E8s au site peut \u00EAtre interrompu ou suspendu par l\u2019\u00E9diteur sans pr\u00E9avis ni justification.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Article 4 : Collecte des donn\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Conform\u00E9ment \u00E0 la loi n\u00B078-17 du 6 janvier relative \u00E0 l\u2019informatique, aux fichiers et aux libert\u00E9s, la collecte et le traitement d\u2019informations personnelles s\u2019effectuent dans le respect de la vie priv\u00E9e. La liste des donn\u00E9es collect\u00E9es : Adresse postale \u2013 Num\u00E9ro de t\u00E9l\u00E9phone \u2013 Contenu du panier \u2013 Commandes finalis\u00E9es et en cours. Suivant la loi Informatique et Libert\u00E9s en date du 6 janvier 1978, articles 39 et 40, l\u2019Utilisateur dispose du droit d\u2019acc\u00E9der, de rectifier, de supprimer et d\u2019opposer ses donn\u00E9es personnelles. L\u2019exercice de ce droit s\u2019effectue par une demande \u00E0 cette adresse mail : boulangerie.m17@gmail.com (informations disponibles ici).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Article 5 : Propri\u00E9t\u00E9 intellectuelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Les marques, logos ainsi que les contenus du site boulangerie-m.web.app (illustrations graphiques, textes\u2026) sont prot\u00E9g\u00E9s par le Code de la propri\u00E9t\u00E9 intellectuelle et par le droit d\u2019auteur. La reproduction et la copie des contenus par l\u2019Utilisateur requi\u00E8rent une autorisation pr\u00E9alable du site. Dans ce cas, toute utilisation \u00E0 des usages commerciaux ou \u00E0 des fins publicitaires est proscrite.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Article 6 : Responsabilit\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Le site d\u00E9cline toute responsabilit\u00E9 concernant les \u00E9ventuels attaques, failles et fichiers informatiques pouvant infecter le mat\u00E9riel de l\u2019utilisateur apr\u00E8s l\u2019utilisation ou l\u2019acc\u00E8s \u00E0 ce site. Le site ne peut \u00EAtre tenu pour responsable en cas de force majeure ou du fait impr\u00E9visible et insurmontable d\u2019un tiers. La garantie totale de la s\u00E9curit\u00E9 et la confidentialit\u00E9 des donn\u00E9es n\u2019est pas assur\u00E9e par le site. Cependant, le site s\u2019engage \u00E0 mettre en \u0153uvre toutes les m\u00E9thodes requises pour le faire au mieux.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Article 7 : Liens hypertextes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Le site peut \u00EAtre constitu\u00E9 de liens hypertextes. En cliquant sur ces derniers, l\u2019Utilisateur sortira de la plateforme. Cette derni\u00E8re n\u2019a pas de contr\u00F4le et ne peut pas \u00EAtre tenue responsable du contenu des pages web relatives \u00E0 ces liens. Des liens dit \u00AB affili\u00E9s \u00BB peuvent \u00EAtre pr\u00E9sents sur le site. Un lien affili\u00E9 ou d\u2019affiliation est une URL sp\u00E9cifique utilis\u00E9e par un affili\u00E9 pour pointer vers une offre ou un produit d\u2019un marchand. Il est possible, \u00E0 la suite d\u2019un achat ou de la navigation par l\u2019Utilisateur sur le site d\u2019affiliation, qu\u2019une commission soit vers\u00E9e \u00E0 destination de la soci\u00E9t\u00E9 \u00E9ditrice.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Article 8 : Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lors des visites sur le site, l\u2019installation automatique d\u2019un cookie sur le logiciel de navigation de l\u2019Utilisateur peut survenir. Les cookies correspondent \u00E0 de petits fichiers d\u00E9pos\u00E9s temporairement sur le disque dur de l\u2019ordinateur de l\u2019Utilisateur. Ces cookies sont n\u00E9cessaires pour assurer l\u2019accessibilit\u00E9 et la navigation sur le site. Ces fichiers ne comportent pas d\u2019informations personnelles et ne peuvent pas \u00EAtre utilis\u00E9s pour l\u2019identification d\u2019une personne. L\u2019information pr\u00E9sente dans les cookies est utilis\u00E9e pour am\u00E9liorer les performances de navigation sur le site boulangerie-m.web.app. En naviguant sur le site, l\u2019Utilisateur accepte les cookies. Leur d\u00E9sactivation peut s\u2019effectuer via les param\u00E8tres du logiciel de navigation.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Article 9 : Dur\u00E9e du contrat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Le pr\u00E9sent contrat est valable pour une dur\u00E9e ind\u00E9termin\u00E9e. Le d\u00E9but de l\u2019utilisation des services du site marque l\u2019application du contrat \u00E0 l\u2019\u00E9gard de l\u2019Utilisateur.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Article 10 : Droit applicable et juridiction comp\u00E9tente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Le pr\u00E9sent contrat est soumis \u00E0 la l\u00E9gislation fran\u00E7aise. Dans un premier temps, la r\u00E9solution d\u2019\u00E9ventuels litiges entre les parties se fait \u00E0 l\u2019amiable. En cas d\u2019absence de r\u00E9solution \u00E0 l\u2019amiable, le recours aux tribunaux fran\u00E7ais comp\u00E9tents pour r\u00E9gler le contentieux s\u2019impose.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sources des ressources graphiques pr\u00E9sentes sur le site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Arri\u00E8re plan: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Background vector created by freepik - www.freepik.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Ic\u00F4nes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Freepik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " www.flaticon.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnRpb25zLWxlZ2FsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFMRjtJQU1JLGdCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJtZW50aW9ucy1sZWdhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogM3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 1427:
/*!**********************************!*\
  !*** ./src/app/models/header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMenuElement": () => (/* binding */ AdminMenuElement),
/* harmony export */   "UserMenuElement": () => (/* binding */ UserMenuElement)
/* harmony export */ });
const AdminMenuElement = [
    { wording: "Commandes", path: "admin/liste-commandes", icon: "list" },
    { wording: "Production", path: "admin/recap-production", icon: "supervisor_account" },
    { wording: "Produits", path: "admin/produits", icon: "fastfood" },
    { wording: "Jours fermés", path: "admin/gestion-fermeture", icon: "event_busy" },
    { wording: "Récap mensuel", path: "admin/recap-global-mensuel", icon: "checklist_rtl" },
];
const UserMenuElement = [
    { wording: "Formulaire", path: "/", icon: "shopping_basket" },
    { wording: "Mes infos", path: "compte/infos", icon: "account_circle" },
    { wording: "Mes commandes", path: "compte/mes-commandes", icon: "list" },
    // { wording: "Récap du mois dernier", path: "compte/recap", icon: "checklist_rtl" },
];


/***/ }),

/***/ 28:
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUnit": () => (/* binding */ ProductUnit),
/* harmony export */   "ProductUnitWording": () => (/* binding */ ProductUnitWording),
/* harmony export */   "ProductCategory": () => (/* binding */ ProductCategory),
/* harmony export */   "ProductCategoryWording": () => (/* binding */ ProductCategoryWording)
/* harmony export */ });
var ProductUnit;
(function (ProductUnit) {
    ProductUnit["KG"] = "KILO";
    ProductUnit["UNIT"] = "UNIT";
})(ProductUnit || (ProductUnit = {}));
var ProductUnitWording;
(function (ProductUnitWording) {
    ProductUnitWording["KG"] = "kilo";
    ProductUnitWording["UNIT"] = "unit\u00E9";
})(ProductUnitWording || (ProductUnitWording = {}));
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BAGUETTE"] = "BAGUETTE";
    ProductCategory["SANDWICH"] = "SANDWICH";
    ProductCategory["INDIVIDUEL"] = "INDIVIDUEL";
    ProductCategory["COUPE"] = "COUPE";
    ProductCategory["PIECE"] = "PIECE";
    ProductCategory["VIENNOISERIE"] = "VIENNOISERIE";
    ProductCategory["MIE"] = "MIE";
    ProductCategory["GATEAU"] = "GATEAU";
    ProductCategory["PATE"] = "PATE";
    ProductCategory["SALE"] = "SALE";
})(ProductCategory || (ProductCategory = {}));
var ProductCategoryWording;
(function (ProductCategoryWording) {
    ProductCategoryWording["BAGUETTE"] = "Baguettes";
    ProductCategoryWording["SANDWICH"] = "Pains sandwichs";
    ProductCategoryWording["INDIVIDUEL"] = "Pains individuels";
    ProductCategoryWording["COUPE"] = "Pains \u00E0 la coupe";
    ProductCategoryWording["PIECE"] = "Pains \u00E0 la pi\u00E8ce";
    ProductCategoryWording["VIENNOISERIE"] = "Viennoiseries";
    ProductCategoryWording["MIE"] = "Pains de mie / Buns";
    ProductCategoryWording["GATEAU"] = "G\u00E2teaux de voyage";
    ProductCategoryWording["PATE"] = "P\u00E2tes";
    ProductCategoryWording["SALE"] = "Sal\u00E9s";
})(ProductCategoryWording || (ProductCategoryWording = {}));
// FIXME: FAIRE DES BUILDER POUR LE WORDING CATEG ET UNIT COUCHES MVC car là duplication à mort


/***/ }),

/***/ 5649:
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderRoutingModule": () => (/* binding */ OrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ 4081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_0__.OrderFormComponent }];
class OrderRoutingModule {
}
OrderRoutingModule.ɵfac = function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); };
OrderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8865:
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderModule": () => (/* binding */ OrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-material-timepicker */ 761);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 5649);
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ 4081);
/* harmony import */ var _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/mondayStartWeekDateAdapter.service */ 7324);
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/order-summary.pipe */ 3052);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/order.service */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





















class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter, useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_2__.MondayStartWeekDateAdapter },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
            // TODO: chercher pourquoi je ne peux pas enlever certains imports de modules ici et ds un autre
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_20__.NgxMaterialTimepickerModule,
        ], _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_1__.OrderFormComponent,
        _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        // TODO: chercher pourquoi je ne peux pas enlever certains imports de modules ici et ds un autre
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__.MatExpansionModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__.MatDividerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_20__.NgxMaterialTimepickerModule], exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderRoutingModule] }); })();


/***/ }),

/***/ 4081:
/*!****************************************************************!*\
  !*** ./src/app/order/pages/order-form/order-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderFormComponent": () => (/* binding */ OrderFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/components/info-modal/template-modal.component */ 1977);
/* harmony import */ var _app_shared_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/utils/date.utils */ 3268);
/* harmony import */ var _app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/utils/form-utils */ 6977);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/product */ 28);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/order.service */ 4584);
/* harmony import */ var _app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/admin/services/opening-days.service */ 6811);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _app_user_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/user/services/user.service */ 427);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-material-timepicker */ 761);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout/extended */ 5227);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/order-summary.pipe */ 3052);



























function OrderFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("deliveryDate", ctx_r1.orderForm, ctx_r1.errorMessages));
} }
function OrderFormComponent_mat_form_field_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 17)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Heure de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 22)(4, "ngx-material-timepicker", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngxTimepicker", _r9)("format", 24);
} }
function OrderFormComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" le ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, (tmp_0_0 = ctx_r3.orderForm.get("deliveryDate")) == null ? null : tmp_0_0.value, "fullDate"), " ");
} }
function OrderFormComponent_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r4.customMessage);
} }
function OrderFormComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function OrderFormComponent_ng_template_33_mat_expansion_panel_0_mat_card_5_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42)(1, "mat-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Tranch\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r14.sliceFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", product_r13.name);
} }
function OrderFormComponent_ng_template_33_mat_expansion_panel_0_mat_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 31)(1, "mat-expansion-panel", 32)(2, "mat-expansion-panel-header", 33)(3, "mat-panel-title", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 35)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "mat-form-field", 36)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Commentaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, OrderFormComponent_ng_template_33_mat_expansion_panel_0_mat_card_5_div_13_Template, 3, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-card-content", 39)(15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 40)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", product_r13.isBio ? "is-bio" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](product_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r12.commentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", product_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", product_r13.isSliceable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" Prix: ", product_r13.price.toFixed(2), " \u20AC H.T. / ", product_r13.unit === ctx_r12.PRODUCTUNIT.KG ? ctx_r12.PRODUCTUNITWORDING.KG : ctx_r12.PRODUCTUNITWORDING.UNIT, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r12.itemFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControlName", product_r13.name);
} }
function OrderFormComponent_ng_template_33_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-expansion-panel", 27)(1, "mat-expansion-panel-header", 28)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, OrderFormComponent_ng_template_33_mat_expansion_panel_0_mat_card_5_Template, 21, 10, "mat-card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r10.findProductCategoryWording(category_r11.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r10.filterProductByCategory(category_r11.value));
} }
function OrderFormComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, OrderFormComponent_ng_template_33_mat_expansion_panel_0_Template, 6, 2, "mat-expansion-panel", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "keyvalue");
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 1, ctx_r7.PRODUCTCATEGORY));
} }
function OrderFormComponent_div_41_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "p", 47);
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", item_r19, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function OrderFormComponent_div_41_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h3", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Commentaire de la commande : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function OrderFormComponent_div_41_pre_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("      ", (tmp_0_0 = ctx_r18.orderForm.get("orderComment")) == null ? null : tmp_0_0.value, "\n    ");
} }
function OrderFormComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "R\u00E9sum\u00E9 de la commande :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, OrderFormComponent_div_41_p_4_Template, 1, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "summaryPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, OrderFormComponent_div_41_h3_6_Template, 2, 0, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, OrderFormComponent_div_41_pre_7_Template, 2, 1, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Prix total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 4, ctx_r8.orderSummary));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.orderForm.get("orderComment")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.orderForm.get("orderComment")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r8.orderForm.get("totalPrice")) == null ? null : tmp_3_0.value.toFixed(2), " \u20AC H.T. ");
} }
class OrderFormComponent {
    constructor(orderService, openingDaysService, fb, dialog, userService) {
        this.orderService = orderService;
        this.openingDaysService = openingDaysService;
        this.fb = fb;
        this.dialog = dialog;
        this.userService = userService;
        this.orderSummary = {
            products: [],
            sliced: [],
            comments: [],
        };
        this.customMessage = "";
        this.closingDays = [];
        this.PRODUCTCATEGORY = _models_product__WEBPACK_IMPORTED_MODULE_3__.ProductCategory;
        this.PRODUCTCATEGORYWORDING = Object.entries(_models_product__WEBPACK_IMPORTED_MODULE_3__.ProductCategoryWording);
        this.PRODUCTUNIT = _models_product__WEBPACK_IMPORTED_MODULE_3__.ProductUnit;
        this.PRODUCTUNITWORDING = _models_product__WEBPACK_IMPORTED_MODULE_3__.ProductUnitWording;
        this.tomorrow = new Date();
        this.minimalDay = new Date();
        this.filterDaysAfterToday = _app_shared_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.FilterDaysAfterToday;
        this.orderDays = _app_shared_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.OrderDays;
        this.IsItOpenToday = _app_shared_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.IsItOpenToday;
        this.setMinimalDay = _app_shared_utils_date_utils__WEBPACK_IMPORTED_MODULE_1__.DateUtils.SetMinimalDay;
        this.selectDeliveryTime = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.productList = [];
        this.orderForm = this.fb.group({
            deliveryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            deliveryTime: [null],
            orderDate: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            orderComment: [''],
            totalPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
        this.getErrorMessage = _app_shared_utils_form_utils__WEBPACK_IMPORTED_MODULE_2__.FormUtils.GetErrorMessage;
        this.errorMessages = {
            deliveryDate: {
                required: 'Date de livraison obligatoire',
                matDatepickerMin: 'Date incorrecte',
            },
        };
        this.isItOpenToday = (d) => {
            return this.IsItOpenToday(d, this.closingDays);
        };
        this.tomorrow.setDate(new Date().getDate() + 1);
        this.itemFormGroup = this.fb.group({
            default: [''],
        });
        this.sliceFormGroup = this.fb.group({
            default: [''],
        });
        this.commentFormGroup = this.fb.group({
            default: [''],
        });
        this.orderService
            .getAllAvailableItems()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)((resProdList) => {
            this.productList = resProdList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            this.itemFormGroup.removeControl('default');
            this.sliceFormGroup.removeControl('default');
            this.commentFormGroup.removeControl('default');
            resProdList.forEach((product) => {
                var _a, _b, _c;
                (_a = this.itemFormGroup) === null || _a === void 0 ? void 0 : _a.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null));
                (_b = this.sliceFormGroup) === null || _b === void 0 ? void 0 : _b.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null));
                (_c = this.commentFormGroup) === null || _c === void 0 ? void 0 : _c.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(null));
            });
        }))
            .subscribe();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([
            this.itemFormGroup.valueChanges,
            this.sliceFormGroup.valueChanges,
            this.commentFormGroup.valueChanges,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.unsubscribe$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([itemFormData, sliceFormData, commentFormData]) => {
            this.orderSummary = {
                products: Object.entries(itemFormData),
                sliced: Object.entries(sliceFormData),
                comments: Object.entries(commentFormData),
            };
            this.calcTotalPrice(itemFormData);
        }))
            .subscribe();
        this.openingDaysService
            .getAllClosingDays()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1))
            .subscribe((res) => {
            this.closingDays = res;
            this.closingDays = this.orderDays(this.closingDays);
            this.closingDays = this.filterDaysAfterToday(this.closingDays);
            this.minimalDay = this.setMinimalDay(this.minimalDay, this.closingDays);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.unsubscribe();
    }
    calcTotalPrice(itemFormData) {
        var _a;
        let totalPrice = 0;
        for (const [itemName, quantity] of Object.entries(itemFormData)) {
            if (quantity) {
                totalPrice +=
                    quantity *
                        this.productList.find((el) => el.name === itemName)
                            .price;
            }
            (_a = this.orderForm.get('totalPrice')) === null || _a === void 0 ? void 0 : _a.setValue(totalPrice);
        }
    }
    specificDeliveryTime(checked) {
        var _a, _b, _c;
        this.selectDeliveryTime = checked;
        if (this.selectDeliveryTime) {
            (_a = this.orderForm.get('deliveryTime')) === null || _a === void 0 ? void 0 : _a.enable();
        }
        else {
            (_b = this.orderForm.get('deliveryTime')) === null || _b === void 0 ? void 0 : _b.reset();
            (_c = this.orderForm.get('deliveryTime')) === null || _c === void 0 ? void 0 : _c.disable();
        }
    }
    onSubmit() {
        var _a;
        (_a = this.orderForm.get('orderDate')) === null || _a === void 0 ? void 0 : _a.setValue(new Date(Date.now()));
        const orderList = [];
        for (const [itemName, quantity] of Object.entries(this.itemFormGroup.value)) {
            if (quantity) {
                orderList.push({
                    product: itemName,
                    quantity,
                    unit: this.productList.find((el) => el.name === itemName)
                        .unit,
                });
            }
        }
        for (const [itemName, isSliced] of Object.entries(this.sliceFormGroup.value)) {
            if (isSliced) {
                const indexItem = orderList.findIndex((el) => (el === null || el === void 0 ? void 0 : el.product) === itemName);
                if (indexItem >= 0) {
                    orderList[indexItem].isSliced = true;
                }
            }
        }
        for (const [itemName, comment] of Object.entries(this.commentFormGroup.value)) {
            if (comment && comment.length > 0) {
                const indexItem = orderList.findIndex((el) => (el === null || el === void 0 ? void 0 : el.product) === itemName);
                if (indexItem >= 0) {
                    orderList[indexItem].comment = comment;
                }
            }
        }
        if (this.orderForm.valid && orderList.length > 0) {
            const finalOrder = Object.assign(Object.assign({}, this.orderForm.value), { order: orderList });
            this.userService.getUserInfos().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(userInfos => {
                let finalOrderWithUserInfos = Object.assign(Object.assign({}, finalOrder), { name: userInfos.name, phone: userInfos.phone, address: userInfos.address, firebaseUid: userInfos.firebaseUid });
                if (userInfos.hasDifferentDeliveryAddress && userInfos.deliveryAddress) {
                    finalOrderWithUserInfos = Object.assign(Object.assign({}, finalOrderWithUserInfos), { hasDifferentDeliveryAddress: userInfos.hasDifferentDeliveryAddress, deliveryAddress: userInfos.deliveryAddress });
                }
                return this.orderService.addOrder(finalOrderWithUserInfos);
            })).subscribe({
                next: () => {
                    this.validatedModal = this.dialog.open(_app_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent, {
                        data: {
                            title: "Votre commande a été validée.",
                            bodyText: `
              <p>La boulangerie M vous remercie de votre commande.</p>
              <p>En espérant vous revoir très prochainement et que votre commande vous satisfera pleinement.</p>
              `,
                            buttonAction: () => window.location.reload()
                        },
                        disableClose: true,
                        width: '400px',
                        maxWidth: '90%',
                    });
                },
                error: (err) => {
                    this.validatedModal = this.dialog.open(_app_shared_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent, {
                        data: {
                            title: "Oups",
                            bodyText: `
            <p>Une erreur a eu lieu la confirmation de votre commande, veuillez réessayer plus tard ou contacter la boulangerie directement. ${err}</p>
            `
                        },
                        disableClose: true,
                        width: '400px',
                        maxWidth: '90%',
                    });
                }
            });
        }
    }
    filterProductByCategory(category) {
        return this.productList.filter((prod) => prod.category === category);
    }
    findProductCategoryWording(category) {
        return (this.PRODUCTCATEGORYWORDING.find(el => el[0] === category))[1];
    }
}
OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) { return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_5__.OpeningDaysService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_app_user_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService)); };
OrderFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: OrderFormComponent, selectors: [["app-order-form"]], decls: 45, vars: 14, consts: [[3, "formGroup", "ngSubmit"], ["id", "delayMessage"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutAlign.gt-sm", "flex-start center"], ["fxFlex", "40", "fxFlex.lt-sm", "100", "appearance", "outline", 3, "click"], ["matInput", "", "required", "", "formControlName", "deliveryDate", "readonly", "", 3, "min", "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], [4, "ngIf"], ["fxLayout", "row", "id", "checkboxRow", "fxLayoutAlign", "center center", "fxLayoutAlign.gt-sm", "flex-start center"], [3, "checked", "change"], ["fxFlex", "40", "fxFlex.lt-sm", "100", "appearance", "outline", 4, "ngIf"], ["id", "deliveryMessage"], ["id", "customMessage", 4, "ngIf"], [1, "dividerOrderForm"], ["fxLayoutAlign", "center center", 4, "ngIf", "ngIfElse"], ["productContainer", ""], ["fxFlex", "40", "fxFlex.lt-sm", "100", "appearance", "outline"], ["matInput", "", "formControlName", "orderComment", "placeholder", "Ex: D\u00E9poser la livraison en arri\u00E8re cuisine, ..."], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "buttonRow"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["min", "06:00", "max", "12:00", "readonly", "", "matInput", "", "formControlName", "deliveryTime", 3, "ngxTimepicker", "format"], ["datePicker", ""], ["id", "customMessage"], ["fxLayoutAlign", "center center"], ["class", "productCategory", 4, "ngFor", "ngForOf"], [1, "productCategory"], [1, "categoryExpansionHeader"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayout.gt-sm", "row wrap", "fxLayoutAlign.gt-sm", "space-evenly center"], ["fxFlex.gt-sm", "48", 4, "ngFor", "ngForOf"], ["fxFlex.gt-sm", "48"], [1, "productExpansion"], [1, "productExpansionHeader"], [3, "ngClass"], ["fxFlex", "column", 1, "productExpansionBody"], ["appearance", "outline", 3, "formGroup"], ["matInput", "", "placeholder", "Ex: boules tranch\u00E9es, forme des pains, ...", 3, "formControlName"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between baseline", 1, "cardPriceQuantity", "m-card-content"], ["appearance", "outline", 1, "quantityInput", 3, "formGroup"], ["matInput", "", "type", "number", "min", "0", 3, "formControlName"], [3, "formGroup"], [1, "slicedCheckbox", 3, "formControlName"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["class", "orderCommentSummaryTitle", 4, "ngIf"], [3, "innerHtml"], [1, "orderCommentSummaryTitle"]], template: function OrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Commande professionnelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Compte tenu de nos m\u00E9thodes de production, toute commande doit \u00EAtre pass\u00E9e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "l'avant-veille");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " du jour de livraison (jours ouvr\u00E9s uniquement).");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, " Exemple : pour une livraison le mercredi, dernier d\u00E9lai le lundi \u00E0 18h. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2)(11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function OrderFormComponent_Template_mat_form_field_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17); return _r0.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Date de livraison");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 4)(15, "mat-datepicker-toggle", 5)(16, "mat-datepicker", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, OrderFormComponent_mat_error_18_Template, 2, 1, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 9)(20, "mat-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_20_listener($event) { return ctx.specificDeliveryTime($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, " Besoin d'une heure de livraison pr\u00E9cise? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, OrderFormComponent_mat_form_field_23_Template, 6, 2, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Votre livraison vous sera livr\u00E9e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, OrderFormComponent_span_26_Template, 3, 4, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, OrderFormComponent_p_28_Template, 2, 1, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, OrderFormComponent_div_32_Template, 2, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, OrderFormComponent_ng_template_33_Template, 2, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "mat-divider", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 2)(37, "mat-form-field", 17)(38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "Commentaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, OrderFormComponent_div_41_Template, 12, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 20)(43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, " Commander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](34);
        let tmp_5_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_13_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", ctx.minimalDay)("matDatepicker", _r0)("matDatepickerFilter", ctx.isItOpenToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.orderForm.get("deliveryDate")) == null ? null : tmp_5_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.orderForm.get("deliveryDate")) == null ? null : tmp_8_0.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ((tmp_9_0 = ctx.orderForm.get("deliveryTime")) == null ? null : tmp_9_0.value) ? "\u00E0 " + ((tmp_9_0 = ctx.orderForm.get("deliveryTime")) == null ? null : tmp_9_0.value) : "entre 6 heures et midi.", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.productList.length)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.orderForm.get("totalPrice")) == null ? null : tmp_13_0.value) > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatError, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_23__.TimepickerDirective, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_23__.NgxMaterialTimepickerComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_26__.MatExpansionPanelTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_28__.DefaultClassDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_21__.KeyValuePipe, _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_7__.OrderSummaryPipe], styles: ["@charset \"UTF-8\";\n\n\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n  text-decoration: underline;\n}\nform[_ngcontent-%COMP%] {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n@media screen and (min-width: 960px) {\n  form[_ngcontent-%COMP%] {\n    margin: 2.5rem 7.5rem 0 7.5rem;\n  }\n}\n#customMessage[_ngcontent-%COMP%] {\n  color: crimson;\n  font-size: 2.5rem;\n}\n#delayMessage[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n@media screen and (min-width: 960px) {\n  #delayMessage[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n#delayMessage[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n#checkboxRow[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n#deliveryMessage[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.dividerOrderForm[_ngcontent-%COMP%] {\n  margin: 2rem 0 2rem 0;\n}\n.productCategory[_ngcontent-%COMP%] {\n  background-color: #f9f7f8;\n  margin-bottom: 1rem;\n}\n.productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\nmat-expansion-panel-header.categoryExpansionHeader[_ngcontent-%COMP%], mat-expansion-panel-header.categoryExpansionHeader[_ngcontent-%COMP%]:focus {\n  background-color: white;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n#expansionPanelContent[_ngcontent-%COMP%] {\n  background-color: #f9f7f8;\n}\n.productExpansion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\nmat-expansion-panel-header.productExpansionHeader[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  font-size: 1.4rem;\n}\nmat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.cardPriceQuantity[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n.quantityInput[_ngcontent-%COMP%] {\n  max-width: 9rem;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix {\n  padding: 0;\n  border: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix input {\n  height: 3rem;\n}\n.productExpansionBody[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 1rem;\n}\n.productExpansionBody[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcc3R5bGVcXGFic3RyYWN0c1xcX3ZhcmlhYmxlcy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlXFxhYnN0cmFjdHNcXF9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7O0VBQUE7QUFNQSxlQUFBO0FBY0Esa0JBQUE7QURqQkE7RUFDSSxrQkFBQTtBQUlKO0FBREE7RUFDSSxxQkFBQTtFQUNBLDBCQUFBO0FBSUo7QUFEQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFJSjtBRU9JO0VGYko7SUFLUSw4QkFBQTtFQUtOO0FBQ0Y7QUFEQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREE7RUFDSSxnQkNYZTtBRGVuQjtBRVBJO0VGRUo7SUFJUSxlQUFBO0VBS047QUFDRjtBQUhJO0VBQ0ksMEJBQUE7QUFLUjtBQURBO0VBQ0ksbUJBQUE7QUFJSjtBQURBO0VBQ0ksZ0JDM0JlO0FEK0JuQjtBQURBO0VBQ0kscUJBQUE7QUFJSjtBQURBO0VBQ0kseUJDN0JtQjtFRDhCbkIsbUJBQUE7QUFJSjtBQUZJO0VBQ0ksZ0JBQUE7QUFJUjtBQUFBOztFQUVJLHVCQUFBO0VBQ0EseUhBQUE7QUFHSjtBQUNBO0VBQ0kseUJDN0NtQjtBRCtDdkI7QUFDQTtFQUNJLGdCQUFBO0FBRUo7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFDQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQ0E7RUFDSSxpQkFBQTtBQUVKO0FBQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUVKO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0FBQ1IiLCJmaWxlIjoib3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhYnN0cmFjdHMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJhYnN0cmFjdHMvbWl4aW5zXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3ItdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICAgICAgbWFyZ2luOiAyLjVyZW0gNy41cmVtIDAgNy41cmVtO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuI2N1c3RvbU1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG5cclxuI2RlbGF5TWVzc2FnZSB7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTUwMDtcclxuXHJcbiAgICBAaW5jbHVkZSBmb3ItdGFibGV0LWxhbmRzY2FwZS11cCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY2hlY2tib3hSb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI2RlbGl2ZXJ5TWVzc2FnZSB7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LTUwMDtcclxufVxyXG5cclxuLmRpdmlkZXJPcmRlckZvcm0ge1xyXG4gICAgbWFyZ2luOiAycmVtIDAgMnJlbSAwO1xyXG59XHJcblxyXG4ucHJvZHVjdENhdGVnb3J5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1hcHAtbGlnaHQtZ3JleTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICAgLm1hdC1jYXJkOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNhdGVnb3J5RXhwYW5zaW9uSGVhZGVyLFxyXG5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5jYXRlZ29yeUV4cGFuc2lvbkhlYWRlcjpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSxcclxuICAgICAgICAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuXHJcbiNleHBhbnNpb25QYW5lbENvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWFwcC1saWdodC1ncmV5O1xyXG59XHJcblxyXG4ucHJvZHVjdEV4cGFuc2lvbjpub3QoW2NsYXNzKj1cIm1hdC1lbGV2YXRpb24telwiXSkge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIucHJvZHVjdEV4cGFuc2lvbkhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmNhcmRQcmljZVF1YW50aXR5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLnF1YW50aXR5SW5wdXQge1xyXG4gICAgbWF4LXdpZHRoOiA5cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnF1YW50aXR5SW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucXVhbnRpdHlJbnB1dCBkaXYubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdEV4cGFuc2lvbkJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuKiBFbnNlbWJsZSBkZXMgdmFyaWFibGVzIHV0aWxpc8OpZXMgZGFucyBsZSBzdHlsZVxyXG4qKi9cclxuXHJcbiRnbG9iYWwtY29udGFpbmVyLXdpZHRoOiAxMjhyZW07XHJcblxyXG4vKiBUeXBvZ3JhcGh5ICovXHJcbiRmb250LXNpemUtcm9vdDogMTBweDtcclxuJGZvbnQtc2l6ZS1kZWZhdWx0OiAxLjZyZW07XHJcbiRmb250LXNpemUtc3VidGl0bGU6ICRmb250LXNpemUtZGVmYXVsdCAqIDAuOTtcclxuJGZvbnQtc2l6ZS1oNjogJGZvbnQtc2l6ZS1kZWZhdWx0ICogLjY3O1xyXG4kZm9udC1zaXplLWg1OiAkZm9udC1zaXplLWRlZmF1bHQgKiAuODM7XHJcbiRmb250LXNpemUtaDQ6ICRmb250LXNpemUtZGVmYXVsdCAqIDE7XHJcbiRmb250LXNpemUtaDM6ICRmb250LXNpemUtZGVmYXVsdCAqIDEuMTc7XHJcbiRmb250LXNpemUtaDI6ICRmb250LXNpemUtZGVmYXVsdCAqIDEuNTtcclxuJGZvbnQtc2l6ZS1oMTogJGZvbnQtc2l6ZS1kZWZhdWx0ICogMjtcclxuXHJcbiRmb250LXdlaWdodC01MDAgOiA1MDA7XHJcbiRmb250LXdlaWdodC1ib2xkIDogYm9sZDtcclxuXHJcbi8qIEdsb2JhbCBjb2xvcnMgKi9cclxuJGNvbG9yLWFwcC1icm93bjogI2FmNzYyZjtcclxuJGNvbG9yLWFwcC1saWdodC1icm93bjogI2Y1Y2Y4ZTtcclxuJGNvbG9yLWFwcC1saWdodC1ncmV5OiAjZjlmN2Y4O1xyXG4kY29sb3ItYXBwLWdyZXk6ICNkZmQ5ZGQ7XHJcbiRjb2xvci1hcHAtYnJvd24tZ3JleTogI2JlYTI4YztcclxuJGNvbG9yLWFwcC1iaW86ICM2YzhkMzA7XHJcbiRjb2xvci1hcHAtbGlnaHQtYmlvOiAjYjRjNDU3OyIsIkBtaXhpbiBmb3ItcGhvbmUtb25seSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1wb3J0cmFpdC11cCB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXRhYmxldC1wb3J0cmFpdC1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci10YWJsZXQtbGFuZHNjYXBlLXVwIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItdGFibGV0LWxhbmRzY2FwZS1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC1kb3duIHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItZGVza3RvcC1vbmx5IHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLWJpZy1kZXNrdG9wLWRvd24ge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItYmlnLWRlc2t0b3AtdXAge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7324:
/*!**********************************************************************!*\
  !*** ./src/app/order/services/mondayStartWeekDateAdapter.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MondayStartWeekDateAdapter": () => (/* binding */ MondayStartWeekDateAdapter)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class MondayStartWeekDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
    getFirstDayOfWeek() {
        return 1;
    }
}
MondayStartWeekDateAdapter.ɵfac = /*@__PURE__*/ function () { let ɵMondayStartWeekDateAdapter_BaseFactory; return function MondayStartWeekDateAdapter_Factory(t) { return (ɵMondayStartWeekDateAdapter_BaseFactory || (ɵMondayStartWeekDateAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MondayStartWeekDateAdapter)))(t || MondayStartWeekDateAdapter); }; }();
MondayStartWeekDateAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MondayStartWeekDateAdapter, factory: MondayStartWeekDateAdapter.ɵfac });


/***/ }),

/***/ 3052:
/*!******************************************************!*\
  !*** ./src/app/order/services/order-summary.pipe.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSummaryPipe": () => (/* binding */ OrderSummaryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class OrderSummaryPipe {
    transform(obj) {
        const tmpProducts = obj.products.filter((el) => el[1] && el[1] !== null && el[1] > 0);
        const tmpSliced = obj.sliced.filter((el) => el[1] !== null);
        const tmpComments = obj.comments.filter((el) => el[1] && el[1] !== null && el[1].length > 0);
        const res = [];
        tmpProducts.forEach((prodEl) => {
            res.push(`- ${prodEl[0]} : ${prodEl[1]}`);
            const sliced = tmpSliced.find((sliceEl) => sliceEl[0] === prodEl[0]);
            if (sliced && sliced[1]) {
                res[res.length - 1] = res[res.length - 1].concat(` - Tranché`);
            }
            const comment = tmpComments.find((commentEl) => commentEl[0] === prodEl[0]);
            if (comment) {
                res[res.length - 1] = res[res.length - 1].concat(`<br>&nbsp;&nbsp;Commentaire : ${comment[1]}`);
            }
        });
        return res;
    }
}
OrderSummaryPipe.ɵfac = function OrderSummaryPipe_Factory(t) { return new (t || OrderSummaryPipe)(); };
OrderSummaryPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "summaryPipe", type: OrderSummaryPipe, pure: true });


/***/ }),

/***/ 4584:
/*!*************************************************!*\
  !*** ./src/app/order/services/order.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



class OrderService {
    constructor(firestore) {
        this.firestore = firestore;
        this.ordersCollection = firestore.collection('orders');
    }
    getAllAvailableItems() {
        return this.firestore
            .collection('products', (ref) => ref.where('available', '==', true))
            .valueChanges();
    }
    addOrder(order) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.ordersCollection.add(order));
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_2__.AngularFirestore)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1977:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/info-modal/template-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateModalComponent": () => (/* binding */ TemplateModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);






function TemplateModalComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fermer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
class TemplateModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.buttonText = this.data.buttonText
            ? this.data.buttonText
            : 'Fermer';
        this.extraCloseButton = this.data.extraCloseButton
            ? this.data.extraCloseButton
            : false;
    }
    buttonAction() {
        if (this.data.buttonAction) {
            this.data.buttonAction();
            setTimeout(() => {
                this.dialogRef.close();
            }, 1000);
        }
        else {
            this.dialogRef.close();
        }
    }
}
TemplateModalComponent.ɵfac = function TemplateModalComponent_Factory(t) { return new (t || TemplateModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
TemplateModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateModalComponent, selectors: [["app-modal"]], decls: 10, vars: 4, consts: [["mat-dialog-title", ""], ["fxLayout", "column"], ["fxFlexLayout", "row wrap", 3, "innerHtml"], ["fxFlexLayout", "row", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-around center"], ["fxFlex", "100", "mat-button", "", 3, "mat-dialog-close", 4, "ngIf"], ["fxFlex", "100", "mat-button", "", 3, "click"], ["fxFlex", "100", "mat-button", "", 3, "mat-dialog-close"]], template: function TemplateModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TemplateModalComponent_button_7_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateModalComponent_Template_button_click_8_listener() { return ctx.buttonAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.data.bodyText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.extraCloseButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonText);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["[_nghost-%COMP%] {\n  text-align: center;\n}\n\nmat-dialog-actions.mat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJ0ZW1wbGF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWRpYWxvZy1hY3Rpb25zLm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi8vIFRPRE86IHJlZmFjdG8gcG91ciB1dGlsaXNlciBxdWUgY2V0dGUgbW9kYWxlIHBhcnRvdXQiXX0= */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/info-modal/template-modal.component */ 1977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule], exports: [_components_info_modal_template_modal_component__WEBPACK_IMPORTED_MODULE_0__.TemplateModalComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinnerModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule] }); })();


/***/ }),

/***/ 3268:
/*!********************************************!*\
  !*** ./src/app/shared/utils/date.utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateUtils": () => (/* binding */ DateUtils)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ 1385);

// TODO: refacto toutes avec date fns tant qu'à faire vu que j'utilise la lib pour le formattage en français
class DateUtils {
    static OrderDays(array) {
        return array
            .sort((el1, el2) => {
            if (el1.startingDate.seconds < el2.startingDate.seconds) {
                return -1;
            }
            if (el1.startingDate.seconds > el2.startingDate.seconds) {
                return 1;
            }
            return 0;
        });
    }
    static FilterDaysAfterToday(array) {
        const todayMidnight = new Date();
        todayMidnight.setHours(0, 0, 0, 0);
        return array.filter((el) => el.startingDate.seconds >= Math.floor(todayMidnight.getTime() / 1000));
    }
    static formatDaysToHumanDate(array) {
        return array
            .map((el) => {
            return {
                rangeId: el.rangeId,
                startingDate: el.startingDate.toDate(),
                endingDate: el.startingDate.seconds === el.endingDate.seconds
                    ? null
                    : el.endingDate.toDate(),
            };
        });
    }
    static SetMinimalDay(minimalDay, closingDays) {
        // Set à minuit
        minimalDay.setHours(0, 0, 0, 0);
        // Set à dans deux jours, délai minimum de livraison
        minimalDay.setDate(new Date().getDate() + 2);
        // Si on est samedi entre octobre et mai inclus, on tombe le lundi mais le dimanche n'est pas ouvré donc on rajoute un jour
        if (minimalDay.getDay() === 1 && (minimalDay.getMonth() > 8 || minimalDay.getMonth() < 5)) {
            minimalDay.setDate(minimalDay.getDate() + 1);
        }
        // Si le jour minimum de livraison est un dimanche entre octobre et mai inclus, c'est fermé, on rajoute un jour
        if (minimalDay.getDay() === 0 && (minimalDay.getMonth() > 8 || minimalDay.getMonth() < 5)) {
            minimalDay.setDate(minimalDay.getDate() + 1);
        }
        // Si un des jours de fermeture est prévu avant le jour minimum de livraison on rajoute un jour
        closingDays.forEach(closedDay => {
            if (closedDay.startingDate.seconds * 1000 <= minimalDay.getTime()) {
                minimalDay.setDate(minimalDay.getDate() + 1);
            }
        });
        // Si 18h passé, ajoute un jour
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date()) >= 18) {
            minimalDay.setDate(minimalDay.getDate() + 1);
        }
        return minimalDay;
    }
}
DateUtils.IsItOpenToday = (d, closingDays) => {
    d === null || d === void 0 ? void 0 : d.setHours(0, 0, 0, 0);
    const day = (d || new Date()).getDay();
    const month = (d || new Date()).getMonth();
    let res = true;
    // Sunday open only between june and september included
    if (day === 0 && (month > 8 || month < 5)) {
        res = false;
    }
    // get and inject specific closed day from closing days form
    if (d &&
        closingDays.find((el) => el.startingDate.seconds * 1000 <= (d === null || d === void 0 ? void 0 : d.getTime()) &&
            el.endingDate.seconds * 1000 >= (d === null || d === void 0 ? void 0 : d.getTime()))) {
        res = false;
    }
    return res;
};


/***/ }),

/***/ 6977:
/*!********************************************!*\
  !*** ./src/app/shared/utils/form-utils.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormUtils": () => (/* binding */ FormUtils)
/* harmony export */ });
class FormUtils {
    static GetErrorMessage(controlName, form, errorMessages, controlGroup) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const errors = [];
        if (controlGroup) {
            if ((_b = (_a = form.get(controlGroup)) === null || _a === void 0 ? void 0 : _a.get(controlName)) === null || _b === void 0 ? void 0 : _b.hasError('required')) {
                return errorMessages[controlName].required;
            }
            if ((_d = (_c = form.get(controlGroup)) === null || _c === void 0 ? void 0 : _c.get(controlName)) === null || _d === void 0 ? void 0 : _d.errors) {
                for (const key of Object.keys((_f = (_e = form.get(controlGroup)) === null || _e === void 0 ? void 0 : _e.get(controlName)) === null || _f === void 0 ? void 0 : _f.errors)) {
                    errors.push(errorMessages[controlName][key]);
                }
            }
        }
        else {
            if ((_g = form.get(controlName)) === null || _g === void 0 ? void 0 : _g.hasError('required')) {
                return errorMessages[controlName].required;
            }
            if ((_h = form.get(controlName)) === null || _h === void 0 ? void 0 : _h.errors) {
                for (const key of Object.keys((_j = form.get(controlName)) === null || _j === void 0 ? void 0 : _j.errors)) {
                    errors.push(errorMessages[controlName][key]);
                }
            }
        }
        return errors.join(', ');
    }
}


/***/ }),

/***/ 757:
/*!***************************************************!*\
  !*** ./src/app/shared/utils/validate-password.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidatePassword": () => (/* binding */ ValidatePassword)
/* harmony export */ });
class ValidatePassword {
    static MatchPassword(controlName, checkControlName) {
        return (controls) => {
            var _a;
            const control = controls.get(controlName);
            const checkControl = controls.get(checkControlName);
            if ((checkControl === null || checkControl === void 0 ? void 0 : checkControl.errors) && !checkControl.errors['matchPassword']) {
                return null;
            }
            if ((control === null || control === void 0 ? void 0 : control.value) !== (checkControl === null || checkControl === void 0 ? void 0 : checkControl.value)) {
                (_a = controls.get(checkControlName)) === null || _a === void 0 ? void 0 : _a.setErrors({ matchPassword: true });
                return { matchPassword: true };
            }
            else {
                return null;
            }
        };
    }
}


/***/ }),

/***/ 427:
/*!***********************************************!*\
  !*** ./src/app/user/services/user.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 3637);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 880);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 8427);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);






class UserService {
    constructor(auth, firestore) {
        this.auth = auth;
        this.firestore = firestore;
        this.ordersCollection = firestore.collection('orders');
    }
    getFirebaseUser() {
        return this.auth.user;
    }
    getUserInfos() {
        return this.auth.user.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)(user => { return this.firestore.doc(`users/${user === null || user === void 0 ? void 0 : user.uid}`).valueChanges(); }));
    }
    updateUserInformations(user, firebaseUid) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.firestore.doc(`users/${firebaseUid}`).update(user));
    }
    deleteDeliveryAddress(firebaseUid) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.firestore.doc(`users/${firebaseUid}`).update({
            deliveryAddress: firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore.FieldValue["delete"]()
        }));
    }
    getUserOrders(firebaseUid) {
        return this.firestore
            .collection('orders', (ref) => ref
            .where('firebaseUid', '==', firebaseUid))
            .valueChanges({ idField: 'orderId' });
    }
    getUserOrdersForSpecificMonth(firebaseUid, firstDayOfMonth) {
        let lastDayOfMonth = firstDayOfMonth;
        lastDayOfMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(lastDayOfMonth, { months: 1 });
        lastDayOfMonth = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(lastDayOfMonth, { seconds: 1 });
        return this.firestore
            .collection('orders', (ref) => ref
            .where('firebaseUid', '==', firebaseUid)
            .where('deliveryDate', '>=', firstDayOfMonth)
            .where('deliveryDate', '<=', lastDayOfMonth))
            .valueChanges({ idField: 'orderId' })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((orders) => orders.filter(order => !order.isCanceled)));
    }
    placeSameOrder(order) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.ordersCollection.add(order));
    }
    cancelOrder(orderId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.firestore.doc(`orders/${orderId}`).update({ isCanceled: true }));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    firebaseConfig: {
        apiKey: 'AIzaSyAdqYq28vpm_FbbmvbxFju8m0kOyKrfoaU',
        authDomain: 'boulangerie-m17.firebaseapp.com',
        projectId: 'boulangerie-m17',
        storageBucket: 'boulangerie-m17.appspot.com',
        messagingSenderId: '615948873412',
        appId: '1:615948873412:web:996ee9e9433f1db3016391',
        measurementId: 'G-SNJSWSZG0K',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"boulangerie-m","version":"2.1.0","scripts":{"ng":"ng","start":"ng serve","build":"ng --prod build --aot true","test":"ng test","lint":"ng lint --format=stylish --fix=true","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~13.2.4","@angular/cdk":"^13.2.4","@angular/common":"~13.2.4","@angular/compiler":"~13.2.4","@angular/core":"~13.2.4","@angular/fire":"^7.2.1","@angular/flex-layout":"^13.0.0-beta.38","@angular/forms":"~13.2.4","@angular/material":"^13.2.4","@angular/platform-browser":"~13.2.4","@angular/platform-browser-dynamic":"~13.2.4","@angular/router":"~13.2.4","date-fns":"^2.22.1","eslint":"^8.10.0","firebase":"^9.4.0","ngx-material-timepicker":"^5.5.3","rxfire":"^6.0.0","rxjs":"^7.5.4","tslib":"^2.1.0","tslint":"^6.1.3","typescript":"^4.5.5","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/architect":"^0.1302.5","@angular-devkit/build-angular":"^13.2.5","@angular-eslint/builder":"13.1.0","@angular-eslint/eslint-plugin":"13.1.0","@angular-eslint/eslint-plugin-template":"13.1.0","@angular-eslint/schematics":"13.1.0","@angular-eslint/template-parser":"13.1.0","@angular/cli":"~13.2.5","@angular/compiler-cli":"~13.2.4","@types/jasmine":"~3.5.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.20.5","@typescript-eslint/eslint-plugin":"5.11.0","@typescript-eslint/parser":"5.11.0","codelyzer":"^6.0.0","eslint":"^8.2.0","firebase-tools":"^9.23.3","fuzzy":"^0.1.3","husky":"^4.3.8","inquirer":"^6.2.2","inquirer-autocomplete-prompt":"^1.3.0","jasmine-core":"~3.6.0","jasmine-spec-reporter":"~5.0.0","karma":"~6.3.16","karma-chrome-launcher":"~3.1.0","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","lint-staged":"^10.5.4","open":"^7.4.2","prettier":"2.1.2","protractor":"~7.0.0","ts-node":"~8.3.0"},"husky":{"hooks":{"pre-commit":"lint-staged && ng lint","pre-push":"ng build --aot true"}},"lint-staged":{"*.{scss,ts,html,md}":"prettier --write"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map