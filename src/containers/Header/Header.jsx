
import coverImg from '../../assets/images/cover.png'
import './Header.scss'

const Header = () => {
    return (
        <div className="app__header">
            <div className="app__header-heading">
                    <div className="app__header-heading_text">
                        <h1 className="gradient__text">PROFESSIONAL MAKEUP ARTIST</h1>
                        <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim donec semper pellentesque vitae. Cras ac fringilla suspendisse mi velit quis. Odio eu posuere.
                        </p>
                        <button className="custom__button">Booking Now</button>
                    </div>
                    <div className="app__header-heading_image">
                            <img src={coverImg} alt="cover_image" />
                    </div>
            </div>
        </div>
    )
}

export default Header