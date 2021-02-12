import React from 'react'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment } from 'semantic-ui-react'

import resumeData from '../components/resume/resume-data'
import ResumeSlide from '../components/resume/resume-slide'
import Timeline from '../components/resume/timeline'

const Resume = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.3}
        totalSlides={6}
        style={{ width: '90%', margin: '0 auto' }}
        isIntrinsicHeight>
        <Timeline
          slides={6}
          size="compact"
          durations={resumeData.map((item) => item.data.shortDuration)}
        />
        <Slider>
          {resumeData.map((item, index) => (
            <ResumeSlide
              key={index}
              index={index}
              data={item.data}
              description={item.description}
              techIcons={item.techIcons}
            />
          ))}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

export default Resume
