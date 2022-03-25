import { BsCheck2Circle } from 'react-icons/bs'

import { contact, bendline } from '../../constants/images'
import './Contact.scss'

const ContactServices = ['wedding', 'SFX makeup', 'photo shoot', 'graduation']

const Contact = () => {
  return (
    <div className="app__contact" id="contact">
        <div className="app__contact-content">
            <div className="app__contact-content_header">
                <h3 className="gradient__text">choose your plan</h3>
                <h1>Get Discount up to 60% off for Limited Time</h1>
                <div className="bend__line">
                    <img src={bendline} alt="bend-line" />
                </div>
                <div className="app__contact-content_services">
                    {ContactServices?.map(service => (
                        <div className="app__contact-content_services-item">
                            <BsCheck2Circle />
                            <span>{service}</span>
                        </div>
                    ))}
                </div>
                <button>Booking Now</button>
            </div>
            <div className="app__contact-image">
                <img src={contact} alt="contact_image" />
            </div>
        </div>
    </div>
  )
}

export default Contact