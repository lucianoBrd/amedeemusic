(self["webpackChunkamedeemusic"] = self["webpackChunkamedeemusic"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layouts_music_music_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/music/music.component */ 37932);
/* harmony import */ var _elements_elements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/elements.component */ 44541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _layouts_music_music_component__WEBPACK_IMPORTED_MODULE_0__.MusicComponent
}, {
  path: '',
  component: _elements_elements_component__WEBPACK_IMPORTED_MODULE_1__.ElementsComponent,
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./elements/elements.module */ 17764)).then(m => m.ElementsModule),
  data: {}
}, {
  path: '**',
  redirectTo: '/404',
  pathMatch: 'full'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: "enabled",
    scrollPositionRestoration: "enabled"
  }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/service/customizer.service */ 1316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _shared_service_meta_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service/meta.service */ 81930);
/* harmony import */ var _shared_service_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/service/text.service */ 44096);
/* harmony import */ var _shared_data_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/data/config */ 79034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_data_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/data/cookie */ 47719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookieconsent */ 55045);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 90605);
















function AppComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_4_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.customizeLanguage("fr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_5_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.customizeLanguage("en"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 4)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "en");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function AppComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_6_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.customizeLayoutVersion("light"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.language.light);
  }
}
function AppComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AppComponent_li_7_Template_li_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.customizeLayoutVersion("dark"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 7)(2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.language.dark);
  }
}
class AppComponent {
  constructor(customize, router, metaService, _document, cookieService) {
    this.customize = customize;
    this.router = router;
    this.metaService = metaService;
    this._document = _document;
    this.cookieService = cookieService;
    this.layoutType = 'light';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.language = _shared_service_text_service__WEBPACK_IMPORTED_MODULE_2__.TextService.getTextByLocal();
    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.home + ',' + this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);
    let favIcon = document.querySelector('#favIcon');
    favIcon.href = _shared_data_config__WEBPACK_IMPORTED_MODULE_3__.ConfigDB.data.apiServer + _shared_data_config__WEBPACK_IMPORTED_MODULE_3__.ConfigDB.data.apiServerLogoImages + 'favicon.ico';
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
        this.url = event.url;
      }
    });
    this.cookieService.popupClose$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
      localStorage.setItem(_shared_data_cookie__WEBPACK_IMPORTED_MODULE_4__.Cookie.coockieDismiss, _shared_data_cookie__WEBPACK_IMPORTED_MODULE_4__.Cookie.coockieDismissed);
    });
  }
  ngOnInit() {}
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  customizeLayoutVersion(val) {
    this.customize.setLayoutVersion(val);
    this.layoutType = val;
  }
  customizeLayoutType(val) {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }
  customizeLanguage(val) {
    if (val === 'en' || val === 'fr') {
      this.customize.setLanguage(val);
      /* Refresh page */
      window.location.reload();
    }
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_0__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_1__.MetaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_11__.NgcCookieConsentService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 8,
  vars: 4,
  consts: [[1, "theme-pannel-main"], [3, "click", 4, "ngIf"], ["class", "sidebar-btn dark-light-btn", 3, "click", 4, "ngIf"], [3, "click"], ["href", "javascript:void(0)", 1, "btn", "setting_btn"], [1, "rtl-txt"], [1, "sidebar-btn", "dark-light-btn", 3, "click"], ["href", "javascript:void(0)", 1, "dark-light"], [1, "theme-layout-version"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 0)(3, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AppComponent_li_4_Template, 4, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AppComponent_li_5_Template, 4, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AppComponent_li_6_Template, 4, 1, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AppComponent_li_7_Template, 4, 1, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customize.data.settings.languageCode == "en");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customize.data.settings.languageCode == "fr");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customize.data.settings.layout_version == "dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.customize.data.settings.layout_version == "light");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-recaptcha */ 99191);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _elements_elements_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/elements.module */ 17764);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layouts.module */ 52372);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/locales/fr */ 58384);
/* harmony import */ var _shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/service/language.service */ 41552);
/* harmony import */ var _shared_service_jsonDateInterceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/service/jsonDateInterceptor.service */ 42808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-cookieconsent */ 55045);
/* harmony import */ var _shared_data_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/data/config */ 79034);
/* harmony import */ var _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/service/alert.service */ 96506);
/* harmony import */ var _shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/service/customizer.service */ 1316);
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/service/data.service */ 80774);
/* harmony import */ var _shared_service_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/service/form.service */ 33886);
/* harmony import */ var _shared_service_meta_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/service/meta.service */ 81930);
/* harmony import */ var _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/service/nav.service */ 21442);
/* harmony import */ var _shared_service_politic_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/service/politic.service */ 27534);
/* harmony import */ var _shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/service/sidebar.service */ 61545);
/* harmony import */ var _shared_service_social_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/service/social.service */ 98147);
/* harmony import */ var _shared_service_text_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/service/text.service */ 44096);
/* harmony import */ var _shared_service_artist_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/service/artist.service */ 99588);
/* harmony import */ var _shared_data_cookie__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/data/cookie */ 47719);






































(0,_angular_common__WEBPACK_IMPORTED_MODULE_20__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_21__["default"]);
const language = _shared_service_text_service__WEBPACK_IMPORTED_MODULE_17__.TextService.getTextByLocal();
const cookieConfig = {
  cookie: {
    domain: _shared_data_config__WEBPACK_IMPORTED_MODULE_7__.ConfigDB.domain
  },
  position: "bottom",
  theme: "edgeless",
  palette: {
    popup: {
      background: "#131313",
      text: "#d1d1d1",
      link: "#ffffff"
    },
    button: {
      background: "#591e1e",
      text: "#d1d1d1",
      border: "transparent"
    }
  },
  type: "info",
  content: {
    message: language.cookieMessage,
    dismiss: language.cookieDismiss,
    deny: language.cookieDeny,
    link: language.learnMore,
    href: _shared_data_config__WEBPACK_IMPORTED_MODULE_7__.ConfigDB.data.appServer + '/privacy-policy',
    policy: language.cookiePolicy,
    header: language.cookieHeader,
    allow: language.cookieAllow
  },
  autoOpen: !(localStorage.getItem(_shared_data_cookie__WEBPACK_IMPORTED_MODULE_19__.Cookie.coockieDismiss) === _shared_data_cookie__WEBPACK_IMPORTED_MODULE_19__.Cookie.coockieDismissed)
};
ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaComponent.prototype.ngOnDestroy = function () {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
  providers: [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_10__.DataService, _shared_service_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService, _shared_service_artist_service__WEBPACK_IMPORTED_MODULE_18__.ArtistService, _shared_service_customizer_service__WEBPACK_IMPORTED_MODULE_9__.CustomizerService, _shared_service_form_service__WEBPACK_IMPORTED_MODULE_11__.FormService, _shared_service_jsonDateInterceptor_service__WEBPACK_IMPORTED_MODULE_6__.JsonDateInterceptorService, _shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService, _shared_service_meta_service__WEBPACK_IMPORTED_MODULE_12__.MetaService, _shared_service_nav_service__WEBPACK_IMPORTED_MODULE_13__.NavService, _shared_service_politic_service__WEBPACK_IMPORTED_MODULE_14__.PoliticService, _shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_15__.SidebarService, _shared_service_social_service__WEBPACK_IMPORTED_MODULE_16__.SocialService, _shared_service_text_service__WEBPACK_IMPORTED_MODULE_17__.TextService, _shared_data_config__WEBPACK_IMPORTED_MODULE_7__.ConfigDB, _shared_data_cookie__WEBPACK_IMPORTED_MODULE_19__.Cookie, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_23__.LOCALE_ID,
    useValue: _shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService.getLanguage()
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
    useClass: _shared_service_jsonDateInterceptor_service__WEBPACK_IMPORTED_MODULE_6__.JsonDateInterceptorService,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule.withServerTransition({
    appId: 'serverApp'
  }), _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _elements_elements_module__WEBPACK_IMPORTED_MODULE_2__.ElementsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaFormsModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_29__.NgcCookieConsentModule.forRoot(cookieConfig), ngx_toastr__WEBPACK_IMPORTED_MODULE_30__.ToastrModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routes, {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_27__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, _elements_elements_module__WEBPACK_IMPORTED_MODULE_2__.ElementsModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_22__.RecaptchaFormsModule, ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_29__.NgcCookieConsentModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_30__.ToastrModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule]
  });
})();

/***/ }),

/***/ 9208:
/*!*****************************************************!*\
  !*** ./src/app/elements/elements-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsRoutingModule": () => (/* binding */ ElementsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-contact/page-contact.component */ 62728);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 38171);
/* harmony import */ var _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-privacy-policy/page-privacy-policy.component */ 8181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






const routes = [{
  path: '',
  children: [{
    path: 'contact',
    component: _page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_0__.PageContactComponent,
    data: {}
  }, {
    path: 'privacy-policy',
    component: _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_2__.PagePrivacyPolicyComponent,
    data: {}
  }, {
    path: '404',
    component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent,
    data: {}
  }]
}];
class ElementsRoutingModule {}
ElementsRoutingModule.ɵfac = function ElementsRoutingModule_Factory(t) {
  return new (t || ElementsRoutingModule)();
};
ElementsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ElementsRoutingModule
});
ElementsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ElementsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 44541:
/*!************************************************!*\
  !*** ./src/app/elements/elements.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsComponent": () => (/* binding */ ElementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/copyright/copyright.component */ 71450);
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/nav/nav.component */ 63749);





class ElementsComponent {
  constructor(router) {
    this.router = router;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.url = event.url;
      }
    });
  }
  ngOnInit() {}
}
ElementsComponent.ɵfac = function ElementsComponent_Factory(t) {
  return new (t || ElementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ElementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ElementsComponent,
  selectors: [["app-elements"]],
  decls: 4,
  vars: 0,
  template: function ElementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-nav")(2, "router-outlet")(3, "app-copyright");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _shared_components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_0__.CopyrightComponent, _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 17764:
/*!*********************************************!*\
  !*** ./src/app/elements/elements.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsModule": () => (/* binding */ ElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _elements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements-routing.module */ 9208);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var _elements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements.component */ 44541);
/* harmony import */ var _page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-contact/page-contact.component */ 62728);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/layouts.module */ 52372);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 38171);
/* harmony import */ var _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-privacy-policy/page-privacy-policy.component */ 8181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-masonry */ 19765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);














class ElementsModule {}
ElementsModule.ɵfac = function ElementsModule_Factory(t) {
  return new (t || ElementsModule)();
};
ElementsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ElementsModule
});
ElementsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.ElementsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__.LayoutsModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_13__.NgxMasonryModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ElementsModule, {
    declarations: [_elements_component__WEBPACK_IMPORTED_MODULE_3__.ElementsComponent, _page_contact_page_contact_component__WEBPACK_IMPORTED_MODULE_4__.PageContactComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__.PageNotFoundComponent, _page_privacy_policy_page_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__.PagePrivacyPolicyComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _elements_routing_module__WEBPACK_IMPORTED_MODULE_0__.ElementsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__.CarouselModule, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_5__.LayoutsModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_13__.NgxMasonryModule]
  });
})();

/***/ }),

/***/ 62728:
/*!*****************************************************************!*\
  !*** ./src/app/elements/page-contact/page-contact.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactComponent": () => (/* binding */ PageContactComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/meta.service */ 81930);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/contact/contact.component */ 56189);










const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class PageContactComponent {
  constructor(metaService, artistService) {
    this.metaService = metaService;
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__.TextService.getTextByLocal();
  }
  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.contact);
    this.metaService.setKeywords(this.language.contact + ',' + this.language.contactDesc);
    this.metaService.setDescription(this.language.contactDesc);
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
PageContactComponent.ɵfac = function PageContactComponent_Factory(t) {
  return new (t || PageContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
PageContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: PageContactComponent,
  selectors: [["app-page-contact"]],
  decls: 2,
  vars: 3,
  consts: [[1, "music", "bg-footer", 3, "ngStyle"]],
  template: function PageContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, (ctx.artist == null ? null : ctx.artist.footer) ? "url(" + ctx.artistImagePath + ctx.artist.footer + ")" : ""));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 38171:
/*!*********************************************************************!*\
  !*** ./src/app/elements/page-not-found/page-not-found.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/meta.service */ 81930);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);






const _c0 = function () {
  return {
    "background-image": "url(assets/images/404/overlay_stars.svg)"
  };
};
const _c1 = function () {
  return ["/"];
};
class PageNotFoundComponent {
  constructor(metaService) {
    this.metaService = metaService;
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService.getTextByLocal();
  }
  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.notFound);
    this.metaService.setDescription(this.language.notFoundDesc);
  }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
  return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_0__.MetaService));
};
PageNotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PageNotFoundComponent,
  selectors: [["app-page-not-found"]],
  decls: 28,
  vars: 8,
  consts: [[1, "bg-purple"], [1, "section-404"], [1, "stars", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-8", "offset-md-2", "col-12"], [1, "central-body"], [1, "text-inner"], [1, "sub-text", "text-white"], [1, "text-404", "text-white", "text-center"], [1, "btn", "btn-default", "primary-btn", "transparent", "m-t-20", 3, "routerLink"], [1, "objects"], ["src", "assets/images/404/rocket.svg", 1, "object_rocket"], [1, "earth-moon"], ["src", "assets/images/404/earth.svg", 1, "object_earth"], ["src", "assets/images/404/moon.svg", 1, "object_moon"], [1, "box_astronaut"], ["src", "assets/images/404/astronaut.svg", 1, "object_astronaut"], [1, "glowing_stars"], [1, "star"]],
  template: function PageNotFoundComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 14)(19, "img", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 19)(24, "div", 19)(25, "div", 19)(26, "div", 19)(27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.language.notFound);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.language.notFoundTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.language.notFoundDesc, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.language.goHome, " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8181:
/*!*******************************************************************************!*\
  !*** ./src/app/elements/page-privacy-policy/page-privacy-policy.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagePrivacyPolicyComponent": () => (/* binding */ PagePrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/meta.service */ 81930);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var src_app_shared_service_politic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/politic.service */ 27534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/loader-bis/loader-bis.component */ 86916);









function PagePrivacyPolicyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.language.privacyPolicy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.politic.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r0.politic.document, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function PagePrivacyPolicyComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-loader-bis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function PagePrivacyPolicyComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PagePrivacyPolicyComponent_div_5_div_4_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.language.privacyPolicy);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.politic === undefined);
  }
}
class PagePrivacyPolicyComponent {
  constructor(metaService, politicService) {
    this.metaService = metaService;
    this.politicService = politicService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService.getTextByLocal();
  }
  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.privacyPolicy);
    this.metaService.setKeywords(this.language.privacyPolicy);
    this.metaService.setDescription(this.language.privacyPolicy);
    this.politicService.loadedPolitic$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(data => {
      this.politic = data;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
PagePrivacyPolicyComponent.ɵfac = function PagePrivacyPolicyComponent_Factory(t) {
  return new (t || PagePrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_0__.MetaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_service_politic_service__WEBPACK_IMPORTED_MODULE_2__.PoliticService));
};
PagePrivacyPolicyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PagePrivacyPolicyComponent,
  selectors: [["app-page-privacy-policy"]],
  decls: 6,
  vars: 2,
  consts: [[1, "blog-sec", "blog-sidebar", "single_blog_item", "privacy-policy-section"], [1, "container"], [1, "row"], [1, "col-12"], ["class", "blog-text m-t-20", 4, "ngIf"], [1, "blog-text", "m-t-20"], [1, "blog-head"], [1, "blog-divider"], [1, "blog-description", 3, "innerHTML"], ["class", "blog-description mt-5", 4, "ngIf"], [1, "blog-description", "mt-5"]],
  template: function PagePrivacyPolicyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, PagePrivacyPolicyComponent_div_4_Template, 7, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, PagePrivacyPolicyComponent_div_5_Template, 5, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.politic);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.politic);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_3__.LoaderBisComponent],
  styles: [".privacy-policy-section[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWxlbWVudHMvcGFnZS1wcml2YWN5LXBvbGljeS9wYWdlLXByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5LXBvbGljeS1zZWN0aW9uIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 34875:
/*!***************************************************!*\
  !*** ./src/app/layouts/layouts-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsRoutingModule": () => (/* binding */ LayoutsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./music/music.component */ 37932);
/* harmony import */ var _shared_data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);





const routes = [{
  path: '',
  component: _music_music_component__WEBPACK_IMPORTED_MODULE_0__.MusicComponent,
  data: {
    title: _shared_data_config__WEBPACK_IMPORTED_MODULE_1__.ConfigDB.data.appName
  }
}];
class LayoutsRoutingModule {}
LayoutsRoutingModule.ɵfac = function LayoutsRoutingModule_Factory(t) {
  return new (t || LayoutsRoutingModule)();
};
LayoutsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: LayoutsRoutingModule
});
LayoutsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 52372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts-routing.module */ 34875);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-count-to */ 97321);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-masonry */ 19765);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ 8243);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-gallery */ 15854);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-gallery/lightbox */ 35115);
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music/music.component */ 37932);
/* harmony import */ var _music_music_header_music_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music/music-header/music-header.component */ 2834);
/* harmony import */ var _music_music_event_music_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music/music-event/music-event.component */ 53995);
/* harmony import */ var _music_music_project_music_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music/music-project/music-project.component */ 23803);
/* harmony import */ var _music_music_sidebar_music_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music/music-sidebar/music-sidebar.component */ 38930);
/* harmony import */ var _music_music_social_music_social_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./music/music-social/music-social.component */ 36862);
/* harmony import */ var _music_music_gallery_music_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music/music-gallery/music-gallery.component */ 90337);
/* harmony import */ var _music_music_video_music_video_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music/music-video/music-video.component */ 90531);
/* harmony import */ var _music_music_booking_music_booking_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./music/music-booking/music-booking.component */ 51603);
/* harmony import */ var _music_music_blog_music_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music/music-blog/music-blog.component */ 34003);
/* harmony import */ var _music_music_subscribe_music_subscribe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./music/music-subscribe/music-subscribe.component */ 60682);
/* harmony import */ var _music_music_testimonial_music_testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./music/music-testimonial/music-testimonial.component */ 67254);
/* harmony import */ var _music_music_footer_music_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./music/music-footer/music-footer.component */ 3589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 22560);









// import { NgxPayPalModule } from 'ngx-paypal';



// Music Layout














class LayoutsModule {}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) {
  return new (t || LayoutsModule)();
};
LayoutsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: LayoutsModule
});
LayoutsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_19__.SwiperModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, ng_gallery__WEBPACK_IMPORTED_MODULE_22__.GalleryModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ng5_slider__WEBPACK_IMPORTED_MODULE_3__.Ng5SliderModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_24__.LightboxModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_25__.NgxMasonryModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](LayoutsModule, {
    declarations: [_music_music_component__WEBPACK_IMPORTED_MODULE_4__.MusicComponent, _music_music_header_music_header_component__WEBPACK_IMPORTED_MODULE_5__.MusicHeaderComponent, _music_music_event_music_event_component__WEBPACK_IMPORTED_MODULE_6__.MusicEventComponent, _music_music_project_music_project_component__WEBPACK_IMPORTED_MODULE_7__.MusicProjectComponent, _music_music_sidebar_music_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.MusicSidebarComponent, _music_music_social_music_social_component__WEBPACK_IMPORTED_MODULE_9__.MusicSocialComponent, _music_music_gallery_music_gallery_component__WEBPACK_IMPORTED_MODULE_10__.MusicGalleryComponent, _music_music_video_music_video_component__WEBPACK_IMPORTED_MODULE_11__.MusicVideoComponent, _music_music_booking_music_booking_component__WEBPACK_IMPORTED_MODULE_12__.MusicBookingComponent, _music_music_blog_music_blog_component__WEBPACK_IMPORTED_MODULE_13__.MusicBlogComponent, _music_music_subscribe_music_subscribe_component__WEBPACK_IMPORTED_MODULE_14__.MusicSubscribeComponent, _music_music_testimonial_music_testimonial_component__WEBPACK_IMPORTED_MODULE_15__.MusicTestimonialComponent, _music_music_footer_music_footer_component__WEBPACK_IMPORTED_MODULE_16__.MusicFooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _layouts_routing_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsRoutingModule, swiper_angular__WEBPACK_IMPORTED_MODULE_19__.SwiperModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, ng_gallery__WEBPACK_IMPORTED_MODULE_22__.GalleryModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, angular_count_to__WEBPACK_IMPORTED_MODULE_2__.CountToModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, ng5_slider__WEBPACK_IMPORTED_MODULE_3__.Ng5SliderModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_24__.LightboxModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_25__.NgxMasonryModule]
  });
})();

/***/ }),

/***/ 34003:
/*!******************************************************************!*\
  !*** ./src/app/layouts/music/music-blog/music-blog.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicBlogComponent": () => (/* binding */ MusicBlogComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);













const _c0 = function (a1) {
  return ["/blog", a1];
};
function MusicBlogComponent_section_0_ng_container_12_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 22)(14, "ul")(15, "li")(16, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "li")(21, "a", 23)(22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "li")(25, "a", 23)(26, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 28)(29, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const blog_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r6.blogImagePath + blog_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", blog_r3.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 14, blog_r3.date, "d MMMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](blog_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r6.plainText(blog_r3.content), "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate3"]("href", "https://www.linkedin.com/shareArticle?url=", ctx_r6.blogPage + "/" + blog_r3.slug, "&title=", blog_r3.title, "&summary=", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](17, 17, blog_r3.content, 0, 30), "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "https://www.facebook.com/sharer.php?u=", ctx_r6.blogPage + "/" + blog_r3.slug, "&t=", blog_r3.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("href", "https://twitter.com/share?url=", ctx_r6.blogPage + "/" + blog_r3.slug, "&text=", blog_r3.title, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](21, _c0, blog_r3.slug));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.language.readMore, " ");
  }
}
function MusicBlogComponent_section_0_ng_container_12_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicBlogComponent_section_0_ng_container_12_1_ng_template_0_Template, 32, 23, "ng-template", 12);
  }
}
function MusicBlogComponent_section_0_ng_container_12_2_ng_template_0_Template(rf, ctx) {}
function MusicBlogComponent_section_0_ng_container_12_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicBlogComponent_section_0_ng_container_12_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
}
function MusicBlogComponent_section_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicBlogComponent_section_0_ng_container_12_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MusicBlogComponent_section_0_ng_container_12_2_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const blog_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", blog_r3.id != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", blog_r3.id == -1);
  }
}
const _c1 = function (a0) {
  return {
    "background-image": a0
  };
};
function MusicBlogComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "owl-carousel-o", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MusicBlogComponent_section_0_ng_container_12_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, (ctx_r0.artist == null ? null : ctx_r0.artist.blog) ? "url(" + ctx_r0.artistImagePath + ctx_r0.artist.blog + ")" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.language.blog);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r0.blogCarouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.blogs);
  }
}
function MusicBlogComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, (ctx_r1.artist == null ? null : ctx_r1.artist.blog) ? "url(" + ctx_r1.artistImagePath + ctx_r1.artist.blog + ")" : ""));
  }
}
class MusicBlogComponent {
  constructor(dataService, artistService) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.blogImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'blog/';
    this.blogPage = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + '/api/blogs';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.blogCarouselOptions = {
      items: 3,
      margin: 60,
      nav: false,
      dots: false,
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2,
          margin: 10
        },
        991: {
          items: 2,
          margin: 10
        },
        992: {
          items: 3,
          margin: 10
        },
        1200: {
          margin: 30
        }
      }
    };
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/blogs/lasts?local.local=' + src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService.getLanguageCodeOnly()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      let blogs = data['hydra:member'];
      if (blogs && blogs.length > 0) {
        let emptyBlog = {
          id: -1,
          image: undefined,
          date: undefined,
          title: undefined,
          slug: undefined,
          content: undefined,
          local: undefined
        };
        if (blogs.length == 1) {
          blogs.unshift(emptyBlog);
          blogs.push(emptyBlog);
        } else if (blogs.length == 2) {
          blogs.push(emptyBlog);
        }
      }
      this.blogs = blogs;
    }, error => {
      this.blogs = [];
    });
  }
  plainText(content) {
    return content.replace(/<[^>]*>/g, '').slice(0, 30);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicBlogComponent.ɵfac = function MusicBlogComponent_Factory(t) {
  return new (t || MusicBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
MusicBlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MusicBlogComponent,
  selectors: [["app-music-blog"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music blog bg-album", 3, "ngStyle", 4, "ngIf"], [1, "music", "blog", "bg-album", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], [1, "col-12"], [3, "options"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["carouselSlide", "", "class", "item"], [1, "img-container"], [1, "img-fluid", 3, "src", "alt"], [1, "overlay"], [1, "blog-info", "set-abs", "bottom-0"], [1, "center-text", "flex", "m-b-25"], ["aria-hidden", "true", 1, "fa-regular", "fa-calendar", "m-r-5"], [1, "font-blog"], [1, "blog-text"], [1, "small-font"], [1, "social-list"], ["target", "_blank", 3, "href"], [1, "center-content"], ["aria-hidden", "true", 1, "fa-brands", "fa-linkedin-in", "center-content"], ["aria-hidden", "true", 1, "fa-brands", "fa-facebook-f", "center-content"], ["aria-hidden", "true", 1, "fa-brands", "fa-twitter", "center-content"], [1, "mt-2"], [1, "btn", "btn-default", "btn-gradient", "m-0-auto", 3, "routerLink"], ["aria-hidden", "true", 1, "fa-solid", "fa-book", "mr-1"]],
  template: function MusicBlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicBlogComponent_section_0_Template, 13, 6, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicBlogComponent_section_1_Template, 5, 3, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.blogs == null ? null : ctx.blogs.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.blogs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselSlideDirective, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisRedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 51603:
/*!************************************************************************!*\
  !*** ./src/app/layouts/music/music-booking/music-booking.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicBookingComponent": () => (/* binding */ MusicBookingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



const _c0 = function () {
  return {
    "background-image": "url(assets/images/music/gallery/bg.jpg)"
  };
};
class MusicBookingComponent {
  constructor() {}
  ngOnInit() {}
}
MusicBookingComponent.ɵfac = function MusicBookingComponent_Factory(t) {
  return new (t || MusicBookingComponent)();
};
MusicBookingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MusicBookingComponent,
  selectors: [["app-music-booking"]],
  decls: 39,
  vars: 2,
  consts: [[1, "music", "booking", "bg-gallery", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], [1, "title", "title3"], [1, "text-white"], [1, "col-12"], [1, "form-inline", "m-b-50"], [1, "col"], [1, "form-group"], ["type", "text", "placeholder", "FIRST NAME"], ["type", "text", "placeholder", "LAST NAME"], ["type", "text", "placeholder", "EMAIL"], ["type", "text", "placeholder", "MOBILE"], ["type", "text", "placeholder", "COMPANY NAME"], [1, "text-center"], [1, "btn", "btn-default", "btn-gradient", "m-0-auto"]],
  template: function MusicBookingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "event booking");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "we are wait for you");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "div", 7)(13, "div", 6)(14, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "consectetur adipiscing elit,");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ed do eiusmod tempor incididunt ut labore et dolore ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9)(20, "form", 10)(21, "div", 11)(22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11)(25, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11)(28, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11)(31, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18)(37, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 53995:
/*!********************************************************************!*\
  !*** ./src/app/layouts/music/music-event/music-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicEventComponent": () => (/* binding */ MusicEventComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);








function MusicEventComponent_section_0_div_11_h6_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_11_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "a", 15)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", event_r4.link, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r6.language.access, " ");
  }
}
function MusicEventComponent_section_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, MusicEventComponent_section_0_div_11_h6_18_Template, 2, 0, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MusicEventComponent_section_0_div_11_div_19_Template, 5, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](event_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](event_r4.place);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 7, event_r4.date, "EEEE d MMMM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 10, event_r4.date, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 13, event_r4.date, "y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", event_r4.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", event_r4.link);
  }
}
function MusicEventComponent_section_0_div_12_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicEventComponent_section_0_div_12_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.getEvents(ctx_r16.listEvents["hydra:view"]["hydra:first"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicEventComponent_section_0_div_12_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r18.getEvents(ctx_r18.listEvents["hydra:view"]["hydra:previous"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicEventComponent_section_0_div_12_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.getEvents(ctx_r20.listEvents["hydra:view"]["hydra:next"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MusicEventComponent_section_0_div_12_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.getEvents(ctx_r22.listEvents["hydra:view"]["hydra:last"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_button_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MusicEventComponent_section_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "ul")(4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MusicEventComponent_section_0_div_12_button_5_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MusicEventComponent_section_0_div_12_button_6_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MusicEventComponent_section_0_div_12_button_8_Template, 2, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MusicEventComponent_section_0_div_12_button_9_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li")(11, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusout", function MusicEventComponent_section_0_div_12_Template_input_focusout_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.onFocusOutEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "li")(13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MusicEventComponent_section_0_div_12_button_16_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MusicEventComponent_section_0_div_12_button_17_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, MusicEventComponent_section_0_div_12_button_19_Template, 2, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, MusicEventComponent_section_0_div_12_button_20_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listEvents["hydra:view"]["hydra:first"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.listEvents["hydra:view"]["hydra:first"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listEvents["hydra:view"]["hydra:previous"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.listEvents["hydra:view"]["hydra:previous"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r3.currentPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("max", ctx_r3.totalPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.totalPage, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listEvents["hydra:view"]["hydra:next"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.listEvents["hydra:view"]["hydra:next"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.listEvents["hydra:view"]["hydra:last"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.listEvents["hydra:view"]["hydra:last"]);
  }
}
function MusicEventComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, MusicEventComponent_section_0_div_11_Template, 20, 16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MusicEventComponent_section_0_div_12_Template, 21, 11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.language.listOfEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.language.recentOrUpcomingEvents);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.events);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.listEvents["hydra:view"] && ctx_r0.totalPage && ctx_r0.totalPage > 1);
  }
}
function MusicEventComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
class MusicEventComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.getEvents('/api/events');
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  getEvents(route) {
    this.listEvents = undefined;
    this.events = undefined;
    this.currentPage = undefined;
    this.totalPage = undefined;
    this.dataService.sendGetRequest(route).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(data => {
      this.listEvents = data;
      this.events = this.listEvents['hydra:member'];
      this.currentPage = this.getPageNumber(route);
      if (this.listEvents['hydra:view']) {
        if (this.listEvents['hydra:view']['hydra:last']) {
          this.totalPage = this.getPageNumber(this.listEvents['hydra:view']['hydra:last']);
        }
      }
    }, error => {
      this.listEvents = null;
      this.events = [];
    });
  }
  onFocusOutEvent(event) {
    let number = event.target.value;
    if (number > 0 && number <= this.totalPage) {
      this.getEvents('/api/events?page=' + number);
    }
  }
  getPageNumber(route) {
    if (!route.includes('?')) {
      return 1;
    }
    let url = new URL(src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_2__.ConfigDB.data.apiServer + route);
    let page = url.searchParams.get('page');
    return Number(page);
  }
}
MusicEventComponent.ɵfac = function MusicEventComponent_Factory(t) {
  return new (t || MusicEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService));
};
MusicEventComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MusicEventComponent,
  selectors: [["app-music-event"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music album", 4, "ngIf"], [1, "music", "album"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], ["class", "col-lg-3 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], ["class", "col-12", 4, "ngIf"], [1, "col-lg-3", "col-md-4", "col-sm-6"], [1, "album-list", "overlay-box", "text-center"], [1, "text-uppercase", "list-head"], [1, "item-sublist"], ["class", "item-sublist", 4, "ngIf"], ["target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right", "m-l-15"], [1, "col-12"], [1, "pagination_sec"], [1, "content_detail__pagination", "cdp"], ["class", "prev btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "prev btn", "type", "button", "disabled", "", 4, "ngIf"], ["type", "number", "min", "1", 1, "form-control", 3, "value", "max", "focusout"], ["class", "next btn", "type", "button", 3, "click", 4, "ngIf"], ["class", "next btn", "type", "button", "disabled", "", 4, "ngIf"], ["type", "button", 1, "prev", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-angles-left"], ["type", "button", "disabled", "", 1, "prev", "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-angle-left"], ["type", "button", 1, "next", "btn", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-angle-right"], ["type", "button", "disabled", "", 1, "next", "btn"], ["aria-hidden", "true", 1, "fa-solid", "fa-angles-right"]],
  template: function MusicEventComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MusicEventComponent_section_0_Template, 13, 4, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MusicEventComponent_section_1_Template, 5, 0, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.events == null ? null : ctx.events.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.events);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_3__.LoaderBisRedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["hr[_ngcontent-%COMP%] {\n  border-top: 1px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9tdXNpYy9tdXNpYy1ldmVudC9tdXNpYy1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3589:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/music/music-footer/music-footer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicFooterComponent": () => (/* binding */ MusicFooterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/contact/contact.component */ 56189);







const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class MusicFooterComponent {
  constructor(artistService) {
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicFooterComponent.ɵfac = function MusicFooterComponent_Factory(t) {
  return new (t || MusicFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
MusicFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MusicFooterComponent,
  selectors: [["app-music-footer"]],
  decls: 2,
  vars: 3,
  consts: [[1, "music", "bg-footer", 3, "ngStyle"]],
  template: function MusicFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, (ctx.artist == null ? null : ctx.artist.footer) ? "url(" + ctx.artistImagePath + ctx.artist.footer + ")" : ""));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, _shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90337:
/*!************************************************************************!*\
  !*** ./src/app/layouts/music/music-gallery/music-gallery.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicGalleryComponent": () => (/* binding */ MusicGalleryComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);











function MusicGalleryComponent_section_0_ng_container_12_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14)(2, "a", 15)(3, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 18);
  }
  if (rf & 2) {
    const gallery_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.galleryImagePath, "", gallery_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("alt", "gallery-", gallery_r3.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("href", "", ctx_r6.galleryImagePath, "", gallery_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r6.language.download, " ");
  }
}
function MusicGalleryComponent_section_0_ng_container_12_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MusicGalleryComponent_section_0_ng_container_12_1_ng_template_0_Template, 8, 6, "ng-template", 12);
  }
}
function MusicGalleryComponent_section_0_ng_container_12_2_ng_template_0_Template(rf, ctx) {}
function MusicGalleryComponent_section_0_ng_container_12_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MusicGalleryComponent_section_0_ng_container_12_2_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
}
function MusicGalleryComponent_section_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MusicGalleryComponent_section_0_ng_container_12_1_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MusicGalleryComponent_section_0_ng_container_12_2_Template, 1, 0, null, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const gallery_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", gallery_r3.id != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", gallery_r3.id == -1);
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
function MusicGalleryComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8)(11, "owl-carousel-o", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MusicGalleryComponent_section_0_ng_container_12_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, (ctx_r0.artist == null ? null : ctx_r0.artist.gallery) ? "url(" + ctx_r0.artistImagePath + ctx_r0.artist.gallery + ")" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.language.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r0.galleryCarouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.galleries);
  }
}
function MusicGalleryComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, (ctx_r1.artist == null ? null : ctx_r1.artist.gallery) ? "url(" + ctx_r1.artistImagePath + ctx_r1.artist.gallery + ")" : ""));
  }
}
class MusicGalleryComponent {
  constructor(dataService, artistService) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.galleryImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'gallery/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.galleryCarouselOptions = {
      items: 3,
      autoHeight: true,
      nav: true,
      navText: ['<i class="fa-solid fa-arrow-left fa-xl" aria-hidden="true"></i>', '<i class="fa-solid fa-arrow-right fa-xl" aria-hidden="true"></i>'],
      autoplay: false,
      center: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      dots: false,
      loop: true,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        460: {
          items: 2
        },
        991: {
          items: 3
        }
      }
    };
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_2__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/galleries').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(data => {
      let galleries = data['hydra:member'];
      if (galleries && galleries.length > 0) {
        let emptyGallery = {
          id: -1,
          image: undefined
        };
        if (galleries.length == 1) {
          galleries.unshift(emptyGallery);
          galleries.push(emptyGallery);
        } else if (galleries.length == 2) {
          galleries.unshift(emptyGallery);
        }
      }
      this.galleries = galleries;
    }, error => {
      this.galleries = [];
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicGalleryComponent.ɵfac = function MusicGalleryComponent_Factory(t) {
  return new (t || MusicGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_3__.ArtistService));
};
MusicGalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: MusicGalleryComponent,
  selectors: [["app-music-gallery"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music gallery bg-gallery bg-shadow-top-bottom", 3, "ngStyle", 4, "ngIf"], [1, "music", "gallery", "bg-gallery", "bg-shadow-top-bottom", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], [1, "col-12"], [1, "gallery-slider", 3, "options"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["carouselSlide", "", "class", "item"], [1, "img-gallery", 3, "src", "alt"], [1, "abs-center", "w-100", "text-container"], ["target", "_blank", 3, "href"], [1, "text-white", "overlay-text", "text-center"], ["aria-hidden", "true", 1, "fa-solid", "fa-download"], [1, "overlay"]],
  template: function MusicGalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MusicGalleryComponent_section_0_Template, 13, 6, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MusicGalleryComponent_section_1_Template, 5, 3, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.galleries == null ? null : ctx.galleries.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.galleries);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselSlideDirective, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_4__.LoaderBisRedComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2834:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/music/music-header/music-header.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicHeaderComponent": () => (/* binding */ MusicHeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/sidebar.service */ 61545);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/social.service */ 98147);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vanilla-tilt */ 39384);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);
















function MusicHeaderComponent_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 12);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.artistImagePath, "", ctx_r0.artist.man, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
  }
}
function MusicHeaderComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 13);
  }
}
function MusicHeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function MusicHeaderComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 2, ctx_r3.artist.date, "y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](8, 5, ctx_r3.artist.date, "d MMMM"));
  }
}
function MusicHeaderComponent_div_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 24)(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const social_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", social_r8.link, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](social_r8.fa);
  }
}
function MusicHeaderComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 21)(1, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MusicHeaderComponent_div_9_li_4_Template, 3, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r4.language.listenToMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r4.socials);
  }
}
function MusicHeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function MusicHeaderComponent_div_11_h6_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r9.project.name, " \u2022 Am\u00E9d\u00E9e");
  }
}
function MusicHeaderComponent_div_11_h6_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r10.project.name, " \u2022 ", ctx_r10.artist.name, "");
  }
}
function MusicHeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "div", 31)(4, "div", 32)(5, "div", 33)(6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 36)(9, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, MusicHeaderComponent_div_11_h6_11_Template, 2, 1, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, MusicHeaderComponent_div_11_h6_12_Template, 2, 2, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 41)(16, "div", 42)(17, "div", 43)(18, "div", 44)(19, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MusicHeaderComponent_div_11_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.sideBar(ctx_r11.project));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.projectImagePath, "", ctx_r6.project.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r6.language.latestNovelty);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r6.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.artist);
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class MusicHeaderComponent {
  constructor(dataService, sidebarService, artistService, socialService, el) {
    this.dataService = dataService;
    this.sidebarService = sidebarService;
    this.artistService = artistService;
    this.socialService = socialService;
    this.el = el;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_5__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_5__.ConfigDB.data.apiServerImages + 'artist/';
    this.projectImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_5__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_5__.ConfigDB.data.apiServerImages + 'project/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.socialService.loadedSocials$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(data => {
      this.socials = data;
    });
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/projects/last/light').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(data => {
      this.project = data;
    }, error => {
      this.project = null;
    });
    vanilla_tilt__WEBPACK_IMPORTED_MODULE_6___default().init(this.el.nativeElement.querySelectorAll('.tilt-artist'), {
      max: 3,
      speed: 400,
      perspective: 400
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  sideBar(project) {
    this.sidebarService.setProject(project);
  }
}
MusicHeaderComponent.ɵfac = function MusicHeaderComponent_Factory(t) {
  return new (t || MusicHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__.ArtistService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_3__.SocialService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
};
MusicHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: MusicHeaderComponent,
  selectors: [["app-music-header"]],
  decls: 12,
  vars: 10,
  consts: [["id", "header", 1, "music", "header"], [1, "music-content"], [1, "music-bg", "bg", "bg-shadow-top", 3, "ngStyle"], [1, "text-center", "w-100", "h-100", "tilt-artist"], [1, "img-height", "h-100"], ["alt", "artist", "class", "img-fluid", 3, "src", 4, "ngIf"], ["src", "assets/images/music/artist/man.png", "alt", "artist", "class", "img-fluid", 4, "ngIf"], ["class", "container h-100", 4, "ngIf"], ["class", "right-side", 4, "ngIf"], ["class", "left-side", 4, "ngIf"], ["class", "left-side pt-5", 4, "ngIf"], ["class", "container music-container", 4, "ngIf"], ["alt", "artist", 1, "img-fluid", 3, "src"], ["src", "assets/images/music/artist/man.png", "alt", "artist", 1, "img-fluid"], [1, "container", "h-100"], [1, "row", "h-100"], [1, "col-12"], [1, "right-side"], [1, "circle"], ["src", "assets/images/music/icons/aero.png", "alt", "aero", 1, "img-fluid"], [1, ""], [1, "left-side"], [1, "follow-text"], ["class", "mr-2", 4, "ngFor", "ngForOf"], [1, "mr-2"], ["target", "_blank", 3, "href"], ["aria-hidden", "true"], [1, "left-side", "pt-5"], [1, "container", "music-container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "play-bg", "d-flex"], [1, "song-text-container", "h-100"], [1, "d-flex", "h-100"], [1, "center-img"], ["alt", "project", 1, "img-fluid", "img-project", 3, "src"], [1, "song-text"], [1, "text-white", "song-head"], ["class", "text-white song-sub-head", 4, "ngIf"], [1, "play-setting", "m-auto"], ["id", "jquery_jplayer_1", 1, "jp-jplayer"], ["id", "jp_container_1", "role", "application", "aria-label", "media player", 1, "jp-audio"], [1, "jp-type-playlist"], [1, "jp-gui", "jp-interface", "p-0", "d-flex"], [1, "jp-controls"], ["role", "button", "tabindex", "0", 1, "jp-play", "m-r-15", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-play"], [1, "text-white", "song-sub-head"]],
  template: function MusicHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MusicHeaderComponent_img_5_Template, 1, 2, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MusicHeaderComponent_img_6_Template, 1, 0, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MusicHeaderComponent_div_7_Template, 4, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MusicHeaderComponent_div_8_Template, 9, 8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MusicHeaderComponent_div_9_Template, 5, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MusicHeaderComponent_div_10_Template, 2, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, MusicHeaderComponent_div_11_Template, 21, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c0, (ctx.artist == null ? null : ctx.artist.header) ? "url(" + ctx.artistImagePath + ctx.artist.header + ")" : "url(assets/images/music/artist/header.jpg)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artist == null ? null : ctx.artist.man);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artist !== undefined && (ctx.artist && !ctx.artist.man || !ctx.artist));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artist === undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.artist == null ? null : ctx.artist.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx.socials == null ? null : ctx.socials.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.socials);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.project);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_7__.LoaderBisRedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".img-project[_ngcontent-%COMP%] {\n  max-width: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9tdXNpYy9tdXNpYy1oZWFkZXIvbXVzaWMtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1wcm9qZWN0IHtcclxuICAgIG1heC13aWR0aDogNTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 23803:
/*!************************************************************************!*\
  !*** ./src/app/layouts/music/music-project/music-project.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicProjectComponent": () => (/* binding */ MusicProjectComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/sidebar.service */ 61545);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);














function MusicProjectComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "div", 12)(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 13)(6, "a", 14)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.language.myProjects);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.language.listenToMe);
  }
}
function MusicProjectComponent_ng_container_6_1_ng_template_0_h6_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Am\u00E9d\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MusicProjectComponent_ng_container_6_1_ng_template_0_h6_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r10.artist.name);
  }
}
function MusicProjectComponent_ng_container_6_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 19)(5, "div", 20)(6, "div", 21)(7, "h5", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, MusicProjectComponent_ng_container_6_1_ng_template_0_h6_12_Template, 2, 0, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, MusicProjectComponent_ng_container_6_1_ng_template_0_h6_13_Template, 2, 1, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 25)(15, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function MusicProjectComponent_ng_container_6_1_ng_template_0_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.sideBar(project_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "img", 29)(20, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate2"]("src", "", ctx_r8.projectImagePath, "", project_r5.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](project_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", project_r5.type.name, " \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](11, 8, project_r5.date, "y"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r8.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r8.language.listen, " ");
  }
}
function MusicProjectComponent_ng_container_6_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MusicProjectComponent_ng_container_6_1_ng_template_0_Template, 21, 11, "ng-template", 15);
  }
}
function MusicProjectComponent_ng_container_6_2_ng_template_0_Template(rf, ctx) {}
function MusicProjectComponent_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, MusicProjectComponent_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 15);
  }
}
function MusicProjectComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, MusicProjectComponent_ng_container_6_1_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, MusicProjectComponent_ng_container_6_2_Template, 1, 0, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", project_r5.id != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", project_r5.id == -1);
  }
}
function MusicProjectComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MusicProjectComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function MusicProjectComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 32)(1, "h4", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.language.biography);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.artistAbout.about);
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class MusicProjectComponent {
  constructor(dataService, sidebarService, artistService) {
    this.dataService = dataService;
    this.sidebarService = sidebarService;
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.projectImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'project/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.projectscarouselOptions = {
      items: 3,
      margin: 60,
      nav: false,
      dots: false,
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3,
          margin: 30
        },
        1600: {
          margin: 30
        }
      }
    };
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_5__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(data => {
      if (data && data.artistAbouts) {
        let artistAbouts = data.artistAbouts;
        artistAbouts.sort((a, b) => a.id - b.id);
        for (let index = artistAbouts.length - 1; index >= 0; index--) {
          const artistAbout = artistAbouts[index];
          if (artistAbout.local.local == src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService.getLanguageCodeOnly()) {
            this.artistAbout = artistAbout;
            break;
          }
        }
        data.artistAbouts = artistAbouts;
      }
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/projects').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(data => {
      let projects = data['hydra:member'];
      if (projects && projects.length > 0) {
        let emptyProject = {
          id: -1,
          name: undefined,
          date: undefined,
          image: undefined,
          titles: [],
          projectPlatforms: [],
          type: undefined
        };
        if (projects.length == 1) {
          projects.unshift(emptyProject);
          projects.push(emptyProject);
        } else if (projects.length == 2) {
          projects.push(emptyProject);
        }
      }
      this.projects = projects;
    }, error => {
      this.projects = [];
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  sideBar(project) {
    this.sidebarService.setProject(project);
  }
}
MusicProjectComponent.ɵfac = function MusicProjectComponent_Factory(t) {
  return new (t || MusicProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_4__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
MusicProjectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MusicProjectComponent,
  selectors: [["app-music-project"]],
  decls: 10,
  vars: 9,
  consts: [["id", "artist", 1, "music", "artist", "bg-artist", "bg-shadow-top-bottom", 3, "ngStyle"], [1, "container"], [1, "row"], ["class", "col-md-10 offset-md-1", 4, "ngIf"], [1, "col-12"], [1, "artist-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["class", "mb-5", 4, "ngIf"], [4, "ngIf"], ["class", "artist-text text-center", 4, "ngIf"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], ["href", "#sponsor"], ["carouselSlide", "", "class", "item"], [1, "album-artist", "text-center"], ["alt", "project", 1, "img-fluid", "set-relative", "overlay-img", "img-project", 3, "src"], [1, "overlay-box2"], [1, "set-abs", "bottom-0", "w-100", "text-left", "set-z-index"], [1, "singers"], [1, "m-b-10"], [1, "name"], [1, "musician"], ["class", "musician", 4, "ngIf"], [1, "text-center"], [1, "btn", "btn-default", "btn-gradient", "m-0-auto", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-play", "mr-1"], [1, "set-abs", "cds"], ["src", "assets/images/music/project/cd.svg", "alt", "cd", 1, "cd-animation"], ["src", "assets/images/music/project/ellipse.svg", "alt", "elipse", 1, "elipse"], [1, "mb-5"], [1, "artist-text", "text-center"], [1, "text-uppercase", "dummy-text", "mb-2"], [1, "text-white", "text-para", "text-artist-about"]],
  template: function MusicProjectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, MusicProjectComponent_div_3_Template, 9, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "owl-carousel-o", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, MusicProjectComponent_ng_container_6_Template, 3, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, MusicProjectComponent_div_7_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, MusicProjectComponent_div_8_Template, 2, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, MusicProjectComponent_div_9_Template, 5, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, (ctx.artist == null ? null : ctx.artist.project) ? "url(" + ctx.artistImagePath + ctx.artist.project + ")" : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.projects == null ? null : ctx.projects.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("options", ctx.projectscarouselOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.artist === undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.artistAbout);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselSlideDirective, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_6__.LoaderBisRedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".text-artist-about[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9tdXNpYy9tdXNpYy1wcm9qZWN0L211c2ljLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtYXJ0aXN0LWFib3V0IHtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 38930:
/*!************************************************************************!*\
  !*** ./src/app/layouts/music/music-sidebar/music-sidebar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicSidebarComponent": () => (/* binding */ MusicSidebarComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/sidebar.service */ 61545);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-bis/loader-bis.component */ 86916);














function MusicSidebarComponent_div_0_h6_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.project.type.name);
  }
}
function MusicSidebarComponent_div_0_h6_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Am\u00E9d\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MusicSidebarComponent_div_0_h6_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.artist.name);
  }
}
function MusicSidebarComponent_div_0_div_24_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const projectPlatform_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", projectPlatform_r10.link, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](projectPlatform_r10.fa);
  }
}
function MusicSidebarComponent_div_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicSidebarComponent_div_0_div_24_a_1_Template, 3, 4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.project.projectPlatforms);
  }
}
function MusicSidebarComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-loader-bis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MusicSidebarComponent_div_0_div_28_li_2_div_4_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicSidebarComponent_div_0_div_28_li_2_div_4_li_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const title_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.openVerticallyCentered(_r12, title_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MusicSidebarComponent_div_0_div_28_li_2_div_4_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const titlePlatform_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", titlePlatform_r21.link, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("", titlePlatform_r21.fa, " center-content");
  }
}
function MusicSidebarComponent_div_0_div_28_li_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "div", 34)(2, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MusicSidebarComponent_div_0_div_28_li_2_div_4_li_3_Template, 3, 0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MusicSidebarComponent_div_0_div_28_li_2_div_4_li_4_Template, 3, 4, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const title_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", title_r14.lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", title_r14.titlePlatforms);
  }
}
function MusicSidebarComponent_div_0_div_28_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 31)(2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MusicSidebarComponent_div_0_div_28_li_2_div_4_Template, 5, 2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const title_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", title_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", title_r14.titlePlatforms);
  }
}
function MusicSidebarComponent_div_0_div_28_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicSidebarComponent_div_0_div_28_ng_template_3_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const modal_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r23.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 43)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 7)(12, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicSidebarComponent_div_0_div_28_ng_template_3_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const modal_r23 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r23.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r13.language.lyrics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r13.selectedTitle.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", ctx_r13.selectedTitle.lyrics, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r13.language.close, " ");
  }
}
function MusicSidebarComponent_div_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MusicSidebarComponent_div_0_div_28_li_2_Template, 5, 2, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MusicSidebarComponent_div_0_div_28_ng_template_3_Template, 14, 4, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r7.project.titles);
  }
}
function MusicSidebarComponent_div_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-loader-bis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MusicSidebarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "div", 7)(7, "div", 8)(8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "i")(10, "i")(11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h6", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12)(17, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MusicSidebarComponent_div_0_h6_19_Template, 2, 1, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, MusicSidebarComponent_div_0_h6_20_Template, 2, 0, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, MusicSidebarComponent_div_0_h6_21_Template, 2, 1, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 15)(23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, MusicSidebarComponent_div_0_div_24_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, MusicSidebarComponent_div_0_div_25_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicSidebarComponent_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.sideBar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, MusicSidebarComponent_div_0_div_28_Template, 5, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, MusicSidebarComponent_div_0_div_29_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("display", ctx_r0.sideBarDispaly);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 14, ctx_r0.project.date, "d MMMM y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.projectImagePath, "", ctx_r0.project.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.project.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.artist);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.project.projectPlatforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.project.projectPlatforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.project.titles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.project.titles);
  }
}
function MusicSidebarComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 46)(2, "div", 47)(3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-loader-bis");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("display", ctx_r1.sideBarDispaly);
  }
}
class MusicSidebarComponent {
  constructor(dataService, sidebarService, artistService, modalService) {
    this.dataService = dataService;
    this.sidebarService = sidebarService;
    this.artistService = artistService;
    this.modalService = modalService;
    this.projectImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_1__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_1__.ConfigDB.data.apiServerImages + 'project/';
    this.sideBarDispaly = "none";
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.sidebarService.project$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.sideBar(data);
    });
  }
  getProject(project = undefined) {
    this.project = project;
    if (project) {
      if (this.project) {
        this.project.projectPlatforms = undefined;
        this.project.titles = undefined;
      }
      this.dataService.sendGetRequest('/api/projects/' + project.id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
        if (data) {
          if (data.projectPlatforms) {
            let projectPlatforms = data.projectPlatforms;
            projectPlatforms.sort((a, b) => a.fa.localeCompare(b.fa));
            data.projectPlatforms = projectPlatforms;
          }
          if (data.titles) {
            let titles = data.titles;
            titles.sort((a, b) => a.name.localeCompare(b.name));
            data.titles = titles;
            for (let index = 0; index < titles.length; index++) {
              const title = titles[index];
              if (title.titlePlatforms) {
                let titlePlatforms = title.titlePlatforms;
                titlePlatforms.sort((a, b) => a.fa.localeCompare(b.fa));
                data.titles[index].titlePlatforms = titlePlatforms;
              }
            }
          }
        }
        this.project = data;
      }, error => {
        this.project = null;
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  sideBar(project = undefined) {
    if (this.sideBarDispaly == 'none' && project) {
      this.sideBarDispaly = 'block';
    } else if (project === undefined) {
      this.sideBarDispaly = 'none';
    }
    this.getProject(project);
  }
  openVerticallyCentered(content, selectedTitle) {
    if (selectedTitle.lyrics) {
      this.selectedTitle = selectedTitle;
      this.modalService.open(content, {
        centered: true,
        size: 'lg'
      });
    }
  }
}
MusicSidebarComponent.ɵfac = function MusicSidebarComponent_Factory(t) {
  return new (t || MusicSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_4__.ArtistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal));
};
MusicSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MusicSidebarComponent,
  selectors: [["app-music-sidebar"]],
  decls: 2,
  vars: 2,
  consts: [["id", "side-section", "class", "music side-section", 3, "display", 4, "ngIf"], ["id", "side-section", 1, "music", "side-section"], [1, "jp-jplayer"], ["role", "application", "aria-label", "media player", 1, "jp-audio"], [1, "jp-type-playlist"], [1, "jp-gui", "jp-interface"], [1, "side-player"], [1, "text-center"], [1, "gradient-block"], [1, "animation-circle-inverse"], [1, "now-play"], [1, "img-fluid", "girls", "img-project", 3, "src", "alt"], [1, "author-text"], [1, "m-b-10", "song-text"], ["class", "song-sub-text", 4, "ngIf"], [1, "container"], [1, "jp-controls"], ["class", "button-container", 4, "ngIf"], [1, "btn-sidebar", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times"], ["class", "jp-playlist", 4, "ngIf"], [1, "song-sub-text"], [1, "button-container"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], ["type", "button", "tabindex", "0", 1, "jp-play"], ["aria-hidden", "true"], [1, "jp-playlist"], [1, "pt-2"], [4, "ngFor", "ngForOf"], ["content", ""], [1, "row", "align-items-center"], [1, "col"], ["class", "col", 4, "ngIf"], [1, "socials-lists"], [1, "socials-horizontal", "justify-content-center"], [4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["aria-hidden", "true", 1, "fa-solid", "fa-file-lines", "center-content", "li-lyrics"], [1, "login-modal"], [1, "modal-header"], [1, "m-b-20", "mt-4", "ml-2"], ["aria-label", "Close", "data-dismiss", "modal", "type", "button", 1, "close", 3, "click"], [1, "modal-body"], [3, "innerHTML"], ["aria-label", "Close", "data-dismiss", "modal", 1, "btn", "btn-default", "primary-btn", "m-t-20", 3, "click"], [1, "container", "h-100"], [1, "row", "h-100"], [1, "col-12"]],
  template: function MusicSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicSidebarComponent_div_0_Template, 30, 17, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicSidebarComponent_div_1_Template, 5, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.project);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.project === undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".img-project[_ngcontent-%COMP%] {\n  max-width: 172px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0cy9tdXNpYy9tdXNpYy1zaWRlYmFyL211c2ljLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1wcm9qZWN0IHtcclxuICAgIG1heC13aWR0aDogMTcycHg7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 36862:
/*!**********************************************************************!*\
  !*** ./src/app/layouts/music/music-social/music-social.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicSocialComponent": () => (/* binding */ MusicSocialComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/social.service */ 98147);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);







function MusicSocialComponent_section_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "a", 11)(2, "div", 12)(3, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const social_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", social_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", social_r3.fa, " fa-2xl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.language.access, " ");
  }
}
function MusicSocialComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, MusicSocialComponent_section_0_div_10_Template, 9, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.language.listenToMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.socials);
  }
}
function MusicSocialComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
class MusicSocialComponent {
  constructor(socialService) {
    this.socialService = socialService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.socialService.loadedSocials$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
      this.socials = data;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicSocialComponent.ɵfac = function MusicSocialComponent_Factory(t) {
  return new (t || MusicSocialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_0__.SocialService));
};
MusicSocialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MusicSocialComponent,
  selectors: [["app-music-social"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music album bg-unset", "id", "sponsor", 4, "ngIf"], ["id", "sponsor", 1, "music", "album", "bg-unset"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "text-uppercase"], [1, "sub-title"], ["class", "col-lg-3 col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-4", "col-sm-6"], ["target", "_blank", 3, "href"], [1, "album-list", "overlay-box", "text-center"], [1, "text-uppercase", "list-head"], ["aria-hidden", "true"], [1, "item-sublist"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right", "m-l-15"], [1, "col-12"]],
  template: function MusicSocialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MusicSocialComponent_section_0_Template, 11, 2, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MusicSocialComponent_section_1_Template, 5, 0, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.socials == null ? null : ctx.socials.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.socials);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_2__.LoaderBisRedComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 60682:
/*!****************************************************************************!*\
  !*** ./src/app/layouts/music/music-subscribe/music-subscribe.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicSubscribeComponent": () => (/* binding */ MusicSubscribeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/alert.service */ 96506);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/form.service */ 33886);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
















function MusicSubscribeComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.language.subscribe);
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
const _c1 = function (a0) {
  return {
    "error-form": a0
  };
};
class MusicSubscribeComponent {
  constructor(dataService, artistService, formService, alertService) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.formService = formService;
    this.alertService = alertService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_6__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.error = false;
    this.sending = false;
  }
  onFormSubmit(subscribeForm) {
    this.error = false;
    this.sending = false;
    if (subscribeForm.valid) {
      this.email = subscribeForm.controls['email'].value;
      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;
        /* Sent to api */
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams();
        const page = '/subscribe/' + src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService.getLanguageCodeOnly() + '/' + this.email;
        this.dataService.sendPostRequest(page, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(data => {
          if (!data || data && (data.id == -1 || data.id == undefined)) {
            this.alertService.showError(this.language.subscribeError);
          } else {
            this.alertService.showSuccess(this.language.subscribeSuccess);
            subscribeForm.resetForm();
          }
          this.sending = false;
        }, error => {
          this.alertService.showError(this.language.subscribeError);
          this.sending = false;
        });
      } else {
        this.error = true;
      }
    } else {
      this.error = true;
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicSubscribeComponent.ɵfac = function MusicSubscribeComponent_Factory(t) {
  return new (t || MusicSubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__.ArtistService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
};
MusicSubscribeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: MusicSubscribeComponent,
  selectors: [["app-music-subscribe"]],
  decls: 26,
  vars: 11,
  consts: [[1, "music", "subscribe", "bg-gallery", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], [1, "col-lg-6", "offset-lg-3", "col-md-8", "offset-md-2"], [1, "subscribe-title"], [1, "subscribe-main"], [1, "subscribe-sub"], [3, "submit"], ["subscribeForm", "ngForm"], [1, "col"], [1, "subscribe"], [1, "center-content"], [1, "form-group"], [1, "flex"], ["required", "", "ngModel", "", "type", "email", "name", "email", 1, "form-control", 3, "ngClass", "placeholder"], ["class", "button-primary", 4, "ngIf"], [1, "button-primary"], ["type", "submit", 1, "btn", "btn-default", "btn-gradient", "text-white"]],
  template: function MusicSubscribeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 1)(16, "form", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function MusicSubscribeComponent_Template_form_submit_16_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](17);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onFormSubmit(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 2)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, MusicSubscribeComponent_div_25_Template, 3, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, (ctx.artist == null ? null : ctx.artist.subscribe) ? "url(" + ctx.artistImagePath + ctx.artist.subscribe + ")" : ""));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.language.subscribe);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.language.subscribeInfo, " ", ctx.artist ? ctx.artist.name : "Am\u00E9d\u00E9e", " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.language.subscribeEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, ctx.error));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.sending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 67254:
/*!********************************************************************************!*\
  !*** ./src/app/layouts/music/music-testimonial/music-testimonial.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicTestimonialComponent": () => (/* binding */ MusicTestimonialComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ 27135);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);












function MusicTestimonialComponent_section_0_ng_container_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 14)(3, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h6", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const testimonial_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r4.quoteImage, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](testimonial_r3.citation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](testimonial_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](testimonial_r3.designation);
  }
}
function MusicTestimonialComponent_section_0_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicTestimonialComponent_section_0_ng_container_12_ng_template_1_Template, 9, 4, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
function MusicTestimonialComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8)(11, "owl-carousel-o", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, MusicTestimonialComponent_section_0_ng_container_12_Template, 2, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, (ctx_r0.artist == null ? null : ctx_r0.artist.testimonial) ? "url(" + ctx_r0.artistImagePath + ctx_r0.artist.testimonial + ")" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.language.referringToMe);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r0.testimoialCarouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.testimonials);
  }
}
function MusicTestimonialComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, (ctx_r1.artist == null ? null : ctx_r1.artist.testimonial) ? "url(" + ctx_r1.artistImagePath + ctx_r1.artist.testimonial + ")" : ""));
  }
}
class MusicTestimonialComponent {
  constructor(dataService, artistService) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.quoteImage = 'assets/images/music/testimonial/quote.png';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.testimoialCarouselOptions = {
      items: 1,
      margin: 0,
      dots: false,
      nav: true,
      navText: ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>', '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
      autoplay: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true
    };
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_4__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/testimonials?local.local=' + src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService.getLanguageCodeOnly()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.testimonials = data['hydra:member'];
    }, error => {
      this.testimonials = [];
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicTestimonialComponent.ɵfac = function MusicTestimonialComponent_Factory(t) {
  return new (t || MusicTestimonialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
MusicTestimonialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MusicTestimonialComponent,
  selectors: [["app-music-testimonial"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music testimonial sponsor", 3, "ngStyle", 4, "ngIf"], [1, "music", "testimonial", "sponsor", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-10", "offset-md-1"], [1, "title", "title4"], [1, "main-title"], [1, "sub-title"], [1, "col-md-8", "offset-md-2"], [1, "music-testimonial-slider", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", "class", "item"], [1, ""], ["alt", "quote", 1, "img-fluid", 3, "src"], [1, "text-center", "testimonial-info"], [1, "testimonial-para"], [1, "gradient-text", "text-uppercase", "m-b-5", "font-large"], [1, "font-small"], [1, "col-12"]],
  template: function MusicTestimonialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicTestimonialComponent_section_0_Template, 13, 6, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicTestimonialComponent_section_1_Template, 5, 3, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.testimonials == null ? null : ctx.testimonials.length) > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.testimonials);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__.CarouselSlideDirective, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisRedComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90531:
/*!********************************************************************!*\
  !*** ./src/app/layouts/music/music-video/music-video.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicVideoComponent": () => (/* binding */ MusicVideoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/loader-bis-red/loader-bis-red.component */ 6906);















function MusicVideoComponent_section_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 1, ctx_r2.video.date, "d MMMM y"));
  }
}
function MusicVideoComponent_section_0_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.videoDescription.description, " ");
  }
}
function MusicVideoComponent_section_0_a_21_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicVideoComponent_section_0_a_21_ng_template_2_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const modal_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](modal_r9.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "iframe", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r8.safeVideoLink, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
  }
}
function MusicVideoComponent_section_0_a_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MusicVideoComponent_section_0_a_21_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.openVerticallyCentered(_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MusicVideoComponent_section_0_a_21_ng_template_2_Template, 5, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25)(5, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.language.watchNow);
  }
}
function MusicVideoComponent_section_0_a_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 25)(3, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r5.video.link, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.language.watchNow);
  }
}
function MusicVideoComponent_section_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32)(1, "a", 33)(2, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("href", ctx_r6.artist.videosLink, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r6.language.seeAllVideo, "");
  }
}
const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
function MusicVideoComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 6)(7, "div")(8, "div", 7)(9, "h6", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9)(12, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, MusicVideoComponent_section_0_div_15_Template, 4, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, MusicVideoComponent_section_0_p_16_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "ul")(20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, MusicVideoComponent_section_0_a_21_Template, 7, 1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, MusicVideoComponent_section_0_a_22_Template, 5, 2, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, MusicVideoComponent_section_0_div_23_Template, 5, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, (ctx_r0.artist == null ? null : ctx_r0.artist.video) ? "url(" + ctx_r0.artistImagePath + ctx_r0.artist.video + ")" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("src", "", ctx_r0.videoImagePath, "", ctx_r0.video.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", ctx_r0.video.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", ctx_r0.language.video, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.video.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.video.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.videoDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.safeVideoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.safeVideoLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.artist);
  }
}
function MusicVideoComponent_section_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c0, (ctx_r1.artist == null ? null : ctx_r1.artist.video) ? "url(" + ctx_r1.artistImagePath + ctx_r1.artist.video + ")" : ""));
  }
}
class MusicVideoComponent {
  constructor(dataService, artistService, modalService, _sanitizer) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.modalService = modalService;
    this._sanitizer = _sanitizer;
    this.artistImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'artist/';
    this.videoImagePath = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer + src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServerImages + 'video/';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
    });
    this.dataService.sendGetRequest('/api/videos/last').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(data => {
      if (data) {
        this.videoId = this.youtubeParser(data.link);
        if (this.videoId) {
          this.safeVideoLink = this._sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/' + this.videoId + '?autoplay=1');
        }
        if (data.videoDescriptions) {
          let videoDescriptions = data.videoDescriptions;
          videoDescriptions.sort((a, b) => a.id - b.id);
          for (let index = videoDescriptions.length - 1; index >= 0; index--) {
            const videoDescription = videoDescriptions[index];
            if (videoDescription.local.local == src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService.getLanguageCodeOnly()) {
              this.videoDescription = videoDescription;
              break;
            }
          }
          data.videoDescriptions = videoDescriptions;
        }
      }
      this.video = data;
    }, error => {
      this.video = null;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
  youtubeParser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
}
MusicVideoComponent.ɵfac = function MusicVideoComponent_Factory(t) {
  return new (t || MusicVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer));
};
MusicVideoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MusicVideoComponent,
  selectors: [["app-music-video"]],
  decls: 2,
  vars: 2,
  consts: [["class", "music bg-video format", 3, "ngStyle", 4, "ngIf"], [1, "music", "bg-video", "format", 3, "ngStyle"], [1, "container"], [1, "row"], [1, "col-md-6"], [1, "img-fluid", 3, "src", "alt"], [1, "center-text"], [1, "format-small-text"], [1, "gradient-text", "hash-video"], [1, "format-head-text"], [1, "about-font-header"], [1, "format-sub-text"], ["class", "sub-heading", 4, "ngIf"], ["class", "text-white sub-para", 4, "ngIf"], [1, "m-b-40"], [1, "link-horizontal"], ["class", "button icon-btn d-flex", 3, "click", 4, "ngIf"], ["target", "_blank", "class", "button icon-btn d-flex", 3, "href", 4, "ngIf"], ["class", "d-flex", 4, "ngIf"], [1, "sub-heading"], [1, "sub-small-text"], [1, "text-white", "sub-para"], [1, "button", "icon-btn", "d-flex", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-play", "video-icon", "center-content", "m-0"], ["content", ""], [1, "watch-now", "center-content"], [1, "watch"], [1, "modal-body", "video-modal"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["frameborder", "0", "allowfullscreen", "", 1, "mfp-iframe", 3, "src"], ["target", "_blank", 1, "button", "icon-btn", "d-flex", 3, "href"], [1, "d-flex"], ["target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-arrow-right", "m-l-15"], [1, "col-12"]],
  template: function MusicVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MusicVideoComponent_section_0_Template, 24, 13, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MusicVideoComponent_section_1_Template, 5, 3, "section", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.video);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.video === undefined);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, _shared_components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisRedComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 37932:
/*!**************************************************!*\
  !*** ./src/app/layouts/music/music.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicComponent": () => (/* binding */ MusicComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/meta.service */ 81930);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _shared_components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/copyright/copyright.component */ 71450);
/* harmony import */ var _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/nav/nav.component */ 63749);
/* harmony import */ var _music_header_music_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music-header/music-header.component */ 2834);
/* harmony import */ var _music_event_music_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./music-event/music-event.component */ 53995);
/* harmony import */ var _music_project_music_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music-project/music-project.component */ 23803);
/* harmony import */ var _music_sidebar_music_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./music-sidebar/music-sidebar.component */ 38930);
/* harmony import */ var _music_social_music_social_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music-social/music-social.component */ 36862);
/* harmony import */ var _music_gallery_music_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./music-gallery/music-gallery.component */ 90337);
/* harmony import */ var _music_video_music_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./music-video/music-video.component */ 90531);
/* harmony import */ var _music_blog_music_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music-blog/music-blog.component */ 34003);
/* harmony import */ var _music_subscribe_music_subscribe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./music-subscribe/music-subscribe.component */ 60682);
/* harmony import */ var _music_testimonial_music_testimonial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./music-testimonial/music-testimonial.component */ 67254);
/* harmony import */ var _music_footer_music_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./music-footer/music-footer.component */ 3589);





















class MusicComponent {
  constructor(metaService, artistService) {
    this.metaService = metaService;
    this.artistService = artistService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_3__.TextService.getTextByLocal();
  }
  ngOnInit() {
    /* Set title + meta */
    this.metaService.setTitle(this.language.home);
    this.metaService.setKeywords(this.language.home + ',' + this.language.homeDesc);
    this.metaService.setDescription(this.language.homeDesc);
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this.destroy$)).subscribe(data => {
      if (data && data.artistAbouts) {
        let artistAbouts = data.artistAbouts;
        artistAbouts.sort((a, b) => a.id - b.id);
        for (let index = artistAbouts.length - 1; index >= 0; index--) {
          const artistAbout = artistAbouts[index];
          if (artistAbout.local.local == src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService.getLanguageCodeOnly()) {
            this.metaService.setDescription(artistAbout.about);
            this.metaService.setKeywords(this.language.home + ',' + artistAbout.about);
            break;
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) {
  return new (t || MusicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_service_meta_service__WEBPACK_IMPORTED_MODULE_2__.MetaService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_0__.ArtistService));
};
MusicComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: MusicComponent,
  selectors: [["app-music"]],
  decls: 14,
  vars: 0,
  consts: [[1, "bg-black"]],
  template: function MusicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-nav")(2, "app-music-header")(3, "app-music-sidebar")(4, "app-music-project")(5, "app-music-social")(6, "app-music-gallery")(7, "app-music-event")(8, "app-music-video")(9, "app-music-blog")(10, "app-music-subscribe")(11, "app-music-testimonial")(12, "app-music-footer")(13, "app-copyright");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_shared_components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_4__.CopyrightComponent, _shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__.NavComponent, _music_header_music_header_component__WEBPACK_IMPORTED_MODULE_6__.MusicHeaderComponent, _music_event_music_event_component__WEBPACK_IMPORTED_MODULE_7__.MusicEventComponent, _music_project_music_project_component__WEBPACK_IMPORTED_MODULE_8__.MusicProjectComponent, _music_sidebar_music_sidebar_component__WEBPACK_IMPORTED_MODULE_9__.MusicSidebarComponent, _music_social_music_social_component__WEBPACK_IMPORTED_MODULE_10__.MusicSocialComponent, _music_gallery_music_gallery_component__WEBPACK_IMPORTED_MODULE_11__.MusicGalleryComponent, _music_video_music_video_component__WEBPACK_IMPORTED_MODULE_12__.MusicVideoComponent, _music_blog_music_blog_component__WEBPACK_IMPORTED_MODULE_13__.MusicBlogComponent, _music_subscribe_music_subscribe_component__WEBPACK_IMPORTED_MODULE_14__.MusicSubscribeComponent, _music_testimonial_music_testimonial_component__WEBPACK_IMPORTED_MODULE_15__.MusicTestimonialComponent, _music_footer_music_footer_component__WEBPACK_IMPORTED_MODULE_16__.MusicFooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 56189:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/contact/contact.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/alert.service */ 96506);
/* harmony import */ var src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/artist.service */ 99588);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/form.service */ 33886);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ 99191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader-bis-red/loader-bis-red.component */ 6906);


















function ContactComponent_h6_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.language.contactError);
  }
}
function ContactComponent_h6_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h6", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r1.language.contactSuccess);
  }
}
function ContactComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.language.send);
  }
}
function ContactComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-loader-bis-red");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "error-form": a0
  };
};
class ContactComponent {
  constructor(dataService, formService, alertService, artistService) {
    this.dataService = dataService;
    this.formService = formService;
    this.alertService = alertService;
    this.artistService = artistService;
    this.siteKey = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.siteKey;
    this.appContact = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.appContact;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_6__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;
    this.artistService.loadedArtist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
      if (data && data.contact) {
        this.appContact = data.contact;
      }
    });
  }
  onFormSubmit(contactForm) {
    this.error = false;
    this.errorMail = false;
    this.sending = false;
    this.hasSent = false;
    this.hasSentError = false;
    if (contactForm.valid && this.captcha) {
      this.name = contactForm.controls['name'].value;
      this.email = contactForm.controls['email'].value;
      this.message = contactForm.controls['message'].value;
      if (this.formService.ValidateEmail(this.email)) {
        this.sending = true;
        /* Sent to api */
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('captcha', this.captcha).set('name', this.name).set('mail', this.email).set('message', this.message);
        const page = '/contact/' + src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService.getLanguageCodeOnly();
        this.dataService.sendPostRequest(page, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(data => {
          if (!data || data && (data.id == -1 || data.id == undefined)) {
            this.hasSentError = true;
            this.alertService.showError(this.language.contactError);
          } else {
            this.hasSent = true;
            this.alertService.showSuccess(this.language.contactSuccess);
            contactForm.resetForm();
          }
          this.sending = false;
        }, error => {
          this.hasSentError = true;
          this.alertService.showError(this.language.contactError);
          this.sending = false;
        });
      } else {
        this.errorMail = true;
      }
    } else {
      this.error = true;
    }
  }
  resolved(captchaResponse) {
    this.captcha = captchaResponse;
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_form_service__WEBPACK_IMPORTED_MODULE_4__.FormService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_service_artist_service__WEBPACK_IMPORTED_MODULE_2__.ArtistService));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 30,
  vars: 20,
  consts: [[1, "container"], [1, "row"], [1, "col-sm-4"], [1, "contact-details", "text-center"], [1, "contact-heading", "gradient-text"], [1, "contact-sub-text"], [1, "music-contact-mail-to", 3, "href"], ["class", "contact-sub-text error-text", 4, "ngIf"], ["class", "contact-sub-text success-text", 4, "ngIf"], [1, "form", "form-footer", "p-t-50"], [3, "submit"], ["contactForm", "ngForm"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], ["required", "", "ngModel", "", "name", "name", "type", "text", 3, "ngClass", "placeholder"], ["required", "", "ngModel", "", "name", "email", "type", "email", 3, "ngClass", "placeholder"], [1, "col-md-12"], ["required", "", "ngModel", "", "name", "message", "rows", "6", 1, "form-control", 3, "ngClass", "placeholder"], [1, "col-12"], [3, "siteKey", "resolved"], ["class", "booking", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "contact-sub-text", "error-text"], [1, "contact-sub-text", "success-text"], [1, "booking"], ["type", "submit", 1, "btn", "btn-default", "btn-gradient", "m-0-auto"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "h6", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, ContactComponent_h6_10_Template, 2, 1, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, ContactComponent_h6_11_Template, 2, 1, "h6", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 9)(14, "form", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15);
        return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx.onFormSubmit(_r2));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 1)(17, "div", 12)(18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 12)(21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 16)(24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 18)(27, "re-captcha", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resolved", function ContactComponent_Template_re_captcha_resolved_27_listener($event) {
        return ctx.resolved($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, ContactComponent_div_28_Template, 3, 1, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, ContactComponent_div_29_Template, 2, 0, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.language.contactTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.appContact, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.appContact);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.hasSentError);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.hasSent);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", ctx.language.contactName);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c0, ctx.error));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", ctx.language.contactEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c0, ctx.errorMail || ctx.error));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", ctx.language.contactMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c0, ctx.error));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("siteKey", ctx.siteKey);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.sending);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.sending);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgForm, _loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_7__.LoaderBisRedComponent],
  styles: [".music-contact-mail-to[_ngcontent-%COMP%] {\n  text-transform: initial;\n  color: #e3154f;\n}\n.music-contact-mail-to[_ngcontent-%COMP%]:hover {\n  color: #f0665f;\n}\n\n.error-form[_ngcontent-%COMP%] {\n  background-color: #721c24 !important;\n  border: 1px solid #591e1e !important;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #721c24 !important;\n}\n\n.success-text[_ngcontent-%COMP%] {\n  color: #155724 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zY3NzL3RoZW1lL192YXJpYWJsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxjQ3VFRTtBRHhFTjtBQUVJO0VBQ0ksY0M2RFE7QUQ3RGhCOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxvQ0FBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7QUFESjs7QUFJQTtFQUNJLHlCQUFBO0FBREoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdGhlbWUvdmFyaWFibGUnIDtcclxuXHJcbi5tdXNpYy1jb250YWN0LW1haWwtdG8ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICBjb2xvcjogJHJlZDM7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGNvcHlyaWdodC1hcHAyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZXJyb3ItZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWxlcnQtZGFuZ2VyICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbXVzaWMtZGFyay1iZyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXJyb3ItdGV4dCB7XHJcbiAgICBjb2xvcjogJGFsZXJ0LWRhbmdlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3VjY2Vzcy10ZXh0IHtcclxuICAgIGNvbG9yOiAkYWxlcnQtc3VjY2VzcyAhaW1wb3J0YW50O1xyXG59IiwiJGZvbnQtYXdlc29tZTogRm9udEF3ZXNvbWU7XHJcblxyXG4vL2NvbG9yc1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRibGFjazogIzAwMDtcclxuJHByaW1hcnk6ICMzNTdmZWY7XHJcbiRzZWNvbmRhcnk6ICM0ZTRlNGU7XHJcbiRsaWdodDojMTNCOEVBO1xyXG4kZGFyazogIzRFNTZGMztcclxuXHJcbiRiZy1saWdodDojZjVmNWY4O1xyXG4kYmctbGlnaHQxOiNkMGVkZmY7XHJcbiRiZy1saWdodDI6I2YxZTdlNjtcclxuJGJnLWxpZ2h0MzojYmZiZmJmO1xyXG4kYm9yZGVyLWxpZ2h0OiNmNWY1Zjg7XHJcbiRzaGFkb3ctbGlnaHQ6I2UyZTJlMjtcclxuJHNoYWRvdy1saWdodDI6I2VmZWNlYztcclxuJGhhc2gtY29sb3I6I2JlYmViZTtcclxuJGxpZ2h0ZW4td2hpdGU6I2VlZWVlZTtcclxuJGxpZ2h0ZW4td2hpdGUyOiNmMWYxZjE7XHJcbiRsaWdodC13aGl0ZTojZjdmN2Y3O1xyXG4kd2hpdGUyOiNkYmRiZGI7XHJcbiR3aGl0ZTM6I2MxYzBjMDtcclxuJHdoaXRlNDojZWVlO1xyXG4kd2hpdGU1OiNjZWQ0ZGE7XHJcbiR3aGl0ZTY6I2YwZWVlZTtcclxuJHdoaXRlNzojYzdjN2M3O1xyXG4kd2hpdGU4OiNmYWZhZmI7XHJcbiR3aGl0ZTk6I2Y1ZjVmNTtcclxuJHdoaXRlMTA6I2JkYmRiZDtcclxuJHdoaXRlMTE6I2VjZWFlYTtcclxuJGJvcmRlci13aGl0ZTojZGRkZGRkO1xyXG4kbGlnaHQtaW5uZXI6I2Y4ZjhmODtcclxuJGxpZ2h0ZW4teWVsbG93OiM5NzkxNTQ7XHJcbiRsaWdodGVuLXllbGxvdzI6I2ZmZTNhOTtcclxuJHllbGxvdzojZmZhMjAwO1xyXG4keWVsbG93MjojZmZkMjAwO1xyXG4keWVsbG93MzojZGNlNDAwO1xyXG4keWVsbG93NDojYzA4ODJmO1xyXG4keWVsbG93NTojRUNDODc4O1xyXG4keWVsbG93LW1ldHJvOiAjZGZiYjA0O1xyXG4kYmx1ZTI6IzQxYTNmZjtcclxuJGJsdWUzOiMzYzg0YWQ7XHJcbiRibHVlNDojMGYyNDY5O1xyXG4kYmx1ZTU6IzAwNzJiYjtcclxuJGJsdWU2OiAjMzU3ZmVmO1xyXG4kbGlnaHQtZ3JheTojODg4Nzg3O1xyXG4kZ3JheTogIzgwODA4MDtcclxuJGdyYXkyOiM1MzVlNzI7XHJcbiRncmF5MzojNDY0NTQ1O1xyXG4kZ3JheTQ6IzdiN2I3YztcclxuJGdyYXk1OiM5NDk0OTQ7XHJcbiRncmF5NjojNTk1OTU5O1xyXG4kZ3JheTc6IzljOWM5YztcclxuJGdyYXk4OiNiMWIxYjE7XHJcbiRncmF5OTojOGY4ZTk0O1xyXG4kZ3JheTEwOiMzMzMzMzM7XHJcbiRncmF5MTE6IzZmNmY2ZjtcclxuJGdyYXkxMjojYWNhY2FjO1xyXG4kZ3JheTEzOiNlM2UzZTM7XHJcbiRncmF5MTQ6I2FhYWFhYTtcclxuJGdyYXkxNTojNzc3O1xyXG4kZ3JheTE2OiM2NjY2NjY7XHJcbiRncmF5MTc6IzIxMjEyMTtcclxuJGdyYXkxODojNzU3NTc1O1xyXG4kZ3JheTE5OiMyZDJkMmQ7XHJcbiRoZWFydDojZmIzYjY0O1xyXG4kY29weXJpZ2h0LWFwcDI6I2YwNjY1ZjtcclxuJGNvcHlyaWdodC1hZ2VuY3k6IzFlMzQ3YztcclxuJGNvcHlyaWdodC1zYWFzMTojMDYxNjI1O1xyXG4kY29weS10ZXh0LXJlc3VtZTojOTg5YTlmO1xyXG4kY29weS1iZzojMGMwYzBjO1xyXG4kYmxhY2syOiMwZTBlMGU7XHJcbiRtdXNpYy1kYXJrLWJnOiM1OTFlMWU7XHJcbiRyZWQyOiM2MTEzMWY7XHJcbiRyZWQzOiNlMzE1NGY7XHJcbiRhbGVydC1wcmltYXJ5OiMwMDQwODU7XHJcbiRhbGVydC1zZWNvbmRhcnk6IzM4M2Q0MTtcclxuJGFsZXJ0LXN1Y2Nlc3M6IzE1NTcyNDtcclxuJGFsZXJ0LWluZm86IzBjNTQ2MDtcclxuJGFsZXJ0LXdhcm5pbmc6Izg1NjQwNDtcclxuJGFsZXJ0LWRhbmdlcjojNzIxYzI0O1xyXG4kYWxlcnQtZGFyazojMWIxZTIxO1xyXG4kc3VjY2VzczojMzViNTNlO1xyXG4kYm9yZGVyLWJsb2c6I2YzZjNmMztcclxuJGNvbG9yLWNyZWF0aXZlMTojZWY2NzY3O1xyXG4kYmctY29udGFpbmVyOiMxMzEzMTM7XHJcblxyXG4kY29sb3IyOiNmM2U1ZTQ7XHJcbiRjb2xvcjM6I2Q1ZDVlYztcclxuJGNvbG9yNDojYmNlY2Y3O1xyXG4kY29sb3I1OiNmZmYyY2Y7XHJcbiRjb2xvcjY6I2ZmY2ZjZjtcclxuJGNvbG9yNzojZDFkMWQxO1xyXG5cclxuJG11c2ljLWxpZ2h0OiAjMjMzZTgwO1xyXG4kbXVzaWMtZGFyazogIzFjMjU1YTtcclxuXHJcbiRjb2xvci1ibHVlOiM0YTcxZWY7XHJcbiRyb3VuZC1ib3JkZXI6ICNkZGRkZGQ7XHJcbiRmb250LWdyZXk6ICNhYWFhYWE7XHJcbiRkYXJrLWZvbnQ6ICMyMjIyMjI7XHJcbiRncmV5OiAjNzc3Nzc3O1xyXG4kdGhlbWUtZGVhZnVsdDogIzAwMDtcclxuJGdyZXktYWJvdXQ6ICNmN2Y3Zjc7XHJcbiRmb250LWNvbG9yOiMzMzMzMzM7XHJcbiRzdGFyLXllbGxvdzogI2ZmYTIwMDtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 71450:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/copyright/copyright.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyrightComponent": () => (/* binding */ CopyrightComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/data/config */ 79034);
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/data.service */ 80774);
/* harmony import */ var src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/language.service */ 41552);
/* harmony import */ var src_app_shared_service_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/nav.service */ 21442);
/* harmony import */ var src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/social.service */ 98147);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var _service_politic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/politic.service */ 27534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tap-to-top/tap-to-top.component */ 61916);
/* harmony import */ var _loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loader-bis/loader-bis.component */ 86916);



















const _c0 = function (a0) {
  return [a0];
};
function CopyrightComponent_li_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", !menuItem_r4.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](2, _c0, menuItem_r4.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", menuItem_r4.title, " ");
  }
}
function CopyrightComponent_li_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", !menuItem_r4.type ? null : menuItem_r4.path, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", menuItem_r4.title, " ");
  }
}
function CopyrightComponent_li_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", !menuItem_r4.type ? null : menuItem_r4.path, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", menuItem_r4.title, " ");
  }
}
function CopyrightComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CopyrightComponent_li_6_a_1_Template, 2, 4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CopyrightComponent_li_6_a_2_Template, 2, 2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CopyrightComponent_li_6_a_3_Template, 2, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuItem_r4.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuItem_r4.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", menuItem_r4.type === "extTabLink");
  }
}
function CopyrightComponent_ng_template_10_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h1", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r12.politic.title);
  }
}
function CopyrightComponent_ng_template_10_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "h1", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r13.language.privacyPolicy);
  }
}
function CopyrightComponent_ng_template_10_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 9)(3, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CopyrightComponent_ng_template_10_div_7_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const modal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r11.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r14.politic.document, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r14.language.close, " ");
  }
}
function CopyrightComponent_ng_template_10_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "app-loader-bis");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function CopyrightComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CopyrightComponent_ng_template_10_h1_2_Template, 2, 1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CopyrightComponent_ng_template_10_h1_3_Template, 2, 1, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CopyrightComponent_ng_template_10_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const modal_r11 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](modal_r11.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CopyrightComponent_ng_template_10_div_7_Template, 5, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CopyrightComponent_ng_template_10_div_8_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.politic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.politic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.politic);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.politic === undefined);
  }
}
function CopyrightComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "li")(1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const social_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", social_r21.link, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](social_r21.fa);
  }
}
class CopyrightComponent {
  constructor(navServices, socialService, politicService, dataService, modalService) {
    this.navServices = navServices;
    this.socialService = socialService;
    this.politicService = politicService;
    this.dataService = dataService;
    this.modalService = modalService;
    this.appName = src_app_shared_data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.appName;
    this.year = new Date().getFullYear();
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_5__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.navServices.items.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
    this.dataService.sendGetRequest('/api/socials').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(data => {
      this.socials = data['hydra:member'];
      this.socialService.setSocials(this.socials);
    }, error => {
      this.socials = [];
      this.socialService.setSocials(this.socials);
    });
    this.dataService.sendGetRequest('/api/politics?local.local=' + src_app_shared_service_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService.getLanguageCodeOnly()).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(data => {
      let politics = data['hydra:member'];
      if (politics) {
        this.politic = politics[politics.length - 1];
        this.politicService.setPolitic(this.politic);
      } else {
        this.politic = null;
        this.politicService.setPolitic(null);
      }
    }, error => {
      this.politic = null;
      this.politicService.setPolitic(null);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    });
  }
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) {
  return new (t || CopyrightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_service_nav_service__WEBPACK_IMPORTED_MODULE_3__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_service_social_service__WEBPACK_IMPORTED_MODULE_4__.SocialService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_politic_service__WEBPACK_IMPORTED_MODULE_6__.PoliticService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal));
};
CopyrightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CopyrightComponent,
  selectors: [["app-copyright"]],
  decls: 24,
  vars: 5,
  consts: [[1, "music", "copyright", "copyright-bg"], [1, "container"], [1, "row"], [1, "col-md-5", "col-sm-12"], [1, "link-horizontal"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "copyright-text", "op-text", 3, "click"], ["content", ""], [1, "col-md-2", "col-sm-12"], [1, "text-center"], [1, "justify-content-center"], [1, "m-l-auto", "center-para"], [1, "copyright-text", "text-white", "text-right", "op-text"], ["href", "https://github.com/lucianoBrd", "target", "_blank"], ["routerLinkActive", "active", "class", "copyright-text op-text", 3, "routerLink", 4, "ngIf"], ["class", "copyright-text op-text", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "copyright-text op-text", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 1, "copyright-text", "op-text", 3, "routerLink"], [1, "copyright-text", "op-text", 3, "href"], ["target", "_blank", 1, "copyright-text", "op-text", 3, "href"], [1, "login-modal"], [1, "modal-header"], ["class", "m-b-20 mt-4 ml-2", 4, "ngIf"], ["aria-label", "Close", "data-dismiss", "modal", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], ["class", "modal-body", 4, "ngIf"], ["class", "modal-body text-center", 4, "ngIf"], [1, "m-b-20", "mt-4", "ml-2"], [1, "modal-body"], [3, "innerHTML"], ["aria-label", "Close", "data-dismiss", "modal", 1, "btn", "btn-default", "primary-btn", "m-t-20", 3, "click"], [1, "modal-body", "text-center"]],
  template: function CopyrightComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, CopyrightComponent_li_6_Template, 4, 3, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "li")(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CopyrightComponent_Template_a_click_8_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](11);
        return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx.openVerticallyCentered(_r1));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, CopyrightComponent_ng_template_10_Template, 9, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 4)(15, "ul", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, CopyrightComponent_li_16_Template, 3, 4, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 3)(18, "div", 11)(19, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, " LucianoBrd ");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "app-tap-to-top");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.language.privacyPolicy);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.socials);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" Copyright \u00A9", ctx.year, " ", ctx.appName, " powered by ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkActive, _tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_7__.TapToTopComponent, _loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_8__.LoaderBisComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6906:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/loader-bis-red/loader-bis-red.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderBisRedComponent": () => (/* binding */ LoaderBisRedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaderBisRedComponent {
  constructor() {}
  ngOnInit() {}
}
LoaderBisRedComponent.ɵfac = function LoaderBisRedComponent_Factory(t) {
  return new (t || LoaderBisRedComponent)();
};
LoaderBisRedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderBisRedComponent,
  selectors: [["app-loader-bis-red"]],
  decls: 11,
  vars: 0,
  consts: [[1, "loader-wrapper-bis"], [1, "loader"]],
  template: function LoaderBisRedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".loader-wrapper-bis[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: #e3154f;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyLWJpcy1yZWQvbG9hZGVyLWJpcy1yZWQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3Njc3MvdGhlbWUvX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtQkN3RUU7QUR6RU4iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvdGhlbWUvdmFyaWFibGUnIDtcclxuXHJcbi5sb2FkZXItd3JhcHBlci1iaXMgLmxvYWRlciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcmVkMztcclxufSIsIiRmb250LWF3ZXNvbWU6IEZvbnRBd2Vzb21lO1xyXG5cclxuLy9jb2xvcnNcclxuJHdoaXRlOiAjZmZmO1xyXG4kYmxhY2s6ICMwMDA7XHJcbiRwcmltYXJ5OiAjMzU3ZmVmO1xyXG4kc2Vjb25kYXJ5OiAjNGU0ZTRlO1xyXG4kbGlnaHQ6IzEzQjhFQTtcclxuJGRhcms6ICM0RTU2RjM7XHJcblxyXG4kYmctbGlnaHQ6I2Y1ZjVmODtcclxuJGJnLWxpZ2h0MTojZDBlZGZmO1xyXG4kYmctbGlnaHQyOiNmMWU3ZTY7XHJcbiRiZy1saWdodDM6I2JmYmZiZjtcclxuJGJvcmRlci1saWdodDojZjVmNWY4O1xyXG4kc2hhZG93LWxpZ2h0OiNlMmUyZTI7XHJcbiRzaGFkb3ctbGlnaHQyOiNlZmVjZWM7XHJcbiRoYXNoLWNvbG9yOiNiZWJlYmU7XHJcbiRsaWdodGVuLXdoaXRlOiNlZWVlZWU7XHJcbiRsaWdodGVuLXdoaXRlMjojZjFmMWYxO1xyXG4kbGlnaHQtd2hpdGU6I2Y3ZjdmNztcclxuJHdoaXRlMjojZGJkYmRiO1xyXG4kd2hpdGUzOiNjMWMwYzA7XHJcbiR3aGl0ZTQ6I2VlZTtcclxuJHdoaXRlNTojY2VkNGRhO1xyXG4kd2hpdGU2OiNmMGVlZWU7XHJcbiR3aGl0ZTc6I2M3YzdjNztcclxuJHdoaXRlODojZmFmYWZiO1xyXG4kd2hpdGU5OiNmNWY1ZjU7XHJcbiR3aGl0ZTEwOiNiZGJkYmQ7XHJcbiR3aGl0ZTExOiNlY2VhZWE7XHJcbiRib3JkZXItd2hpdGU6I2RkZGRkZDtcclxuJGxpZ2h0LWlubmVyOiNmOGY4Zjg7XHJcbiRsaWdodGVuLXllbGxvdzojOTc5MTU0O1xyXG4kbGlnaHRlbi15ZWxsb3cyOiNmZmUzYTk7XHJcbiR5ZWxsb3c6I2ZmYTIwMDtcclxuJHllbGxvdzI6I2ZmZDIwMDtcclxuJHllbGxvdzM6I2RjZTQwMDtcclxuJHllbGxvdzQ6I2MwODgyZjtcclxuJHllbGxvdzU6I0VDQzg3ODtcclxuJHllbGxvdy1tZXRybzogI2RmYmIwNDtcclxuJGJsdWUyOiM0MWEzZmY7XHJcbiRibHVlMzojM2M4NGFkO1xyXG4kYmx1ZTQ6IzBmMjQ2OTtcclxuJGJsdWU1OiMwMDcyYmI7XHJcbiRibHVlNjogIzM1N2ZlZjtcclxuJGxpZ2h0LWdyYXk6Izg4ODc4NztcclxuJGdyYXk6ICM4MDgwODA7XHJcbiRncmF5MjojNTM1ZTcyO1xyXG4kZ3JheTM6IzQ2NDU0NTtcclxuJGdyYXk0OiM3YjdiN2M7XHJcbiRncmF5NTojOTQ5NDk0O1xyXG4kZ3JheTY6IzU5NTk1OTtcclxuJGdyYXk3OiM5YzljOWM7XHJcbiRncmF5ODojYjFiMWIxO1xyXG4kZ3JheTk6IzhmOGU5NDtcclxuJGdyYXkxMDojMzMzMzMzO1xyXG4kZ3JheTExOiM2ZjZmNmY7XHJcbiRncmF5MTI6I2FjYWNhYztcclxuJGdyYXkxMzojZTNlM2UzO1xyXG4kZ3JheTE0OiNhYWFhYWE7XHJcbiRncmF5MTU6Izc3NztcclxuJGdyYXkxNjojNjY2NjY2O1xyXG4kZ3JheTE3OiMyMTIxMjE7XHJcbiRncmF5MTg6Izc1NzU3NTtcclxuJGdyYXkxOTojMmQyZDJkO1xyXG4kaGVhcnQ6I2ZiM2I2NDtcclxuJGNvcHlyaWdodC1hcHAyOiNmMDY2NWY7XHJcbiRjb3B5cmlnaHQtYWdlbmN5OiMxZTM0N2M7XHJcbiRjb3B5cmlnaHQtc2FhczE6IzA2MTYyNTtcclxuJGNvcHktdGV4dC1yZXN1bWU6Izk4OWE5ZjtcclxuJGNvcHktYmc6IzBjMGMwYztcclxuJGJsYWNrMjojMGUwZTBlO1xyXG4kbXVzaWMtZGFyay1iZzojNTkxZTFlO1xyXG4kcmVkMjojNjExMzFmO1xyXG4kcmVkMzojZTMxNTRmO1xyXG4kYWxlcnQtcHJpbWFyeTojMDA0MDg1O1xyXG4kYWxlcnQtc2Vjb25kYXJ5OiMzODNkNDE7XHJcbiRhbGVydC1zdWNjZXNzOiMxNTU3MjQ7XHJcbiRhbGVydC1pbmZvOiMwYzU0NjA7XHJcbiRhbGVydC13YXJuaW5nOiM4NTY0MDQ7XHJcbiRhbGVydC1kYW5nZXI6IzcyMWMyNDtcclxuJGFsZXJ0LWRhcms6IzFiMWUyMTtcclxuJHN1Y2Nlc3M6IzM1YjUzZTtcclxuJGJvcmRlci1ibG9nOiNmM2YzZjM7XHJcbiRjb2xvci1jcmVhdGl2ZTE6I2VmNjc2NztcclxuJGJnLWNvbnRhaW5lcjojMTMxMzEzO1xyXG5cclxuJGNvbG9yMjojZjNlNWU0O1xyXG4kY29sb3IzOiNkNWQ1ZWM7XHJcbiRjb2xvcjQ6I2JjZWNmNztcclxuJGNvbG9yNTojZmZmMmNmO1xyXG4kY29sb3I2OiNmZmNmY2Y7XHJcbiRjb2xvcjc6I2QxZDFkMTtcclxuXHJcbiRtdXNpYy1saWdodDogIzIzM2U4MDtcclxuJG11c2ljLWRhcms6ICMxYzI1NWE7XHJcblxyXG4kY29sb3ItYmx1ZTojNGE3MWVmO1xyXG4kcm91bmQtYm9yZGVyOiAjZGRkZGRkO1xyXG4kZm9udC1ncmV5OiAjYWFhYWFhO1xyXG4kZGFyay1mb250OiAjMjIyMjIyO1xyXG4kZ3JleTogIzc3Nzc3NztcclxuJHRoZW1lLWRlYWZ1bHQ6ICMwMDA7XHJcbiRncmV5LWFib3V0OiAjZjdmN2Y3O1xyXG4kZm9udC1jb2xvcjojMzMzMzMzO1xyXG4kc3Rhci15ZWxsb3c6ICNmZmEyMDA7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 57719:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/loader-bis-white/loader-bis-white.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderBisWhiteComponent": () => (/* binding */ LoaderBisWhiteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaderBisWhiteComponent {
  constructor() {}
  ngOnInit() {}
}
LoaderBisWhiteComponent.ɵfac = function LoaderBisWhiteComponent_Factory(t) {
  return new (t || LoaderBisWhiteComponent)();
};
LoaderBisWhiteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderBisWhiteComponent,
  selectors: [["app-loader-bis-white"]],
  decls: 11,
  vars: 0,
  consts: [[1, "loader-wrapper-bis"], [1, "loader"]],
  template: function LoaderBisWhiteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: [".loader-wrapper-bis[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyLWJpcy13aGl0ZS9sb2FkZXItYmlzLXdoaXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlci1iaXMgLmxvYWRlciA+IGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 86916:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/loader-bis/loader-bis.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderBisComponent": () => (/* binding */ LoaderBisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaderBisComponent {
  constructor() {}
  ngOnInit() {}
}
LoaderBisComponent.ɵfac = function LoaderBisComponent_Factory(t) {
  return new (t || LoaderBisComponent)();
};
LoaderBisComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderBisComponent,
  selectors: [["app-loader-bis"]],
  decls: 11,
  vars: 0,
  consts: [[1, "loader-wrapper-bis"], [1, "loader"]],
  template: function LoaderBisComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 90605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class LoaderComponent {
  constructor() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1500);
  }
  ngOnInit() {}
  ngOnDestroy() {}
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)();
};
LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 11,
  vars: 2,
  consts: [[1, "loader-wrapper"], [1, "loader"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div")(3, "div")(4, "div")(5, "div")(6, "div")(7, "div")(8, "div")(9, "div")(10, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
    }
  },
  styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlci5sb2RlcmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 63749:
/*!********************************************************!*\
  !*** ./src/app/shared/components/nav/nav.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/data.service */ 80774);
/* harmony import */ var _service_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/artist.service */ 99588);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation/menu/menu.component */ 43938);









const _c0 = function () {
  return ["/"];
};
class NavComponent {
  constructor(dataService, artistService) {
    this.dataService = dataService;
    this.artistService = artistService;
    this.logoImagePath = _data_config__WEBPACK_IMPORTED_MODULE_2__.ConfigDB.data.apiServer + _data_config__WEBPACK_IMPORTED_MODULE_2__.ConfigDB.data.apiServerLogoImages;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
  }
  ngOnInit() {
    this.dataService.sendGetRequest('/api/artists/last').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(data => {
      this.artist = data;
      this.artistService.setArtist(data);
    }, error => {
      this.artist = null;
      this.artistService.setArtist(null);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  changeSource(event) {
    event.target.src = 'assets/images/logo/logo.png';
  }
}
NavComponent.ɵfac = function NavComponent_Factory(t) {
  return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_artist_service__WEBPACK_IMPORTED_MODULE_1__.ArtistService));
};
NavComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: NavComponent,
  selectors: [["app-nav"]],
  decls: 8,
  vars: 3,
  consts: [[1, "music", "loding-header", "header-fixed"], [1, "container"], [1, "row"], [1, "col"], [1, "d-inline-block", "m-r-auto", 3, "routerLink"], ["alt", "logo", 1, "img-fluid", "img-logo", 3, "src", "error"]],
  template: function NavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "nav")(5, "a", 4)(6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("error", function NavComponent_Template_img_error_6_listener($event) {
        return ctx.changeSource($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "", ctx.logoImagePath, "logo.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent],
  styles: [".img-logo[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWxvZ28ge1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 43938:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/navigation/menu/menu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _service_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/nav.service */ 21442);
/* harmony import */ var src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/text.service */ 44096);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);








function MenuComponent_li_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.setActive(menuItem_r1.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
const _c0 = function (a0) {
  return [a0];
};
function MenuComponent_li_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, menuItem_r1.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", menuItem_r1.title, " ");
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !subChildrenItem_r18.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, subChildrenItem_r18.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("icon-", subChildrenItem_r18.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", subChildrenItem_r18.title, " ");
  }
}
function MenuComponent_li_10_div_5_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_div_5_div_3_li_5_a_1_Template, 3, 7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subChildrenItem_r18.type === "link");
  }
}
function MenuComponent_li_10_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 20)(2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_div_5_div_3_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const childrenItem_r16 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r21.setChildActive(childrenItem_r16.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_div_3_li_5_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const childrenItem_r16 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](menuItem_r1.megaMenuType == "small" ? "col-lg-4" : menuItem_r1.megaMenuType == "medium" ? "col-lg-3" : menuItem_r1.megaMenuType == "large" ? "col" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](childrenItem_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-icon", menuItem_r1.title == "Elements")("openSubChildMenu", ctx_r15.ischildActive(childrenItem_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", childrenItem_r16.children);
  }
}
function MenuComponent_li_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_div_5_div_3_Template, 6, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opensubmenu", ctx_r6.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_li_10_ul_6_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);
      const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.setChildActive(childrenItem_r26.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !childrenItem_r26.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, childrenItem_r26.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !childrenItem_r26.type ? null : childrenItem_r26.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childrenItem_r26.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", !subChildrenItem_r40.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, subChildrenItem_r40.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r40.type ? null : subChildrenItem_r40.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", !subChildrenItem_r40.type ? null : subChildrenItem_r40.path, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", subChildrenItem_r40.title, " ");
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_1_Template, 2, 1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_2_Template, 2, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_3_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_a_4_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subChildrenItem_r40 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", subChildrenItem_r40.type === "extTabLink" && !menuItem_r1.megaMenu);
  }
}
function MenuComponent_li_10_ul_6_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_ul_5_li_1_Template, 5, 4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("openSubChildMenu", ctx_r31.ischildActive(childrenItem_r26.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_a_1_Template, 2, 1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_ul_6_li_1_a_2_Template, 2, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_ul_6_li_1_a_3_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_ul_6_li_1_a_4_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_li_10_ul_6_li_1_ul_5_Template, 2, 3, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r26 = ctx.$implicit;
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sub-menu", childrenItem_r26.children);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "link" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.type === "extTabLink" && !menuItem_r1.megaMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", childrenItem_r26.children);
  }
}
function MenuComponent_li_10_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_ul_6_li_1_Template, 6, 7, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("opensubmenu", ctx_r7.isActive(menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function MenuComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuComponent_li_10_a_1_Template, 2, 1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MenuComponent_li_10_a_2_Template, 2, 4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MenuComponent_li_10_a_3_Template, 2, 2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MenuComponent_li_10_a_4_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuComponent_li_10_div_5_Template, 4, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, MenuComponent_li_10_ul_6_Template, 2, 3, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](menuItem_r1.megaMenu ? "mega-menu" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.megaMenu && menuItem_r1.megaMenuType == "small" || menuItem_r1.megaMenuType == "medium" || menuItem_r1.megaMenuType == "large");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", menuItem_r1.children && !menuItem_r1.megaMenu);
  }
}
class MenuComponent {
  constructor(navServices, router) {
    this.navServices = navServices;
    this.router = router;
    this.openSide = false;
    this.activeItem = 'home';
    this.active = false;
    this.activeChildItem = '';
    this.overlay = false;
    this.url = "";
    this.mobile = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.language = src_app_shared_service_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService.getTextByLocal();
  }
  ngOnInit() {
    this.url = this.router.url;
    this.mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.navServices.items.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
  toggleSidebar() {
    this.openSide = !this.openSide;
  }
  closeOverlay() {
    this.openSide = false;
  }
  //For Active Main menu in Mobile View
  setActive(menuItem) {
    if (this.activeItem === menuItem) {
      this.activeItem = '';
    } else {
      this.activeItem = menuItem;
    }
  }
  isActive(item) {
    return this.activeItem === item;
  }
  // For Active Child Menu in Mobile View
  setChildActive(subMenu) {
    if (this.activeChildItem === subMenu) {
      this.activeChildItem = '';
    } else {
      this.activeChildItem = subMenu;
    }
  }
  ischildActive(subMenu) {
    return this.activeChildItem === subMenu;
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  decls: 11,
  vars: 10,
  consts: [[1, "overlay-sidebar-header", 3, "click"], [1, "responsive-btn"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-bars", "text-white"], ["id", "togglebtn", 1, "navbar", "m-l-auto"], [1, "main-menu"], [3, "class", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "class", "dropdown", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [3, "href", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "mega-menu-container", 3, "opensubmenu", 4, "ngIf"], [3, "opensubmenu", 4, "ngIf"], ["href", "javascript:void(0)", 1, "dropdown", 3, "click"], ["routerLinkActive", "active", 3, "routerLink"], [3, "href"], ["target", "_blank", 3, "href"], [1, "mega-menu-container"], [1, "container"], [1, "row"], [1, "menu-container"], [1, "menu-head", 3, "click"], [4, "ngFor", "ngForOf"], [3, "sub-menu", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [3, "openSubChildMenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], ["href", "javascript:void(0)", 4, "ngIf"], ["href", "javascript:void(0)"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_0_listener() {
        return ctx.closeOverlay();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_2_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "div", 1)(6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_6_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, MenuComponent_li_10_Template, 7, 8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("overlay-sidebar-header-open", ctx.openSide);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-text-shadow", ctx.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("openSidebar", ctx.openSide);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.language.back);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-text-shadow", !ctx.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive],
  styles: [".menu-text-shadow[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-shadow: 0 1px 0px #e3154f, 1px 0 1px #591e1e, 1px 2px 1px #e3154f, 2px 1px 2px #591e1e, 2px 3px 2px #e3154f, 3px 2px 3px #591e1e, 3px 4px 3px #e3154f, 4px -3px 4px #591e1e, 4px -5px 4px #e3154f, 4px 3px 4px #591e1e, -4px 10px 4px #e3154f;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrUEFDSTtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2Fzc2V0cy9zY3NzL3RoZW1lL3ZhcmlhYmxlJyA7XHJcblxyXG4ubWVudS10ZXh0LXNoYWRvdyBhIHtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgIDAgMXB4IDBweCAkcmVkMyxcclxuICAgICAgICAxcHggMCAxcHggJG11c2ljLWRhcmstYmcsXHJcbiAgICAgICAgMXB4IDJweCAxcHggJHJlZDMsXHJcbiAgICAgICAgMnB4IDFweCAycHggJG11c2ljLWRhcmstYmcsXHJcbiAgICAgICAgMnB4IDNweCAycHggJHJlZDMsXHJcbiAgICAgICAgM3B4IDJweCAzcHggJG11c2ljLWRhcmstYmcsXHJcbiAgICAgICAgM3B4IDRweCAzcHggJHJlZDMsXHJcbiAgICAgICAgNHB4IC0zcHggNHB4ICRtdXNpYy1kYXJrLWJnLFxyXG4gICAgICAgIDRweCAtNXB4IDRweCAkcmVkMyxcclxuICAgICAgICA0cHggM3B4IDRweCAkbXVzaWMtZGFyay1iZyxcclxuICAgICAgICAtNHB4IDEwcHggNHB4ICRyZWQzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61916:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tap-to-top/tap-to-top.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TapToTopComponent": () => (/* binding */ TapToTopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);


const _c0 = function (a0, a1) {
  return {
    "tap-top": a0,
    "d-none": a1
  };
};
class TapToTopComponent {
  constructor() {
    this.showScroll = false;
    this.showScrollHeight = 500;
    this.hideScrollHeight = 10;
  }
  ngOnInit() {
    this.showScroll = false;
  }
  onActivate() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 200); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    } else if (this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }
}
TapToTopComponent.ɵfac = function TapToTopComponent_Factory(t) {
  return new (t || TapToTopComponent)();
};
TapToTopComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TapToTopComponent,
  selectors: [["app-tap-to-top"]],
  hostBindings: function TapToTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function TapToTopComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  decls: 3,
  vars: 4,
  consts: [[3, "ngClass", "click"], [1, "fa", "fa-angle-double-up"]],
  template: function TapToTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TapToTopComponent_Template_div_click_0_listener() {
        return ctx.onActivate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.showScroll, !ctx.showScroll));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 79034:
/*!***************************************!*\
  !*** ./src/app/shared/data/config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigDB": () => (/* binding */ ConfigDB)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


class ConfigDB {}
ConfigDB.domain = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? 'localhost:4200' : 'amedeemusic.com';
ConfigDB.data = {
  settings: {
    layout_type: 'ltr',
    layout_version: 'light',
    languageCode: 'en'
  },
  appName: 'AmédéeMusic',
  appContact: 'amedee.management@gmail.com',
  apiServer: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? 'http://127.0.0.1:8000' : 'https://api.' + ConfigDB.domain,
  appServer: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)() ? 'http://' + ConfigDB.domain : 'https://' + ConfigDB.domain,
  apiServerImages: '/uploads/images/',
  apiServerLogoImages: '/assets/logo/',
  siteKey: '6Ldg6RsmAAAAANsjwaOlhb_fimeaaCWvz8rLyBDN',
  keywords: 'amédée,amedee,amédéemusic,amedeemusic,amedeemusique,amédéemusique,amédée musique,amedee musique,amedee music,amédée music,artiste amédée,artiste amedee,chanteur amédée,chanteur amedee'
};
ConfigDB.ɵfac = function ConfigDB_Factory(t) {
  return new (t || ConfigDB)();
};
ConfigDB.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigDB,
  factory: ConfigDB.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 47719:
/*!***************************************!*\
  !*** ./src/app/shared/data/cookie.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cookie": () => (/* binding */ Cookie)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class Cookie {}
Cookie.layoutVersion = 'layoutVersion';
Cookie.layoutType = 'layoutType';
Cookie.languageCode = 'languageCode';
Cookie.coockieDismiss = 'coockieDismiss';
Cookie.coockieDismissed = 'coockieDismissed';
Cookie.ɵfac = function Cookie_Factory(t) {
  return new (t || Cookie)();
};
Cookie.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Cookie,
  factory: Cookie.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 96506:
/*!*************************************************!*\
  !*** ./src/app/shared/service/alert.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 94817);



class AlertService {
  constructor(toastrService) {
    this.toastrService = toastrService;
  }
  showSuccess(success) {
    this.toastrService.success(success);
  }
  showError(error) {
    this.toastrService.error(error);
  }
}
AlertService.ɵfac = function AlertService_Factory(t) {
  return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
};
AlertService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AlertService,
  factory: AlertService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 99588:
/*!**************************************************!*\
  !*** ./src/app/shared/service/artist.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArtistService": () => (/* binding */ ArtistService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class ArtistService {
  constructor() {
    this.artist$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.loadedArtist$ = this.artist$.asObservable();
  }
  setArtist(artist) {
    this.artist$.next(artist);
  }
}
ArtistService.ɵfac = function ArtistService_Factory(t) {
  return new (t || ArtistService)();
};
ArtistService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ArtistService,
  factory: ArtistService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1316:
/*!******************************************************!*\
  !*** ./src/app/shared/service/customizer.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomizerService": () => (/* binding */ CustomizerService)
/* harmony export */ });
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/config */ 79034);
/* harmony import */ var _data_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/cookie */ 47719);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language.service */ 41552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




class CustomizerService {
  constructor() {
    // Configration Layout
    this.data = _data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data;
    /* Set local of navigator */
    this.languageCode = _language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService.getLanguageCodeOnly();
    this.data.settings.languageCode = this.languageCode;
    var layoutVersion = localStorage.getItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.layoutVersion) || this.data.settings.layout_version;
    var layoutType = localStorage.getItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.layoutType) || this.data.settings.layout_type;
    var lc = localStorage.getItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.languageCode) || this.data.settings.languageCode;
    if (layoutVersion) {
      document.body.classList.add(layoutVersion);
      this.data.settings.layout_version = layoutVersion;
    }
    if (layoutType) {
      document.body.classList.add(layoutType);
    }
    if (lc) {
      this.data.settings.languageCode = lc;
    }
    /* Change lang attribute */
    document.documentElement.lang = this.data.settings.languageCode;
  }
  // Set Customize layout Version
  setLayoutVersion(layout) {
    document.body.classList.remove(this.data.settings.layout_version);
    this.data.settings.layout_version = layout;
    document.body.classList.add(layout);
    localStorage.setItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.layoutVersion, layout);
  }
  setLayoutType(layout) {
    document.body.classList.remove(this.data.settings.layout_type);
    this.data.settings.layout_type = layout;
    document.body.classList.add(layout);
    localStorage.setItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.layoutType, layout);
  }
  setLanguage(language) {
    this.data.settings.languageCode = language;
    localStorage.setItem(_data_cookie__WEBPACK_IMPORTED_MODULE_1__.Cookie.languageCode, language);
  }
}
CustomizerService.ɵfac = function CustomizerService_Factory(t) {
  return new (t || CustomizerService)();
};
CustomizerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CustomizerService,
  factory: CustomizerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 80774:
/*!************************************************!*\
  !*** ./src/app/shared/service/data.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8504);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);






class DataService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.REST_API_SERVER = _data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.apiServer;
  }
  handleError(error) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errorMessage));
  }
  sendGetRequest(page) {
    if (page) {
      return this.httpClient.get(this.REST_API_SERVER + page, {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Accept': 'application/ld+json'
        })
      }).pipe(
      //retry(3), 
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
  }
  /**
   *
   * @param page
   * @param body
   * const body = new HttpParams()
   *  .set('username', 'test@test.com')
   *  .set('password', 'Password1')
   *  .set('rolename', 'Admin');
   * @returns
   */
  sendPostRequest(page, body) {
    if (page) {
      return this.httpClient.post(this.REST_API_SERVER + page, body, {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Accept': 'application/ld+json'
        })
      }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError));
    }
  }
}
DataService.ɵfac = function DataService_Factory(t) {
  return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
DataService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: DataService,
  factory: DataService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 33886:
/*!************************************************!*\
  !*** ./src/app/shared/service/form.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormService": () => (/* binding */ FormService)
/* harmony export */ });
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class FormService {
  constructor() {
    this.siteKey = _data_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data.siteKey;
  }
  ValidateEmail(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  }
  getSiteKey() {
    return this.siteKey;
  }
}
FormService.ɵfac = function FormService_Factory(t) {
  return new (t || FormService)();
};
FormService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FormService,
  factory: FormService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 42808:
/*!***************************************************************!*\
  !*** ./src/app/shared/service/jsonDateInterceptor.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonDateInterceptorService": () => (/* binding */ JsonDateInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class JsonDateInterceptorService {
  constructor() {
    this._isoDateFormat = /^\d\d\d\d\/(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01]) (00|[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/g;
  }
  intercept(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(val => {
      if (val instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
        const body = val.body;
        this.convert(body);
      }
      return val;
    }));
  }
  isIsoDateString(value) {
    if (value === null || value === undefined) {
      return false;
    }
    if (typeof value === 'string') {
      return this._isoDateFormat.test(value);
    }
    return false;
  }
  convert(body) {
    if (body === null || body === undefined) {
      return body;
    }
    if (typeof body !== 'object') {
      return body;
    }
    for (const key of Object.keys(body)) {
      const value = body[key];
      if (this.isIsoDateString(value)) {
        body[key] = new Date(value);
      } else if (typeof value === 'object') {
        this.convert(value);
      }
    }
  }
}
JsonDateInterceptorService.ɵfac = function JsonDateInterceptorService_Factory(t) {
  return new (t || JsonDateInterceptorService)();
};
JsonDateInterceptorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: JsonDateInterceptorService,
  factory: JsonDateInterceptorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 41552:
/*!****************************************************!*\
  !*** ./src/app/shared/service/language.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _data_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/cookie */ 47719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class LanguageService {
  constructor() {}
  static getLanguageCodeOnly() {
    /* Check local storage */
    var lc = localStorage.getItem(_data_cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.languageCode);
    if (lc) {
      return lc;
    }
    var languageCode = this.getBrowserLocales({
      languageCodeOnly: true
    });
    if (languageCode) {
      var language = languageCode[0];
      if (language != 'fr') {
        return 'en';
      }
      return language;
    }
    return 'en';
  }
  static getLanguage() {
    /* Check local storage */
    var lc = localStorage.getItem(_data_cookie__WEBPACK_IMPORTED_MODULE_0__.Cookie.languageCode);
    if (lc) {
      if (lc != 'fr') {
        return 'en-EN';
      }
      return 'fr-FR';
    }
    var language = this.getBrowserLocales();
    if (language) {
      var languageCode = this.getLanguageCodeOnly();
      if (languageCode != 'fr') {
        return 'en-EN';
      }
      return language[0];
    }
    return 'en-EN';
  }
  static getBrowserLocales(options = {}) {
    var defaultOptions = {
      languageCodeOnly: false
    };
    var opt = Object.assign(Object.assign({}, defaultOptions), options);
    var browserLocales = navigator.languages === undefined ? [navigator.language] : navigator.languages;
    if (!browserLocales) {
      return undefined;
    }
    return browserLocales.map(locale => {
      var trimmedLocale = locale.trim();
      return opt.languageCodeOnly ? trimmedLocale.split(/-|_/)[0] : trimmedLocale;
    });
  }
}
LanguageService.ɵfac = function LanguageService_Factory(t) {
  return new (t || LanguageService)();
};
LanguageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: LanguageService,
  factory: LanguageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 81930:
/*!************************************************!*\
  !*** ./src/app/shared/service/meta.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MetaService": () => (/* binding */ MetaService)
/* harmony export */ });
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.service */ 44096);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/config */ 79034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);





class MetaService {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.language = _text_service__WEBPACK_IMPORTED_MODULE_0__.TextService.getTextByLocal();
  }
  setTitle(newTitle) {
    this.titleService.setTitle(newTitle + ' | ' + _data_config__WEBPACK_IMPORTED_MODULE_1__.ConfigDB.data.appName);
  }
  setDescription(newDesc) {
    this.metaService.updateTag({
      name: 'description',
      content: newDesc
    });
  }
  setKeywords(newKw) {
    this.metaService.updateTag({
      name: 'keywords',
      content: _data_config__WEBPACK_IMPORTED_MODULE_1__.ConfigDB.data.keywords + newKw
    });
  }
}
MetaService.ɵfac = function MetaService_Factory(t) {
  return new (t || MetaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Meta));
};
MetaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MetaService,
  factory: MetaService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 21442:
/*!***********************************************!*\
  !*** ./src/app/shared/service/nav.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavService": () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.service */ 44096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



class NavService {
  constructor() {
    this.language = _text_service__WEBPACK_IMPORTED_MODULE_0__.TextService.getTextByLocal();
    this.MENUITEMS = [{
      path: '/',
      title: this.language.home,
      type: 'link'
    }, {
      path: '/contact',
      title: this.language.contact,
      type: 'link'
    }];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
  }
}
NavService.ɵfac = function NavService_Factory(t) {
  return new (t || NavService)();
};
NavService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: NavService,
  factory: NavService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 27534:
/*!***************************************************!*\
  !*** ./src/app/shared/service/politic.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliticService": () => (/* binding */ PoliticService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class PoliticService {
  constructor() {
    this.politic$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.loadedPolitic$ = this.politic$.asObservable();
  }
  setPolitic(politic) {
    this.politic$.next(politic);
  }
}
PoliticService.ɵfac = function PoliticService_Factory(t) {
  return new (t || PoliticService)();
};
PoliticService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: PoliticService,
  factory: PoliticService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 61545:
/*!***************************************************!*\
  !*** ./src/app/shared/service/sidebar.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarService": () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SidebarService {
  constructor() {
    this.sidebar$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.project$ = this.sidebar$.asObservable();
  }
  setProject(project) {
    this.sidebar$.next(project);
  }
}
SidebarService.ɵfac = function SidebarService_Factory(t) {
  return new (t || SidebarService)();
};
SidebarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SidebarService,
  factory: SidebarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 98147:
/*!**************************************************!*\
  !*** ./src/app/shared/service/social.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialService": () => (/* binding */ SocialService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class SocialService {
  constructor() {
    this.socials$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
    this.loadedSocials$ = this.socials$.asObservable();
  }
  setSocials(socials) {
    this.socials$.next(socials);
  }
}
SocialService.ɵfac = function SocialService_Factory(t) {
  return new (t || SocialService)();
};
SocialService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SocialService,
  factory: SocialService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44096:
/*!************************************************!*\
  !*** ./src/app/shared/service/text.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.service */ 41552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class TextService {
  static getTextByLocal() {
    if (this.language === 'fr') {
      return this.textFr;
    } else {
      return this.textEn;
    }
  }
}
TextService.language = _language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService.getLanguageCodeOnly();
TextService.textFr = {
  dark: 'Sombre',
  light: 'Clair',
  rtl: 'Dag',
  ltr: 'Gad',
  learnMore: 'Plus d\'information',
  close: 'Fermer',
  cookie: 'En poursuivant votre navigation sur le site, vous acceptez notre utilisation des cookies.',
  home: 'Accueil',
  homeDesc: 'Amédée est un auteur-compositeur-interprète. Il grandit en banlieue lyonnaise.',
  back: 'Retour',
  projects: 'Projets',
  blog: 'Blog',
  contact: 'Contact',
  education: 'Formations',
  cv: 'CV',
  about: 'À propos',
  latestPost: 'derniers articles',
  allPost: 'Retrouvez tous les articles sur le',
  readMore: 'lire la suite',
  viewMore: 'voir plus',
  aboutShadow1: 'À',
  aboutShadow2: 'propos',
  aboutTitle1: 'Je suis là pour',
  aboutTitle2: 'mettre en place vos idées',
  aboutShortContent: 'Etant passionné par l’informatique, j’ai lancé ma propre entreprise. Ma soif de connaissance m’a permis de développer mes compétences et de m’enrichir d’expérience. Les travaux que je peux effectuer sont des solutions pour le web : E-Commerce, site vitrine…',
  privacyPolicy: 'Politique de confidentialité',
  pages: 'pages',
  sitemap: 'Sitemap',
  requestQuote: 'demander un devis',
  headerTitle1: 'Solutions',
  headerTitle2: 'Web',
  projectsSubTitle: 'Mes projets',
  projectsTitle1: 'Les projets qui',
  projectsTitle2: 'me tiennent à coeurs',
  projectsShortContent: 'Les projets m\'ont beaucoup apporté : savoir, analyse, autonomie....',
  servicesSubTitle: 'Mes services',
  servicesTitle1: 'Les services que je',
  servicesTitle2: 'propose',
  servicesShortContent: 'Je ne me contente pas de simplement développer votre projet : je vous propose une étude minutieuse et je peux vous apporter mon expertise pour couvrir tous vos besoins en termes de communication, publicité, référencement…',
  postTags: 'Tags des articles',
  youtube: 'y49onlXlCWE',
  videoTitle: 'Vidéo de présentation',
  videoShortContent: 'Création. Développement. Inspiration.',
  aboutPara: ['Étant passionné par l’informatique, j’ai lancé ma propre entreprise. Ma soif de connaissance m’a permis de développer mes compétences et de m’enrichir d’expérience.', 'Les travaux que je peux effectuer sont des solutions pour le web : E-Commerce, site vitrine…', 'Je peux vous établir gratuitement un devis sur simple demande. La satisfaction du client étant ma priorité, je mettrai tout en œuvre pour répondre à vos attentes et exigences.', 'Je ne me contente pas de simplement développer votre projet : je vous propose une étude minutieuse et je peux vous apporter mon expertise pour couvrir tous vos besoins en termes de communication, publicité, référencement…'],
  years: 'ans',
  blogDesc: 'Retrouvez tous les articles.',
  blogTagDesc: 'Retrouvez tous les articles en lien avec : ',
  blogAllPost: 'Tous les articles',
  post: 'Article',
  postDesc: 'Découvrez cet article très intéressant.',
  postShortContent: 'En espérant que l\'article vous ait plu',
  categories: 'Catégories',
  cvDesc: 'Mon parcours et les compétences que j\'ai pu acquérir sont détaillées sur mon CV.',
  educationDesc: 'Les principales formations que j\'ai suivies durant ma vie sont résumée dans cette page.',
  notFound: '404',
  notFoundDesc: 'La page que vous essayez d\'atteindre n\'est pas disponible actuellement. Cela peut être dû au fait que la page n\'existe pas ou a été déplacée.',
  goHome: 'Retour à l\'accueil',
  notFoundTitle: 'Page non trouvée',
  website: 'Site',
  receiveFile: 'Recevoir par mail le fichier',
  receive: 'Recevoir le fichier',
  receiveSuccess: 'Fichier envoyé avec grand succès ! Vous le recevrez d\'ici peu.',
  comments: 'Commentaire(s)',
  leaveComment: 'Laissez votre commentaire',
  postComment: 'Poster un Commentaire',
  reply: 'Répondre',
  commentMessage: 'Votre commentaire',
  commentSuccess: 'Merci pour votre commentaire',
  search: 'Rechercher',
  listenToMe: 'Écoutez-moi',
  latestNovelty: 'Dernière nouveauté',
  myProjects: 'Mes projets',
  biography: 'Biographie',
  gallery: 'Galerie',
  access: 'Accéder',
  download: 'Télécharger',
  listOfEvents: 'Liste des évènements',
  recentOrUpcomingEvents: 'Évènements récent ou à venir',
  video: 'Vidéo',
  watchNow: 'Visionner',
  seeAllVideo: 'Voir toutes les vidéos',
  lyrics: 'Paroles',
  referringToMe: 'On parle de moi',
  subscribe: 'S\'abonner',
  subscribeSuccess: 'Merci de vous être abonné.',
  subscribeEmail: 'Veuillez saisir votre adresse e-mail',
  subscribeError: 'Une erreur est survenue, merci de réessayer.',
  subscribeInfo: 'Obtenez de l\'information de première main au sujet de',
  contactError: 'Une erreur est survenue, merci de réessayer.',
  contactSuccess: 'Merci pour votre message, je vous répondrais dans les meilleurs délais.',
  send: 'Envoyer',
  contactName: 'Votre nom',
  contactEmail: 'Votre email',
  contactMessage: 'Votre message',
  contactTitle: 'Contactez-moi',
  contactDesc: 'Contactez-moi.',
  cookieMessage: 'Ce site web utilise des cookies pour vous assurer la meilleure expérience de navigation sur notre site.',
  cookieDismiss: 'OK, j\'ai compris!',
  cookieDeny: 'Refuser',
  cookiePolicy: 'Cookie Policy',
  cookieHeader: 'Cookies sur le site!',
  cookieAllow: 'Autoriser les cookies',
  listen: 'Écouter'
};
TextService.textEn = {
  dark: 'Dark',
  light: 'Light',
  rtl: 'Rtl',
  ltr: 'Ltr',
  learnMore: 'Learn more',
  close: 'Close',
  cookie: 'By continuing to browse the site, you\'re agreeing to our use of cookies.',
  home: 'Home',
  homeDesc: 'Amédée is a singer-songwriter. He grew up in the Lyon suburbs.',
  back: 'Back',
  projects: 'Projects',
  blog: 'Blog',
  contact: 'Contact',
  education: 'Education',
  cv: 'CV',
  about: 'About me',
  latestPost: 'latest post',
  allPost: 'Find all the posts on the',
  readMore: 'read more',
  viewMore: 'view more',
  aboutShadow1: 'About',
  aboutShadow2: 'me',
  aboutTitle1: 'I am here',
  aboutTitle2: 'for made your idea',
  aboutShortContent: 'Being passionate about IT, I started my own business. My thirst for knowledge has allowed me to develop my skills and gain experience. The work I can do are solutions for the web: E-Commerce, website showcase…',
  privacyPolicy: 'Privacy policy',
  pages: 'pages',
  sitemap: 'Sitemap',
  requestQuote: 'request a quote',
  headerTitle1: 'Web',
  headerTitle2: 'Solutions',
  projectsSubTitle: 'My projects',
  projectsTitle1: 'Projects that ',
  projectsTitle2: 'matter to me',
  projectsShortContent: 'The projects brought me a lot: knowledge, analysis, autonomy....',
  servicesSubTitle: 'My services',
  servicesTitle1: 'Services I can',
  servicesTitle2: 'provided',
  servicesShortContent: 'I don’t just develop your project: I propose a thorough study and I can bring you my expertise to cover all your needs in terms of communication, advertising, SEO…',
  postTags: 'Post Tags',
  youtube: '2kgaoxoGKrM',
  videoTitle: 'Presentation video',
  videoShortContent: 'Creation. Development. Inspiration.',
  aboutPara: ['Being passionate about IT, I started my own business. My thirst for knowledge has allowed me to develop my skills and gain experience.', 'The work I can do are solutions for the web: E-Commerce, website showcase…', 'I can provide you with a free quote on request. As customer satisfaction is my priority, I will make every effort to meet your expectations and requirements.', 'I don’t just develop your project: I propose a thorough study and I can bring you my expertise to cover all your needs in terms of communication, advertising, SEO…'],
  years: 'years old',
  blogDesc: 'Find all the posts.',
  blogTagDesc: 'Find all posts related to : ',
  blogAllPost: 'All posts',
  post: 'Post',
  postDesc: 'Check out this very interesting post.',
  postShortContent: 'Hoping you enjoyed the post',
  categories: 'Categories',
  cvDesc: 'My background and the skills I was able to acquire are detailed on my CV.',
  educationDesc: 'The main trainings I have taken during my life are summarized in this page.',
  notFound: '404',
  notFoundDesc: 'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.',
  goHome: 'Back to home',
  notFoundTitle: 'Page not found',
  website: 'website',
  receiveFile: 'Receive the file by mail',
  receive: 'Receive the file',
  receiveSuccess: 'File sent with great success ! You will receive it shortly.',
  comments: 'Comment(s)',
  leaveComment: 'Leave you comment',
  postComment: 'Post Comment',
  reply: 'Reply',
  commentMessage: 'Your comment',
  commentSuccess: 'Thank you for your comment',
  search: 'Search',
  listenToMe: 'Listen to me',
  latestNovelty: 'Latest novelty',
  myProjects: 'My projects',
  biography: 'Biography',
  gallery: 'Gallery',
  access: 'Access',
  download: 'Download',
  listOfEvents: 'List of events',
  recentOrUpcomingEvents: 'Recent or upcoming events',
  video: 'Video',
  watchNow: 'Watch Now',
  seeAllVideo: 'See All Video',
  lyrics: 'Lyrics',
  referringToMe: 'They\'re referring to me.',
  subscribe: 'Subscribe',
  subscribeSuccess: 'Thank you for subscribing.',
  subscribeEmail: 'Please enter your email address',
  subscribeError: 'An error has occurred, please try again.',
  subscribeInfo: 'Get first-hand information about',
  contactError: 'An error has occurred, please try again.',
  contactSuccess: 'Thank you for your message, I will answer you as soon as possible.',
  send: 'Send',
  contactName: 'Your name',
  contactEmail: 'Your email',
  contactMessage: 'Your message',
  contactTitle: 'Contact me',
  contactDesc: 'Contact me.',
  cookieMessage: "This website uses cookies to ensure you get the best experience on our website.",
  cookieDismiss: "Got it!",
  cookieDeny: "Refuse cookies",
  cookiePolicy: "Cookie Policy",
  cookieHeader: "Cookies used on the website!",
  cookieAllow: "Allow cookies",
  listen: 'Listen'
};
TextService.ɵfac = function TextService_Factory(t) {
  return new (t || TextService)();
};
TextService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TextService,
  factory: TextService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation/menu/menu.component */ 43938);
/* harmony import */ var _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tap-to-top/tap-to-top.component */ 61916);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ 94817);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ 90605);
/* harmony import */ var _components_loader_bis_white_loader_bis_white_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader-bis-white/loader-bis-white.component */ 57719);
/* harmony import */ var _components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/loader-bis-red/loader-bis-red.component */ 6906);
/* harmony import */ var _components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loader-bis/loader-bis.component */ 86916);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ 56189);
/* harmony import */ var _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/copyright/copyright.component */ 71450);
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ 63749);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ 99191);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
















class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule.forRoot(), ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__.TapToTopComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisComponent, _components_loader_bis_white_loader_bis_white_component__WEBPACK_IMPORTED_MODULE_3__.LoaderBisWhiteComponent, _components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_4__.LoaderBisRedComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__.CopyrightComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__.NavComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_12__.ToastrModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaModule, ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__.RecaptchaFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule],
    exports: [_components_navigation_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _components_loader_bis_loader_bis_component__WEBPACK_IMPORTED_MODULE_5__.LoaderBisComponent, _components_loader_bis_white_loader_bis_white_component__WEBPACK_IMPORTED_MODULE_3__.LoaderBisWhiteComponent, _components_loader_bis_red_loader_bis_red_component__WEBPACK_IMPORTED_MODULE_4__.LoaderBisRedComponent, _components_tap_to_top_tap_to_top_component__WEBPACK_IMPORTED_MODULE_1__.TapToTopComponent, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__.ContactComponent, _components_copyright_copyright_component__WEBPACK_IMPORTED_MODULE_7__.CopyrightComponent, _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__.NavComponent]
  });
})();

/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/pace/pace.min.js */ 42459);
/* harmony import */ var _assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_pace_pace_min_js__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));
});

/***/ }),

/***/ 42459:
/*!*************************************!*\
  !*** ./src/assets/pace/pace.min.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! pace 0.5.3 */
(function () {
  var a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W = [].slice,
    X = {}.hasOwnProperty,
    Y = function (a, b) {
      function c() {
        this.constructor = a;
      }
      for (var d in b) X.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
    },
    Z = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
      return -1;
    };
  for (t = {
    catchupTime: 500,
    initialRate: .03,
    minTime: 500,
    ghostTime: 500,
    maxProgressPerFrame: 10,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, B = function () {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, D = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, s = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == D && (D = function (a) {
    return setTimeout(a, 50);
  }, s = function (a) {
    return clearTimeout(a);
  }), F = function (a) {
    var b, c;
    return b = B(), (c = function () {
      var d;
      return d = B() - b, d >= 33 ? (b = B(), a(d, function () {
        return D(c);
      })) : setTimeout(c, 33 - d);
    })();
  }, E = function () {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? W.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, u = function () {
    var a, b, c, d, e, f, g;
    for (b = arguments[0], d = 2 <= arguments.length ? W.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if (c = d[f]) for (a in c) X.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? u(b[a], e) : b[a] = e);
    return b;
  }, p = function (a) {
    var b, c, d, e, f;
    for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
    return c / b;
  }, w = function (a, b) {
    var c, d, e;
    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;
      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}
    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;
      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];
        for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;
      if (c = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        return i;
      }
    }, a;
  }(), null == window.Pace && (window.Pace = {}), u(Pace, g.prototype), C = Pace.options = u({}, t, window.paceOptions, w()), T = ["ajax", "document", "eventLag", "elements"], P = 0, R = T.length; R > P; P++) J = T[P], C[J] === !0 && (C[J] = t[J]);
  i = function (a) {
    function b() {
      return U = b.__super__.constructor.apply(this, arguments);
    }
    return Y(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }
    return a.prototype.getElement = function () {
      var a;
      if (null == this.el) {
        if (a = document.querySelector(C.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }
      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }
      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b;
      return null == document.querySelector(C.target) ? !1 : (a = this.getElement(), a.children[0].style.width = "" + this.progress + "%", (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? b = "99" : (b = this.progress < 10 ? "0" : "", b += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + b)), this.lastRenderedProgress = this.progress);
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }
    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;
      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), O = window.XMLHttpRequest, N = window.XDomainRequest, M = window.WebSocket, v = function (a, b) {
    var c, d, e, f;
    f = [];
    for (d in b.prototype) try {
      e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
    } catch (g) {
      c = g;
    }
    return f;
  }, z = [], Pace.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("ignore"), c = b.apply(null, a), z.shift(), c;
  }, Pace.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? W.call(arguments, 1) : [], z.unshift("track"), c = b.apply(null, a), z.shift(), c;
  }, I = function (a) {
    var b;
    if (null == a && (a = "GET"), "track" === z[0]) return "force";
    if (!z.length && C.ajax) {
      if ("socket" === a && C.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), Z.call(C.ajax.trackMethods, b) >= 0) return !0;
    }
    return !1;
  }, j = function (a) {
    function b() {
      var a,
        c = this;
      b.__super__.constructor.apply(this, arguments), a = function (a) {
        var b;
        return b = a.open, a.open = function (d, e) {
          return I(d) && c.trigger("request", {
            type: d,
            url: e,
            request: a
          }), b.apply(a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new O(b), a(c), c;
      }, v(window.XMLHttpRequest, O), null != N && (window.XDomainRequest = function () {
        var b;
        return b = new N(), a(b), b;
      }, v(window.XDomainRequest, N)), null != M && C.ajax.trackWebSockets && (window.WebSocket = function (a, b) {
        var d;
        return d = null != b ? new M(a, b) : new M(a), I("socket") && c.trigger("request", {
          type: "socket",
          url: a,
          protocols: b,
          request: d
        }), d;
      }, v(window.WebSocket, M));
    }
    return Y(b, a), b;
  }(h), Q = null, x = function () {
    return null == Q && (Q = new j()), Q;
  }, H = function (a) {
    var b, c, d, e;
    for (e = C.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
      if (-1 !== a.indexOf(b)) return !0;
    } else if (b.test(a)) return !0;
    return !1;
  }, x().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, H(g) ? void 0 : Pace.running || C.restartOnRequestAfter === !1 && "force" !== I(f) ? void 0 : (d = arguments, c = C.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, j;
      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (Pace.restart(), i = Pace.sources, j = [], c = 0, g = i.length; g > c; c++) {
          if (J = i[c], J instanceof a) {
            J.watch.apply(J, d);
            break;
          }
          j.push(void 0);
        }
        return j;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], x().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }
    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, H(e) ? void 0 : (c = "socket" === d ? new m(b) : new n(b), this.elements.push(c));
    }, a;
  }(), n = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
        return h.progress = 100;
      });else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }
    return a;
  }(), m = function () {
    function a(a) {
      var b,
        c,
        d,
        e,
        f = this;
      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
        return f.progress = 100;
      });
    }
    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;
      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b));
    }
    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }
    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, C.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
        b,
        c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }
    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
        b,
        c,
        d,
        e,
        f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = B(), b = setInterval(function () {
        var g;
        return g = B() - c - 50, c = B(), e.push(g), e.length > C.eventLag.sampleCount && e.shift(), a = p(e), ++d >= C.eventLag.minSamples && a < C.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }
    return a;
  }(), l = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = C.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = E(this.source, "progress"));
    }
    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = E(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / C.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, C.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + C.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), K = null, G = null, q = null, L = null, o = null, r = null, Pace.running = !1, y = function () {
    return C.restartOnPushState ? Pace.restart() : void 0;
  }, null != window.history.pushState && (S = window.history.pushState, window.history.pushState = function () {
    return y(), S.apply(window.history, arguments);
  }), null != window.history.replaceState && (V = window.history.replaceState, window.history.replaceState = function () {
    return y(), V.apply(window.history, arguments);
  }), k = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (A = function () {
    var a, c, d, e, f, g, h, i;
    for (Pace.sources = K = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], C[a] !== !1 && K.push(new k[a](C[a]));
    for (i = null != (h = C.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) J = i[d], K.push(new J(C));
    return Pace.bar = q = new b(), G = [], L = new l();
  })(), Pace.stop = function () {
    return Pace.trigger("stop"), Pace.running = !1, q.destroy(), r = !0, null != o && ("function" == typeof s && s(o), o = null), A();
  }, Pace.restart = function () {
    return Pace.trigger("restart"), Pace.stop(), Pace.start();
  }, Pace.go = function () {
    var a;
    return Pace.running = !0, q.render(), a = B(), r = !1, o = F(function (b, c) {
      var d, e, f, g, h, i, j, k, m, n, o, p, s, t, u, v;
      for (k = 100 - q.progress, e = o = 0, f = !0, i = p = 0, t = K.length; t > p; i = ++p) for (J = K[i], n = null != G[i] ? G[i] : G[i] = [], h = null != (v = J.elements) ? v : [J], j = s = 0, u = h.length; u > s; j = ++s) g = h[j], m = null != n[j] ? n[j] : n[j] = new l(g), f &= m.done, m.done || (e++, o += m.tick(b));
      return d = o / e, q.update(L.tick(b, d)), q.done() || f || r ? (q.update(100), Pace.trigger("done"), setTimeout(function () {
        return q.finish(), Pace.running = !1, Pace.trigger("hide");
      }, Math.max(C.ghostTime, Math.max(C.minTime - (B() - a), 0)))) : c();
    });
  }, Pace.start = function (a) {
    u(C, a), Pace.running = !0;
    try {
      q.render();
    } catch (b) {
      i = b;
    }
    return document.querySelector(".pace") ? (Pace.trigger("start"), Pace.go()) : setTimeout(Pace.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Pace;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}).call(this);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map