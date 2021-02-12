import PropTypes from 'prop-types'
import { Dot } from 'pure-react-carousel'
import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const Timeline = ({ slides, size, durations }) => {
  console.log(slides, size, durations)
  return (
    <Container textAlign="center" style={{ marginBottom: '1.2em' }}>
      {[...Array(slides).keys()].map((slide, index) => (
        <Button as={Dot} size="mini" key={slide} slide={slide}>
          {durations[index]}
        </Button>
      ))}
    </Container>
  )
}

Timeline.defaultProps = {
  size: 'mini'
}

Timeline.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string,
  durations: PropTypes.array
}

export default Timeline
