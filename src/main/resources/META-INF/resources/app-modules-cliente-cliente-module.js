(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-cliente-cliente-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cliente/cliente-form/cliente-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cliente/cliente-form/cliente-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\"  fxLayoutAlign=\" center\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input uppercase matInput [(ngModel)]=\"cliente.codigo\" name=\"codigo\" [disabled]=\"true\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Cliente</mat-label>\r\n        <input uppercase uppercase required [(ngModel)]=\"cliente.cliente\" name=\"cliente\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n      <mat-radio-group required [(ngModel)]=\"cliente.sexo\" name=\"sexo\" aria-label=\"Sexo\">\r\n        <mat-radio-button value=\"Masculino\">Masculino</mat-radio-button>\r\n        <mat-radio-button value=\"Feminino\" class=\"push-left-sm\">Feminino</mat-radio-button>\r\n      </mat-radio-group>\r\n\r\n    </div>\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\">\r\n\r\n      <mat-checkbox  [(ngModel)]=\"cliente.isEstrangeiro\" name=\"isEstrangeiro\">Estrangeiro ?</mat-checkbox>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CPF</mat-label>\r\n        <input uppercase uppercase [required]=\"!cliente.isEstrangeiro\" [textMask]=\"{mask: maskCpf, guide: false}\" [(ngModel)]=\"cliente.cpf\"\r\n          name=\"cpf\" matInput maxlength=\"144\"\r\n          pattern=\"([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" class=\"data-with-double-suffix\">\r\n        <mat-label>Data de nascimento *</mat-label>\r\n        <input matInput required [max]=\"dataHoje\" [matDatepicker]=\"dataNascimento\" [(ngModel)]=\"cliente.dataNascimento\" name=\"dataNascimento\" disabled>\r\n        <mat-datepicker-toggle matSuffix [for]=\"dataNascimento\" ></mat-datepicker-toggle>\r\n        <button *ngIf=\"cliente.dataNascimento && !cliente.created\"  matSuffix mat-icon-button (click)=\"cliente.dataNascimento = null; \" matTooltip=\"Remover data de nascimento\">\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n        <mat-datepicker #dataNascimento disabled=\"false\"></mat-datepicker>\r\n      </mat-form-field>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Celular</mat-label>\r\n        <input uppercase uppercase required [textMask]=\"{mask: maskCelular, guide: false}\" [(ngModel)]=\"cliente.celular\"\r\n          matInput name=\"celular\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Telefone</mat-label>\r\n        <input uppercase uppercase maxlength=\"50\" [textMask]=\"{mask: maskTelefone, guide:false}\" matInput\r\n          name=\"telefone\" [(ngModel)]=\"cliente.telefone\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>E-mail</mat-label>\r\n        <input uppercase uppercase [(ngModel)]=\"cliente.email\" email=\"true\" name=\"email\" type=\"email\" matInput\r\n          maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Número</mat-label>\r\n        <input uppercase required matInput [textMask]=\"{mask: masks.getNumbersOnlyMask(5), guide: false}\"\r\n          [(ngModel)]=\"cliente.numero\" name=\"numero\" >\r\n      </mat-form-field>\r\n      \r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Bairro</mat-label>\r\n        <input uppercase required matInput [(ngModel)]=\"cliente.bairro\" maxlength=\"144\" name=\"bairro\" >\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Endereço</mat-label>\r\n        <input uppercase uppercase [(ngModel)]=\"cliente.endereco\" required  name=\"endereco\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n\r\n\r\n    </div>\r\n\r\n    <div fxFlex>\r\n      \r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Complemento</mat-label>\r\n        <input uppercase uppercase [(ngModel)]=\"cliente.complemento\" name=\"complemento\" matInput maxlength=\"144\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\" center\">\r\n\r\n\r\n      <div *ngIf=\"cliente.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">País</label>\r\n        <label>{{cliente?.cidade?.estado?.pais?.pais}}</label>\r\n      </div>\r\n\r\n      <div *ngIf=\"cliente.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\" class=\"push-left-md push-right-md\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">Estado</label>\r\n        <label>{{cliente?.cidade?.estado?.estado}}</label>\r\n      </div>\r\n\r\n      <auto-complete-with-redirect\r\n          fxFlex\r\n          title=\"Cidade\"\r\n          key=\"codigo\"\r\n          link=\"cidade\"\r\n          displayKey=\"cidade\"\r\n          [displayId]=\"true\"\r\n          [list]=\"{values: cidades}\"\r\n          [classes]=\"required-class-cidade\"\r\n          [itemSelected]=\"{selected: cliente.cidade}\"\r\n          (onFilterChange)=\"onListCidades($event)\"\r\n          (onSelect)=\"cliente.cidade = $event\"\r\n          (onDelete)=\"cliente.cidade = null\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\">\r\n      <auto-complete-with-redirect\r\n          fxFlex\r\n          title=\"Condição de pagamento\"\r\n          link=\"condicao-pagamento\"\r\n          [classes]=\"'required-class-condicao-pagamento'\"\r\n          key=\"codigo\"\r\n          displayKey=\"condicaoPagamento\"\r\n          [displayId]=\"true\"\r\n          [list]=\"{values: condicoesPagamento}\"\r\n          [itemSelected]=\"{selected: cliente.condicaoPagamento}\"\r\n          (onFilterChange)=\"onListCondicoesPagamento($event)\"\r\n          (onSelect)=\"cliente.condicaoPagamento = $event\"\r\n          (onDelete)=\"cliente.condicaoPagamento = null\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n    </div>\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ cliente.created ? (cliente.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ cliente.updated ? (cliente.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n      color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n  push-left-md bgc-grey-800\">\r\n      CANCELAR\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cliente/cliente-list/cliente-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cliente/cliente-list/cliente-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row>\r\n\t\t<mat-form-field [floatLabel]=\"'never'\" style=\"width: 80vh; \" appearance=\"outline\">\r\n\t\t\t<mat-label>CLIENTE</mat-label>\r\n\t\t\t<input uppercase matInput maxlength=\"144\" [(ngModel)]=\"filters.cliente\">\r\n\t\t</mat-form-field>\r\n\t\t<span flex></span>\r\n\t\t<button color=\"primary\" (click)=\"openForm()\" class=\"white-btn\" mat-raised-button>ADICIONAR NOVO CLIENTE</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListClientes()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"filters.cliente = ''; onListClientes()\"\r\n\t\t\tmat-raised-button>LIMPAR\r\n\t\t\tFILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"cliente\" let-cliente=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ cliente?.cliente}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"celular\" let-cliente=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ cliente?.celular}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"cpf\" let-cliente=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ cliente?.cpf}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-cliente=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"cliente?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!cliente?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-cliente=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar funcionário\" stopPropagation\r\n\t\t\tclass=\"tc-grey-700 edit-button-hover\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); openForm(cliente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"edit-icon\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!cliente.situacao\" matTooltip=\"Ativar cliente\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCliente(cliente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"cliente.situacao\" matTooltip=\"Excluir/Desativar cliente\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoCliente(cliente)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/cliente/cliente-form/cliente-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/cliente/cliente-form/cliente-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xpZW50ZS9jbGllbnRlLWZvcm0vY2xpZW50ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cliente/cliente-form/cliente-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/cliente/cliente-form/cliente-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ClienteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteFormComponent", function() { return ClienteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var ClienteFormComponent = /** @class */ (function () {
    function ClienteFormComponent(clienteService, openSnackBarService, dialogRef, cidadeService, condicaoPagamentoService, data) {
        this.clienteService = clienteService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.cidadeService = cidadeService;
        this.condicaoPagamentoService = condicaoPagamentoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.cliente = { codigo: 0, sexo: 'Masculino' };
        this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskTelefone = ['(', /\d/, /\d/, ')', ' ', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskCelular = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.dataHoje = new Date();
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.codigo != null) {
            this.onFindClienteById(data.codigo);
        }
        this.onListCidades("");
        this.onListCondicoesPagamento("");
    }
    ClienteFormComponent.prototype.ngOnInit = function () {
        if (this.data.codigo)
            this.title = "Alterar cliente";
        else
            this.title = "Inserir cliente";
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    ClienteFormComponent.prototype.onFindClienteById = function (id) {
        var _this = this;
        this.clienteService.findClienteById(id).subscribe(function (cliente) {
            _this.cliente = cliente;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    ClienteFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.cliente.cidade) {
            this.openSnackBarService.openError('O campo cidade deve ser preenchido.');
            return;
        }
        if (!this.cliente.condicaoPagamento) {
            this.openSnackBarService.openError('O campo condição de pagamento deve ser preenchido.');
            return;
        }
        if (!form.invalid && this.cliente.dataNascimento) {
            this.cliente.estado = this.cliente.cidade.estado;
            this.cliente.pais = this.cliente.cidade.estado.pais;
            if (this.cliente.cpf && typeof this.cliente.cpf == "string") {
                this.cliente.cpf = this.cliente.cpf.replace(/\.|-/gi, '');
                if (!this.validaCPF(this.cliente.cpf)) {
                    this.openSnackBarService.openError('CPF inválido.');
                    return;
                }
            }
            if (this.cliente.telefone) {
                var numb = this.cliente.telefone.match(/\d/g);
                numb = numb.join("").toString();
                if (numb.length != 10) {
                    this.openSnackBarService.openError('telefone inválido.');
                    return;
                }
            }
            if (this.cliente.celular) {
                var numb = this.cliente.celular.match(/\d/g);
                numb = numb.join("").toString();
                if (numb.length != 11) {
                    this.openSnackBarService.openError('celular inválido.');
                    return;
                }
            }
            else {
                this.cliente.telefone = this.cliente.telefone.replace(/\.|-/gi, '');
                this.cliente.celular = this.cliente.celular.replace(/\.|-/gi, '');
            }
            if (!this.cliente.codigo) {
                this.clienteService.insertCliente(this.cliente).subscribe(function (cliente) {
                    _this.openSnackBarService.openSuccess("Cliente salvo");
                    _this.dialogRef.close(_this.cliente);
                }, function (err) { return _this.openSnackBarService.openError(err.message); });
            }
            else {
                this.clienteService.updateCliente(this.cliente).subscribe(function (cliente) {
                    _this.openSnackBarService.openSuccess("Cliente atualizado");
                    _this.dialogRef.close(_this.cliente);
                }, function (err) { return _this.openSnackBarService.openError(err.message); });
            }
        }
        else {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
        }
    };
    ClienteFormComponent.prototype.validaCPF = function (cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '')
            return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito
        var add = 0;
        for (var i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        var rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito
        add = 0;
        for (var i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    };
    ClienteFormComponent.prototype.onListCidades = function (filter) {
        var _this = this;
        this.cidadeService.listCidadesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.cidades = page.content.filter(function (c) { return c.situacao; });
        });
    };
    ClienteFormComponent.prototype.displayFnCidade = function (cidade) {
        return cidade ? cidade.cidade : undefined;
    };
    ClienteFormComponent.prototype.onListCondicoesPagamento = function (filter) {
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
    ClienteFormComponent.prototype.displayFnCondicaoPagamento = function (condicaoPagamento) {
        return condicaoPagamento ? condicaoPagamento.codigo : undefined;
    };
    ClienteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cliente-form',
            template: __webpack_require__(/*! raw-loader!./cliente-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cliente/cliente-form/cliente-form.component.html"),
            styles: [__webpack_require__(/*! ./cliente-form.component.scss */ "./src/app/modules/cliente/cliente-form/cliente-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ClienteService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CidadeService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CondicaoPagamentoService"], Object])
    ], ClienteFormComponent);
    return ClienteFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/cliente/cliente-list/cliente-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/cliente/cliente-list/cliente-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xpZW50ZS9jbGllbnRlLWxpc3QvY2xpZW50ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cliente/cliente-list/cliente-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/cliente/cliente-list/cliente-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ClienteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListComponent", function() { return ClienteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente-form/cliente-form.component */ "./src/app/modules/cliente/cliente-form/cliente-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var ClienteListComponent = /** @class */ (function () {
    function ClienteListComponent(dialog, _dialogService, paginationService, openSnackBarService, clienteService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.clienteService = clienteService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            cliente: '',
        };
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO' },
            { name: 'cliente', label: 'CLIENTE', sortable: false },
            { name: 'celular', label: 'CELULAR', sortable: false },
            { name: 'cpf', label: 'CPF', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 300 }
        ];
        this.pageRequest = paginationService.pageRequest('titulo', 'ASC', 10);
    }
    ClienteListComponent.prototype.ngOnInit = function () {
        this.onListClientes();
    };
    ClienteListComponent.prototype.onListClientes = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        this.clienteService.listClientesByFilters(this.filters.cliente).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    ClienteListComponent.prototype.openForm = function (cliente) {
        var _this = this;
        var dialogRef = this.dialog.open(_cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_2__["ClienteFormComponent"], {
            width: '900px',
            height: 'auto',
            data: { codigo: cliente ? cliente.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (clienteSaved) {
            if (clienteSaved)
                _this.onListClientes();
        });
    };
    ClienteListComponent.prototype.atualizarSituacaoCliente = function (cliente) {
        var _this = this;
        if (cliente.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este cliente ?",
                title: "Excluir cliente",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.clienteService.deleteCliente(cliente.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Cliente excluído com sucesso.');
                        _this.onListClientes();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este cliente pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar cliente",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.clienteService.updateSituacaoCliente(cliente.codigo, !cliente.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Cliente desativado com sucesso.');
                                    _this.onListClientes();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar este cliente ?",
                title: "Ativar cliente",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.clienteService.updateSituacaoCliente(cliente.codigo, !cliente.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Cliente ativado com sucesso.');
                        _this.onListClientes();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    ClienteListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListClientes();
    };
    ClienteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cliente-list',
            template: __webpack_require__(/*! raw-loader!./cliente-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cliente/cliente-list/cliente-list.component.html"),
            styles: [__webpack_require__(/*! ./cliente-list.component.scss */ "./src/app/modules/cliente/cliente-list/cliente-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["ClienteService"]])
    ], ClienteListComponent);
    return ClienteListComponent;
}());



/***/ }),

/***/ "./src/app/modules/cliente/cliente.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cliente/cliente.module.ts ***!
  \***************************************************/
/*! exports provided: ClienteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cliente-list/cliente-list.component */ "./src/app/modules/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-form/cliente-form.component */ "./src/app/modules/cliente/cliente-form/cliente-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");
/* harmony import */ var _cliente_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cliente.routing */ "./src/app/modules/cliente/cliente.routing.ts");






var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_2__["ClienteListComponent"],
                _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_3__["ClienteFormComponent"],
            ],
            imports: [
                _cliente_routing__WEBPACK_IMPORTED_MODULE_5__["ClienteRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_4__["SharedCommonModule"]
            ],
            exports: [
                _cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_2__["ClienteListComponent"],
                _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_3__["ClienteFormComponent"],
                _cliente_routing__WEBPACK_IMPORTED_MODULE_5__["ClienteRouting"]
            ],
            entryComponents: [
                _cliente_form_cliente_form_component__WEBPACK_IMPORTED_MODULE_3__["ClienteFormComponent"]
            ],
            providers: []
        })
    ], ClienteModule);
    return ClienteModule;
}());



/***/ }),

/***/ "./src/app/modules/cliente/cliente.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/cliente/cliente.routing.ts ***!
  \****************************************************/
/*! exports provided: ClienteRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteRouting", function() { return ClienteRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cliente-list/cliente-list.component */ "./src/app/modules/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var clienteRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_3__["ClienteListComponent"],
                data: {
                    title: 'Clientes'
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var ClienteRouting = /** @class */ (function () {
    function ClienteRouting() {
    }
    ClienteRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(clienteRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ClienteRouting);
    return ClienteRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-cliente-cliente-module.js.map