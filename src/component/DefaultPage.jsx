import {Header}  from "./header/Header";
import {Footer}  from "./footer/Footer";
import { Navigation } from "./navbar/Navigation";
import style from "./DefaultPage.module.css";
export function DefaultPage(){
    return(
        <div className={`d-flex flex-column ${style.vh100}`}>
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    )
}