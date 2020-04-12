(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-fornecedor-fornecedor-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n\r\n  <h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input uppercase matInput [(ngModel)]=\"fornecedor.codigo\" name=\"codigo\" [disabled]=\"true\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Razão Social</mat-label>\r\n        <input uppercase required [(ngModel)]=\"fornecedor.razaoSocial\" name=\"razaoSocial\" matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CNPJ</mat-label>\r\n        <input uppercase required [textMask]=\"{mask: maskCnpj, guide: false}\" [(ngModel)]=\"fornecedor.cnpj\" name=\"cnpj\"\r\n          matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Celular</mat-label>\r\n        <input uppercase required [textMask]=\"{mask: maskCelular, guide: false}\" [(ngModel)]=\"fornecedor.celular\"\r\n          matInput name=\"celular\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Telefone</mat-label>\r\n        <input uppercase  maxlength=\"50\" [textMask]=\"{mask: maskTelefone, guide:false}\" matInput name=\"telefone\"\r\n          [(ngModel)]=\"fornecedor.telefone\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>E-mail</mat-label>\r\n        <input uppercase [(ngModel)]=\"fornecedor.email\" email=\"true\" name=\"email\" type=\"email\" matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Endereço</mat-label>\r\n        <input uppercase required [(ngModel)]=\"fornecedor.endereco\" name=\"endereco\" matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Número</mat-label>\r\n        <input uppercase matInput [textMask]=\"{mask: masks.getNumbersOnlyMask(5), guide: false}\"\r\n          [(ngModel)]=\"fornecedor.numero\" name=\"numero\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n      \r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Bairro</mat-label>\r\n        <input uppercase required matInput [(ngModel)]=\"fornecedor.bairro\" maxlength=\"144\" name=\"bairro\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\" center\">\r\n\r\n\r\n      <div *ngIf=\"fornecedor.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">País</label>\r\n        <label>{{fornecedor?.cidade?.estado?.pais?.pais}}</label>\r\n      </div>\r\n\r\n      <div *ngIf=\"fornecedor.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\" class=\"push-left-md push-right-md\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">Estado</label>\r\n        <label>{{fornecedor?.cidade?.estado?.estado}}</label>\r\n      </div>\r\n\r\n      <auto-complete-with-redirect\r\n          fxFlex\r\n          title=\"Cidade\"\r\n          link=\"cidade\"\r\n          key=\"codigo\"\r\n          displayKey=\"cidade\"\r\n          [displayId]=\"true\"\r\n          [isDetail]=\"isFranquiado\"\r\n          [list]=\"{values: cidades}\"\r\n          [classes]=\"required-class-cidade\"\r\n          [itemSelected]=\"{selected: fornecedor.cidade}\"\r\n          (onFilterChange)=\"onListCidades($event)\"\r\n          (onSelect)=\"fornecedor.cidade = $event\"\r\n          (onDelete)=\"fornecedor.cidade = null\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CEP</mat-label>\r\n        <input uppercase required [textMask]=\"{mask: masks.cep, guide: false}\" [(ngModel)]=\"fornecedor.cep\" name=\"cep\"\r\n          matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Inscrição estadual</mat-label>\r\n        <input uppercase [(ngModel)]=\"fornecedor.inscricaoEstadual\" name=\"inscricaoEstadual\" matInput maxlength=\"144\" [disabled]=\"isFranquiado\">\r\n      </mat-form-field>\r\n\r\n      <auto-complete-with-redirect\r\n         *ngIf=\"isFranquiado\"\r\n          [isNotRequired]=\"true\" \r\n          fxFlex\r\n          title=\"Condição de pagamento\"\r\n          link=\"condicao-pagamento\"\r\n          key=\"codigo\"\r\n          [displayId]=\"true\"\r\n          displayKey=\"condicaoPagamento\"\r\n          [displayId]=\"false\"\r\n          [list]=\"{values: condicoesPagamento}\"\r\n          [itemSelected]=\"{selected: fornecedor.condicaoPagamento}\"\r\n          (onFilterChange)=\"onListCondicoesPagamento($event)\"\r\n          (onSelect)=\"fornecedor.condicaoPagamento = $event\"\r\n          (onDelete)=\"fornecedor.condicaoPagamento = null\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ fornecedor.created ? (fornecedor.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ fornecedor.updated ? (fornecedor.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n      color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n  push-left-md bgc-grey-800\">\r\n      CANCELAR\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row>\r\n\t\t<mat-form-field [floatLabel]=\"'never'\" style=\"width: 80vh; \" appearance=\"outline\">\r\n\t\t\t<mat-label>RAZÃO SOCIAL</mat-label>\r\n\t\t\t<input uppercase matInput maxlength=\"144\" [(ngModel)]=\"filters.razaoSocial\">\r\n\t\t</mat-form-field>\r\n\t\t<span flex></span>\r\n\t\t<button class=\"white-btn\" color=\"primary\" (click)=\"openForm()\" *ngIf=\"!isFranquiado\" mat-raised-button>ADICIONAR NOVO FORNECEDOR</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListFornecedores()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"filters.razaoSocial = ''; onListFornecedores()\"\r\n\t\t\tmat-raised-button>LIMPAR\r\n\t\t\tFILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"razaoSocial\" let-fornecedor=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ fornecedor?.razaoSocial}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"cnpj\" let-fornecedor=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ fornecedor?.cnpj}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"telefone\" let-fornecedor=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ fornecedor?.telefone}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"celular\" let-fornecedor=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ fornecedor?.celular}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"endereco\" let-fornecedor=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ fornecedor?.endereco}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-fornecedor=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"fornecedor?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!fornecedor?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-fornecedor=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar fornecedor\" stopPropagation\r\n\t\t\tclass=\"tc-grey-700 edit-button-hover\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); openForm(fornecedor)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"edit-icon\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!fornecedor.situacao && !isFranquiado\" matTooltip=\"Ativar fornecedor\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoFornecedor(fornecedor)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"fornecedor.situacao && !isFranquiado\" matTooltip=\"Excluir/Desativar fornecedor\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoFornecedor(fornecedor)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybmVjZWRvci9mb3JuZWNlZG9yLWZvcm0vZm9ybmVjZWRvci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FornecedorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorFormComponent", function() { return FornecedorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");
/* harmony import */ var src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");







var FornecedorFormComponent = /** @class */ (function () {
    function FornecedorFormComponent(fornecedorService, openSnackBarService, dialogRef, cidadeService, condicaoPagamentoService, autenticacaoService, data) {
        this.fornecedorService = fornecedorService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.cidadeService = cidadeService;
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.autenticacaoService = autenticacaoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.fornecedor = { codigo: 0 };
        this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskTelefone = ['(', /\d/, /\d/, ')', ' ', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskCelular = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.title = "";
        this.confSenha = null;
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.isFranquiado = false;
        if (data.codigo != null) {
            this.onFindFornecedorById(data.codigo);
        }
        this.onListCidades("");
        this.onListCondicoesPagamento("");
    }
    FornecedorFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.data.codigo)
                    this.title = "Alterar fornecedor";
                else
                    this.title = "Inserir fornecedor";
                this.autenticacaoService.usuarioAutenticado().then(function (result) {
                    _this.isFranquiado = _this.autenticacaoService.isFranquiado;
                });
                return [2 /*return*/];
            });
        });
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    FornecedorFormComponent.prototype.onFindFornecedorById = function (id) {
        var _this = this;
        this.fornecedorService.findFornecedorById(id).subscribe(function (fornecedor) {
            _this.fornecedor = fornecedor;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    FornecedorFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (!this.fornecedor.cidade) {
            this.openSnackBarService.openError('O campo cidade deve ser preenchido.');
            return;
        }
        this.fornecedor.estado = this.fornecedor.cidade.estado;
        this.fornecedor.pais = this.fornecedor.cidade.estado.pais;
        if (!this.validaCNPJ(this.fornecedor.cnpj)) {
            this.openSnackBarService.openError('CNPJ inválido.');
            return;
        }
        if (this.fornecedor.telefone) {
            var numb = this.fornecedor.telefone.match(/\d/g);
            numb = numb.join("").toString();
            if (numb.length != 10) {
                this.openSnackBarService.openError('telefone inválido.');
                return;
            }
        }
        if (this.fornecedor.celular) {
            var numb = this.fornecedor.celular.match(/\d/g);
            numb = numb.join("").toString();
            if (numb.length != 11) {
                this.openSnackBarService.openError('celular inválido.');
                return;
            }
        }
        else {
            this.fornecedor.telefone = this.fornecedor.telefone.replace(/\.|-/gi, '');
            this.fornecedor.celular = this.fornecedor.celular.replace(/\.|-/gi, '');
        }
        if (this.fornecedor.senha && (this.fornecedor.senha != this.confSenha)) {
            this.openSnackBarService.openError('Confirmação de senha inválida');
            return;
        }
        if (!this.fornecedor.codigo) {
            this.fornecedorService.insertFornecedor(this.fornecedor).subscribe(function (fornecedor) {
                _this.openSnackBarService.openSuccess("Fornecedor inserido com sucesso.");
                _this.dialogRef.close(_this.fornecedor);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
        else {
            this.fornecedorService.updateFornecedor(this.fornecedor).subscribe(function (fornecedor) {
                _this.openSnackBarService.openSuccess("Fornecedor atualizado com sucesso.");
                _this.dialogRef.close(_this.fornecedor);
            }, function (err) { return _this.openSnackBarService.openError(err.message); });
        }
    };
    FornecedorFormComponent.prototype.validaCNPJ = function (cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g, '');
        if (cnpj == '')
            return false;
        if (cnpj.length != 14)
            return false;
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
        // Valida DVs
        var tamanho = cnpj.length - 2;
        var numeros = cnpj.substring(0, tamanho);
        var digitos = cnpj.substring(tamanho);
        var soma = 0;
        var pos = tamanho - 7;
        var i;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    };
    FornecedorFormComponent.prototype.onListCidades = function (filter) {
        var _this = this;
        this.cidadeService.listCidadesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.cidades = page.content.filter(function (c) { return c.situacao; });
        });
    };
    FornecedorFormComponent.prototype.displayFnCidade = function (cidade) {
        return cidade ? cidade.cidade : undefined;
    };
    FornecedorFormComponent.prototype.onListCondicoesPagamento = function (filter) {
        var _this = this;
        var codigo = null;
        var condicaoPagamento = "";
        if (isNaN(parseInt(filter)))
            condicaoPagamento = filter ? filter : "";
        else
            codigo = parseInt(filter);
        this.condicaoPagamentoService.listCondicaoPagamentosByFilters(codigo, condicaoPagamento, null).subscribe(function (page) {
            _this.condicoesPagamento = page.content.filter(function (c) { return c.situacao; });
        });
    };
    FornecedorFormComponent.prototype.displayFnCondicaoPagamento = function (condicaoPagamento) {
        return condicaoPagamento ? condicaoPagamento.codigo : undefined;
    };
    FornecedorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fornecedor-form',
            template: __webpack_require__(/*! raw-loader!./fornecedor-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-form.component.scss */ "./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["FornecedorService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CidadeService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoService"],
            src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"], Object])
    ], FornecedorFormComponent);
    return FornecedorFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9ybmVjZWRvci9mb3JuZWNlZG9yLWxpc3QvZm9ybmVjZWRvci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FornecedorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorListComponent", function() { return FornecedorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fornecedor-form/fornecedor-form.component */ "./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");









var FornecedorListComponent = /** @class */ (function () {
    function FornecedorListComponent(dialog, _dialogService, paginationService, openSnackBarService, autenticacaoService, fornecedorService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.autenticacaoService = autenticacaoService;
        this.fornecedorService = fornecedorService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            razaoSocial: '',
        };
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'razaoSocial', label: 'RAZÃO SOCIAL', sortable: false },
            { name: 'celular', label: 'CELULAR', sortable: false },
            { name: 'cnpj', label: 'CNPJ', sortable: false },
            { name: 'endereco', label: 'ENDEREÇO', sortable: false },
            { name: 'telefone', label: 'TELEFONE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 300 }
        ];
        this.isFranquiado = false;
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }
    FornecedorListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.onListFornecedores();
                this.autenticacaoService.usuarioAutenticado().then(function (result) {
                    _this.isFranquiado = _this.autenticacaoService.isFranquiado;
                });
                return [2 /*return*/];
            });
        });
    };
    FornecedorListComponent.prototype.onListFornecedores = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        this.fornecedorService.listFornecedorsByFilters(this.filters.razaoSocial).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    FornecedorListComponent.prototype.openForm = function (fornecedor) {
        var _this = this;
        var dialogRef = this.dialog.open(_fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_2__["FornecedorFormComponent"], {
            width: '1000px',
            height: 'auto',
            data: { codigo: fornecedor ? fornecedor.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (fornecedorSaved) {
            if (fornecedorSaved)
                _this.onListFornecedores();
        });
    };
    FornecedorListComponent.prototype.atualizarSituacaoFornecedor = function (fornecedor) {
        var _this = this;
        if (fornecedor.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este fornecedor ?",
                title: "Excluir fornecedor",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.fornecedorService.deleteFornecedor(fornecedor.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Fornecedor excluído com sucesso.');
                        _this.onListFornecedores();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este fornecedor pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar fornecedor",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.fornecedorService.updateSituacaoFornecedor(fornecedor.codigo, !fornecedor.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Fornecedor desativado com sucesso.');
                                    _this.onListFornecedores();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este fornecedor ?",
                title: "Ativar fornecedor",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.fornecedorService.updateSituacaoFornecedor(fornecedor.codigo, !fornecedor.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Fornecedor ativado com sucesso.');
                        _this.onListFornecedores();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    FornecedorListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListFornecedores();
    };
    FornecedorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fornecedor-list',
            template: __webpack_require__(/*! raw-loader!./fornecedor-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.html"),
            styles: [__webpack_require__(/*! ./fornecedor-list.component.scss */ "./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_8__["AutenticacaoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["FornecedorService"]])
    ], FornecedorListComponent);
    return FornecedorListComponent;
}());



/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor.module.ts ***!
  \*********************************************************/
/*! exports provided: FornecedorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorModule", function() { return FornecedorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fornecedor-list/fornecedor-list.component */ "./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.ts");
/* harmony import */ var _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fornecedor-form/fornecedor-form.component */ "./src/app/modules/fornecedor/fornecedor-form/fornecedor-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _fornecedor_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fornecedor.routing */ "./src/app/modules/fornecedor/fornecedor.routing.ts");






var FornecedorModule = /** @class */ (function () {
    function FornecedorModule() {
    }
    FornecedorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_2__["FornecedorListComponent"],
                _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_3__["FornecedorFormComponent"],
            ],
            imports: [
                _fornecedor_routing__WEBPACK_IMPORTED_MODULE_5__["FornecedorRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"]
            ],
            exports: [
                _fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_2__["FornecedorListComponent"],
                _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_3__["FornecedorFormComponent"],
                _fornecedor_routing__WEBPACK_IMPORTED_MODULE_5__["FornecedorRouting"]
            ],
            entryComponents: [
                _fornecedor_form_fornecedor_form_component__WEBPACK_IMPORTED_MODULE_3__["FornecedorFormComponent"]
            ],
            providers: []
        })
    ], FornecedorModule);
    return FornecedorModule;
}());



/***/ }),

/***/ "./src/app/modules/fornecedor/fornecedor.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/fornecedor/fornecedor.routing.ts ***!
  \**********************************************************/
/*! exports provided: FornecedorRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FornecedorRouting", function() { return FornecedorRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fornecedor-list/fornecedor-list.component */ "./src/app/modules/fornecedor/fornecedor-list/fornecedor-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var fornecedorRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _fornecedor_list_fornecedor_list_component__WEBPACK_IMPORTED_MODULE_3__["FornecedorListComponent"],
                data: {
                    title: 'Fornecedores',
                    ambos: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var FornecedorRouting = /** @class */ (function () {
    function FornecedorRouting() {
    }
    FornecedorRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(fornecedorRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FornecedorRouting);
    return FornecedorRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-fornecedor-fornecedor-module.js.map