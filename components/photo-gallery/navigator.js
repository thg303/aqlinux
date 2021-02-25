import PropTypes from 'prop-types'
import { Dot } from 'pure-react-carousel'
import React from 'react'
import { Button, Container } from 'semantic-ui-react'

const Navigator = ({ slides, size }) => {
  return (
    <Container textAlign="center" style={{ marginBottom: '1.2em' }}>
      {[...Array(slides).keys()].map((slide) => (
        <Button as={Dot} size={size} key={slide} slide={slide} />
      ))}
    </Container>
  )
}

Navigator.defaultProps = {
  size: 'mini'
}

Navigator.propTypes = {
  slides: PropTypes.number.isRequired,
  size: PropTypes.string
}

export default Navigator
