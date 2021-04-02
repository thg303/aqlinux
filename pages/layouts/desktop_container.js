import { Media } from '@/utils/media'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Container, Menu, Segment, Visibility } from 'semantic-ui-react'
import HomepageHeading from './homepage_heading'

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = (props) => {
  const [fixed, showFixedMenu] = useState(false)

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => showFixedMenu(true)}
        onBottomPassedReverse={() => showFixedMenu(false)}>
        <Segment
          id="desktop"
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large">
            <Container>
              <Menu.Item as="a" href="#desktop" active>
                Home
              </Menu.Item>
              <Menu.Item as="a" href="#intro">
                Intro
              </Menu.Item>
              <Menu.Item as="a" href="#resume">
                Resume
              </Menu.Item>
              <Menu.Item as="a" href="#projects">
                Projects
              </Menu.Item>
              <Menu.Item as="a" href="#gallery">
                Gallery
              </Menu.Item>
              <Menu.Item as="a" href="#contact">
                Contact
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {props.children}
    </Media>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

export default DesktopContainer
