import React from 'react'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment, Header } from 'semantic-ui-react'

import projectData from '../components/projects/project-data'
import ProjectSlide from '../components/projects/project-slide'
import Timeline from '../components/projects/timeline'

const Projects = () => {
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
              images={item.images}
            />
          ))}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

export default Projects
