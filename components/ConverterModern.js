import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getBottomConversion} from '../redux/action';

export default function ConverterModern() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    
    const [summ, setSumm] = useState();
    const [baseCur, setBaseCur] = useState();
    const [subCur, setSubCur] = useState();

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
        }} 
    } 

    const getMeCurrency = (fooRus, fooOther) => {            
        return  fooRus / fooOther;
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = [...formData.values()];

        if (data.length === 0){
            alert('Поле ввода не может быть пустым')
        }

        let arrayForCheck = data.pop().split(' ');
        
        if (typeof(Number(arrayForCheck[0])) !== 'number'){
            alert('Первой необходимо ввести сумму конвертации')
        } else if (arrayForCheck.length > 4){
            alert('Верный формат ввода данных: "15 usd in rub"')
        } else if (Number(arrayForCheck[1]) === 'number' || Number(arrayForCheck[3]) === 'number' || arrayForCheck[1].length !== 3 || arrayForCheck[3].length !== 3 ){
            alert('Верный формат ввода данных: "15 usd in rub"')
        } else {

            setSumm(arrayForCheck[0]);
            setBaseCur(arrayForCheck[1].toUpperCase());
            setSubCur(arrayForCheck[3].toUpperCase());
                    
            let valueRightInput = rateInMoment(state.initialRates, arrayForCheck[3].toUpperCase());   
            let valueLeftInput = rateInMoment(state.initialRates, arrayForCheck[1].toUpperCase());     
            let result = getMeCurrency(quest(valueLeftInput), quest(valueRightInput));
            let summCurrencys = (arrayForCheck[0]/result).toFixed(3); 
            
            dispatch(getBottomConversion(summCurrencys))
        }
        event.target.reset();
    };


    return (
        <>
            <div className="converter">
                <h3 className="modernSpitch">Пожалуйста, введите запрос и нажмите "Результат"</h3>
                <div className="box">
                    <form onSubmit={handlerSubmit} className="form">
                        <input className="inputForConvertion" placeholder="15 usd in rub" name="input" />
                        <button type="submit" className="buttonSuccess">Результат</button>
                    </form>
                    {state.summOfBottomConvert === null ? null : <p className="paragraphOfResult">{`${summ} ${baseCur} in ${subCur} = ${state.summOfBottomConvert} ${subCur}`}</p>}
                </div> 
            </div>    
        </>
    )
}