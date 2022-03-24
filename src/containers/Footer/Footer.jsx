import {logo} from '../../constants/images'
import './footer.scss'

const Footer = () => {
  return (
    <div className="app__footer">
        <div className="app__footer-content">
            <div className="app__footer-content_logo">
                <img src={logo} alt="logo" />
                <p>Reena Maharjan</p>
            </div>
            <div className="app__footer-content_info">
                <div className="app__footer-content_info-links">
                    <h1>quick links</h1>
                    <div className="app__footer-content_card">
                        <a href="#about">about</a>
                    </div>
                    <div className="app__footer-content_card">
                        <a href="#services">services</a>
                    </div>
                    <div className="app__footer-content_card">
                        <a href="#contact">contact</a>
                    </div>
                </div>
                <div className="app__footer-content_info-contacts">
                    <h1>contacts</h1>
                    <div className="app__footer-content_card">
                        <h4>phone</h4>
                        <p>+62 887 0103 01</p>
                    </div>
                    <div className="app__footer-content_card">
                        <h4>Email</h4>
                        <p>random_email@gmail.com</p>
                    </div>
                </div>
                <div className="app__footer-content_info-social">
                    <h1>   </h1>
                    <div className="app__footer-content_card">
                        <h4>Instagram</h4>
                        <a href="#">reena.maharjan015</a>
                    </div>
                    <div className="app__footer-content_card">
                        <h4>WhatsApp</h4>
                        <p>+62 887 0103 01</p>
                    </div>
                </div>
                <div className="app__footer-content_info-location">
                    <h1>   </h1>
                    <div className="app__footer-content_card">
                        <h4>Location</h4>
                        <p>Dhusaldhara, Lalitpur-29, Nepal</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer