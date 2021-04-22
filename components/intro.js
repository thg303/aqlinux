import React from 'react'
import { Button, Grid, Header, Segment, Embed } from 'semantic-ui-react'

const Intro = () => (
  <Segment id="intro" style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Ali who?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            My last name is Ghanavatian. Yes, it&apos;s difficult... you can call me Ali.
          </p>
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
          <Embed id="3txvxtTO-Hg" placeholder="/video-cover.png" source="youtube" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button
            size="huge"
            onClick={() =>
              window.open(
                `${process.env.NEXT_PUBLIC_CMS_HOST}/uploads/Ali_Ghanavatian_resume_92d9db95cc.pdf`
              )
            }>
            Download Resume
          </Button>
          <p style={{ marginTop: '0.5em', fontSize: '1.5em' }}>it&apos;s a nearly 50Kb PDF file</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Intro
