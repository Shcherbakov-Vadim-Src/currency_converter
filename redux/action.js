import { CURRENCY_CHANGE, SUMM_CHANGE, LEFT_CHANGE, RIGHT_CHANGE, FETCH_START, BOTTOM_CONVERTION } from "./types";

export function getChangeOfCurrency(summ){   
    return {
            type: CURRENCY_CHANGE,
            payload: summ
    }
}

export function getChangeOfSumm(summCurrencys){   
    return {
            type: SUMM_CHANGE,
            payload: summCurrencys
    }
}  

export function getChangeOfLeft(currencyLeft){   
    return {
            type: LEFT_CHANGE,
            payload: currencyLeft
    }
}

export function getChangeOfRight(currencyRight){   
    return {
            type: RIGHT_CHANGE,
            payload: currencyRight
    }
}

export function getBottomConversion(summCurrencys){   
    return {
            type: BOTTOM_CONVERTION,
            payload: summCurrencys
    }
}

export function fetchedRates(){
    return (dispatch) => {
        fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=de173b31dbfd5f6d45869f4cdca46218`)
        .then(response => response.json()) 
        .then(data => dispatch(successFetch(data))
        .catch(err => dispatch(errorFetch(err)) 
        )
    )}
}

function successFetch(json) {
    return {
        type: FETCH_START,
        payload: json
    }
}

function errorFetch(err) {
    return console.log('error in fetch', err)  
}