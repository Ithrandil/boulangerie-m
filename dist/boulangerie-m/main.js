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



// FIXME: implement proper interface for closing day, one is already created in folder, manage undefined values
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
/* harmony import */ var _angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth-guard */ 6566);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/pages/login-page/login-page.component */ 4291);
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ 4681);
/* harmony import */ var _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order/pages/order-form/order-form.component */ 4081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const redirectUnauthorizedToLogin = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_3__.redirectUnauthorizedTo)(['connexion']);
const redirectAlreadyLoggedIn = () => (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_3__.redirectLoggedInTo)(['admin']);
const routes = [
    { path: '', redirectTo: 'commande', pathMatch: 'full' },
    { path: 'commande', component: _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__.OrderFormComponent },
    { path: 'mentions-legales', component: _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_1__.MentionsLegalesComponent },
    Object.assign({ path: 'connexion', component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_3__.canActivate)(redirectAlreadyLoggedIn)),
    Object.assign({ path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.module */ 7095)).then((m) => m.AdminModule) }, (0,_angular_fire_compat_auth_guard__WEBPACK_IMPORTED_MODULE_3__.canActivate)(redirectUnauthorizedToLogin)),
    // { path: '404', component: PageNotFoundPage },
    { path: '**', redirectTo: 'commande' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/auth/services/auth.service */ 6518);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 5227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 2796);












function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Plateforme de commande r\u00E9serv\u00E9e aux professionnels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.router.navigate([""]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Commandes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.router.navigate(["admin/recap-production"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Production ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.router.navigate(["admin/gestion-fermeture"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Jours ferm\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 25);
} }
function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r4);
} }
function AppComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.router.navigate(["admin/recap-production"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "supervisor_account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Production");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "fastfood");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.router.navigate(["admin/gestion-fermeture"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "event_busy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Fermeture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.router.navigate(["/"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function AppComponent_p_47_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_p_47_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.router.navigate(["admin"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Espace administrateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_p_48_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, authService, iconRegistry, sanitizer) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = '';
        this.authService
            .isUserAuthenticated()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((user) => {
            this.isConnected = user;
        }))
            .subscribe();
        iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('../assets/logos/facebook-circular-logo.svg'));
    }
    logoutAdminSpace() {
        this.authService.logout();
        this.router.navigate(['']);
    }
    onActivate() {
        this.activatedRoute = this.router.routerState.snapshot.url;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 53, vars: 11, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", "fxLayoutAlign.lt-sm", "center center", 1, "header"], ["fxFlex", "20", "fxHide.lt-sm", "", 3, "click"], ["alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logo-header", "link"], ["fxFlex", "60", "fxHide.lt-sm", "", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", "", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "80", 3, "click"], ["class", "mobileMenuButton", "fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "container-page"], [3, "activate"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column wrap", "fxLayoutAlign", "space-evenly center", 1, "footer"], [1, "textWithIcon"], ["svgIcon", "facebook", 1, "iconFb"], ["href", "https://www.facebook.com/pages/category/Bakery/Boulangerie-M-437577199741453/", "target", "blank", 1, "textWithIcon"], [1, "link", 3, "click"], [1, "link"], [3, "click", 4, "ngIf"], ["href", "https://www.linkedin.com/in/alexandre-guerin/", "target", "blank"], ["fxFlex", "60", "fxHide.lt-sm", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", ""], ["fxLayoutAlign", "center center", 1, "link", "logoutHeader", 3, "click"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 1, "mobileMenuButton", 3, "matMenuTriggerFor"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar-row", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_4_Template, 16, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_button_8_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_button_11_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_button_12_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_button_13_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_button_14_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_button_15_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { return ctx.logoutAdminSpace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12)(22, "router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_22_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "footer", 14)(24, "div")(25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Boulangerie M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " 127 Avenue du Lieutenant-Colonel Bernier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " 17000 La Rochelle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div")(32, "p")(33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " 05 46 01 09 72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Notre page facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div")(43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_43_listener() { return ctx.router.navigate(["mentions-legales"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Mentions L\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, AppComponent_p_47_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, AppComponent_p_48_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " R\u00E9alis\u00E9 gracieusement par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Ithrandil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("liste"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("production"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("produits"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("fermeture"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activatedRoute.includes("admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isConnected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarRow, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: url('bakery-background.jpg');\n  background-position: center;\n  background-size: cover;\n  background-color: var(--color-app-light-grey);\n}\n\n.container-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 90rem;\n  height: 100%;\n  background-color: var(--color-app-light-grey);\n  align-self: center;\n  overflow: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  height: 14rem;\n  border-bottom: solid 1px black;\n  color: var(--color-app-brown);\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    height: 6rem;\n  }\n}\n\n.logo-header[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  max-height: 10rem;\n}\n\n@media (max-width: 768px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n    z-index: 99;\n    position: relative;\n  }\n}\n\n.mobileMenuButton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-app-light-grey);\n}\n\n.logoutHeader[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  padding-top: 1.5rem;\n  margin-bottom: -11rem;\n  border-top: solid 1px black;\n  background-color: var(--color-app-light-grey);\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-bottom: -26.6rem;\n  }\n}\n\n[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  color: var(--color-app-brown);\n}\n\n.iconFb[_ngcontent-%COMP%] {\n  max-width: 2rem;\n}\n\n.textWithIcon[_ngcontent-%COMP%] {\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUVBLDhDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDZDQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLDZDQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBQ0U7RUFQRjtJQVFJLFlBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUZFO0VBSEY7SUFJSSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxZQUFBO0VBQ0EsNkNBQUE7QUFLRjs7QUFGQTtFQUNFLGlCQUFBO0FBS0Y7O0FBREE7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFIRTtFQVBGO0lBUUksdUJBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBOzs7O0VBSUUsNkJBQUE7QUFNRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFIQTtFQUNFLHFCQUFBO0FBTUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQvYmFrZXJ5LWJhY2tncm91bmQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxufVxyXG4uY29udGFpbmVyLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTByZW07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi8vIFNUWUxFIEhFQURFUlxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgaGVpZ2h0OiAxNHJlbTtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bik7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gIH1cclxufVxyXG4ubG9nby1oZWFkZXIge1xyXG4gIG1heC13aWR0aDogMTByZW07XHJcbiAgbWF4LWhlaWdodDogMTByZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9iaWxlTWVudUJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxufVxyXG5cclxuLmxvZ291dEhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi8vIHN0eWxlIGZvb3RlclxyXG4uZm9vdGVyIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKTtcclxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC0xMXJlbTtcclxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWxpZ2h0LWdyZXkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0yNi42cmVtO1xyXG4gIH1cclxufVxyXG5cclxuOmhvdmVyIC5saW5rIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmE6bGluayxcclxuYTp2aXNpdGVkLFxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bik7XHJcbn1cclxuXHJcbi5pY29uRmIge1xyXG4gIG1heC13aWR0aDogMnJlbTtcclxufVxyXG5cclxuLnRleHRXaXRoSWNvbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ 9744);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat */ 1879);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../environments/environment */ 2340);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.module */ 1674);
/* harmony import */ var _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/info-modal/info-modal.component */ 9206);
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ 4681);
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order/order.module */ 8865);


























(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__["default"], 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_0__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.LOCALE_ID, useValue: 'fr-FR' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebaseConfig),
            // FIXME: l'init en dessous ne fonctionnait pas, a voir prk
            // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.provideFirestore)(() => {
                const firestore = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.getFirestore)();
                // TODO: Pour avoir un émulateur en mode dev, a voir plus tard
                // connectFirestoreEmulator(firestore, 'localhost', 8080);
                // TODO: Pour sauvegarder les données de la db dans le cache pour rationaliser les appels. A voir dans un second temps
                // enableIndexedDbPersistence(firestore);
                return firestore;
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
            _order_order_module__WEBPACK_IMPORTED_MODULE_8__.OrderModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_7__.MentionsLegalesComponent, _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_6__.InfoModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_12__.AngularFireModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__.FirestoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _order_order_module__WEBPACK_IMPORTED_MODULE_8__.OrderModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__.FlexLayoutModule,
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__.AuthModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ 1006);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 4291);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 6518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);











class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_0__.LoginModalComponent, _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_1__.LoginPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule] }); })();


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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);












function LoginModalComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginModalComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mot de passe obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginModalComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.loginErrorMessage, " ");
} }
class LoginModalComponent {
    constructor(fb, authService, router, dialog) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.loginErrorMessage = '';
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
    }
    ngOnInit() { }
    login() {
        if (this.loginForm.valid) {
            this.authService
                .login(this.loginForm.value)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1))
                .subscribe(() => {
                this.router.navigate(['admin']);
                this.dialog.closeAll();
            }, (err) => {
                this.loginErrorMessage = err.message;
            });
        }
    }
}
LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
LoginModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], decls: 23, vars: 4, consts: [["matDialogTitle", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "fxLayoutAlign", "center center"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Ex: MySecretPassword", "formControlName", "password", "required", ""], ["fxFlex", "87", "fxLayoutAlign", "center center", "class", "errorMessage", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "2", "fxFlexOrder.gt-xs", "1", "mat-raised-button", "", "type", "button", "mat-dialog-close", "", 3, "click"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "1", "fxFlexOrder.gt-xs", "2", "mat-raised-button", "", "type", "submit"], ["fxFlex", "87", "fxLayoutAlign", "center center", 1, "errorMessage"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginModalComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3)(11, "mat-form-field", 4)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LoginModalComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LoginModalComponent_p_17_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginModalComponent_Template_button_click_19_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Se connecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm == null ? null : (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loginErrorMessage);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexOrderDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: [".errorMessage[_ngcontent-%COMP%] {\n  color: crimson;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImxvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTWVzc2FnZSB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);



class AuthService {
    constructor(auth) {
        this.auth = auth;
    }
    login(credentials) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(this.auth
            .signInWithEmailAndPassword(credentials.email, credentials.password)
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
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
    ngOnInit() { }
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
    ngOnInit() { }
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

/***/ 28:
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductUnit": () => (/* binding */ ProductUnit),
/* harmony export */   "ProductCategory": () => (/* binding */ ProductCategory)
/* harmony export */ });
var ProductUnit;
(function (ProductUnit) {
    ProductUnit["KG"] = "kilo";
    ProductUnit["UNIT"] = "unit\u00E9";
})(ProductUnit || (ProductUnit = {}));
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["BAGUETTE"] = "Baguettes";
    ProductCategory["SANDWICH"] = "Pains sandwichs";
    ProductCategory["INDIVIDUEL"] = "Pains individuels";
    ProductCategory["COUPE"] = "Pains \u00E0 la coupe";
    ProductCategory["PIECE"] = "Pains \u00E0 la pi\u00E8ce";
    ProductCategory["VIENNOISERIE"] = "Viennoiseries";
    ProductCategory["MIE"] = "Pains de mie";
    ProductCategory["GATEAU"] = "G\u00E2teaux de voyage";
    ProductCategory["PATES"] = "P\u00E2tes";
})(ProductCategory || (ProductCategory = {}));


/***/ }),

/***/ 5065:
/*!*****************************************************************************************!*\
  !*** ./src/app/order/components/form-validated-modal/form-validated-modal.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidatedModalComponent": () => (/* binding */ FormValidatedModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);




class FormValidatedModalComponent {
    constructor() { }
    ngOnInit() { }
}
FormValidatedModalComponent.ɵfac = function FormValidatedModalComponent_Factory(t) { return new (t || FormValidatedModalComponent)(); };
FormValidatedModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormValidatedModalComponent, selectors: [["app-form-validated"]], decls: 14, vars: 1, consts: [["mat-dialog-title", ""], ["fxLayout", "column wrap"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]], template: function FormValidatedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre commande a \u00E9t\u00E9 envoy\u00E9e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 1)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " La boulangerie M vous remercie de votre commande. En cas d'erreur ou de questions, n'h\u00E9sitez pas \u00E0 nous contacter au 05 46 01 09 72. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " En esp\u00E9rant vous revoir tr\u00E8s prochainement et que votre commande vous satifera pleinement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 3)(12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0tdmFsaWRhdGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJmb3JtLXZhbGlkYXRlZC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-material-timepicker */ 761);
/* harmony import */ var _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-validated-modal/form-validated-modal.component */ 5065);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-routing.module */ 5649);
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ 4081);
/* harmony import */ var _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/mondayStartWeekDateAdapter.service */ 7324);
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/order-summary.pipe */ 3052);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/order.service */ 4584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);






















class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _services_order_service__WEBPACK_IMPORTED_MODULE_5__.OrderService,
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter, useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_3__.MondayStartWeekDateAdapter },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrderRoutingModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__.NgxMaterialTimepickerModule,
        ], _order_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrderRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__.OrderFormComponent,
        _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_0__.FormValidatedModalComponent,
        _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderSummaryPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _order_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrderRoutingModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.FlexLayoutModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__.MatDividerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule,
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__.NgxMaterialTimepickerModule], exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_1__.OrderRoutingModule] }); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/order/components/form-validated-modal/form-validated-modal.component */ 5065);
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/product */ 28);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/order.service */ 4584);
/* harmony import */ var _app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/admin/services/opening-days.service */ 6811);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-material-timepicker */ 761);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ 5227);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/order-summary.pipe */ 3052);
























function OrderFormComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("name"));
} }
function OrderFormComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("phone"));
} }
function OrderFormComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("street", "address"));
} }
function OrderFormComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_41_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.getErrorMessage("street", "address"));
} }
function OrderFormComponent_div_41_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r16.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_div_41_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36)(1, "div", 9)(2, "mat-form-field", 10)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Rue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, OrderFormComponent_div_41_mat_error_6_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 3)(8, "mat-form-field", 4)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Code postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OrderFormComponent_div_41_mat_error_12_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-form-field", 4)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, OrderFormComponent_div_41_mat_error_17_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_0_1;
    let tmp_1_0;
    let tmp_1_1;
    let tmp_2_0;
    let tmp_2_1;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_0_1 = tmp_0_0.get("street")) == null ? null : tmp_0_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_1_1 = tmp_1_0.get("zipCode")) == null ? null : tmp_1_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_2_1 = tmp_2_0.get("city")) == null ? null : tmp_2_1.invalid);
} }
function OrderFormComponent_mat_error_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.getErrorMessage("deliveryDate"));
} }
function OrderFormComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "mat-form-field", 38)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Heure de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 39)(5, "ngx-material-timepicker", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngxTimepicker", _r18)("format", 24);
} }
function OrderFormComponent_p_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Votre livraison vous sera livr\u00E9e \u00E0 l'adresse renseign\u00E9e le ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 2, (tmp_0_0 = ctx_r9.orderForm.get("deliveryDate")) == null ? null : tmp_0_0.value, "fullDate"), " ", ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) ? "\u00E0 " + ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) : "entre 6 heures et midi.", " ");
} }
function OrderFormComponent_p_59_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0\u00A0- Elle devra \u00EAtre valid\u00E9e par la boulangerie M. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sans retour de leur part dans l'heure, consid\u00E9rez la comme annul\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function OrderFormComponent_p_59_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u00A0\u00A0- Certains produits ne sont pas disponibles. Ils ont \u00E9t\u00E9 d\u00E9sactiv\u00E9s dans le formulaire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderFormComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 42)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Attention, d\u00FB au d\u00E9lai court de votre commande: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, OrderFormComponent_p_59_span_3_Template, 5, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OrderFormComponent_p_59_span_4_Template, 3, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.showOrderNeedValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.showShortDeliveryMessage);
} }
function OrderFormComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderFormComponent_ng_template_67_mat_expansion_panel_0_mat_card_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 58)(1, "mat-checkbox", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tranch\u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r25.sliceFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", product_r24.name);
} }
const _c0 = function (a0) { return { unavailableItem: a0 }; };
function OrderFormComponent_ng_template_67_mat_expansion_panel_0_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-card", 48)(1, "mat-expansion-panel", 49)(2, "mat-expansion-panel-header", 50)(3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 51)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-form-field", 52)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Commentaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, OrderFormComponent_ng_template_67_mat_expansion_panel_0_mat_card_4_div_12_Template, 3, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-card-content", 55)(14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div")(17, "mat-form-field", 56)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r23.showShortDeliveryMessage && !product_r24.shortDelivery));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](product_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r23.commentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", product_r24.isSliceable);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" Prix: ", product_r24.price.toFixed(2), " \u20AC H.T. / ", product_r24.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r23.itemFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControlName", product_r24.name);
} }
function OrderFormComponent_ng_template_67_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel", 45)(1, "mat-expansion-panel-header", 46)(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OrderFormComponent_ng_template_67_mat_expansion_panel_0_mat_card_4_Template, 21, 12, "mat-card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](category_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r21.filterProductByCategory(category_r22.value));
} }
function OrderFormComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, OrderFormComponent_ng_template_67_mat_expansion_panel_0_Template, 5, 2, "mat-expansion-panel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "keyvalue");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, ctx_r13.PRODUCTCATEGORY));
} }
function OrderFormComponent_div_76_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "h3", 65);
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHtml", item_r30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function OrderFormComponent_div_76_h3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Commentaire de la commande : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function OrderFormComponent_div_76_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h3", 67)(1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("      ", (tmp_0_0 = ctx_r29.orderForm.get("orderComment")) == null ? null : tmp_0_0.value, "\n    ");
} }
function OrderFormComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60)(1, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "R\u00E9sum\u00E9 de la commande :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, OrderFormComponent_div_76_h3_4_Template, 1, 1, "h3", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "summaryPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, OrderFormComponent_div_76_h3_6_Template, 2, 0, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, OrderFormComponent_div_76_h3_7_Template, 3, 1, "h3", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "h2", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Prix total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx_r14.orderSummary));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r14.orderForm.get("totalPrice")) == null ? null : tmp_3_0.value.toFixed(2), " \u20AC H.T. ");
} }
class OrderFormComponent {
    constructor(orderService, openingDaysService, fb, dialog) {
        this.orderService = orderService;
        this.openingDaysService = openingDaysService;
        this.fb = fb;
        this.dialog = dialog;
        this.orderSummary = {
            products: [],
            sliced: [],
            comments: [],
        };
        // FIXME: TYPE MOI BORDEL
        this.closingDays = [];
        this.PRODUCTCATEGORY = _models_product__WEBPACK_IMPORTED_MODULE_1__.ProductCategory;
        this.tomorrow = new Date();
        this.showDeliveryMessage = false;
        this.showShortDeliveryMessage = false;
        this.showOrderNeedValidationMessage = false;
        this.selectDeliveryTime = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.productList = [];
        this.displayDeliveryForm = false;
        this.userChoiceDataManagement = false;
        this.orderForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]{10}$')]],
            address: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            }),
            deliveryAddress: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            }, { disabled: !this.displayDeliveryForm }),
            hasDifferentDeliveryAddress: [
                this.displayDeliveryForm,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            ],
            deliveryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            deliveryTime: [null],
            orderDate: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            orderComment: [''],
            totalPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.errorMessages = {
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
            deliveryDate: {
                required: 'Date de livraison obligatoire',
                matDatepickerMin: 'Date incorrecte',
            },
        };
        this.isItOpenToday = (d) => {
            const day = (d || new Date()).getDay();
            const month = (d || new Date()).getMonth();
            let res = true;
            // Sunday open only between june and september included
            if (day === 0 && (month > 8 || month < 5)) {
                res = false;
            }
            // get and inject specific closed day from closing days form
            if (d &&
                this.closingDays.find((el) => el.startingDate.seconds * 1000 <= (d === null || d === void 0 ? void 0 : d.getTime()) &&
                    el.endingDate.seconds * 1000 >= (d === null || d === void 0 ? void 0 : d.getTime()))) {
                res = false;
            }
            return res;
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)((resProdList) => {
            this.productList = resProdList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            this.itemFormGroup.removeControl('default');
            this.sliceFormGroup.removeControl('default');
            this.commentFormGroup.removeControl('default');
            resProdList.forEach((product) => {
                var _a, _b, _c;
                (_a = this.itemFormGroup) === null || _a === void 0 ? void 0 : _a.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null));
                (_b = this.sliceFormGroup) === null || _b === void 0 ? void 0 : _b.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null));
                (_c = this.commentFormGroup) === null || _c === void 0 ? void 0 : _c.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(null));
            });
            this.getUserDataFromLocalStorage();
        }))
            .subscribe();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            this.itemFormGroup.valueChanges,
            this.sliceFormGroup.valueChanges,
            this.commentFormGroup.valueChanges,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.unsubscribe$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(([itemFormData, sliceFormData, commentFormData]) => {
            this.orderSummary = {
                products: Object.entries(itemFormData),
                sliced: Object.entries(sliceFormData),
                comments: Object.entries(commentFormData),
            };
            this.calcTotalPrice(itemFormData);
        }))
            .subscribe();
        this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
        this.filterShortDeliveryProducts();
        this.openingDaysService
            .getAllClosingDays()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
            .subscribe((res) => (this.closingDays = res));
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
    hasDifferentDeliveryAddress(checked) {
        var _a, _b;
        this.displayDeliveryForm = checked;
        if (this.displayDeliveryForm) {
            (_a = this.orderForm.get('deliveryAddress')) === null || _a === void 0 ? void 0 : _a.enable();
        }
        else {
            (_b = this.orderForm.get('deliveryAddress')) === null || _b === void 0 ? void 0 : _b.disable();
        }
    }
    filterShortDeliveryProducts() {
        var _a, _b, _c;
        if (new Date(Date.now()).getHours() >= 18) {
            this.tomorrow.setDate(this.tomorrow.getDate() + 1);
        }
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([
            (_a = this.orderForm.get('deliveryDate')) === null || _a === void 0 ? void 0 : _a.valueChanges,
            (_b = this.orderForm.get('orderDate')) === null || _b === void 0 ? void 0 : _b.valueChanges,
        ])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(([deliveryDate, orderDate]) => {
            const orderTime = orderDate.getHours();
            const differenceIndays = (deliveryDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24);
            if (differenceIndays >= 1) {
                this.showDeliveryMessage = true;
                this.showShortDeliveryMessage = false;
                this.showOrderNeedValidationMessage = false;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.enable();
                    }
                });
            }
            else if (orderTime >= 11 &&
                orderTime < 18 &&
                differenceIndays < 1) {
                this.showDeliveryMessage = false;
                this.showOrderNeedValidationMessage = true;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        this.showShortDeliveryMessage = true;
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                    }
                });
            }
            else if (orderTime < 11 && differenceIndays < 1) {
                this.showDeliveryMessage = true;
                this.showOrderNeedValidationMessage = false;
                this.productList.forEach((product) => {
                    var _a;
                    if (!product.shortDelivery) {
                        this.showShortDeliveryMessage = true;
                        (_a = this.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                    }
                });
            }
        }))
            .subscribe();
        (_c = this.orderForm.get('orderDate')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
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
            this.userDataManagement();
            this.orderService
                .addOrder(finalOrder)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1))
                .subscribe(() => {
                this.validatedModal = this.dialog.open(_app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_0__.FormValidatedModalComponent, {
                    disableClose: true,
                    width: '400px',
                    maxWidth: '90%',
                });
                this.validatedModal
                    .afterClosed()
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(() => {
                    window.location.reload();
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.first)())
                    .subscribe();
            });
        }
    }
    getErrorMessage(controlName, controlGroup) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const errors = [];
        if (controlGroup) {
            if ((_b = (_a = this.orderForm.get(controlGroup)) === null || _a === void 0 ? void 0 : _a.get(controlName)) === null || _b === void 0 ? void 0 : _b.hasError('required')) {
                return this.errorMessages[controlName].required;
            }
            if ((_d = (_c = this.orderForm.get(controlGroup)) === null || _c === void 0 ? void 0 : _c.get(controlName)) === null || _d === void 0 ? void 0 : _d.errors) {
                for (const key of Object.keys((_f = (_e = this.orderForm.get(controlGroup)) === null || _e === void 0 ? void 0 : _e.get(controlName)) === null || _f === void 0 ? void 0 : _f.errors)) {
                    errors.push(this.errorMessages[controlName][key]);
                }
            }
        }
        else {
            if ((_g = this.orderForm.get(controlName)) === null || _g === void 0 ? void 0 : _g.hasError('required')) {
                return this.errorMessages[controlName].required;
            }
            if ((_h = this.orderForm.get(controlName)) === null || _h === void 0 ? void 0 : _h.errors) {
                for (const key of Object.keys((_j = this.orderForm.get(controlName)) === null || _j === void 0 ? void 0 : _j.errors)) {
                    errors.push(this.errorMessages[controlName][key]);
                }
            }
        }
        return errors.join(', ');
    }
    filterProductByCategory(category) {
        return this.productList.filter((prod) => prod.category === category);
    }
    getUserDataFromLocalStorage() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const userData = localStorage.getItem('userBoulM');
        if (userData && userData.length > 0) {
            const userDataParsed = JSON.parse(userData);
            this.userChoiceDataManagement = true;
            (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(userDataParsed.name);
            (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.setValue(userDataParsed.phone);
            (_d = (_c = this.orderForm
                .get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.setValue(userDataParsed.address.street);
            (_f = (_e = this.orderForm
                .get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.setValue(userDataParsed.address.zipCode);
            (_h = (_g = this.orderForm
                .get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.setValue(userDataParsed.address.city);
            // Deactivated for the first implementation
            // userDataParsed.order.forEach((el) => {
            //   this.itemFormGroup.get(el.product)?.setValue(el.quantity);
            //   this.sliceFormGroup.get(el.product)?.setValue(el.isSliced);
            //   this.commentFormGroup.get(el.product)?.setValue(el.comment);
            // });
            if (userDataParsed.deliveryAddress) {
                (_j = this.orderForm.get('hasDifferentDeliveryAddress')) === null || _j === void 0 ? void 0 : _j.setValue(true);
                this.hasDifferentDeliveryAddress(true);
                (_l = (_k = this.orderForm
                    .get('deliveryAddress')) === null || _k === void 0 ? void 0 : _k.get('street')) === null || _l === void 0 ? void 0 : _l.setValue(userDataParsed.deliveryAddress.street);
                (_o = (_m = this.orderForm
                    .get('deliveryAddress')) === null || _m === void 0 ? void 0 : _m.get('zipCode')) === null || _o === void 0 ? void 0 : _o.setValue(userDataParsed.deliveryAddress.zipCode);
                (_q = (_p = this.orderForm
                    .get('deliveryAddress')) === null || _p === void 0 ? void 0 : _p.get('city')) === null || _q === void 0 ? void 0 : _q.setValue(userDataParsed.deliveryAddress.city);
            }
            if (userDataParsed.deliveryTime) {
                (_r = this.orderForm.get('selectDeliveryTime')) === null || _r === void 0 ? void 0 : _r.setValue(true);
                this.specificDeliveryTime(true);
                (_s = this.orderForm
                    .get('deliveryTime')) === null || _s === void 0 ? void 0 : _s.setValue(userDataParsed.deliveryTime);
            }
            if (userDataParsed.orderComment) {
                (_t = this.orderForm
                    .get('orderComment')) === null || _t === void 0 ? void 0 : _t.setValue(userDataParsed.orderComment);
            }
        }
        localStorage.removeItem('haveSeenInfoBoulM');
    }
    userDataManagement() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        if (this.userChoiceDataManagement) {
            let userFormData = {
                name: (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.value,
                phone: (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.value,
                address: {
                    street: (_d = (_c = this.orderForm.get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.value,
                    zipCode: (_f = (_e = this.orderForm.get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.value,
                    city: (_h = (_g = this.orderForm.get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.value,
                },
            };
            if (this.displayDeliveryForm) {
                userFormData = Object.assign(Object.assign({}, userFormData), {
                    deliveryAddress: {
                        street: (_k = (_j = this.orderForm.get('deliveryAddress')) === null || _j === void 0 ? void 0 : _j.get('street')) === null || _k === void 0 ? void 0 : _k.value,
                        zipCode: (_m = (_l = this.orderForm.get('deliveryAddress')) === null || _l === void 0 ? void 0 : _l.get('zipCode')) === null || _m === void 0 ? void 0 : _m.value,
                        city: (_p = (_o = this.orderForm.get('deliveryAddress')) === null || _o === void 0 ? void 0 : _o.get('city')) === null || _p === void 0 ? void 0 : _p.value,
                    },
                });
            }
            if (this.selectDeliveryTime) {
                userFormData = Object.assign(Object.assign({}, userFormData), { deliveryTime: (_q = this.orderForm.get('deliveryTime')) === null || _q === void 0 ? void 0 : _q.value });
            }
            localStorage.setItem('userBoulM', JSON.stringify(userFormData));
            // Deactivated on first implementation
            // localStorage.setItem('userBoulM', JSON.stringify({...userFormData, ...finalOrder}));
        }
        else {
            localStorage.removeItem('userBoulM');
        }
    }
}
OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) { return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_admin_services_opening_days_service__WEBPACK_IMPORTED_MODULE_3__.OpeningDaysService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog)); };
OrderFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: OrderFormComponent, selectors: [["app-order-form"]], decls: 83, vars: 20, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "alert"], ["id", "boldAlert"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly space-evenly"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: Restaurant du port", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "tel", "placeholder", "Ex: 0546331122", "formControlName", "phone", "required", ""], ["formGroupName", "address"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: 2 rue du port", "formControlName", "street", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: 17000", "formControlName", "zipCode", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: La Rochelle", "formControlName", "city", "required", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", 1, "checkboxRow"], ["fxFlexOffset", "7", "formControlName", "hasDifferentDeliveryAddress", 3, "change"], ["formGroupName", "deliveryAddress", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center"], ["fxFlexOffset", "7", "fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline", 3, "click"], ["matInput", "", "required", "", "formControlName", "deliveryDate", "readonly", "", 3, "min", "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["fxFlexOffset", "7", 3, "checked", "change"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87", 4, "ngIf"], ["class", "deliveryMessage", 4, "ngIf"], ["class", "warningMessage", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["productContainer", ""], ["fxFlexOffset", "7", "fxFlex", "87", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "formControlName", "orderComment", "placeholder", "Ex: D\u00E9poser la livraison en arri\u00E8re cuisine, ..."], ["fxLayout", "column wrap", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "buttonRow"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["formGroupName", "deliveryAddress"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87"], ["appearance", "outline"], ["min", "06:00", "max", "12:00", "readonly", "", "matInput", "", "formControlName", "deliveryTime", 3, "ngxTimepicker", "format"], ["datePicker", ""], [1, "deliveryMessage"], [1, "warningMessage"], ["id", "importantSentence"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", "class", "productCategory", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", 1, "productCategory"], ["fxFlex", "100", 1, "productCategoryHeader"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass"], [1, "productExpansion"], [1, "productExpansionHeader"], [1, "productExpansionBody"], ["fxFlex", "100", "appearance", "outline", 3, "formGroup"], ["matInput", "", "placeholder", "Ex: boules tranch\u00E9es, forme des pains, ...", 3, "formControlName"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between baseline", 1, "cardPriceQuantity", "m-card-content"], ["appearance", "outline", 1, "quantityInput", 3, "formGroup"], ["matInput", "", "type", "number", "min", "0", 3, "formControlName"], [3, "formGroup"], [1, "slicedCheckbox", 3, "formControlName"], ["fxLayout", "column wrap", "fxLayoutAlign", "center center"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "orderCommentSummaryTitle", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "summaryComment", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2"], [3, "innerHtml"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "orderCommentSummaryTitle"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "summaryComment"]], template: function OrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Attention, votre site de commande \u00E9volue ce weekend! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Les d\u00E9lais de livraison vont changer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Pour \u00E9viter tout probl\u00E8me, merci de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "passer vos commandes pour mardi et mercredi avant dimanche !");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3)(10, "mat-form-field", 4)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Nom de votre entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, OrderFormComponent_mat_error_14_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Num\u00E9ro de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, OrderFormComponent_mat_error_19_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8)(21, "div", 9)(22, "mat-form-field", 10)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Rue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, OrderFormComponent_mat_error_26_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 3)(28, "mat-form-field", 4)(29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Code postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, OrderFormComponent_mat_error_32_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-form-field", 4)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Ville");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, OrderFormComponent_mat_error_37_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 14)(39, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_39_listener($event) { return ctx.hasDifferentDeliveryAddress($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Adresse de livraison diff\u00E9rente");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, OrderFormComponent_div_41_Template, 18, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "mat-divider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 19)(45, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function OrderFormComponent_Template_mat_form_field_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51); return _r6.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Date de livraison");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 21)(49, "mat-datepicker-toggle", 22)(50, "mat-datepicker", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, OrderFormComponent_mat_error_52_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 14)(54, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_54_listener($event) { return ctx.specificDeliveryTime($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Besoin d'une heure de livraison pr\u00E9cise?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, OrderFormComponent_div_56_Template, 7, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, OrderFormComponent_p_58_Template, 3, 5, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, OrderFormComponent_p_59_Template, 5, 2, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "mat-divider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 17)(63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, OrderFormComponent_div_66_Template, 2, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, OrderFormComponent_ng_template_67_Template, 2, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "mat-divider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 19)(72, "mat-form-field", 31)(73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Commentaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, OrderFormComponent_div_76_Template, 12, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 14)(78, "mat-checkbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_78_listener($event) { return ctx.userChoiceDataManagement = $event.checked; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Enregistrer mes infos personnelles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 34)(81, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, " Commander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](51);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](68);
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_3_1;
        let tmp_4_0;
        let tmp_4_1;
        let tmp_5_0;
        let tmp_5_1;
        let tmp_11_0;
        let tmp_18_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.orderForm.get("name")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.orderForm.get("phone")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.orderForm.get("address")) == null ? null : (tmp_3_1 = tmp_3_0.get("street")) == null ? null : tmp_3_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.orderForm.get("address")) == null ? null : (tmp_4_1 = tmp_4_0.get("zipCode")) == null ? null : tmp_4_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.orderForm.get("address")) == null ? null : (tmp_5_1 = tmp_5_0.get("city")) == null ? null : tmp_5_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.displayDeliveryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.tomorrow)("matDatepicker", _r6)("matDatepickerFilter", ctx.isItOpenToday);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.orderForm.get("deliveryDate")) == null ? null : tmp_11_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showDeliveryMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showShortDeliveryMessage || ctx.showOrderNeedValidationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.productList.length)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.orderForm.get("totalPrice")) == null ? null : tmp_18_0.value) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.userChoiceDataManagement);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexOffsetDirective, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__.TimepickerDirective, ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_21__.NgxMaterialTimepickerComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionPanelTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__.DefaultClassDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.KeyValuePipe, _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_4__.OrderSummaryPipe], styles: ["form[_ngcontent-%COMP%] {\n  padding: 3rem 0 3rem 0;\n}\n@media (max-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    padding: 5rem 0 3rem 0;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  text-align: center;\n  color: crimson;\n  font-size: 2rem;\n  margin: 1rem;\n}\n#boldAlert[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n.checkboxRow[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.buttonRow[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.deliveryMessage[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .deliveryMessage[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.warningMessage[_ngcontent-%COMP%] {\n  color: crimson;\n}\n@media (max-width: 768px) {\n  .warningMessage[_ngcontent-%COMP%] {\n    text-align-last: center;\n  }\n}\n#importantSentence[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n  ngx-material-timepicker-container {\n  --button-color: var(--color-app-brown) !important;\n  --dial-background-color: var(--color-app-brown) !important;\n  --clock-hand-color: var(--color-app-brown) !important;\n}\n.productCategory[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  margin-bottom: 0.5rem;\n}\n.productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 2rem;\n}\n@media (min-width: 600px) {\n  .productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 2rem;\n  }\n}\n.productCategoryHeader[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 1.7rem;\n  max-height: 4rem;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\n.productExpansion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.productExpansionHeader[_ngcontent-%COMP%] {\n  padding: 0 5px 0 0;\n  font-size: 1.5rem;\n  margin: 0;\n  height: 2.5rem;\n}\n.productExpansionBody[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 1rem 1rem 0 1rem;\n}\n  .slicedCheckbox > label > span {\n  font-size: 1.3rem;\n}\n.cardPriceQuantity[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: var(--color-app-brown) !important;\n}\n  .mat-expansion-panel-body {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  font-size: 1.3rem;\n  padding: 0 !important;\n}\n  .mat-expansion-panel-body > p {\n  font-size: 1.3rem;\n  font-weight: lighter;\n  margin: 0 0 0.8rem 1rem !important;\n}\n.quantityInput[_ngcontent-%COMP%] {\n  max-width: 9rem;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix {\n  padding: 0;\n  border: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix input {\n  height: 3rem;\n}\n.unavailableItem[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.2);\n}\n.unavailableItem[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: rgba(128, 128, 128, 0);\n}\n.unavailableItem[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0);\n}\n.orderCommentSummaryTitle[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.summaryComment[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGO0FBQ0U7RUFIRjtJQUlJLHNCQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFRjtBQUNBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQUVGO0FBQ0E7RUFDRSxtQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBRTtFQUpGO0lBS0ksa0JBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRSxjQUFBO0FBR0Y7QUFERTtFQUhGO0lBSUksdUJBQUE7RUFJRjtBQUNGO0FBREE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FBSUY7QUFEQTtFQUNFLGlEQUFBO0VBQ0EsMERBQUE7RUFDQSxxREFBQTtBQUlGO0FBQUE7RUFDRSw2Q0FBQTtFQUNBLHFCQUFBO0FBR0Y7QUFERTtFQUNFLGdCQUFBO0FBR0o7QUFBRTtFQUNFO0lBQ0UsZ0JBQUE7RUFFSjtBQUNGO0FBRUE7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5SEFBQTtBQUNGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQUhGO0FBTUE7RUFDRSxpQkFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtBQUhGO0FBTUE7RUFDRSx3Q0FBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFIRjtBQUtFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBSEo7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU9BO0VBQ0UsNEJBQUE7QUFKRjtBQU9BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFKRjtBQU1FO0VBQ0UsWUFBQTtBQUpKO0FBUUE7RUFDRSwwQ0FBQTtBQUxGO0FBT0U7RUFDRSx3Q0FBQTtBQUxKO0FBUUU7RUFDRSx3Q0FBQTtBQU5KO0FBVUE7RUFDRSwwQkFBQTtBQVBGO0FBVUE7RUFDRSxrQkFBQTtBQVBGO0FBVUEsb0NBQUEiLCJmaWxlIjoib3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmc6IDNyZW0gMCAzcmVtIDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNXJlbSAwIDNyZW0gMDtcclxuICB9XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbiNib2xkQWxlcnQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2hlY2tib3hSb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5kZWxpdmVyeU1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi53YXJuaW5nTWVzc2FnZSB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4jaW1wb3J0YW50U2VudGVuY2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyIHtcclxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG4gIC0tZGlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbiAgLS1jbG9jay1oYW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vKioqIENVU1RPTSBBQ0NPUkRJT04gUFJPRFVDVCBDQVRFR09SWVxyXG4ucHJvZHVjdENhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cclxuICAubWF0LWNhcmQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1hdC1jYXJkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdENhdGVnb3J5SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSxcclxuICAgIDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxufVxyXG5cclxuLy8qKipcclxuXHJcbi8vKioqIENVU1RPTSBDQVJEIFBST0RVQ1QgU1RZTEVcclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdEV4cGFuc2lvbjpub3QoW2NsYXNzKj1cIm1hdC1lbGV2YXRpb24telwiXSkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9kdWN0RXhwYW5zaW9uSGVhZGVyIHtcclxuICBwYWRkaW5nOiAwIDVweCAwIDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdEV4cGFuc2lvbkJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5zbGljZWRDaGVja2JveD5sYWJlbD5zcGFuIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmNhcmRQcmljZVF1YW50aXR5IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gID5wIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAwLjhyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnF1YW50aXR5SW5wdXQge1xyXG4gIG1heC13aWR0aDogOXJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5xdWFudGl0eUlucHV0IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnF1YW50aXR5SW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuXHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnVuYXZhaWxhYmxlSXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDApO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlckNvbW1lbnRTdW1tYXJ5VGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc3VtbWFyeUNvbW1lbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLyJdfQ== */"] });


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map