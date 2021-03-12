import React from 'react'
import { Segment, Header, Grid, Form, TextArea, List } from 'semantic-ui-react'
import ReCAPTCHA from 'react-google-recaptcha'
import saveMessage from './api/save-message'

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isSafe, setIsSafe] = React.useState(false)

  const submiter = async () => {
    if (!isSafe) {
      return false
    }
    await saveMessage({
      name,
      email,
      message
    })
  }

  return (
    <Segment style={{ padding: '0em' }} vertical id="contact">
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Why should you send me a message?
            </Header>
            <List size="big" style={{ paddingLeft: '4em', textAlign: 'left' }}>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You found a bug or issue in this page</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>
                  You have a question about this website or my resume or projects
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You think we can help each other in a way</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You like my photos</List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name="check square outline" />
                <List.Content>You like checkboxes</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Send me a message
            </Header>
            <Grid.Row style={{ textAlign: 'left', paddingLeft: '2em', paddingRight: '2em' }}>
              <Form size="large" onSubmit={submiter}>
                <Form.Field>
                  <Form.Input
                    label="Name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e, { value }) => setName(value)}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    label="Email"
                    placeholder="for example: something@yahoo.com"
                    value={email}
                    onChange={(e, { value }) => setEmail(value)}
                  />
                </Form.Field>
                <Form.Field>
                  <TextArea
                    label="Message"
                    placeholder="What is going on..."
                    value={message}
                    onChange={(e, { value }) => setMessage(value)}
                  />
                </Form.Field>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
                  onChange={() => setIsSafe(true)}
                  onExpired={() => setIsSafe(false)}
                />

                <Form.Button style={{ marginTop: '1em' }} type="submit">
                  Send
                </Form.Button>
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Contact
