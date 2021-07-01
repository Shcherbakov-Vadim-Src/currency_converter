import React from "react";


export default function Header() {

    return (
        <>
            <div className="loadingBar">
                <div className="loadingScreen">
                    <p className="loadRow">Loading</p>
                </div> 
            </div>    
            <header>
                <div className="header">  
                    <p className="img">BANK</p>
                </div>           
                <p className="headerMenu">БАНК</p>
                <p className="headerMenu">БИЗНЕС</p>
                <p className="headerMenu">ИНВЕСТИЦИИ</p>
                <p className="headerMenu">СТРАХОВАНИЕ</p>
                <p className="headerMenu">МОБАЙЛ</p>
                <p className="headerMenu">ПУТЕШЕСТВИЯ</p>
                <p className="headerMenu">РАЗВЛЕЧЕНИЯ</p>
                <p className="logIn">ВОЙТИ</p>
            </header>
            <h1 className="title">Конвертер валют онлайн</h1>
        </>
    )
}