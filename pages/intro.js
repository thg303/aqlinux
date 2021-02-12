import React from 'react'
import { Button, Grid, Header, Segment } from 'semantic-ui-react'

const Intro = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Ali who?
          </Header>
          <p style={{ fontSize: '1.33em' }}>My last name is difficult, you can call me Ali.</p>
          <Header as="h3" style={{ fontSize: '2em' }}>
            What&apos;s in the video?
          </Header>
          <p style={{ fontSize: '1.33em' }}>Well it&apos;s me, introducing myself!</p>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Why do I code?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            I love computers, I love make them obey us as human race and use them to serve us
            better.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0_A9cax-A88"
            frameBorder="0"
            title="my introduction video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge">Download Resume</Button>
          <p style={{ marginTop: '0.5em', fontSize: '1.5em' }}>it&apos;s a nearly 2Mb PDF file</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Intro
