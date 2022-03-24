
import { work1, work2, work3, work4, work5, photoshoot1, photoshoot2, bridal,  } from '../../constants/images'
import './Works.scss'

const RenderWork = ({ img, title }) => (
    <div className="app__works-gallery_item">
        <img src={img} alt="work" />
        <p>{title}</p>
    </div>
)

const objWorks = [
    { 
        title: "Prewed",
        img: work1
    },
    { 
        title: "Prewed",
        img: work2
    },
    { 
        title: "Prewed",
        img: work3
    },
    { 
        title: "The 90's",
        img: work4
    },
    { 
        title: "Prewed",
        img: work5
    },
    { 
        title: "Bridal",
        img: bridal
    },
    { 
        title: "Photo Shoot",
        img: photoshoot1
    },
    { 
        title: "Photo Shoot",
        img: photoshoot2
    },
]

const Works = () => {
  return (
    <div className="app__works" id="works">
        <div className="app__works-heading">
            <h1>my works</h1>
            <a href="#works" className="gradient__text">See All</a>
        </div>
        <div className="app__works-gallery">
            {objWorks?.map( (work, index) => (
                <RenderWork key={work.title + index} {...work}/>
            ))}
        </div>
    </div>
  )
}

export default Works