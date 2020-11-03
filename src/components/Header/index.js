import React, { Component } from "react";
import "./styles.css";
import "./MenuItems.js";
import { MenuItems } from "./MenuItems";
import LogoHeader from '../../assets/logoheader.svg';
//const Header = () => <header id="main-Header">Count and Flix</header>;
class Header extends Component {
    state ={ clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="HeaderItems">
                <h1 className="header-logo">
                    <img src={LogoHeader} alt="LogoCountflix"></img>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.url} >
                            {item.title}
                            </a>
                        </li>
                    )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Header;

