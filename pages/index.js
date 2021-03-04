import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Divider, Grid, Header, Image, List, Segment } from 'semantic-ui-react'
import ResponsiveContainer from './layouts/responsive_container'
import Intro from './intro'
import Resume from './resume'
import Projects from './projects'
import PhotoGallery from './photo-gallery'
import loadPhotoGallery from './api/load-photo-gallery'
import loadProjects from './api/load-projects'
import loadResumes from './api/load-resumes'

import 'pure-react-carousel/dist/react-carousel.es.css'

const HomepageLayout = ({ photos, projects, resumes }) => {
  return (
    <ResponsiveContainer>
      <Intro />
      <Resume list={resumes} />
      <Projects list={projects} />
      <PhotoGallery photos={photos} />

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                What a Company
              </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                I should not have gone with their competitor.
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Breaking The Grid, Grabs Your Attention
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Instead of focusing on content creation and hard work, we have learned how to master the
            art of doing nothing by providing massive amounts of whitespace and generic content that
            can seem massive, monolithic and worth your attention.
          </p>
          <Button as="a" size="large">
            Read More
          </Button>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
            <a href="http://google.com/">Case Studies</a>
          </Divider>

          <Header as="h3" style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content,
            but its really true. It took years of gene splicing and combinatory DNA research, but
            our bananas can really dance.
          </p>
          <Button as="a" size="large">
            Im Still Quite Interested
          </Button>
        </Container>
      </Segment>

      <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Religious Ceremonies</List.Item>
                  <List.Item as="a">Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Banana Pre-Order</List.Item>
                  <List.Item as="a">DNA FAQ</List.Item>
                  <List.Item as="a">How To Access</List.Item>
                  <List.Item as="a">Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Footer Header
                </Header>
                <p>
                  Extra space for a call to action inside the footer that could help re-engage
                  users.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </ResponsiveContainer>
  )
}

HomepageLayout.propTypes = {
  photos: PropTypes.array,
  projects: PropTypes.array,
  resumes: PropTypes.array
}

export async function getStaticProps() {
  const photoGallery = await loadPhotoGallery()
  const projects = await loadProjects()
  const resumes = await loadResumes()

  return {
    props: {
      photos: photoGallery,
      projects: projects,
      resumes: resumes
    }
  }
}

export default HomepageLayout
