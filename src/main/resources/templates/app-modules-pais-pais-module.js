(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-pais-pais-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/pais/pais-form/pais-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/pais/pais-form/pais-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n\r\n  <h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input uppercase required matInput [(ngModel)]=\"pais.codigo\" name=\"codigo\" [disabled]=\"true\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Sigla</mat-label>\r\n        <input required uppercase [(ngModel)]=\"pais.sigla\" name=\"sigla\" matInput maxlength=\"5\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>DDI</mat-label>\r\n        <input required uppercase [(ngModel)]=\"pais.ddi\" name=\"ddi\" matInput\r\n          [textMask]=\"{mask: textMasks.getNumbersOnlyMask(4), guide: false}\" maxlength=\"4\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>País</mat-label>\r\n        <input uppercase required [(ngModel)]=\"pais.pais\" name=\"pais\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ pais.created ? (pais.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ pais.updated ? (pais.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n  <button  (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n    color=\"primary\">\r\n    SALVAR\r\n  </button>\r\n  <button mat-dialog-close mat-raised-button class=\"white-btn\r\n  push-left-md bgc-grey-800\">\r\n    CANCELAR\r\n  </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/pais/pais-list/pais-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/pais/pais-list/pais-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"toolbar-default\">\r\n\t<mat-toolbar-row>\r\n\t\t<mat-form-field [floatLabel]=\"'never'\" style=\"width: 80vh; \" appearance=\"outline\">\r\n\t\t\t<mat-label>PAÍS</mat-label>\r\n\t\t\t<input uppercase matInput maxlength=\"144\" [(ngModel)]=\"filters.pais\">\r\n\t\t</mat-form-field>\r\n\t\t<span flex></span>\r\n\t\t<button class=\"white-btn\" color=\"primary\" (click)=\"openForm()\" mat-raised-button>ADICIONAR NOVO PAÍS</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListPaises()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"filters.pais = ''; onListPaises()\" mat-raised-button>LIMPAR\r\n\t\t\tFILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\" (rowClick)=\"openForm(row)\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"pais\" let-pais=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ pais?.pais}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"sigla\" let-pais=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ pais?.sigla}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"ddi\" let-pais=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ pais?.ddi}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-pais=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"pais?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!pais?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-pais=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar país\" stopPropagation (click)=\"$event.stopPropagation(); openForm(pais)\"\r\n\t\t\t\tclass=\"tc-grey-700 edit-button-hover\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"edit-icon\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\r\n\r\n\t\t\t<button *ngIf=\"!pais.situacao\" matTooltip=\"Ativar pais\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoPais(pais)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"pais.situacao\" matTooltip=\"Excluir/Desativar pais\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoPais(pais)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n    (change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n    <span td-paging-bar-label hide-xs>Registros por página:</span>\r\n    <mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n      <mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n        {{size}}\r\n      </mat-option>\r\n    </mat-select>\r\n    {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n  </td-paging-bar>\r\n  \r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/pais/pais-form/pais-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pais/pais-form/pais-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFpcy9wYWlzLWZvcm0vcGFpcy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/pais/pais-form/pais-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/pais/pais-form/pais-form.component.ts ***!
  \***************************************************************/
/*! exports provided: PaisFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisFormComponent", function() { return PaisFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var PaisFormComponent = /** @class */ (function () {
    function PaisFormComponent(paisService, openSnackBarService, dialogRef, data) {
        this.paisService = paisService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.pais = {};
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.title = "";
        if (data.codigo != null) {
            this.onFindPaisById(data.codigo);
        }
    }
    PaisFormComponent.prototype.ngOnInit = function () {
        if (this.data.codigo)
            this.title = "Alterar país";
        else
            this.title = "Inserir país";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    PaisFormComponent.prototype.onFindPaisById = function (id) {
        var _this = this;
        this.paisService.findPaisById(id).subscribe(function (pais) {
            _this.pais = pais;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    PaisFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (!this.pais.codigo) {
            this.paisService.insertPais(this.pais).subscribe(function (pais) {
                _this.openSnackBarService.openSuccess("País inserido com sucesso.");
                _this.dialogRef.close(_this.pais);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
        else {
            this.paisService.updatePais(this.pais).subscribe(function (pais) {
                _this.openSnackBarService.openSuccess("País atualizado com sucesso.");
                _this.dialogRef.close(_this.pais);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
    };
    PaisFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pais-form',
            template: __webpack_require__(/*! raw-loader!./pais-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/pais/pais-form/pais-form.component.html"),
            styles: [__webpack_require__(/*! ./pais-form.component.scss */ "./src/app/modules/pais/pais-form/pais-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["PaisService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PaisFormComponent);
    return PaisFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/pais/pais-list/pais-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pais/pais-list/pais-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFpcy9wYWlzLWxpc3QvcGFpcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/pais/pais-list/pais-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/pais/pais-list/pais-list.component.ts ***!
  \***************************************************************/
/*! exports provided: PaisListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisListComponent", function() { return PaisListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pais-form/pais-form.component */ "./src/app/modules/pais/pais-form/pais-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var PaisListComponent = /** @class */ (function () {
    function PaisListComponent(dialog, _dialogService, paginationService, openSnackBarService, paisService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.paisService = paisService;
        this.pageRequest = [];
        this.filters = {
            pais: '',
        };
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO' },
            { name: 'pais', label: 'PAÍS' },
            { name: 'sigla', label: 'SIGLA' },
            { name: 'ddi', label: 'DDI' },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', width: 250 }
        ];
        this.pageRequest = paginationService.pageRequest('codigo', 'ASC', 10);
    }
    PaisListComponent.prototype.ngOnInit = function () {
        this.onListPaises();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    PaisListComponent.prototype.onListPaises = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        this.paisService.listPaisesByFilters(this.filters.pais, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    PaisListComponent.prototype.openForm = function (pais) {
        var _this = this;
        var dialogRef = this.dialog.open(_pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__["PaisFormComponent"], {
            width: '600px',
            height: 'auto',
            data: { codigo: pais ? pais.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (paisSaved) {
            if (paisSaved)
                _this.onListPaises();
        });
    };
    PaisListComponent.prototype.atualizarSituacaoPais = function (pais) {
        var _this = this;
        if (pais.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este país ?",
                title: "Excluir país",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.paisService.deletePais(pais.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('País excluído com sucesso.');
                        _this.onListPaises();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este país pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar país",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.paisService.updateSituacaoPais(pais.codigo, !pais.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('País desativado com sucesso.');
                                    _this.onListPaises();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta país ?",
                title: "Ativar país",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.paisService.updateSituacaoPais(pais.codigo, !pais.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('País ativado com sucesso.');
                        _this.onListPaises();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    PaisListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListPaises();
    };
    PaisListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-pais-list',
            template: __webpack_require__(/*! raw-loader!./pais-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/pais/pais-list/pais-list.component.html"),
            styles: [__webpack_require__(/*! ./pais-list.component.scss */ "./src/app/modules/pais/pais-list/pais-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["PaisService"]])
    ], PaisListComponent);
    return PaisListComponent;
}());



/***/ }),

/***/ "./src/app/modules/pais/pais.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/pais/pais.module.ts ***!
  \*********************************************/
/*! exports provided: PaisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisModule", function() { return PaisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pais-form/pais-form.component */ "./src/app/modules/pais/pais-form/pais-form.component.ts");
/* harmony import */ var _pais_list_pais_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pais-list/pais-list.component */ "./src/app/modules/pais/pais-list/pais-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _pais_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pais.routing */ "./src/app/modules/pais/pais.routing.ts");






var PaisModule = /** @class */ (function () {
    function PaisModule() {
    }
    PaisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _pais_list_pais_list_component__WEBPACK_IMPORTED_MODULE_2__["PaisListComponent"],
                _pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__["PaisFormComponent"],
            ],
            imports: [
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"],
                _pais_routing__WEBPACK_IMPORTED_MODULE_5__["PaisRouting"]
            ],
            exports: [
                _pais_list_pais_list_component__WEBPACK_IMPORTED_MODULE_2__["PaisListComponent"],
                _pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__["PaisFormComponent"],
                _pais_routing__WEBPACK_IMPORTED_MODULE_5__["PaisRouting"]
            ],
            entryComponents: [
                _pais_form_pais_form_component__WEBPACK_IMPORTED_MODULE_1__["PaisFormComponent"]
            ],
            providers: []
        })
    ], PaisModule);
    return PaisModule;
}());



/***/ }),

/***/ "./src/app/modules/pais/pais.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/pais/pais.routing.ts ***!
  \**********************************************/
/*! exports provided: PaisRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisRouting", function() { return PaisRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pais_list_pais_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pais-list/pais-list.component */ "./src/app/modules/pais/pais-list/pais-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var paisRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _pais_list_pais_list_component__WEBPACK_IMPORTED_MODULE_3__["PaisListComponent"],
                data: {
                    title: 'Paises',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var PaisRouting = /** @class */ (function () {
    function PaisRouting() {
    }
    PaisRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(paisRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PaisRouting);
    return PaisRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-pais-pais-module.js.map