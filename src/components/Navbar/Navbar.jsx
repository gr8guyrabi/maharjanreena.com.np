
import logo from '../../assets/images/logo.png'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="app__navbar">
        <div className="app__navbar-logo">
            <img src={logo} alt="logo" />
            <p>Reena Maharjan</p>
        </div>
        <div className="app__navbar-menu">
            <div className="app__navbar-menu_item">
                <a href="#about">About</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#services">Services</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#works">Works</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#contact">Contact</a>
            </div>
        </div>
        {/* <div className="app__navbar-mobile">
            <div className="app__navbar-menu_item">
                <a href="#about">About</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#services">Services</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#works">Works</a>
            </div>
            <div className="app__navbar-menu_item">
                <a href="#contact">Contact</a>
            </div>
        </div> */}
    </div>
  )
}

export default Navbar