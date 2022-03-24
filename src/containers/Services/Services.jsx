
import { collection1, collection2, collection3 } from '../../constants/images'
import './services.scss'

const Services = () => {
  return (
    <div className="app__services" id="services">
        <div className="app__services-content">
            <div className="app__services-content_text">
                <h3>new collection</h3>
                <h1>bring new makeup trends</h1>
                <p>Lorem ipsum dolor sit amet, asdf asd fasd fasdf af lore Lorem ipsum dolor sit amet,consectetur adipiscing elit. Augue elit interdum ante purus gravida.</p>
                <a className="gradient__text" href="#services">View More</a>
            </div>
            <div className="app__services-content_gallery">
                <div className="app__services-content_gallery-image">
                    <img src={collection1} alt="img" />
                    <div className="app__services__price-menu">
                        <h2 className="gradient__text">Photo shoot</h2>
                        <p>$120/pax</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.</p>
                </div>
                <div className="app__services-content_gallery-image">
                    <img src={collection2} alt="img" />
                    <div className="app__services__price-menu">
                        <h2 className="gradient__text">Graduation</h2>
                        <p>$120/pax</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.</p>
                </div>
                <div className="app__services-content_gallery-image">
                    <img src={collection3} alt="img" />
                    <div className="app__services__price-menu">
                        <h2 className="gradient__text">Wedding</h2>
                        <p>$120/pax</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas felis, in aliquam.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services