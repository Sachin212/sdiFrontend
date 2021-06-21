import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown }from 'semantic-ui-react'
import sdiLogo from '../svgs/sdiLogo.svg'
import sdiHomeLogo from '../svgs/sdiHomeLogo.svg'

function Navbar(){
    var username = JSON.parse(localStorage.getItem('userdata'));

    const handleSideBar = () =>{
        let x = document.getElementById("sdi_nav");
        if(x.className === "sdi_navbar"){
            x.className += " sdi_navbar2";
        }else{
            x.className = "sdi_navbar";
        }
        return(
        <Menu secondary >
            <Dropdown text='Shopping' pointing className='link item'>
            <Dropdown.Menu>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </Menu>
        )
    };   

    return(
        <>
        <header className="sdi_navbar" id="sdi_nav">
            <div className="sdi_bar" onClick={() => handleSideBar()}>
                <div className="sdi_bar1"></div>
                <div className="sdi_bar2"></div>
                <div className="sdi_bar3"></div>
            </div>

            <Link to="/" className="sdi_navbar"><img src={sdiHomeLogo} alt="img"/></Link>
            {username != null && <NavLink to="/logout" activeClassName="is-active" className="sdi_navbar1">Logout</NavLink> }
            {/* {username == null && <NavLink to="/login" activeClassName="is-active" className="sdi_navbar1" >Login</NavLink> } */}
            <NavLink to="/blogs" id="sdi_nav_last" activeClassName="is-active" className="sdi_navbar1">Blogs</NavLink>
            <NavLink to="/about" activeClassName="is-active" className="sdi_navbar1">About</NavLink>
            <NavLink to="/" exact activeClassName="is-active" className="sdi_navbar1">Home</NavLink>
            <svg className="home_svg1" viewBox="0 0 593 1512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M285.111 407.353C-136.561 582.299 2.62679 950.518 117.808 1076.15C117.808 1076.15 803.426 1869.9 820.293 1315.07C837.16 760.243 769.692 -64 769.692 -64L153.821 -44.0062C321.426 -35.1756 696.543 236.656 285.111 407.353Z" fill="#B2FFF7"/>
            </svg>
        </header>
        </>
    )
}

export default Navbar;