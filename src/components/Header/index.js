import React, { Component } from "react";
import "./styles.css";
import "./MenuItems.js";
import { MenuItems } from "./MenuItems";
import LogoHeader from '../../assets/logoheader.svg';
import { Link } from "react-router-dom";
import {userLogout} from '../../UserApi';
//const Header = () => <header id="main-Header">Count and Flix</header>;
class Header extends Component {
    state ={ clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="HeaderItems">
                <Link to="/" className="header-logo">
                    <img src={LogoHeader} alt="LogoCountflix"></img>
                </Link>
                <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                    <li>
                        <a className={MenuItems[0].cName} href={MenuItems[0].url}>{MenuItems[0].title}</a>
                    </li>
                    <li onClick={userLogout}>
                        <a className={MenuItems[1].cName} href={MenuItems[1].url}>{MenuItems[1].title}</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;