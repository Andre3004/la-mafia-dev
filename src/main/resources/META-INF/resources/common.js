(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/text-mask-addons/dist/createNumberMask.js":
/*!****************************************************************!*\
  !*** ./node_modules/text-mask-addons/dist/createNumberMask.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(g.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(g.split(l));var o=e[0]===s&&q;o&&(e=e.toString().substr(1));var c=e.lastIndexOf(k),u=c!==-1,a=void 0,b=void 0,h=void 0;if(e.slice(T*-1)===g&&(e=e.slice(0,T*-1)),u&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,c),b=e.slice(c+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,h=n(a),(u&&M||$===!0)&&(e[c-1]!==k&&h.push(m),h.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),$===!0&&e[c-1]===k&&h.push(v)),R>0&&(h=y.split(l).concat(h)),o&&(h.length===R&&h.push(v),h=[d].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=g&&g.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "./src/app/common/mask/text-masks.ts":
/*!*******************************************!*\
  !*** ./src/app/common/mask/text-masks.ts ***!
  \*******************************************/
/*! exports provided: TextMasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMasks", function() { return TextMasks; });
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! text-mask-addons/dist/createNumberMask */ "./node_modules/text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0__);

var TextMasks = {
    /**
     *
     */
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    /**
     *
     */
    rg: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
    /**
     *
     */
    cnpj: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    /**
     *
     */
    cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    /**
     *
     */
    caixaPostal: [/\d/, /\d/, '.', /\d/, /\d/, /\d/],
    /**
     *
     */
    time: [/[0-2]/, /[0-9]/, ':', /[0-5]/, /[0-9]/],
    /**
     *
     */
    data: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    /**
     *
     */
    getNumbersOnlyMask: function (length, allowNegative) {
        if (length === void 0) { length = null; }
        if (allowNegative === void 0) { allowNegative = false; }
        return text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default()({
            integerLimit: length,
            allowNegative: allowNegative,
            prefix: '',
            includeThousandsSeparator: false,
        });
    },
    /**
     *
     */
    getDecimalNumberMask: function (intLimit, decimalLimit, allowNegative) {
        if (allowNegative === void 0) { allowNegative = false; }
        return text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default()({
            prefix: '',
            integerLimit: intLimit,
            decimalLimit: decimalLimit,
            allowDecimal: true,
            includeThousandsSeparator: false,
            decimalSymbol: '.',
            thousandsSeparatorSymbol: '.'
        });
    },
    /**
     *
     */
    getMoneyMask: function (intLimit, decimalLimit, moneySign, includeThousandsSeparator, allowNegative) {
        if (moneySign === void 0) { moneySign = '$'; }
        if (includeThousandsSeparator === void 0) { includeThousandsSeparator = false; }
        if (allowNegative === void 0) { allowNegative = false; }
        return text_mask_addons_dist_createNumberMask__WEBPACK_IMPORTED_MODULE_0___default()({
            prefix: moneySign,
            integerLimit: intLimit,
            decimalLimit: decimalLimit,
            allowDecimal: true,
            includeThousandsSeparator: includeThousandsSeparator,
            decimalSymbol: ',',
            thousandsSeparatorSymbol: '.'
        });
    }
};


/***/ })

}]);
//# sourceMappingURL=common.js.map