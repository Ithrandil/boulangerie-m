(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+p+5":
    /*!***************************************!*\
      !*** ./src/app/order/order.module.ts ***!
      \***************************************/

    /*! exports provided: OrderModule */

    /***/
    function p5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
        return OrderModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-material-timepicker */
      "r3oX");
      /* harmony import */


      var _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/form-validated-modal/form-validated-modal.component */
      "p6Hq");
      /* harmony import */


      var _order_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./order-routing.module */
      "DM6G");
      /* harmony import */


      var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pages/order-form/order-form.component */
      "H70G");
      /* harmony import */


      var _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/mondayStartWeekDateAdapter.service */
      "dHby");
      /* harmony import */


      var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./services/order-summary.pipe */
      "nIH7");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./services/order.service */
      "CZRY");

      var OrderModule = function OrderModule() {
        _classCallCheck(this, OrderModule);
      };

      OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: OrderModule
      });
      OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function OrderModule_Factory(t) {
          return new (t || OrderModule)();
        },
        providers: [_services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"], {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"],
          useValue: 'fr-FR'
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
          useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"]
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"]], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderModule, {
          declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"], _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"], _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"]],
          exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_18__["OrderFormComponent"], _components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormValidatedModalComponent"], _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryPipe"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_15__["NgxMaterialTimepickerModule"]],
            providers: [_services_order_service__WEBPACK_IMPORTED_MODULE_21__["OrderService"], {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"],
              useValue: 'fr-FR'
            }, {
              provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
              useClass: _services_mondayStartWeekDateAdapter_service__WEBPACK_IMPORTED_MODULE_19__["MondayStartWeekDateAdapter"]
            }],
            exports: [_order_routing_module__WEBPACK_IMPORTED_MODULE_17__["OrderRoutingModule"]]
          }]
        }], null, null);
      })();
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
      /*! C:\Users\gueri\Dev\prostore\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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
          measurementId: 'G-SNJSWSZG0K'
        }
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
    "CZRY":
    /*!*************************************************!*\
      !*** ./src/app/order/services/order.service.ts ***!
      \*************************************************/

    /*! exports provided: OrderService */

    /***/
    function CZRY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderService", function () {
        return OrderService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var OrderService = /*#__PURE__*/function () {
        function OrderService(firestore) {
          _classCallCheck(this, OrderService);

          this.firestore = firestore;
        }

        _createClass(OrderService, [{
          key: "getAllAvailableItems",
          value: function getAllAvailableItems() {
            return this.firestore.collection('products', function (ref) {
              return ref.where('available', '==', true);
            }).valueChanges();
          }
        }, {
          key: "addOrder",
          value: function addOrder(order) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.collection('orders').add(order));
          }
        }]);

        return OrderService;
      }();

      OrderService.ɵfac = function OrderService_Factory(t) {
        return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]));
      };

      OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OrderService,
        factory: OrderService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DB88":
    /*!***************************************************************************!*\
      !*** ./src/app/core/pages/mentions-legales/mentions-legales.component.ts ***!
      \***************************************************************************/

    /*! exports provided: MentionsLegalesComponent */

    /***/
    function DB88(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MentionsLegalesComponent", function () {
        return MentionsLegalesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MentionsLegalesComponent = /*#__PURE__*/function () {
        function MentionsLegalesComponent() {
          _classCallCheck(this, MentionsLegalesComponent);
        }

        _createClass(MentionsLegalesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MentionsLegalesComponent;
      }();

      MentionsLegalesComponent.ɵfac = function MentionsLegalesComponent_Factory(t) {
        return new (t || MentionsLegalesComponent)();
      };

      MentionsLegalesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MentionsLegalesComponent,
        selectors: [["app-mentions-legales"]],
        decls: 57,
        vars: 0,
        consts: [["href", "https://www.freepik.com/vectors/background", 1, "bkgrdLink"], ["href", "https://www.flaticon.com/authors/freepik", "title", "Freepik"], ["href", "https://www.flaticon.com/", "title", "Flaticon"]],
        template: function MentionsLegalesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Conditions G\xE9n\xE9rales d\u2019Utilisation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nous utilisons des liens de tracking Google. Nous stockons des cookies de navigations ainsi que les donn\xE9es utilisateur n\xE9cessaires au fonctionnement du site : informations de navigations, fonctionnalit\xE9s annexes, et de localisation. Nous sommes susceptibles d\u2019afficher des pubs, et des pubs cibl\xE9es par Google.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Article 1 : Objet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Les pr\xE9sentes CGU ou Conditions G\xE9n\xE9rales d\u2019Utilisation encadrent juridiquement l\u2019utilisation des services du site boulangerie-m.web.app (ci-apr\xE8s d\xE9nomm\xE9 \xAB le site \xBB). Constituant le contrat entre la soci\xE9t\xE9 Michon et l\u2019Utilisateur.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Article 2 : Mentions l\xE9gales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " L\u2019\xE9dition du site boulangerie-m.web.app est assur\xE9e par la soci\xE9t\xE9 Michon, Siret n\xB080886630500010, dont le si\xE8ge social est localis\xE9 au 127 avenue du Lieutenant Colonel Bernier, 17 000 La Rochelle. L\u2019h\xE9bergeur du site boulangerie-m.web.app est la soci\xE9t\xE9 Google France, sise au 8 rue de Londres, 75009 Paris, France.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Article 3 : Acc\xE8s au site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Le site boulangerie-m.web.app permet d\u2019acc\xE9der gratuitement aux services suivants : \u2013 Affichage des articles \u2013 Mise en place du panier. Le site est accessible gratuitement depuis n\u2019importe o\xF9 par tout utilisateur disposant d\u2019un acc\xE8s \xE0 Internet (sauf restriction par des pares-feux nationaux). Tous les frais n\xE9cessaires pour l\u2019acc\xE8s aux services (mat\xE9riel informatique, connexion, internet\u2026) sont \xE0 la charge de l\u2019Utilisateur. L\u2019acc\xE8s au portail d\xE9di\xE9 aux administrateurs s\u2019effectue \xE0 l\u2019aide d\u2019un identifiant et d\u2019un mot de passe. Pour des raisons de maintenance ou autres, l\u2019acc\xE8s au site peut \xEAtre interrompu ou suspendu par l\u2019\xE9diteur sans pr\xE9avis ni justification.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Article 4 : Collecte des donn\xE9es");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Conform\xE9ment \xE0 la loi n\xB078-17 du 6 janvier relative \xE0 l\u2019informatique, aux fichiers et aux libert\xE9s, la collecte et le traitement d\u2019informations personnelles s\u2019effectuent dans le respect de la vie priv\xE9e. La liste des donn\xE9es collect\xE9es : Adresse postale \u2013 Num\xE9ro de t\xE9l\xE9phone \u2013 Contenu du panier \u2013 Commandes finalis\xE9es et en cours. Suivant la loi Informatique et Libert\xE9s en date du 6 janvier 1978, articles 39 et 40, l\u2019Utilisateur dispose du droit d\u2019acc\xE9der, de rectifier, de supprimer et d\u2019opposer ses donn\xE9es personnelles. L\u2019exercice de ce droit s\u2019effectue par une demande \xE0 cette adresse mail : boulangerie.m17@gmail.com (informations disponibles ici).\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Article 5 : Propri\xE9t\xE9 intellectuelle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Les marques, logos ainsi que les contenus du site boulangerie-m.web.app (illustrations graphiques, textes\u2026) sont prot\xE9g\xE9s par le Code de la propri\xE9t\xE9 intellectuelle et par le droit d\u2019auteur. La reproduction et la copie des contenus par l\u2019Utilisateur requi\xE8rent une autorisation pr\xE9alable du site. Dans ce cas, toute utilisation \xE0 des usages commerciaux ou \xE0 des fins publicitaires est proscrite.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Article 6 : Responsabilit\xE9");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Le site d\xE9cline toute responsabilit\xE9 concernant les \xE9ventuels attaques, failles et fichiers informatiques pouvant infecter le mat\xE9riel de l\u2019utilisateur apr\xE8s l\u2019utilisation ou l\u2019acc\xE8s \xE0 ce site. Le site ne peut \xEAtre tenu pour responsable en cas de force majeure ou du fait impr\xE9visible et insurmontable d\u2019un tiers. La garantie totale de la s\xE9curit\xE9 et la confidentialit\xE9 des donn\xE9es n\u2019est pas assur\xE9e par le site. Cependant, le site s\u2019engage \xE0 mettre en \u0153uvre toutes les m\xE9thodes requises pour le faire au mieux.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Article 7 : Liens hypertextes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Le site peut \xEAtre constitu\xE9 de liens hypertextes. En cliquant sur ces derniers, l\u2019Utilisateur sortira de la plateforme. Cette derni\xE8re n\u2019a pas de contr\xF4le et ne peut pas \xEAtre tenue responsable du contenu des pages web relatives \xE0 ces liens. Des liens dit \xAB affili\xE9s \xBB peuvent \xEAtre pr\xE9sents sur le site. Un lien affili\xE9 ou d\u2019affiliation est une URL sp\xE9cifique utilis\xE9e par un affili\xE9 pour pointer vers une offre ou un produit d\u2019un marchand. Il est possible, \xE0 la suite d\u2019un achat ou de la navigation par l\u2019Utilisateur sur le site d\u2019affiliation, qu\u2019une commission soit vers\xE9e \xE0 destination de la soci\xE9t\xE9 \xE9ditrice.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Article 8 : Cookies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Lors des visites sur le site, l\u2019installation automatique d\u2019un cookie sur le logiciel de navigation de l\u2019Utilisateur peut survenir. Les cookies correspondent \xE0 de petits fichiers d\xE9pos\xE9s temporairement sur le disque dur de l\u2019ordinateur de l\u2019Utilisateur. Ces cookies sont n\xE9cessaires pour assurer l\u2019accessibilit\xE9 et la navigation sur le site. Ces fichiers ne comportent pas d\u2019informations personnelles et ne peuvent pas \xEAtre utilis\xE9s pour l\u2019identification d\u2019une personne. L\u2019information pr\xE9sente dans les cookies est utilis\xE9e pour am\xE9liorer les performances de navigation sur le site boulangerie-m.web.app. En naviguant sur le site, l\u2019Utilisateur accepte les cookies. Leur d\xE9sactivation peut s\u2019effectuer via les param\xE8tres du logiciel de navigation.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Article 9 : Dur\xE9e du contrat");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Le pr\xE9sent contrat est valable pour une dur\xE9e ind\xE9termin\xE9e. Le d\xE9but de l\u2019utilisation des services du site marque l\u2019application du contrat \xE0 l\u2019\xE9gard de l\u2019Utilisateur.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Article 10 : Droit applicable et juridiction comp\xE9tente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Le pr\xE9sent contrat est soumis \xE0 la l\xE9gislation fran\xE7aise. Dans un premier temps, la r\xE9solution d\u2019\xE9ventuels litiges entre les parties se fait \xE0 l\u2019amiable. En cas d\u2019absence de r\xE9solution \xE0 l\u2019amiable, le recours aux tribunaux fran\xE7ais comp\xE9tents pour r\xE9gler le contentieux s\u2019impose.\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sources des ressources graphiques pr\xE9sentes sur le site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Arri\xE8re plan: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Background vector created by freepik - www.freepik.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Ic\xF4nes: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Freepik");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " from ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " www.flaticon.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 3rem;\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-top: 5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlcy9tZW50aW9ucy1sZWdhbGVzL21lbnRpb25zLWxlZ2FsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFMRjtJQU1JLGdCQUFBO0VBR0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZXMvbWVudGlvbnMtbGVnYWxlcy9tZW50aW9ucy1sZWdhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogM3JlbTtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MentionsLegalesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-mentions-legales',
            templateUrl: './mentions-legales.component.html',
            styleUrls: ['./mentions-legales.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "DM6G":
    /*!***********************************************!*\
      !*** ./src/app/order/order-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: OrderRoutingModule */

    /***/
    function DM6G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
        return OrderRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/order-form/order-form.component */
      "H70G");

      var routes = [{
        path: '',
        component: _pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_2__["OrderFormComponent"]
      }];

      var OrderRoutingModule = function OrderRoutingModule() {
        _classCallCheck(this, OrderRoutingModule);
      };

      OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OrderRoutingModule
      });
      OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OrderRoutingModule_Factory(t) {
          return new (t || OrderRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "E/54":
    /*!********************************************************************!*\
      !*** ./src/app/core/components/info-modal/info-modal.component.ts ***!
      \********************************************************************/

    /*! exports provided: InfoModalComponent */

    /***/
    function E54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoModalComponent", function () {
        return InfoModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var InfoModalComponent = /*#__PURE__*/function () {
        function InfoModalComponent() {
          _classCallCheck(this, InfoModalComponent);

          this.dontShowAgain = false;
        }

        _createClass(InfoModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoModalComponent;
      }();

      InfoModalComponent.ɵfac = function InfoModalComponent_Factory(t) {
        return new (t || InfoModalComponent)();
      };

      InfoModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InfoModalComponent,
        selectors: [["app-info-modal"]],
        decls: 39,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["fxLayout", "column"], [1, "imageContainer"], ["id", "saveOrderDesktop", "alt", "Image enregistrer votre commande habituelle"], ["id", "newCardProduct", "src", "../../../../assets/images/new_product_card.png", "alt", "Nouvelle carte des produits"], [3, "change"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]],
        template: function InfoModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre formulaire \xE9volue!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nous faisons \xE9voluer notre formulaire afin de faciliter vos commandes.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enregistrer votre commande habituelle :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Vous pouvez maintenant cocher la case \"Enregistrer mes infos personnelles\". Cela enregistrera sur votre navigateur l'ensemble de votre formulaire. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorsque vous retournerez sur le formulaire, vos infos personnelles seront d\xE9j\xE0 renseign\xE9es! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Si vous avez enregistr\xE9 pr\xE9c\xE9demment vos infos et ne souhaitez plus le faire, d\xE9cochez simplement la case et validez votre commande. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vos informations ne seront alors plus enregistr\xE9es sur votre navigateur. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Les commentaires pour les produits et la case \"Tranch\xE9\" :");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Si vous souhaitez que votre produit soit tranch\xE9, plus besoin de mettre un commentaire. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Il vous suffit juste de cocher la case \"Tranch\xE9\" lorsque vous choisissez votre produit! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Vous pouvez maintenant aussi mettre un commentaire sp\xE9cifique \xE0 un produit. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "En esp\xE9rant que ces changements vous plaisent!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "A tr\xE8s vite!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-checkbox", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InfoModalComponent_Template_mat_checkbox_change_32_listener($event) {
              return ctx.dontShowAgain = $event.checked;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ne plus me montrer ce message ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "L'\xE9quipe M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-dialog-actions", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Fermer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["[_nghost-%COMP%] {\n  text-align: center;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\np[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.imageContainer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n#saveOrderDesktop[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 700px;\n  max-width: 90%;\n  content: url('save_order_desktop.png');\n}\n\n@media (max-width: 768px) {\n  #saveOrderDesktop[_ngcontent-%COMP%] {\n    content: url('save_order_mobile.png');\n  }\n}\n\n#newCardProduct[_ngcontent-%COMP%] {\n  border: var(--color-app-brown) solid 1px;\n  width: 400px;\n  max-width: 90%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZm8tbW9kYWwvaW5mby1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0Usd0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNDQUFBO0FBR0Y7O0FBRkU7RUFMRjtJQU1JLHFDQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaW5mby1tb2RhbC9pbmZvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMyB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XHJcbn1cclxuLmltYWdlQ29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNzYXZlT3JkZXJEZXNrdG9wIHtcclxuICBib3JkZXI6IHZhcigtLWNvbG9yLWFwcC1icm93bikgc29saWQgMXB4O1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NhdmVfb3JkZXJfZGVza3RvcC5wbmdcIik7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NhdmVfb3JkZXJfbW9iaWxlLnBuZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbiNuZXdDYXJkUHJvZHVjdCB7XHJcbiAgYm9yZGVyOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pIHNvbGlkIDFweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-info-modal',
            templateUrl: './info-modal.component.html',
            styleUrls: ['./info-modal.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Fvy/":
    /*!***************************************************************!*\
      !*** ./src/app/auth/pages/login-page/login-page.component.ts ***!
      \***************************************************************/

    /*! exports provided: LoginPageComponent */

    /***/
    function Fvy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
        return LoginPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @app/auth/components/login-modal/login-modal.component */
      "tp0f");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var LoginPageComponent = /*#__PURE__*/function () {
        function LoginPageComponent(dialog) {
          _classCallCheck(this, LoginPageComponent);

          this.dialog = dialog;
        }

        _createClass(LoginPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dialog.open(_app_auth_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_1__["LoginModalComponent"], {
              disableClose: true,
              width: '400px',
              maxWidth: '90%'
            });
          }
        }]);

        return LoginPageComponent;
      }();

      LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
        return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginPageComponent,
        selectors: [["app-login-page"]],
        decls: 0,
        vars: 0,
        template: function LoginPageComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "H70G":
    /*!****************************************************************!*\
      !*** ./src/app/order/pages/order-form/order-form.component.ts ***!
      \****************************************************************/

    /*! exports provided: OrderFormComponent */

    /***/
    function H70G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderFormComponent", function () {
        return OrderFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @app/core/components/info-modal/info-modal.component */
      "E/54");
      /* harmony import */


      var _app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/order/components/form-validated-modal/form-validated-modal.component */
      "p6Hq");
      /* harmony import */


      var _models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @models/product */
      "yHTb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _services_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../services/order.service */
      "CZRY");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-material-timepicker */
      "r3oX");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../services/order-summary.pipe */
      "nIH7");

      function OrderFormComponent_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("name"));
        }
      }

      function OrderFormComponent_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("phone"));
        }
      }

      function OrderFormComponent_mat_error_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("street", "address"));
        }
      }

      function OrderFormComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("zipCode", "address"));
        }
      }

      function OrderFormComponent_mat_error_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.getErrorMessage("city", "address"));
        }
      }

      function OrderFormComponent_div_33_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.getErrorMessage("street", "address"));
        }
      }

      function OrderFormComponent_div_33_mat_error_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.getErrorMessage("zipCode", "address"));
        }
      }

      function OrderFormComponent_div_33_mat_error_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getErrorMessage("city", "address"));
        }
      }

      function OrderFormComponent_div_33_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      function OrderFormComponent_mat_error_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.getErrorMessage("deliveryDate"));
        }
      }

      function OrderFormComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Heure de livraison");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-material-timepicker", null, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxTimepicker", _r18)("format", 24);
        }
      }

      function OrderFormComponent_p_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Votre livraison vous sera livr\xE9e \xE0 l'adresse renseign\xE9e le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, (tmp_0_0 = ctx_r9.orderForm.get("deliveryDate")) == null ? null : tmp_0_0.value, "fullDate"), " ", ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) ? "\xE0 " + ((tmp_0_0 = ctx_r9.orderForm.get("deliveryTime")) == null ? null : tmp_0_0.value) : "entre 6 heures et midi.", " ");
        }
      }

      function OrderFormComponent_p_51_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0\xA0- Elle devra \xEAtre valid\xE9e par la boulangerie M. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sans retour de leur part dans l'heure, consid\xE9rez la comme annul\xE9e.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderFormComponent_p_51_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA0\xA0- Certains produits ne sont pas disponibles. Ils ont \xE9t\xE9 d\xE9sactiv\xE9s dans le formulaire. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderFormComponent_p_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Attention, d\xFB au d\xE9lai court de votre commande: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderFormComponent_p_51_span_3_Template, 5, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_p_51_span_4_Template, 3, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.showOrderNeedValidationMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.showShortDeliveryMessage);
        }
      }

      function OrderFormComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tranch\xE9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r25.sliceFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", product_r24.name);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          unavailableItem: a0
        };
      };

      function OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Commentaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_div_12_Template, 3, 2, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quantit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r24 = ctx.$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r23.showShortDeliveryMessage && !product_r24.shortDelivery));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r24.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r23.commentFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", product_r24.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r24.isSliceable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Prix: ", product_r24.price.toFixed(2), " \u20AC H.T. / ", product_r24.unit, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r23.itemFormGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", product_r24.name);
        }
      }

      function OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_ng_template_59_mat_expansion_panel_0_mat_card_4_Template, 21, 12, "mat-card", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var category_r22 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r22.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.filterProductByCategory(category_r22.value));
        }
      }

      function OrderFormComponent_ng_template_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrderFormComponent_ng_template_59_mat_expansion_panel_0_Template, 5, 2, "mat-expansion-panel", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "keyvalue");
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r13.PRODUCTCATEGORY));
        }
      }

      function OrderFormComponent_div_68_h3_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 63);
        }

        if (rf & 2) {
          var item_r30 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", item_r30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function OrderFormComponent_div_68_h3_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Commentaire de la commande : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OrderFormComponent_div_68_h3_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var tmp_0_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("      ", (tmp_0_0 = ctx_r29.orderForm.get("orderComment")) == null ? null : tmp_0_0.value, "\n    ");
        }
      }

      function OrderFormComponent_div_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "R\xE9sum\xE9 de la commande :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OrderFormComponent_div_68_h3_4_Template, 1, 1, "h3", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "summaryPipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderFormComponent_div_68_h3_6_Template, 2, 0, "h3", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OrderFormComponent_div_68_h3_7_Template, 3, 1, "h3", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Prix total :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var tmp_1_0 = null;
          var tmp_2_0 = null;
          var tmp_3_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r14.orderSummary));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_1_0.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r14.orderForm.get("orderComment")) == null ? null : tmp_2_0.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = ctx_r14.orderForm.get("totalPrice")) == null ? null : tmp_3_0.value.toFixed(2), " \u20AC H.T. ");
        }
      }

      var OrderFormComponent = /*#__PURE__*/function () {
        function OrderFormComponent(orderService, fb, dialog) {
          var _this = this;

          _classCallCheck(this, OrderFormComponent);

          this.orderService = orderService;
          this.fb = fb;
          this.dialog = dialog;
          this.orderSummary = {
            products: [],
            sliced: [],
            comments: []
          };
          this.PRODUCTCATEGORY = _models_product__WEBPACK_IMPORTED_MODULE_4__["ProductCategory"];
          this.tomorrow = new Date();
          this.showDeliveryMessage = false;
          this.showShortDeliveryMessage = false;
          this.showOrderNeedValidationMessage = false;
          this.selectDeliveryTime = false;
          this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.productList = [];
          this.displayDeliveryForm = false;
          this.userChoiceDataManagement = false;
          this.orderForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{10}$')]],
            address: this.fb.group({
              street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }),
            deliveryAddress: this.fb.group({
              street: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}$')]],
              city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }, {
              disabled: !this.displayDeliveryForm
            }),
            hasDifferentDeliveryAddress: [this.displayDeliveryForm, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deliveryDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            deliveryTime: [null],
            orderDate: [new Date(Date.now()), [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            orderComment: [''],
            totalPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
          this.errorMessages = {
            name: {
              required: 'Nom de votre entreprise obligatoire'
            },
            phone: {
              required: 'Numéro de téléphone obligatoire',
              pattern: 'Doit contenir 10 chiffres'
            },
            street: {
              required: 'Rue obligatoire'
            },
            zipCode: {
              required: 'Code postal obligatoire',
              pattern: 'Doit contenir 5 chiffres'
            },
            city: {
              required: 'Ville obligatoire'
            },
            deliveryDate: {
              required: 'Date de livraison obligatoire',
              matDatepickerMin: 'Date incorrecte'
            }
          };

          this.onlySummerSunday = function (d) {
            var day = (d || new Date()).getDay();
            var month = (d || new Date()).getMonth();
            var res = true;

            if (day === 0 && (month > 8 || month < 5)) {
              res = false;
            }

            return res; // tslint:disable-next-line
          };

          this.tomorrow.setDate(new Date().getDate() + 1);
          this.itemFormGroup = this.fb.group({
            "default": ['']
          });
          this.sliceFormGroup = this.fb.group({
            "default": ['']
          });
          this.commentFormGroup = this.fb.group({
            "default": ['']
          });
          this.orderService.getAllAvailableItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (resProdList) {
            _this.productList = resProdList.sort(function (a, b) {
              return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            });

            _this.itemFormGroup.removeControl('default');

            _this.sliceFormGroup.removeControl('default');

            _this.commentFormGroup.removeControl('default');

            resProdList.forEach(function (product) {
              var _a, _b, _c;

              (_a = _this.itemFormGroup) === null || _a === void 0 ? void 0 : _a.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
              (_b = _this.sliceFormGroup) === null || _b === void 0 ? void 0 : _b.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
              (_c = _this.commentFormGroup) === null || _c === void 0 ? void 0 : _c.addControl(product.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null));
            });

            _this.getUserDataFromLocalStorage();
          })).subscribe();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([this.itemFormGroup.valueChanges, this.sliceFormGroup.valueChanges, this.commentFormGroup.valueChanges]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                itemFormData = _ref2[0],
                sliceFormData = _ref2[1],
                commentFormData = _ref2[2];

            _this.orderSummary = {
              products: Object.entries(itemFormData),
              sliced: Object.entries(sliceFormData),
              comments: Object.entries(commentFormData)
            };

            _this.calcTotalPrice(itemFormData);
          })).subscribe();
          this.hasDifferentDeliveryAddress(this.displayDeliveryForm);
          this.filterShortDeliveryProducts();
        }

        _createClass(OrderFormComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe$.next();
            this.unsubscribe$.unsubscribe();
          }
        }, {
          key: "calcTotalPrice",
          value: function calcTotalPrice(itemFormData) {
            var _this2 = this;

            var _a;

            var totalPrice = 0;

            var _loop = function _loop() {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                  itemName = _Object$entries$_i[0],
                  quantity = _Object$entries$_i[1];

              if (quantity) {
                totalPrice += quantity * _this2.productList.find(function (el) {
                  return el.name === itemName;
                }).price;
              }

              (_a = _this2.orderForm.get('totalPrice')) === null || _a === void 0 ? void 0 : _a.setValue(totalPrice);
            };

            for (var _i2 = 0, _Object$entries = Object.entries(itemFormData); _i2 < _Object$entries.length; _i2++) {
              _loop();
            }
          }
        }, {
          key: "specificDeliveryTime",
          value: function specificDeliveryTime(checked) {
            var _a, _b, _c;

            this.selectDeliveryTime = checked;

            if (this.selectDeliveryTime) {
              (_a = this.orderForm.get('deliveryTime')) === null || _a === void 0 ? void 0 : _a.enable();
            } else {
              (_b = this.orderForm.get('deliveryTime')) === null || _b === void 0 ? void 0 : _b.reset();
              (_c = this.orderForm.get('deliveryTime')) === null || _c === void 0 ? void 0 : _c.disable();
            }
          }
        }, {
          key: "hasDifferentDeliveryAddress",
          value: function hasDifferentDeliveryAddress(checked) {
            var _a, _b;

            this.displayDeliveryForm = checked;

            if (this.displayDeliveryForm) {
              (_a = this.orderForm.get('deliveryAddress')) === null || _a === void 0 ? void 0 : _a.enable();
            } else {
              (_b = this.orderForm.get('deliveryAddress')) === null || _b === void 0 ? void 0 : _b.disable();
            }
          }
        }, {
          key: "filterShortDeliveryProducts",
          value: function filterShortDeliveryProducts() {
            var _this3 = this;

            var _a, _b, _c;

            if (new Date(Date.now()).getHours() >= 18) {
              this.tomorrow.setDate(this.tomorrow.getDate() + 1);
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([(_a = this.orderForm.get('deliveryDate')) === null || _a === void 0 ? void 0 : _a.valueChanges, (_b = this.orderForm.get('orderDate')) === null || _b === void 0 ? void 0 : _b.valueChanges]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  deliveryDate = _ref4[0],
                  orderDate = _ref4[1];

              var orderTime = orderDate.getHours();
              var differenceIndays = (deliveryDate.getTime() - orderDate.getTime()) / (1000 * 3600 * 24);

              if (differenceIndays >= 1) {
                _this3.showDeliveryMessage = true;
                _this3.showShortDeliveryMessage = false;
                _this3.showOrderNeedValidationMessage = false;

                _this3.productList.forEach(function (product) {
                  var _a;

                  if (!product.shortDelivery) {
                    (_a = _this3.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.enable();
                  }
                });
              } else if (orderTime >= 11 && orderTime < 18 && differenceIndays < 1) {
                _this3.showDeliveryMessage = false;
                _this3.showOrderNeedValidationMessage = true;

                _this3.productList.forEach(function (product) {
                  var _a;

                  if (!product.shortDelivery) {
                    _this3.showShortDeliveryMessage = true;
                    (_a = _this3.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                  }
                });
              } else if (orderTime < 11 && differenceIndays < 1) {
                _this3.showDeliveryMessage = true;
                _this3.showOrderNeedValidationMessage = false;

                _this3.productList.forEach(function (product) {
                  var _a;

                  if (!product.shortDelivery) {
                    _this3.showShortDeliveryMessage = true;
                    (_a = _this3.itemFormGroup.get(product.name)) === null || _a === void 0 ? void 0 : _a.disable();
                  }
                });
              }
            })).subscribe();
            (_c = this.orderForm.get('orderDate')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this4 = this;

            var _a;

            (_a = this.orderForm.get('orderDate')) === null || _a === void 0 ? void 0 : _a.setValue(new Date(Date.now()));
            var orderList = [];

            var _loop2 = function _loop2() {
              var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                  itemName = _Object$entries2$_i[0],
                  quantity = _Object$entries2$_i[1];

              if (quantity) {
                orderList.push({
                  product: itemName,
                  quantity: quantity,
                  unit: _this4.productList.find(function (el) {
                    return el.name === itemName;
                  }).unit
                });
              }
            };

            for (var _i3 = 0, _Object$entries2 = Object.entries(this.itemFormGroup.value); _i3 < _Object$entries2.length; _i3++) {
              _loop2();
            }

            var _loop3 = function _loop3() {
              var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i4], 2),
                  itemName = _Object$entries3$_i[0],
                  isSliced = _Object$entries3$_i[1];

              if (isSliced) {
                var indexItem = orderList.findIndex(function (el) {
                  return (el === null || el === void 0 ? void 0 : el.product) === itemName;
                });

                if (indexItem >= 0) {
                  orderList[indexItem].isSliced = true;
                }
              }
            };

            for (var _i4 = 0, _Object$entries3 = Object.entries(this.sliceFormGroup.value); _i4 < _Object$entries3.length; _i4++) {
              _loop3();
            }

            var _loop4 = function _loop4() {
              var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i5], 2),
                  itemName = _Object$entries4$_i[0],
                  comment = _Object$entries4$_i[1];

              if (comment && comment.length > 0) {
                var indexItem = orderList.findIndex(function (el) {
                  return (el === null || el === void 0 ? void 0 : el.product) === itemName;
                });

                if (indexItem >= 0) {
                  orderList[indexItem].comment = comment;
                }
              }
            };

            for (var _i5 = 0, _Object$entries4 = Object.entries(this.commentFormGroup.value); _i5 < _Object$entries4.length; _i5++) {
              _loop4();
            }

            if (this.orderForm.valid && orderList.length > 0) {
              var finalOrder = Object.assign(Object.assign({}, this.orderForm.value), {
                order: orderList
              });
              this.userDataManagement();
              this.orderService.addOrder(finalOrder).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function () {
                _this4.validatedModal = _this4.dialog.open(_app_order_components_form_validated_modal_form_validated_modal_component__WEBPACK_IMPORTED_MODULE_3__["FormValidatedModalComponent"], {
                  disableClose: true,
                  width: '400px',
                  maxWidth: '90%'
                });

                _this4.validatedModal.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                  window.location.reload();
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe();
              });
            }
          }
        }, {
          key: "getErrorMessage",
          value: function getErrorMessage(controlName, controlGroup) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;

            var errors = [];

            if (controlGroup) {
              if ((_b = (_a = this.orderForm.get(controlGroup)) === null || _a === void 0 ? void 0 : _a.get(controlName)) === null || _b === void 0 ? void 0 : _b.hasError('required')) {
                return this.errorMessages[controlName].required;
              }

              if ((_d = (_c = this.orderForm.get(controlGroup)) === null || _c === void 0 ? void 0 : _c.get(controlName)) === null || _d === void 0 ? void 0 : _d.errors) {
                for (var _i6 = 0, _Object$keys = Object.keys((_f = (_e = this.orderForm.get(controlGroup)) === null || _e === void 0 ? void 0 : _e.get(controlName)) === null || _f === void 0 ? void 0 : _f.errors); _i6 < _Object$keys.length; _i6++) {
                  var key = _Object$keys[_i6];
                  errors.push(this.errorMessages[controlName][key]);
                }
              }
            } else {
              if ((_g = this.orderForm.get(controlName)) === null || _g === void 0 ? void 0 : _g.hasError('required')) {
                return this.errorMessages[controlName].required;
              }

              if ((_h = this.orderForm.get(controlName)) === null || _h === void 0 ? void 0 : _h.errors) {
                for (var _i7 = 0, _Object$keys2 = Object.keys((_j = this.orderForm.get(controlName)) === null || _j === void 0 ? void 0 : _j.errors); _i7 < _Object$keys2.length; _i7++) {
                  var _key = _Object$keys2[_i7];
                  errors.push(this.errorMessages[controlName][_key]);
                }
              }
            }

            return errors.join(', ');
          }
        }, {
          key: "filterProductByCategory",
          value: function filterProductByCategory(category) {
            return this.productList.filter(function (prod) {
              return prod.category === category;
            });
          }
        }, {
          key: "getUserDataFromLocalStorage",
          value: function getUserDataFromLocalStorage() {
            var _this5 = this;

            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

            var userData = localStorage.getItem('userBoulM');
            var haveSeenInfoBoulM = localStorage.getItem('haveSeenInfoBoulM');

            if (userData && userData.length > 0) {
              var userDataParsed = JSON.parse(userData);
              this.userChoiceDataManagement = true;
              (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.setValue(userDataParsed.name);
              (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.setValue(userDataParsed.phone);
              (_d = (_c = this.orderForm.get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.setValue(userDataParsed.address.street);
              (_f = (_e = this.orderForm.get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.setValue(userDataParsed.address.zipCode);
              (_h = (_g = this.orderForm.get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.setValue(userDataParsed.address.city); // Deactivated for the first implementation
              // userDataParsed.order.forEach((el) => {
              //   this.itemFormGroup.get(el.product)?.setValue(el.quantity);
              //   this.sliceFormGroup.get(el.product)?.setValue(el.isSliced);
              //   this.commentFormGroup.get(el.product)?.setValue(el.comment);
              // });

              if (userDataParsed.deliveryAddress) {
                (_j = this.orderForm.get('hasDifferentDeliveryAddress')) === null || _j === void 0 ? void 0 : _j.setValue(true);
                this.hasDifferentDeliveryAddress(true);
                (_l = (_k = this.orderForm.get('deliveryAddress')) === null || _k === void 0 ? void 0 : _k.get('street')) === null || _l === void 0 ? void 0 : _l.setValue(userDataParsed.deliveryAddress.street);
                (_o = (_m = this.orderForm.get('deliveryAddress')) === null || _m === void 0 ? void 0 : _m.get('zipCode')) === null || _o === void 0 ? void 0 : _o.setValue(userDataParsed.deliveryAddress.zipCode);
                (_q = (_p = this.orderForm.get('deliveryAddress')) === null || _p === void 0 ? void 0 : _p.get('city')) === null || _q === void 0 ? void 0 : _q.setValue(userDataParsed.deliveryAddress.city);
              }

              if (userDataParsed.deliveryTime) {
                (_r = this.orderForm.get('selectDeliveryTime')) === null || _r === void 0 ? void 0 : _r.setValue(true);
                this.specificDeliveryTime(true);
                (_s = this.orderForm.get('deliveryTime')) === null || _s === void 0 ? void 0 : _s.setValue(userDataParsed.deliveryTime);
              }

              if (userDataParsed.orderComment) {
                (_t = this.orderForm.get('orderComment')) === null || _t === void 0 ? void 0 : _t.setValue(userDataParsed.orderComment);
              }
            } else if (!haveSeenInfoBoulM) {
              // TODO: After first week of information, remove this and put a delete localstorage value to clean unser browser
              this.infoModal = this.dialog.open(_app_core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_2__["InfoModalComponent"], {
                disableClose: true,
                maxWidth: '90%'
              });
              this.infoModal.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
                if (_this5.infoModal.componentInstance.dontShowAgain) {
                  localStorage.setItem('haveSeenInfoBoulM', _this5.infoModal.componentInstance.dontShowAgain.toString());
                }
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe();
            }
          }
        }, {
          key: "userDataManagement",
          value: function userDataManagement() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

            if (this.userChoiceDataManagement) {
              var userFormData = {
                name: (_a = this.orderForm.get('name')) === null || _a === void 0 ? void 0 : _a.value,
                phone: (_b = this.orderForm.get('phone')) === null || _b === void 0 ? void 0 : _b.value,
                address: {
                  street: (_d = (_c = this.orderForm.get('address')) === null || _c === void 0 ? void 0 : _c.get('street')) === null || _d === void 0 ? void 0 : _d.value,
                  zipCode: (_f = (_e = this.orderForm.get('address')) === null || _e === void 0 ? void 0 : _e.get('zipCode')) === null || _f === void 0 ? void 0 : _f.value,
                  city: (_h = (_g = this.orderForm.get('address')) === null || _g === void 0 ? void 0 : _g.get('city')) === null || _h === void 0 ? void 0 : _h.value
                }
              };

              if (this.displayDeliveryForm) {
                userFormData = Object.assign(Object.assign({}, userFormData), {
                  deliveryAddress: {
                    street: (_k = (_j = this.orderForm.get('deliveryAddress')) === null || _j === void 0 ? void 0 : _j.get('street')) === null || _k === void 0 ? void 0 : _k.value,
                    zipCode: (_m = (_l = this.orderForm.get('deliveryAddress')) === null || _l === void 0 ? void 0 : _l.get('zipCode')) === null || _m === void 0 ? void 0 : _m.value,
                    city: (_p = (_o = this.orderForm.get('deliveryAddress')) === null || _o === void 0 ? void 0 : _o.get('city')) === null || _p === void 0 ? void 0 : _p.value
                  }
                });
              }

              if (this.selectDeliveryTime) {
                userFormData = Object.assign(Object.assign({}, userFormData), {
                  deliveryTime: (_q = this.orderForm.get('deliveryTime')) === null || _q === void 0 ? void 0 : _q.value
                });
              } // Deactivated on first implementation
              // localStorage.setItem('userBoulM', JSON.stringify(finalOrder));

            } else {
              localStorage.removeItem('userBoulM');
            }
          }
        }]);

        return OrderFormComponent;
      }();

      OrderFormComponent.ɵfac = function OrderFormComponent_Factory(t) {
        return new (t || OrderFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
      };

      OrderFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrderFormComponent,
        selectors: [["app-order-form"]],
        decls: 75,
        vars: 20,
        consts: [[3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly space-evenly"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: Restaurant du port", "formControlName", "name", "required", ""], [4, "ngIf"], ["matInput", "", "type", "tel", "placeholder", "Ex: 0546331122", "formControlName", "phone", "required", ""], ["formGroupName", "address"], ["fxLayout", "row", "fxLayoutAlign", "center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: 2 rue du port", "formControlName", "street", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: 17000", "formControlName", "zipCode", "required", ""], ["matInput", "", "type", "text", "placeholder", "Ex: La Rochelle", "formControlName", "city", "required", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", 1, "checkboxRow"], ["fxFlexOffset", "7", "formControlName", "hasDifferentDeliveryAddress", 3, "change"], ["formGroupName", "deliveryAddress", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center"], ["fxFlexOffset", "7", "fxFlex", "40", "fxFlex.lt-sm", "87", "appearance", "outline", 3, "click"], ["matInput", "", "required", "", "formControlName", "deliveryDate", "readonly", "", 3, "min", "matDatepicker", "matDatepickerFilter"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""], ["fxFlexOffset", "7", 3, "checked", "change"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87", 4, "ngIf"], ["class", "deliveryMessage", 4, "ngIf"], ["class", "warningMessage", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["productContainer", ""], ["fxFlexOffset", "7", "fxFlex", "87", "fxFlex.lt-sm", "87", "appearance", "outline"], ["matInput", "", "formControlName", "orderComment", "placeholder", "Ex: D\xE9poser la livraison en arri\xE8re cuisine, ..."], ["fxLayout", "column wrap", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "buttonRow"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "mat-raised-button", "", "type", "submit"], ["formGroupName", "deliveryAddress"], ["fxFlexOffset", "7", "fxFlexOffset.gt-md", "12", "fxFlex", "40", "fxFlex.lt-sm", "87"], ["appearance", "outline"], ["min", "06:00", "max", "12:00", "readonly", "", "matInput", "", "formControlName", "deliveryTime", 3, "ngxTimepicker", "format"], ["datePicker", ""], [1, "deliveryMessage"], [1, "warningMessage"], ["id", "importantSentence"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", "class", "productCategory", 4, "ngFor", "ngForOf"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", "fxFlex", "87", 1, "productCategory"], ["fxFlex", "100", 1, "productCategoryHeader"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "49", "fxFlex.lt-sm", "100", 3, "ngClass"], [1, "productExpansion"], [1, "productExpansionHeader"], [1, "productExpansionBody"], ["fxFlex", "100", "appearance", "outline", 3, "formGroup"], ["matInput", "", "placeholder", "Ex: boules tranch\xE9es, forme des pains, ...", 3, "formControlName"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between baseline", 1, "cardPriceQuantity"], ["appearance", "outline", 1, "quantityInput", 3, "formGroup"], ["matInput", "", "type", "number", "min", "0", 3, "formControlName"], [3, "formGroup"], [1, "slicedCheckbox", 3, "formControlName"], ["fxLayout", "column wrap", "fxLayoutAlign", "center center"], [3, "innerHtml", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "orderCommentSummaryTitle", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2", "class", "summaryComment", 4, "ngIf"], ["fxFlex", "50", "fxFlexOffset", "2"], [3, "innerHtml"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "orderCommentSummaryTitle"], ["fxFlex", "50", "fxFlexOffset", "2", 1, "summaryComment"]],
        template: function OrderFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OrderFormComponent_Template_form_ngSubmit_0_listener() {
              return ctx.onSubmit();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Num\xE9ro de t\xE9l\xE9phone");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_31_listener($event) {
              return ctx.hasDifferentDeliveryAddress($event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Adresse de livraison diff\xE9rente");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, OrderFormComponent_div_33_Template, 18, 3, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-divider", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderFormComponent_Template_mat_form_field_click_37_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

              return _r6.open();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_46_listener($event) {
              return ctx.specificDeliveryTime($event.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Besoin d'une heure de livraison pr\xE9cise?");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, OrderFormComponent_div_68_Template, 12, 6, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-checkbox", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OrderFormComponent_Template_mat_checkbox_change_70_listener($event) {
              return ctx.userChoiceDataManagement = $event.checked;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Enregistrer mes infos personnelles ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Commander ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

            var tmp_1_0 = null;
            var tmp_2_0 = null;
            var tmp_3_0 = null;
            var tmp_3_1 = null;
            var tmp_4_0 = null;
            var tmp_4_1 = null;
            var tmp_5_0 = null;
            var tmp_5_1 = null;
            var tmp_11_0 = null;
            var tmp_18_0 = null;

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.selectDeliveryTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectDeliveryTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeliveryMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showShortDeliveryMessage || ctx.showOrderNeedValidationMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productList.length)("ngIfElse", _r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_18_0 = ctx.orderForm.get("totalPrice")) == null ? null : tmp_18_0.value) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.userChoiceDataManagement);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexOffsetDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__["TimepickerDirective"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_17__["NgxMaterialTimepickerComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionPanelTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"], _services_order_summary_pipe__WEBPACK_IMPORTED_MODULE_22__["OrderSummaryPipe"]],
        styles: ["form[_ngcontent-%COMP%] {\n  padding: 3rem 0 3rem 0;\n}\n@media (max-width: 768px) {\n  form[_ngcontent-%COMP%] {\n    padding: 5rem 0 3rem 0;\n  }\n}\n.checkboxRow[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.buttonRow[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.deliveryMessage[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  font-weight: bold;\n}\n@media (max-width: 768px) {\n  .deliveryMessage[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n.warningMessage[_ngcontent-%COMP%] {\n  color: crimson;\n}\n@media (max-width: 768px) {\n  .warningMessage[_ngcontent-%COMP%] {\n    text-align-last: center;\n  }\n}\n#importantSentence[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: bold;\n}\n  ngx-material-timepicker-container {\n  --button-color: var(--color-app-brown) !important;\n  --dial-background-color: var(--color-app-brown) !important;\n  --clock-hand-color: var(--color-app-brown) !important;\n}\n.productCategory[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  margin-bottom: 0.5rem;\n}\n.productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:first-child {\n  margin-top: 2rem;\n}\n@media (min-width: 600px) {\n  .productCategory[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 2rem;\n  }\n}\n.productCategoryHeader[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 1.7rem;\n  max-height: 4rem;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 0.8rem;\n}\n.productExpansion[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.productExpansionHeader[_ngcontent-%COMP%] {\n  padding: 0 5px 0 0;\n  font-size: 1.5rem;\n  margin: 0;\n  height: 2.5rem;\n}\n.productExpansionBody[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  margin: 1rem 1rem 0 1rem;\n}\n  .slicedCheckbox > label > span {\n  font-size: 1.3rem;\n}\n.cardPriceQuantity[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: var(--color-app-brown) !important;\n}\n  .mat-expansion-panel-body {\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  font-size: 1.3rem;\n  padding: 0 !important;\n}\n  .mat-expansion-panel-body > p {\n  font-size: 1.3rem;\n  font-weight: lighter;\n  margin: 0 0 0.8rem 1rem !important;\n}\n.quantityInput[_ngcontent-%COMP%] {\n  max-width: 9rem;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix {\n  padding: 0;\n  border: 0;\n}\n[_nghost-%COMP%]     .quantityInput div.mat-form-field-infix input {\n  height: 3rem;\n}\n.unavailableItem[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0.2);\n}\n.unavailableItem[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: rgba(128, 128, 128, 0);\n}\n.unavailableItem[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%] {\n  background-color: rgba(128, 128, 128, 0);\n}\n.orderCommentSummaryTitle[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.summaryComment[_ngcontent-%COMP%] {\n  text-align: center;\n}\npre[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvcGFnZXMvb3JkZXItZm9ybS9vcmRlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjtBQUFFO0VBRkY7SUFHSSxzQkFBQTtFQUdGO0FBQ0Y7QUFEQTtFQUNFLG1CQUFBO0FBSUY7QUFEQTtFQUNFLGdCQUFBO0FBSUY7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7QUFJRjtBQUhFO0VBSEY7SUFJSSxrQkFBQTtFQU1GO0FBQ0Y7QUFKQTtFQUNFLGNBQUE7QUFPRjtBQU5FO0VBRkY7SUFHSSx1QkFBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUFTRjtBQU5BO0VBQ0UsaURBQUE7RUFDQSwwREFBQTtFQUNBLHFEQUFBO0FBU0Y7QUFOQTtFQUNFLDZDQUFBO0VBQ0EscUJBQUE7QUFTRjtBQVJFO0VBQ0UsZ0JBQUE7QUFVSjtBQVJFO0VBQ0U7SUFDRSxnQkFBQTtFQVVKO0FBQ0Y7QUFOQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlIQUFBO0FBU0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQU1GO0FBSkE7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBT0Y7QUFMQTtFQUNFLGdCQUFBO0FBUUY7QUFOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVNGO0FBUEE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFVRjtBQVJBO0VBQ0UsaUJBQUE7QUFXRjtBQVRBO0VBQ0UsZ0JBQUE7QUFZRjtBQVZBO0VBQ0Usd0NBQUE7QUFhRjtBQVhBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBY0Y7QUFiRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtBQWVKO0FBWEE7RUFDRSxlQUFBO0FBY0Y7QUFaQTtFQUNFLDRCQUFBO0FBZUY7QUFiQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBZ0JGO0FBZkU7RUFDRSxZQUFBO0FBaUJKO0FBZEE7RUFDRSwwQ0FBQTtBQWlCRjtBQWhCRTtFQUNFLHdDQUFBO0FBa0JKO0FBaEJFO0VBQ0Usd0NBQUE7QUFrQko7QUFkQTtFQUNFLDBCQUFBO0FBaUJGO0FBZEE7RUFDRSxrQkFBQTtBQWlCRjtBQWRBO0VBQ0UsaURBQUE7QUFpQkY7QUFkQSxvQ0FBQSIsImZpbGUiOiJzcmMvYXBwL29yZGVyL3BhZ2VzL29yZGVyLWZvcm0vb3JkZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIHBhZGRpbmc6IDNyZW0gMCAzcmVtIDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDAgM3JlbSAwO1xyXG4gIH1cclxufVxyXG4uY2hlY2tib3hSb3cge1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b25Sb3cge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5kZWxpdmVyeU1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4ud2FybmluZ01lc3NhZ2Uge1xyXG4gIGNvbG9yOiBjcmltc29uO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4jaW1wb3J0YW50U2VudGVuY2Uge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG46Om5nLWRlZXAgbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItY29udGFpbmVyIHtcclxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG4gIC0tZGlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbiAgLS1jbG9jay1oYW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pICFpbXBvcnRhbnQ7XHJcbn1cclxuLy8qKiogQ1VTVE9NIEFDQ09SRElPTiBQUk9EVUNUIENBVEVHT1JZXHJcbi5wcm9kdWN0Q2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgLm1hdC1jYXJkOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1hdC1jYXJkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvZHVjdENhdGVnb3J5SGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiKDAgMCAwIC8gMjAlKSxcclxuICAgIDBweCAycHggMnB4IDBweCByZ2IoMCAwIDAgLyAxNCUpLCAwcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMTIlKTtcclxufVxyXG4vLyoqKlxyXG5cclxuLy8qKiogQ1VTVE9NIENBUkQgUFJPRFVDVCBTVFlMRVxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xyXG59XHJcbi5wcm9kdWN0RXhwYW5zaW9uOm5vdChbY2xhc3MqPVwibWF0LWVsZXZhdGlvbi16XCJdKSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4ucHJvZHVjdEV4cGFuc2lvbkhlYWRlciB7XHJcbiAgcGFkZGluZzogMCA1cHggMCAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxufVxyXG4ucHJvZHVjdEV4cGFuc2lvbkJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAgMXJlbTtcclxufVxyXG46Om5nLWRlZXAgLnNsaWNlZENoZWNrYm94ID4gbGFiZWwgPiBzcGFuIHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4uY2FyZFByaWNlUXVhbnRpdHkge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYXBwLWJyb3duKSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAwLjhyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnF1YW50aXR5SW5wdXQge1xyXG4gIG1heC13aWR0aDogOXJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnF1YW50aXR5SW5wdXQgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5xdWFudGl0eUlucHV0IGRpdi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gIH1cclxufVxyXG4udW5hdmFpbGFibGVJdGVtIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwKTtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlckNvbW1lbnRTdW1tYXJ5VGl0bGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uc3VtbWFyeUNvbW1lbnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxucHJlIHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-order-form',
            templateUrl: './order-form.component.html',
            styleUrls: ['./order-form.component.scss']
          }]
        }], function () {
          return [{
            type: _services_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "N/25":
    /*!***********************************************!*\
      !*** ./src/app/auth/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function N25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");

      var AuthService = /*#__PURE__*/function () {
        function AuthService(auth) {
          _classCallCheck(this, AuthService);

          this.auth = auth;
        }

        _createClass(AuthService, [{
          key: "login",
          value: function login(credentials) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function (res) {
              return res;
            }, function (err) {
              throw err;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.auth.signOut();
          }
        }, {
          key: "isUserAuthenticated",
          value: function isUserAuthenticated() {
            return this.auth.user;
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]));
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
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/auth/services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function AppComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Plateforme de commande r\xE9serv\xE9e aux professionnels ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.router.navigate([""]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Formulaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.router.navigate(["admin/liste-commandes"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Commandes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.router.navigate(["admin/recap-production"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Production ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.router.navigate(["admin/produits"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Produits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_4_Template_div_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.logoutAdminSpace();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Se d\xE9connecter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
        }
      }

      function AppComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        }
      }

      function AppComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.router.navigate(["admin/liste-commandes"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_basket");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Commandes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.router.navigate(["admin/recap-production"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "supervisor_account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Production");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.router.navigate(["admin/produits"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fastfood");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Produits");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.router.navigate(["/"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Formulaire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_p_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_46_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.router.navigate(["admin"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Espace administrateur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_p_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_47_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.logoutAdminSpace();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "D\xE9connexion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, authService, iconRegistry, sanitizer) {
          var _this6 = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.authService = authService;
          this.activatedRoute = '';
          this.authService.isUserAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (user) {
            _this6.isConnected = user;
          })).subscribe();
          iconRegistry.addSvgIcon('facebook', sanitizer.bypassSecurityTrustResourceUrl('../assets/logos/facebook-circular-logo.svg'));
        }

        _createClass(AppComponent, [{
          key: "logoutAdminSpace",
          value: function logoutAdminSpace() {
            this.authService.logout();
            this.router.navigate(['']);
          }
        }, {
          key: "onActivate",
          value: function onActivate() {
            this.activatedRoute = this.router.routerState.snapshot.url;
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 52,
        vars: 10,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "flex-start center", "fxLayoutAlign.lt-sm", "center center", 1, "header"], ["fxFlex", "20", "fxHide.lt-sm", "", 3, "click"], ["alt", "logo boulangerie-m", "src", "../assets/images/logo-header.png", 1, "logo-header", "link"], ["fxFlex", "60", "fxHide.lt-sm", "", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", "", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", 4, "ngIf"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "80", 3, "click"], ["class", "mobileMenuButton", "fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["xPosition", "after"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "container-page"], [3, "activate"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column wrap", "fxLayoutAlign", "space-evenly center", 1, "footer"], [1, "textWithIcon"], ["svgIcon", "facebook", 1, "iconFb"], ["href", "https://www.facebook.com/pages/category/Bakery/Boulangerie-M-437577199741453/", "target", "blank", 1, "textWithIcon"], [1, "link", 3, "click"], [1, "link"], [3, "click", 4, "ngIf"], ["href", "https://www.linkedin.com/in/alexandre-guerin/", "target", "blank"], ["fxFlex", "60", "fxHide.lt-sm", ""], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center", "fxFlex", "80", "fxHide.lt-sm", ""], ["fxLayoutAlign", "center center", 1, "link", "logoutHeader", 3, "click"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10"], ["fxHide.gt-xs", "", "fxFlex.lt-sm", "10", "mat-icon-button", "", 1, "mobileMenuButton", 3, "matMenuTriggerFor"], [3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_1_listener() {
              return ctx.router.navigate([""]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 14, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 1, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
              return ctx.router.navigate([""]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_button_8_Template, 3, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_button_11_Template, 5, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 5, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 5, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 5, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_15_listener() {
              return ctx.logoutAdminSpace();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "exit_to_app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Se d\xE9connecter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "router-outlet", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_21_listener() {
              return ctx.onActivate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Boulangerie M ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 127 Avenue du Lieutenant-Colonel Bernier ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 17000 La Rochelle ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 05 46 01 09 72 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Notre page facebook");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_42_listener() {
              return ctx.router.navigate(["mentions-legales"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mentions L\xE9gales");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppComponent_p_46_Template, 2, 0, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AppComponent_p_47_Template, 2, 0, "p", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " R\xE9alis\xE9 gracieusement par ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Ithrandil");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("production"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.activatedRoute.includes("produits"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activatedRoute.includes("admin"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isConnected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isConnected);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n  background-image: url('bakery-background.jpg');\n  background-position: center;\n  background-size: cover;\n  background-color: var(--color-app-light-grey);\n}\n\n.container-page[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 90rem;\n  height: 100%;\n  background-color: var(--color-app-light-grey);\n  align-self: center;\n  overflow: auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: var(--color-app-light-grey);\n  height: 14rem;\n  border-bottom: solid 1px black;\n  color: var(--color-app-brown);\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    height: 6rem;\n  }\n}\n\n.logo-header[_ngcontent-%COMP%] {\n  max-width: 10rem;\n  max-height: 10rem;\n}\n\n@media (max-width: 768px) {\n  .logo-header[_ngcontent-%COMP%] {\n    margin-top: 6rem;\n    z-index: 99;\n    position: relative;\n  }\n}\n\n.mobileMenuButton[_ngcontent-%COMP%] {\n  border: none;\n  background-color: var(--color-app-light-grey);\n}\n\n.logoutHeader[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n\n.footer[_ngcontent-%COMP%] {\n  color: var(--color-app-brown);\n  padding-top: 1.5rem;\n  margin-bottom: -11rem;\n  border-top: solid 1px black;\n  background-color: var(--color-app-light-grey);\n  text-align: center;\n}\n\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-bottom: -26.6rem;\n  }\n}\n\n[_ngcontent-%COMP%]:hover   .link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:hover {\n  color: var(--color-app-brown);\n}\n\n.iconFb[_ngcontent-%COMP%] {\n  max-width: 2rem;\n}\n\n.textWithIcon[_ngcontent-%COMP%] {\n  vertical-align: super;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBRUEsOENBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkNBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFDRTtFQVBGO0lBUUksWUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBRkU7RUFIRjtJQUlJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBS0Y7QUFDRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSw2Q0FBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7QUFLRjs7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQUlGOztBQUhFO0VBUEY7SUFRSSx1QkFBQTtFQU1GO0FBQ0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSEE7Ozs7RUFJRSw2QkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUhBO0VBQ0UscUJBQUE7QUFNRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kL2Jha2VyeS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuLmNvbnRhaW5lci1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDkwcmVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vLyBTVFlMRSBIRUFERVJcclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYXBwLWxpZ2h0LWdyZXkpO1xyXG4gIGhlaWdodDogMTRyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGJsYWNrO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICB9XHJcbn1cclxuLmxvZ28taGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG5cclxuLm1vYmlsZU1lbnVCdXR0b24ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hcHAtbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5sb2dvdXRIZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG59XHJcblxyXG4vLyBzdHlsZSBmb290ZXJcclxuLmZvb3RlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFwcC1icm93bik7XHJcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAtMTFyZW07XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFwcC1saWdodC1ncmV5KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMjYuNnJlbTtcclxuICB9XHJcbn1cclxuXHJcbjpob3ZlciAubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hOmxpbmssXHJcbmE6dmlzaXRlZCxcclxuYTphY3RpdmUsXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hcHAtYnJvd24pO1xyXG59XHJcblxyXG4uaWNvbkZiIHtcclxuICBtYXgtd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi50ZXh0V2l0aEljb24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/login-modal/login-modal.component */
      "tp0f");
      /* harmony import */


      var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/login-page/login-page.component */
      "Fvy/");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./services/auth.service */
      "N/25");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_login_modal_login_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalComponent"], _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/extra/fr */
      "On8d");
      /* harmony import */


      var _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      "Hfs6");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/analytics */
      "h+eY");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "bSwM");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./../environments/environment */
      "AytR");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./auth/auth.module */
      "Yj9t");
      /* harmony import */


      var _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./core/components/info-modal/info-modal.component */
      "E/54");
      /* harmony import */


      var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./core/pages/mentions-legales/mentions-legales.component */
      "DB88");
      /* harmony import */


      var _order_order_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./order/order.module */
      "+p+5");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_3___default.a, 'fr-FR', _angular_common_locales_extra_fr__WEBPACK_IMPORTED_MODULE_2___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
          useValue: 'fr-FR'
        }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__["MentionsLegalesComponent"], _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["InfoModalComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"], _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_23__["MentionsLegalesComponent"], _core_components_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_22__["InfoModalComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalyticsModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _order_order_module__WEBPACK_IMPORTED_MODULE_24__["OrderModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_21__["AuthModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"],
              useValue: 'fr-FR'
            }, _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "dHby":
    /*!**********************************************************************!*\
      !*** ./src/app/order/services/mondayStartWeekDateAdapter.service.ts ***!
      \**********************************************************************/

    /*! exports provided: MondayStartWeekDateAdapter */

    /***/
    function dHby(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MondayStartWeekDateAdapter", function () {
        return MondayStartWeekDateAdapter;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      var MondayStartWeekDateAdapter = /*#__PURE__*/function (_angular_material_cor) {
        _inherits(MondayStartWeekDateAdapter, _angular_material_cor);

        var _super = _createSuper(MondayStartWeekDateAdapter);

        function MondayStartWeekDateAdapter() {
          _classCallCheck(this, MondayStartWeekDateAdapter);

          return _super.apply(this, arguments);
        }

        _createClass(MondayStartWeekDateAdapter, [{
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            return 1;
          }
        }]);

        return MondayStartWeekDateAdapter;
      }(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["NativeDateAdapter"]);

      MondayStartWeekDateAdapter.ɵfac = function MondayStartWeekDateAdapter_Factory(t) {
        return ɵMondayStartWeekDateAdapter_BaseFactory(t || MondayStartWeekDateAdapter);
      };

      MondayStartWeekDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MondayStartWeekDateAdapter,
        factory: MondayStartWeekDateAdapter.ɵfac
      });

      var ɵMondayStartWeekDateAdapter_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MondayStartWeekDateAdapter);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MondayStartWeekDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nIH7":
    /*!******************************************************!*\
      !*** ./src/app/order/services/order-summary.pipe.ts ***!
      \******************************************************/

    /*! exports provided: OrderSummaryPipe */

    /***/
    function nIH7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderSummaryPipe", function () {
        return OrderSummaryPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OrderSummaryPipe = /*#__PURE__*/function () {
        function OrderSummaryPipe() {
          _classCallCheck(this, OrderSummaryPipe);
        }

        _createClass(OrderSummaryPipe, [{
          key: "transform",
          value: function transform(obj) {
            var tmpProducts = obj.products.filter(function (el) {
              return el[1] && el[1] !== null && el[1] > 0;
            });
            var tmpSliced = obj.sliced.filter(function (el) {
              return el[1] !== null;
            });
            var tmpComments = obj.comments.filter(function (el) {
              return el[1] && el[1] !== null && el[1].length > 0;
            });
            var res = [];
            tmpProducts.forEach(function (prodEl) {
              res.push("- ".concat(prodEl[0], " : ").concat(prodEl[1]));
              var sliced = tmpSliced.find(function (sliceEl) {
                return sliceEl[0] === prodEl[0];
              });

              if (sliced && sliced[1]) {
                res[res.length - 1] = res[res.length - 1].concat(" - Tranch\xE9");
              }

              var comment = tmpComments.find(function (commentEl) {
                return commentEl[0] === prodEl[0];
              });

              if (comment) {
                res[res.length - 1] = res[res.length - 1].concat("<br>&nbsp;&nbsp;Commentaire : ".concat(comment[1]));
              }
            });
            return res;
          }
        }]);

        return OrderSummaryPipe;
      }();

      OrderSummaryPipe.ɵfac = function OrderSummaryPipe_Factory(t) {
        return new (t || OrderSummaryPipe)();
      };

      OrderSummaryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "summaryPipe",
        type: OrderSummaryPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderSummaryPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'summaryPipe'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "p6Hq":
    /*!*****************************************************************************************!*\
      !*** ./src/app/order/components/form-validated-modal/form-validated-modal.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: FormValidatedModalComponent */

    /***/
    function p6Hq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormValidatedModalComponent", function () {
        return FormValidatedModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var FormValidatedModalComponent = /*#__PURE__*/function () {
        function FormValidatedModalComponent() {
          _classCallCheck(this, FormValidatedModalComponent);
        }

        _createClass(FormValidatedModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FormValidatedModalComponent;
      }();

      FormValidatedModalComponent.ɵfac = function FormValidatedModalComponent_Factory(t) {
        return new (t || FormValidatedModalComponent)();
      };

      FormValidatedModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormValidatedModalComponent,
        selectors: [["app-form-validated"]],
        decls: 14,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["fxLayout", "column wrap"], ["fxFlexLayout", "row wrap", "fxLayoutAlign", "flex-end center"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["mat-button", "", 3, "mat-dialog-close"]],
        template: function FormValidatedModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Votre commande a \xE9t\xE9 envoy\xE9e.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " La boulangerie M vous remercie de votre commande. En cas d'erreur ou de questions, n'h\xE9sitez pas \xE0 nous contacter au 05 46 01 09 72. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " En esp\xE9rant vous revoir tr\xE8s prochainement et que votre commande vous satifera pleinement. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "L'\xE9quipe M");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-dialog-actions", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fermer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvY29tcG9uZW50cy9mb3JtLXZhbGlkYXRlZC1tb2RhbC9mb3JtLXZhbGlkYXRlZC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9jb21wb25lbnRzL2Zvcm0tdmFsaWRhdGVkLW1vZGFsL2Zvcm0tdmFsaWRhdGVkLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidatedModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-form-validated',
            templateUrl: './form-validated-modal.component.html',
            styleUrls: ['./form-validated-modal.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "tp0f":
    /*!**********************************************************************!*\
      !*** ./src/app/auth/components/login-modal/login-modal.component.ts ***!
      \**********************************************************************/

    /*! exports provided: LoginModalComponent */

    /***/
    function tp0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginModalComponent", function () {
        return LoginModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @app/auth/services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function LoginModalComponent_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "E-mail obligatoire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginModalComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mot de passe obligatoire");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginModalComponent_p_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.loginErrorMessage, " ");
        }
      }

      var LoginModalComponent = /*#__PURE__*/function () {
        function LoginModalComponent(fb, authService, router, dialog) {
          _classCallCheck(this, LoginModalComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.dialog = dialog;
          this.loginErrorMessage = '';
          this.loginForm = this.fb.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }

        _createClass(LoginModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login() {
            var _this7 = this;

            if (this.loginForm.valid) {
              this.authService.login(this.loginForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function () {
                _this7.router.navigate(['admin']);

                _this7.dialog.closeAll();
              }, function (err) {
                _this7.loginErrorMessage = err.message;
              });
            }
          }
        }]);

        return LoginModalComponent;
      }();

      LoginModalComponent.ɵfac = function LoginModalComponent_Factory(t) {
        return new (t || LoginModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
      };

      LoginModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginModalComponent,
        selectors: [["app-login-modal"]],
        decls: 23,
        vars: 4,
        consts: [["matDialogTitle", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "fxLayoutAlign", "center center"], [3, "formGroup", "ngSubmit"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center"], ["fxFlex", "87", "appearance", "outline"], ["matInput", "", "type", "text", "placeholder", "Ex: john.doe@gmail.com", "formControlName", "email", "required", ""], [4, "ngIf"], ["matInput", "", "type", "password", "placeholder", "Ex: MySecretPassword", "formControlName", "password", "required", ""], ["fxFlex", "87", "fxLayoutAlign", "center center", "class", "errorMessage", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "2", "fxFlexOrder.gt-xs", "1", "mat-raised-button", "", "type", "button", "mat-dialog-close", "", 3, "click"], ["fxFlex", "40", "fxFlex.lt-sm", "87", "fxFlexOrder.lt-sm", "1", "fxFlexOrder.gt-xs", "2", "mat-raised-button", "", "type", "submit"], ["fxFlex", "87", "fxLayoutAlign", "center center", 1, "errorMessage"]],
        template: function LoginModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connexion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginModalComponent_Template_form_ngSubmit_3_listener() {
              return ctx.login();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginModalComponent_Template_button_click_19_listener() {
              return ctx.router.navigate([""]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Annuler ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Se connecter ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexOrderDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
        styles: [".errorMessage[_ngcontent-%COMP%] {\n  color: crimson;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luLW1vZGFsL2xvZ2luLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yTWVzc2FnZSB7XHJcbiAgY29sb3I6IGNyaW1zb247XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login-modal',
            templateUrl: './login-modal.component.html',
            styleUrls: ['./login-modal.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth/pages/login-page/login-page.component */
      "Fvy/");
      /* harmony import */


      var _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/pages/mentions-legales/mentions-legales.component */
      "DB88");
      /* harmony import */


      var _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order/pages/order-form/order-form.component */
      "H70G");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectUnauthorizedTo"])(['connexion']);
      };

      var redirectAlreadyLoggedIn = function redirectAlreadyLoggedIn() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["redirectLoggedInTo"])(['admin']);
      };

      var routes = [{
        path: '',
        redirectTo: 'commande',
        pathMatch: 'full'
      }, {
        path: 'commande',
        component: _order_pages_order_form_order_form_component__WEBPACK_IMPORTED_MODULE_5__["OrderFormComponent"]
      }, {
        path: 'mentions-legales',
        component: _core_pages_mentions_legales_mentions_legales_component__WEBPACK_IMPORTED_MODULE_4__["MentionsLegalesComponent"]
      }, Object.assign({
        path: 'connexion',
        component: _auth_pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectAlreadyLoggedIn)), Object.assign({
        path: 'admin',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | admin-admin-module */
          "admin-admin-module").then(__webpack_require__.bind(null,
          /*! ./admin/admin.module */
          "jkDv")).then(function (m) {
            return m.AdminModule;
          });
        }
      }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["canActivate"])(redirectUnauthorizedToLogin)), // { path: '404', component: PageNotFoundPage },
      {
        path: '**',
        redirectTo: 'commande'
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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "yHTb":
    /*!***********************************!*\
      !*** ./src/app/models/product.ts ***!
      \***********************************/

    /*! exports provided: ProductUnit, ProductCategory */

    /***/
    function yHTb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductUnit", function () {
        return ProductUnit;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductCategory", function () {
        return ProductCategory;
      });

      var ProductUnit;

      (function (ProductUnit) {
        ProductUnit["KG"] = "kilo";
        ProductUnit["UNIT"] = "unit\xE9";
      })(ProductUnit || (ProductUnit = {}));

      var ProductCategory;

      (function (ProductCategory) {
        ProductCategory["BAGUETTE"] = "Baguettes";
        ProductCategory["SANDWICH"] = "Pains sandwichs";
        ProductCategory["INDIVIDUEL"] = "Pains individuels";
        ProductCategory["COUPE"] = "Pains \xE0 la coupe";
        ProductCategory["PIECE"] = "Pains \xE0 la pi\xE8ce";
        ProductCategory["VIENNOISERIE"] = "Viennoiseries";
        ProductCategory["MIE"] = "Pains de mie";
        ProductCategory["GATEAU"] = "G\xE2teaux de voyage";
        ProductCategory["PATES"] = "P\xE2tes";
      })(ProductCategory || (ProductCategory = {}));
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map