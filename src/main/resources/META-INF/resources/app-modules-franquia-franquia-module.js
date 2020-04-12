(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-franquia-franquia-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/franquia/franquia-form/franquia-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/franquia/franquia-form/franquia-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n  <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Código</mat-label>\r\n        <input uppercase matInput [(ngModel)]=\"franquia.codigo\" [disabled]=\"true\" name=\"codigo\">\r\n      </mat-form-field>\r\n\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Telefone</mat-label>\r\n        <input uppercase maxlength=\"50\" [textMask]=\"{mask: maskTelefone, guide:false}\" matInput name=\"telefone\"\r\n          [(ngModel)]=\"franquia.telefone\" placeholder=\"Digite o telefone\">\r\n      </mat-form-field>\r\n\r\n\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Franquia</mat-label>\r\n        <input uppercase required [(ngModel)]=\"franquia.franquia\" name=\"franquia\" matInput maxlength=\"144\"\r\n          placeholder=\"Digite o nome da franquia\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CNPJ</mat-label>\r\n        <input uppercase required [textMask]=\"{mask: maskCnpj, guide: false}\" [(ngModel)]=\"franquia.cnpj\" name=\"cnpj\"\r\n          matInput maxlength=\"144\" placeholder=\"Digite seu cnpj\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Endereço</mat-label>\r\n        <input uppercase required maxlength=\"144\" matInput name=\"endereco\" [(ngModel)]=\"franquia.endereco\"\r\n          placeholder=\"Digite seu endereco\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Número</mat-label>\r\n        <input uppercase [textMask]=\"{mask: masks.getNumbersOnlyMask(5), guide: false}\" matInput name=\"numero\"\r\n          [(ngModel)]=\"franquia.numero\" placeholder=\"Digite o número\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Complemento</mat-label>\r\n        <input uppercase maxlength=\"144\" matInput name=\"complemento\" [(ngModel)]=\"franquia.complemento\"\r\n          placeholder=\"Digite o complemento\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>Bairro</mat-label>\r\n        <input uppercase maxlength=\"144\" matInput name=\"bairro\" [(ngModel)]=\"franquia.bairro\"\r\n          placeholder=\"Digite o bairro\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex appearance=\"outline\">\r\n        <mat-label>CEP</mat-label>\r\n        <input uppercase [textMask]=\"{mask: masks.cep, guide: false}\" matInput name=\"cep\" [(ngModel)]=\"franquia.cep\"\r\n          placeholder=\"Digite o cep\">\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\" center\">\r\n\r\n\r\n      <div *ngIf=\"franquia.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">País</label>\r\n        <label>{{franquia?.cidade?.estado?.pais?.pais}}</label>\r\n      </div>\r\n\r\n      <div *ngIf=\"franquia.cidade\" fxLayoutAlign=\" start\" fxLayout=\"column\" class=\"push-left-md push-right-md\">\r\n        <label style=\"margin-bottom: 5px;font-weight: bold;\">Estado</label>\r\n        <label>{{franquia?.cidade?.estado?.estado}}</label>\r\n      </div>\r\n      \r\n      <auto-complete-with-redirect\r\n          fxFlex\r\n          title=\"Cidade\"\r\n          link=\"cidade\"\r\n          key=\"codigo\"\r\n          displayKey=\"cidade\"\r\n          [displayId]=\"true\"\r\n          [classes]=\"'required-class-cidade'\"\r\n          [list]=\"{values: cidades}\"\r\n          [itemSelected]=\"{selected: franquia.cidade}\"\r\n          (onFilterChange)=\"onListCidades($event)\"\r\n          (onSelect)=\"franquia.cidade = $event\"\r\n          (onDelete)=\"franquia.cidade = null\"\r\n      >\r\n      </auto-complete-with-redirect>\r\n\r\n    </div>\r\n\r\n    <div>\r\n\r\n\r\n\r\n      <div fxFlex style=\"background-color: #b71c1c; color: white; font-weight: bold;border-radius: 30px;\"\r\n        fxLayoutAlign=\"space-between center\">\r\n        <label *ngIf=\"!fotoImage && !franquia.anexoUuid\" style=\"max-width: 400px;\" class=\"text-truncate push-left-md\">\r\n          Selecione o arquivo...\r\n        </label>\r\n\r\n\r\n        <label *ngIf=\"franquia?.nomeArquivo\" style=\"max-width: 400px;\" class=\"text-truncate push-left-md\">\r\n          {{franquia?.nomeArquivo}}\r\n        </label>\r\n\r\n        <div class=\"push-right-sm\">\r\n          <button (click)=\"fotoInput.click()\" *ngIf=\"!fotoImage && !franquia?.anexoUuid\" mat-icon-button\r\n            matTooltip=\"Adicionar anexo\">\r\n            <mat-icon>attach_file</mat-icon>\r\n          </button>\r\n\r\n          <button *ngIf=\"fotoImage || franquia?.anexoUuid\" (click)=\"removeAnexo()\" matTooltip=\"Remover anexo\"\r\n            mat-icon-button>\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n\r\n          <button *ngIf=\"franquia.anexoUuid\" matTooltip=\"Download anexo\" (click)=\"downloadFile()\" mat-icon-button>\r\n            <mat-icon>file_download</mat-icon>\r\n          </button>\r\n\r\n        </div>\r\n\r\n        <input uppercase hidden type=\"file\" #fotoInput (change)=\"setFranquiaAnexo($event)\">\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n  <div fxLayout=\"column\">\r\n    <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n      {{ franquia.created ? (franquia.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n      {{ franquia.updated ? (franquia.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n  </div>\r\n\r\n  <div>\r\n\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n      color=\"primary\">\r\n      SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n      CANCELAR\r\n    </button>\r\n  </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/franquia/franquia-list/franquia-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/franquia/franquia-list/franquia-list.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Franquia</mat-label>\r\n\t\t\t<input uppercase matInput placeholder=\"Pesquisar por nome\" maxlength=\"144\" [(ngModel)]=\"filters.nome\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>CNPJ</mat-label>\r\n\t\t\t<input uppercase matInput [textMask]=\"{mask: maskCnpj, guide: false}\" placeholder=\"Pesquisar por cnpj\" maxlength=\"144\" [(ngModel)]=\"filters.cnpj\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVA FRANQUIA</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListFranquias()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\" >\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"nome\" let-franquia=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ franquia?.franquia}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"cidade\" let-franquia=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ franquia?.cidade?.cidade}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"cnpj\" let-franquia=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ franquia?.cnpj}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-franquia=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"franquia?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!franquia?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-franquia=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar franquia\" stopPropagation (click)=\"$event.stopPropagation(); openForm(franquia)\"\r\n\t\t\t\tmat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!franquia.situacao\" matTooltip=\"Ativar franquia\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoFranquia(franquia)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"franquia.situacao\" matTooltip=\"Excluir/Desativar franquia\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoFranquia(franquia)\" stopPropagation mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/franquia/franquia-form/franquia-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/franquia/franquia-form/franquia-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhbnF1aWEvZnJhbnF1aWEtZm9ybS9mcmFucXVpYS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/franquia/franquia-form/franquia-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/franquia/franquia-form/franquia-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: FranquiaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranquiaFormComponent", function() { return FranquiaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");






var FranquiaFormComponent = /** @class */ (function () {
    function FranquiaFormComponent(franquiaService, openSnackBarService, dialogRef, arquivoService, cidadeService, data) {
        this.franquiaService = franquiaService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.cidadeService = cidadeService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.franquia = { codigo: 0 };
        this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskTelefone = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        if (data.franquiaId != null) {
            this.onFindFranquiaById(data.franquiaId);
        }
    }
    FranquiaFormComponent.prototype.ngOnInit = function () {
        if (this.data.franquiaId)
            this.title = "Alterar franquia";
        else
            this.title = "Inserir franquia";
        this.onListCidades("");
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    FranquiaFormComponent.prototype.onFindFranquiaById = function (franquiaId) {
        var _this = this;
        this.franquiaService.findFranquiaById(franquiaId).subscribe(function (franquia) {
            _this.franquia = franquia;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    FranquiaFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        if (this.franquia.cnpj && !this.validarCNPJ(this.franquia.cnpj)) {
            this.openSnackBarService.openError('O campo CNPJ está inválido.');
            return;
        }
        if (!this.franquia.cidade) {
            this.openSnackBarService.openError('O campo cidade deve ser preenchido.');
            return;
        }
        this.franquia.estado = this.franquia.cidade.estado;
        this.franquia.pais = this.franquia.cidade.estado.pais;
        if (this.franquia.telefone) {
            var numb = this.franquia.telefone.match(/\d/g);
            var numbString = numb.join("").toString();
            if (numbString.length != 11) {
                this.openSnackBarService.openError('O campo telefone está inválido.');
                return;
            }
        }
        var anexoOld = null;
        if (this.franquia.anexo && typeof (this.franquia.anexo) == 'string') {
            anexoOld = this.franquia.anexo;
            this.franquia.anexo = null;
        }
        if (!this.franquia.codigo) {
            this.franquiaService.insertFranquia(this.franquia).subscribe(function (franquia) {
                _this.openSnackBarService.openSuccess("Franquia salvo com sucesso.");
                _this.dialogRef.close(_this.franquia);
            }, function (err) {
                if (anexoOld)
                    _this.franquia.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.franquiaService.updateFranquia(this.franquia).subscribe(function (franquia) {
                _this.openSnackBarService.openSuccess("Franquia atualizado com sucesso.");
                _this.dialogRef.close(_this.franquia);
            }, function (err) {
                if (anexoOld)
                    _this.franquia.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           FOTO
    *-------------------------------------------------------------------*/
    FranquiaFormComponent.prototype.removeAnexo = function () {
        this.franquia.anexo = null;
        this.franquia.anexoUuid = null;
        this.fotoImage = null;
        this.franquia.nomeArquivo = null;
    };
    FranquiaFormComponent.prototype.downloadFile = function () {
        var _this = this;
        this.arquivoService.downloadArquivoByUuid(this.franquia.anexoUuid).subscribe(function (result) {
            window.location.href = result;
        }, function (exception) { return _this.openSnackBarService.openError(exception.message); });
    };
    FranquiaFormComponent.prototype.setFranquiaAnexo = function (event) {
        var _this = this;
        if (event.target.files[0]) {
            if (event.target.files[0].size <= 10000000) //10MB
             {
                this.franquia.anexo = event.target;
                this.franquia.nomeArquivo = event.target.files[0].name;
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.fotoImage = event.target.result;
                };
                this.franquia.anexoUuid = null;
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
            }
        }
        else {
            this.franquia.anexo = null;
        }
    };
    /**
  * Método para validar o cnpj
  * @param cnpj
  */
    FranquiaFormComponent.prototype.validarCNPJ = function (cnpj) {
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
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (var i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    };
    FranquiaFormComponent.prototype.onListCidades = function (filter) {
        var _this = this;
        this.cidadeService.listCidadesByFilters(filter ? filter : "", null).subscribe(function (page) {
            _this.cidades = page.content.filter(function (c) { return c.situacao; });
        });
    };
    FranquiaFormComponent.prototype.displayFnCidade = function (cidade) {
        return cidade ? cidade.cidade : undefined;
    };
    FranquiaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-franquia-form',
            template: __webpack_require__(/*! raw-loader!./franquia-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/franquia/franquia-form/franquia-form.component.html"),
            styles: [__webpack_require__(/*! ./franquia-form.component.scss */ "./src/app/modules/franquia/franquia-form/franquia-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_generated_services__WEBPACK_IMPORTED_MODULE_3__["FranquiaService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["CidadeService"], Object])
    ], FranquiaFormComponent);
    return FranquiaFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/franquia/franquia-list/franquia-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/franquia/franquia-list/franquia-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZnJhbnF1aWEvZnJhbnF1aWEtbGlzdC9mcmFucXVpYS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/franquia/franquia-list/franquia-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/franquia/franquia-list/franquia-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: FranquiaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranquiaListComponent", function() { return FranquiaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../franquia-form/franquia-form.component */ "./src/app/modules/franquia/franquia-form/franquia-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");








var FranquiaListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param franquiaService
     */
    function FranquiaListComponent(dialog, _dialogService, paginationService, openSnackBarService, franquiaService) {
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.franquiaService = franquiaService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            nome: '',
            cnpj: '',
        };
        this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'nome', label: 'FRANQUIA', sortable: false },
            { name: 'cnpj', label: 'CNPJ', sortable: false },
            { name: 'cidade', label: 'CIDADE', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }
    FranquiaListComponent.prototype.ngOnInit = function () {
        this.onListFranquias();
    };
    /*-------------------------------------------------------------------
    *                           BEHAVIORS
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo franquia
     */
    FranquiaListComponent.prototype.onListFranquias = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.franquiaService.listFranquiasByFilters(this.filters.nome, this.filters.cnpj, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    FranquiaListComponent.prototype.clearFilters = function () {
        this.filters = {
            nome: '',
            cnpj: '',
        };
        this.onListFranquias();
    };
    FranquiaListComponent.prototype.openForm = function (franquia) {
        var _this = this;
        var dialogRef = this.dialog.open(_franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_2__["FranquiaFormComponent"], {
            width: '900px',
            height: 'auto',
            data: { franquiaId: franquia ? franquia.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (franquiaSaved) {
            if (franquiaSaved)
                _this.onListFranquias();
        });
    };
    FranquiaListComponent.prototype.atualizarSituacaoFranquia = function (franquia) {
        var _this = this;
        if (franquia.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir esta franquia ?",
                title: "Excluir franquia",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.franquiaService.deleteFranquia(franquia.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Franquia excluída com sucesso.');
                        _this.onListFranquias();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir esta franquia pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar franquia",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.franquiaService.updateSituacaoFranquia(franquia.codigo, !franquia.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Franquia desativada com sucesso.');
                                    _this.onListFranquias();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta franquia ?",
                title: "Ativar franquia",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.franquiaService.updateSituacaoFranquia(franquia.codigo, !franquia.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Franquia ativado com sucesso.');
                        _this.onListFranquias();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    FranquiaListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListFranquias();
    };
    FranquiaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-franquia-list',
            template: __webpack_require__(/*! raw-loader!./franquia-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/franquia/franquia-list/franquia-list.component.html"),
            styles: [__webpack_require__(/*! ./franquia-list.component.scss */ "./src/app/modules/franquia/franquia-list/franquia-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["FranquiaService"]])
    ], FranquiaListComponent);
    return FranquiaListComponent;
}());



/***/ }),

/***/ "./src/app/modules/franquia/franquia.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/franquia/franquia.module.ts ***!
  \*****************************************************/
/*! exports provided: FranquiaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranquiaModule", function() { return FranquiaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _franquia_list_franquia_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./franquia-list/franquia-list.component */ "./src/app/modules/franquia/franquia-list/franquia-list.component.ts");
/* harmony import */ var _franquia_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./franquia.routing */ "./src/app/modules/franquia/franquia.routing.ts");
/* harmony import */ var _franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./franquia-form/franquia-form.component */ "./src/app/modules/franquia/franquia-form/franquia-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var FranquiaModule = /** @class */ (function () {
    function FranquiaModule() {
    }
    FranquiaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _franquia_list_franquia_list_component__WEBPACK_IMPORTED_MODULE_2__["FranquiaListComponent"],
                _franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_4__["FranquiaFormComponent"],
            ],
            imports: [
                _franquia_routing__WEBPACK_IMPORTED_MODULE_3__["FranquiaRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _franquia_list_franquia_list_component__WEBPACK_IMPORTED_MODULE_2__["FranquiaListComponent"],
                _franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_4__["FranquiaFormComponent"],
                _franquia_routing__WEBPACK_IMPORTED_MODULE_3__["FranquiaRouting"]
            ],
            entryComponents: [
                _franquia_form_franquia_form_component__WEBPACK_IMPORTED_MODULE_4__["FranquiaFormComponent"]
            ],
            providers: []
        })
    ], FranquiaModule);
    return FranquiaModule;
}());



/***/ }),

/***/ "./src/app/modules/franquia/franquia.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/franquia/franquia.routing.ts ***!
  \******************************************************/
/*! exports provided: FranquiaRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FranquiaRouting", function() { return FranquiaRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _franquia_list_franquia_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./franquia-list/franquia-list.component */ "./src/app/modules/franquia/franquia-list/franquia-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var franquiaRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _franquia_list_franquia_list_component__WEBPACK_IMPORTED_MODULE_3__["FranquiaListComponent"],
                data: {
                    title: 'Franquias',
                    onlyFranquiador: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    },
];
var FranquiaRouting = /** @class */ (function () {
    function FranquiaRouting() {
    }
    FranquiaRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(franquiaRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], FranquiaRouting);
    return FranquiaRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-franquia-franquia-module.js.map