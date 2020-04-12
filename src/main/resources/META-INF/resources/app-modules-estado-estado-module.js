(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-estado-estado-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/estado/estado-form/estado-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/estado/estado-form/estado-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n\r\n  <h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input required matInput [(ngModel)]=\"estado.codigo\" name=\"codigo\" [disabled]=\"true\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>UF</mat-label>\r\n        <input required uppercase [(ngModel)]=\"estado.uf\" name=\"uf\" matInput maxlength=\"2\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Estado</mat-label>\r\n        <input uppercase required [(ngModel)]=\"estado.estado\" name=\"estado\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n      <auto-complete-with-redirect\r\n          fxFlex\r\n          class=\"push-left-md\"\r\n          title=\"País\"\r\n          link=\"pais\"\r\n          [classes]=\"required-class-pais\"\r\n          key=\"codigo\"\r\n          displayKey=\"pais\"\r\n          [displayId]=\"true\"\r\n          [list]=\"{values: paises}\"\r\n          [itemSelected]=\"{selected: estado.pais}\"\r\n          (onFilterChange)=\"onListPaises($event)\"\r\n          (onSelect)=\"estado.pais = $event\"\r\n          (onDelete)=\"estado.pais = {}\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n\r\n    <div>\r\n\r\n      <!-- SELECT-->\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ estado.created ? (estado.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ estado.updated ? (estado.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n  <button  (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n    color=\"primary\">\r\n    SALVAR\r\n  </button>\r\n  <button mat-dialog-close mat-raised-button class=\"white-btn\r\n  push-left-md bgc-grey-800\">\r\n    CANCELAR\r\n  </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/estado/estado-list/estado-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/estado/estado-list/estado-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n  <mat-toolbar-row>\r\n    <mat-form-field [floatLabel]=\"'never'\" style=\"width: 80vh; \" appearance=\"outline\">\r\n      <mat-label>ESTADO</mat-label>\r\n      <input uppercase matInput maxlength=\"144\" [(ngModel)]=\"filters.estado\">\r\n    </mat-form-field>\r\n    <span flex></span>\r\n    <button class=\"white-btn\" color=\"primary\" (click)=\"openForm()\" mat-raised-button>ADICIONAR NOVO ESTADO</button>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row fxLayoutGap=\"30px\">\r\n    <button color=\"primary\" class=\"white-btn\" (click)=\"onListEstados()\" mat-raised-button\r\n      type=\"submit\">CONSULTAR</button>\r\n    <button color=\"accent\" class=\"white-btn\" (click)=\"filters.estado = ''; onListEstados()\" mat-raised-button>LIMPAR\r\n      FILTROS</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n  <td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n    [columns]=\"tableColumns\">\r\n\r\n    <ng-template tdDataTableTemplate=\"estado\" let-estado=\"row\">\r\n      <span class=\"text-truncate\">\r\n        {{ estado?.estado}}\r\n      </span>\r\n    </ng-template>\r\n\r\n    <ng-template tdDataTableTemplate=\"uf\" let-estado=\"row\">\r\n      <span class=\"text-truncate\">\r\n        {{ estado?.uf}}\r\n      </span>\r\n    </ng-template>\r\n\r\n    <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-estado=\"row\">\r\n        <mat-icon *ngIf=\"estado?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n        <mat-icon *ngIf=\"!estado?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n      </ng-template>\r\n\r\n\r\n\r\n    <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-estado=\"row\">\r\n\r\n      <button matTooltip=\"Editar estado\" stopPropagation (click)=\"$event.stopPropagation(); openForm(estado)\"\r\n      class=\"tc-grey-700 edit-button-hover\"\r\n        mat-icon-button>\r\n        <mat-icon class=\"edit-icon\">edit</mat-icon>\r\n      </button>\r\n\r\n\r\n      <button *ngIf=\"!estado.situacao\" matTooltip=\"Ativar estado\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoEstado(estado)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"estado.situacao\" matTooltip=\"Excluir/Desativar estado\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoEstado(estado)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n    </ng-template>\r\n\r\n  </td-data-table>\r\n\r\n  <td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n    (change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n    <span td-paging-bar-label hide-xs>Registros por página:</span>\r\n    <mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n      <mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n        {{size}}\r\n      </mat-option>\r\n    </mat-select>\r\n    {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n  </td-paging-bar>\r\n\r\n  <div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n    <label>Nenhum registro encontrado.</label>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/estado/estado-form/estado-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/estado/estado-form/estado-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXN0YWRvL2VzdGFkby1mb3JtL2VzdGFkby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/estado/estado-form/estado-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/estado/estado-form/estado-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstadoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoFormComponent", function() { return EstadoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");







var EstadoFormComponent = /** @class */ (function () {
    function EstadoFormComponent(estadoService, paisService, openSnackBarService, dialogRef, data) {
        this.estadoService = estadoService;
        this.paisService = paisService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.estado = { codigo: 0 };
        this.pais = {};
        this.title = "";
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.codigo != null) {
            this.onFindEstadoById(data.codigo);
        }
        this.onListPaises("");
    }
    EstadoFormComponent.prototype.ngOnInit = function () {
        if (this.data.codigo)
            this.title = "Alterar estado";
        else
            this.title = "Inserir estado";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    EstadoFormComponent.prototype.onFindEstadoById = function (id) {
        var _this = this;
        this.estadoService.findEstadoById(id).subscribe(function (estado) {
            _this.estado = estado;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    EstadoFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (!this.estado.pais || (this.estado.pais && !this.estado.pais.codigo)) {
            this.openSnackBarService.openError("O campo país deve ser preenchido.");
            return;
        }
        if (!this.estado.codigo) {
            this.estadoService.insertEstado(this.estado).subscribe(function (estado) {
                _this.openSnackBarService.openSuccess('Estado inserido com sucesso.');
                _this.dialogRef.close(_this.estado);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
        else {
            this.estadoService.updateEstado(this.estado).subscribe(function (estado) {
                _this.openSnackBarService.openSuccess("Estado atualizado com sucesso.");
                _this.dialogRef.close(_this.estado);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
    };
    EstadoFormComponent.prototype.onListPaises = function (filter) {
        var _this = this;
        this.paisService.listPaisesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.paises = page.content.filter(function (c) { return c.situacao; });
        });
    };
    EstadoFormComponent.prototype.displayFnPais = function (pais) {
        return pais ? pais.pais : undefined;
    };
    EstadoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estado-form',
            template: __webpack_require__(/*! raw-loader!./estado-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/estado/estado-form/estado-form.component.html"),
            styles: [__webpack_require__(/*! ./estado-form.component.scss */ "./src/app/modules/estado/estado-form/estado-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["EstadoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["PaisService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], EstadoFormComponent);
    return EstadoFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/estado/estado-list/estado-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/estado/estado-list/estado-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXN0YWRvL2VzdGFkby1saXN0L2VzdGFkby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/estado/estado-list/estado-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/estado/estado-list/estado-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: EstadoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoListComponent", function() { return EstadoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../estado-form/estado-form.component */ "./src/app/modules/estado/estado-form/estado-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var EstadoListComponent = /** @class */ (function () {
    function EstadoListComponent(dialog, _dialogService, paginationService, openSnackBarService, estadoService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.estadoService = estadoService;
        this.pageRequest = [];
        this.filters = {
            estado: '',
        };
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO' },
            { name: 'estado', label: 'ESTADO' },
            { name: 'uf', label: 'UF' },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', width: 250 }
        ];
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }
    EstadoListComponent.prototype.ngOnInit = function () {
        this.onListEstados();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    EstadoListComponent.prototype.onListEstados = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        this.estadoService.listEstadosByFilters(this.filters.estado, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    EstadoListComponent.prototype.openForm = function (estado) {
        var _this = this;
        var dialogRef = this.dialog.open(_estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__["EstadoFormComponent"], {
            width: '600px',
            height: 'auto',
            data: { codigo: estado ? estado.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (estadoSaved) {
            if (estadoSaved) {
                _this.onListEstados();
            }
        });
    };
    EstadoListComponent.prototype.atualizarSituacaoEstado = function (estado) {
        var _this = this;
        if (estado.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este estado ?",
                title: "Excluir estado",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.estadoService.deleteEstado(estado.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Estado excluído com sucesso.');
                        _this.onListEstados();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este estado pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar estado",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.estadoService.updateSituacaoEstado(estado.codigo, !estado.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Estado desativado com sucesso.');
                                    _this.onListEstados();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta estado ?",
                title: "Ativar estado",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.estadoService.updateSituacaoEstado(estado.codigo, !estado.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Estado ativado com sucesso.');
                        _this.onListEstados();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    EstadoListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListEstados();
    };
    EstadoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-estado-list',
            template: __webpack_require__(/*! raw-loader!./estado-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/estado/estado-list/estado-list.component.html"),
            styles: [__webpack_require__(/*! ./estado-list.component.scss */ "./src/app/modules/estado/estado-list/estado-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["EstadoService"]])
    ], EstadoListComponent);
    return EstadoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/estado/estado.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/estado/estado.module.ts ***!
  \*************************************************/
/*! exports provided: EstadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoModule", function() { return EstadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estado-form/estado-form.component */ "./src/app/modules/estado/estado-form/estado-form.component.ts");
/* harmony import */ var _estado_list_estado_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estado-list/estado-list.component */ "./src/app/modules/estado/estado-list/estado-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _estado_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estado.routing */ "./src/app/modules/estado/estado.routing.ts");






var EstadoModule = /** @class */ (function () {
    function EstadoModule() {
    }
    EstadoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _estado_list_estado_list_component__WEBPACK_IMPORTED_MODULE_2__["EstadoListComponent"],
                _estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__["EstadoFormComponent"],
            ],
            imports: [
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"],
                _estado_routing__WEBPACK_IMPORTED_MODULE_5__["EstadoRouting"]
            ],
            exports: [
                _estado_list_estado_list_component__WEBPACK_IMPORTED_MODULE_2__["EstadoListComponent"],
                _estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__["EstadoFormComponent"],
                _estado_routing__WEBPACK_IMPORTED_MODULE_5__["EstadoRouting"]
            ],
            entryComponents: [
                _estado_form_estado_form_component__WEBPACK_IMPORTED_MODULE_1__["EstadoFormComponent"]
            ],
            providers: []
        })
    ], EstadoModule);
    return EstadoModule;
}());



/***/ }),

/***/ "./src/app/modules/estado/estado.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/estado/estado.routing.ts ***!
  \**************************************************/
/*! exports provided: EstadoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoRouting", function() { return EstadoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _estado_list_estado_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./estado-list/estado-list.component */ "./src/app/modules/estado/estado-list/estado-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var estadoRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _estado_list_estado_list_component__WEBPACK_IMPORTED_MODULE_3__["EstadoListComponent"],
                data: {
                    title: 'Estados',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
            }
        ]
    },
];
var EstadoRouting = /** @class */ (function () {
    function EstadoRouting() {
    }
    EstadoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(estadoRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EstadoRouting);
    return EstadoRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-estado-estado-module.js.map