(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-venda-venda-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/venda/venda-form/venda-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/venda/venda-form/venda-form.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n\r\n  <mat-tab-group (selectedTabChange)=\"onClickContasAReceber($event)\">\r\n    <mat-tab label=\"INFORMAÇÕES\">\r\n      <form #informacoesForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n        <div class=\"push-top-md\" fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n          <mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n            <mat-label>Modelo</mat-label>\r\n            <input matInput required uppercase [(ngModel)]=\"venda.modelo\" name=\"modelo\" maxlength=\"144\" [disabled]=\"isDetail || venda.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"25\" appearance=\"outline\">\r\n            <mat-label>Serie</mat-label>\r\n            <input matInput required uppercase [(ngModel)]=\"venda.serie\" name=\"serie\" maxlength=\"144\" [disabled]=\"isDetail || venda.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex appearance=\"outline\">\r\n            <mat-label>Número da nota</mat-label>\r\n            <input matInput required uppercase [(ngModel)]=\"venda.numeroNota\" name=\"numeroNota\" maxlength=\"144\" [disabled]=\"isDetail || venda.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n          <auto-complete-with-redirect\r\n            fxFlex\r\n            title=\"Cliente\"\r\n            [classes]=\"required-class-cliente\"\r\n            key=\"codigo\"\r\n            link=\"cliente\"\r\n            [isDisable]=\"venda?.cliente?.codigo || isDetail || venda.condicaoPagamento.codigo\"\r\n            displayKey=\"cliente\"\r\n            [displayId]=\"true\"\r\n            [isDetail]=\"isDetail || venda.condicaoPagamento.codigo\"\r\n            [list]=\"{values: clientes}\"\r\n            [itemSelected]=\"{selected: venda.cliente}\"\r\n            (onFilterChange)=\"onListClientes($event)\"\r\n            (onSelect)=\"venda.cliente = $event;\"\r\n            (onDelete)=\"venda.cliente = null\"\r\n          >\r\n          </auto-complete-with-redirect>\r\n\r\n          <mat-form-field appearance=\"outline\" class=\"data-with-double-suffix\">\r\n            <mat-label>Data emissão *</mat-label>\r\n            <input matInput required [max]=\"dataHoje\" [matDatepicker]=\"dataEmissao\" [(ngModel)]=\"venda.dataEmissao\" name=\"dataEmissao\" disabled>\r\n            <mat-datepicker-toggle  [ngStyle]=\"{'color': !venda.dataEmissao ? 'red' : 'black' }\" matSuffix [for]=\"dataEmissao\" [disabled]=\"isDetail || venda.condicaoPagamento.codigo\" ></mat-datepicker-toggle>\r\n            <button *ngIf=\"(venda.dataEmissao && !isDetail) && !venda?.condicaoPagamento?.codigo\" matSuffix mat-icon-button (click)=\"venda.dataEmissao = null\" matTooltip=\"Remover data de emissão\">\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <mat-datepicker #dataEmissao disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          \r\n        </div>\r\n\r\n      </form>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"ITENS DA VENDA\" [disabled]=\"informacoesForm?.invalid || !venda.dataEmissao || !venda.cliente\">\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\" center\" fxLayoutGap=\"30px\" class=\"pad-sm push-bottom-sm\">\r\n\r\n        <div fxLayout=\"column\">\r\n          <label class=\"bold\">ITENS DA VENDA</label>\r\n        </div>\r\n\r\n        <div fxFlex></div>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n          <label class=\"bold\">TOTAL DE ITENS</label>\r\n          <label>{{venda.itensVenda.length}}</label>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n          <label class=\"bold\">TOTAL DA VENDA</label>\r\n          <label>R$ {{getValorTotalVenda | number:'.2':'pt'}}</label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\" *ngIf=\"!isDetail || venda.condicaoPagamento.codigo\">\r\n\r\n        <auto-complete-with-redirect\r\n            fxFlex\r\n            title=\"Produto\"\r\n            [classes]=\"required-class-produto\"\r\n            key=\"codigo\"\r\n            link=\"produto\"\r\n            [isDisable]=\"itemVenda?.codigo || isDetail || venda.condicaoPagamento.codigo\"\r\n            displayKey=\"produto\"\r\n            [displayId]=\"true\"\r\n            [isDetail]=\"isDetail || venda.condicaoPagamento.codigo\"\r\n            [list]=\"{values: produtos}\"\r\n            [itemSelected]=\"{selected: itemVenda}\"\r\n            (onFilterChange)=\"onListProdutos($event)\"\r\n            (onSelect)=\"onSelectProduto($event)\"\r\n            (onDelete)=\"itemVenda = {}\"\r\n          >\r\n\r\n          </auto-complete-with-redirect>\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"15\">\r\n          <mat-label>Unidade de medida</mat-label>\r\n          <input matInput [disabled]=\"true\" [(ngModel)]=\"itemVenda.unidadeComercial\" name=\"unidadeComercial\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"11\">\r\n          <mat-label>Quantidade</mat-label>\r\n          <input matInput [(ngModel)]=\"itemVenda.quantidade\" [disabled]=\"isDetail || venda.condicaoPagamento.codigo\"  name=\"quantidade\" required currencyMask [options]=\"{\r\n            align: 'left',\r\n            prefix: '',\r\n            thousands: '.',\r\n            precision: 0,\r\n            allowNegative: false\r\n          }\" maxlength=\"4\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"12\">\r\n          <mat-label>Valor de venda</mat-label>\r\n          <input matInput [(ngModel)]=\"itemVenda.valorVenda\" [disabled]=\"true\"  name=\"valorVenda\" required currencyMask [options]=\"{\r\n            align: 'left',\r\n            prefix: '',\r\n            thousands: '.',\r\n            decimal: ',',\r\n            precision: 2,\r\n            allowNegative: false\r\n          }\" maxlength=\"9\">\r\n        </mat-form-field>\r\n\r\n        <button *ngIf=\"!isDetail || venda.condicaoPagamento.codigo\" (click)=\"addItemVenda()\" [disabled]=\"!itemVendaIsValid\" mat-mini-fab color=\"warn\"\r\n          matTooltip=\"Adicionar item na venda\">\r\n          <mat-icon>\r\n            add\r\n          </mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of venda.itensVenda; let i = index\" class=\"push-md\" fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <detail-field label=\"Item\" value=\"{{i+1}}\"></detail-field>\r\n        <detail-field label=\"Produto\" value=\"{{item?.produto}}\"></detail-field>\r\n        <detail-field label=\"Unidade de medida\" value=\"{{item?.unidadeComercial}}\"></detail-field>\r\n        <detail-field label=\"Quantidade\" value=\"{{item?.quantidade}}\"></detail-field>\r\n        <detail-field label=\"Valor de venda\" matTooltip=\"Valor com a rateio das despesas\" value=\"{{item?.valorVenda | number:'.2':'pt'}} \"></detail-field>\r\n        <detail-field label=\"Valor total\" value=\"{{getValorTotal(item) | number:'.2':'pt'}}\"></detail-field>\r\n\r\n        <button *ngIf=\"!isDetail && !venda.condicaoPagamento.codigo\" (click)=\"removeItemVenda(i)\" matTooltip=\"Remover item da venda\" matSuffix mat-icon-button\r\n          class=\"tc-grey-700 delete-button-hover\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-tab>\r\n\r\n    <mat-tab [disabled]=\"informacoesForm?.invalid || !venda.itensVenda.length\" label=\"CONTAS Á PAGAR\">\r\n\r\n\r\n      <auto-complete-with-redirect\r\n        fxFlex\r\n        title=\"Condição de pagamento\"\r\n        key=\"codigo\"\r\n        link=\"condicao-pagamento\"\r\n        [isDisable]=\"venda?.condicaoPagamento?.codigo || isDetail || venda.condicaoPagamento.codigo\"\r\n        displayKey=\"condicaoPagamento\"\r\n        [displayId]=\"true\"\r\n        [isDetail]=\"isDetail\"\r\n        [list]=\"{values: condicoesPagamentos}\"\r\n        [itemSelected]=\"{selected: venda.condicaoPagamento}\"\r\n        (onFilterChange)=\"onListCondicaoPagamentos($event)\"\r\n        (onSelect)=\"onSelectCondicaoPagamento($event)\"\r\n        (onDelete)=\"venda.condicaoPagamento = {}; this.venda.contasAReceber = []\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n     \r\n        \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n        <label class=\"bold\">CONTAS À PAGAR</label>\r\n\r\n        <div fxLayout=\"column\">\r\n          <label class=\"bold\">TOTAL DA NOTA</label>\r\n          <label>{{getValorTotalNota | number:'.2':'pt'}}</label>\r\n        </div>\r\n      </div>\r\n  \r\n\r\n      <mat-expansion-panel *ngFor=\"let contaAPagar of venda.contasAReceber; let i = index\" class=\"push-sm\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title fxLayoutGap=\"20px\">\r\n            <div fxLayout=\"column\">\r\n              <label class=\"bold\">{{i+1}} -</label>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\">\r\n              <label class=\"bold\">Parcela {{i+1}}</label>\r\n            </div>\r\n          </mat-panel-title>\r\n\r\n        </mat-expansion-panel-header>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Data de vencimento</mat-label>\r\n            <input matInput [disabled]=\"true\" [value]=\"contaAPagar.dataVencimento | date:'dd/MM/yyyy'\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\" fxFlex>\r\n            <mat-label>Número do documento</mat-label>\r\n            <input matInput [disabled]=\"true\" [value]=\"getNumeroDocumento(i)\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Valor da parcela</mat-label>\r\n            <input matInput [disabled]=\"true\" value=\"{{contaAPagar.valorParcela | number:'.2':'pt'}}\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n    </mat-tab>\r\n\r\n\r\n\r\n  </mat-tab-group>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ venda?.created ? (venda?.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ venda?.updated ? (venda?.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <button *ngIf=\"!isDetail\" (click)=\"onSubmit(informacoesForm)\" mat-raised-button\r\n      class=\"white-btn\" color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n      {{!isDetail ? 'CANCELAR' : 'FECHAR'}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/venda/venda-list/venda-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/venda/venda-list/venda-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\r\n\t\t<auto-complete-with-redirect fxFlex title=\"Cliente\" key=\"codigo\" link=\"cliente\" displayKey=\"cliente\"\r\n\t\t\t[displayId]=\"true\" [list]=\"{values: clientes}\" [isNotRequired]=\"true\"\r\n\t\t\t[itemSelected]=\"{selected: filters.cliente}\" (onFilterChange)=\"onListClientes($event)\"\r\n\t\t\t(onSelect)=\"filters.cliente = $event\" (onDelete)=\"filters.cliente = null\">\r\n\t\t</auto-complete-with-redirect>\r\n\r\n\t\t<mat-form-field fxFlex=\"10\" appearance=\"outline\">\r\n\t\t\t<mat-label>Modelo</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.modelo\" name=\"modelo\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"10\" appearance=\"outline\">\r\n\t\t\t<mat-label>Série</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.serie\" name=\"serie\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"15\" appearance=\"outline\">\r\n\t\t\t<mat-label>Número da nota</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.numeroNota\" name=\"numeroNota\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVA VENDA</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListVendasByFilters()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table #dataTable [data]=\"pageRequest.content\" [columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"modelo\" let-venda=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{venda?.modelo}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"serie\" let-venda=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{venda?.serie}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"numeroNota\" let-venda=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{venda?.numeroNota}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-venda=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"venda?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!venda?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"cliente\" let-venda=\"row\">\r\n\t\t\t{{venda?.cliente?.codigo}} - {{venda?.cliente?.cliente}}\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-venda=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Visualizar venda\" stopPropagation\r\n\t\t\t\t(click)=\"$event.stopPropagation(); openForm(venda, true)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">visibility</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<!-- <button *ngIf=\"!venda.situacao\" matTooltip=\"Restaurar venda\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoVenda(venda)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button> -->\r\n\r\n\t\t\t<button *ngIf=\"venda.situacao\" matTooltip=\"Cancelar venda\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoVenda(venda)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/venda/venda-form/venda-form.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/venda/venda-form/venda-form.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solid-item {\n  border: 0.5px dotted;\n  -webkit-box-flex: 1;\n          flex: 1 1 0%;\n  height: 0px;\n  box-sizing: border-box;\n  margin-top: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92ZW5kYS92ZW5kYS1mb3JtL0M6XFxkZXZcXGxhLW1hZmlhLWRldlxcc3JjXFxtYWluXFx0cy9zcmNcXGFwcFxcbW9kdWxlc1xcdmVuZGFcXHZlbmRhLWZvcm1cXHZlbmRhLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdmVuZGEvdmVuZGEtZm9ybS92ZW5kYS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3ZlbmRhL3ZlbmRhLWZvcm0vdmVuZGEtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2xpZC1pdGVte1xyXG4gICAgYm9yZGVyOiAwLjVweCBkb3R0ZWQ7XHJcbiAgICBmbGV4OiAxIDEgMCU7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbn1cclxuIiwiLnNvbGlkLWl0ZW0ge1xuICBib3JkZXI6IDAuNXB4IGRvdHRlZDtcbiAgZmxleDogMSAxIDAlO1xuICBoZWlnaHQ6IDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXRvcDogOXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/venda/venda-form/venda-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/venda/venda-form/venda-form.component.ts ***!
  \******************************************************************/
/*! exports provided: VendaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendaFormComponent", function() { return VendaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");



 //VendaService


var VendaFormComponent = /** @class */ (function () {
    function VendaFormComponent(openSnackBarService, dialogRef, vendaService, clienteService, produtoService, condicaoPagamentoService, data) {
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.vendaService = vendaService;
        this.clienteService = clienteService;
        this.produtoService = produtoService;
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.venda = { condicaoPagamento: {}, itensVenda: [], contasAReceber: [], dataEmissao: new Date() };
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.usuarioAutenticado = {};
        this.clientes = [];
        this.produtos = [];
        this.pageRequest = [];
        this.itemVenda = {};
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.isDetail = false;
        this.dataHoje = new Date();
        if (data.isDetail != null) {
            this.isDetail = data.isDetail;
        }
        if (data.venda != null) {
            this.findVendaById(data.venda);
        }
    }
    VendaFormComponent.prototype.ngOnInit = function () {
        if (this.data.isDetail)
            this.title = "Visualizar venda";
        else
            this.title = "Inserir venda";
        this.onListClientes("");
        this.onListProdutos("");
        this.onListCondicaoPagamentos(null);
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    VendaFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var valid = this.validForm(form);
        if (!valid)
            return;
        this.venda.serie = this.venda.serie.trim();
        this.venda.numeroNota = this.venda.numeroNota.trim();
        this.venda.modelo = this.venda.modelo.trim();
        this.venda.contasAReceber.forEach(function (conta, i) {
            conta.serie = _this.venda.serie;
            conta.modelo = _this.venda.modelo;
            conta.numeroNota = _this.venda.numeroNota;
            conta.cliente = _this.venda.cliente;
            conta.numeroParcela = i + 1;
        });
        this.vendaService.insertVenda(this.venda).subscribe(function (venda) {
            _this.openSnackBarService.openSuccess("Venda salva com sucesso.");
            _this.dialogRef.close(_this.venda);
        }, function (err) {
            _this.openSnackBarService.openError(err.message);
        });
    };
    VendaFormComponent.prototype.validForm = function (form) {
        if (form.invalid || !this.venda.dataEmissao || !this.venda.cliente) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return false;
        }
        else if (!this.venda.itensVenda.length) {
            this.openSnackBarService.openError("É necessário adicionar ao menos um item na venda.");
            return false;
        }
        else if (!this.venda.contasAReceber.length) {
            this.openSnackBarService.openError("É necessário adicionar ao menos um conta á receber.");
            return false;
        }
        return true;
    };
    VendaFormComponent.prototype.addItemVenda = function () {
        this.venda.itensVenda.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.itemVenda));
        this.itemVenda = {};
        this.onListProdutos("");
    };
    VendaFormComponent.prototype.removeItemVenda = function (i) {
        this.venda.itensVenda.splice(i, 1);
    };
    VendaFormComponent.prototype.findVendaById = function (venda) {
        var _this = this;
        this.vendaService.findVendaById(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo)
            .subscribe(function (venda) {
            _this.venda = venda;
        }, function (err) { return console.log(err); });
    };
    VendaFormComponent.prototype.onClickContasAReceber = function (tab) {
        if (tab.index == 2 && this.venda.cliente && this.venda.cliente.condicaoPagamento) {
            this.onSelectCondicaoPagamento(this.venda.cliente.condicaoPagamento);
        }
    };
    /////////////////MODEL
    VendaFormComponent.prototype.onListCondicaoPagamentos = function (filter) {
        var _this = this;
        var codigo = null;
        var condicaoPagamento = "";
        if (isNaN(parseInt(filter)))
            condicaoPagamento = filter ? filter : "";
        else
            codigo = parseInt(filter);
        this.condicaoPagamentoService.listCondicaoPagamentosByFilters(codigo, condicaoPagamento, null).subscribe(function (page) {
            _this.condicoesPagamentos = page.content.filter(function (c) { return c.situacao; });
        });
    };
    VendaFormComponent.prototype.displayFnCondicaoPagamento = function (condicaoPagamento) {
        return condicaoPagamento ? condicaoPagamento.codigo : undefined;
    };
    VendaFormComponent.prototype.onSelectCondicaoPagamento = function (condicaoPagamento) {
        this.venda.condicaoPagamento = condicaoPagamento;
        this.onListCondicaoPagamentos('');
        if (this.venda.condicaoPagamento.parcelas) {
            this.venda.condicaoPagamento.parcelas = this.venda.condicaoPagamento.parcelas.sort();
            this.venda.contasAReceber = [];
            for (var i = 0; i < this.venda.condicaoPagamento.parcelas.length; i++) {
                var dateNow = new Date();
                var parcela = this.venda.condicaoPagamento.parcelas[i];
                dateNow.setHours(0);
                dateNow.setMinutes(0);
                var dataVencimento = dateNow.setDate(dateNow.getDate() + parcela.dias);
                this.venda.contasAReceber.push({
                    dataVencimento: dataVencimento,
                    formaPagamento: parcela.formaPagamento,
                    juros: this.venda.condicaoPagamento.juros,
                    multa: this.venda.condicaoPagamento.multa,
                    desconto: this.venda.condicaoPagamento.desconto
                });
            }
            for (var i = 0; i < this.venda.contasAReceber.length - 1; i++) {
                var contaAPagar = this.venda.contasAReceber[i];
                contaAPagar.valorParcela = parseFloat(this.getValorParcela(i));
            }
            this.venda.contasAReceber[this.venda.contasAReceber.length - 1].valorParcela = this.getValorTotalVenda - this.venda.contasAReceber.map(function (c) { return c.valorParcela; })
                .reduce(function (total, currentValue) {
                if (currentValue)
                    total += currentValue;
                return total;
            }, 0);
        }
    };
    VendaFormComponent.prototype.onListClientes = function (filter) {
        var _this = this;
        this.clienteService.listClientesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.clientes = page.content.filter(function (c) { return c.situacao; });
        });
    };
    VendaFormComponent.prototype.displayFnCliente = function (cliente) {
        return cliente ? cliente.cliente : undefined;
    };
    VendaFormComponent.prototype.onListProdutos = function (filter) {
        var _this = this;
        var codigo = null;
        var produto = "";
        if (isNaN(parseInt(filter)))
            produto = filter ? filter : "";
        else
            codigo = parseInt(filter);
        this.produtoService.listProdutosByFiltersToAssociation(produto, codigo, null).subscribe(function (page) {
            _this.produtos = page.content.filter(function (c) { return c.situacao; }).filter(function (c) { return !_this.venda.itensVenda.map(function (i) { return i.codigo; }).includes(c.codigo); });
        });
    };
    VendaFormComponent.prototype.displayFnProduto = function (produto) {
        return produto ? produto.produto : undefined;
    };
    VendaFormComponent.prototype.onSelectProduto = function (produto) {
        this.itemVenda = produto;
        this.itemVenda.valorVenda = produto.currentEstoque.precoVenda;
        this.onListProdutos('');
    };
    VendaFormComponent.prototype.getValorTotal = function (itemProduto) {
        var valorTotal = itemProduto.valorVenda * itemProduto.quantidade;
        return isNaN(valorTotal) ? 0 : valorTotal;
    };
    Object.defineProperty(VendaFormComponent.prototype, "itemVendaIsValid", {
        get: function () {
            if (!this.itemVenda.quantidade || !this.itemVenda.produto || !this.itemVenda.valorVenda)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaFormComponent.prototype, "getValorTotalVenda", {
        get: function () {
            var _this = this;
            var valorTotalVenda = 0;
            this.venda.itensVenda.forEach(function (itemVenda) {
                valorTotalVenda += _this.getValorTotal(itemVenda);
            });
            return valorTotalVenda || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VendaFormComponent.prototype, "getValorTotalNota", {
        get: function () {
            return this.getValorTotalVenda;
        },
        enumerable: true,
        configurable: true
    });
    VendaFormComponent.prototype.getNumeroDocumento = function (i) {
        // modelo/serie/numero/numeroParcela
        return this.venda.modelo + "." + this.venda.serie + "." + this.venda.numeroNota + "/" + this.venda.condicaoPagamento.parcelas[i].parcela;
    };
    VendaFormComponent.prototype.getValorParcela = function (i) {
        return (this.getValorTotalVenda * (this.venda.condicaoPagamento.parcelas[i].porcentagem / 100)).toFixed(2);
    };
    VendaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venda-form',
            template: __webpack_require__(/*! raw-loader!./venda-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/venda/venda-form/venda-form.component.html"),
            styles: [__webpack_require__(/*! ./venda-form.component.scss */ "./src/app/modules/venda/venda-form/venda-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["VendaService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoService"], Object])
    ], VendaFormComponent);
    return VendaFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/venda/venda-list/venda-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/venda/venda-list/venda-list.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmVuZGEvdmVuZGEtbGlzdC92ZW5kYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/venda/venda-list/venda-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/venda/venda-list/venda-list.component.ts ***!
  \******************************************************************/
/*! exports provided: VendaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendaListComponent", function() { return VendaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../venda-form/venda-form.component */ "./src/app/modules/venda/venda-form/venda-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






 //VendaService, 


var VendaListComponent = /** @class */ (function () {
    function VendaListComponent(dialog, vendaService, paginationService, openSnackBarService, _dialogService, clienteService) {
        this.dialog = dialog;
        this.vendaService = vendaService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this._dialogService = _dialogService;
        this.clienteService = clienteService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            cliente: null,
            modelo: "",
            serie: "",
            numeroNota: ""
        };
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__["TextMasks"];
        /**
         * Colunas da Grid
         */
        this.tableColumns = [
            { name: 'modelo', label: 'MODELO', sortable: false },
            { name: 'serie', label: 'SERIE', sortable: false },
            { name: 'numeroNota', label: 'NUMERO DA NOTA', sortable: false },
            { name: 'cliente', label: 'CLIENTE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.clientes = [];
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }
    VendaListComponent.prototype.ngOnInit = function () {
        this.onListVendasByFilters(true);
        this.onListClientes("");
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    VendaListComponent.prototype.openForm = function (venda, isDetail) {
        var _this = this;
        if (isDetail === void 0) { isDetail = false; }
        var dialogRef = this.dialog.open(_venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_2__["VendaFormComponent"], {
            width: '1200px',
            height: 'auto',
            data: { isDetail: isDetail, venda: venda }
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.onListVendasByFilters();
        });
    };
    /**
      */
    VendaListComponent.prototype.onListVendasByFilters = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.vendaService.listVendasByFilters(this.filters.modelo, this.filters.serie, this.filters.numeroNota, this.filters.cliente ? this.filters.cliente.codigo : null, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    VendaListComponent.prototype.clearFilters = function () {
        this.filters = {
            cliente: null,
            modelo: "",
            serie: "",
            numeroNota: ""
        };
        this.onListVendasByFilters();
    };
    VendaListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListVendasByFilters();
    };
    VendaListComponent.prototype.atualizarSituacaoVenda = function (venda) {
        var _this = this;
        if (venda.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja cancelar esta venda ?",
                title: "Cancelar venda",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.vendaService.updateSituacaoVenda(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo, !venda.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Venda cancelada com sucesso.');
                        _this.onListVendasByFilters();
                    }, function (err) { return _this.openSnackBarService.openError(err.message, 10000); });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja restaurar esta venda ?",
                title: "Restaurar venda",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.vendaService.updateSituacaoVenda(venda.modelo, venda.serie, venda.numeroNota, venda.cliente.codigo, !venda.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Venda restaurar com sucesso.');
                        _this.onListVendasByFilters();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /////////////////MODEL
    VendaListComponent.prototype.onListClientes = function (filter) {
        var _this = this;
        this.clienteService.listClientesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.clientes = page.content.filter(function (c) { return c.situacao; });
        });
    };
    VendaListComponent.prototype.displayFnCliente = function (cliente) {
        return cliente ? cliente.cliente : undefined;
    };
    VendaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-venda-list',
            template: __webpack_require__(/*! raw-loader!./venda-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/venda/venda-list/venda-list.component.html"),
            styles: [__webpack_require__(/*! ./venda-list.component.scss */ "./src/app/modules/venda/venda-list/venda-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_generated_services__WEBPACK_IMPORTED_MODULE_6__["VendaService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]])
    ], VendaListComponent);
    return VendaListComponent;
}());



/***/ }),

/***/ "./src/app/modules/venda/venda.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/venda/venda.module.ts ***!
  \***********************************************/
/*! exports provided: VendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendaModule", function() { return VendaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _venda_list_venda_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venda-list/venda-list.component */ "./src/app/modules/venda/venda-list/venda-list.component.ts");
/* harmony import */ var _venda_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venda.routing */ "./src/app/modules/venda/venda.routing.ts");
/* harmony import */ var _venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./venda-form/venda-form.component */ "./src/app/modules/venda/venda-form/venda-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var VendaModule = /** @class */ (function () {
    function VendaModule() {
    }
    VendaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _venda_list_venda_list_component__WEBPACK_IMPORTED_MODULE_2__["VendaListComponent"],
                _venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_4__["VendaFormComponent"],
            ],
            imports: [
                _venda_routing__WEBPACK_IMPORTED_MODULE_3__["VendaRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _venda_list_venda_list_component__WEBPACK_IMPORTED_MODULE_2__["VendaListComponent"],
                _venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_4__["VendaFormComponent"],
                _venda_routing__WEBPACK_IMPORTED_MODULE_3__["VendaRouting"]
            ],
            entryComponents: [
                _venda_form_venda_form_component__WEBPACK_IMPORTED_MODULE_4__["VendaFormComponent"]
            ],
            providers: []
        })
    ], VendaModule);
    return VendaModule;
}());



/***/ }),

/***/ "./src/app/modules/venda/venda.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/venda/venda.routing.ts ***!
  \************************************************/
/*! exports provided: VendaRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendaRouting", function() { return VendaRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _venda_list_venda_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venda-list/venda-list.component */ "./src/app/modules/venda/venda-list/venda-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var vendaRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _venda_list_venda_list_component__WEBPACK_IMPORTED_MODULE_3__["VendaListComponent"],
                data: {
                    title: 'Venda',
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var VendaRouting = /** @class */ (function () {
    function VendaRouting() {
    }
    VendaRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(vendaRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VendaRouting);
    return VendaRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-venda-venda-module.js.map