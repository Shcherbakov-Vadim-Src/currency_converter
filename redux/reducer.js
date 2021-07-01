import { CURRENCY_CHANGE, SUMM_CHANGE, LEFT_CHANGE, RIGHT_CHANGE, FETCH_START, BOTTOM_CONVERTION } from "./types";

const initialState = {
    initialRates: [
        { AED: 4.384179 },       { AFN: 94.896759 },    { ALL: 122.792678 },
        { AMD: 596.065442 },     { ANG: 2.142855 },     { AOA: 773.459717 },
        { ARS: 114.0019 },       { AUD: 1.573231 },     { AWG: 2.149095 }, { AZN: 2.033876 },       { BAM: 1.954438 },     { BBD: 2.410354 },
        { BDT: 101.169502 },     { BGN: 1.955784 },     { BHD: 0.4499 },  { BIF: 2369.315844 },    { BMD: 1.19361 },      { BND: 1.601873 },
        { BOB: 8.242799 },       { BRL: 5.889874 },     { BSD: 1.193785 }, { BTC: 0.000037590758 }, { BTN: 88.571368 },    { BWP: 12.919787 },
        { BYN: 3.015353 },       { BYR: 23394.755939 }, { BZD: 2.406166 },  { CAD: 1.467429 },       { CDF: 2384.240648 },  { CHF: 1.094485 },
        { CLF: 0.031716 },       { CLP: 875.159519 },   { CNY: 7.70619 },  { COP: 4470.24848 },     { CRC: 739.694932 },   { CUC: 1.19361 },
        { CUP: 31.630665 },      { CVE: 110.779414 },   { CZK: 25.479098 },   { DJF: 212.128839 },     { DKK: 7.436441 },     { DOP: 68.215281 },
        { DZD: 159.941 },        { EGP: 18.702 },       { ERN: 17.906536 }, { ETB: 52.077672 },      { EUR: 1 },            { FJD: 2.461523 },
        { FKP: 0.846082 },       { GBP: 0.85964 },      { GEL: 3.742015 }, { GGP: 0.846082 },       { GHS: 6.971148 },     { GIP: 0.846082 },
        { GMD: 61.053617 },      { GNF: 11715.282544 }, { GTQ: 9.245687 }, { GYD: 249.654306 },     { HKD: 9.264002 },     { HNL: 28.623231 },
        { HRK: 7.498143 },       { HTG: 110.717228 },   { HUF: 351.073529 },  { IDR: 17256.61653 },    { ILS: 3.881358 },     { IMP: 0.846082 },
        { INR: 88.595749 },      { IQD: 1744.46101 },   { IRR: 50256.94934 },  { ISK: 147.30387 },      { JEP: 0.846082 },     { JMD: 178.971049 },
        { JOD: 0.846317 },       { JPY: 132.222195 },   { KES: 128.675698 },  { KGS: 101.051624 },     { KHR: 4871.122816 },  { KMF: 492.368655 },
        { KPW: 1074.249415 },    { KRW: 1345.592816 },  { KWD: 0.359265 },  { KYD: 0.9948 },         { KZT: 509.117443 },   { LAK: 11330.940117 },
        { LBP: 1817.999995 },    { LKR: 237.554221 },   { LRD: 204.589259 },  { LSL: 16.878101 },      { LTL: 3.52442 },      { LVL: 0.722003 },
        { LYD: 5.375739 },       { MAD: 10.633279 },    { MDL: 21.522973 }, { MGA: 4550.642598 },    { MKD: 61.581146 },    { MMK: 1964.896004 }, 
        { MNT: 3397.011991 },    { MOP: 9.543184 },     { MRO: 426.118564 }, { MUR: 48.87 }, {MVR: 18.386059}, {MWK: 954.888409}, {MXN: 23.652039}, 
        { MYR: 4.960689}, {MZN: 75.525719}, {NAD: 16.878096}, {NGN: 491.174962}, {NIO: 42.075202}, {NOK: 10.140212}, {NPR: 141.714269}, {NZD: 1.689113}, 
        { OMR: 0.45952}, {PAB: 1.193785}, {PEN: 4.749976}, {PGK: 4.180624}, {PHP: 57.944}, {PKR: 188.117356}, {PLN: 4.515193}, {PYG: 8089.644124}, 
        { QAR: 4.34598}, {RON: 4.928778}, {RSD: 117.520326}, {RUB: 86.191817}, {RWF: 1173.915432}, {SAR: 4.476}, {SBD: 9.57573}, {SCR: 17.685}, 
        { SDG: 532.350464}, {SEK: 10.133021}, {SGD: 1.602665}, {SHP: 0.846082}, {SLL: 12240.470922}, {SOS: 698.262252}, {SRD: 24.942276}, 
        { STD: 24359.784999}, {SYP: 1501.372423}, {SZL: 16.878087}, {THB: 37.979522}, {TJS: 13.614505}, {TMT: 4.189571}, {TND: 3.292578}, {TOP: 2.677805}, 
        { TRY: 10.46307}, {TTD: 8.102867}, {TWD: 33.278806}, {TZS: 2767.981983}, {UAH: 32.631962}, {UGX: 4243.64243}, {USD: 1.19361}, {UYU: 51.85051}, {UZS: 12609.296407}, {VEF: 255229891021.59518}, {VND: 27482.870179}, {VUV: 129.436028}, {WST: 3.010252}, {XAF: 655.495695}, {XAG: 0.045703}, {XAU: 0.00067}, {XCD: 3.225791}, {XDR: 0.835412}, {XOF: 654.699382}, {XPF: 119.779198}, {YER: 298.764876}, {ZAR: 16.893151}, {ZMK: 10743.926593}, {ZMW: 26.972066}, {ZWL: 384.342814} ],
    ratesFromLeftInput: 1,
    ratesFromRightInput: null,
    currencyLeft: 'EUR',
    currencyRight: 'USD',
    jsonData: {},
    summOfBottomConvert: null
};

function reducer(state = initialState, action) {

    
    switch (action.type) {

        case SUMM_CHANGE:                             
            let clone = {...state};                  
            clone.ratesFromLeftInput = action.payload.summ;
            return clone;

        case CURRENCY_CHANGE:                             
            let cloneState = {...state};   
            cloneState.ratesFromRightInput = action.payload;      
            return cloneState;
        
        case LEFT_CHANGE:                             
            let cloneStateLeft = {...state};   
            cloneStateLeft.currencyLeft = action.payload;
            return cloneStateLeft;

        case RIGHT_CHANGE:                             
            let cloneStateRight = {...state};   
            cloneStateRight.currencyRight = action.payload;
            return cloneStateRight;

        case FETCH_START:
            let cloneStateForJSON = {...state};
            delete action.payload.rates.USD;
            delete action.payload.rates.GBP;
            delete action.payload.rates.EUR;
            delete action.payload.rates.RUB;
            cloneStateForJSON.jsonData = getArray(action.payload.rates);
            return cloneStateForJSON;

        case BOTTOM_CONVERTION:                          
            let cloneStateBottom = {...state};   
            cloneStateBottom.summOfBottomConvert = action.payload; 
            return cloneStateBottom;
            
        default: return state;   
    }
}

function getArray(obj){
    let arr = [];
    for (let key in obj){
    let a = { [key]: obj[key] }
      arr.push(a);
    }
    return arr;
}

export default reducer;