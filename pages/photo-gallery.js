import React from 'react'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment, Header } from 'semantic-ui-react'

import projectData from '../components/projects/project-data'
import ProjectSlide from '../components/projects/project-slide'
import Timeline from '../components/projects/timeline'

const PhotoGallery = () => {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.3}
        totalSlides={6}
        style={{ width: '90%', margin: '0 auto' }}
        isIntrinsicHeight>
        <Header as="h3" style={{ fontSize: '2em' }}>
          PhotoGallery
        </Header>
        <Timeline
          slides={6}
          size="compact"
          durations={projectData.map((item) => item.data.shortDuration)}
        />
        <Slider>
          {projectData.map((item, index) => (
            <ProjectSlide
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

export default PhotoGallery
