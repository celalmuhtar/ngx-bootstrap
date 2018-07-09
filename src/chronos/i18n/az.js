// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return

import { LocaleData } from '../locale/locale.class';

//! moment.js locale configuration
//! locale : Azerbaijan [az]
//! authors : Celal Muhtar : https://github.com/celalmuhtar

let suffixes: { [key: string]: string } = {
  1: '-inci',
  5: '-inci',
  8: '-inci',
  70: '-inci',
  80: '-inci',
  2: '-nci',
  7: '-nci',
  20: '-nci',
  50: '-nci',
  3: '-üncü',
  4: '-üncü',
  100: '-üncü',
  6: '-ncı',
  9: '-uncu',
  10: '-uncu',
  30: '-uncu',
  60: '-ıncı',
  90: '-ıncı'
};

export const azLocale: LocaleData = {
  abbr: 'az',
    months : 'Yanvar_Fevral_Mart_Aprel_May_İyun_İyul_Avqust_Sentyabr_Oktyabr_Noyabr_Dekabr'.split('_'),
    monthsShort : 'Yan_Fev_Mar_Apr_May_İyn_İyl_Avq_Sen_Okt_Noy_Dek'.split('_'),
    weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
  longDateFormat: {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD.MM.YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd, D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay : '[bugün saat] LT',
    nextDay : '[sabah saat] LT',
    nextWeek : '[gələn həftə] dddd [saat] LT',
    lastDay : '[dünən] LT',
    lastWeek : '[keçən həftə] dddd [saat] LT',
    sameElse : 'L'
  },
  relativeTime: {
    future : '%s sonra',
    past : '%s əvvəl',
    s : 'birneçə saniyə',
    ss : '%d saniyə',
    m : 'bir dəqiqə',
    mm : '%d dəqiqə',
    h : 'bir saat',
    hh : '%d saat',
    d : 'bir gün',
    dd : '%d gün',
    M : 'bir ay',
    MM : '%d ay',
    y : 'bir il',
    yy : '%d il'
  },
  dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
  ordinal(_num: number): string {
    const num = Number(_num);
    if (num === 0) {  // special case for zero
      return num + '\'ıncı';
    }
    let a = num % 10,
      b = num % 100 - a,
      c = num >= 100 ? 100 : null;
    return num + (suffixes[a] || suffixes[b] || suffixes[c]);
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 7  // The week that contains Jan 1st is the first week of the year.
  }
};
