(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-condicao-pagamento-condicao-pagamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"space-between center\">\r\n    <h2 mat-dialog-title>{{title}}</h2>\r\n    <button color=\"accent\" style=\"right: 0;\" class=\"white-btn push-top-sm\"\r\n        (click)=\"addParcela()\" mat-raised-button>ADICIONAR PARCELA</button>\r\n</div>\r\n\r\n<mat-dialog-content>\r\n\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Informações\">\r\n            <form #qualificadorForm=\"ngForm\" fxLayout=\"column\" class=\"push-top-md\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\">\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Código</mat-label>\r\n                        <input uppercase matInput [(ngModel)]=\"condicaoPagamento.codigo\" [disabled]=\"true\"\r\n                            name=\"codigo\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Condição de pagamento</mat-label>\r\n                        <input uppercase required maxlength=\"144\" [(ngModel)]=\"condicaoPagamento.condicaoPagamento\" name=\"condicaoPagamento\" matInput\r\n                            placeholder=\"Digite a condição de pagamento\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Juros %</mat-label>\r\n                        <input uppercase [(ngModel)]=\"condicaoPagamento.juros\" name=\"juros\" matInput\r\n                            [textMask]=\"{mask: masks.getDecimalNumberMask(3), guide: false}\"\r\n                            placeholder=\"Digite o juros\">\r\n                    </mat-form-field>\r\n\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Multa %</mat-label>\r\n                        <input uppercase [(ngModel)]=\"condicaoPagamento.multa\" name=\"multa\" matInput\r\n                            [textMask]=\"{mask: masks.getDecimalNumberMask(3), guide: false}\"\r\n                            placeholder=\"Digite a multa\">\r\n                    </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n\r\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\">\r\n\r\n                    <mat-form-field fxFlex appearance=\"outline\">\r\n                        <mat-label>Descontos %</mat-label>\r\n                        <input uppercase [(ngModel)]=\"condicaoPagamento.desconto\" name=\"desconto\" matInput\r\n                            [textMask]=\"{mask: masks.getDecimalNumberMask(3), guide: false}\"\r\n                            placeholder=\"Digite o desconto\">\r\n                    </mat-form-field>\r\n\r\n                </div>\r\n\r\n            </form>\r\n        </mat-tab>\r\n\r\n        <mat-tab label=\"Parcelas\" class=\"push-top-md\">\r\n\r\n            <mat-card  *ngIf=\"condicaoPagamento?.parcelas?.length > 0\" fxLayout=\"row\" fxLayoutAlign=\" center\" fxLayoutGap=\"30px\" style=\"padding: 15px;\">\r\n\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n                    <label style=\"margin-bottom: 5px;font-weight: bold;\">Total de parcelas</label>\r\n                    <label>{{totalParcelas}}</label>\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n                    <label style=\"margin-bottom: 5px;font-weight: bold;\">Total de dias</label>\r\n                    <label>{{totalDias}}</label>\r\n                </div>\r\n\r\n                <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n                    <label style=\"margin-bottom: 5px;font-weight: bold;\">Porcentagem total</label>\r\n                    <label >{{totalPorcentagem}}%</label>\r\n                </div>\r\n\r\n\r\n            </mat-card>\r\n            <form #parcelaForm=\"ngForm\">\r\n                <div fxLayout=\"row\" fxLayoutGap=\"30px\" class=\"push-top-md\" >\r\n                    <div style=\"max-height: 350px;overflow: auto;width: 100%;\" >\r\n                        <div *ngFor=\"let parcela of condicaoPagamento.parcelas; let i = index\" >\r\n                            <div class=\"push-top-sm\" fxLayoutAlign=\" center\">\r\n\r\n                                <mat-form-field fxFlex appearance=\"outline\">\r\n                                    <mat-label>Parcela</mat-label>\r\n                                    <input required uppercase [disabled]=\"true\" [(ngModel)]=\"parcela.parcela\" name=\"parcela{{i}}\" matInput\r\n                                        [textMask]=\"{mask: masks.getNumbersOnlyMask(4), guide: false}\"\r\n                                        >\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field fxFlex appearance=\"outline\" class=\"push-left-md\">\r\n                                    <mat-label>Dias</mat-label>\r\n                                    <input required uppercase [(ngModel)]=\"parcela.dias\" name=\"dias{{i}}\" matInput\r\n                                        [textMask]=\"{mask: masks.getNumbersOnlyMask(4), guide: false}\"\r\n                                        placeholder=\"Digite os dias\">\r\n                                </mat-form-field>\r\n\r\n\r\n                                <mat-form-field fxFlex appearance=\"outline\" class=\"push-left-md\">\r\n                                    <mat-label>Porcentagem (%)</mat-label>\r\n                                    <input required uppercase [(ngModel)]=\"parcela.porcentagem\" name=\"porcentagem{{i}}\"\r\n                                        matInput [textMask]=\"{mask: masks.getDecimalNumberMask(3,2), guide: false}\"\r\n                                        placeholder=\"Digite a porcentagem\">\r\n                                </mat-form-field>\r\n\r\n                                <mat-form-field fxFlex appearance=\"outline\" class=\"push-left-md\">\r\n                                    <mat-label>Forma de Pagamento</mat-label>\r\n                                    <input required type=\"text\" matInput [matAutocomplete]=\"auto\" #inputFilter\r\n                                        [(ngModel)]=\"parcela.formaPagamento\" name=\"formaPagamento{{i}}\"\r\n                                        (ngModelChange)=\"onListFormasPagamento(inputFilter.value);\"\r\n                                        [disabled]=\"parcela?.formaPagamento?.codigo\">\r\n                                    <button *ngIf=\"parcela.formaPagamento\" (click)=\"parcela.formaPagamento = null\"\r\n                                        matTooltip=\"Remover forma de pagamento\" matSuffix mat-icon-button\r\n                                        class=\"tc-grey-700 delete-button-hover\">\r\n                                        <mat-icon>delete</mat-icon>\r\n                                    </button>\r\n\r\n                                </mat-form-field>\r\n\r\n                                <button (click)=\"redirect()\" mat-mini-fab color=\"primary\" style=\"margin: 0 0 22px 13px;\" matTooltip=\"Ir para forma de pagamento\">\r\n                                    <mat-icon>\r\n                                        launch\r\n                                    </mat-icon>\r\n                                </button>\r\n\r\n                                <mat-autocomplete [displayWith]=\"displayFn\" #auto=\"matAutocomplete\"\r\n                                    (optionSelected)=\"parcela.formaPagamento = $event.option.value; onListFormasPagamento();\">\r\n                                    <mat-option [value]=\"null\">Nenhum</mat-option>\r\n                                    <mat-option *ngFor=\"let formaPagamento of formasPagamento\" [value]=\"formaPagamento\">\r\n                                        {{formaPagamento.codigo}} - {{formaPagamento.formaPagamento}}\r\n                                    </mat-option>\r\n                                </mat-autocomplete>\r\n\r\n                                <button (click)=\"removeParcela(i)\" class=\"tc-grey-700 delete-button-hover push-left-md\"\r\n                                    matTooltip=\"Remover parcela\" mat-icon-button>\r\n                                    <mat-icon>remove_circle</mat-icon>\r\n                                </button>\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <mat-card *ngIf=\"condicaoPagamento?.parcelas?.length == 0\">\r\n                    <div class=\"pad-md\" fxLayoutAlign=\"center \">\r\n                        <label>Nenhuma parcela vinculada a esta condição de pagamento.</label>\r\n                    </div>\r\n                </mat-card>\r\n\r\n            </form>\r\n\r\n        </mat-tab>\r\n\r\n    </mat-tab-group>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ condicaoPagamento.created ? (condicaoPagamento.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ condicaoPagamento.updated ? (condicaoPagamento.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n        color=\"primary\">\r\n        SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n        CANCELAR\r\n    </button>\r\n    </div>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>CÓDIGO</mat-label>\r\n\t\t\t<input matInput uppercase placeholder=\"Pesquisar por codigo\" [textMask]=\"{mask: masks.getNumbersOnlyMask(8), guide: false}\" [(ngModel)]=\"filters.codigo\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>CONDIÇÃO DE PAGAMENTO</mat-label>\r\n\t\t\t<input matInput uppercase placeholder=\"Pesquisar por condição de pagamento\" [(ngModel)]=\"filters.condicaoPagamento\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVA CONDIÇÃO DE PAGAMENTO</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListCondicaoPagamentos()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\">\r\n\t\t\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-condicaoPagamento=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"condicaoPagamento?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!condicaoPagamento?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\t\t\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-condicaoPagamento=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar condição de pagamento\" (click)=\"$event.stopPropagation(); openForm(condicaoPagamento)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!condicaoPagamento.situacao\" matTooltip=\"Ativar condição de pagamento\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCondicaoPagamento(condicaoPagamento)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"condicaoPagamento.situacao\" matTooltip=\"Excluir/Desativar condição de pagamento\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCondicaoPagamento(condicaoPagamento)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<!-- <ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"condicaoPagamento\" let-condicaoPagamento=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{condicaoPagamento?.condicaoPagamento}}\r\n\t\t\t</span>\r\n\t\t</ng-template> -->\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZGljYW8tcGFnYW1lbnRvL2NvbmRpY2FvLXBhZ2FtZW50by1mb3JtL2NvbmRpY2FvLXBhZ2FtZW50by1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CondicaoPagamentoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicaoPagamentoFormComponent", function() { return CondicaoPagamentoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var CondicaoPagamentoFormComponent = /** @class */ (function () {
    function CondicaoPagamentoFormComponent(condicaoPagamentoService, formaPagamentoService, openSnackBarService, dialogRef, arquivoService, data) {
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.formaPagamentoService = formaPagamentoService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.condicaoPagamento = { codigo: 0, parcelas: [] };
        this.condicaoPagamentoParcelasToRemoved = [];
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.condicaoPagamentoId != null) {
            this.onFindCondicaoPagamentoById(data.condicaoPagamentoId);
        }
        this.onListFormasPagamento("");
    }
    CondicaoPagamentoFormComponent.prototype.ngOnInit = function () {
        if (this.data.condicaoPagamentoId)
            this.title = "Alterar condição de pagamento";
        else
            this.title = "Inserir condição de pagamento";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    CondicaoPagamentoFormComponent.prototype.onFindCondicaoPagamentoById = function (condicaoPagamentoId) {
        var _this = this;
        this.condicaoPagamentoService.findCondicaoPagamentoById(condicaoPagamentoId).subscribe(function (condicaoPagamento) {
            _this.condicaoPagamento = condicaoPagamento;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    CondicaoPagamentoFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (this.condicaoPagamento.juros && this.condicaoPagamento.juros > 100) {
            this.openSnackBarService.openError("O campo juros não pode ser maior que 100.");
            return;
        }
        if (this.condicaoPagamento.desconto && this.condicaoPagamento.desconto > 100) {
            this.openSnackBarService.openError("O campo desconto não pode ser maior que 100.");
            return;
        }
        if (this.condicaoPagamento.multa && this.condicaoPagamento.multa > 100) {
            this.openSnackBarService.openError("O campo multa não pode ser maior que 100.");
            return;
        }
        if (!this.condicaoPagamento.parcelas.length) {
            this.openSnackBarService.openError("Nenhuma parcela adicionada.");
            return;
        }
        if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length > 0) {
            var found = false;
            for (var i = 0; i < this.condicaoPagamento.parcelas.length; i++) {
                var condicaoPagamento = this.condicaoPagamento.parcelas[i];
                if (!condicaoPagamento.parcela || !condicaoPagamento.dias || !condicaoPagamento.porcentagem || !condicaoPagamento.formaPagamento) {
                    found = true;
                    break;
                }
            }
            if (found) {
                this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
                return;
            }
        }
        if (this.totalPorcentagem != 100) {
            this.openSnackBarService.openError("A porcentagem de parcelas deve ser igual a 100%.");
            return;
        }
        this.condicaoPagamento.parcelas = this.condicaoPagamento.parcelas.sort();
        var found = false;
        for (var i = 0; i < this.condicaoPagamento.parcelas.length - 1 && !found; i++) {
            var parcela = this.condicaoPagamento.parcelas[i];
            for (var j = i + 1; j < this.condicaoPagamento.parcelas.length; j++) {
                var proxParcela = this.condicaoPagamento.parcelas[j];
                if (parseInt(parcela.dias) > parseInt(proxParcela.dias)) {
                    found = true;
                    break;
                }
            }
        }
        if (found) {
            this.openSnackBarService.openError("Não pode haver uma parcela com os dias maior que a parcela anterior.");
            return;
        }
        if (!this.condicaoPagamento.codigo) {
            this.condicaoPagamentoService.insertCondicaoPagamento(this.condicaoPagamento).subscribe(function (condicaoPagamento) {
                _this.openSnackBarService.openSuccess("Condição de pagamento salva com sucesso.");
                _this.dialogRef.close(_this.condicaoPagamento);
            }, function (err) {
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.condicaoPagamentoService.updateCondicaoPagamento(this.condicaoPagamento, this.condicaoPagamentoParcelasToRemoved).subscribe(function (condicaoPagamento) {
                _this.openSnackBarService.openSuccess("Condição de pagamento atualizada com sucesso.");
                _this.dialogRef.close(_this.condicaoPagamento);
            }, function (err) {
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    CondicaoPagamentoFormComponent.prototype.onListFormasPagamento = function (filter) {
        var _this = this;
        this.formaPagamentoService.listFormaPagamentoByFilters(filter ? filter : "", null).subscribe(function (formaPagamentoPage) {
            _this.formasPagamento = formaPagamentoPage.content.filter(function (c) { return c.situacao; });
        });
    };
    CondicaoPagamentoFormComponent.prototype.displayFn = function (formaPagamento) {
        return formaPagamento ? formaPagamento.codigo + " - " + formaPagamento.formaPagamento : undefined;
    };
    /*-------------------------------------------------------------------
   *                           Formas de pagamento
   *-------------------------------------------------------------------*/
    CondicaoPagamentoFormComponent.prototype.redirect = function () {
        var win = window.open("http://localhost:4200/#/forma-pagamento", '_blank');
        win.focus();
    };
    CondicaoPagamentoFormComponent.prototype.addParcela = function () {
        this.condicaoPagamento.parcelas.push({ parcela: this.condicaoPagamento.parcelas.length + 1 });
    };
    CondicaoPagamentoFormComponent.prototype.removeParcela = function (index) {
        if (this.condicaoPagamento.parcelas[index].created)
            this.condicaoPagamentoParcelasToRemoved.push(this.condicaoPagamento.parcelas[index].parcela);
        this.condicaoPagamento.parcelas.splice(index, 1);
    };
    Object.defineProperty(CondicaoPagamentoFormComponent.prototype, "totalParcelas", {
        get: function () {
            return this.condicaoPagamento.parcelas.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CondicaoPagamentoFormComponent.prototype, "totalDias", {
        get: function () {
            if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length) {
                var array = this.condicaoPagamento.parcelas.filter(function (p) { return p.dias; }).map(function (p) { return p.dias; });
                var result = array.length > 0 ? array.reduce(function (anterior, atual) { return parseInt(anterior) + parseInt(atual); }) : 0;
                return isNaN(result) ? 0 : result;
            }
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CondicaoPagamentoFormComponent.prototype, "totalPorcentagem", {
        get: function () {
            if (this.condicaoPagamento.parcelas && this.condicaoPagamento.parcelas.length) {
                var array = this.condicaoPagamento.parcelas.filter(function (p) { return p.porcentagem; }).map(function (p) { return p.porcentagem; });
                var result = array.length > 0 ? array.reduce(function (anterior, atual) { return parseFloat(anterior) + parseFloat(atual); }) : 0;
                return isNaN(result) ? 0 : result;
            }
            else
                return 0;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('parcelaForm', { read: false, static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CondicaoPagamentoFormComponent.prototype, "parcelaForm", void 0);
    CondicaoPagamentoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-condicao-pagamento-form',
            template: __webpack_require__(/*! raw-loader!./condicao-pagamento-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.html"),
            styles: [__webpack_require__(/*! ./condicao-pagamento-form.component.scss */ "./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["FormaPagamentoService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"], Object])
    ], CondicaoPagamentoFormComponent);
    return CondicaoPagamentoFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29uZGljYW8tcGFnYW1lbnRvL2NvbmRpY2FvLXBhZ2FtZW50by1saXN0L2NvbmRpY2FvLXBhZ2FtZW50by1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CondicaoPagamentoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicaoPagamentoListComponent", function() { return CondicaoPagamentoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../condicao-pagamento-form/condicao-pagamento-form.component */ "./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");









var CondicaoPagamentoListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param condicaoPagamentoService
     */
    function CondicaoPagamentoListComponent(dialog, _dialogService, paginationService, openSnackBarService, condicaoPagamentoService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.condicaoPagamentoService = condicaoPagamentoService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            codigo: null,
            condicaoPagamento: ""
        };
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__["TextMasks"];
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'condicaoPagamento', label: 'CONDIÇÃO DE PAGAMENTO', sortable: false },
            { name: 'multa', label: 'MULTA', sortable: false },
            { name: 'desconto', label: 'DESCONTO', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('codigo', 'ASC', 10);
    }
    CondicaoPagamentoListComponent.prototype.ngOnInit = function () {
        this.onListCondicaoPagamentos(true);
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    CondicaoPagamentoListComponent.prototype.openForm = function (condicaoPagamento) {
        var _this = this;
        var dialogRef = this.dialog.open(_condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_2__["CondicaoPagamentoFormComponent"], {
            width: '1100px',
            height: 'auto',
            data: { condicaoPagamentoId: condicaoPagamento ? condicaoPagamento.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (condicaoPagamentoSaved) {
            if (condicaoPagamentoSaved)
                _this.onListCondicaoPagamentos();
        });
    };
    CondicaoPagamentoListComponent.prototype.atualizarSituacaoCondicaoPagamento = function (condicaoPagamento) {
        var _this = this;
        if (condicaoPagamento.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta condição de pagamento ?",
                title: "Excluir condição de pagamento",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.condicaoPagamentoService.deleteCondicaoPagamento(condicaoPagamento.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Condição de pagamento excluído com sucesso.');
                        _this.onListCondicaoPagamentos();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este condição de pagamento pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar condição de pagamento",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.condicaoPagamentoService.updateSituacaoCondicaoPagamento(condicaoPagamento.codigo, !condicaoPagamento.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Condição de pagamento desativado com sucesso.');
                                    _this.onListCondicaoPagamentos();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este condição de pagamento ?",
                title: "Ativar condição de pagamento",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.condicaoPagamentoService.updateSituacaoCondicaoPagamento(condicaoPagamento.codigo, !condicaoPagamento.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Condição de pagamento ativado com sucesso.');
                        _this.onListCondicaoPagamentos();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo condicaoPagamento
     */
    CondicaoPagamentoListComponent.prototype.onListCondicaoPagamentos = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.condicaoPagamentoService.listCondicaoPagamentosByFilters(!isNaN(parseInt(this.filters.codigo)) ? parseInt(this.filters.codigo) : null, this.filters.condicaoPagamento, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    CondicaoPagamentoListComponent.prototype.clearFilters = function () {
        this.filters = {
            codigo: null,
            condicaoPagamento: ""
        };
        this.onListCondicaoPagamentos();
    };
    CondicaoPagamentoListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListCondicaoPagamentos(false);
    };
    CondicaoPagamentoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-condicao-pagamento-list',
            template: __webpack_require__(/*! raw-loader!./condicao-pagamento-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.html"),
            styles: [__webpack_require__(/*! ./condicao-pagamento-list.component.scss */ "./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["CondicaoPagamentoService"]])
    ], CondicaoPagamentoListComponent);
    return CondicaoPagamentoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento.module.ts ***!
  \*************************************************************************/
/*! exports provided: CondicaoPagamentoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicaoPagamentoModule", function() { return CondicaoPagamentoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _condicao_pagamento_list_condicao_pagamento_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./condicao-pagamento-list/condicao-pagamento-list.component */ "./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.ts");
/* harmony import */ var _condicao_pagamento_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condicao-pagamento.routing */ "./src/app/modules/condicao-pagamento/condicao-pagamento.routing.ts");
/* harmony import */ var _condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./condicao-pagamento-form/condicao-pagamento-form.component */ "./src/app/modules/condicao-pagamento/condicao-pagamento-form/condicao-pagamento-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var CondicaoPagamentoModule = /** @class */ (function () {
    function CondicaoPagamentoModule() {
    }
    CondicaoPagamentoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _condicao_pagamento_list_condicao_pagamento_list_component__WEBPACK_IMPORTED_MODULE_2__["CondicaoPagamentoListComponent"],
                _condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_4__["CondicaoPagamentoFormComponent"],
            ],
            imports: [
                _condicao_pagamento_routing__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _condicao_pagamento_list_condicao_pagamento_list_component__WEBPACK_IMPORTED_MODULE_2__["CondicaoPagamentoListComponent"],
                _condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_4__["CondicaoPagamentoFormComponent"],
                _condicao_pagamento_routing__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoRouting"]
            ],
            entryComponents: [
                _condicao_pagamento_form_condicao_pagamento_form_component__WEBPACK_IMPORTED_MODULE_4__["CondicaoPagamentoFormComponent"]
            ],
            providers: []
        })
    ], CondicaoPagamentoModule);
    return CondicaoPagamentoModule;
}());



/***/ }),

/***/ "./src/app/modules/condicao-pagamento/condicao-pagamento.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/condicao-pagamento/condicao-pagamento.routing.ts ***!
  \**************************************************************************/
/*! exports provided: CondicaoPagamentoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicaoPagamentoRouting", function() { return CondicaoPagamentoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _condicao_pagamento_list_condicao_pagamento_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condicao-pagamento-list/condicao-pagamento-list.component */ "./src/app/modules/condicao-pagamento/condicao-pagamento-list/condicao-pagamento-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var condicaoPagamentoRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _condicao_pagamento_list_condicao_pagamento_list_component__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoListComponent"],
                data: {
                    title: 'Condições de pagamentos',
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var CondicaoPagamentoRouting = /** @class */ (function () {
    function CondicaoPagamentoRouting() {
    }
    CondicaoPagamentoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(condicaoPagamentoRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CondicaoPagamentoRouting);
    return CondicaoPagamentoRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-condicao-pagamento-condicao-pagamento-module.js.map