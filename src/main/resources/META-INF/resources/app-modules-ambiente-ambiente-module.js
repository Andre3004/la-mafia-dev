(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-ambiente-ambiente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/ambiente/ambiente-form/ambiente-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/ambiente/ambiente-form/ambiente-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Informações\">\r\n            <form #qualificadorForm=\"ngForm\" fxLayout=\"column\" class=\"push-top-md\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Código</mat-label>\r\n                        <input uppercase matInput [(ngModel)]=\"ambiente.codigo\" [disabled]=\"true\" name=\"codigo\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Ambiente</mat-label>\r\n                        <input uppercase required [(ngModel)]=\"ambiente.ambiente\" name=\"ambiente\" matInput\r\n                            maxlength=\"144\" placeholder=\"Digite o nome do ambiente\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Capacidade de mesas</mat-label>\r\n                        <input required [(ngModel)]=\"ambiente.capacidadeMesas\"\r\n                            [textMask]=\"{mask: textMasks.getNumbersOnlyMask(4), guide: false}\" name=\"nome\" matInput\r\n                            placeholder=\"Digite a capacidade de mesas\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Descrição</mat-label>\r\n                        <textarea uppercase [(ngModel)]=\"ambiente.descricao\" name=\"descricao\" matInput maxlength=\"144\"\r\n                            placeholder=\"Digite a descrição do ambiente\"></textarea>\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </form>\r\n\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Fotos\">\r\n\r\n            <div fxLayout=\"row\" fxFlex>\r\n                <div fxFlex></div>\r\n                <button color=\"accent\" style=\"right: 0;\" class=\"white-btn push-top-sm\" (click)=\"addImagemButton()\"\r\n                    mat-raised-button>ADICIONAR ARQUIVO</button>\r\n            </div>\r\n\r\n            <div style=\"max-height: 350px;overflow: auto;\">\r\n                <div *ngFor=\"let ambienteImagem of ambiente.ambienteImagems; let i = index\">\r\n                    <div class=\"push-top-sm\" fxFlex\r\n                        style=\"background-color: #b71c1c; color: white; font-weight: bold;border-radius: 30px;\"\r\n                        fxLayoutAlign=\"space-between center\">\r\n                        <label *ngIf=\"!fotoImage[i]?.base64 && !ambienteImagem.anexoUuid\" style=\"max-width: 400px;\"\r\n                            class=\"text-truncate push-left-md\">\r\n                            Selecione o arquivo...\r\n                        </label>\r\n\r\n\r\n                        <label *ngIf=\"ambienteImagem?.nomeArquivo\" style=\"max-width: 400px;\"\r\n                            class=\"text-truncate push-left-md\">\r\n                            {{ambienteImagem?.nomeArquivo}}\r\n                        </label>\r\n\r\n                        <div class=\"push-right-sm\">\r\n                            <button (click)=\"removeAnexo(i)\" matTooltip=\"Remover anexo\" mat-icon-button>\r\n                                <mat-icon>delete</mat-icon>\r\n                            </button>\r\n\r\n                            <button (click)=\"fotoInput.click()\"\r\n                                *ngIf=\"!fotoImage[i]?.base64 && !ambienteImagem?.anexoUuid\" mat-icon-button\r\n                                matTooltip=\"Adicionar anexo\">\r\n                                <mat-icon>attach_file</mat-icon>\r\n                            </button>\r\n\r\n                            <button *ngIf=\"ambienteImagem.anexoUuid\" matTooltip=\"Download anexo\"\r\n                                (click)=\"downloadFile(i)\" mat-icon-button>\r\n                                <mat-icon>file_download</mat-icon>\r\n                            </button>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <input hidden type=\"file\" #fotoInput (change)=\"setAmbienteImagemAnexo($event, i)\">\r\n                </div>\r\n\r\n                <mat-card *ngIf=\"ambiente?.ambienteImagems?.length == 0\" style=\"max-height: 350px;overflow: auto;\">\r\n                    <div class=\"pad-md\" fxLayoutAlign=\"center \">\r\n                        <label>Nenhum arquivo vinculada a este ambiente.</label>\r\n                    </div>\r\n                </mat-card>\r\n\r\n            </div>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Mesas\">\r\n\r\n            <mat-card style=\"max-height: 350px;overflow: auto;\">\r\n\r\n                <td-data-table *ngIf=\"ambiente?.mesas?.length > 0\" #dataTable [data]=\"ambiente.mesas\"\r\n                    [columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n                    <ng-template tdDataTableTemplate=\"numeroMesa\" let-mesa=\"row\">\r\n                        <span class=\"text-truncate\">\r\n                            {{ mesa?.numeroMesa}}\r\n                        </span>\r\n                    </ng-template>\r\n\r\n                    <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-mesa=\"row\">\r\n                        <mat-icon *ngIf=\"mesa?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"!mesa?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n                    </ng-template>\r\n\r\n                </td-data-table>\r\n\r\n                <div *ngIf=\"ambiente?.mesas?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n                    <label>Nenhuma mesa vinculada a este ambiente.</label>\r\n                </div>\r\n            </mat-card>\r\n\r\n        </mat-tab>\r\n\r\n    </mat-tab-group>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ ambiente.created ? (ambiente.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ ambiente.updated ? (ambiente.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n        <button  (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n            color=\"primary\">\r\n            SALVAR\r\n        </button>\r\n        <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n            CANCELAR\r\n        </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/ambiente/ambiente-list/ambiente-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/ambiente/ambiente-list/ambiente-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Ambiente</mat-label>\r\n\t\t\t<input uppercase matInput placeholder=\"Pesquisar por nome\" maxlength=\"144\" [(ngModel)]=\"filters.nome\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVO AMBIENTE</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListAmbientes()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"nome\" let-ambiente=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ ambiente?.ambiente}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-ambiente=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"ambiente?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!ambiente?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-ambiente=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar ambiente\" (click)=\"$event.stopPropagation(); openForm(ambiente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!ambiente.situacao\" matTooltip=\"Ativar ambiente\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoAmbiente(ambiente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"ambiente.situacao\" matTooltip=\"Excluir/Desativar ambiente\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoAmbiente(ambiente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/ambiente/ambiente-form/ambiente-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente-form/ambiente-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1iaWVudGUvYW1iaWVudGUtZm9ybS9hbWJpZW50ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ambiente/ambiente-form/ambiente-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente-form/ambiente-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: AmbienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbienteFormComponent", function() { return AmbienteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var AmbienteFormComponent = /** @class */ (function () {
    function AmbienteFormComponent(ambienteService, openSnackBarService, dialogRef, arquivoService, changeDetectionRef, data) {
        this.ambienteService = ambienteService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.changeDetectionRef = changeDetectionRef;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.ambiente = { codigo: 0, ambienteImagems: [], mesas: [] };
        this.fotoImage = [];
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.imagemsRemoved = [];
        this.mesas = [];
        this.tableColumns = [
            { name: 'numeroMesa', label: 'NÚMERO MESA', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
        ];
        if (data.ambienteId != null) {
            this.onFindAmbienteById(data.ambienteId);
        }
    }
    AmbienteFormComponent.prototype.ngOnInit = function () {
        if (this.data.ambienteId)
            this.title = "Alterar ambiente";
        else
            this.title = "Inserir ambiente";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    AmbienteFormComponent.prototype.onFindAmbienteById = function (ambienteId) {
        var _this = this;
        this.ambienteService.findAmbienteById(ambienteId).subscribe(function (ambiente) {
            _this.ambiente = ambiente;
            if (ambiente.ambienteImagems != null && ambiente.ambienteImagems.length > 0) {
                ambiente.ambienteImagems.forEach(function (ambienteImagem) { return _this.fotoImage.push({ base64: null }); });
            }
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    AmbienteFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        var anexoOld = null;
        if (this.ambiente.ambienteImagems && this.ambiente.ambienteImagems.length > 0)
            this.ambiente.ambienteImagems = this.ambiente.ambienteImagems.filter(function (ambienteImagem) { return ambienteImagem.anexo; });
        if (!this.ambiente.codigo) {
            this.ambienteService.insertAmbiente(this.ambiente).subscribe(function (ambiente) {
                _this.openSnackBarService.openSuccess("Ambiente salvo com sucesso.");
                _this.dialogRef.close(_this.ambiente);
                _this.changeDetectionRef.detectChanges();
            }, function (err) {
                _this.changeDetectionRef.detectChanges();
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.ambienteService.updateAmbiente(this.ambiente, this.imagemsRemoved).subscribe(function (ambiente) {
                _this.openSnackBarService.openSuccess("Ambiente atualizado com sucesso.");
                _this.dialogRef.close(_this.ambiente);
                _this.changeDetectionRef.detectChanges();
            }, function (err) {
                // if(anexoOld) this.ambiente.anexo = anexoOld;
                _this.changeDetectionRef.detectChanges();
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           FOTO
    *-------------------------------------------------------------------*/
    AmbienteFormComponent.prototype.addImagemButton = function () {
        this.ambiente.ambienteImagems.push({});
        this.fotoImage.push({ base64: null });
    };
    AmbienteFormComponent.prototype.removeAnexo = function (index) {
        if (this.ambiente.ambienteImagems[index].anexoUuid)
            this.imagemsRemoved.push(this.ambiente.ambienteImagems[index].codigo);
        this.ambiente.ambienteImagems.splice(index, 1);
        this.fotoImage.splice(index, 1);
    };
    AmbienteFormComponent.prototype.downloadFile = function (index) {
        var _this = this;
        this.arquivoService.downloadArquivoByUuid(this.ambiente.ambienteImagems[index].anexoUuid).subscribe(function (result) {
            window.location.href = result;
        }, function (exception) { return _this.openSnackBarService.openError(exception.message); });
    };
    AmbienteFormComponent.prototype.setAmbienteImagemAnexo = function (event, index) {
        var _this = this;
        var ambienteImagem = {};
        if (event.target.files[0]) {
            if (event.target.files[0].size <= 10000000) //10MB
             {
                ambienteImagem.anexo = event.target;
                ambienteImagem.nomeArquivo = event.target.files[0].name;
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.fotoImage[index].base64 = event.target.result;
                };
                ambienteImagem.anexoUuid = null;
                reader.readAsDataURL(event.target.files[0]);
                this.ambiente.ambienteImagems[index] = ambienteImagem;
            }
            else {
                this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
            }
        }
        else {
            this.ambiente.ambienteImagems[index].anexo = null;
        }
    };
    AmbienteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ambiente-form',
            template: __webpack_require__(/*! raw-loader!./ambiente-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/ambiente/ambiente-form/ambiente-form.component.html"),
            styles: [__webpack_require__(/*! ./ambiente-form.component.scss */ "./src/app/modules/ambiente/ambiente-form/ambiente-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["AmbienteService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], Object])
    ], AmbienteFormComponent);
    return AmbienteFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/ambiente/ambiente-list/ambiente-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente-list/ambiente-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1iaWVudGUvYW1iaWVudGUtbGlzdC9hbWJpZW50ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/ambiente/ambiente-list/ambiente-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente-list/ambiente-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: AmbienteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbienteListComponent", function() { return AmbienteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ambiente-form/ambiente-form.component */ "./src/app/modules/ambiente/ambiente-form/ambiente-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var AmbienteListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param ambienteService
     */
    function AmbienteListComponent(dialog, _dialogService, paginationService, openSnackBarService, ambienteService, activatedRoute) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.ambienteService = ambienteService;
        this.activatedRoute = activatedRoute;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            nome: '',
        };
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'nome', label: 'AMBIENTE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }
    AmbienteListComponent.prototype.ngOnInit = function () {
        this.onListAmbientes();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    AmbienteListComponent.prototype.openForm = function (ambiente) {
        var _this = this;
        var dialogRef = this.dialog.open(_ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_2__["AmbienteFormComponent"], {
            width: '800px',
            height: 'auto',
            data: { ambienteId: ambiente ? ambiente.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (ambienteSaved) {
            if (ambienteSaved)
                _this.onListAmbientes();
        });
    };
    AmbienteListComponent.prototype.atualizarSituacaoAmbiente = function (ambiente) {
        var _this = this;
        if (ambiente.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este ambiente ?",
                title: "Excluir ambiente",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.ambienteService.deleteAmbiente(ambiente.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Ambiente excluído com sucesso.');
                        _this.onListAmbientes();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este ambiente pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar ambiente",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.ambienteService.updateSituacaoAmbiente(ambiente.codigo, !ambiente.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Ambiente desativado com sucesso.');
                                    _this.onListAmbientes();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este ambiente ?",
                title: "Ativar ambiente",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.ambienteService.updateSituacaoAmbiente(ambiente.codigo, !ambiente.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Ambiente ativado com sucesso.');
                        _this.onListAmbientes();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo ambiente
     */
    AmbienteListComponent.prototype.onListAmbientes = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.ambienteService.listAmbientesByFilters(this.filters.nome, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    AmbienteListComponent.prototype.clearFilters = function () {
        this.filters = {
            nome: '',
        };
        this.onListAmbientes();
    };
    AmbienteListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListAmbientes();
    };
    AmbienteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ambiente-list',
            template: __webpack_require__(/*! raw-loader!./ambiente-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/ambiente/ambiente-list/ambiente-list.component.html"),
            styles: [__webpack_require__(/*! ./ambiente-list.component.scss */ "./src/app/modules/ambiente/ambiente-list/ambiente-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["AmbienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
    ], AmbienteListComponent);
    return AmbienteListComponent;
}());



/***/ }),

/***/ "./src/app/modules/ambiente/ambiente.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente.module.ts ***!
  \*****************************************************/
/*! exports provided: AmbienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbienteModule", function() { return AmbienteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ambiente_list_ambiente_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ambiente-list/ambiente-list.component */ "./src/app/modules/ambiente/ambiente-list/ambiente-list.component.ts");
/* harmony import */ var _ambiente_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ambiente.routing */ "./src/app/modules/ambiente/ambiente.routing.ts");
/* harmony import */ var _ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ambiente-form/ambiente-form.component */ "./src/app/modules/ambiente/ambiente-form/ambiente-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var AmbienteModule = /** @class */ (function () {
    function AmbienteModule() {
    }
    AmbienteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ambiente_list_ambiente_list_component__WEBPACK_IMPORTED_MODULE_2__["AmbienteListComponent"],
                _ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_4__["AmbienteFormComponent"],
            ],
            imports: [
                _ambiente_routing__WEBPACK_IMPORTED_MODULE_3__["AmbienteRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _ambiente_list_ambiente_list_component__WEBPACK_IMPORTED_MODULE_2__["AmbienteListComponent"],
                _ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_4__["AmbienteFormComponent"],
                _ambiente_routing__WEBPACK_IMPORTED_MODULE_3__["AmbienteRouting"]
            ],
            entryComponents: [
                _ambiente_form_ambiente_form_component__WEBPACK_IMPORTED_MODULE_4__["AmbienteFormComponent"]
            ],
            providers: []
        })
    ], AmbienteModule);
    return AmbienteModule;
}());



/***/ }),

/***/ "./src/app/modules/ambiente/ambiente.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/ambiente/ambiente.routing.ts ***!
  \******************************************************/
/*! exports provided: AmbienteRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmbienteRouting", function() { return AmbienteRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ambiente_list_ambiente_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ambiente-list/ambiente-list.component */ "./src/app/modules/ambiente/ambiente-list/ambiente-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var ambienteRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _ambiente_list_ambiente_list_component__WEBPACK_IMPORTED_MODULE_3__["AmbienteListComponent"],
                data: {
                    title: 'Ambientes',
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var AmbienteRouting = /** @class */ (function () {
    function AmbienteRouting() {
    }
    AmbienteRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ambienteRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AmbienteRouting);
    return AmbienteRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-ambiente-ambiente-module.js.map