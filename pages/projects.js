import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment, Header } from 'semantic-ui-react'
import dayjs from 'dayjs'

import ProjectSlide from '../components/projects/project-slide'
import Timeline from '../components/projects/timeline'

const Projects = ({ list }) => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.3}
        totalSlides={2}
        style={{ width: '90%', margin: '0 auto' }}
        isIntrinsicHeight>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Projects
        </Header>
        <Timeline
          slides={2}
          size="small"
          durations={list.map((item) => dayjs(item.creation_date).format('MMM YYYY'))}
        />
        <Slider>
          {list.map((item, index) => (
            <ProjectSlide key={index} index={index} data={item} />
          ))}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

Projects.propTypes = {
  list: PropTypes.array
}

export default Projects
