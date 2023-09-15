import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineCardDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectTimelineCardDetails

  console.log(projectUrl)

  return (
    <div className="project-time-line-card-container">
      <img className="project-time-line-img" src={imageUrl} alt="project" />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-calender-icon-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
