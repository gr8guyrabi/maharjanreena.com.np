
import coverImg from '../../assets/images/cover.png'
import profileImg from '../../assets/images/profile.png'
import './About.scss'

const About = () => {
    return (
        <div className="app__about">
                <div className="app__about-heading">
                        <div className="app__about-heading_text">
                            <h1 className="gradient__text">PROFESSIONAL MAKEUP ARTIST</h1>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit enim donec semper pellentesque vitae. Cras ac fringilla suspendisse mi velit quis. Odio eu posuere.
                            </p>
                            <button className="custom__button">Booking Now</button>
                        </div>
                        <div className="app__about-heading_image">
                                <img src={coverImg} alt="cover_image" />
                        </div>
                </div>
                <div className="app__about-content">
                    <h1>About Me</h1>
                    {/* <div className="app__about-content_title">
                    </div> */}
                    <div className="app__about-content_description">
                        <img src={profileImg} alt="profile_image" />
                        <p>
                            Hi. I’m Thania Certified Pro Artistic Makeup Lasalle College International. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sagittis eget semper semper. Euismod facilisi tristique duis maecenas id id. 
                            Cum ipsum, pellentesque volutpat id. Proin augue nunc, aliquet vel suspendisse non consequat dignissim tempus. Nibh etiam vitae, cum fusce eget. Amet donec pellentesque lorem integer duis bibendum bibendum ac imperdiet.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default About