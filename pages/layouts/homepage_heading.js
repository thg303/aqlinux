import PropTypes from 'prop-types'
import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      size="medium"
      centered
      src="/ali_ghanavatian.png"
      style={{ marginTop: mobile ? '1.5em' : '3em' }}
    />
    <Header
      as="h1"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.25em' : '0.5em'
      }}>
      Ali Ghanavatian
      <Header.Subheader
        inverted
        style={{
          fontSize: mobile ? '0.5em' : '0.7em',
          fontWeight: 'normal',
          marginBottom: mobile ? '1.5em' : '3em'
        }}>
        a husband &amp; software developer with attitude
      </Header.Subheader>
    </Header>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomepageHeading
