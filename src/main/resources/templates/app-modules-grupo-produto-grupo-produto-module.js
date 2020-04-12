(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-grupo-produto-grupo-produto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between center\">\r\n    <h2 mat-dialog-title>{{title}}</h2>\r\n</div>\r\n\r\n<mat-dialog-content>\r\n    <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Código</mat-label>\r\n                <input uppercase matInput [(ngModel)]=\"grupoProduto.codigo\" [disabled]=\"true\" name=\"codigo\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Grupo de produto</mat-label>\r\n                <input uppercase required [(ngModel)]=\"grupoProduto.grupoProduto\" name=\"nome\" matInput maxlength=\"144\"\r\n                    placeholder=\"Digite o nome do grupo\">\r\n            </mat-form-field>\r\n\r\n            <mat-checkbox fxFlex [(ngModel)]=\"grupoProduto.exigeAno\" name=\"exigeAno\">Exige ano ?</mat-checkbox>\r\n\r\n           \r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"push-top-sm\" fxFlex\r\n            style=\"background-color: #b71c1c; color: white; font-weight: bold;border-radius: 30px;\"\r\n            fxLayoutAlign=\"space-between center\">\r\n            <label *ngIf=\"!fotoImage && !grupoProduto.anexoUuid\" style=\"max-width: 400px;\"\r\n                class=\"text-truncate push-left-md\">\r\n                Selecione o arquivo...\r\n            </label>\r\n\r\n\r\n            <label *ngIf=\"grupoProduto?.nomeArquivo\" style=\"max-width: 400px;\" class=\"text-truncate push-left-md\">\r\n                {{grupoProduto?.nomeArquivo}}\r\n            </label>\r\n\r\n            <div class=\"push-right-sm\">\r\n                <button (click)=\"fotoInput.click()\" *ngIf=\"!fotoImage && !grupoProduto?.anexoUuid\" mat-icon-button\r\n                    matTooltip=\"Adicionar anexo\">\r\n                    <mat-icon>attach_file</mat-icon>\r\n                </button>\r\n\r\n                <button *ngIf=\"fotoImage || grupoProduto?.anexoUuid\" (click)=\"removeAnexo()\" matTooltip=\"Remover anexo\"\r\n                    mat-icon-button>\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n\r\n                <button *ngIf=\"grupoProduto.anexoUuid\" matTooltip=\"Download anexo\" (click)=\"downloadFile()\"\r\n                    mat-icon-button>\r\n                    <mat-icon>file_download</mat-icon>\r\n                </button>\r\n\r\n            </div>\r\n\r\n            <input hidden type=\"file\" #fotoInput (change)=\"setGrupoProdutoAnexo($event)\">\r\n        </div>\r\n\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ grupoProduto.created ? (grupoProduto.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ grupoProduto.updated ? (grupoProduto.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n        color=\"primary\">\r\n        SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n        CANCELAR\r\n    </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Grupo de produto</mat-label>\r\n\t\t\t<input matInput uppercase placeholder=\"Pesquisar por nome\" maxlength=\"144\" [(ngModel)]=\"filters.nome\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVO GRUPO DE PRODUTO</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListGrupoProdutos()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"nome\" let-grupoProduto=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ grupoProduto?.grupoProduto}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-grupoProduto=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"grupoProduto?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!grupoProduto?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-grupoProduto=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar grupo de produto\" (click)=\"$event.stopPropagation(); openForm(grupoProduto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!grupoProduto.situacao\" matTooltip=\"Ativar grupo de produto\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoGrupoProduto(grupoProduto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"grupoProduto.situacao\" matTooltip=\"Excluir/Desativar grupo de produto\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoGrupoProduto(grupoProduto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3J1cG8tcHJvZHV0by9ncnVwby1wcm9kdXRvLWZvcm0vZ3J1cG8tcHJvZHV0by1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GrupoProdutoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoProdutoFormComponent", function() { return GrupoProdutoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");





var GrupoProdutoFormComponent = /** @class */ (function () {
    function GrupoProdutoFormComponent(grupoProdutoService, openSnackBarService, dialogRef, arquivoService, data) {
        this.grupoProdutoService = grupoProdutoService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.grupoProduto = { codigo: 0, exigeAno: false };
        if (data.grupoProdutoId != null) {
            this.onFindGrupoProdutoById(data.grupoProdutoId);
        }
    }
    GrupoProdutoFormComponent.prototype.ngOnInit = function () {
        if (this.data.grupoProdutoId)
            this.title = "Alterar grupo de produto";
        else
            this.title = "Inserir grupo de produto";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    GrupoProdutoFormComponent.prototype.onFindGrupoProdutoById = function (grupoProdutoId) {
        var _this = this;
        this.grupoProdutoService.findGrupoProdutoById(grupoProdutoId).subscribe(function (grupoProduto) {
            _this.grupoProduto = grupoProduto;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    GrupoProdutoFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        var anexoOld = null;
        if (this.grupoProduto.anexo && typeof (this.grupoProduto.anexo) == 'string') {
            anexoOld = this.grupoProduto.anexo;
            this.grupoProduto.anexo = null;
        }
        if (!this.grupoProduto.codigo) {
            this.grupoProdutoService.insertGrupoProduto(this.grupoProduto).subscribe(function (grupoProduto) {
                _this.openSnackBarService.openSuccess("Grupo de produto salvo com sucesso.");
                _this.dialogRef.close(_this.grupoProduto);
            }, function (err) {
                if (anexoOld)
                    _this.grupoProduto.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.grupoProdutoService.updateGrupoProduto(this.grupoProduto).subscribe(function (grupoProduto) {
                _this.openSnackBarService.openSuccess("Grupo de produto atualizado com sucesso.");
                _this.dialogRef.close(_this.grupoProduto);
            }, function (err) {
                if (anexoOld)
                    _this.grupoProduto.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           FOTO
    *-------------------------------------------------------------------*/
    GrupoProdutoFormComponent.prototype.removeAnexo = function () {
        this.grupoProduto.anexo = null;
        this.grupoProduto.anexoUuid = null;
        this.fotoImage = null;
        this.grupoProduto.nomeArquivo = null;
    };
    GrupoProdutoFormComponent.prototype.downloadFile = function () {
        var _this = this;
        this.arquivoService.downloadArquivoByUuid(this.grupoProduto.anexoUuid).subscribe(function (result) {
            window.location.href = result;
        }, function (exception) { return _this.openSnackBarService.openError(exception.message); });
    };
    GrupoProdutoFormComponent.prototype.setGrupoProdutoAnexo = function (event) {
        var _this = this;
        if (event.target.files[0]) {
            if (event.target.files[0].size <= 10000000) //10MB
             {
                this.grupoProduto.anexo = event.target;
                this.grupoProduto.nomeArquivo = event.target.files[0].name;
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.fotoImage = event.target.result;
                };
                this.grupoProduto.anexoUuid = null;
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
            }
        }
        else {
            this.grupoProduto.anexo = null;
        }
    };
    GrupoProdutoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grupo-produto-form',
            template: __webpack_require__(/*! raw-loader!./grupo-produto-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.html"),
            styles: [__webpack_require__(/*! ./grupo-produto-form.component.scss */ "./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["GrupoProdutoService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"], Object])
    ], GrupoProdutoFormComponent);
    return GrupoProdutoFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ3J1cG8tcHJvZHV0by9ncnVwby1wcm9kdXRvLWxpc3QvZ3J1cG8tcHJvZHV0by1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: GrupoProdutoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoProdutoListComponent", function() { return GrupoProdutoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grupo-produto-form/grupo-produto-form.component */ "./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var GrupoProdutoListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param grupoProdutoService
     */
    function GrupoProdutoListComponent(dialog, _dialogService, paginationService, openSnackBarService, grupoProdutoService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.grupoProdutoService = grupoProdutoService;
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
            { name: 'nome', label: 'GRUPO DE PRODUTO', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }
    GrupoProdutoListComponent.prototype.ngOnInit = function () {
        this.onListGrupoProdutos();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    GrupoProdutoListComponent.prototype.openForm = function (grupoProduto) {
        var _this = this;
        var dialogRef = this.dialog.open(_grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_2__["GrupoProdutoFormComponent"], {
            width: '800px',
            height: 'auto',
            data: { grupoProdutoId: grupoProduto ? grupoProduto.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (grupoProdutoSaved) {
            if (grupoProdutoSaved)
                _this.onListGrupoProdutos();
        });
    };
    GrupoProdutoListComponent.prototype.atualizarSituacaoGrupoProduto = function (grupoProduto) {
        var _this = this;
        if (grupoProduto.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta grupo de produto ?",
                title: "Excluir grupo de produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.grupoProdutoService.deleteGrupoProduto(grupoProduto.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Grupo de produto excluído com sucesso.');
                        _this.onListGrupoProdutos();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este grupo de produto pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar grupo de produto",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.grupoProdutoService.updateSituacaoGrupoProduto(grupoProduto.codigo, !grupoProduto.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Grupo de produto desativado com sucesso.');
                                    _this.onListGrupoProdutos();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este grupo de produto ?",
                title: "Ativar grupo de produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.grupoProdutoService.updateSituacaoGrupoProduto(grupoProduto.codigo, !grupoProduto.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Grupo de produto ativado com sucesso.');
                        _this.onListGrupoProdutos();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo grupoProduto
     */
    GrupoProdutoListComponent.prototype.onListGrupoProdutos = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.grupoProdutoService.listGrupoProdutosByFilters(this.filters.nome, null, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    GrupoProdutoListComponent.prototype.clearFilters = function () {
        this.filters = {
            nome: '',
        };
        this.onListGrupoProdutos();
    };
    GrupoProdutoListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListGrupoProdutos();
    };
    GrupoProdutoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grupo-produto-list',
            template: __webpack_require__(/*! raw-loader!./grupo-produto-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.html"),
            styles: [__webpack_require__(/*! ./grupo-produto-list.component.scss */ "./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["GrupoProdutoService"]])
    ], GrupoProdutoListComponent);
    return GrupoProdutoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto.module.ts ***!
  \***************************************************************/
/*! exports provided: GrupoProdutoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoProdutoModule", function() { return GrupoProdutoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _grupo_produto_list_grupo_produto_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grupo-produto-list/grupo-produto-list.component */ "./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.ts");
/* harmony import */ var _grupo_produto_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupo-produto.routing */ "./src/app/modules/grupo-produto/grupo-produto.routing.ts");
/* harmony import */ var _grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grupo-produto-form/grupo-produto-form.component */ "./src/app/modules/grupo-produto/grupo-produto-form/grupo-produto-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var GrupoProdutoModule = /** @class */ (function () {
    function GrupoProdutoModule() {
    }
    GrupoProdutoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _grupo_produto_list_grupo_produto_list_component__WEBPACK_IMPORTED_MODULE_2__["GrupoProdutoListComponent"],
                _grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["GrupoProdutoFormComponent"],
            ],
            imports: [
                _grupo_produto_routing__WEBPACK_IMPORTED_MODULE_3__["GrupoProdutoRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _grupo_produto_list_grupo_produto_list_component__WEBPACK_IMPORTED_MODULE_2__["GrupoProdutoListComponent"],
                _grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["GrupoProdutoFormComponent"],
                _grupo_produto_routing__WEBPACK_IMPORTED_MODULE_3__["GrupoProdutoRouting"]
            ],
            entryComponents: [
                _grupo_produto_form_grupo_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["GrupoProdutoFormComponent"]
            ],
            providers: []
        })
    ], GrupoProdutoModule);
    return GrupoProdutoModule;
}());



/***/ }),

/***/ "./src/app/modules/grupo-produto/grupo-produto.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/grupo-produto/grupo-produto.routing.ts ***!
  \****************************************************************/
/*! exports provided: GrupoProdutoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrupoProdutoRouting", function() { return GrupoProdutoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _grupo_produto_list_grupo_produto_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grupo-produto-list/grupo-produto-list.component */ "./src/app/modules/grupo-produto/grupo-produto-list/grupo-produto-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var grupoProdutoRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _grupo_produto_list_grupo_produto_list_component__WEBPACK_IMPORTED_MODULE_3__["GrupoProdutoListComponent"],
                data: {
                    title: 'Grupos de produtos',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var GrupoProdutoRouting = /** @class */ (function () {
    function GrupoProdutoRouting() {
    }
    GrupoProdutoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(grupoProdutoRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GrupoProdutoRouting);
    return GrupoProdutoRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-grupo-produto-grupo-produto-module.js.map