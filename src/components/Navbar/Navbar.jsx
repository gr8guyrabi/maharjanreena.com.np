import { useState } from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'

import logo from '../../assets/images/logo.png'
import './Navbar.scss'

const MenuItems = ['about', 'services', 'works', 'contact']

const RenderMenuItems = ({ onClick }) => (
    MenuItems.map(item => (
        <div key={item} className="app__navbar-links_item">
            <a href={`#${item}`} onClick={onClick}>{item}</a>
        </div>
    ))
)

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo" style={ showMenu ? { position: 'fixed', top: '3rem' } : {}}>
            <img src={logo} alt="logo" />
            <p style={ showMenu ? { color: '#fff' } : {}}>Reena Maharjan</p>
        </div>
        <div className="app__navbar-links">
            <RenderMenuItems />
        </div>
        <div className="app__navbar-menu">
            {showMenu ? 
                (<AiFillCloseCircle className="app__navbar-menu_close" onClick={() => setShowMenu(false)}/>) 
            :
                (<GiHamburgerMenu  className="app__navbar-menu_hamburger" onClick={() => setShowMenu(true)} />)
            }     
            {showMenu && (
                <div className="app__navbar-menu__overlay slide-bottom">
                    <div className="app__navbar-links">
                        <RenderMenuItems onClick={() => setShowMenu(false)}/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar