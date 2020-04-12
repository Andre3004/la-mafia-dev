(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-produto-produto-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/produto/produto-form/produto-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/produto/produto-form/produto-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{title}}</h2>\r\n\r\n\r\n<mat-dialog-content>\r\n    <form #qualificadorForm=\"ngForm\" fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Código</mat-label>\r\n                <input uppercase matInput [(ngModel)]=\"produto.codigo\" [disabled]=\"true\" name=\"codigo\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Produto</mat-label>\r\n                <input uppercase required [(ngModel)]=\"produto.produto\" [disabled]=\"isFranquiado\" name=\"nome\" matInput maxlength=\"144\"\r\n                    placeholder=\"Digite o nome do produto\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\" center\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Unidade comercial</mat-label>\r\n                <input uppercase  [(ngModel)]=\"produto.unidadeComercial\" name=\"unidadeComercial\" matInput\r\n                [disabled]=\"isFranquiado\"\r\n                    required\r\n                    maxlength=\"50\" placeholder=\"Digite a unidade comercial do produto\">\r\n            </mat-form-field>\r\n\r\n            <auto-complete-with-redirect fxFlex \r\n                style=\"margin-left: 30px\"\r\n                title=\"Grupo de produto\" \r\n                [classes]=\"required-class-grupo-produto\"\r\n                link=\"grupo-produto\" \r\n                key=\"codigo\" \r\n                displayKey=\"grupoProduto\"\r\n                [displayId]=\"true\" \r\n                [isDetail]=\"isFranquiado\"\r\n                [list]=\"{values: gruposProdutos}\" \r\n                [itemSelected]=\"{selected: produto.grupoProduto}\"\r\n                (onFilterChange)=\"onListGrupoProdutos($event)\" \r\n                (onSelect)=\"produto.grupoProduto = $event\"\r\n                (onDelete)=\"produto.grupoProduto = null\">\r\n            </auto-complete-with-redirect>\r\n\r\n\r\n\r\n            <mat-form-field style=\"margin-left: 30px\" *ngIf=\"produto?.grupoProduto?.exigeAno\" fxFlex\r\n                appearance=\"outline\">\r\n                <mat-label>Ano</mat-label>\r\n                <input [(ngModel)]=\"produto.ano\" [disabled]=\"isFranquiado\" name=\"ano\" matInput\r\n                    [textMask]=\"{mask: textMasks.getNumbersOnlyMask(4), guide: false}\"\r\n                    placeholder=\"Digite o ano do produto\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayoutAlign=\" center\" *ngIf=\"isFranquiado\">\r\n            <mat-form-field fxFlex appearance=\"outline\" >\r\n                <mat-label>Estoque</mat-label>\r\n                <input [value]=\"produto?.currentEstoque?.saldo || '-'\" matInput [disabled]=\"true\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Preço de custo</mat-label>\r\n                <input [(ngModel)]=\"produto.currentEstoque.precoCusto\" name=\"precoCusto\" matInput required\r\n                    [textMask]=\"{mask: textMasks.getDecimalNumberMask(5, 4), guide: false}\"\r\n                    [disabled]=\"true\"\r\n                    placeholder=\"Digite o preço de custo do produto\" >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Preço de venda</mat-label>\r\n                <input [(ngModel)]=\"produto.currentEstoque.precoVenda\" name=\"precoVenda\" matInput required\r\n                    [textMask]=\"{mask: textMasks.getDecimalNumberMask(5, 2), guide: false}\"\r\n                    placeholder=\"Digite o preço de venda do produto\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Código de barras</mat-label>\r\n                <input [disabled]=\"isFranquiado\" uppercase [(ngModel)]=\"produto.codigoBarras\" name=\"codigoBarras\" matInput\r\n                    [textMask]=\"{mask: textMasks.getNumbersOnlyMask(100), guide: false}\"\r\n                    placeholder=\"Digite o código de barras do produto\">\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Descrição</mat-label>\r\n                <textarea [disabled]=\"isFranquiado\" uppercase [(ngModel)]=\"produto.descricao\" name=\"descricao\" matInput maxlength=\"144\"\r\n                    placeholder=\"Digite a descrição do produto\"></textarea>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n\r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Fornecedor da ultima compra</mat-label>\r\n                <input value=\"{{produto?.currentEstoque?.fornecedor?.codigo}} - {{produto?.currentEstoque?.fornecedor?.razaoSocial}}\" matInput [disabled]=\"true\">\r\n            </mat-form-field>\r\n           \r\n            <mat-form-field fxFlex appearance=\"outline\">\r\n                <mat-label>Data da ultima compra</mat-label>\r\n                <input [value]=\"produto?.currentEstoque?.dataUltimaCompra | date:'dd/MM/yyyy hh:mm:ss'\" matInput [disabled]=\"true\">\r\n            </mat-form-field>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"!isFranquiado\" fxFlex style=\"background-color: #b71c1c; color: white; font-weight: bold;border-radius: 30px;\"\r\n            fxLayoutAlign=\"space-between center\">\r\n            <label *ngIf=\"!fotoImage && !produto.anexoUuid\" style=\"max-width: 400px;\"\r\n                class=\"text-truncate push-left-md\">\r\n                Selecione o arquivo...\r\n            </label>\r\n\r\n\r\n            <label *ngIf=\"produto?.nomeArquivo\" style=\"max-width: 400px;\" class=\"text-truncate push-left-md\">\r\n                {{produto?.nomeArquivo}}\r\n            </label>\r\n\r\n            <div class=\"push-right-sm\">\r\n                <button (click)=\"fotoInput.click()\" *ngIf=\"!fotoImage && !produto?.anexoUuid\" mat-icon-button\r\n                    matTooltip=\"Adicionar anexo\">\r\n                    <mat-icon>attach_file</mat-icon>\r\n                </button>\r\n\r\n                <button *ngIf=\"fotoImage || produto?.anexoUuid\" (click)=\"removeAnexo()\" matTooltip=\"Remover anexo\"\r\n                    mat-icon-button>\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n\r\n                <button *ngIf=\"produto.anexoUuid\" matTooltip=\"Download anexo\" (click)=\"downloadFile()\" mat-icon-button>\r\n                    <mat-icon>file_download</mat-icon>\r\n                </button>\r\n\r\n            </div>\r\n\r\n            <input hidden type=\"file\" #fotoInput (change)=\"setProdutoAnexo($event)\">\r\n        </div>\r\n\r\n    </form>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions fxLayoutAlign=\"space-between end\">\r\n\r\n    <div fxLayout=\"column\">\r\n        <label> <label style=\"font-weight: bold\">Data de criação:</label>\r\n            {{ produto.created ? (produto.created | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n        <label class=\"push-top-sm \"><label style=\"font-weight: bold\">Data de atualização :</label>\r\n            {{ produto.updated ? (produto.updated | date:'dd/MM/yyyy hh:mm:ss') : '-'}} </label>\r\n    </div>\r\n\r\n    <div>\r\n    <button (click)=\"onSubmit(qualificadorForm)\" mat-raised-button class=\"white-btn\"\r\n        color=\"primary\">\r\n        SALVAR\r\n    </button>\r\n    <button mat-dialog-close mat-raised-button class=\"white-btn\r\n    push-left-md bgc-grey-800\">\r\n        CANCELAR\r\n    </button>\r\n    </div>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/produto/produto-list/produto-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/produto/produto-list/produto-list.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"toolbar-default\">\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>CÓDIGO</mat-label>\r\n\t\t\t<input matInput uppercase placeholder=\"Pesquisar por codigo\" [textMask]=\"{mask: masks.getNumbersOnlyMask(8), guide: false}\" [(ngModel)]=\"filters.codigo\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<mat-form-field fxFlex=\"20\" appearance=\"outline\">\r\n\t\t\t<mat-label>Produto</mat-label>\r\n\t\t\t<input uppercase matInput placeholder=\"Pesquisar por nome\" maxlength=\"144\" [(ngModel)]=\"filters.nome\">\r\n\t\t</mat-form-field>\r\n\r\n\t\t<div fxFlex></div>\r\n\r\n\t\t<button *ngIf=\"!isFranquiado\" color=\"primary\" class=\"white-btn\" (click)=\"openForm()\" mat-raised-button>ADICIONAR\r\n\t\t\tNOVO PRODUTO</button>\r\n\t</mat-toolbar-row>\r\n\r\n\t<mat-toolbar-row fxLayoutGap=\"30px\">\r\n\t\t<button color=\"primary\" class=\"white-btn\" (click)=\"onListProdutos()\" mat-raised-button\r\n\t\t\ttype=\"submit\">CONSULTAR</button>\r\n\t\t<button color=\"accent\" class=\"white-btn\" (click)=\"clearFilters()\" mat-raised-button>LIMPAR FILTROS</button>\r\n\t</mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n\r\n<mat-card>\r\n\r\n\t<td-data-table *ngIf=\"pageRequest?.content?.length > 0\" #dataTable [data]=\"pageRequest.content\"\r\n\t\t[columns]=\"tableColumns\" [clickable]=\"true\">\r\n\r\n\t\t<ng-template tdDataTableTemplate=\"nome\" let-produto=\"row\">\r\n\t\t\t<span class=\"text-truncate\">\r\n\t\t\t\t{{ produto?.produto}}\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"situacao\" let-produto=\"row\">\r\n\t\t\t<mat-icon *ngIf=\"produto?.situacao\" class=\"tc-green-700\" matTooltip=\"Ativado\">check_circle</mat-icon>\r\n\t\t\t<mat-icon *ngIf=\"!produto?.situacao\" matTooltip=\"Desativado\" class=\"tc-red-700\">block</mat-icon>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-template fxLayoutAlign=\"end\" tdDataTableTemplate=\"opcoes\" let-produto=\"row\">\r\n\r\n\t\t\t<button matTooltip=\"Editar produto\" (click)=\"$event.stopPropagation(); openForm(produto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 edit-button-hover\">edit</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"!produto.situacao && !isFranquiado\" matTooltip=\"Ativar produto\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoProduto(produto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 active-button-hover\">check_circle_outline</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t\t<button *ngIf=\"produto.situacao && !isFranquiado\"  matTooltip=\"Excluir/Desativar produto\"\r\n\t\t\t\t(click)=\"$event.stopPropagation(); atualizarSituacaoProduto(produto)\" mat-icon-button>\r\n\t\t\t\t<mat-icon class=\"tc-grey-700 delete-button-hover\">block</mat-icon>\r\n\t\t\t</button>\r\n\r\n\t\t</ng-template>\r\n\r\n\t</td-data-table>\r\n\r\n\t<td-paging-bar #pagingBar [pageSize]=\"pageRequest.pageable.size\" [total]=\"pageRequest.totalElements\"\r\n\t\t(change)=\"page($event)\" *ngIf=\"pageRequest.content != null && pageRequest.content.length\">\r\n\t\t<span td-paging-bar-label hide-xs>Registros por página:</span>\r\n\t\t<mat-select [style.width.px]=\"50\" [(ngModel)]=\"pageRequest.pageable.size\">\r\n\t\t\t<mat-option *ngFor=\"let size of [10,50,100]\" [value]=\"size\">\r\n\t\t\t\t{{size}}\r\n\t\t\t</mat-option>\r\n\t\t</mat-select>\r\n\t\t{{pagingBar.range}} <span hide-xs>de {{pagingBar.total}}</span>\r\n\t</td-paging-bar>\r\n\r\n\t<div *ngIf=\"pageRequest?.content?.length == 0\" class=\"pad-md\" fxLayoutAlign=\"center \">\r\n\t\t<label>Nenhum registro encontrado.</label>\r\n\t</div>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/produto/produto-form/produto-form.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/produto/produto-form/produto-form.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHV0by9wcm9kdXRvLWZvcm0vcHJvZHV0by1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/produto/produto-form/produto-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/produto/produto-form/produto-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ProdutoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoFormComponent", function() { return ProdutoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");
/* harmony import */ var src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");







var ProdutoFormComponent = /** @class */ (function () {
    function ProdutoFormComponent(autenticacaoService, produtoService, grupoProdutoService, openSnackBarService, dialogRef, arquivoService, data) {
        this.autenticacaoService = autenticacaoService;
        this.produtoService = produtoService;
        this.grupoProdutoService = grupoProdutoService;
        this.openSnackBarService = openSnackBarService;
        this.dialogRef = dialogRef;
        this.arquivoService = arquivoService;
        this.data = data;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.title = "";
        this.produto = { codigo: 0, currentEstoque: {} };
        this.textMasks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_5__["TextMasks"];
        this.isFranquiado = false;
        if (data.produtoId != null) {
            this.onFindProdutoById(data.produtoId);
        }
        this.onListGrupoProdutos("");
    }
    ProdutoFormComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.data.produtoId)
                    this.title = "Alterar produto";
                else
                    this.title = "Inserir produto";
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
    ProdutoFormComponent.prototype.onFindProdutoById = function (produtoId) {
        var _this = this;
        this.produtoService.findProdutoById(produtoId).subscribe(function (produto) {
            console.log(produto);
            _this.produto = produto;
        }, function (err) { return _this.openSnackBarService.openError(err.message); });
    };
    ProdutoFormComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.invalid) {
            this.openSnackBarService.openError("Todos os campos com * devem ser preenchidos.");
            return;
        }
        var anexoOld = null;
        if (!this.produto.grupoProduto || (this.produto.grupoProduto && !this.produto.grupoProduto.codigo)) {
            this.openSnackBarService.openError("O campo grupo de produto deve ser selecionado.");
            return;
        }
        if (this.produto.anexo && typeof (this.produto.anexo) == 'string') {
            anexoOld = this.produto.anexo;
            this.produto.anexo = null;
        }
        if (!this.produto.codigo) {
            this.produtoService.insertProduto(this.produto).subscribe(function (produto) {
                _this.openSnackBarService.openSuccess("Produto salvo com sucesso.");
                _this.dialogRef.close(_this.produto);
            }, function (err) {
                if (anexoOld)
                    _this.produto.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
        else {
            this.produtoService.updateProduto(this.produto).subscribe(function (produto) {
                _this.openSnackBarService.openSuccess("Produto atualizado com sucesso.");
                _this.dialogRef.close(_this.produto);
            }, function (err) {
                if (anexoOld)
                    _this.produto.anexo = anexoOld;
                _this.openSnackBarService.openError(err.message);
            });
        }
    };
    ProdutoFormComponent.prototype.onListGrupoProdutos = function (filter) {
        var _this = this;
        this.grupoProdutoService.listGrupoProdutosByFilters(filter ? filter : "", isNaN(filter) || filter == null || filter == "" ? null : parseInt(filter.substring(0, 9)), null).subscribe(function (grupoProdutoPage) {
            _this.gruposProdutos = grupoProdutoPage.content.filter(function (c) { return c.situacao; });
        });
    };
    ProdutoFormComponent.prototype.displayFn = function (grupoProduto) {
        return grupoProduto ? grupoProduto.codigo + " - " + grupoProduto.grupoProduto : undefined;
    };
    /*-------------------------------------------------------------------
    *                           FOTO
    *-------------------------------------------------------------------*/
    ProdutoFormComponent.prototype.removeAnexo = function () {
        this.produto.anexo = null;
        this.produto.anexoUuid = null;
        this.fotoImage = null;
        this.produto.nomeArquivo = null;
    };
    ProdutoFormComponent.prototype.downloadFile = function () {
        var _this = this;
        this.arquivoService.downloadArquivoByUuid(this.produto.anexoUuid).subscribe(function (result) {
            window.location.href = result;
        }, function (exception) { return _this.openSnackBarService.openError(exception.message); });
    };
    ProdutoFormComponent.prototype.setProdutoAnexo = function (event) {
        var _this = this;
        if (event.target.files[0]) {
            if (event.target.files[0].size <= 10000000) //10MB
             {
                this.produto.anexo = event.target;
                this.produto.nomeArquivo = event.target.files[0].name;
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.fotoImage = event.target.result;
                };
                this.produto.anexoUuid = null;
                reader.readAsDataURL(event.target.files[0]);
            }
            else {
                this.openSnackBarService.openSuccess("O tamanho da foto não pode ser maior que 10MB");
            }
        }
        else {
            this.produto.anexo = null;
        }
    };
    ProdutoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-form',
            template: __webpack_require__(/*! raw-loader!./produto-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/produto/produto-form/produto-form.component.html"),
            styles: [__webpack_require__(/*! ./produto-form.component.scss */ "./src/app/modules/produto/produto-form/produto-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["GrupoProdutoService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["OpenSnackBarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_3__["ArquivoService"], Object])
    ], ProdutoFormComponent);
    return ProdutoFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/produto/produto-list/produto-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/produto/produto-list/produto-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHV0by9wcm9kdXRvLWxpc3QvcHJvZHV0by1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/produto/produto-list/produto-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/produto/produto-list/produto-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ProdutoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoListComponent", function() { return ProdutoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../produto-form/produto-form.component */ "./src/app/modules/produto/produto-form/produto-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/pagination/pagination.service */ "./src/app/common/pagination/pagination.service.ts");
/* harmony import */ var src_generated_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/generated/services */ "./src/generated/services.ts");
/* harmony import */ var src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common/open-snackbar/open-snackbar.service */ "./src/app/common/open-snackbar/open-snackbar.service.ts");
/* harmony import */ var src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/mask/text-masks */ "./src/app/common/mask/text-masks.ts");
/* harmony import */ var src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/autenticacao/autenticacao.service */ "./src/app/common/autenticacao/autenticacao.service.ts");










var ProdutoListComponent = /** @class */ (function () {
    /**
     *
     * @param dialog
     * @param _dialogService
     * @param paginationService
     * @param openSnackBarService
     * @param produtoService
     */
    function ProdutoListComponent(autenticacaoService, dialog, _dialogService, paginationService, openSnackBarService, produtoService, franquiaService) {
        this.autenticacaoService = autenticacaoService;
        this.dialog = dialog;
        this._dialogService = _dialogService;
        this.paginationService = paginationService;
        this.openSnackBarService = openSnackBarService;
        this.produtoService = produtoService;
        this.franquiaService = franquiaService;
        /*-------------------------------------------------------------------
          *                           ATTRIBUTES
          *-------------------------------------------------------------------*/
        this.pageRequest = [];
        this.filters = {
            nome: '',
            codigo: null
        };
        /**
           * Colunas da Grid
           */
        this.tableColumns = [
            { name: 'codigo', label: 'CÓDIGO', sortable: false },
            { name: 'nome', label: 'PRODUTO', sortable: false },
            { name: 'situacao', label: 'SITUAÇÃO', sortable: false },
            { name: 'opcoes', label: 'OPÇÕES', tooltip: 'OPÇÕES', sortable: false, width: 150 }
        ];
        this.masks = src_app_common_mask_text_masks__WEBPACK_IMPORTED_MODULE_8__["TextMasks"];
        this.isFranquiado = false;
        this.pageRequest = paginationService.pageRequest('nome', 'ASC', 10);
    }
    ProdutoListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.onListProdutos();
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
    ProdutoListComponent.prototype.openForm = function (produto) {
        var _this = this;
        var dialogRef = this.dialog.open(_produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoFormComponent"], {
            width: '800px',
            height: 'auto',
            data: { produtoId: produto ? produto.codigo : null }
        });
        dialogRef.afterClosed().subscribe(function (produtoSaved) {
            if (produtoSaved)
                _this.onListProdutos();
        });
    };
    ProdutoListComponent.prototype.atualizarSituacaoProduto = function (produto) {
        var _this = this;
        if (produto.situacao) {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja excluir este produto ?",
                title: "Excluir produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.produtoService.deleteProduto(produto.codigo).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Produto excluído com sucesso.');
                        _this.onListProdutos();
                    }, function (err) {
                        _this._dialogService.openConfirm({
                            message: "Não foi possível excluir este produto pois o mesmo está relacionado a outro registro. Deseja desativar ?",
                            title: "Desativar produto",
                            cancelButton: 'CANCELAR',
                            acceptButton: 'CONFIRMAR',
                            width: '500px'
                        }).afterClosed().subscribe(function (accept) {
                            if (accept) {
                                _this.produtoService.updateSituacaoProduto(produto.codigo, !produto.situacao).subscribe(function (result) {
                                    _this.openSnackBarService.openSuccess('Produto desativado com sucesso.');
                                    _this.onListProdutos();
                                }, function (err) { return _this.openSnackBarService.openError(err.message); });
                            }
                        });
                    });
                }
            });
        }
        else {
            this._dialogService.openConfirm({
                message: "Tem certeza que deseja ativar esta produto ?",
                title: "Ativar produto",
                cancelButton: 'CANCELAR',
                acceptButton: 'CONFIRMAR',
                width: '500px'
            }).afterClosed().subscribe(function (accept) {
                if (accept) {
                    _this.produtoService.updateSituacaoProduto(produto.codigo, !produto.situacao).subscribe(function (result) {
                        _this.openSnackBarService.openSuccess('Produto ativado com sucesso.');
                        _this.onListProdutos();
                    }, function (err) { return _this.openSnackBarService.openError(err.message); });
                }
            });
        }
    };
    /*-------------------------------------------------------------------
    *                           Listagem e filtros
    *-------------------------------------------------------------------*/
    /**
     * Método responsável pela listagem dos avisos utilizando os filtros informados pelo produto
     */
    ProdutoListComponent.prototype.onListProdutos = function (filters) {
        var _this = this;
        if (filters === void 0) { filters = true; }
        if (filters) {
            this.pageRequest.pageable.page = 0;
        }
        this.produtoService.listProdutosByFilters(this.filters.nome, this.filters.codigo, this.pageRequest.pageable).subscribe(function (result) {
            _this.pageRequest = _this.paginationService.fixPageRequest(result, _this.pageRequest);
        }), function (error) { _this.openSnackBarService.openError(error.message); };
    };
    ProdutoListComponent.prototype.clearFilters = function () {
        this.filters = {
            nome: '',
            codigo: null
        };
        this.onListProdutos();
    };
    ProdutoListComponent.prototype.page = function (pagingEvent) {
        this.pageRequest.pageable.page = pagingEvent.page - 1;
        this.pageRequest.pageable.size = pagingEvent.pageSize;
        this.onListProdutos();
    };
    ProdutoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-produto-list',
            template: __webpack_require__(/*! raw-loader!./produto-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/produto/produto-list/produto-list.component.html"),
            styles: [__webpack_require__(/*! ./produto-list.component.scss */ "./src/app/modules/produto/produto-list/produto-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_common_autenticacao_autenticacao_service__WEBPACK_IMPORTED_MODULE_9__["AutenticacaoService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _covalent_core__WEBPACK_IMPORTED_MODULE_4__["TdDialogService"],
            src_app_common_pagination_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"],
            src_app_common_open_snackbar_open_snackbar_service__WEBPACK_IMPORTED_MODULE_7__["OpenSnackBarService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["ProdutoService"],
            src_generated_services__WEBPACK_IMPORTED_MODULE_6__["FranquiaService"]])
    ], ProdutoListComponent);
    return ProdutoListComponent;
}());



/***/ }),

/***/ "./src/app/modules/produto/produto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/produto/produto.module.ts ***!
  \***************************************************/
/*! exports provided: ProdutoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoModule", function() { return ProdutoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produto-list/produto-list.component */ "./src/app/modules/produto/produto-list/produto-list.component.ts");
/* harmony import */ var _produto_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto.routing */ "./src/app/modules/produto/produto.routing.ts");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produto-form/produto-form.component */ "./src/app/modules/produto/produto-form/produto-form.component.ts");
/* harmony import */ var src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/shared-common.module */ "./src/app/common/shared-common.module.ts");






var ProdutoModule = /** @class */ (function () {
    function ProdutoModule() {
    }
    ProdutoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoListComponent"],
                _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"],
            ],
            imports: [
                _produto_routing__WEBPACK_IMPORTED_MODULE_3__["ProdutoRouting"],
                src_app_common_shared_common_module__WEBPACK_IMPORTED_MODULE_5__["SharedCommonModule"]
            ],
            exports: [
                _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoListComponent"],
                _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"],
                _produto_routing__WEBPACK_IMPORTED_MODULE_3__["ProdutoRouting"]
            ],
            entryComponents: [
                _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_4__["ProdutoFormComponent"]
            ],
            providers: []
        })
    ], ProdutoModule);
    return ProdutoModule;
}());



/***/ }),

/***/ "./src/app/modules/produto/produto.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/produto/produto.routing.ts ***!
  \****************************************************/
/*! exports provided: ProdutoRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoRouting", function() { return ProdutoRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./produto-list/produto-list.component */ "./src/app/modules/produto/produto-list/produto-list.component.ts");
/* harmony import */ var src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/autenticacao/auth-guard.service */ "./src/app/common/autenticacao/auth-guard.service.ts");





var produtoRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _produto_list_produto_list_component__WEBPACK_IMPORTED_MODULE_3__["ProdutoListComponent"],
                data: {
                    title: 'Produtos',
                    ambos: true
                },
                canActivate: [src_app_common_autenticacao_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ],
    },
];
var ProdutoRouting = /** @class */ (function () {
    function ProdutoRouting() {
    }
    ProdutoRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(produtoRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProdutoRouting);
    return ProdutoRouting;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-produto-produto-module.js.map