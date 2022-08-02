import React from "react";
import './style.scss'

function Main(){
    return (
        <>
        <nav>
            <div className="nav__content container">
                <h2 className="nav__title">My-Contact</h2>
                <div className="nav__search">
                    <input placeholder="Поиск по email" type="text" className="nav__input" />
                    <button className="nav__btn"><img src="/images/search__icon.svg" alt="" /></button>
                </div>
            </div>
        </nav>

        
        </>
    )
}
export default Main