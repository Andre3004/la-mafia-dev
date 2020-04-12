(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-cidade-cidade-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cidade/cidade-form/cidade-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cidade/cidade-form/cidade-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input  uppercase matInput [(ngModel)]=\"cidade.codigo\" name=\"codigo\" [disabled]=\"true\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>DDD</mat-label>\r\n        <input required [(ngModel)]=\"cidade.ddd\" maxlength=\"4\" name=\"ddd\" matInput currencyMask [options]=\"{\r\n          align: 'left',\r\n          prefix: '',\r\n          thousands: '',\r\n          decimal: ',',\r\n          precision: 0,\r\n          allowNegative: false\r\n        }\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" >\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Cidade</mat-label>\r\n        <input required uppercase [(ngModel)]=\"cidade.cidade\" name=\"cidade\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n        <auto-complete-with-redirect\r\n            style=\"margin-left: 30px\"\r\n            fxFlex\r\n            title=\"Estado\"\r\n            key=\"codigo\"\r\n            link=\"estado\"\r\n            displayKey=\"estado\"\r\n            [classes]=\"required-class-estado\"\r\n            [displayId]=\"true\"\r\n            [list]=\"{values: estados}\"\r\n            [itemSelected]=\"{selected: cidade.estado}\"\r\n            (onFilterChange)=\"onListEstados($event)\"\r\n            (onSelect)=\"cidade.estado = $event\"\r\n            (onDelete)=\"cidade.estado = {}\"\r\n        >\r\n        </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n\r\n    <div>\r\n\r\n      <!-- SELECT-->\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ cidade.created ? (cidade.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ cidade.updated ? (cidade.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n  \r\n  <button  (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n    color=\"primary\">\r\n    SALVAR\r\n  </button>\r\n  <button mat-dialog-close mat-raised-button class=\"white-btn\r\n  push-left-md bgc-grey-800\">\r\n    CANCELAR\r\n  </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cidade/cidade-list/cidade-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cidade/cidade-list/cidade-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n  <mat-toolbar-row>\r\n    <mat-form-field [floatLabel]=\"'never'\" style=\"width: 80vh; \" appearance=\"outline\">\r\n      <mat-label>CIDADE</mat-label>\r\n      <input matInput uppercase maxlength=\"144\" [(ngModel)]=\"filters.cidade\">\r\n    </mat-form-field>\r\n    <span flex></span>\r\n    <button class=\"white-btn\" color=\"primary\" (click)=\"openForm()\" mat-raised-button>ADICIONAR NOVA CIDADE</button>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row fxLayoutGap=\"30px\">\r\n    <button color=\"primary\" class=\"white-btn\" (click)=\"onListCidades()\" mat-raised-button\r\n      type=\"submit\">CONSULTAR</button>\r\n    <button color=\"accent\" class=\"white-btn\" (click)=\"filters.cidade = ''; onListCidades()\" mat-raised-button>LIMPAR\r\n      FILTROS</button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n  <td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n    [columns]=\"tableColumns\">\r\n\r\n    <ng-template tdDataTableTemplate=\"cidade\" let-cidade=\"row\">\r\n      <span class=\"text-truncate\">\r\n        {{ cidade?.cidade}}\r\n      </span>\r\n    </ng-template>\r\n\r\n    <ng-template tdDataTableTemplate=\"ddd\" let-cidade=\"row\">\r\n      <span class=\"text-truncate\">\r\n        {{ cidade?.ddd}}\r\n      </span>\r\n    </ng-template>\r\n\r\n\r\n    <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-cidade=\"row\">\r\n\r\n      <button matTooltip=\"Editar cidade\"  class=\"tc-grey-700 edit-button-hover\" stopPropagation (click)=\"$event.stopPropagation(); openForm(cidade)\"\r\n        mat-icon-button>\r\n        <mat-icon class=\"edit-icon\">edit</mat-icon>\r\n      </button>\r\n\r\n\r\n      <button *ngIf=\"!cidade.situacao\" matTooltip=\"Ativar cidade\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCidade(cidade)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"cidade.situacao\" matTooltip=\"Excluir/Desativar cidade\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCidade(cidade)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n    </ng-template>\r\n\r\n\r\n    <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-cidade=\"row\">\r\n        <mat-icon *ngIf=\"cidade?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n        <mat-icon *ngIf=\"!cidade?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n      </ng-template>\r\n\r\n  </td-data-table>\r\n\r\n  <td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n    (change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n    <span td-paging-bar-label hide-xs>Registros por página:</span>\r\n    <mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n      <mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n        {{size}}\r\n      </mat-option>\r\n    </mat-select>\r\n    {{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n  </td-paging-bar>\r\n\r\n  <div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n    <label>Nenhum registro encontrado.</label>\r\n  </div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/cidade/cidade-form/cidade-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/cidade/cidade-form/cidade-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2lkYWRlL2NpZGFkZS1mb3JtL2NpZGFkZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cidade/cidade-form/cidade-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cidade/cidade-form/cidade-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: CidadeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeFormComponent", function() { return CidadeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");







var CidadeFormComponent = /** @class */ (function () {
    function CidadeFormComponent(cidadeService, paisService, estadoService, openSnackBarService, dialogRef, data) {
        this.cidadeService = cidadeService;
        this.paisService = paisService;
        this.estadoService = estadoService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.cidade = { codigo: 0 };
        this.title = "";
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.codigo != null) {
            this.onFindCidadeById(data.codigo);
        }
    }
    CidadeFormComponent.prototype.ngOnInit = function () {
        if (this.data.codigo)
            this.title = "Alterar cidade";
        else
            this.title = "Inserir cidade";
        this.paisService.listPaisesByFilters("", null);
        this.onListEstados("");
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    CidadeFormComponent.prototype.onFindCidadeById = function (id) {
        var _this = this;
        this.cidadeService.findCidadeById(id).subscribe(function (cidade) {
            _this.cidade = cidade;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    CidadeFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (!this.cidade.estado || (this.cidade.estado && !this.cidade.estado.codigo)) {
            this.openSnackBarService.openError("O campo estado deve ser preenchido.");
            return;
        }
        if (!this.cidade.codigo) {
            this.cidadeService.insertCidade(this.cidade).subscribe(function (cidade) {
                _this.openSnackBarService.openSuccess("Cidade inserida com sucesso.");
                _this.dialogRef.close(_this.cidade);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
        else {
            this.cidadeService.updateCidade(this.cidade).subscribe(function (cidade) {
                _this.openSnackBarService.openSuccess("Cidade atualizada com sucesso.");
                _this.dialogRef.close(_this.cidade);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
    };
    CidadeFormComponent.prototype.onListEstados = function (filter) {
        var _this = this;
        this.estadoService.listEstadosByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.estados = page.content.filter(function (c) { return c.situacao; });
        });
    };
    CidadeFormComponent.prototype.displayFnEstado = function (estado) {
        return estado ? estado.estado : undefined;
    };
    CidadeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cidade-form',
            template: __webpack_require__(/*! raw-loader!./cidade-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cidade/cidade-form/cidade-form.component.html"),
            styles: [__webpack_require__(/*! ./cidade-form.component.scss */ "./src/app/modules/cidade/cidade-form/cidade-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CidadeService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["PaisService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["EstadoService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CidadeFormComponent);
    return CidadeFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/cidade/cidade-list/cidade-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/cidade/cidade-list/cidade-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2lkYWRlL2NpZGFkZS1saXN0L2NpZGFkZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cidade/cidade-list/cidade-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cidade/cidade-list/cidade-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CidadeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeListComponent", function() { return CidadeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../cidade-form/cidade-form.component */ "./src/app/modules/cidade/cidade-form/cidade-form.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var CidadeListComponent = /** @class */ (function () {
    function CidadeListComponent(dialog, _dialogService, paginationService, openSnackBarService, cidadeService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.cidadeService = cidadeService;
        this.pageRequest = [];
        this.filters = {
            cidade: '',
        };
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO' },
            { name: 'cidade', label: 'CIDADE' },
            { name: 'ddd', label: 'DDD' },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', width: 250 }
        ];
        this.pageRequest = paginationService.pageRequest('codigo', 'ASC', 10);
    }
    CidadeListComponent.prototype.ngOnInit = function () {
        this.onListCidades();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo usuário
     */
    CidadeListComponent.prototype.onListCidades = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        this.cidadeService.listCidadesByFilters(this.filters.cidade, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    CidadeListComponent.prototype.openForm = function (cidade) {
        var _this = this;
        var dialogRef = this.dialog.open(_cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__["CidadeFormComponent"], {
            width: '600px',
            height: 'auto',
            data: { codigo: cidade ? cidade.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (cidadeSaved) {
            if (cidadeSaved)
                _this.onListCidades();
        });
    };
    CidadeListComponent.prototype.atualizarSituacaoCidade = function (cidade) {
        var _this = this;
        if (cidade.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta cidade ?",
                title: "Excluir cidade",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.cidadeService.deleteCidade(cidade.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Cidade excluída com sucesso.');
                        _this.onListCidades();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir esta cidade pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar cidade",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.cidadeService.updateSituacaoCidade(cidade.codigo, !cidade.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Cidade desativada com sucesso.');
                                    _this.onListCidades();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta cidade ?",
                title: "Ativar cidade",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.cidadeService.updateSituacaoCidade(cidade.codigo, !cidade.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Cidade ativado com sucesso.');
                        _this.onListCidades();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    CidadeListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListCidades();
    };
    CidadeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cidade-list',
            template: __webpack_require__(/*! raw-loader!./cidade-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cidade/cidade-list/cidade-list.component.html"),
            styles: [__webpack_require__(/*! ./cidade-list.component.scss */ "./src/app/modules/cidade/cidade-list/cidade-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_6__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CidadeService"]])
    ], CidadeListComponent);
    return CidadeListComponent;
}());



/***/ }),

/***/ "./src/app/modules/cidade/cidade.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/cidade/cidade.module.ts ***!
  \*************************************************/
/*! exports provided: CidadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeModule", function() { return CidadeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cidade-form/cidade-form.component */ "./src/app/modules/cidade/cidade-form/cidade-form.component.ts");
/* harmony import */ var _cidade_list_cidade_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cidade-list/cidade-list.component */ "./src/app/modules/cidade/cidade-list/cidade-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _cidade_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cidade.routing */ "./src/app/modules/cidade/cidade.routing.ts");






var CidadeModule = /** @class */ (function () {
    function CidadeModule() {
    }
    CidadeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _cidade_list_cidade_list_component__WEBPACK_IMPORTED_MODULE_2__["CidadeListComponent"],
                _cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__["CidadeFormComponent"],
            ],
            imports: [
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"],
                _cidade_routing__WEBPACK_IMPORTED_MODULE_5__["CidadeRouting"]
            ],
            exports: [
                _cidade_list_cidade_list_component__WEBPACK_IMPORTED_MODULE_2__["CidadeListComponent"],
                _cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__["CidadeFormComponent"],
                _cidade_routing__WEBPACK_IMPORTED_MODULE_5__["CidadeRouting"]
            ],
            entryComponents: [
                _cidade_form_cidade_form_component__WEBPACK_IMPORTED_MODULE_1__["CidadeFormComponent"]
            ],
            providers: []
        })
    ], CidadeModule);
    return CidadeModule;
}());



/***/ }),

/***/ "./src/app/modules/cidade/cidade.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/cidade/cidade.routing.ts ***!
  \**************************************************/
/*! exports provided: CidadeRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CidadeRouting", function() { return CidadeRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cidade_list_cidade_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cidade-list/cidade-list.component */ "./src/app/modules/cidade/cidade-list/cidade-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var cidadeRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _cidade_list_cidade_list_component__WEBPACK_IMPORTED_MODULE_3__["CidadeListComponent"],
                data: {
                    title: 'Cidades',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var CidadeRouting = /** @class */ (function () {
    function CidadeRouting() {
    }
    CidadeRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(cidadeRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CidadeRouting);
    return CidadeRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-cidade-cidade-module.js.map