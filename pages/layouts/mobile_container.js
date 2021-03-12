import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import HomepageHeading from './homepage_heading'
import { Media } from './media'

const MobileContainer = (props) => {
  const [sidebarOpened, openSidebar] = useState(false)

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => openSidebar(false)}
          vertical
          visible={sidebarOpened}>
          <Menu.Item as="a" href="#mobile" active>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="#intro">Intro</Menu.Item>
          <Menu.Item as="a" href="#resume">Resume</Menu.Item>
          <Menu.Item as="a" href="#projects">Projects</Menu.Item>
          <Menu.Item as="a" href="#gallery">Gallery</Menu.Item>
          <Menu.Item as="a" href="#contact">Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            id="mobile"
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => openSidebar(!sidebarOpened)}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

export default MobileContainer
