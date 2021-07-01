import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {fetchedRates, getChangeOfLeft, getChangeOfCurrency, getChangeOfSumm, getChangeOfRight} from '../redux/action';

export default function ConverterClassic() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();

    const [dataRates, setRates] = useState([]);
    let [curs, getCurs] = useState();
        
    let valueRightInput = rateInMoment(state.initialRates, state.currencyRight);   
    let valueLeftInput = rateInMoment(state.initialRates, state.currencyLeft);     

    function rateInMoment(dataRates, currensyInMoment) {       
        let result = dataRates.filter((item) => {  
            return item[currensyInMoment]   
        })
        return result;
    }

    const quest = (obj) => {                                   
            for (let i=0; i < obj.length; i++){
                for (let key in obj[i]){
                  return obj[i][key];
            }
        } 
    } 
   
    const getMeCurrency = (fooRus, fooOther) => {             
        return  fooRus / fooOther;
    }


    useEffect(async () => {

        dispatch(fetchedRates());

        let arrForRate = getToRates(state.initialRates);
        // let arrForRate = getToRates(state.initialRates);   if API return 404
        setRates(arrForRate);                             
        
        let valueRightInput = rateInMoment(state.initialRates, state.currencyRight);   
        let valueLeftInput = rateInMoment(state.initialRates, state.currencyLeft);     
        let result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
        let summCurrencys = (state.ratesFromLeftInput/result).toFixed(3); 
        
        dispatch(getChangeOfCurrency(summCurrencys));
        
        function getToRates(arr){
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                for(let key in arr[i]){
                    res.push(key);
                }
            }
            return res;
        }

        getCurs(result);
    }, []);


    const handleChange = (event) => {
        
        let summ = event.target.value;    
        dispatch(getChangeOfSumm(summ));

        let clone = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
        let summCurrencys = (event.target.value/clone).toFixed(3); 
        dispatch(getChangeOfCurrency(summCurrencys));
        
    };
    
    const handleChangeLeftButton = (event) => {    

        getSelectIdLeft(event.target.value);
        let currencyLeft = event.target.value;
        dispatch(getChangeOfLeft(currencyLeft));

        let result;
        if ( state.currencyRight === event.target.value){
            let summCurrencys = state.ratesFromLeftInput;
            dispatch(getChangeOfCurrency(summCurrencys))

        } else {
            result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
            let summCurrencys = (state.ratesFromLeftInput/result).toFixed(3); 
            dispatch(getChangeOfCurrency(summCurrencys));

            getCurs(result);
        }
    };

    const handleLeftButton = (event) => {   

        getSelectId(event.target.name);
        let currencyLeft = event.target.name;
        dispatch(getChangeOfLeft(currencyLeft));

        let result;
        if ( state.currencyRight === event.target.value){
            let summCurrencys = state.ratesFromLeftInput;
            dispatch(getChangeOfCurrency(summCurrencys));

        } else {
            result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
            let summCurrencys = (state.ratesFromLeftInput/result).toFixed(3); 
            dispatch(getChangeOfCurrency(summCurrencys));

            getCurs(result);
        }
    };
    
    const handleChangeRightButton = (event) => {       
        
        getSelectId(event.target.value);
        let currencyRight = event.target.value;
        dispatch(getChangeOfRight(currencyRight));

        let result;
        if ( state.currencyLeft === event.target.value){
            let summCurrencys = state.ratesFromLeftInput;
            dispatch(getChangeOfCurrency(summCurrencys));

        } else {
            result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
            let summCurrencys = (state.ratesFromLeftInput/result).toFixed(3); 
            dispatch(getChangeOfCurrency(summCurrencys));

            getCurs(result);
        }
    };

    const handleRightButton = (event) => {            
        
        let currencyRight = event.target.name;
        dispatch(getChangeOfRight(currencyRight));

        let result;
        if ( state.currencyLeft === event.target.value){
            let summCurrencys = state.ratesFromLeftInput;
            dispatch(getChangeOfCurrency(summCurrencys));

        } else {
            result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
            let summCurrencys = (state.ratesFromLeftInput/result).toFixed(3); 
            dispatch(getChangeOfCurrency(summCurrencys));

            getCurs(result);
        }
    };

    const colorButton = 'colorButRight rightCurrency'; 
    const [selectId, getSelectId] = useState('AED');

    const colorButtonLeft= 'leftCurrency colorButLeft'; 
    const [selectIdLeft, getSelectIdLeft] = useState('AED');

    const leftCrossCur = (1 / curs).toFixed(3);  
    const rightCrossCur = (curs / 1).toFixed(3); 


    return (
        <>
            <main>
                <div className="conteiner">
                    <div className="miniConteiner">
                        <p className="miniTitle">У меня есть</p>
                        <div className="buttonMenu"> 
                            <button onClick={handleLeftButton} name="RUB" className={state.currencyLeft === "RUB" ? `buttonColor ${colorButtonLeft}` : colorButtonLeft}>RUB</button>
                            <button onClick={handleLeftButton} name="USD" className={state.currencyLeft === "USD" ? `buttonColor ${colorButtonLeft}` : colorButtonLeft}>USD</button>
                            <button onClick={handleLeftButton} name="EUR" className={state.currencyLeft === "EUR" ? `buttonColor ${colorButtonLeft}` : colorButtonLeft}>EUR</button>
                            <button onClick={handleLeftButton} name="GBP" className={state.currencyLeft === "GBP" ? `buttonColor ${colorButtonLeft}` : colorButtonLeft}>GBP</button>
                            <select onChange={handleChangeLeftButton} name="select" className={selectIdLeft === state.currencyLeft ? `buttonColor selectLeft colorButLeft` : `selectLeft colorButLeft`}>
                                {dataRates.map((item) => {
                                    return <option key={item}>{item}</option>
                                })}                                               
                            </select>
                        </div>
                        <form className="inputCont">
                            <input name="input" type="number" className="input inputLeft" value={state.ratesFromLeftInput} onChange={handleChange} />
                            <p className='scoreBoard exchangeLeft'>{`1 ${state.currencyLeft} = ${leftCrossCur} ${state.currencyRight}`}</p>                    
                        </form>
                    </div>
                    <div className="betweenDiv">
                    </div>
                    <div className="miniConteiner">
                        <p className="miniTitle">Хочу приобрести</p>
                        <div className="buttonMenu"> 
                                <button onClick={handleRightButton} name="RUB" className={state.currencyRight === "RUB" ? `buttonColor ${colorButton}` : colorButton}>RUB</button>
                                <button onClick={handleRightButton} name="USD" className={state.currencyRight === "USD" ? `buttonColor ${colorButton}` : colorButton}>USD</button>
                                <button onClick={handleRightButton} name="EUR" className={state.currencyRight === "EUR" ? `buttonColor ${colorButton}` : colorButton}>EUR</button>
                                <button onClick={handleRightButton} name="GBP" className={state.currencyRight === "GBP" ? `buttonColor ${colorButton}` : colorButton}>GBP</button>
                                <select onChange={handleChangeRightButton} name="select" className={selectId === state.currencyRight ? `selectRight colorButRight buttonColor` : `selectRight colorButRight`}> 
                                    {dataRates.map((item) => {
                                       return <option key={item}>{item}</option>
                                    })}                        
                                </select>
                        </div>
                        <div className="inputCont">
                            <input disabled="disabled" type="number" className="input inputRight" value={state.ratesFromRightInput} />
                            <p className='scoreBoard exchangeRight'>{`1 ${state.currencyRight} = ${rightCrossCur} ${state.currencyLeft}`}</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
