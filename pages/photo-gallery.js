import React from 'react'
import PropTypes from 'prop-types'
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { Segment, Header } from 'semantic-ui-react'

import PhotoWindow from '../components/photo-gallery/photo-window'
import Navigator from '../components/photo-gallery/navigator'

const PhotoGallery = ({ photos }) => {
  return (
    <Segment id="gallery" style={{ padding: '8em 0em' }} vertical>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={0.3}
        totalSlides={photos.length}
        style={{ width: '90%', margin: '0 auto' }}
        isIntrinsicHeight>
        <Header as="h3" style={{ fontSize: '2em' }}>
          PhotoGallery
        </Header>
        <Navigator slides={photos.length} size="small" />
        <Slider>
          {photos.map((item, index) => (
            <PhotoWindow key={index} index={index} photos={item} />
          ))}
        </Slider>
      </CarouselProvider>
    </Segment>
  )
}

PhotoGallery.propTypes = {
  photos: PropTypes.array
}

export default PhotoGallery
