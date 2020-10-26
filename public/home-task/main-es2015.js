(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"title\">\n    <h1>Kfar Saba City Theater</h1>\n  </div>\n\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\" *ngIf=\"!isLoading && !isError\">\n  <div>\n    <mat-form-field>\n      <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n  <div class=\"table-container\">\n\n    <table mat-table matSort [dataSource]=\"dataSource\">\n\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell  mat-sort-header  *matHeaderCellDef> Title </th>\n        <td mat-cell *matCellDef=\"let movie\">\n          <a [routerLink]=\"['/movie/' + movie.id]\">{{ movie.title }} </a></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"rating\">\n        <th mat-header-cell  mat-sort-header  *matHeaderCellDef> Rating </th>\n        <td mat-cell *matCellDef=\"let movie\"> {{ movie.rating || 'N/A'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"runtime\">\n        <th mat-header-cell *matHeaderCellDef> Duration </th>\n        <td mat-cell *matCellDef=\"let movie\"> {{ movie.runtime | duration }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let movie\"> <img [src]=\"movie.image\" ></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"synopsis\">\n        <th mat-header-cell *matHeaderCellDef> Synopsis </th>\n        <td mat-cell *matCellDef=\"let movie\" [innerHTML]=\"movie.synopsis\"> </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></tr>\n\n    </table>\n  </div>\n\n</div>\n<div *ngIf=\"isLoading\" class=\"loading\">\n  <mat-spinner ></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/movie-details/movie-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie-details\">\n  <button mat-button class=\"back-btn\" [routerLink]=\"['/dashboard']\">Back to Dashboard</button>\n  <div *ngIf=\"isLoading\" class=\"loading\">\n    <mat-spinner ></mat-spinner>\n  </div>\n\n  <div *ngIf=\"!isLoading && !isError\">\n    <div class=\"movie-data\">\n      <div class=\"left-panel\">\n        <img [src]=\"movie.largeimage\"/>\n      </div>\n      <div class=\"right-panel\">\n        <div class=\"item {{prop}}\" *ngFor=\"let prop of properties\">\n          <div class=\"title\">{{prop}}</div>\n          <div class=\"value\">{{movie[prop]}}</div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"synopsis\" [innerHTML]=\"movie.synopsis\"></div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");





const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'movie/:id',
        component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_4__["MovieDetailsComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main .title h1 {\n  background-color: #cdd2f1;\n  margin: 0;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxtaWNoYWx6XFxJZGVhUHJvamVjdHNcXHRlc3RcXGhvbWUtdGFzay9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgLnRpdGxlIGgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NkZDJmMTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluIC50aXRsZSBoMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGQyZjE7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'home-task';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pipes_duration_duration_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/duration/duration.pipe */ "./src/app/pipes/duration/duration.pipe.ts");
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./movie-details/movie-details.component */ "./src/app/movie-details/movie-details.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _pipes_duration_duration_pipe__WEBPACK_IMPORTED_MODULE_9__["DurationPipe"],
            _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_10__["MovieDetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n  padding: 30px;\n}\n.dashboard .table-container {\n  max-height: 45rem;\n  overflow: auto;\n}\n.dashboard .table-container .mat-cell {\n  padding: 10px 20px 10px 10px;\n}\n.dashboard .table-container .mat-column-title {\n  margin-right: 10px !important;\n}\n.dashboard .table-container .mat-column-synopsis {\n  flex: 0 0 20%;\n}\n.dashboard .table-container .mat-column-image img {\n  width: 60px;\n  height: 60px;\n}\n@media only screen and (max-width: 600px) {\n  .dashboard .table-container .mat-column-synopsis {\n    visibility: hidden;\n  }\n}\n.loading {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcbWljaGFselxcSWRlYVByb2plY3RzXFx0ZXN0XFxob21lLXRhc2svc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsNEJBQUE7QUNHTjtBRERJO0VBQ0UsNkJBQUE7QUNHTjtBRERJO0VBQ0UsYUFBQTtBQ0dOO0FEREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dOO0FEREk7RUFDRTtJQUNFLGtCQUFBO0VDR047QUFDRjtBREdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICAudGFibGUtY29udGFpbmVyIHtcclxuICAgIG1heC1oZWlnaHQ6IDQ1cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAubWF0LWNlbGwge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1jb2x1bW4tdGl0bGUgIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWF0LWNvbHVtbi1zeW5vcHNpcyB7XHJcbiAgICAgIGZsZXg6IDAgMCAyMCU7XHJcbiAgICB9XHJcbiAgICAubWF0LWNvbHVtbi1pbWFnZSBpbWcge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAubWF0LWNvbHVtbi1zeW5vcHNpcyB7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuLmxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxufVxyXG4iLCIuZGFzaGJvYXJkIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5kYXNoYm9hcmQgLnRhYmxlLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQ1cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5kYXNoYm9hcmQgLnRhYmxlLWNvbnRhaW5lciAubWF0LWNlbGwge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAxMHB4O1xufVxuLmRhc2hib2FyZCAudGFibGUtY29udGFpbmVyIC5tYXQtY29sdW1uLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGFzaGJvYXJkIC50YWJsZS1jb250YWluZXIgLm1hdC1jb2x1bW4tc3lub3BzaXMge1xuICBmbGV4OiAwIDAgMjAlO1xufVxuLmRhc2hib2FyZCAudGFibGUtY29udGFpbmVyIC5tYXQtY29sdW1uLWltYWdlIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5kYXNoYm9hcmQgLnRhYmxlLWNvbnRhaW5lciAubWF0LWNvbHVtbi1zeW5vcHNpcyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let DashboardComponent = class DashboardComponent {
    constructor(moviesService) {
        this.moviesService = moviesService;
        this.columnsToDisplay = ['title', 'rating', 'runtime', 'synopsis', 'image'];
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnInit() {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.isLoading = true;
        this.isError = false;
        this.moviesSubscriber = this.moviesService.getMoviesObservable()
            .subscribe((movies) => {
            this.dataSource.data = movies;
            this.isLoading = false;
        }, error => {
            this.isError = true;
            console.error('failed to load data:', error);
        });
    }
    doFilter(value) {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
    ngOnDestroy() {
        this.moviesSubscriber.unsubscribe();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
], DashboardComponent.prototype, "sort", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-details {\n  padding: 30px;\n}\n.movie-details .back-btn {\n  float: right;\n}\n.movie-details .loading {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding-top: 30%;\n}\n.movie-details .movie-data {\n  display: flex;\n  padding-bottom: 20px;\n}\n.movie-details .movie-data .right-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.movie-details .movie-data .right-panel .item {\n  padding: 20px;\n}\n.movie-details .movie-data .right-panel .item .title {\n  font-weight: bold;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUtZGV0YWlscy9DOlxcVXNlcnNcXG1pY2hhbHpcXElkZWFQcm9qZWN0c1xcdGVzdFxcaG9tZS10YXNrL3NyY1xcYXBwXFxtb3ZpZS1kZXRhaWxzXFxtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3ZpZS1kZXRhaWxzL21vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRUo7QURBRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0dOO0FERk07RUFDRSxhQUFBO0FDSVI7QURIUTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNLViIsImZpbGUiOiJzcmMvYXBwL21vdmllLWRldGFpbHMvbW92aWUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3ZpZS1kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIC5iYWNrLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5sb2FkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDMwJTtcclxuICB9XHJcbiAgLm1vdmllLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLnJpZ2h0LXBhbmVsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC5pdGVtIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLm1vdmllLWRldGFpbHMge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuLm1vdmllLWRldGFpbHMgLmJhY2stYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1vdmllLWRldGFpbHMgLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAzMCU7XG59XG4ubW92aWUtZGV0YWlscyAubW92aWUtZGF0YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLm1vdmllLWRldGFpbHMgLm1vdmllLWRhdGEgLnJpZ2h0LXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubW92aWUtZGV0YWlscyAubW92aWUtZGF0YSAucmlnaHQtcGFuZWwgLml0ZW0ge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1vdmllLWRldGFpbHMgLm1vdmllLWRhdGEgLnJpZ2h0LXBhbmVsIC5pdGVtIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-details/movie-details.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsComponent", function() { return MovieDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movies/movies.service */ "./src/app/services/movies/movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let MovieDetailsComponent = class MovieDetailsComponent {
    constructor(moviesService, route) {
        this.moviesService = moviesService;
        this.route = route;
        this.properties = ['title', 'id', 'rating', 'released'];
    }
    ngOnInit() {
        this.isLoading = true;
        this.isError = false;
        this.id = this.route.snapshot.paramMap.get('id');
        this.moviesSubscriber = this.moviesService.getMovie(this.id)
            .subscribe((movies) => {
            this.isLoading = false;
            if (movies && movies.length) {
                this.movie = movies[0];
            }
            else {
                this.isError = true;
            }
        }, error => {
            this.isLoading = false;
            this.isError = true;
            console.error('failed to load data:', error);
        });
    }
    ngOnDestroy() {
        this.moviesSubscriber.unsubscribe();
    }
};
MovieDetailsComponent.ctorParameters = () => [
    { type: _services_movies_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
MovieDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-details',
        template: __webpack_require__(/*! raw-loader!./movie-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/movie-details/movie-details.component.html"),
        styles: [__webpack_require__(/*! ./movie-details.component.scss */ "./src/app/movie-details/movie-details.component.scss")]
    })
], MovieDetailsComponent);



/***/ }),

/***/ "./src/app/pipes/duration/duration.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/duration/duration.pipe.ts ***!
  \*************************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DurationPipe = class DurationPipe {
    transform(value) {
        const [_, hours, mins] = value.match(/(?:(\d+)h)?(?:(\d+)m)?/);
        return [hours || 0, mins || 0].map((val) => {
            if (val.length < 2) {
                return '0' + val;
            }
            return val;
        }).join(':');
    }
};
DurationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'duration'
    })
], DurationPipe);



/***/ }),

/***/ "./src/app/services/movies/movies.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/movies/movies.service.ts ***!
  \***************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let MoviesService = class MoviesService {
    constructor(http) {
        this.http = http;
        this.MOVIES_URL = '/movies'; // http://localhost:3000/movies/:id
        this.movies$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.getMovies();
    }
    getMovie(id) {
        return this.http.get(this.MOVIES_URL + '/' + id);
    }
    getMovies() {
        this.http.get(this.MOVIES_URL).subscribe((data) => {
            this.movies$.next(data.map(movie => {
                movie.synopsis = this.clearString(movie.synopsis); // remove weird comment at
                // the end of the synopsis
                return movie;
            }));
        }, error => {
            this.movies$.error(error);
        });
    }
    getMoviesObservable() {
        return this.movies$.asObservable();
    }
    clearString(str) {
        if (str) {
            return str.replace(/<br>.*<\/b>/, '');
        }
        return null;
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MoviesService);



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\michalz\IdeaProjects\test\home-task\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map