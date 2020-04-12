(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-compra-compra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/compra/compra-form/compra-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/compra/compra-form/compra-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n\r\n  <mat-tab-group (selectedTabChange)=\"onClickContasAPagar($event)\">\r\n    <mat-tab label=\"INFORMAÇÕES\">\r\n      <form #informacoesForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n        <div class=\"push-top-md\" fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n          <mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n            <mat-label>Modelo</mat-label>\r\n            <input matInput uppercase required [(ngModel)]=\"compra.modelo\" name=\"modelo\" maxlength=\"144\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex=\"25\" appearance=\"outline\">\r\n            <mat-label>Serie</mat-label>\r\n            <input matInput uppercase required [(ngModel)]=\"compra.serie\" name=\"serie\" maxlength=\"144\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex appearance=\"outline\">\r\n            <mat-label>Número da nota</mat-label>\r\n            <input matInput uppercase required [(ngModel)]=\"compra.numeroNota\" name=\"numeroNota\" maxlength=\"144\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\" >\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n          <auto-complete-with-redirect\r\n            [classes]=\"required-class-fornecedor\"\r\n            fxFlex\r\n            title=\"Fornecedor\"\r\n            key=\"codigo\"\r\n            link=\"fornecedor\"\r\n            [isDisable]=\"compra?.fornecedor?.codigo || isDetail || compra.condicaoPagamento.codigo\"\r\n            displayKey=\"razaoSocial\"\r\n            [displayId]=\"true\"\r\n            [isDetail]=\"isDetail || compra.condicaoPagamento.codigo\"\r\n            [list]=\"{values: fornecedores}\"\r\n            [itemSelected]=\"{selected: compra.fornecedor}\"\r\n            (onFilterChange)=\"onListFornecedores($event)\"\r\n            (onSelect)=\"onSelectFornecedor($event)\"\r\n            (onDelete)=\"compra.fornecedor = null\"\r\n          >\r\n          </auto-complete-with-redirect>\r\n\r\n          <mat-form-field appearance=\"outline\" class=\"data-with-double-suffix\">\r\n            <mat-label>Data emissão *</mat-label>\r\n            <input matInput required [max]=\"dataHoje\" [matDatepicker]=\"dataEmissao\" [(ngModel)]=\"compra.dataEmissao\" name=\"dataEmissao\" disabled>\r\n            <mat-datepicker-toggle  [ngStyle]=\"{'color': !compra.dataEmissao ? 'red' : 'black' }\" matSuffix [for]=\"dataEmissao\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\" ></mat-datepicker-toggle>\r\n            <button *ngIf=\"(compra.dataEmissao && !isDetail) && !compra?.condicaoPagamento?.codigo\" matSuffix mat-icon-button (click)=\"compra.dataEmissao = null; compra.dataChegada = null\" matTooltip=\"Remover data de emissão\">\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <mat-datepicker #dataEmissao disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n          \r\n          <mat-form-field appearance=\"outline\" class=\"data-with-double-suffix\">\r\n            <mat-label>Data Chegada *</mat-label>\r\n            <input matInput required [min]=\"compra.dataEmissao\"  disabled [matDatepicker]=\"startDate\" [(ngModel)]=\"compra.dataChegada\"   name=\"dataChegada\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"startDate\" [ngStyle]=\"{'color': !compra.dataChegada ? 'red' : 'black' }\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo || !compra.dataEmissao\"></mat-datepicker-toggle>\r\n            <button *ngIf=\"(compra.dataChegada && !isDetail) && !compra?.condicaoPagamento?.codigo\" matSuffix mat-icon-button (click)=\"compra.dataChegada = null\" matTooltip=\"Remover data de chegada\">\r\n              <mat-icon>clear</mat-icon>\r\n            </button>\r\n            <mat-datepicker #startDate  disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Tipo de frete</mat-label>\r\n            <mat-select required [(ngModel)]=\"compra.tipoFrete\" (ngModelChange)=\"onChangeTipoFrete()\" name=\"tipoFrete\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\" >\r\n              <mat-option [value]=\"'PAGO_PELO_DESTINATARIO'\">\r\n                Pago pelo destinatário\r\n              </mat-option>\r\n              <mat-option [value]=\"'PAGO_PELO_FORNECEDOR'\">\r\n                Pago pelo fornecedor\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          \r\n\r\n\r\n          <mat-form-field fxFlex appearance=\"outline\">\r\n            <mat-label>Frete</mat-label>\r\n            <input matInput required [(ngModel)]=\"compra.frete\" name=\"frete\" currencyMask [options]=\"{\r\n              align: 'left',\r\n              prefix: '',\r\n              thousands: '.',\r\n              decimal: ',',\r\n              precision: 2,\r\n              allowNegative: false\r\n            }\" maxlength=\"9\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo || compra?.tipoFrete == 'PAGO_PELO_FORNECEDOR'\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex appearance=\"outline\">\r\n            <mat-label>Seguro</mat-label>\r\n            <input matInput required [(ngModel)]=\"compra.seguro\" name=\"seguro\" currencyMask [options]=\"{\r\n              align: 'left',\r\n              prefix: '',\r\n              thousands: '.',\r\n              decimal: ',',\r\n              precision: 2,\r\n              allowNegative: false\r\n            }\" maxlength=\"9\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo || compra?.tipoFrete == 'PAGO_PELO_FORNECEDOR'\" >\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlex appearance=\"outline\">\r\n            <mat-label>Despesa</mat-label>\r\n            <input matInput required [(ngModel)]=\"compra.despesa\" name=\"despesa\" currencyMask [options]=\"{\r\n              align: 'left',\r\n              prefix: '',\r\n              thousands: '.',\r\n              decimal: ',',\r\n              precision: 2,\r\n              allowNegative: false\r\n            }\" maxlength=\"9\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo || compra?.tipoFrete == 'PAGO_PELO_FORNECEDOR'\" >\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </form>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"ITENS DA COMPRA\" [disabled]=\"informacoesForm?.invalid || !compra.dataEmissao || !compra.dataChegada || !compra.fornecedor\">\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\" center\" fxLayoutGap=\"30px\" class=\"pad-sm push-bottom-sm\">\r\n\r\n        <div fxLayout=\"column\">\r\n          <label class=\"bold\">ITENS DA COMPRA</label>\r\n        </div>\r\n\r\n        <div fxFlex></div>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n          <label class=\"bold\">TOTAL DE ITENS</label>\r\n          <label>{{compra.itensCompra.length}}</label>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\" center\">\r\n          <label class=\"bold\">TOTAL DA COMPRA</label>\r\n          <label>R$ {{getValorTotalCompra | number:'.2':'pt'}}</label>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row wrap\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\" *ngIf=\"!isDetail || compra.condicaoPagamento.codigo\">\r\n\r\n        <auto-complete-with-redirect\r\n            fxFlex\r\n            [classes]=\"required-class-produto\"\r\n            title=\"Produto\"\r\n            key=\"codigo\"\r\n            link=\"produto\"\r\n            [isDisable]=\"itemCompra?.codigo || isDetail || compra.condicaoPagamento.codigo\"\r\n            displayKey=\"produto\"\r\n            [displayId]=\"true\"\r\n            [isDetail]=\"isDetail || compra.condicaoPagamento.codigo\"\r\n            [list]=\"{values: produtos}\"\r\n            [itemSelected]=\"{selected: itemCompra}\"\r\n            (onFilterChange)=\"onListProdutos($event)\"\r\n            (onSelect)=\"onSelectProduto($event)\"\r\n            (onDelete)=\"itemCompra = {}\"\r\n          >\r\n\r\n          </auto-complete-with-redirect>\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"15\">\r\n          <mat-label>Unidade de medida</mat-label>\r\n          <input matInput [disabled]=\"true\" [(ngModel)]=\"itemCompra.unidadeComercial\" name=\"unidadeComercial\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"11\">\r\n          <mat-label>Quantidade</mat-label>\r\n          <input matInput [(ngModel)]=\"itemCompra.quantidade\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\"  name=\"quantidade\" required currencyMask [options]=\"{\r\n            align: 'left',\r\n            prefix: '',\r\n            thousands: '.',\r\n            precision: 0,\r\n            allowNegative: false\r\n          }\" maxlength=\"4\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" fxFlex=\"12\">\r\n          <mat-label>Valor unitário</mat-label>\r\n          <input matInput [(ngModel)]=\"itemCompra.valorUnitario\" [disabled]=\"isDetail || compra.condicaoPagamento.codigo\"  name=\"valorUnitario\" required currencyMask [options]=\"{\r\n            align: 'left',\r\n            prefix: '',\r\n            thousands: '.',\r\n            decimal: ',',\r\n            precision: 2,\r\n            allowNegative: false\r\n          }\" maxlength=\"9\">\r\n        </mat-form-field>\r\n\r\n        <button *ngIf=\"!isDetail || compra.condicaoPagamento.codigo\" (click)=\"addItemCompra()\" [disabled]=\"!itemCompraIsValid\" mat-mini-fab color=\"warn\"\r\n          matTooltip=\"Adicionar item na compra\">\r\n          <mat-icon>\r\n            add\r\n          </mat-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n      <div *ngFor=\"let item of compra.itensCompra; let i = index\" class=\"push-md\" fxLayout=\"row\" fxLayoutGap=\"20px\">\r\n        <detail-field label=\"Item\" value=\"{{i+1}}\"></detail-field>\r\n        <detail-field label=\"Produto\" value=\"{{item?.produto}}\"></detail-field>\r\n        <detail-field label=\"Unidade de medida\" value=\"{{item?.unidadeComercial}}\"></detail-field>\r\n        <detail-field label=\"Quantidade\" value=\"{{item?.quantidade}}\"></detail-field>\r\n        <detail-field label=\"Valor unitário\" matTooltip=\"Valor com a rateio das despesas\" value=\"{{item?.valorUnitario | number:'.2':'pt'}} \"></detail-field>\r\n        <detail-field label=\"Valor total\" value=\"{{getValorTotal(item) | number:'.2':'pt'}}\"></detail-field>\r\n\r\n        <button *ngIf=\"!isDetail && !compra.condicaoPagamento.codigo\" (click)=\"removeItemCompra(i)\" matTooltip=\"Remover item da compra\" matSuffix mat-icon-button\r\n          class=\"tc-grey-700 delete-button-hover\">\r\n          <mat-icon>delete</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </mat-tab>\r\n\r\n    <mat-tab [disabled]=\"informacoesForm?.invalid || !compra.itensCompra.length\"  label=\"CONTAS Á PAGAR\">\r\n\r\n\r\n      <auto-complete-with-redirect\r\n        fxFlex\r\n        title=\"Condição de pagamento\"\r\n        key=\"codigo\"\r\n        link=\"condicao-pagamento\"\r\n        [isDisable]=\"compra?.condicaoPagamento?.codigo || isDetail || compra.condicaoPagamento.codigo\"\r\n        displayKey=\"condicaoPagamento\"\r\n        [displayId]=\"true\"\r\n        [isDetail]=\"isDetail\"\r\n        [list]=\"{values: condicoesPagamentos}\"\r\n        [itemSelected]=\"{selected: compra.condicaoPagamento}\"\r\n        (onFilterChange)=\"onListCondicaoPagamentos($event)\"\r\n        (onSelect)=\"onSelectCondicaoPagamento($event)\"\r\n        (onDelete)=\"compra.condicaoPagamento = {}; this.compra.contasAPagar = []\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n     \r\n        \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\r\n        <label class=\"bold\">CONTAS À PAGAR</label>\r\n\r\n        <div fxLayout=\"column\">\r\n          <label class=\"bold\">TOTAL DA NOTA</label>\r\n          <label>{{getValorTotalNota | number:'.2':'pt'}}</label>\r\n        </div>\r\n      </div>\r\n  \r\n\r\n      <mat-expansion-panel *ngFor=\"let contaAPagar of compra.contasAPagar; let i = index\" class=\"push-sm\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title fxLayoutGap=\"20px\">\r\n            <div fxLayout=\"column\">\r\n              <label class=\"bold\">{{i+1}} -</label>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\">\r\n              <label class=\"bold\">Parcela {{i+1}}</label>\r\n            </div>\r\n          </mat-panel-title>\r\n\r\n        </mat-expansion-panel-header>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Data de vencimento</mat-label>\r\n            <input matInput [disabled]=\"true\" [value]=\"contaAPagar.dataVencimento | date:'dd/MM/yyyy'\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\" fxFlex>\r\n            <mat-label>Número do documento</mat-label>\r\n            <input matInput [disabled]=\"true\" [value]=\"getNumeroDocumento(i)\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Valor da parcela</mat-label>\r\n            <input matInput [disabled]=\"true\" value=\"{{contaAPagar.valorParcela | number:'.2':'pt'}}\">\r\n          </mat-form-field>\r\n\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n    </mat-tab>\r\n\r\n\r\n\r\n  </mat-tab-group>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ compra?.created ? (compra?.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ compra?.updated ? (compra?.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <button *ngIf=\"!isDetail\"  (click)=\"onSubmit(informacoesForm)\" mat-raised-button\r\n      class=\"white-btn\" color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n      {{!isDetail ? 'CANCELAR' : 'FECHAR'}}\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/compra/compra-list/compra-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/compra/compra-list/compra-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\r\n\t\t<auto-complete-with-redirect fxFlex title=\"Fornecedor\" [isNotRequired]=\"true\" key=\"codigo\" link=\"fornecedor\"\r\n\t\t\tdisplayKey=\"razaoSocial\" [isNotRequired]=\"true\" [displayId]=\"true\" [list]=\"{values: fornecedores}\"\r\n\t\t\t[itemSelected]=\"{selected: filters.fornecedor}\" (onFilterChange)=\"onListFornecedores($event)\"\r\n\t\t\t(onSelect)=\"filters.fornecedor = $event\" (onDelete)=\"filters.fornecedor = null\">\r\n\t\t</auto-complete-with-redirect>\r\n\r\n\t\t<mat-form-field fxFlex=\"10\" appearance=\"outline\">\r\n\t\t\t<mat-label>Modelo</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.modelo\" name=\"modelo\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"10\" appearance=\"outline\">\r\n\t\t\t<mat-label>Série</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.serie\" name=\"serie\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"15\" appearance=\"outline\">\r\n\t\t\t<mat-label>Número da nota</mat-label>\r\n\t\t\t<input matInput uppercase [(ngModel)]=\"filters.numeroNota\" name=\"numeroNota\" maxlength=\"144\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<!-- <mat-form-field fxFlex=\"15\" appearance=\"outline\" [floatLabel]=\"'always'\">\r\n\t\t\t<mat-label>Data de emissão</mat-label>\r\n\t\t\t<input matInput required [matDatepicker]=\"startDate\">\r\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n\t\t\t<mat-datepicker #startDate></mat-datepicker>\r\n\t\t</mat-form-field> -->\r\n\r\n\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVA COMPRA</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListComprasByFilters()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table #dataTable [data]=\"pageRequest.content\" [columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-compra=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"compra?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!compra?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"modelo\" let-compra=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{compra?.modelo}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"serie\" let-compra=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{compra?.serie}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"numeroNota\" let-compra=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{compra?.numeroNota}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"fornecedor\" let-compra=\"row\">\r\n\t\t\t{{compra?.fornecedor?.codigo}} - {{compra?.fornecedor?.razaoSocial}}\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-compra=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Visualizar compra\" stopPropagation\r\n\t\t\t\t(click)=\"$event.stopPropagation(); openForm(compra, true)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">visibility</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<!-- <button *ngIf=\"!compra.situacao\" matTooltip=\"Restaurar compra\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCompra(compra)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button> -->\r\n\r\n\t\t\t<button *ngIf=\"compra.situacao\" matTooltip=\"Cancelar compra\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCompra(compra)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/compra/compra-form/compra-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/compra/compra-form/compra-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".solid-item {\n  border: 0.5px dotted;\n  -webkit-box-flex: 1;\n          flex: 1 1 0%;\n  height: 0px;\n  box-sizing: border-box;\n  margin-top: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21wcmEvY29tcHJhLWZvcm0vQzpcXGRldlxcbGEtbWFmaWEtZGV2XFxzcmNcXG1haW5cXHRzL3NyY1xcYXBwXFxtb2R1bGVzXFxjb21wcmFcXGNvbXByYS1mb3JtXFxjb21wcmEtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb21wcmEvY29tcHJhLWZvcm0vY29tcHJhLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcHJhL2NvbXByYS1mb3JtL2NvbXByYS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvbGlkLWl0ZW17XHJcbiAgICBib3JkZXI6IDAuNXB4IGRvdHRlZDtcclxuICAgIGZsZXg6IDEgMSAwJTtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxufVxyXG4iLCIuc29saWQtaXRlbSB7XG4gIGJvcmRlcjogMC41cHggZG90dGVkO1xuICBmbGV4OiAxIDEgMCU7XG4gIGhlaWdodDogMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiA5cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/compra/compra-form/compra-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/compra/compra-form/compra-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompraFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraFormComponent", function() { return CompraFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");



 //CompraService


var CompraFormComponent = /** @class */ (function () {
    function CompraFormComponent(openSnackBarService, dialogRef, compraService, fornecedorService, produtoService, condicaoPagamentoService, data) {
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.compraService = compraService;
        this.fornecedorService = fornecedorService;
        this.produtoService = produtoService;
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.compra = { condicaoPagamento: {}, itensCompra: [], contasAPagar: [], created: new Date(), frete: 0, seguro: 0, despesa: 0 }; //Compra = { numeroCompra: 0 };
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.usuarioAutenticado = {};
        this.fornecedores = [];
        this.produtos = [];
        this.pageRequest = [];
        this.itemCompra = {};
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.isDetail = false;
        this.dataHoje = new Date();
        if (data.isDetail != null) {
            this.isDetail = data.isDetail;
        }
        if (data.compra != null) {
            this.findCompraById(data.compra);
        }
    }
    CompraFormComponent.prototype.ngOnInit = function () {
        if (this.data.isDetail)
            this.title = "Visualizar compra";
        else
            this.title = "Inserir compra";
        this.onListFornecedores("");
        this.onListProdutos("");
        this.onListCondicaoPagamentos(null);
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    CompraFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var valid = this.validForm(form);
        if (!valid)
            return;
        this.compra.serie = this.compra.serie.trim();
        this.compra.numeroNota = this.compra.numeroNota.trim();
        this.compra.modelo = this.compra.modelo.trim();
        this.compra.contasAPagar.forEach(function (conta, i) {
            conta.serie = _this.compra.serie;
            conta.modelo = _this.compra.modelo;
            conta.numeroNota = _this.compra.numeroNota;
            conta.fornecedor = _this.compra.fornecedor;
            conta.numeroParcela = i + 1;
        });
        this.compra.itensCompra.forEach(function (itemCompra, i) {
            itemCompra.custoUnitario = itemCompra.valorUnitario + _this.getValorRateio(itemCompra); // TODO validar valor de rateio
        });
        this.compraService.insertCompra(this.compra).subscribe(function (compra) {
            _this.openSnackBarService.openSuccess("Compra salva com sucesso.");
            _this.dialogRef.close(_this.compra);
        }, function (err) {
            _this.openSnackBarService.openError(err.message);
        });
    };
    CompraFormComponent.prototype.validForm = function (form) {
        if (form.invalid || !this.compra.dataEmissao || !this.compra.dataChegada || !this.compra.fornecedor) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return false;
        }
        else if (!this.compra.itensCompra.length) {
            this.openSnackBarService.openError("É necessário adicionar ao menos um item na compra.");
            return false;
        }
        else if (!this.compra.contasAPagar.length) {
            this.openSnackBarService.openError("É necessário adicionar ao menos um conta á pagar.");
            return false;
        }
        return true;
    };
    CompraFormComponent.prototype.addItemCompra = function () {
        this.compra.itensCompra.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.itemCompra));
        this.itemCompra = {};
        this.onListProdutos("");
    };
    CompraFormComponent.prototype.removeItemCompra = function (i) {
        this.compra.itensCompra.splice(i, 1);
    };
    CompraFormComponent.prototype.findCompraById = function (compra) {
        var _this = this;
        this.compraService.findCompraById(compra.modelo, compra.serie, compra.numeroNota, compra.fornecedor.codigo)
            .subscribe(function (compra) {
            _this.compra = compra;
        }, function (err) { return console.log(err); });
    };
    /////////////////MODEL
    CompraFormComponent.prototype.onListCondicaoPagamentos = function (filter) {
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
    CompraFormComponent.prototype.displayFnCondicaoPagamento = function (condicaoPagamento) {
        return condicaoPagamento ? condicaoPagamento.codigo : undefined;
    };
    CompraFormComponent.prototype.onSelectFornecedor = function (fornecedor) {
        this.compra.fornecedor = fornecedor;
    };
    CompraFormComponent.prototype.onClickContasAPagar = function (tab) {
        if (tab.index == 2 && this.compra.fornecedor && this.compra.fornecedor.condicaoPagamento) {
            this.onSelectCondicaoPagamento(this.compra.fornecedor.condicaoPagamento);
        }
    };
    CompraFormComponent.prototype.onSelectCondicaoPagamento = function (condicaoPagamento) {
        this.compra.condicaoPagamento = condicaoPagamento;
        this.onListCondicaoPagamentos('');
        if (this.compra.condicaoPagamento.parcelas) {
            this.compra.condicaoPagamento.parcelas = this.compra.condicaoPagamento.parcelas.sort();
            this.compra.contasAPagar = [];
            for (var i = 0; i < this.compra.condicaoPagamento.parcelas.length; i++) {
                var dateNow = new Date();
                var parcela = this.compra.condicaoPagamento.parcelas[i];
                dateNow.setHours(0);
                dateNow.setMinutes(0);
                var dataVencimento = dateNow.setDate(dateNow.getDate() + parcela.dias);
                this.compra.contasAPagar.push({
                    dataVencimento: dataVencimento,
                    formaPagamento: parcela.formaPagamento,
                    juros: this.compra.condicaoPagamento.juros,
                    multa: this.compra.condicaoPagamento.multa,
                    desconto: this.compra.condicaoPagamento.desconto
                });
            }
            for (var i = 0; i < this.compra.contasAPagar.length - 1; i++) {
                var contaAPagar = this.compra.contasAPagar[i];
                contaAPagar.valorParcela = parseFloat(this.getValorParcela(i));
            }
            this.compra.contasAPagar[this.compra.contasAPagar.length - 1].valorParcela = (this.getValorTotalCompra + this.compra.despesa + this.compra.frete + this.compra.seguro) - this.compra.contasAPagar.map(function (c) { return c.valorParcela; })
                .reduce(function (total, currentValue) {
                if (currentValue)
                    total += currentValue;
                return total;
            }, 0);
        }
    };
    CompraFormComponent.prototype.onListFornecedores = function (filter) {
        var _this = this;
        this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.fornecedores = page.content.filter(function (c) { return c.situacao; });
        });
    };
    CompraFormComponent.prototype.displayFnFornecedor = function (fornecedor) {
        return fornecedor ? fornecedor.razaoSocial : undefined;
    };
    CompraFormComponent.prototype.onListProdutos = function (filter) {
        var _this = this;
        var codigo = null;
        var produto = "";
        if (isNaN(parseInt(filter)))
            produto = filter ? filter : "";
        else
            codigo = parseInt(filter);
        this.produtoService.listProdutosByFiltersToAssociation(produto, codigo, null).subscribe(function (page) {
            _this.produtos = page.content.filter(function (c) { return c.situacao; }).filter(function (c) { return !_this.compra.itensCompra.map(function (i) { return i.codigo; }).includes(c.codigo); });
        });
    };
    CompraFormComponent.prototype.displayFnProduto = function (produto) {
        return produto ? produto.produto : undefined;
    };
    CompraFormComponent.prototype.onSelectProduto = function (produto) {
        this.itemCompra = produto;
        this.itemCompra.valorUnitario = produto.currentEstoque.precoVenda;
        this.onListProdutos('');
    };
    CompraFormComponent.prototype.getValorTotal = function (itemProduto) {
        var valorTotal = itemProduto.valorUnitario * itemProduto.quantidade;
        return isNaN(valorTotal) ? 0 : valorTotal;
    };
    CompraFormComponent.prototype.getValorRateio = function (itemCompra) {
        var valorFinal = 0;
        if (this.compra.itensCompra.length > 0) {
            ///Soma o valor unitario de todos os itens da compra
            var total = this.compra.itensCompra.map(function (item) { return item.valorUnitario * item.quantidade; }).reduce(function (item1, item2) { return item1 + item2; });
            //Soma toda as despesas
            var totalDespesas = this.compra.frete + this.compra.despesa + this.compra.seguro;
            //Pega a porcentagem que representa o valor unitario do item do produto referente ao total
            var porcentagemItem = (itemCompra.valorUnitario * itemCompra.quantidade) / total;
            //Pega o valor total que o item vai ter de despesa
            valorFinal = totalDespesas * porcentagemItem;
            valorFinal /= itemCompra.quantidade;
        }
        return isNaN(valorFinal) ? 0 : valorFinal;
    };
    Object.defineProperty(CompraFormComponent.prototype, "itemCompraIsValid", {
        get: function () {
            if (!this.itemCompra.quantidade || !this.itemCompra.produto || !this.itemCompra.valorUnitario)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompraFormComponent.prototype, "getValorTotalCompra", {
        get: function () {
            var _this = this;
            var valorTotalCompra = 0;
            this.compra.itensCompra.forEach(function (itemCompra) {
                valorTotalCompra += _this.getValorTotal(itemCompra);
            });
            return valorTotalCompra || 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompraFormComponent.prototype, "getValorTotalNota", {
        get: function () {
            return this.getValorTotalCompra + this.compra.despesa + this.compra.frete + this.compra.seguro;
        },
        enumerable: true,
        configurable: true
    });
    CompraFormComponent.prototype.getNumeroDocumento = function (i) {
        // modelo/serie/numero/numeroParcela
        return this.compra.modelo + "." + this.compra.serie + "." + this.compra.numeroNota + "/" + this.compra.condicaoPagamento.parcelas[i].parcela;
    };
    CompraFormComponent.prototype.getValorParcela = function (i) {
        return ((this.getValorTotalCompra + this.compra.frete + this.compra.despesa + this.compra.seguro) * (this.compra.condicaoPagamento.parcelas[i].porcentagem / 100)).toFixed(2);
    };
    CompraFormComponent.prototype.onChangeTipoFrete = function () {
        if (this.compra.tipoFrete == 'PAGO_PELO_FORNECEDOR') {
            this.compra.frete = 0;
            this.compra.seguro = 0;
            this.compra.despesa = 0;
        }
    };
    CompraFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compra-form',
            template: __webpack_require__(/*! raw-loader!./compra-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/compra/compra-form/compra-form.component.html"),
            styles: [__webpack_require__(/*! ./compra-form.component.scss */ "./src/app/modules/compra/compra-form/compra-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CompraService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["FornecedorService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoService"], Object])
    ], CompraFormComponent);
    return CompraFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/compra/compra-list/compra-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/compra/compra-list/compra-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tcHJhL2NvbXByYS1saXN0L2NvbXByYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/compra/compra-list/compra-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/compra/compra-list/compra-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompraListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraListComponent", function() { return CompraListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compra-form/compra-form.component */ "./src/app/modules/compra/compra-form/compra-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






 //CompraService, 


var CompraListComponent = /** @class */ (function () {
    function CompraListComponent(dialog, compraService, paginationService, openSnackBarService, _dialogService, fornecedorService) {
        this.dialog = dialog;
        this.compraService = compraService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this._dialogService = _dialogService;
        this.fornecedorService = fornecedorService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            fornecedor: null,
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
            { name: 'fornecedor', label: 'FORNECEDOR', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.fornecedores = [];
        this.pageRequest = paginationService.pageRequest('modelo', 'ASC', 10);
    }
    CompraListComponent.prototype.ngOnInit = function () {
        this.onListComprasByFilters(true);
        this.onListFornecedores("");
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    CompraListComponent.prototype.openForm = function (compra, isDetail) {
        var _this = this;
        if (isDetail === void 0) { isDetail = false; }
        var dialogRef = this.dialog.open(_compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_2__["CompraFormComponent"], {
            width: '1200px',
            height: 'auto',
            data: { isDetail: isDetail, compra: compra }
        });
        dialogRef.afterClosed().subscribe(function () {
            _this.onListComprasByFilters();
        });
    };
    /**
      */
    CompraListComponent.prototype.onListComprasByFilters = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.compraService.listComprasByFilters(this.filters.modelo, this.filters.serie, this.filters.numeroNota, this.filters.fornecedor ? this.filters.fornecedor.codigo : null, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    CompraListComponent.prototype.clearFilters = function () {
        this.filters = {
            fornecedor: null,
            modelo: "",
            serie: "",
            numeroNota: ""
        };
        this.onListComprasByFilters();
    };
    CompraListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListComprasByFilters();
    };
    CompraListComponent.prototype.atualizarSituacaoCompra = function (compra) {
        var _this = this;
        if (compra.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja cancelar esta compra ?",
                title: "Cancelar compra",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.compraService.updateSituacaoCompra(compra.modelo, compra.serie, compra.numeroNota, compra.fornecedor.codigo, !compra.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Compra cancelada com sucesso.');
                        _this.onListComprasByFilters();
                    }, function (err) { return _this.openSnackBarService.openError(err.message, 10000); });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja restaurar esta compra ?",
                title: "Restaurar compra",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.compraService.updateSituacaoCompra(compra.modelo, compra.serie, compra.numeroNota, compra.fornecedor.codigo, !compra.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Compra restaurar com sucesso.');
                        _this.onListComprasByFilters();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /////////////////MODEL
    CompraListComponent.prototype.onListFornecedores = function (filter) {
        var _this = this;
        this.fornecedorService.listFornecedorsByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.fornecedores = page.content.filter(function (c) { return c.situacao; });
        });
    };
    CompraListComponent.prototype.displayFnFornecedor = function (fornecedor) {
        return fornecedor ? fornecedor.razaoSocial : undefined;
    };
    CompraListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-compra-list',
            template: __webpack_require__(/*! raw-loader!./compra-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/compra/compra-list/compra-list.component.html"),
            styles: [__webpack_require__(/*! ./compra-list.component.scss */ "./src/app/modules/compra/compra-list/compra-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_generated_services__WEBPACK_IMPORTED_MODULE_6__["CompraService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["FornecedorService"]])
    ], CompraListComponent);
    return CompraListComponent;
}());



/***/ }),

/***/ "./src/app/modules/compra/compra.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/compra/compra.module.ts ***!
  \*************************************************/
/*! exports provided: CompraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraModule", function() { return CompraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _compra_list_compra_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compra-list/compra-list.component */ "./src/app/modules/compra/compra-list/compra-list.component.ts");
/* harmony import */ var _compra_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra.routing */ "./src/app/modules/compra/compra.routing.ts");
/* harmony import */ var _compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compra-form/compra-form.component */ "./src/app/modules/compra/compra-form/compra-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var CompraModule = /** @class */ (function () {
    function CompraModule() {
    }
    CompraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _compra_list_compra_list_component__WEBPACK_IMPORTED_MODULE_2__["CompraListComponent"],
                _compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_4__["CompraFormComponent"],
            ],
            imports: [
                _compra_routing__WEBPACK_IMPORTED_MODULE_3__["CompraRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _compra_list_compra_list_component__WEBPACK_IMPORTED_MODULE_2__["CompraListComponent"],
                _compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_4__["CompraFormComponent"],
                _compra_routing__WEBPACK_IMPORTED_MODULE_3__["CompraRouting"]
            ],
            entryComponents: [
                _compra_form_compra_form_component__WEBPACK_IMPORTED_MODULE_4__["CompraFormComponent"]
            ],
            providers: []
        })
    ], CompraModule);
    return CompraModule;
}());



/***/ }),

/***/ "./src/app/modules/compra/compra.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/compra/compra.routing.ts ***!
  \**************************************************/
/*! exports provided: CompraRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompraRouting", function() { return CompraRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _compra_list_compra_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compra-list/compra-list.component */ "./src/app/modules/compra/compra-list/compra-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var compraRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _compra_list_compra_list_component__WEBPACK_IMPORTED_MODULE_3__["CompraListComponent"],
                data: {
                    title: 'Compra',
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var CompraRouting = /** @class */ (function () {
    function CompraRouting() {
    }
    CompraRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(compraRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompraRouting);
    return CompraRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-compra-compra-module.js.map