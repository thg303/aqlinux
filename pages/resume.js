import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment, Header } from 'semantic-ui-react'

import ResumeSlide from '../components/resume/resume-slide'
import Timeline from '../components/resume/timeline'

const Resume = ({ list }) => {
  console.log('list', list)
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.3}
        totalSlides={list.length}
        style={{ width: '90%', margin: '0 auto' }}
        isIntrinsicHeight>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Resume
        </Header>
        <Timeline
          slides={list.length}
          size="compact"
          durations={list.map((item) => item.shortDuration)}
        />
        <Slider>
          {list.map((item) => (
            <ResumeSlide key={item.id} index={item.id} data={item} />
          ))}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

Resume.propTypes = {
  list: PropTypes.array
}

export default Resume
