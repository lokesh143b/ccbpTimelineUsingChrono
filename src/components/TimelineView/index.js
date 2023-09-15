import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="chrono-container">
      <h1 className="journey-heading">
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          let result = ''
          if (each.categoryId === 'COURSE') {
            result = (
              <CourseTimelineCard
                key={each.id}
                courseTimelineCardDetails={each}
              />
            )
          } else {
            result = (
              <ProjectTimelineCard
                key={each.id}
                projectTimelineCardDetails={each}
              />
            )
          }

          return result
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
