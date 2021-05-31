(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+p+5":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-validated-modal/form-validated-modal.component */ "p6Hq");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-routing.module */ "DM6G");
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ "H70G");
/* harmony import */ var _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/mondayStartWeekDateAdapter.service */ "dHby");
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/order-summary.pipe */ "nIH7");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/order.service */ "CZRY");























class OrderModule {
}
OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function OrderModule_Factory(t) { return new (t || OrderModule)(); }, providers: [
        _services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"],
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"] },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
        ], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"],
        _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"],
        _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"]], exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"],
                    _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"],
                    _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"],
                ],
                providers: [
                    _services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"],
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'fr-FR' },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"], useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"] },
                ],
                exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gueri\Dev\prostore\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CZRY":
/*!*************************************************!*\
  !*** ./src/app/order/services/order.service.ts ***!
  \*************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");




class OrderService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllAvailableItems() {
        return this.firestore
            .collection('products', (ref) => ref.where('available', '==', true))
            .valueChanges();
    }
    addOrder(order) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.collection('orders').add(order));
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "DB88":
/*!***************************************************************************!*\
  !*** ./src/app/core/pages/mentions-legales/mentions-legales.component.ts ***!
  \***************************************************************************/
/*! exports provided: MentionsLegalesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentionsLegalesComponent", function() { return MentionsLegalesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MentionsLegalesComponent {
    constructor() { }
    ngOnInit() { }
}
MentionsLegalesComponent.ɵfac = function MentionsLegalesComponent_Factory(t) { return new (t || MentionsLegalesComponent)(); };
MentionsLegalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MentionsLegalesComponent, selectors: [["app-mentions-legales"]], decls: 57, vars: 0, consts: [["href", "https://www.freepik.com/vectors/background", 1, "bkgrdLink"], ["href", "https://www.flaticon.com/authors/freepik", "title", "Freepik"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]], template: function MentionsLegalesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9tZW50aW9ucy1sZWdhbGVzL21lbnRpb25zLWxlZ2FsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFMRjtJQU1JLGdCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvbWVudGlvbnMtbGVnYWxlcy9tZW50aW9ucy1sZWdhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogM3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentionsLegalesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mentions-legales',
                templateUrl: './mentions-legales.component.html',
                styleUrls: ['./mentions-legales.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "DM6G":
/*!***********************************************!*\
  !*** ./src/app/order/order-routing.module.ts ***!
  \***********************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/order-form/order-form.component */ "H70G");





const routes = [{ path: '', component: _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"] }];
class OrderRoutingModule {
}
OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrderRoutingModule });
OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrderRoutingModule_Factory(t) { return new (t || OrderRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Fvy/":
/*!***************************************************************!*\
  !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/components/login-modal/login-modal.component */ "tp0f");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class LoginPageComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
        this.dialog.open(_app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__["LoginModalComponent"], {
            disableClose: true,
            width: '400px',
            maxWidth: '90%',
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 0, vars: 0, template: function LoginPageComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "H70G":
/*!****************************************************************!*\
  !*** ./src/app/order/pages/order-form/order-form.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function() { return OrderFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/order/components/form-validated-modal/form-validated-modal.component */ "p6Hq");
/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models/product */ "yHTb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/order.service */ "CZRY");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-material-timepicker */ "r3oX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/order-summary.pipe */ "nIH7");
























function OrderFormComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("name"));
} }
function OrderFormComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("phone"));
} }
function OrderFormComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("street", "address"));
} }
function OrderFormComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_33_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.getErrorMessage("street", "address"));
} }
function OrderFormComponent_div_33_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.getErrorMessage("zipCode", "address"));
} }
function OrderFormComponent_div_33_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getErrorMessage("city", "address"));
} }
function OrderFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderFormComponent_div_33_mat_error_6_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Code postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderFormComponent_div_33_mat_error_12_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ville");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OrderFormComponent_div_33_mat_error_17_Template, 2, 1, "mat-error", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    var tmp_0_1 = null;
    var tmp_1_0 = null;
    var tmp_1_1 = null;
    var tmp_2_0 = null;
    var tmp_2_1 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_0_1 = tmp_0_0.get("street")) == null ? null : tmp_0_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_1_1 = tmp_1_0.get("zipCode")) == null ? null : tmp_1_1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r5.orderForm.get("deliveryAddress")) == null ? null : (tmp_2_1 = tmp_2_0.get("city")) == null ? null : tmp_2_1.invalid);
} }
function OrderFormComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getErrorMessage("deliveryDate"));
} }
function OrderFormComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Heure de livraison");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-material-timepicker", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r18)("format", 24);
} }
function OrderFormComponent_p_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Votre livraison vous sera livr\u00E9e \u00E0 l'adresse renseign\u00E9e le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, (tmp_0_0 = ctx_r9.orderForm.get("deliveryDate")) == null ? null : tmp_0_0.value, "fullDate"), " ", ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) ? "\u00E0 " + ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) : "entre 6 heures et midi.", " ");
} }
function OrderFormComponent_p_51_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0- Elle devra \u00EAtre valid\u00E9e par la boulangerie M. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sans retour de leur part dans l'heure, consid\u00E9rez la comme annul\u00E9e.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderFormComponent_p_51_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0- Certains produits ne sont pas disponibles. Ils ont \u00E9t\u00E9 d\u00E9sactiv\u00E9s dans le formulaire. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OrderFormComponent_p_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Attention, d\u00FB au d\u00E9lai court de votre commande: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderFormComponent_p_51_span_3_Template, 5, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_p_51_span_4_Template, 3, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.showOrderNeedValidationMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.showShortDeliveryMessage);
} }
function OrderFormComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { unavailableItem: a0 }; };
function OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r23.showShortDeliveryMessage && !product_r24.shortDelivery));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !product_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Prix: ", product_r24.price.toFixed(2), " \u20AC H.T. / ", product_r24.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r23.itemFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", product_r24.name);
} }
function OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template, 15, 10, "mat-card", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.filterProductByCategory(category_r22.value));
} }
function OrderFormComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template, 5, 2, "mat-expansion-panel", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r13.PRODUCTCATEGORY));
} }
function OrderFormComponent_div_68_h3_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r26, " ");
} }
function OrderFormComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R\u00E9sum\u00E9 de la commande :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_div_68_h3_4_Template, 2, 1, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "summaryPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Prix total :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r14.orderSummary));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = ctx_r14.orderForm.get("totalPrice")) == null ? null : tmp_1_0.value.toFixed(2), " \u20AC H.T. ");
} }
class OrderFormComponent {
    constructor(orderService, fb, dialog) {
        this.orderService = orderService;
        this.fb = fb;
        this.dialog = dialog;
        this.orderSummary = [];
        this.PRODUCTCATEGORY = _models_product__WEBPACK_IMPORTED_MODULE_3__["ProductCategory"];
        this.tomorrow = new Date();
        this.showDeliveryMessage = false;
        this.showShortDeliveryMessage = false;
        this.showOrderNeedValidationMessage = false;
        this.selectDeliveryTime = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.productList = [];
        this.displayDeliveryForm = false;
        this.orderForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{10}$')]],
            address: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }),
            deliveryAddress: this.fb.group({
                street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
                city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            }, { disabled: !this.displayDeliveryForm }),
            hasDifferentDeliveryAddress: [
                this.displayDeliveryForm,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ],
            deliveryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deliveryTime: [null],
            orderDate: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderComment: [''],
            totalPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
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
        this.onlySummerSunday = (d) => {
            const day = (d || new Date()).getDay();
            const month = (d || new Date()).getMonth();
            let res = true;
            if (day === 0 && (month > 8 || month < 5)) {
                res = false;
            }
            return res;
            // tslint:disable-next-line
        };
        this.tomorrow.setDate(new Date().getDate() + 1);
        this.itemFormGroup = this.fb.group({
            default: [''],
        });
        this.orderService
            .getAllAvailableItems()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((resProdList) => {
            this.productList = resProdList.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
            this.itemFormGroup.removeControl('default');
            resProdList.forEach((product) => {
                var _a;
                (_a = this.itemFormGroup) === null || _a === void 0 ? void 0 : _a.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMapTo"])(this.itemFormGroup.valueChanges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((itemFormData) => {
            this.orderSummary = Object.entries(itemFormData);
            this.calcTotalPrice(itemFormData);
        }))
            .subscribe();
        this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
        this.filterShortDeliveryProducts();
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])([
            (_a = this.orderForm.get('deliveryDate')) === null || _a === void 0 ? void 0 : _a.valueChanges,
            (_b = this.orderForm.get('orderDate')) === null || _b === void 0 ? void 0 : _b.valueChanges,
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(([deliveryDate, orderDate]) => {
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
        if (this.orderForm.valid && orderList.length > 0) {
            this.orderService
                .addOrder(Object.assign(Object.assign({}, this.orderForm.value), { order: orderList }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
                .subscribe(() => {
                this.validatedModal = this.dialog.open(_app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_2__["FormValidatedModalComponent"], {
                    disableClose: true,
                    width: '400px',
                    maxWidth: '90%',
                });
                this.validatedModal
                    .afterClosed()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => {
                    window.location.reload();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
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
}
OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) { return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
OrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderFormComponent, selectors: [["app-order-form"]], decls: 72, vars: 18, consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly space-evenly"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: Restaurant du port", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "tel", "placeholder", "Ex: 0546331122", "formControlName", "phone", "required", ""], ["formGroupName", "address"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: 2 rue du port", "formControlName", "street", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: 17000", "formControlName", "zipCode", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: La Rochelle", "formControlName", "city", "required", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", 1, "checkboxRow"], ["fxFlexOffset", "7", "formControlName", "hasDifferentDeliveryAddress", 3, "change"], ["formGroupName", "deliveryAddress", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center"], ["fxFlexOffset", "7", "fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline", 3, "click"], ["matInput", "", "required", "", "formControlName", "deliveryDate", "readonly", "", 3, "min", "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["fxFlexOffset", "7", 3, "change"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87", 4, "ngIf"], ["class", "deliveryMessage", 4, "ngIf"], ["class", "warningMessage", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["productContainer", ""], ["fxFlexOffset", "7", "fxFlex", "87", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "formControlName", "orderComment", "placeholder", "Ex: boules tranch\u00E9es, forme des pains, ..."], ["fxLayout", "column wrap", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "buttonRow"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["formGroupName", "deliveryAddress"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87"], ["appearance", "outline"], ["min", "06:00", "max", "12:00", "readonly", "", "matInput", "", "formControlName", "deliveryTime", 3, "ngxTimepicker", "format"], ["datePicker", ""], [1, "deliveryMessage"], [1, "warningMessage"], ["id", "importantSentence"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", "class", "productCategory", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", 1, "productCategory"], ["fxFlex", "100", 1, "productCategoryHeader"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass"], [1, "productExpansion", 3, "disabled"], [1, "productExpansionHeader"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between baseline"], ["appearance", "outline", 1, "quantityInput", 3, "formGroup"], ["matInput", "", "type", "number", "min", "0", 3, "formControlName"], ["fxLayout", "column wrap", "fxLayoutAlign", "center center"], [4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxFlexOffset", "2"]], template: function OrderFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nom de votre entreprise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderFormComponent_mat_error_6_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Num\u00E9ro de t\u00E9l\u00E9phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrderFormComponent_mat_error_11_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrderFormComponent_mat_error_18_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Code postal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OrderFormComponent_mat_error_24_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ville");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, OrderFormComponent_mat_error_29_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-checkbox", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_31_listener($event) { return ctx.hasDifferentDeliveryAddress($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Adresse de livraison diff\u00E9rente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderFormComponent_div_33_Template, 18, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_Template_mat_form_field_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43); return _r6.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date de livraison");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "mat-datepicker", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, OrderFormComponent_mat_error_44_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_46_listener($event) { return ctx.specificDeliveryTime($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Besoin d'une heure de livraison pr\u00E9cise?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, OrderFormComponent_div_48_Template, 7, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, OrderFormComponent_p_50_Template, 3, 5, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, OrderFormComponent_p_51_Template, 5, 2, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Produits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, OrderFormComponent_div_58_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, OrderFormComponent_ng_template_59_Template, 2, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-divider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Commentaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, OrderFormComponent_div_68_Template, 10, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Commander ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_3_1 = null;
        var tmp_4_0 = null;
        var tmp_4_1 = null;
        var tmp_5_0 = null;
        var tmp_5_1 = null;
        var tmp_11_0 = null;
        var tmp_17_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.orderForm.get("name")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.orderForm.get("phone")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.orderForm.get("address")) == null ? null : (tmp_3_1 = tmp_3_0.get("street")) == null ? null : tmp_3_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.orderForm.get("address")) == null ? null : (tmp_4_1 = tmp_4_0.get("zipCode")) == null ? null : tmp_4_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.orderForm.get("address")) == null ? null : (tmp_5_1 = tmp_5_0.get("city")) == null ? null : tmp_5_1.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayDeliveryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.tomorrow)("matDatepicker", _r6)("matDatepickerFilter", ctx.onlySummerSunday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.orderForm.get("deliveryDate")) == null ? null : tmp_11_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectDeliveryTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeliveryMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showShortDeliveryMessage || ctx.showOrderNeedValidationMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productList.length)("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_17_0 = ctx.orderForm.get("totalPrice")) == null ? null : tmp_17_0.value) > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexOffsetDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_16__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_16__["NgxMaterialTimepickerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"], _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_21__["OrderSummaryPipe"]], styles: ["form[_ngcontent-%COMP%] {\n  padding: 3rem 0 3rem 0;\n}\n@media (max-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    padding: 5rem 0 3rem 0;\n  }\n}\n.checkboxRow[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.buttonRow[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.deliveryMessage[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .deliveryMessage[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.warningMessage[_ngcontent-%COMP%] {\n  color: crimson;\n}\n@media (max-width: 768px) {\n  .warningMessage[_ngcontent-%COMP%] {\n    text-align-last: center;\n  }\n}\n#importantSentence[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n  ngx-material-timepicker-container {\n  --button-color: var(--color-app-brown) !important;\n  --dial-background-color: var(--color-app-brown) !important;\n  --clock-hand-color: var(--color-app-brown) !important;\n}\n.productCategory[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  margin-bottom: 0.5rem;\n}\n.productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 2rem;\n}\n@media (min-width: 600px) {\n  .productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 2rem;\n  }\n}\n.productCategoryHeader[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 1.7rem;\n  max-height: 4rem;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0.8rem;\n}\n.productExpansion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.productExpansionHeader[_ngcontent-%COMP%] {\n  padding: 0 5px 0 0;\n  font-size: 1.5rem;\n  margin: 0;\n  height: 2.5rem;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: var(--color-app-brown) !important;\n}\n  .mat-expansion-panel-body {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  font-size: 1.3rem;\n  padding: 0 !important;\n}\n  .mat-expansion-panel-body > p {\n  font-size: 1.3rem;\n  font-weight: lighter;\n  margin: 0 0 0.8rem 1rem !important;\n}\n.quantityInput[_ngcontent-%COMP%] {\n  max-width: 9rem;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix {\n  padding: 0;\n  border: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix input {\n  height: 3rem;\n}\n.unavailableItem[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.2);\n}\n.unavailableItem[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: rgba(128, 128, 128, 0);\n}\n.unavailableItem[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvcGFnZXMvb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjtBQUFFO0VBRkY7SUFHSSxzQkFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFLG1CQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQUhFO0VBSEY7SUFJSSxrQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFLGNBQUE7QUFPRjtBQU5FO0VBRkY7SUFHSSx1QkFBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFTRjtBQU5BO0VBQ0UsaURBQUE7RUFDQSwwREFBQTtFQUNBLHFEQUFBO0FBU0Y7QUFOQTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7QUFTRjtBQVJFO0VBQ0UsZ0JBQUE7QUFVSjtBQVJFO0VBQ0U7SUFDRSxnQkFBQTtFQVVKO0FBQ0Y7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlIQUFBO0FBU0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBT0Y7QUFMQTtFQUNFLGdCQUFBO0FBUUY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVNGO0FBUEE7RUFDRSx3Q0FBQTtBQVVGO0FBUkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFXRjtBQVZFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0FBWUo7QUFSQTtFQUNFLGVBQUE7QUFXRjtBQVRBO0VBQ0UsNEJBQUE7QUFZRjtBQVZBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFhRjtBQVpFO0VBQ0UsWUFBQTtBQWNKO0FBWEE7RUFDRSwwQ0FBQTtBQWNGO0FBYkU7RUFDRSx3Q0FBQTtBQWVKO0FBYkU7RUFDRSx3Q0FBQTtBQWVKO0FBWkEsb0NBQUEiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9wYWdlcy9vcmRlci1mb3JtL29yZGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICBwYWRkaW5nOiAzcmVtIDAgM3JlbSAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgcGFkZGluZzogNXJlbSAwIDNyZW0gMDtcclxuICB9XHJcbn1cclxuLmNoZWNrYm94Um93IHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uYnV0dG9uUm93IHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcblxyXG4uZGVsaXZlcnlNZXNzYWdlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuLndhcm5pbmdNZXNzYWdlIHtcclxuICBjb2xvcjogY3JpbXNvbjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuI2ltcG9ydGFudFNlbnRlbmNlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuOjpuZy1kZWVwIG5neC1tYXRlcmlhbC10aW1lcGlja2VyLWNvbnRhaW5lciB7XHJcbiAgLS1idXR0b24tY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bikgIWltcG9ydGFudDtcclxuICAtLWRpYWwtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG4gIC0tY2xvY2staGFuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG59XHJcbi8vKioqIENVU1RPTSBBQ0NPUkRJT04gUFJPRFVDVCBDQVRFR09SWVxyXG4ucHJvZHVjdENhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIC5tYXQtY2FyZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tYXQtY2FyZDpudGgtY2hpbGQoMikge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2R1Y3RDYXRlZ29yeUhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgbWF4LWhlaWdodDogNHJlbTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYigwIDAgMCAvIDIwJSksXHJcbiAgICAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbn1cclxuLy8qKipcclxuXHJcbi8vKioqIENVU1RPTSBDQVJEIFBST0RVQ1QgU1RZTEVcclxubWF0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcclxufVxyXG4ucHJvZHVjdEV4cGFuc2lvbjpub3QoW2NsYXNzKj1cIm1hdC1lbGV2YXRpb24telwiXSkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3RFeHBhbnNpb25IZWFkZXIge1xyXG4gIHBhZGRpbmc6IDAgNXB4IDAgMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAwLjhyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnF1YW50aXR5SW5wdXQge1xyXG4gIG1heC13aWR0aDogOXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnF1YW50aXR5SW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5xdWFudGl0eUlucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG4udW5hdmFpbGFibGVJdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbn1cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-order-form',
                templateUrl: './order-form.component.html',
                styleUrls: ['./order-form.component.scss'],
            }]
    }], function () { return [{ type: _services_order_service__WEBPACK_IMPORTED_MODULE_6__["OrderService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");




class AuthService {
    constructor(auth) {
        this.auth = auth;
    }
    login(credentials) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth
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
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "STbY");












function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Plateforme de commande r\u00E9serv\u00E9e aux professionnels ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.router.navigate([""]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Commandes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Produits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "exit_to_app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
} }
function AppComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
} }
function AppComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.router.navigate(["admin/liste-commandes"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Commandes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.router.navigate(["admin/produits"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fastfood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.router.navigate(["/"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulaire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_45_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_45_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.router.navigate(["admin"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Espace administrateur ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_46_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.logoutAdminSpace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, authService, iconRegistry, sanitizer) {
        this.router = router;
        this.authService = authService;
        this.activatedRoute = '';
        this.authService
            .isUserAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((user) => {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 51, vars: 9, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", "fxLayoutAlign.lt-sm", "center center", 1, "header"], ["fxFlex", "20", "fxHide.lt-sm", "", 3, "click"], ["alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logo-header", "link"], ["fxFlex", "60", "fxHide.lt-sm", "", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", "", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "80", 3, "click"], ["class", "mobileMenuButton", "fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "container-page"], [3, "activate"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column wrap", "fxLayoutAlign", "space-evenly center", 1, "footer"], [1, "textWithIcon"], ["svgIcon", "facebook", 1, "iconFb"], ["href", "https://www.facebook.com/pages/category/Bakery/Boulangerie-M-437577199741453/", "target", "blank", 1, "textWithIcon"], [1, "link", 3, "click"], [1, "link"], [3, "click", 4, "ngIf"], ["href", "https://www.linkedin.com/in/alexandre-guerin/", "target", "blank"], ["fxFlex", "60", "fxHide.lt-sm", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", ""], ["fxLayoutAlign", "center center", 1, "link", "logoutHeader", 3, "click"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 1, "mobileMenuButton", 3, "matMenuTriggerFor"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 12, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_button_8_Template, 3, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_button_11_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 5, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_14_listener() { return ctx.logoutAdminSpace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_20_listener() { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Boulangerie M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 127 Avenue du Lieutenant-Colonel Bernier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 17000 La Rochelle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 05 46 01 09 72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Notre page facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_41_listener() { return ctx.router.navigate(["mentions-legales"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mentions L\u00E9gales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_p_45_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppComponent_p_46_Template, 2, 0, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " R\u00E9alis\u00E9 gracieusement par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ithrandil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("liste"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("produits"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activatedRoute.includes("admin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: url('bakery-background.jpg');\n  background-position: center;\n  background-size: cover;\n  background-color: var(--color-app-light-grey);\n}\n\n.container-page[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  width: 100%;\n  max-width: 90rem;\n  max-height: 100%;\n  background-color: var(--color-app-light-grey);\n  align-self: center;\n  overflow: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  height: 14rem;\n  border-bottom: solid 1px black;\n  color: var(--color-app-brown);\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    height: 6rem;\n  }\n}\n\n.logo-header[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  max-height: 10rem;\n}\n\n@media (max-width: 768px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n    z-index: 99;\n    position: relative;\n  }\n}\n\n.mobileMenuButton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-app-light-grey);\n}\n\n.logoutHeader[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  padding-top: 1.5rem;\n  margin-bottom: -11rem;\n  border-top: solid 1px black;\n  background-color: var(--color-app-light-grey);\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-bottom: -26.6rem;\n  }\n}\n\n[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  color: var(--color-app-brown);\n}\n\n.iconFb[_ngcontent-%COMP%] {\n  max-width: 2rem;\n}\n\n.textWithIcon[_ngcontent-%COMP%] {\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsOENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFDRTtFQVBGO0lBUUksWUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBRkU7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUhFO0VBUEY7SUFRSSx1QkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSEE7Ozs7RUFJRSw2QkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBO0VBQ0UscUJBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2Jha2VyeS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuLmNvbnRhaW5lci1wYWdlIHtcclxuICBtaW4taGVpZ2h0OiA1MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogOTByZW07XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vLyBTVFlMRSBIRUFERVJcclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWxpZ2h0LWdyZXkpO1xyXG4gIGhlaWdodDogMTRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICB9XHJcbn1cclxuLmxvZ28taGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLm1vYmlsZU1lbnVCdXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5sb2dvdXRIZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4vLyBzdHlsZSBmb290ZXJcclxuLmZvb3RlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bik7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAtMTFyZW07XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjYuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3ZlciAubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG59XHJcblxyXG4uaWNvbkZiIHtcclxuICBtYXgtd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi50ZXh0V2l0aEljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login-modal/login-modal.component */ "tp0f");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "Fvy/");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "N/25");












class AuthModule {
}
AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AuthModule_Factory(t) { return new (t || AuthModule)(); }, providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                ],
                providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/extra/fr */ "On8d");
/* harmony import */ var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/fr */ "Hfs6");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/analytics */ "h+eY");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ "DB88");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./order/order.module */ "+p+5");























Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'fr-FR' }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_20__["OrderModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__["AuthModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_19__["MentionsLegalesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _order_order_module__WEBPACK_IMPORTED_MODULE_20__["OrderModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__["AuthModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_19__["MentionsLegalesComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _order_order_module__WEBPACK_IMPORTED_MODULE_20__["OrderModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _auth_auth_module__WEBPACK_IMPORTED_MODULE_18__["AuthModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                ],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'fr-FR' }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dHby":
/*!**********************************************************************!*\
  !*** ./src/app/order/services/mondayStartWeekDateAdapter.service.ts ***!
  \**********************************************************************/
/*! exports provided: MondayStartWeekDateAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MondayStartWeekDateAdapter", function() { return MondayStartWeekDateAdapter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



class MondayStartWeekDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"] {
    getFirstDayOfWeek() {
        return 1;
    }
}
MondayStartWeekDateAdapter.ɵfac = function MondayStartWeekDateAdapter_Factory(t) { return ɵMondayStartWeekDateAdapter_BaseFactory(t || MondayStartWeekDateAdapter); };
MondayStartWeekDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MondayStartWeekDateAdapter, factory: MondayStartWeekDateAdapter.ɵfac });
const ɵMondayStartWeekDateAdapter_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MondayStartWeekDateAdapter);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MondayStartWeekDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "nIH7":
/*!******************************************************!*\
  !*** ./src/app/order/services/order-summary.pipe.ts ***!
  \******************************************************/
/*! exports provided: OrderSummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryPipe", function() { return OrderSummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class OrderSummaryPipe {
    transform(arr) {
        const tmp = arr.filter((el) => el[1] !== null && el[1] > 0);
        const res = [];
        tmp.forEach((el) => res.push(`- ${el[0]} : ${el[1]}`));
        return res;
    }
}
OrderSummaryPipe.ɵfac = function OrderSummaryPipe_Factory(t) { return new (t || OrderSummaryPipe)(); };
OrderSummaryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "summaryPipe", type: OrderSummaryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSummaryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'summaryPipe' }]
    }], null, null); })();


/***/ }),

/***/ "p6Hq":
/*!*****************************************************************************************!*\
  !*** ./src/app/order/components/form-validated-modal/form-validated-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FormValidatedModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidatedModalComponent", function() { return FormValidatedModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class FormValidatedModalComponent {
    constructor() { }
    ngOnInit() { }
}
FormValidatedModalComponent.ɵfac = function FormValidatedModalComponent_Factory(t) { return new (t || FormValidatedModalComponent)(); };
FormValidatedModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormValidatedModalComponent, selectors: [["app-form-validated"]], decls: 14, vars: 1, consts: [["mat-dialog-title", ""], ["fxLayout", "column wrap"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]], template: function FormValidatedModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre commande a \u00E9t\u00E9 envoy\u00E9e.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " La boulangerie M vous remercie de votre commande. En cas d'erreur ou de questions, n'h\u00E9sitez pas \u00E0 nous contacter au 05 46 01 09 72. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " En esp\u00E9rant vous revoir tr\u00E8s prochainement et que votre commande vous satifera pleinement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "L'\u00E9quipe M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fermer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvY29tcG9uZW50cy9mb3JtLXZhbGlkYXRlZC1tb2RhbC9mb3JtLXZhbGlkYXRlZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGVkLW1vZGFsL2Zvcm0tdmFsaWRhdGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidatedModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-validated',
                templateUrl: './form-validated-modal.component.html',
                styleUrls: ['./form-validated-modal.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tp0f":
/*!**********************************************************************!*\
  !*** ./src/app/auth/components/login-modal/login-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function() { return LoginModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/auth/services/auth.service */ "N/25");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function LoginModalComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginModalComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mot de passe obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginModalComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.loginErrorMessage, " ");
} }
class LoginModalComponent {
    constructor(fb, authService, router, dialog) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.loginErrorMessage = '';
        this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() { }
    login() {
        if (this.loginForm.valid) {
            this.authService
                .login(this.loginForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
                .subscribe(() => {
                this.router.navigate(['admin']);
                this.dialog.closeAll();
            }, (err) => {
                this.loginErrorMessage = err.message;
            });
        }
    }
}
LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) { return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
LoginModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginModalComponent, selectors: [["app-login-modal"]], decls: 23, vars: 4, consts: [["matDialogTitle", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "fxLayoutAlign", "center center"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Ex: MySecretPassword", "formControlName", "password", "required", ""], ["fxFlex", "87", "fxLayoutAlign", "center center", "class", "errorMessage", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "2", "fxFlexOrder.gt-xs", "1", "mat-raised-button", "", "type", "button", "mat-dialog-close", "", 3, "click"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "1", "fxFlexOrder.gt-xs", "2", "mat-raised-button", "", "type", "submit"], ["fxFlex", "87", "fxLayoutAlign", "center center", 1, "errorMessage"]], template: function LoginModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginModalComponent_mat_error_9_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginModalComponent_mat_error_15_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LoginModalComponent_p_17_Template, 2, 1, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModalComponent_Template_button_click_19_listener() { return ctx.router.navigate([""]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Annuler ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Se connecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm == null ? null : (tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm == null ? null : (tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginErrorMessage);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexOrderDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]], styles: [".errorMessage[_ngcontent-%COMP%] {\n  color: crimson;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTWVzc2FnZSB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-modal',
                templateUrl: './login-modal.component.html',
                styleUrls: ['./login-modal.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/pages/login-page/login-page.component */ "Fvy/");
/* harmony import */ var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/pages/mentions-legales/mentions-legales.component */ "DB88");
/* harmony import */ var _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order/pages/order-form/order-form.component */ "H70G");








const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['connexion']);
const redirectAlreadyLoggedIn = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectLoggedInTo"])(['admin']);
const routes = [
    { path: '', redirectTo: 'commande', pathMatch: 'full' },
    { path: 'commande', component: _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormComponent"] },
    { path: 'mentions-legales', component: _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__["MentionsLegalesComponent"] },
    Object.assign({ path: 'connexion', component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectAlreadyLoggedIn)),
    Object.assign({ path: 'admin', loadChildren: () => __webpack_require__.e(/*! import() | admin-admin-module */ "admin-admin-module").then(__webpack_require__.bind(null, /*! ./admin/admin.module */ "jkDv")).then((m) => m.AdminModule) }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectUnauthorizedToLogin)),
    // { path: '404', component: PageNotFoundPage },
    { path: '**', redirectTo: 'commande' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yHTb":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: ProductUnit, ProductCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUnit", function() { return ProductUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCategory", function() { return ProductCategory; });
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

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map