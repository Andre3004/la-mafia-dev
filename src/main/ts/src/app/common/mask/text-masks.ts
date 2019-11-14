import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export const TextMasks = {

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
  data : [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],

  /**
   * 
   */
  getNumbersOnlyMask( length: number = null, allowNegative: boolean = false ): any[]
  {
    return createNumberMask({
      integerLimit: length,
      allowNegative: allowNegative,
      prefix: '',
      includeThousandsSeparator: false,
    })
  },

  /**
   * 
   */
  getDecimalNumberMask( intLimit: number, decimalLimit: number, allowNegative: boolean = false ): any[]
  {
    return createNumberMask({
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
  getMoneyMask( intLimit: number, decimalLimit: number, moneySign: string = '$', includeThousandsSeparator: boolean = false, allowNegative: boolean = false ): any[]
  {
    return createNumberMask({
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
