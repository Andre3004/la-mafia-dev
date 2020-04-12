(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-mesa-mesa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/mesa/mesa-form/mesa-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/mesa/mesa-form/mesa-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Número da mesa</mat-label>\r\n        <input matInput [disabled]=\"true\" [(ngModel)]=\"mesa.numeroMesa\" name=\"numeroMesa\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Quantidade de lugares na mesa</mat-label>\r\n        <input required [(ngModel)]=\"mesa.quantidadeLugares\" name=\"quantidadeLugares\" matInput\r\n          [textMask]=\"{mask: textMasks.getNumbersOnlyMask(3), guide: false}\"\r\n          placeholder=\"Digite a quantidade de lugares\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\">\r\n\r\n\r\n      <auto-complete-with-redirect fxFlex title=\"Ambiente\" link=\"ambiente\" key=\"codigo\" displayKey=\"ambiente\"\r\n        [displayId]=\"true\" [list]=\"{values: ambientes}\" [itemSelected]=\"{selected: mesa.ambiente}\"\r\n        (onFilterChange)=\"onListAmbientes($event)\" (onSelect)=\"mesa.ambiente = $event\"\r\n        [classes]=\"'required-class-mesa'\"\r\n        (onDelete)=\"mesa.ambiente = null\">\r\n      </auto-complete-with-redirect>\r\n\r\n      <mat-form-field *ngIf=\"mesa.ambiente\" fxFlex appearance=\"outline\" style=\"margin-left: 30px\">\r\n        <mat-label>Franquia</mat-label>\r\n        <input type=\"text\" [disabled]=\"true\" matInput [ngModel]=\"mesa?.ambiente?.franquia?.franquia\" name=\"franquia\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ mesa.created ? (mesa.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ mesa.updated ? (mesa.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n    <button  (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n      color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n      CANCELAR\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/mesa/mesa-list/mesa-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/mesa/mesa-list/mesa-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Número da mesa</mat-label>\r\n\t\t\t<input matInput [textMask]=\"{mask: textMasks.getNumbersOnlyMask(3), guide: false}\"\r\n\t\t\t\tplaceholder=\"Pesquisar por número da mesa\" [(ngModel)]=\"filters.numeroMesa\">\r\n\t\t</mat-form-field>\r\n\r\n\r\n\t\t<auto-complete-with-redirect fxFlex title=\"Ambiente\" link=\"ambiente\" key=\"codigo\" displayKey=\"ambiente\"\r\n\t\t\t[displayId]=\"true\" [list]=\"{values: ambientes}\" [itemSelected]=\"{selected: filters.ambiente}\"\r\n\t\t\t[isNotRequired]=\"true\" \r\n\t\t\t(onFilterChange)=\"ambienteFilter = $event; onListAmbientes($event)\" (onSelect)=\"filters.ambiente = $event\"\r\n\t\t\t(onDelete)=\"filters.ambiente = null\">\r\n\t\t</auto-complete-with-redirect>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVA MESA</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListMesas()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"numeroMesa\" let-mesa=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ mesa?.numeroMesa}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"ambiente.nome\" let-mesa=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ mesa?.ambiente?.ambiente}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-mesa=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"mesa?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!mesa?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-mesa=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar mesa\" stopPropagation (click)=\"$event.stopPropagation(); openForm(mesa)\"\r\n\t\t\t\tmat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!mesa.situacao\" matTooltip=\"Ativar mesa\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoMesa(mesa)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"mesa.situacao\" matTooltip=\"Excluir/Desativar mesa\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoMesa(mesa)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/mesa/mesa-form/mesa-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mesa/mesa-form/mesa-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzYS9tZXNhLWZvcm0vbWVzYS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/mesa/mesa-form/mesa-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/mesa/mesa-form/mesa-form.component.ts ***!
  \***************************************************************/
/*! exports provided: MesaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaFormComponent", function() { return MesaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var MesaFormComponent = /** @class */ (function () {
    function MesaFormComponent(mesaService, openSnackBarService, dialogRef, arquivoService, ambienteService, data) {
        this.mesaService = mesaService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.ambienteService = ambienteService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.mesa = { numeroMesa: 0 };
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.mesaId != null) {
            this.onFindMesaByNumeroMesa(data.mesaId);
        }
    }
    MesaFormComponent.prototype.ngOnInit = function () {
        if (this.data.mesaId)
            this.title = "Alterar mesa";
        else
            this.title = "Inserir mesa";
        this.onListAmbientes("");
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    MesaFormComponent.prototype.onFindMesaByNumeroMesa = function (numeroMesa) {
        var _this = this;
        this.mesaService.findMesaByNumeroMesa(numeroMesa).subscribe(function (mesa) {
            _this.mesa = mesa;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    MesaFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (!this.mesa.ambiente || (this.mesa.ambiente && !this.mesa.ambiente.codigo)) {
            this.openSnackBarService.openError("O campo ambiente é obrigatório.");
            return;
        }
        if (!this.mesa.numeroMesa) {
            this.mesaService.insertMesa(this.mesa).subscribe(function (mesa) {
                _this.openSnackBarService.openSuccess("Mesa salva com sucesso.");
                _this.dialogRef.close(_this.mesa);
            }, function (err) {
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.mesaService.updateMesa(this.mesa).subscribe(function (mesa) {
                _this.openSnackBarService.openSuccess("Mesa atualizada com sucesso.");
                _this.dialogRef.close(_this.mesa);
            }, function (err) {
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    MesaFormComponent.prototype.onListAmbientes = function (filter) {
        var _this = this;
        this.ambienteService.listAmbientesByFilters(filter ? filter : "", null)
            .subscribe(function (ambientePage) {
            _this.ambientes = ambientePage.content.filter(function (c) { return c.situacao; });
        });
    };
    MesaFormComponent.prototype.displayFn = function (ambiente) {
        return ambiente ? ambiente.ambiente : undefined;
    };
    MesaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesa-form',
            template: __webpack_require__(/*! raw-loader!./mesa-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/mesa/mesa-form/mesa-form.component.html"),
            styles: [__webpack_require__(/*! ./mesa-form.component.scss */ "./src/app/modules/mesa/mesa-form/mesa-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["MesaService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["AmbienteService"], Object])
    ], MesaFormComponent);
    return MesaFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/mesa/mesa-list/mesa-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mesa/mesa-list/mesa-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzYS9tZXNhLWxpc3QvbWVzYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/mesa/mesa-list/mesa-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/mesa/mesa-list/mesa-list.component.ts ***!
  \***************************************************************/
/*! exports provided: MesaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaListComponent", function() { return MesaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mesa-form/mesa-form.component */ "./src/app/modules/mesa/mesa-form/mesa-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");









var MesaListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param mesaService
     */
    function MesaListComponent(dialog, _dialogService, paginationService, openSnackBarService, mesaService, ambienteService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.mesaService = mesaService;
        this.ambienteService = ambienteService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            numeroMesa: null,
            ambiente: null
        };
        this.ambienteFilter = "";
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__["TextMasks"];
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'numeroMesa', label: 'NÚMERO MESA', sortable: false },
            { name: 'ambiente.nome', label: 'AMBIENTE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('numeroMesa', 'ASC', 10);
    }
    MesaListComponent.prototype.ngOnInit = function () {
        this.onListMesas();
        this.onListAmbientes();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo mesa
     */
    MesaListComponent.prototype.onListMesas = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.mesaService.listMesasByFilters(this.filters.numeroMesa, this.filters.ambiente != null ? this.filters.ambiente.codigo : null, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    MesaListComponent.prototype.clearFilters = function () {
        this.filters = {
            numeroMesa: null,
            ambiente: null,
        };
        this.ambienteFilter = "";
        this.onListMesas();
        this.onListAmbientes();
    };
    MesaListComponent.prototype.openForm = function (mesa) {
        var _this = this;
        var dialogRef = this.dialog.open(_mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_2__["MesaFormComponent"], {
            width: '600px',
            height: 'auto',
            data: { mesaId: mesa ? mesa.numeroMesa : null }
        });
        dialogRef.afterClosed().subscribe(function (mesaSaved) {
            if (mesaSaved)
                _this.onListMesas();
        });
    };
    MesaListComponent.prototype.atualizarSituacaoMesa = function (mesa) {
        var _this = this;
        if (mesa.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta mesa ?",
                title: "Excluir mesa",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.mesaService.deleteMesa(mesa.numeroMesa).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Mesa excluída com sucesso.');
                        _this.onListMesas();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir esta mesa pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar mesa",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.mesaService.updateSituacaoMesa(mesa.numeroMesa, !mesa.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Mesa desativada com sucesso.');
                                    _this.onListMesas();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta mesa ?",
                title: "Ativar mesa",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.mesaService.updateSituacaoMesa(mesa.numeroMesa, !mesa.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Mesa ativado com sucesso.');
                        _this.onListMesas();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    MesaListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListMesas();
    };
    MesaListComponent.prototype.onListAmbientes = function () {
        var _this = this;
        this.ambienteService.listAmbientesByFilters(this.ambienteFilter ? this.ambienteFilter : "", null)
            .subscribe(function (ambientePage) {
            _this.ambientes = ambientePage.content.filter(function (c) { return c.situacao; });
            ;
        });
    };
    MesaListComponent.prototype.displayFn = function (ambiente) {
        return ambiente ? ambiente.ambiente : undefined;
    };
    MesaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mesa-list',
            template: __webpack_require__(/*! raw-loader!./mesa-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/mesa/mesa-list/mesa-list.component.html"),
            styles: [__webpack_require__(/*! ./mesa-list.component.scss */ "./src/app/modules/mesa/mesa-list/mesa-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["MesaService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["AmbienteService"]])
    ], MesaListComponent);
    return MesaListComponent;
}());



/***/ }),

/***/ "./src/app/modules/mesa/mesa.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/mesa/mesa.module.ts ***!
  \*********************************************/
/*! exports provided: MesaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaModule", function() { return MesaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mesa_list_mesa_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mesa-list/mesa-list.component */ "./src/app/modules/mesa/mesa-list/mesa-list.component.ts");
/* harmony import */ var _mesa_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesa.routing */ "./src/app/modules/mesa/mesa.routing.ts");
/* harmony import */ var _mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mesa-form/mesa-form.component */ "./src/app/modules/mesa/mesa-form/mesa-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var MesaModule = /** @class */ (function () {
    function MesaModule() {
    }
    MesaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _mesa_list_mesa_list_component__WEBPACK_IMPORTED_MODULE_2__["MesaListComponent"],
                _mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_4__["MesaFormComponent"],
            ],
            imports: [
                _mesa_routing__WEBPACK_IMPORTED_MODULE_3__["MesaRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _mesa_list_mesa_list_component__WEBPACK_IMPORTED_MODULE_2__["MesaListComponent"],
                _mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_4__["MesaFormComponent"],
                _mesa_routing__WEBPACK_IMPORTED_MODULE_3__["MesaRouting"]
            ],
            entryComponents: [
                _mesa_form_mesa_form_component__WEBPACK_IMPORTED_MODULE_4__["MesaFormComponent"]
            ],
            providers: []
        })
    ], MesaModule);
    return MesaModule;
}());



/***/ }),

/***/ "./src/app/modules/mesa/mesa.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/mesa/mesa.routing.ts ***!
  \**********************************************/
/*! exports provided: MesaRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesaRouting", function() { return MesaRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mesa_list_mesa_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesa-list/mesa-list.component */ "./src/app/modules/mesa/mesa-list/mesa-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var mesaRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _mesa_list_mesa_list_component__WEBPACK_IMPORTED_MODULE_3__["MesaListComponent"],
                data: {
                    title: 'Mesas',
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var MesaRouting = /** @class */ (function () {
    function MesaRouting() {
    }
    MesaRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(mesaRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MesaRouting);
    return MesaRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-mesa-mesa-module.js.map