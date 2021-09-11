import React,{useState} from 'react'
import '../style/header.css'
import logo from '../images/logo.png'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
function Header() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    console.log(click)
    return (
        <div className="header">
            <div className="logo_img">
               <p>8-BIT APES</p>
            </div>
            <div className="menu_icon" onClick={handleClick}>
           {click ? <ImCross className="menu_opne_close" size="30"/> : <FiMenu className="menu_open_close" size="30"/>}
            </div>
            <div className={click ? 'links' : 'nan-links'}>
            <ul>
            <li><a className="one" onClick={()=> window.open("https://twitter.com/8bitapes", "_blank")}>
                <FaDiscord className="all_icon" size="40"/>
                   </a> 
                </li>
                <li><a className="one" onClick={()=> window.open("https://twitter.com/8bitapes", "_blank")}>
                <AiFillTwitterSquare className="all_icon" size="40"/>
                   </a> 
                </li>
                <li>
                <div class="dropdown">
  <button class="dropbtn">CONNECT WALLET</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header