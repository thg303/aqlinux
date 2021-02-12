import { Media } from './media'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react'
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
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Work</Menu.Item>
              <Menu.Item as="a">Company</Menu.Item>
              <Menu.Item as="a">Careers</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
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
