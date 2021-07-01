import React from "react";
import Header from './Header';
import ConverterModern from './ConverterModern';
import ConverterClassic from './ConverterClassic';
import { BrowserRouter, Route, Link } from "react-router-dom";


export default function Main() {
   

    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="menuContainer">
                    <h1 className="spitch">У вас есть два варианта конвертации валюты:</h1>
                    <Link className="links" to="/convertionClassic">
                        Классический
                    </Link>
                    <Link className="links" to="/convertionModern">
                        Современный
                    </Link>
                </div>
                <Route path="/convertionClassic" exact component={ConverterClassic} />
                <Route path="/convertionModern" exact component={ConverterModern} />
            </BrowserRouter>
        </>
    )
}
