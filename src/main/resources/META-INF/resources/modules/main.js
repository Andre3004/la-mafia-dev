(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <router-outlet></router-outlet>\r\n</header>\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\" center\">\r\n\r\n    <mat-form-field fxFlex appearance=\"outline\" class=\"{{classes}}\">\r\n        <mat-label class=\"{{classes}}1\">{{title}}</mat-label>\r\n        <input uppercase [required]=\"!isNotRequired\" #inputFilter type=\"text\" matInput  [matAutocomplete]=\"auto\"\r\n            [disabled]=\"(itemSelected.selected && itemSelected.selected[key]) || isDetail\"\r\n            [value]=\"displayFn(itemSelected.selected)\" name=\"seleted\" (keyup)=\"filterChange(inputFilter.value);\"\r\n            (blur)=\"addRequired()\">\r\n\r\n        <button *ngIf=\"itemSelected.selected && itemSelected.selected[key] && !isDetail\"\r\n            (click)=\"onDeleteEntity($event)\" matTooltip=\"Remover {{title}}\" matSuffix mat-icon-button\r\n            class=\"tc-grey-700 delete-button-hover\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n    </mat-form-field>\r\n\r\n\r\n    <button (click)=\"redirect()\" mat-mini-fab color=\"primary\" style=\"margin: 0 0 22px 13px;\"\r\n        matTooltip=\"Ir para {{title}}\">\r\n        <mat-icon>\r\n            launch\r\n        </mat-icon>\r\n    </button>\r\n\r\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectEntity($event.option.value)\">\r\n        <mat-option [value]=\"null\">Nenhum</mat-option>\r\n        <mat-option *ngFor=\"let value of list.values\" [value]=\"value\">{{displayFn(value)}}\r\n        </mat-option>\r\n    </mat-autocomplete>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/detail-field/detail-field.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/detail-field/detail-field.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <label class=\"md-body-1 lbl\">{{ label }}</label>\r\n  <span class=\"md-body-2 push-top-xs {{valueCSSClass}}\">{{ value }}</span>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"header-container\" autosize>\r\n\r\n    <mat-sidenav #sidenav mode=\"over\">\r\n\r\n        <div style=\"background-color: #b71c1c;padding-bottom: 10px;\"class=\"pad-left-md push-bottom-md\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <h3 style=\"color: white\">MENU</h3>\r\n\r\n            <img src=\"../../../assets/logo.png\" style=\"width: 100px; margin-top: 10px; margin-right: 10px\">\r\n        </div>\r\n        <p *ngFor=\"let menu of menus; last as last\">\r\n            <button *ngIf=\"(menu.onlyFranquiador && !isFranquiado) || (!menu.onlyFranquiador && isFranquiado) || (menu.ambos)\" (click)=\"sidenav.toggle()\" routerLink=\"{{menu.router}}\" fxLayoutAlign=\"start center\" style=\"width: 100%; margin-bottom: 10px;\" mat-button>\r\n                <mat-icon style=\"font-size: 20px !important;\">{{menu.icon}}</mat-icon>\r\n                <label class=\"push-left-md\" style=\"font-size: 20px !important;\">{{menu.title}}</label>\r\n            </button>\r\n\r\n            <mat-divider *ngIf=\"!last && (menu.onlyFranquiador && !isFranquiado) || (!menu.onlyFranquiador && isFranquiado) || (menu.ambos)\" ></mat-divider>\r\n        </p>\r\n    </mat-sidenav>\r\n\r\n    <td-layout-nav class=\"header-toolbar\">\r\n        <div td-toolbar-content fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n            fxFlex>\r\n            <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n            <h2 *ngIf=\"title\" style=\"font-size: 20px !important;font-weight: bold;; color: white; margin-left: 10px !important;\" >{{title | uppercase}}</h2>\r\n            <h2 *ngIf=\"!title\" style=\"font-size: 20px !important;font-weight: bold;; color: white; margin-left: 10px !important;\" >{{'produto' | uppercase}}</h2>\r\n\r\n            <div fxFlex></div>\r\n\r\n\r\n            <button mat-icon-button style=\"color: white; cursor: default !important;\" >\r\n                <mat-icon>account_circle</mat-icon>\r\n            </button>\r\n            <h2 *ngIf=\"title\" style=\"font-size: 20px !important;font-weight: bold;; color: white\" >{{usuarioAutenticado?.usuario | uppercase}} ({{usuarioAutenticado?.perfilUsuario | uppercase}})</h2>\r\n\r\n            <button mat-button class=\"push-left-md push-right-md\" [matMenuTriggerFor]=\"menu\">\r\n                    <mat-icon>exit_to_app</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                <button (click)=\"logout()\" class=\"pad-left-lg\" mat-menu-item>\r\n                    <span class=\"tc-grey-800 mat-body-1\">Sair</span>\r\n                </button>\r\n            </mat-menu>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </td-layout-nav>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/usuario/usuario-form/usuario-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/usuario/usuario-form/usuario-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n<mat-dialog-content>\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n    <div fxLayout=\"row\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input uppercase matInput [(ngModel)]=\"usuario.codigo\" [disabled]=\"true\" name=\"codigo\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\" class=\"push-left-md\">\r\n        <mat-label>Perfil do usuário</mat-label>\r\n        <mat-select [(ngModel)]=\"usuario.perfilUsuario\" name=\"perfilUsuario\" (ngModelChange)=\"changeTipo()\">\r\n          <mat-option [value]=\"'FRANQUEADOR'\">Franqueador</mat-option>\r\n          <mat-option [value]=\"'FRANQUEADO'\">Franqueado</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\" *ngIf=\"usuario.perfilUsuario == 'FRANQUEADO'\">\r\n      <auto-complete-with-redirect fxFlex title=\"Franquia\" key=\"codigo\" link=\"franquia\" displayKey=\"franquia\"\r\n        [displayId]=\"true\" [list]=\"{values: franquias}\" [itemSelected]=\"{selected: usuario.franquia}\"\r\n        [classes]=\"required-class-franquia\"\r\n        (onFilterChange)=\"onListFranquias($event)\" \r\n        (onSelect)=\"usuario.franquia = $event\"\r\n        (onDelete)=\"usuario.franquia = {}\">\r\n      </auto-complete-with-redirect>\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\">\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Usuário</mat-label>\r\n        <input uppercase required [(ngModel)]=\"usuario.usuario\" name=\"nome\" matInput maxlength=\"144\"\r\n          placeholder=\"Digite o nome do usuário\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CPF</mat-label>\r\n        <input uppercase required [textMask]=\"{mask: maskCpf, guide: false}\" [(ngModel)]=\"usuario.cpf\" name=\"cpf\"\r\n          matInput maxlength=\"144\" placeholder=\"Digite seu cpf\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Telefone</mat-label>\r\n        <input uppercase required maxlength=\"50\" [textMask]=\"{mask: maskTelefone, guide:false}\" matInput name=\"telefone\"\r\n          [(ngModel)]=\"usuario.telefone\" placeholder=\"Digite seu telefone\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>E-mail</mat-label>\r\n        <input uppercase required [(ngModel)]=\"usuario.email\" email=\"true\" name=\"email\" type=\"email\" matInput\r\n          maxlength=\"144\" placeholder=\"Digite seu e-mail\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Senha</mat-label>\r\n        <input uppercase matInput type=\"password\" [(ngModel)]=\"usuario.senha\" maxlength=\"144\" name=\"senha\"\r\n          [required]=\"!usuario.codigo\" placeholder=\"Digite sua senha\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Confirmação da senha</mat-label>\r\n        <input uppercase matInput type=\"password\" maxlength=\"144\" [(ngModel)]=\"confSenha\" name=\"confSenha\"\r\n          placeholder=\"Digite sua confirmação da senha\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ usuario.created ? (usuario.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ usuario.updated ? (usuario.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n      color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n      CANCELAR\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/usuario/usuario-list/usuario-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/usuario/usuario-list/usuario-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Usuário</mat-label>\r\n\t\t\t<input uppercase matInput placeholder=\"Pesquisar por nome\" maxlength=\"144\" [(ngModel)]=\"filters.nome\">\r\n\t\t</mat-form-field>\r\n\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Situação</mat-label>\r\n\t\t\t<mat-select placeholder=\"Pesquisar por situação\" [(ngModel)]=\"filters.situacao\">\r\n\t\t\t\t<mat-option [value]=\"null\">\r\n\t\t\t\t\tNenhum\r\n\t\t\t\t</mat-option>\r\n\t\t\t\t<mat-option [value]=\"true\">\r\n\t\t\t\t\tAtivo\r\n\t\t\t\t</mat-option>\r\n\t\t\t\t<mat-option [value]=\"false\">\r\n\t\t\t\t\tDesativo\r\n\t\t\t\t</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t</mat-form-field>\r\n\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>E-mail</mat-label>\r\n\t\t\t<input uppercase matInput placeholder=\"Pesquisar por E-mail\" maxlength=\"144\" [(ngModel)]=\"filters.email\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVO USUÁRIO</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListUsuarios()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\" >\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"nome\" let-usuario=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ usuario?.usuario}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"email\" let-usuario=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ usuario?.email}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-usuario=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"usuario?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!usuario?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-usuario=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar usuário\" stopPropagation (click)=\"$event.stopPropagation(); openForm(usuario)\"\r\n\t\t\t\tmat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!usuario.situacao\" matTooltip=\"Ativar usuário\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoUsuario(usuario)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"usuario.situacao\" matTooltip=\"Excluir/Desativar usuário\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoUsuario(usuario)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [5,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule, appRoutingProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-produto-produto-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-produto-produto-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/produto/produto.module */ "./src/app/modules/produto/produto.module.ts")).then(function (m) { return m.ProdutoModule; }); }
    },
    {
        path: 'compra',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-compra-compra-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-compra-compra-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/compra/compra.module */ "./src/app/modules/compra/compra.module.ts")).then(function (m) { return m.CompraModule; }); }
    },
    {
        path: 'usuario',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../app/modules/usuario/usuario.module */ "./src/app/modules/usuario/usuario.module.ts")).then(function (m) { return m.UsuarioModule; }); }
    },
    {
        path: 'franquia',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-franquia-franquia-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-franquia-franquia-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/franquia/franquia.module */ "./src/app/modules/franquia/franquia.module.ts")).then(function (m) { return m.FranquiaModule; }); }
    },
    {
        path: 'grupo-produto',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-modules-grupo-produto-grupo-produto-module */ "app-modules-grupo-produto-grupo-produto-module").then(__webpack_require__.bind(null, /*! ../app/modules/grupo-produto/grupo-produto.module */ "./src/app/modules/grupo-produto/grupo-produto.module.ts")).then(function (m) { return m.GrupoProdutoModule; }); }
    },
    {
        path: 'mesa',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-mesa-mesa-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-mesa-mesa-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/mesa/mesa.module */ "./src/app/modules/mesa/mesa.module.ts")).then(function (m) { return m.MesaModule; }); }
    },
    {
        path: 'produto',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-produto-produto-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-produto-produto-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/produto/produto.module */ "./src/app/modules/produto/produto.module.ts")).then(function (m) { return m.ProdutoModule; }); }
    },
    {
        path: 'ambiente',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-ambiente-ambiente-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-ambiente-ambiente-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/ambiente/ambiente.module */ "./src/app/modules/ambiente/ambiente.module.ts")).then(function (m) { return m.AmbienteModule; }); },
    },
    {
        path: 'cliente',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-cliente-cliente-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-cliente-cliente-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/cliente/cliente.module */ "./src/app/modules/cliente/cliente.module.ts")).then(function (m) { return m.ClienteModule; }); }
    },
    {
        path: 'fornecedor',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-fornecedor-fornecedor-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-fornecedor-fornecedor-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/fornecedor/fornecedor.module */ "./src/app/modules/fornecedor/fornecedor.module.ts")).then(function (m) { return m.FornecedorModule; }); }
    },
    {
        path: 'cidade',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-cidade-cidade-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-cidade-cidade-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/cidade/cidade.module */ "./src/app/modules/cidade/cidade.module.ts")).then(function (m) { return m.CidadeModule; }); }
    },
    {
        path: 'estado',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-estado-estado-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-estado-estado-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/estado/estado.module */ "./src/app/modules/estado/estado.module.ts")).then(function (m) { return m.EstadoModule; }); }
    },
    {
        path: 'pais',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-pais-pais-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-pais-pais-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/pais/pais.module */ "./src/app/modules/pais/pais.module.ts")).then(function (m) { return m.PaisModule; }); }
    },
    {
        path: 'condicao-pagamento',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-condicao-pagamento-condicao-pagamento-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-condicao-pagamento-condicao-pagamento-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/condicao-pagamento/condicao-pagamento.module */ "./src/app/modules/condicao-pagamento/condicao-pagamento.module.ts")).then(function (m) { return m.CondicaoPagamentoModule; }); }
    },
    {
        path: 'forma-pagamento',
        loadChildren: function () { return __webpack_require__.e(/*! import() | app-modules-forma-pagamento-forma-pagamento-module */ "app-modules-forma-pagamento-forma-pagamento-module").then(__webpack_require__.bind(null, /*! ../app/modules/forma-pagamento/forma-pagamento.module */ "./src/app/modules/forma-pagamento/forma-pagamento.module.ts")).then(function (m) { return m.FormaPagamentoModule; }); }
    },
    {
        path: 'contas-a-pagar',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-contas-a-pagar-contas-a-pagar-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-contas-a-pagar-contas-a-pagar-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/contas-a-pagar/contas-a-pagar.module */ "./src/app/modules/contas-a-pagar/contas-a-pagar.module.ts")).then(function (m) { return m.ContasAPagarModule; }); }
    },
    {
        path: 'contas-a-receber',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-contas-a-receber-contas-a-receber-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-contas-a-receber-contas-a-receber-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/contas-a-receber/contas-a-receber.module */ "./src/app/modules/contas-a-receber/contas-a-receber.module.ts")).then(function (m) { return m.ContasAReceberModule; }); }
    },
    {
        path: 'venda',
        loadChildren: function () { return Promise.all(/*! import() | app-modules-venda-venda-module */[__webpack_require__.e("common"), __webpack_require__.e("app-modules-venda-venda-module")]).then(__webpack_require__.bind(null, /*! ../app/modules/venda/venda.module */ "./src/app/modules/venda/venda.module.ts")).then(function (m) { return m.VendaModule; }); }
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true });
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [routing],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var appRoutingProviders = [];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(autenticacaoService) {
        this.autenticacaoService = autenticacaoService;
        this.title = 'projeto';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.autenticacaoService.usuarioAutenticado();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_2__["AutenticacaoService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _modules_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/usuario/usuario.module */ "./src/app/modules/usuario/usuario.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _modules_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_5__["UsuarioModule"]
            ],
            providers: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["appRoutingProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/autenticacao/autenticacao.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/autenticacao/autenticacao.service.ts ***!
  \*************************************************************/
/*! exports provided: AutenticacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoService", function() { return AutenticacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");



var AutenticacaoService = /** @class */ (function () {
    function AutenticacaoService(usuarioService) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.usuarioAutenticado().then(function (result) {
            _this._usuario = result;
        });
    }
    AutenticacaoService.prototype.usuarioAutenticado = function () {
        if (!this.usuarioPromisse)
            this.usuarioPromisse = this.usuarioService.getAuthenticatedUser().toPromise();
        return this.usuarioPromisse;
    };
    Object.defineProperty(AutenticacaoService.prototype, "isFranquiado", {
        get: function () {
            if (!this._usuario)
                this.usuarioAutenticado().then(function (usuario) {
                    return usuario.perfilUsuario == 'FRANQUEADO';
                });
            else {
                return this._usuario.perfilUsuario == 'FRANQUEADO';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutenticacaoService.prototype, "usuario", {
        get: function () {
            if (!this._usuario)
                this.usuarioAutenticado().then(function (usuario) {
                    return usuario;
                });
            else {
                return this._usuario;
            }
        },
        enumerable: true,
        configurable: true
    });
    AutenticacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], AutenticacaoService);
    return AutenticacaoService;
}());



/***/ }),

/***/ "./src/app/common/autenticacao/auth-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/autenticacao/auth-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var AuthGuard = /** @class */ (function () {
    function AuthGuard(open, autenticacaoService, usuarioService, _router) {
        this.open = open;
        this.autenticacaoService = autenticacaoService;
        this.usuarioService = usuarioService;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.autenticacaoService.usuario) {
            if (next.data.onlyFranquiador && !this.autenticacaoService.isFranquiado || !next.data.onlyFranquiador && this.autenticacaoService.isFranquiado || next.data.ambos) {
                return true;
            }
            this.open.openError("Acesso negado, consulte o administrador.");
            this._router.navigate(['/produto']);
            return false;
        }
        else {
            return this.usuarioService.getAuthenticatedUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (usuario) {
                if ((next.data.onlyFranquiador && !(usuario.perfilUsuario == 'FRANQUEADO') ||
                    !next.data.onlyFranquiador && usuario.perfilUsuario == 'FRANQUEADO') ||
                    next.data.ambos) {
                    return true;
                }
                _this.open.openError("Acesso negado, consulte o administrador.");
                _this._router.navigate(['/produto']);
                return false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
            }));
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"], _autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"], src_generated_services__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hdXRvLWNvbXBsZXRlLXdpdGgtcmVkaXJlY3QvYXV0by1jb21wbGV0ZS13aXRoLXJlZGlyZWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AutoCompleteWithRedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteWithRedirectComponent", function() { return AutoCompleteWithRedirectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutoCompleteWithRedirectComponent = /** @class */ (function () {
    /*-------------------------------------------------------------------
    *                           BEHAVIORs
    *-------------------------------------------------------------------*/
    /**
     *
     */
    function AutoCompleteWithRedirectComponent() {
        this.isDisable = false;
        this.key = "codigo";
        this.link = "usuario";
        this.isDetail = false;
        this.displayId = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemSelected = { selected: {} };
        this.list = { values: [] };
        this.isNotRequired = false;
        this.classes = "";
    }
    /**
     *
     */
    AutoCompleteWithRedirectComponent.prototype.ngOnInit = function () {
    };
    // 
    AutoCompleteWithRedirectComponent.prototype.displayFn = function (entity) {
        if (this.displayId) {
            return entity && entity[this.key] ? entity[this.key] + " - " + entity[this.displayKey] : '';
        }
        else {
            return entity && entity[this.key] ? entity[this.displayKey] : '';
        }
    };
    AutoCompleteWithRedirectComponent.prototype.addRequired = function () {
        var elementInput = document.getElementsByClassName(this.classes)[0];
        var elementLabel = document.getElementsByClassName(this.classes + "1")[0];
        var classes = ["ng-pristine", "ng-invalid", "mat-form-field-invalid", "mat-form-field-hide-placeholder", "ng-touched"];
        if ((!this.itemSelected.selected) || (this.itemSelected.selected && !this.itemSelected.selected[this.key])) {
            classes.forEach(function (c) { if (elementInput)
                elementInput.classList.add(c); });
            if (!this.isNotRequired && elementInput)
                elementLabel.style.color = "#e53935";
        }
        else {
            classes.forEach(function (c) { if (elementInput)
                elementInput.classList.remove(c); });
            if (!this.isNotRequired && elementInput)
                elementLabel.style.color = "rgba(0, 0, 0, 0.6)";
        }
    };
    AutoCompleteWithRedirectComponent.prototype.filterChange = function (filter) {
        this.onFilterChange.emit(filter);
    };
    AutoCompleteWithRedirectComponent.prototype.onSelectEntity = function (entity) {
        this.itemSelected.selected = entity;
        this.onSelect.emit(entity);
        this.addRequired();
    };
    AutoCompleteWithRedirectComponent.prototype.onDeleteEntity = function (event) {
        this.itemSelected.selected = null;
        this.onDelete.emit();
        this.filterChange('');
        this.addRequired();
    };
    AutoCompleteWithRedirectComponent.prototype.redirect = function () {
        var win = window.open("http://localhost:4200/#/" + this.link, '_blank');
        win.focus();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutoCompleteWithRedirectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AutoCompleteWithRedirectComponent.prototype, "isDisable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutoCompleteWithRedirectComponent.prototype, "displayKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutoCompleteWithRedirectComponent.prototype, "key", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AutoCompleteWithRedirectComponent.prototype, "link", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AutoCompleteWithRedirectComponent.prototype, "isDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AutoCompleteWithRedirectComponent.prototype, "displayId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutoCompleteWithRedirectComponent.prototype, "onFilterChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutoCompleteWithRedirectComponent.prototype, "onDelete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AutoCompleteWithRedirectComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutoCompleteWithRedirectComponent.prototype, "itemSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutoCompleteWithRedirectComponent.prototype, "list", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutoCompleteWithRedirectComponent.prototype, "isNotRequired", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AutoCompleteWithRedirectComponent.prototype, "classes", void 0);
    AutoCompleteWithRedirectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'auto-complete-with-redirect',
            template: __webpack_require__(/*! raw-loader!./auto-complete-with-redirect.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.html"),
            styles: [__webpack_require__(/*! ./auto-complete-with-redirect.component.scss */ "./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AutoCompleteWithRedirectComponent);
    return AutoCompleteWithRedirectComponent;
}());



/***/ }),

/***/ "./src/app/common/detail-field/detail-field.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/common/detail-field/detail-field.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2RldGFpbC1maWVsZC9DOlxcZGV2XFxsYS1tYWZpYS1kZXZcXHNyY1xcbWFpblxcdHMvc3JjXFxhcHBcXGNvbW1vblxcZGV0YWlsLWZpZWxkXFxkZXRhaWwtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9kZXRhaWwtZmllbGQvZGV0YWlsLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsaUJBQUE7QUNBSCIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9kZXRhaWwtZmllbGQvZGV0YWlsLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibFxyXG57XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiLmxibCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/detail-field/detail-field.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/detail-field/detail-field.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailFieldComponent", function() { return DetailFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailFieldComponent = /** @class */ (function () {
    /*-------------------------------------------------------------------
    *                           BEHAVIORs
    *-------------------------------------------------------------------*/
    /**
     *
     */
    function DetailFieldComponent() {
    }
    /**
     *
     */
    DetailFieldComponent.prototype.ngOnInit = function () {
        this.value = (this.value && this.value.length) ? this.value : '-';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DetailFieldComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DetailFieldComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DetailFieldComponent.prototype, "valueCSSClass", void 0);
    DetailFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'detail-field',
            template: __webpack_require__(/*! raw-loader!./detail-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/detail-field/detail-field.component.html"),
            styles: [__webpack_require__(/*! ./detail-field.component.scss */ "./src/app/common/detail-field/detail-field.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailFieldComponent);
    return DetailFieldComponent;
}());



/***/ }),

/***/ "./src/app/common/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/common/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.dropdown-menu {\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  padding: 20px;\n  width: 280px;\n}\n\n.rounded-logo {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  align-content: center;\n  background-color: #4ea4b1;\n}\n\n.empresa-item {\n  padding: 10px 30px;\n}\n\n.delete-button {\n  color: black;\n  cursor: pointer;\n}\n\n.delete-button:hover {\n  color: red !important;\n}\n\n.div-recursos {\n  cursor: pointer;\n}\n\n.goToStore {\n  cursor: pointer;\n  color: black;\n}\n\n.goToStore:hover {\n  color: #66a1ad;\n}\n\n.hidden {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2hlYWRlci9DOlxcZGV2XFxsYS1tYWZpYS1kZXZcXHNyY1xcbWFpblxcdHMvc3JjXFxhcHBcXGNvbW1vblxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNBTjs7QURJRTtFQUNFLGtCQUFBO0FDREo7O0FETUE7RUFFRSxZQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE1BO0VBQ0UscUJBQUE7QUNIRjs7QURNQTtFQUVFLGVBQUE7QUNKRjs7QURPQTtFQUVFLGVBQUE7RUFDQSxZQUFBO0FDTEY7O0FEUUE7RUFFRSxjQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1tZW51e1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuICAucm91bmRlZC1sb2dvXHJcbiAge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlYTRiMTtcclxuICBcclxuICB9XHJcblxyXG4gIC5lbXByZXNhLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbi5kZWxldGUtYnV0dG9uXHJcbntcclxuICBjb2xvcjpibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRlbGV0ZS1idXR0b246aG92ZXJ7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGl2LXJlY3Vyc29zXHJcbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5nb1RvU3RvcmVcclxue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogYmxhY2s7IFxyXG59XHJcblxyXG4uZ29Ub1N0b3JlOmhvdmVyXHJcbntcclxuICBjb2xvcjogIzY2YTFhZDsgXHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuLnJvdW5kZWQtbG9nbyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGVhNGIxO1xufVxuXG4uZW1wcmVzYS1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuXG4uZGVsZXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmRpdi1yZWN1cnNvcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdvVG9TdG9yZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ29Ub1N0b3JlOmhvdmVyIHtcbiAgY29sb3I6ICM2NmExYWQ7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");




var HeaderComponent = /** @class */ (function () {
    /*-------------------------------------------------------------------
    *                           CONSTRUCTOR
    *-------------------------------------------------------------------*/
    /**
     *
     * @param pessoaService
     */
    function HeaderComponent(autenticacaoService, activatedRoute, detectionRef, router) {
        var _this = this;
        this.autenticacaoService = autenticacaoService;
        this.activatedRoute = activatedRoute;
        this.detectionRef = detectionRef;
        this.router = router;
        /*-------------------------------------------------------------------
        *                           ATRIBUTES
        *-------------------------------------------------------------------*/
        this.title = "";
        this.menus = [
            { title: "Ambientes", icon: 'event_seat', router: 'ambiente' },
            { title: "Cidade", icon: 'location_on', router: 'cidade', onlyFranquiador: true },
            { title: "Clientes", icon: 'people', router: 'cliente' },
            { title: "Compra", icon: 'shopping_cart', router: 'compra' },
            { title: "Condições de pagamentos", icon: 'attach_money', router: 'condicao-pagamento' },
            { title: "Contas á pagar", icon: 'work', router: 'contas-a-pagar' },
            { title: "Contas á receber", icon: 'card_giftcard', router: 'contas-a-receber' },
            { title: "Estado", icon: 'location_on', router: 'estado', onlyFranquiador: true },
            { title: "Formas de pagamentos", icon: 'payment', router: 'forma-pagamento' },
            { title: "Fornecedores", icon: 'people_outline', router: 'fornecedor', ambos: true },
            { title: "Franquias", icon: 'business', router: 'franquia', onlyFranquiador: true },
            { title: "Grupo de produtos", icon: 'style', router: 'grupo-produto', onlyFranquiador: true },
            { title: "Mesas", icon: 'local_bar', router: 'mesa' },
            { title: "País", icon: 'location_on', router: 'pais', onlyFranquiador: true },
            { title: "Produtos", icon: 'assignment_turned_in', router: 'produto', ambos: true },
            { title: "Usuários", icon: 'account_circle', router: 'usuario', onlyFranquiador: true },
            { title: "Venda", icon: 'gavel', router: 'venda' },
        ];
        this.isFranquiado = false;
        this.usuarioAutenticado = {};
        router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivationStart"]) {
                _this.title = e.snapshot.data.title;
            }
        });
    }
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autenticacaoService.usuarioAutenticado().then(function (result) {
            _this.usuarioAutenticado = _this.autenticacaoService.usuario;
            _this.isFranquiado = _this.autenticacaoService.isFranquiado;
        });
    };
    HeaderComponent.prototype.logout = function () {
        window.location.href = '/logout';
    };
    /**
     *
     */
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_3__["AutenticacaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/common/open-snackbar/open-snackbar.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/open-snackbar/open-snackbar.service.ts ***!
  \***************************************************************/
/*! exports provided: OpenSnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenSnackBarService", function() { return OpenSnackBarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var OpenSnackBarService = /** @class */ (function () {
    function OpenSnackBarService(snackbar) {
        this.snackbar = snackbar;
    }
    OpenSnackBarService.prototype.openSuccess = function (message, time) {
        if (time === void 0) { time = 5000; }
        this.snackbar.open(message, 'Fechar', {
            duration: time,
            panelClass: ["bgc-green-700", "tc-grey-50", "my-snack-bar"]
        });
    };
    OpenSnackBarService.prototype.openError = function (message, time) {
        if (time === void 0) { time = 5000; }
        this.snackbar.open(message, 'Fechar', {
            duration: time,
            panelClass: ["bgc-red-700", "tc-grey-50", "my-snack-bar"]
        });
    };
    OpenSnackBarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], OpenSnackBarService);
    return OpenSnackBarService;
}());



/***/ }),

/***/ "./src/app/common/pagination/pagination.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/pagination/pagination.service.ts ***!
  \*********************************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationService = /** @class */ (function () {
    function PaginationService() {
    }
    /** PAGINATION SERVICE */
    /**
   * Cria um pageRequest com as informações passadas
   * @param sortProperty Atributo que irá ordenar a grid por padrão
   * @param sortDirection Ordem por ASC ou DESC
   * @param size Quantidade de dados exibidos na tela (Ex: 5, 10, 15, 20, etc.)
   */
    PaginationService.prototype.pageRequest = function (sortProperty, sortDirection, size) {
        if (size === void 0) { size = 5; }
        var pageRequest = {
            content: [],
            totalPages: 0,
            pageable: {
                page: 0,
                size: size,
                sort: {
                    orders: [{
                            direction: sortDirection,
                            property: sortProperty,
                            nullHandlingHint: "NATIVE"
                        }]
                }
            }
        };
        return pageRequest;
    };
    /**
     * Configura o objeto de sort
     * @param sortEvent
     */
    PaginationService.prototype.sort = function (sortEvent) {
        /*this.model.pageRequest.pageable.sort*/
        var sort = {
            orders: [{
                    direction: sortEvent.order.toString() == 'ASC' ? 'ASC' : 'DESC',
                    property: sortEvent.name,
                    nullHandlingHint: "NATIVE"
                }]
        };
        return sort;
    };
    /**
     *
     * @param result
     * @param pageRequest
     */
    PaginationService.prototype.fixPageRequest = function (result, pageRequest) {
        var pages = Math.ceil(result.totalElements / result.size);
        var fixedPageRequest = {
            content: result.content ? result.content : result,
            totalElements: result.totalElements,
            numberOfElements: result.numberOfElements,
            totalPages: pages,
            pageable: {
                page: result.number,
                size: result.size,
                sort: {
                    orders: [{
                            direction: pageRequest.pageable.sort.orders[0].direction,
                            property: pageRequest.pageable.sort.orders[0].property,
                            nullHandlingHint: "NATIVE"
                        }]
                }
            }
        };
        return fixedPageRequest;
    };
    PaginationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/common/shared-common.module.ts":
/*!************************************************!*\
  !*** ./src/app/common/shared-common.module.ts ***!
  \************************************************/
/*! exports provided: SharedCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedCommonModule", function() { return SharedCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var src_generated_generated_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/generated.module */ "./src/generated/generated.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_generated_services_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/generated/services-wrapper */ "./src/generated/services-wrapper.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _uppercase_uppercase_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./uppercase/uppercase.directive */ "./src/app/common/uppercase/uppercase.directive.ts");
/* harmony import */ var _detail_field_detail_field_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./detail-field/detail-field.component */ "./src/app/common/detail-field/detail-field.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _auto_complete_with_redirect_auto_complete_with_redirect_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auto-complete-with-redirect/auto-complete-with-redirect.component */ "./src/app/common/auto-complete-with-redirect/auto-complete-with-redirect.component.ts");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_18___default.a);
var SharedCommonModule = /** @class */ (function () {
    function SharedCommonModule() {
    }
    SharedCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _uppercase_uppercase_directive__WEBPACK_IMPORTED_MODULE_15__["UppercaseDirective"],
                _detail_field_detail_field_component__WEBPACK_IMPORTED_MODULE_16__["DetailFieldComponent"],
                _auto_complete_with_redirect_auto_complete_with_redirect_component__WEBPACK_IMPORTED_MODULE_19__["AutoCompleteWithRedirectComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                src_generated_generated_module__WEBPACK_IMPORTED_MODULE_3__["GeneratedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentLayoutModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentStepsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentChipsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentFileModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentExpansionPanelModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentPagingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentLoadingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentMediaModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentMessageModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentCommonModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentDataTableModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentDialogsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentSearchModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_17__["CurrencyMaskModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]
            ],
            providers: [
                _open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_11__["OpenSnackBarService"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["TdLayoutComponent"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["TdDialogService"],
                {
                    provide: src_generated_services_wrapper__WEBPACK_IMPORTED_MODULE_12__["BROKER_CONFIGURATION"],
                    useValue: {
                        path: '/broker',
                        useMoment: true
                    }
                },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MAT_DATE_LOCALE"], useValue: 'pt-BR' },
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _uppercase_uppercase_directive__WEBPACK_IMPORTED_MODULE_15__["UppercaseDirective"],
                _detail_field_detail_field_component__WEBPACK_IMPORTED_MODULE_16__["DetailFieldComponent"],
                _auto_complete_with_redirect_auto_complete_with_redirect_component__WEBPACK_IMPORTED_MODULE_19__["AutoCompleteWithRedirectComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                src_generated_generated_module__WEBPACK_IMPORTED_MODULE_3__["GeneratedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_14__["TextMaskModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_17__["CurrencyMaskModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentLayoutModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentStepsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentChipsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentFileModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentExpansionPanelModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentPagingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentLoadingModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentMediaModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentMessageModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentCommonModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentDataTableModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentDialogsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_6__["CovalentSearchModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"]
            ],
            entryComponents: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], SharedCommonModule);
    return SharedCommonModule;
}());



/***/ }),

/***/ "./src/app/common/uppercase/uppercase.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/uppercase/uppercase.directive.ts ***!
  \*********************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UppercaseDirective = /** @class */ (function () {
    function UppercaseDirective() {
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UppercaseDirective.prototype.onInputChange = function ($event) {
        console.log($event);
        this.value = $event.target.value.toUpperCase();
        this.ngModelChange.emit(this.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], UppercaseDirective.prototype, "ngModelChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], UppercaseDirective.prototype, "onInputChange", null);
    UppercaseDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[uppercase]'
        })
    ], UppercaseDirective);
    return UppercaseDirective;
}());



/***/ }),

/***/ "./src/app/modules/usuario/usuario-form/usuario-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/usuario/usuario-form/usuario-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXN1YXJpby91c3VhcmlvLWZvcm0vdXN1YXJpby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/usuario/usuario-form/usuario-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/usuario/usuario-form/usuario-form.component.ts ***!
  \************************************************************************/
/*! exports provided: UsuarioFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioFormComponent", function() { return UsuarioFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");






var UsuarioFormComponent = /** @class */ (function () {
    function UsuarioFormComponent(usuarioService, openSnackBarService, franquiaService, dialogRef, autenticacaoService, data) {
        this.usuarioService = usuarioService;
        this.openSnackBarService = openSnackBarService;
        this.franquiaService = franquiaService;
        this.dialogRef = dialogRef;
        this.autenticacaoService = autenticacaoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.usuario = { franquia: {}, perfilUsuario: 'FRANQUEADO' };
        this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskTelefone = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.confSenha = null;
        if (data.usuarioId != null) {
            this.onFindUsuarioById(data.usuarioId);
        }
        this.onListFranquias("");
    }
    UsuarioFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.data.usuarioId)
                    this.title = "Alterar usuário";
                else
                    this.title = "Inserir usuário";
                this.type = this.autenticacaoService.usuario.perfilUsuario;
                return [2 /*return*/];
            });
        });
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    UsuarioFormComponent.prototype.onFindUsuarioById = function (usuarioId) {
        var _this = this;
        this.usuarioService.findUsuarioById(usuarioId).subscribe(function (usuario) {
            _this.usuario = usuario;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    UsuarioFormComponent.prototype.changeTipo = function () {
        if (this.usuario.perfilUsuario == 'FRANQUEADOR') {
            this.usuario.franquia = null;
        }
    };
    UsuarioFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (this.usuario.perfilUsuario == 'FRANQUEADO' && (!this.usuario.franquia || (this.usuario.franquia && !this.usuario.franquia.codigo))) {
            this.openSnackBarService.openError("O campo franquia deve ser preenchido.");
            return;
        }
        if (typeof this.usuario.cpf == "string") {
            this.usuario.cpf = this.usuario.cpf.replace(/\.|-/gi, '');
            if (!this.validaCPF(this.usuario.cpf)) {
                this.openSnackBarService.openError('O campo CPF está inválido.');
                return;
            }
        }
        if (this.usuario.telefone) {
            var numb = this.usuario.telefone.match(/\d/g);
            var numbString = numb.join("").toString();
            if (numbString.length != 11) {
                this.openSnackBarService.openError('O campo telefone está inválido.');
                return;
            }
        }
        else {
            this.usuario.telefone = this.usuario.telefone.replace(/\.|-/gi, '');
        }
        if (this.usuario.senha && (this.usuario.senha != this.confSenha)) {
            this.openSnackBarService.openError('O campo senha e confimação não conferem.');
            return;
        }
        if (!this.usuario.codigo) {
            this.usuarioService.insertUsuario(this.usuario).subscribe(function (usuario) {
                _this.openSnackBarService.openSuccess("Usuario salvo com sucesso.");
                _this.dialogRef.close(_this.usuario);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
        else {
            this.usuarioService.updateUsuario(this.usuario).subscribe(function (usuario) {
                _this.openSnackBarService.openSuccess("Usuario atualizado com sucesso.");
                _this.dialogRef.close(_this.usuario);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
    };
    /**
       * Método para validar o cpf do usuário
       * fonte: https://www.geradorcpf.com/javascript-validar-cpf.htm
       * @param strCPF
       */
    UsuarioFormComponent.prototype.validaCPF = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    };
    UsuarioFormComponent.prototype.onListFranquias = function (filter) {
        var _this = this;
        this.franquiaService.listFranquiasByFilters(filter ? filter : "", "", null).subscribe(function (franquiaPage) {
            _this.franquias = franquiaPage.content.filter(function (c) { return c.situacao; });
        });
    };
    UsuarioFormComponent.prototype.displayFn = function (franquia) {
        return franquia ? franquia.franquia : undefined;
    };
    UsuarioFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-form',
            template: __webpack_require__(/*! raw-loader!./usuario-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/usuario/usuario-form/usuario-form.component.html"),
            styles: [__webpack_require__(/*! ./usuario-form.component.scss */ "./src/app/modules/usuario/usuario-form/usuario-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["FranquiaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoService"], Object])
    ], UsuarioFormComponent);
    return UsuarioFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/usuario/usuario-list/usuario-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/usuario/usuario-list/usuario-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXN1YXJpby91c3VhcmlvLWxpc3QvdXN1YXJpby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/usuario/usuario-list/usuario-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/usuario/usuario-list/usuario-list.component.ts ***!
  \************************************************************************/
/*! exports provided: UsuarioListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioListComponent", function() { return UsuarioListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario-form/usuario-form.component */ "./src/app/modules/usuario/usuario-form/usuario-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var UsuarioListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param usuarioService
     */
    function UsuarioListComponent(dialog, _dialogService, paginationService, openSnackBarService, usuarioService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.usuarioService = usuarioService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            nome: '',
            situacao: null,
            email: ''
        };
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'nome', label: 'USUÁRIO', sortable: false },
            { name: 'email', label: 'E-MAIL', sortable: false },
            { name: 'telefone', label: 'TELEFONE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 5);
    }
    UsuarioListComponent.prototype.ngOnInit = function () {
        this.onListUsuarios();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    UsuarioListComponent.prototype.onListUsuarios = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.usuarioService.listUsuariosByFilters(this.filters.nome, this.filters.situacao, this.filters.email, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    UsuarioListComponent.prototype.clearFilters = function () {
        this.filters = {
            nome: '',
            situacao: null,
            email: ''
        };
        this.onListUsuarios();
    };
    UsuarioListComponent.prototype.openForm = function (usuario) {
        var _this = this;
        var dialogRef = this.dialog.open(_usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioFormComponent"], {
            width: '600px',
            height: 'auto',
            data: { usuarioId: usuario ? usuario.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (usuarioSaved) {
            if (usuarioSaved)
                _this.onListUsuarios();
        });
    };
    UsuarioListComponent.prototype.atualizarSituacaoUsuario = function (usuario) {
        var _this = this;
        if (usuario.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este usuario ?",
                title: "Excluir usuario",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.usuarioService.deleteUsuario(usuario.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Usuario excluído com sucesso.');
                        _this.onListUsuarios();
                    }, function (err) {
                        if (err.exception.javaClassName == 'java.lang.IllegalArgumentException') {
                            _this.openSnackBarService.openError(err.message);
                        }
                        else
                            _this._dialogService.openConfirm({
                                message: "Não foi possível excluir este usuario pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                                title: "Desativar usuario",
                                cancelButton: 'CANCELAR',
                                acceptButton: 'CONFIRMAR',
                                width: '500px'
                            }).afterClosed().subscribe(function (accept) {
                                if (accept) {
                                    _this.usuarioService.updateSituacaoUsuario(usuario.codigo, !usuario.situacao).subscribe(function (result) {
                                        _this.openSnackBarService.openSuccess('Usuario desativado com sucesso.');
                                        _this.onListUsuarios();
                                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                                }
                            });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta usuario ?",
                title: "Ativar usuario",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.usuarioService.updateSituacaoUsuario(usuario.codigo, !usuario.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Usuario ativado com sucesso.');
                        _this.onListUsuarios();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    UsuarioListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListUsuarios(false);
    };
    UsuarioListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-list',
            template: __webpack_require__(/*! raw-loader!./usuario-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/usuario/usuario-list/usuario-list.component.html"),
            styles: [__webpack_require__(/*! ./usuario-list.component.scss */ "./src/app/modules/usuario/usuario-list/usuario-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]])
    ], UsuarioListComponent);
    return UsuarioListComponent;
}());



/***/ }),

/***/ "./src/app/modules/usuario/usuario.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/usuario/usuario.module.ts ***!
  \***************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuario-list/usuario-list.component */ "./src/app/modules/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var _usuario_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario.routing */ "./src/app/modules/usuario/usuario.routing.ts");
/* harmony import */ var _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario-form/usuario-form.component */ "./src/app/modules/usuario/usuario-form/usuario-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioListComponent"],
                _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioFormComponent"],
            ],
            imports: [
                _usuario_routing__WEBPACK_IMPORTED_MODULE_3__["UsuarioRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_2__["UsuarioListComponent"],
                _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioFormComponent"],
                _usuario_routing__WEBPACK_IMPORTED_MODULE_3__["UsuarioRouting"]
            ],
            entryComponents: [
                _usuario_form_usuario_form_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioFormComponent"]
            ],
            providers: []
        })
    ], UsuarioModule);
    return UsuarioModule;
}());



/***/ }),

/***/ "./src/app/modules/usuario/usuario.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/usuario/usuario.routing.ts ***!
  \****************************************************/
/*! exports provided: UsuarioRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRouting", function() { return UsuarioRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuario-list/usuario-list.component */ "./src/app/modules/usuario/usuario-list/usuario-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var usuarioRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _usuario_list_usuario_list_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioListComponent"],
                data: {
                    title: 'Usuários',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var UsuarioRouting = /** @class */ (function () {
    function UsuarioRouting() {
    }
    UsuarioRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(usuarioRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsuarioRouting);
    return UsuarioRouting;
}());



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


/***/ }),

/***/ "./src/generated/generated.module.ts":
/*!*******************************************!*\
  !*** ./src/generated/generated.module.ts ***!
  \*******************************************/
/*! exports provided: GeneratedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratedModule", function() { return GeneratedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/generated/services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var GeneratedModule = /** @class */ (function () {
    function GeneratedModule() {
    }
    GeneratedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_1__["EstadoService"], _services__WEBPACK_IMPORTED_MODULE_1__["PaisService"], _services__WEBPACK_IMPORTED_MODULE_1__["CondicaoPagamentoService"], _services__WEBPACK_IMPORTED_MODULE_1__["FormaPagamentoService"], _services__WEBPACK_IMPORTED_MODULE_1__["AmbienteService"], _services__WEBPACK_IMPORTED_MODULE_1__["ContasAReceberService"], _services__WEBPACK_IMPORTED_MODULE_1__["ProdutoService"], _services__WEBPACK_IMPORTED_MODULE_1__["VendaService"], _services__WEBPACK_IMPORTED_MODULE_1__["MesaService"], _services__WEBPACK_IMPORTED_MODULE_1__["FranquiaService"], _services__WEBPACK_IMPORTED_MODULE_1__["GrupoProdutoService"], _services__WEBPACK_IMPORTED_MODULE_1__["ArquivoService"], _services__WEBPACK_IMPORTED_MODULE_1__["CidadeService"], _services__WEBPACK_IMPORTED_MODULE_1__["ContasAPagarService"], _services__WEBPACK_IMPORTED_MODULE_1__["ClienteService"], _services__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _services__WEBPACK_IMPORTED_MODULE_1__["FornecedorService"], _services__WEBPACK_IMPORTED_MODULE_1__["CompraService"]
            ]
        })
    ], GeneratedModule);
    return GeneratedModule;
}());



/***/ }),

/***/ "./src/generated/services-wrapper.ts":
/*!*******************************************!*\
  !*** ./src/generated/services-wrapper.ts ***!
  \*******************************************/
/*! exports provided: BROKER_CONFIGURATION, dwrWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROKER_CONFIGURATION", function() { return BROKER_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dwrWrapper", function() { return dwrWrapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var BROKER_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('broker.configuration');
/////////////////
/////////////////
/////////////////
/////////////////
function dwrWrapper(configuration, serviceName, methodName) {
    var args = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args[_i - 3] = arguments[_i];
    }
    return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
        loadDwrIfNeeded(configuration).then(function () {
            loadServiceIfNeeded(configuration, serviceName).then(function (service) {
                args.push({
                    callback: function (result) {
                        observer.next(result);
                        observer.complete();
                    },
                    errorHandler: function (message, exception) {
                        observer.error({ message: message, exception: exception });
                        console.error(message, exception);
                        observer.complete();
                    }
                });
                service[methodName].apply(service, args);
            });
        });
    });
}
function loadDwrIfNeeded(configuration) {
    return new Promise(function (resolve) {
        if (window.dwr) {
            if (configuration.useMoment) {
                shimDwrThenResolve(resolve);
            }
            else {
                resolve();
            }
        }
        else {
            var path = configuration.path + "/engine.js";
            var tag = document.createElement('script');
            tag.src = path;
            tag.type = 'text/javascript';
            if (configuration.useMoment) {
                tag.onload = function () { return shimDwrThenResolve(resolve); };
                tag.onerror = function () { return shimDwrThenResolve(resolve); };
            }
            else {
                tag.onload = function () { return resolve(); };
                tag.onerror = function () { return resolve(); };
            }
            document.body.appendChild(tag);
        }
    });
}
/**
 * Intercepta as chamadas de convert do dwr para converter o tipo Moment para Date caso ele este sendo utilizado
 * @param resolve
 */
function shimDwrThenResolve(resolve) {
    (function (dwr) {
        var original = dwr.engine.serialize.convert;
        dwr.engine.serialize.convert = function (batch, directrefmap, otherrefmap, data, name, depth) {
            if (data != null && typeof data == 'object' && data._isAMomentObject) {
                original(batch, directrefmap, otherrefmap, data.toDate(), name, depth);
            }
            else {
                original(batch, directrefmap, otherrefmap, data, name, depth);
            }
        };
    })(window['dwr']);
    resolve();
}
function loadServiceIfNeeded(configuration, name) {
    return new Promise(function (resolve) {
        if (window[name]) {
            resolve(window[name]);
        }
        else {
            var path = configuration.path + "/interface/" + name + ".js";
            var tag = document.createElement('script');
            tag.src = path;
            tag.type = 'text/javascript';
            tag.onload = function () { return resolve(window[name]); };
            tag.onerror = function () { return resolve(); };
            document.body.appendChild(tag);
        }
    });
}


/***/ }),

/***/ "./src/generated/services.ts":
/*!***********************************!*\
  !*** ./src/generated/services.ts ***!
  \***********************************/
/*! exports provided: EstadoService, PaisService, CondicaoPagamentoService, FormaPagamentoService, AmbienteService, ContasAReceberService, ProdutoService, VendaService, MesaService, FranquiaService, GrupoProdutoService, ArquivoService, CidadeService, ContasAPagarService, ClienteService, UsuarioService, FornecedorService, CompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoService", function() { return EstadoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisService", function() { return PaisService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicaoPagamentoService", function() { return CondicaoPagamentoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaPagamentoService", function() { return FormaPagamentoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbienteService", function() { return AmbienteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAReceberService", function() { return ContasAReceberService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendaService", function() { return VendaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaService", function() { return MesaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranquiaService", function() { return FranquiaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoProdutoService", function() { return GrupoProdutoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArquivoService", function() { return ArquivoService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeService", function() { return CidadeService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContasAPagarService", function() { return ContasAPagarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorService", function() { return FornecedorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraService", function() { return CompraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-wrapper */ "./src/generated/services-wrapper.ts");



var EstadoService = /** @class */ (function () {
    function EstadoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    EstadoService.prototype.updateEstado = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'updateEstado', arg0);
    };
    EstadoService.prototype.deleteEstado = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'deleteEstado', arg0);
    };
    EstadoService.prototype.findEstadoById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'findEstadoById', arg0);
    };
    EstadoService.prototype.insertEstado = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'insertEstado', arg0);
    };
    EstadoService.prototype.updateSituacaoEstado = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'updateSituacaoEstado', arg0, arg1);
    };
    EstadoService.prototype.listEstadosByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'estadoService', 'listEstadosByFilters', arg0, arg1);
    };
    EstadoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], EstadoService);
    return EstadoService;
}());

var PaisService = /** @class */ (function () {
    function PaisService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    PaisService.prototype.deletePais = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'deletePais', arg0);
    };
    PaisService.prototype.findPaisById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'findPaisById', arg0);
    };
    PaisService.prototype.updatePais = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'updatePais', arg0);
    };
    PaisService.prototype.insertPais = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'insertPais', arg0);
    };
    PaisService.prototype.listPaisesByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'listPaisesByFilters', arg0, arg1);
    };
    PaisService.prototype.updateSituacaoPais = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'paisService', 'updateSituacaoPais', arg0, arg1);
    };
    PaisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], PaisService);
    return PaisService;
}());

var CondicaoPagamentoService = /** @class */ (function () {
    function CondicaoPagamentoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    CondicaoPagamentoService.prototype.insertCondicaoPagamento = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'insertCondicaoPagamento', arg0);
    };
    CondicaoPagamentoService.prototype.updateCondicaoPagamento = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'updateCondicaoPagamento', arg0, arg1);
    };
    CondicaoPagamentoService.prototype.deleteCondicaoPagamento = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'deleteCondicaoPagamento', arg0);
    };
    CondicaoPagamentoService.prototype.listCondicaoPagamentosByFilters = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'listCondicaoPagamentosByFilters', arg0, arg1, arg2);
    };
    CondicaoPagamentoService.prototype.findCondicaoPagamentoById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'findCondicaoPagamentoById', arg0);
    };
    CondicaoPagamentoService.prototype.updateSituacaoCondicaoPagamento = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'condicaoPagamentoService', 'updateSituacaoCondicaoPagamento', arg0, arg1);
    };
    CondicaoPagamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CondicaoPagamentoService);
    return CondicaoPagamentoService;
}());

var FormaPagamentoService = /** @class */ (function () {
    function FormaPagamentoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    FormaPagamentoService.prototype.updateFormaPagamento = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'updateFormaPagamento', arg0);
    };
    FormaPagamentoService.prototype.findFormaPagamentoById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'findFormaPagamentoById', arg0);
    };
    FormaPagamentoService.prototype.insertFormaPagamento = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'insertFormaPagamento', arg0);
    };
    FormaPagamentoService.prototype.deleteFormaPagamento = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'deleteFormaPagamento', arg0);
    };
    FormaPagamentoService.prototype.updateSituacaoFormaPagamento = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'updateSituacaoFormaPagamento', arg0, arg1);
    };
    FormaPagamentoService.prototype.listFormaPagamentoByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'formaPagamentoService', 'listFormaPagamentoByFilters', arg0, arg1);
    };
    FormaPagamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FormaPagamentoService);
    return FormaPagamentoService;
}());

var AmbienteService = /** @class */ (function () {
    function AmbienteService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    AmbienteService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'insertArquivo', arg0);
    };
    AmbienteService.prototype.removeArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'removeArquivo', arg0);
    };
    AmbienteService.prototype.updateAmbiente = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'updateAmbiente', arg0, arg1);
    };
    AmbienteService.prototype.findAmbienteById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'findAmbienteById', arg0);
    };
    AmbienteService.prototype.deleteAmbiente = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'deleteAmbiente', arg0);
    };
    AmbienteService.prototype.insertAmbiente = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'insertAmbiente', arg0);
    };
    AmbienteService.prototype.updateSituacaoAmbiente = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'updateSituacaoAmbiente', arg0, arg1);
    };
    AmbienteService.prototype.updateAmbienteImagem = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'updateAmbienteImagem', arg0);
    };
    AmbienteService.prototype.insertAmbienteImagem = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'insertAmbienteImagem', arg0);
    };
    AmbienteService.prototype.listAmbientesByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'listAmbientesByFilters', arg0, arg1);
    };
    AmbienteService.prototype.deleteAmbienteImagem = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'deleteAmbienteImagem', arg0);
    };
    AmbienteService.prototype.findAmbienteImagemByAmbienteId = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'ambienteService', 'findAmbienteImagemByAmbienteId', arg0);
    };
    AmbienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AmbienteService);
    return AmbienteService;
}());

var ContasAReceberService = /** @class */ (function () {
    function ContasAReceberService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    ContasAReceberService.prototype.insertContaAReceber = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'insertContaAReceber', arg0);
    };
    ContasAReceberService.prototype.updateSituacaoContaAReceber = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'updateSituacaoContaAReceber', arg0, arg1);
    };
    ContasAReceberService.prototype.findContasAReceber = function (arg0, arg1, arg2, arg3) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'findContasAReceber', arg0, arg1, arg2, arg3);
    };
    ContasAReceberService.prototype.listContasAReceberByFilters = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'listContasAReceberByFilters', arg0, arg1, arg2, arg3, arg4);
    };
    ContasAReceberService.prototype.findContaAReceber = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'findContaAReceber', arg0, arg1, arg2, arg3, arg4);
    };
    ContasAReceberService.prototype.updateContaAReceber = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'updateContaAReceber', arg0);
    };
    ContasAReceberService.prototype.makeReceiveContaAReceber = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAReceberService', 'makeReceiveContaAReceber', arg0, arg1);
    };
    ContasAReceberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ContasAReceberService);
    return ContasAReceberService;
}());

var ProdutoService = /** @class */ (function () {
    function ProdutoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    ProdutoService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'insertArquivo', arg0);
    };
    ProdutoService.prototype.removeArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'removeArquivo', arg0);
    };
    ProdutoService.prototype.deleteProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'deleteProduto', arg0);
    };
    ProdutoService.prototype.findProdutoById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'findProdutoById', arg0);
    };
    ProdutoService.prototype.insertProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'insertProduto', arg0);
    };
    ProdutoService.prototype.updateProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'updateProduto', arg0);
    };
    ProdutoService.prototype.listProdutosByFiltersToAssociation = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'listProdutosByFiltersToAssociation', arg0, arg1, arg2);
    };
    ProdutoService.prototype.updateSituacaoProduto = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'updateSituacaoProduto', arg0, arg1);
    };
    ProdutoService.prototype.listProdutosByFilters = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'produtoService', 'listProdutosByFilters', arg0, arg1, arg2);
    };
    ProdutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ProdutoService);
    return ProdutoService;
}());

var VendaService = /** @class */ (function () {
    function VendaService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    VendaService.prototype.insertVenda = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'vendaService', 'insertVenda', arg0);
    };
    VendaService.prototype.findVendaById = function (arg0, arg1, arg2, arg3) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'vendaService', 'findVendaById', arg0, arg1, arg2, arg3);
    };
    VendaService.prototype.updateSituacaoVenda = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'vendaService', 'updateSituacaoVenda', arg0, arg1, arg2, arg3, arg4);
    };
    VendaService.prototype.listVendasByFilters = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'vendaService', 'listVendasByFilters', arg0, arg1, arg2, arg3, arg4);
    };
    VendaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], VendaService);
    return VendaService;
}());

var MesaService = /** @class */ (function () {
    function MesaService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    MesaService.prototype.insertMesa = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'insertMesa', arg0);
    };
    MesaService.prototype.updateMesa = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'updateMesa', arg0);
    };
    MesaService.prototype.deleteMesa = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'deleteMesa', arg0);
    };
    MesaService.prototype.listMesasByFilters = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'listMesasByFilters', arg0, arg1, arg2);
    };
    MesaService.prototype.findMesaByNumeroMesa = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'findMesaByNumeroMesa', arg0);
    };
    MesaService.prototype.findMesaByAmbienteId = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'findMesaByAmbienteId', arg0);
    };
    MesaService.prototype.updateSituacaoMesa = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'mesaService', 'updateSituacaoMesa', arg0, arg1);
    };
    MesaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MesaService);
    return MesaService;
}());

var FranquiaService = /** @class */ (function () {
    function FranquiaService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    FranquiaService.prototype.deleteFranquia = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'deleteFranquia', arg0);
    };
    FranquiaService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'insertArquivo', arg0);
    };
    FranquiaService.prototype.updateFranquia = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'updateFranquia', arg0);
    };
    FranquiaService.prototype.insertFranquia = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'insertFranquia', arg0);
    };
    FranquiaService.prototype.removeArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'removeArquivo', arg0);
    };
    FranquiaService.prototype.findFranquiaById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'findFranquiaById', arg0);
    };
    FranquiaService.prototype.listFranquiasByFilters = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'listFranquiasByFilters', arg0, arg1, arg2);
    };
    FranquiaService.prototype.updateSituacaoFranquia = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'franquiaService', 'updateSituacaoFranquia', arg0, arg1);
    };
    FranquiaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FranquiaService);
    return FranquiaService;
}());

var GrupoProdutoService = /** @class */ (function () {
    function GrupoProdutoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    GrupoProdutoService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'insertArquivo', arg0);
    };
    GrupoProdutoService.prototype.removeArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'removeArquivo', arg0);
    };
    GrupoProdutoService.prototype.updateSituacaoGrupoProduto = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'updateSituacaoGrupoProduto', arg0, arg1);
    };
    GrupoProdutoService.prototype.updateGrupoProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'updateGrupoProduto', arg0);
    };
    GrupoProdutoService.prototype.findGrupoProdutoById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'findGrupoProdutoById', arg0);
    };
    GrupoProdutoService.prototype.insertGrupoProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'insertGrupoProduto', arg0);
    };
    GrupoProdutoService.prototype.listGrupoProdutosByFilters = function (arg0, arg1, arg2) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'listGrupoProdutosByFilters', arg0, arg1, arg2);
    };
    GrupoProdutoService.prototype.deleteGrupoProduto = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'grupoProdutoService', 'deleteGrupoProduto', arg0);
    };
    GrupoProdutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], GrupoProdutoService);
    return GrupoProdutoService;
}());

var ArquivoService = /** @class */ (function () {
    function ArquivoService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    ArquivoService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'arquivoService', 'insertArquivo', arg0);
    };
    ArquivoService.prototype.deleteArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'arquivoService', 'deleteArquivo', arg0);
    };
    ArquivoService.prototype.downloadArquivoByUuid = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'arquivoService', 'downloadArquivoByUuid', arg0);
    };
    ArquivoService.prototype.findArquivoByUuid = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'arquivoService', 'findArquivoByUuid', arg0);
    };
    ArquivoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ArquivoService);
    return ArquivoService;
}());

var CidadeService = /** @class */ (function () {
    function CidadeService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    CidadeService.prototype.findCidadeById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'findCidadeById', arg0);
    };
    CidadeService.prototype.insertCidade = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'insertCidade', arg0);
    };
    CidadeService.prototype.deleteCidade = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'deleteCidade', arg0);
    };
    CidadeService.prototype.updateCidade = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'updateCidade', arg0);
    };
    CidadeService.prototype.updateSituacaoCidade = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'updateSituacaoCidade', arg0, arg1);
    };
    CidadeService.prototype.listCidadesByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'cidadeService', 'listCidadesByFilters', arg0, arg1);
    };
    CidadeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CidadeService);
    return CidadeService;
}());

var ContasAPagarService = /** @class */ (function () {
    function ContasAPagarService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    ContasAPagarService.prototype.findContasAPagar = function (arg0, arg1, arg2, arg3) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'findContasAPagar', arg0, arg1, arg2, arg3);
    };
    ContasAPagarService.prototype.findContaAPagar = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'findContaAPagar', arg0, arg1, arg2, arg3, arg4);
    };
    ContasAPagarService.prototype.insertContaAPagar = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'insertContaAPagar', arg0);
    };
    ContasAPagarService.prototype.listContasAPagarByFilters = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'listContasAPagarByFilters', arg0, arg1, arg2, arg3, arg4);
    };
    ContasAPagarService.prototype.makePaymentContaAPagar = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'makePaymentContaAPagar', arg0, arg1);
    };
    ContasAPagarService.prototype.updateContaAPagar = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'updateContaAPagar', arg0);
    };
    ContasAPagarService.prototype.updateSituacaoContaAPagar = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'contasAPagarService', 'updateSituacaoContaAPagar', arg0, arg1);
    };
    ContasAPagarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ContasAPagarService);
    return ContasAPagarService;
}());

var ClienteService = /** @class */ (function () {
    function ClienteService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    ClienteService.prototype.findClienteById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'findClienteById', arg0);
    };
    ClienteService.prototype.insertCliente = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'insertCliente', arg0);
    };
    ClienteService.prototype.deleteCliente = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'deleteCliente', arg0);
    };
    ClienteService.prototype.updateCliente = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'updateCliente', arg0);
    };
    ClienteService.prototype.updateSituacaoCliente = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'updateSituacaoCliente', arg0, arg1);
    };
    ClienteService.prototype.listClientesByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'clienteService', 'listClientesByFilters', arg0, arg1);
    };
    ClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ClienteService);
    return ClienteService;
}());

var UsuarioService = /** @class */ (function () {
    function UsuarioService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    UsuarioService.prototype.findUsuarioById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'findUsuarioById', arg0);
    };
    UsuarioService.prototype.insertArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'insertArquivo', arg0);
    };
    UsuarioService.prototype.insertUsuario = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'insertUsuario', arg0);
    };
    UsuarioService.prototype.updateUsuario = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'updateUsuario', arg0);
    };
    UsuarioService.prototype.deleteUsuario = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'deleteUsuario', arg0);
    };
    UsuarioService.prototype.removeArquivo = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'removeArquivo', arg0);
    };
    UsuarioService.prototype.getAuthenticatedUser = function () {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'getAuthenticatedUser');
    };
    UsuarioService.prototype.updateSituacaoUsuario = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'updateSituacaoUsuario', arg0, arg1);
    };
    UsuarioService.prototype.listUsuariosByFilters = function (arg0, arg1, arg2, arg3) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'usuarioService', 'listUsuariosByFilters', arg0, arg1, arg2, arg3);
    };
    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], UsuarioService);
    return UsuarioService;
}());

var FornecedorService = /** @class */ (function () {
    function FornecedorService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    FornecedorService.prototype.updateFornecedor = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'updateFornecedor', arg0);
    };
    FornecedorService.prototype.insertFornecedor = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'insertFornecedor', arg0);
    };
    FornecedorService.prototype.deleteFornecedor = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'deleteFornecedor', arg0);
    };
    FornecedorService.prototype.findFornecedorById = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'findFornecedorById', arg0);
    };
    FornecedorService.prototype.listFornecedorsByFilters = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'listFornecedorsByFilters', arg0, arg1);
    };
    FornecedorService.prototype.updateSituacaoFornecedor = function (arg0, arg1) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'fornecedorService', 'updateSituacaoFornecedor', arg0, arg1);
    };
    FornecedorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], FornecedorService);
    return FornecedorService;
}());

var CompraService = /** @class */ (function () {
    function CompraService(brokerConfiguration) {
        this.brokerConfiguration = brokerConfiguration;
    }
    CompraService.prototype.findCompraById = function (arg0, arg1, arg2, arg3) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'compraService', 'findCompraById', arg0, arg1, arg2, arg3);
    };
    CompraService.prototype.insertCompra = function (arg0) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'compraService', 'insertCompra', arg0);
    };
    CompraService.prototype.listComprasByFilters = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'compraService', 'listComprasByFilters', arg0, arg1, arg2, arg3, arg4);
    };
    CompraService.prototype.updateSituacaoCompra = function (arg0, arg1, arg2, arg3, arg4) {
        return Object(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["dwrWrapper"])(this.brokerConfiguration, 'compraService', 'updateSituacaoCompra', arg0, arg1, arg2, arg3, arg4);
    };
    CompraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_services_wrapper__WEBPACK_IMPORTED_MODULE_2__["BROKER_CONFIGURATION"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CompraService);
    return CompraService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\la-mafia-dev\src\main\ts\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map