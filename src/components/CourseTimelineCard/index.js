import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseTimelineCardDetails} = props
  const {
    courseTitle,
    duration,
    description,
    tagsList,
  } = courseTimelineCardDetails

  const tagListItems = () =>
    tagsList.map(each => (
      <li className="tag-list-item" key={each.id}>
        <p>{each.name}</p>
      </li>
    ))

  return (
    <div className="course-timeline-card-container">
      <div className="title-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="time-duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tag-list-container">{tagListItems()}</ul>
    </div>
  )
}

export default CourseTimelineCard
