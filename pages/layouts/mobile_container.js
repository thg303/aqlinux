import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Button, Container, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
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
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={() => openSidebar(!sidebarOpened)}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
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
