import React, { Component } from "react";
import "./styles.css";
import "./MenuItems";
import { MenuItems } from "./MenuItems";
//const Header = () => <header id="main-Header">Count and Flix</header>;
class Header extends Component {
    render(){
        return(
            <nav className="HeaderItems">
                <h1 className="header-logo">CountAndFlix</h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item,index)=>{
                    
                    })}
                    <li><a className={item.cName}></a></li>
                </ul>
            </nav>
        )
    }
}
export default Header;


