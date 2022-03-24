
import profileImg from '../../assets/images/profile.png'
import './about.scss'

const About = () => {
    return (
        <div className="app__about" id="about">
            <div className="app__about-content">
                <h1>About Me</h1>
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